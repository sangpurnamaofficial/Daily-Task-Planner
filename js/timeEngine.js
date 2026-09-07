/**
 * Time Engine - Daily Task & Goals Smart Time System
 * Mengendalikan semua pengiraan masa, durasi, auto-jadual, dan kapasiti harian.
 */

const TimeEngine = {
  /**
   * Menukar format masa "HH:MM" (24-jam) kepada jumlah minit dari 00:00
   * @param {string} timeStr - Cth: "08:30", "14:15"
   * @returns {number} Minit dari tengah malam
   */
  timeToMinutes(timeStr) {
    if (!timeStr || typeof timeStr !== 'string') return 0;
    const parts = timeStr.split(':');
    if (parts.length < 2) return 0;
    const hours = parseInt(parts[0], 10) || 0;
    const minutes = parseInt(parts[1], 10) || 0;
    return (hours * 60) + minutes;
  },

  /**
   * Menukar minit dari tengah malam kembali ke format "HH:MM"
   * @param {number} totalMinutes 
   * @returns {string} Cth: "08:30"
   */
  minutesToTime(totalMinutes) {
    let normalized = Math.floor(totalMinutes) % 1440;
    if (normalized < 0) normalized += 1440;
    const hours = Math.floor(normalized / 60);
    const minutes = normalized % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
  },

  /**
   * Menukar format masa kepada paparan 12-jam yang mesra pengguna (AM/PM)
   * @param {string|number} timeInput - "HH:MM" atau jumlah minit
   * @returns {string} Cth: "8:30 AM", "2:15 PM"
   */
  formatTime12Hour(timeInput) {
    let minutes = typeof timeInput === 'number' ? timeInput : this.timeToMinutes(timeInput);
    let normalized = Math.floor(minutes) % 1440;
    if (normalized < 0) normalized += 1440;
    let hours = Math.floor(normalized / 60);
    const mins = normalized % 60;
    const period = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    if (hours === 0) hours = 12;
    return `${hours}:${String(mins).padStart(2, '0')} ${period}`;
  },

  /**
   * Format durasi minit kepada teks BM ringkas dan jelas
   * @param {number} minutes 
   * @returns {string} Cth: "1j 30m", "45m", "2 jam"
   */
  formatDuration(minutes) {
    if (typeof window !== 'undefined' && window.I18N) {
      return window.I18N.formatDuration(minutes);
    }
    const mins = Math.max(0, Math.round(minutes));
    if (mins === 0) return '0 minit';
    const hours = Math.floor(mins / 60);
    const remainingMins = mins % 60;

    if (hours > 0 && remainingMins > 0) {
      return `${hours}j ${remainingMins}m`;
    } else if (hours > 0) {
      return `${hours} jam`;
    } else {
      return `${remainingMins} minit`;
    }
  },

  /**
   * Kira durasi yang perlu diluangkan antara waktu mula dan waktu tamat
   * @param {string} startTime - "HH:MM"
   * @param {string} endTime - "HH:MM"
   * @returns {{ minutes: number, formatted: string, isNextDay: boolean }}
   */
  calculateDuration(startTime, endTime) {
    if (!startTime || !endTime) {
      return { minutes: 0, formatted: '0 minit', isNextDay: false };
    }

    const startMins = this.timeToMinutes(startTime);
    const endMins = this.timeToMinutes(endTime);

    let diff = endMins - startMins;
    let isNextDay = false;

    // Jika waktu tamat lebih awal daripada waktu mula, ia merentasi tengah malam
    if (diff < 0) {
      diff += 1440;
      isNextDay = true;
    }

    return {
      minutes: diff,
      formatted: this.formatDuration(diff),
      isNextDay: isNextDay
    };
  },

  /**
   * Mengira waktu tamat berdasarkan waktu mula dan durasi yang dimasukkan
   * @param {string} startTime - "HH:MM"
   * @param {number} durationMinutes 
   * @returns {string} "HH:MM"
   */
  calculateEndTime(startTime, durationMinutes) {
    const startMins = this.timeToMinutes(startTime);
    const endMins = (startMins + Math.max(0, durationMinutes)) % 1440;
    return this.minutesToTime(endMins);
  },

  /**
   * Pengiraan matlamat harian (Goal Breakdown)
   * Berapa masa perlu dihabiskan hari ini berdasarkan sasaran mingguan atau bulanan
   * @param {number} weeklyTargetHours - Jam sasaran seminggu
   * @param {number} daysPerWeek - Bilangan hari komitmen (cth: 5 atau 7 hari)
   * @returns {{ dailyMinutes: number, dailyFormatted: string }}
   */
  calculateDailyGoalCommitment(weeklyTargetHours, daysPerWeek = 5) {
    const activeDays = Math.max(1, Math.min(7, daysPerWeek));
    const totalWeeklyMinutes = (weeklyTargetHours || 0) * 60;
    const dailyMins = Math.round(totalWeeklyMinutes / activeDays);

    return {
      dailyMinutes: dailyMins,
      dailyFormatted: this.formatDuration(dailyMins)
    };
  },

  /**
   * Analisis Kapasiti Harian (Day Capacity Analysis)
   * Mengira peruntukan masa berbanding waktu bangun & waktu tidur
   * @param {string} dayStart - Cth: "07:00"
   * @param {string} dayEnd - Cth: "23:00"
   * @param {Array} tasks 
   * @param {Array} goals 
   */
  calculateDailyBudget(dayStart, dayEnd, tasks = [], goals = []) {
    const startMins = this.timeToMinutes(dayStart || "07:00");
    const endMins = this.timeToMinutes(dayEnd || "23:00");
    let availableMinutes = endMins - startMins;
    if (availableMinutes <= 0) availableMinutes += 1440;

    // Kira jumlah minit tugasan
    const taskMinutes = tasks.reduce((sum, t) => sum + (t.durationMinutes || 0), 0);
    // Kira jumlah minit matlamat
    const goalMinutes = goals.reduce((sum, g) => sum + (g.allocatedMinutes || 0), 0);
    const totalPlannedMinutes = taskMinutes + goalMinutes;

    const remainingBufferMinutes = availableMinutes - totalPlannedMinutes;
    const isOverbooked = remainingBufferMinutes < 0;
    const usagePercentage = Math.min(100, Math.round((totalPlannedMinutes / availableMinutes) * 100)) || 0;

    return {
      availableMinutes,
      availableFormatted: this.formatDuration(availableMinutes),
      taskMinutes,
      taskFormatted: this.formatDuration(taskMinutes),
      goalMinutes,
      goalFormatted: this.formatDuration(goalMinutes),
      totalPlannedMinutes,
      totalPlannedFormatted: this.formatDuration(totalPlannedMinutes),
      remainingBufferMinutes: Math.abs(remainingBufferMinutes),
      remainingFormatted: this.formatDuration(Math.abs(remainingBufferMinutes)),
      isOverbooked,
      usagePercentage
    };
  },

  /**
   * Mengesan jika terdapat pertindihan masa (overlap) antara tugasan
   * @param {Array} items - Senarai task/goal dengan { startTime, endTime, id, title }
   * @returns {Array} Senarai pasangan yang bertindih
   */
  findOverlaps(items) {
    const validItems = items.filter(it => it.startTime && it.endTime);
    const overlaps = [];

    for (let i = 0; i < validItems.length; i++) {
      for (let j = i + 1; j < validItems.length; j++) {
        const a = validItems[i];
        const b = validItems[j];

        const aStart = this.timeToMinutes(a.startTime);
        let aEnd = this.timeToMinutes(a.endTime);
        if (aEnd <= aStart) aEnd += 1440;

        const bStart = this.timeToMinutes(b.startTime);
        let bEnd = this.timeToMinutes(b.endTime);
        if (bEnd <= bStart) bEnd += 1440;

        // Semak jika slot waktu bertembung
        if (Math.max(aStart, bStart) < Math.min(aEnd, bEnd)) {
          overlaps.push({ itemA: a, itemB: b });
        }
      }
    }
    return overlaps;
  },

  /**
   * Auto-Susun Jadual Pintar (Cascade Scheduling)
   * Menyusun semula waktu mula dan tamat mengikut turutan tanpa bertindih
   * @param {string} startAnchorTime - Waktu mula aktiviti pertama (cth: "08:00")
   * @param {Array} items - Senarai task
   * @param {number} bufferMinutes - Masa rehat antara tugasan (default: 10 minit)
   * @returns {Array} Senarai items dengan waktu mula dan tamat baru
   */
  autoCascadeSchedule(startAnchorTime, items, bufferMinutes = 10) {
    let currentMinutes = this.timeToMinutes(startAnchorTime);

    return items.map(item => {
      let duration = item.durationMinutes;
      if (!duration && item.startTime && item.endTime) {
        duration = this.calculateDuration(item.startTime, item.endTime).minutes;
      }
      duration = Math.max(5, duration || 30);

      const startTime = this.minutesToTime(currentMinutes);
      const endMinutes = currentMinutes + duration;
      const endTime = this.minutesToTime(endMinutes);

      // Tambah tempoh tugasan + rehat untuk tugasan seterusnya
      currentMinutes = endMinutes + bufferMinutes;

      return {
        ...item,
        startTime,
        endTime,
        durationMinutes: duration
      };
    });
  }
};

// Export ke window untuk kegunaan global dalam pelayar
if (typeof window !== 'undefined') {
  window.TimeEngine = TimeEngine;
}
