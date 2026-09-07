/**
 * Timer Engine - Daily Task & Goals Smart Time System
 * Mengendalikan Pemasa Fokus Langsung (Stopwatch / Pomodoro), Web Audio Chime, dan penjejakan masa sebenar.
 */

const Timer = {
  activeItem: null, // Task atau Goal yang sedang difokuskan
  itemType: 'task', // 'task' atau 'goal'
  mode: 'countdown', // 'countdown' atau 'stopwatch'
  totalSeconds: 25 * 60, // Sasaran masa dalam saat
  remainingSeconds: 25 * 60, // Baki masa
  elapsedSeconds: 0, // Masa yang telah berlalu
  isRunning: false,
  timerInterval: null,
  onTickCallbacks: [],
  onCompleteCallbacks: [],

  /**
   * Menginisialisasi sistem bunyi menggunakan Web Audio API
   */
  playChime() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();

      const playTone = (freq, startTime, duration) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + startTime);

        // Lembutkan bunyi dengan envelope attack & decay
        gain.gain.setValueAtTime(0, ctx.currentTime + startTime);
        gain.gain.linearRampToValueAtTime(0.3, ctx.currentTime + startTime + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + startTime + duration);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(ctx.currentTime + startTime);
        osc.stop(ctx.currentTime + startTime + duration);
      };

      // Tiga nada melodi yang menenangkan (C5 -> E5 -> G5)
      playTone(523.25, 0.0, 0.8);
      playTone(659.25, 0.2, 0.8);
      playTone(783.99, 0.4, 1.2);
    } catch (e) {
      console.warn('Audio API tidak aktif atau disekat oleh pelayar:', e);
    }
  },

  /**
   * Menetapkan item yang hendak difokuskan
   * @param {Object} item - Objek task atau goal
   * @param {'task'|'goal'} type 
   * @param {'countdown'|'stopwatch'} mode 
   */
  setItem(item, type = 'task', mode = 'countdown') {
    this.pause();
    this.activeItem = item;
    this.itemType = type;
    this.mode = mode;

    let durationMins = 25; // lalai
    if (type === 'task') {
      durationMins = item.durationMinutes || 25;
    } else if (type === 'goal') {
      durationMins = item.allocatedMinutes || 30;
    }

    this.totalSeconds = Math.max(60, durationMins * 60);
    this.remainingSeconds = this.totalSeconds;
    this.elapsedSeconds = 0;
    this.notifyTick();
  },

  /**
   * Memulakan pemasa
   */
  start() {
    if (this.isRunning) return;
    this.isRunning = true;

    this.timerInterval = setInterval(() => {
      if (this.mode === 'countdown') {
        if (this.remainingSeconds > 0) {
          this.remainingSeconds--;
          this.elapsedSeconds++;
          this.notifyTick();
        } else {
          // Masa tamat
          this.pause();
          this.playChime();
          this.notifyComplete();
        }
      } else {
        // Mod Stopwatch
        this.elapsedSeconds++;
        this.notifyTick();
      }
    }, 1000);

    this.notifyTick();
  },

  /**
   * Menjeda pemasa
   */
  pause() {
    this.isRunning = false;
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
    this.notifyTick();
  },

  /**
   * Reset pemasa
   */
  reset() {
    this.pause();
    this.remainingSeconds = this.totalSeconds;
    this.elapsedSeconds = 0;
    this.notifyTick();
  },

  /**
   * Selesaikan tugasan semasa pemasa dan simpan masa sebenar
   */
  finishCurrentSession() {
    this.pause();
    if (!this.activeItem) return null;

    const minutesSpent = Math.max(1, Math.round(this.elapsedSeconds / 60));
    
    // Kemas kini masa sebenar pada item
    if (this.itemType === 'task') {
      const tasks = window.Storage.getTasks();
      const idx = tasks.findIndex(t => t.id === this.activeItem.id);
      if (idx !== -1) {
        tasks[idx].actualMinutesSpent = (tasks[idx].actualMinutesSpent || 0) + minutesSpent;
        tasks[idx].completed = true;
        window.Storage.saveTasks(tasks);
        window.Storage.addHistoryLog({
          type: 'task',
          id: tasks[idx].id,
          title: tasks[idx].title,
          minutesSpent
        });
      }
    } else if (this.itemType === 'goal') {
      const goals = window.Storage.getGoals();
      const idx = goals.findIndex(g => g.id === this.activeItem.id);
      if (idx !== -1) {
        goals[idx].actualMinutesSpent = (goals[idx].actualMinutesSpent || 0) + minutesSpent;
        if (goals[idx].actualMinutesSpent >= goals[idx].allocatedMinutes) {
          goals[idx].completedToday = true;
          goals[idx].streakDays = (goals[idx].streakDays || 0) + 1;
        }
        window.Storage.saveGoals(goals);
        window.Storage.addHistoryLog({
          type: 'goal',
          id: goals[idx].id,
          title: goals[idx].title,
          minutesSpent
        });
      }
    }

    this.playChime();
    return minutesSpent;
  },

  /**
   * Format saat ke rentetan MM:SS atau HH:MM:SS
   */
  formatTime(seconds) {
    const s = Math.max(0, Math.floor(seconds));
    const hrs = Math.floor(s / 3600);
    const mins = Math.floor((s % 3600) / 60);
    const secs = s % 60;

    if (hrs > 0) {
      return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  },

  /**
   * Langgan kepada kemas kini setiap saat
   */
  onTick(callback) {
    this.onTickCallbacks.push(callback);
  },

  /**
   * Langgan bila masa habis
   */
  onComplete(callback) {
    this.onCompleteCallbacks.push(callback);
  },

  notifyTick() {
    this.onTickCallbacks.forEach(cb => cb(this.getState()));
  },

  notifyComplete() {
    this.onCompleteCallbacks.forEach(cb => cb(this.getState()));
  },

  getState() {
    const displaySeconds = this.mode === 'countdown' ? this.remainingSeconds : this.elapsedSeconds;
    const progress = this.totalSeconds > 0 
      ? (this.mode === 'countdown' 
          ? (1 - this.remainingSeconds / this.totalSeconds) 
          : Math.min(1, this.elapsedSeconds / this.totalSeconds))
      : 0;

    return {
      item: this.activeItem,
      itemType: this.itemType,
      mode: this.mode,
      formattedTime: this.formatTime(displaySeconds),
      totalSeconds: this.totalSeconds,
      remainingSeconds: this.remainingSeconds,
      elapsedSeconds: this.elapsedSeconds,
      isRunning: this.isRunning,
      progress: Math.min(1, Math.max(0, progress))
    };
  }
};

if (typeof window !== 'undefined') {
  window.Timer = Timer;
}
