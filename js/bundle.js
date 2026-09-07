/* DailyPulse Consolidated Production Bundle */

/* --- js/i18n.js --- */
/**
 * i18n Engine - DailyPulse
 * Pengurusan dwi-bahasa (Bahasa Melayu & English)
 */

const I18N = {
  currentLang: 'ms', // 'ms' atau 'en'

  translations: {
    ms: {
      appName: 'DailyPulse',
      tagline: 'Pengurusan Tugasan & Matlamat Harian Pintar',
      
      // Navigasi
      navDashboard: 'Ringkasan',
      navTasks: 'Tugasan',
      navGoals: 'Matlamat',
      navTimeline: 'Garis Masa',
      navAnalytics: 'Analisis',

      // Dashboard
      dailyCapacityTitle: 'Kapasiti Masa Harian',
      awakeHours: 'berjaga',
      optimal: 'Optimum',
      overbooked: 'Terlebih',
      used: 'Digunakan',
      statTasks: 'Tugasan',
      statGoals: 'Matlamat',
      statFreeTime: 'Baki Terluang',
      overlapAlert: 'pertindihan masa dikesan!',
      autoFix: 'Auto-Selesaikan',
      nextFocus: 'Fokus Seterusnya',
      viewAll: 'Lihat Semua',
      startFocusNow: '▶ Mula Fokus Sekarang',
      allTasksDone: 'Semua Tugasan Telah Selesai!',
      allTasksDoneSub: 'Tahniah, anda telah mencapai semua sasaran tugasan hari ini.',
      dailyGoalsProgress: 'Kemajuan Matlamat Harian',
      manageGoals: 'Urus Matlamat',
      completedToday: '✓ Selesai Hari Ini',
      notCompleted: 'Belum Selesai',
      perDay: 'hari',

      // Tugasan
      taskListTitle: 'Senarai Tugasan Harian',
      btnAutoCascade: '⚡ Auto-Jadual Berperingkat',
      filterAll: 'Semua',
      filterWork: 'Kerja',
      filterStudy: 'Belajar',
      filterHealth: 'Kesihatan',
      filterPersonal: 'Peribadi',
      filterPending: 'Belum Selesai',
      noTasksFound: 'Tiada Tugasan Dijumpai',
      noTasksSub: 'Tekan butang (+) di bawah untuk menambah tugasan baru.',
      startFocus: '▶ Mula Fokus',
      edit: 'Sunting',
      delete: 'Padam',
      confirmDeleteTask: 'Adakah anda pasti ingin memadamkan tugasan ini?',

      // Matlamat
      goalsTitle: 'Matlamat & Tabiat Harian',
      goalsSubtitle: 'Dipecahkan kepada kuota masa harian untuk kejayaan konsisten',
      addGoalBtn: '+ Matlamat',
      noGoalsFound: 'Tiada Matlamat Ditambah Lagi',
      noGoalsSub: 'Tetapkan matlamat harian anda untuk kekal konsisten.',
      dailyAllocation: 'Peruntukan Harian',
      perWeek: 'seminggu',
      days: 'hari',
      timeSpent: 'Masa Diluangkan',
      goalSession: '▶ Sesi Matlamat',
      confirmDeleteGoal: 'Adakah anda pasti ingin memadamkan matlamat ini?',

      // Timeline
      timelineTitle: 'Blok Masa Harian (Time-Blocking)',
      timelineSubtitle: 'Visual 24 Jam',
      noTimelineBlocks: 'Tiada blok jadual untuk hari ini.',
      done: 'Siap',

      // Analisis
      analyticsTitle: 'Analisis Masa & Prestasi',
      longestStreak: 'Hari Streak Terpanjang',
      categoryBreakdownTitle: 'Pecahan Masa Mengikut Kategori',
      noCategoryData: 'Tiada Data',
      dailyAgendaSummary: 'Ringkasan Jadual Harian',
      copyText: '📋 Salin Teks',
      copied: '✓ Disalin!',
      copySummarySub: 'Salin teks jadual untuk dikongsi ke WhatsApp atau dicatat dalam nota anda.',
      dataManagement: 'Pengurusan Data',
      exportBackup: '📥 Eksport Sandaran',
      importData: '📤 Muat Naik Data',
      restoreDemo: '🔄 Pulihkan Data Contoh',
      confirmResetDemo: 'Pulihkan semua tugasan dan matlamat kepada contoh asal?',
      importSuccess: 'Data berjaya dimuat naik!',
      importError: 'Ralat: Fail tidak sah.',

      // Modals
      addTaskTitle: 'Tambah Tugasan Baru',
      editTaskTitle: 'Sunting Tugasan',
      taskNameLabel: 'Tajuk Tugasan',
      taskNamePlaceholder: 'Cth: Siapkan Analisis Laporan',
      categoryLabel: 'Kategori',
      priorityLabel: 'Keutamaan',
      startTimeLabel: 'Waktu Mula',
      endTimeLabel: 'Waktu Tamat',
      timeToSpend: 'Masa Yang Perlu Diluangkan:',
      timeEqualWarning: '0 minit (Waktu mula & tamat sama)',
      crossMidnight: '(Merentasi tengah malam)',
      notesLabel: 'Nota Ringkas (Pilihan)',
      notesPlaceholder: 'Objektif atau catatan penting...',
      saveTask: 'Simpan Tugasan',
      cancel: 'Batal',

      addGoalTitle: 'Tambah Matlamat Harian',
      goalNameLabel: 'Nama Matlamat',
      goalNamePlaceholder: 'Cth: Membaca Buku Ilmiah',
      weeklyTargetLabel: 'Sasaran Jam/Minggu',
      daysPerWeekLabel: 'Hari Komitmen/Minggu',
      everyday: '7 Hari (Setiap hari)',
      daysCount: 'Hari seminggu',
      dailyGoalTimeToSpend: 'Masa Kena Spend Setiap Hari:',
      reminderNotesLabel: 'Peringatan / Catatan',
      reminderNotesPlaceholder: 'Cth: 15-20 muka surat sebelum tidur...',
      saveGoal: 'Simpan Matlamat',

      // Tetapan
      settingsTitle: 'Tetapan Waktu Harian & Auto-Jadual',
      wakeTimeLabel: 'Waktu Bangun / Mula Hari',
      sleepTimeLabel: 'Waktu Tidur / Tamat Hari',
      breakBufferLabel: 'Masa Rehat Antara Tugasan (Buffer)',
      recommended: '(Disyorkan)',
      autoScheduleFeatureTitle: '⚡ Fungsi Auto-Susun Jadual Pintar',
      autoScheduleFeatureDesc: 'Sistem akan menyusun semua tugasan hari ini secara berturutan bermula dari Waktu Mula Hari anda, menghapuskan pertindihan masa secara automatik.',
      applyAutoScheduleBtn: '⚡ Laksana Auto-Susun Jadual Sekarang',
      saveSettingsBtn: 'Simpan Tetapan',
      closeBtn: 'Tutup',
      languageLabel: 'Pilihan Bahasa (Language)',

      // Timer
      focusTaskTag: 'TUGASAN FOKUS',
      focusGoalTag: 'MATLAMAT HARIAN',
      finishAndSaveSession: '✓ Selesaikan & Simpan Masa Sesi',
      timerFinishedAlert: 'Masa tamat untuk',
      sessionLogged: 'Sesi anda telah direkodkan.'
    },

    en: {
      appName: 'DailyPulse',
      tagline: 'Smart Daily Tasks & Goals Time Planner',

      // Navigation
      navDashboard: 'Dashboard',
      navTasks: 'Tasks',
      navGoals: 'Goals',
      navTimeline: 'Timeline',
      navAnalytics: 'Analytics',

      // Dashboard
      dailyCapacityTitle: 'Daily Time Capacity',
      awakeHours: 'awake',
      optimal: 'Optimal',
      overbooked: 'Overbooked by',
      used: 'Used',
      statTasks: 'Tasks',
      statGoals: 'Goals',
      statFreeTime: 'Free Buffer',
      overlapAlert: 'time overlaps detected!',
      autoFix: 'Auto-Fix',
      nextFocus: 'Next Up Focus',
      viewAll: 'View All',
      startFocusNow: '▶ Start Focus Now',
      allTasksDone: 'All Tasks Completed!',
      allTasksDoneSub: 'Congratulations, you have achieved all planned tasks for today.',
      dailyGoalsProgress: 'Daily Goals Progress',
      manageGoals: 'Manage Goals',
      completedToday: '✓ Completed Today',
      notCompleted: 'Pending',
      perDay: 'day',

      // Tasks
      taskListTitle: 'Daily Tasks List',
      btnAutoCascade: '⚡ Smart Cascade Schedule',
      filterAll: 'All',
      filterWork: 'Work',
      filterStudy: 'Study',
      filterHealth: 'Health',
      filterPersonal: 'Personal',
      filterPending: 'Pending',
      noTasksFound: 'No Tasks Found',
      noTasksSub: 'Tap the (+) button below to add your first task.',
      startFocus: '▶ Start Focus',
      edit: 'Edit',
      delete: 'Delete',
      confirmDeleteTask: 'Are you sure you want to delete this task?',

      // Goals
      goalsTitle: 'Daily Goals & Habits',
      goalsSubtitle: 'Broken down into daily time commitments for consistent growth',
      addGoalBtn: '+ Goal',
      noGoalsFound: 'No Goals Added Yet',
      noGoalsSub: 'Set your daily goals to build strong habits.',
      dailyAllocation: 'Daily Commitment',
      perWeek: 'per week',
      days: 'days',
      timeSpent: 'Time Spent',
      goalSession: '▶ Goal Session',
      confirmDeleteGoal: 'Are you sure you want to delete this goal?',

      // Timeline
      timelineTitle: 'Daily Time-Blocking',
      timelineSubtitle: '24-Hour Visual',
      noTimelineBlocks: 'No scheduled blocks for today.',
      done: 'Done',

      // Analytics
      analyticsTitle: 'Time & Performance Analytics',
      longestStreak: 'Days Longest Streak',
      categoryBreakdownTitle: 'Time Breakdown by Category',
      noCategoryData: 'No Data',
      dailyAgendaSummary: 'Daily Agenda Summary',
      copyText: '📋 Copy Text',
      copied: '✓ Copied!',
      copySummarySub: 'Copy your daily schedule to share via WhatsApp or paste into notes.',
      dataManagement: 'Data Management',
      exportBackup: '📥 Export Backup',
      importData: '📤 Import Data',
      restoreDemo: '🔄 Restore Demo Data',
      confirmResetDemo: 'Reset all tasks and goals to default examples?',
      importSuccess: 'Data imported successfully!',
      importError: 'Error: Invalid file format.',

      // Modals
      addTaskTitle: 'Add New Task',
      editTaskTitle: 'Edit Task',
      taskNameLabel: 'Task Title',
      taskNamePlaceholder: 'E.g., Complete Project Analysis',
      categoryLabel: 'Category',
      priorityLabel: 'Priority',
      startTimeLabel: 'Start Time',
      endTimeLabel: 'End Time',
      timeToSpend: 'Time to Spend:',
      timeEqualWarning: '0 mins (Start and end time are equal)',
      crossMidnight: '(Crosses midnight)',
      notesLabel: 'Brief Notes (Optional)',
      notesPlaceholder: 'Key objectives or details...',
      saveTask: 'Save Task',
      cancel: 'Cancel',

      addGoalTitle: 'Add Daily Goal',
      goalNameLabel: 'Goal Title',
      goalNamePlaceholder: 'E.g., Read Non-Fiction Book',
      weeklyTargetLabel: 'Target Hours/Week',
      daysPerWeekLabel: 'Active Commitment Days',
      everyday: '7 Days (Every day)',
      daysCount: 'Days per week',
      dailyGoalTimeToSpend: 'Daily Required Time Commitment:',
      reminderNotesLabel: 'Reminder / Notes',
      reminderNotesPlaceholder: 'E.g., 15-20 pages before bed...',
      saveGoal: 'Save Goal',

      // Settings
      settingsTitle: 'Daily Schedule & Auto-Planner Settings',
      wakeTimeLabel: 'Wake-up / Day Start Time',
      sleepTimeLabel: 'Bedtime / Day End Time',
      breakBufferLabel: 'Break Buffer Between Tasks',
      recommended: '(Recommended)',
      autoScheduleFeatureTitle: '⚡ Smart Auto-Cascade Scheduling',
      autoScheduleFeatureDesc: 'The system sequentially rearranges all tasks from your day start time, eliminating overlapping slots with buffer breaks.',
      applyAutoScheduleBtn: '⚡ Apply Auto-Cascade Schedule Now',
      saveSettingsBtn: 'Save Settings',
      closeBtn: 'Close',
      languageLabel: 'Language Selection',

      // Timer
      focusTaskTag: 'FOCUS TASK',
      focusGoalTag: 'DAILY GOAL',
      finishAndSaveSession: '✓ Complete & Log Session Time',
      timerFinishedAlert: 'Time is up for',
      sessionLogged: 'Your session has been logged.'
    }
  },

  /**
   * Mengambil teks terjemahan berdasarkan kunci
   */
  t(key) {
    const lang = this.currentLang || 'ms';
    const dict = this.translations[lang] || this.translations.ms;
    return dict[key] !== undefined ? dict[key] : key;
  },

  /**
   * Format durasi mengikut bahasa aktif
   */
  formatDuration(minutes) {
    const mins = Math.max(0, Math.round(minutes));
    if (mins === 0) return this.currentLang === 'en' ? '0 mins' : '0 minit';
    const hours = Math.floor(mins / 60);
    const remainingMins = mins % 60;

    const hourUnit = this.currentLang === 'en' ? 'h' : 'j';
    const minUnit = this.currentLang === 'en' ? 'm' : 'm';
    const hourWord = this.currentLang === 'en' ? (hours > 1 ? 'hours' : 'hour') : 'jam';
    const minWord = this.currentLang === 'en' ? 'mins' : 'minit';

    if (hours > 0 && remainingMins > 0) {
      return `${hours}${hourUnit} ${remainingMins}${minUnit}`;
    } else if (hours > 0) {
      return `${hours} ${hourWord}`;
    } else {
      return `${remainingMins} ${minWord}`;
    }
  },

  /**
   * Format tarikh mengikut bahasa aktif
   */
  formatDate(date = new Date()) {
    const locale = this.currentLang === 'en' ? 'en-US' : 'ms-MY';
    const options = { weekday: 'long', day: 'numeric', month: 'long' };
    return new Intl.DateTimeFormat(locale, options).format(date);
  },

  /**
   * Format Kategori dwibahasa
   */
  formatCategory(cat) {
    const map = {
      'Kerja': { ms: 'Kerja', en: 'Work' },
      'Work': { ms: 'Kerja', en: 'Work' },
      'Belajar': { ms: 'Belajar', en: 'Study' },
      'Study': { ms: 'Belajar', en: 'Study' },
      'Kesihatan': { ms: 'Kesihatan', en: 'Health' },
      'Health': { ms: 'Kesihatan', en: 'Health' },
      'Peribadi': { ms: 'Peribadi', en: 'Personal' },
      'Personal': { ms: 'Peribadi', en: 'Personal' },
      'Lain-lain': { ms: 'Lain-lain', en: 'Others' },
      'Others': { ms: 'Lain-lain', en: 'Others' }
    };
    const item = map[cat];
    if (!item) return cat;
    return this.currentLang === 'en' ? item.en : item.ms;
  },

  /**
   * Format Keutamaan (Priority) dwibahasa
   */
  formatPriority(p) {
    const map = {
      'Tinggi': { ms: 'Tinggi', en: 'High' },
      'High': { ms: 'Tinggi', en: 'High' },
      'Sederhana': { ms: 'Sederhana', en: 'Medium' },
      'Medium': { ms: 'Sederhana', en: 'Medium' },
      'Rendah': { ms: 'Rendah', en: 'Low' },
      'Low': { ms: 'Rendah', en: 'Low' }
    };
    const item = map[p];
    if (!item) return p;
    return this.currentLang === 'en' ? item.en : item.ms;
  },

  /**
   * Tukar bahasa semasa
   */
  setLanguage(lang) {
    if (lang === 'en' || lang === 'ms') {
      this.currentLang = lang;
    }
  },

  getLanguage() {
    return this.currentLang || 'ms';
  }
};

if (typeof window !== 'undefined') {
  window.I18N = I18N;
}


/* --- js/timeEngine.js --- */
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


/* --- js/storage.js --- */
/**
 * Storage Engine - DailyPulse
 * Mengendalikan penyimpanan hibrid: Pangkalan Data Awan (REST API) + LocalStorage (Offline-First).
 */

const STORAGE_KEYS = {
  TASKS: 'DAILY_PULSE_TASKS',
  GOALS: 'DAILY_PULSE_GOALS',
  SETTINGS: 'DAILY_PULSE_SETTINGS',
  HISTORY: 'DAILY_PULSE_HISTORY'
};

const DEFAULT_SETTINGS = {
  userName: 'Dania',
  dayStartTime: '07:30',
  dayEndTime: '23:00',
  theme: 'dark',
  defaultBreakMinutes: 10,
  enableSound: true,
  language: 'ms'
};

const INITIAL_TASKS = [
  {
    id: 'task-1',
    title: 'Semak & Balas Emel & Mesej Klien',
    category: 'Kerja',
    priority: 'Tinggi',
    startTime: '08:30',
    endTime: '09:15',
    durationMinutes: 45,
    actualMinutesSpent: 45,
    completed: true,
    notes: 'Keutamaan untuk emel pelabur & kemas kini status mingguan'
  },
  {
    id: 'task-2',
    title: 'Siapkan Laporan Analisis Projek & Kod Prototaip',
    category: 'Kerja',
    priority: 'Tinggi',
    startTime: '09:30',
    endTime: '11:45',
    durationMinutes: 135,
    actualMinutesSpent: 60,
    completed: false,
    notes: 'Fokus mendalam (Deep Work) tanpa gangguan media sosial'
  },
  {
    id: 'task-3',
    title: 'Sesi Kajian AI & Pembelajaran Teknologi Baru',
    category: 'Belajar',
    priority: 'Sederhana',
    startTime: '14:00',
    endTime: '15:15',
    durationMinutes: 75,
    actualMinutesSpent: 0,
    completed: false,
    notes: 'Kaji dokumentasi model terkini & buat catatan ringkas'
  },
  {
    id: 'task-4',
    title: 'Senaman Kardio Ringan & Regangan Badan',
    category: 'Kesihatan',
    priority: 'Sederhana',
    startTime: '17:30',
    endTime: '18:15',
    durationMinutes: 45,
    actualMinutesSpent: 0,
    completed: false,
    notes: 'Lari anak 3km di taman atau lompat tali di rumah'
  }
];

const INITIAL_GOALS = [
  {
    id: 'goal-1',
    title: 'Membaca Buku Ilmiah / Bisnes',
    category: 'Belajar',
    weeklyTargetHours: 3.5,
    daysPerWeek: 7,
    allocatedMinutes: 30,
    actualMinutesSpent: 30,
    completedToday: true,
    streakDays: 7,
    notes: 'Minimum 15-20 muka surat setiap sesi'
  },
  {
    id: 'goal-2',
    title: 'Senaman Fizikal & Kesihatan Menyeluruh',
    category: 'Kesihatan',
    weeklyTargetHours: 5,
    daysPerWeek: 5,
    allocatedMinutes: 60,
    actualMinutesSpent: 20,
    completedToday: false,
    streakDays: 14,
    notes: 'Kekal konsisten 5 hari seminggu'
  },
  {
    id: 'goal-3',
    title: 'Pembangunan Projek Peribadi / Portfolio',
    category: 'Kerja',
    weeklyTargetHours: 7,
    daysPerWeek: 7,
    allocatedMinutes: 60,
    actualMinutesSpent: 0,
    completedToday: false,
    streakDays: 4,
    notes: 'Bina ciri baharu setiap hari secara konsisten'
  }
];

const Storage = {
  isCloudConnected: false,
  onSyncCallbacks: [],

  /**
   * Muat turun data terkini dari REST API pelayan
   */
  async initCloudSync() {
    try {
      const res = await fetch('/api/health');
      if (res.ok) {
        this.isCloudConnected = true;

        // Tarik data serentak dari database pelayan
        const [tasksRes, goalsRes, settingsRes] = await Promise.all([
          fetch('/api/tasks').then(r => r.json()).catch(() => null),
          fetch('/api/goals').then(r => r.json()).catch(() => null),
          fetch('/api/settings').then(r => r.json()).catch(() => null)
        ]);

        if (tasksRes && tasksRes.tasks) {
          localStorage.setItem(STORAGE_KEYS.TASKS, JSON.stringify(tasksRes.tasks));
        }
        if (goalsRes && goalsRes.goals) {
          localStorage.setItem(STORAGE_KEYS.GOALS, JSON.stringify(goalsRes.goals));
        }
        if (settingsRes && settingsRes.settings) {
          localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settingsRes.settings));
        }

        this.notifySync();
        return true;
      }
    } catch (e) {
      console.log('Mod Offline: Menggunakan storan tempatan LocalStorage.');
      this.isCloudConnected = false;
    }
    return false;
  },

  onSync(callback) {
    this.onSyncCallbacks.push(callback);
  },

  notifySync() {
    this.onSyncCallbacks.forEach(cb => {
      try { cb(); } catch (err) { console.error(err); }
    });
  },

  getTasks() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.TASKS);
      if (!data) {
        this.saveTasks(INITIAL_TASKS);
        return INITIAL_TASKS;
      }
      return JSON.parse(data);
    } catch (e) {
      return INITIAL_TASKS;
    }
  },

  saveTasks(tasks) {
    try {
      localStorage.setItem(STORAGE_KEYS.TASKS, JSON.stringify(tasks));
      // Hantar ke REST API pelayan jika dalam talian
      if (typeof fetch !== 'undefined') {
        fetch('/api/tasks', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ tasks })
        }).catch(() => {});
      }
    } catch (e) {
      console.error('Ralat menyimpan tugasan:', e);
    }
  },

  getGoals() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.GOALS);
      if (!data) {
        this.saveGoals(INITIAL_GOALS);
        return INITIAL_GOALS;
      }
      return JSON.parse(data);
    } catch (e) {
      return INITIAL_GOALS;
    }
  },

  saveGoals(goals) {
    try {
      localStorage.setItem(STORAGE_KEYS.GOALS, JSON.stringify(goals));
      // Hantar ke REST API pelayan
      if (typeof fetch !== 'undefined') {
        goals.forEach(g => {
          fetch(`/api/goals/${g.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(g)
          }).catch(() => {});
        });
      }
    } catch (e) {
      console.error('Ralat menyimpan matlamat:', e);
    }
  },

  getSettings() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.SETTINGS);
      if (!data) {
        this.saveSettings(DEFAULT_SETTINGS);
        return DEFAULT_SETTINGS;
      }
      return { ...DEFAULT_SETTINGS, ...JSON.parse(data) };
    } catch (e) {
      return DEFAULT_SETTINGS;
    }
  },

  saveSettings(settings) {
    try {
      localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
      if (typeof fetch !== 'undefined') {
        fetch('/api/settings', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(settings)
        }).catch(() => {});
      }
    } catch (e) {
      console.error('Ralat menyimpan tetapan:', e);
    }
  },

  addHistoryLog(item) {
    try {
      const history = JSON.parse(localStorage.getItem(STORAGE_KEYS.HISTORY) || '[]');
      const entry = {
        ...item,
        date: new Date().toISOString().slice(0, 10),
        timestamp: Date.now()
      };
      history.push(entry);
      localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(history));

      if (typeof fetch !== 'undefined') {
        fetch('/api/history', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(entry)
        }).catch(() => {});
      }
    } catch (e) {
      console.error('Ralat log sejarah:', e);
    }
  },

  getHistory() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.HISTORY) || '[]');
    } catch (e) {
      return [];
    }
  },

  exportDataJSON() {
    const backup = {
      version: '2.0',
      database: 'DailyPulse Persistent Cloud',
      exportedAt: new Date().toISOString(),
      tasks: this.getTasks(),
      goals: this.getGoals(),
      settings: this.getSettings(),
      history: this.getHistory()
    };
    const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `dailypulse-database-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  },

  importDataJSON(jsonString) {
    try {
      const parsed = JSON.parse(jsonString);
      if (parsed.tasks && Array.isArray(parsed.tasks)) {
        this.saveTasks(parsed.tasks);
      }
      if (parsed.goals && Array.isArray(parsed.goals)) {
        this.saveGoals(parsed.goals);
      }
      if (parsed.settings) {
        this.saveSettings(parsed.settings);
      }
      return true;
    } catch (e) {
      console.error('Format fail tidak sah:', e);
      return false;
    }
  },

  resetToDefaults() {
    this.saveTasks(INITIAL_TASKS);
    this.saveGoals(INITIAL_GOALS);
    this.saveSettings(DEFAULT_SETTINGS);
    if (typeof fetch !== 'undefined') {
      fetch('/api/reset', { method: 'POST' }).catch(() => {});
    }
  }
};

if (typeof window !== 'undefined') {
  window.Storage = Storage;
}


/* --- js/timer.js --- */
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


/* --- js/analytics.js --- */
/**
 * Analytics Engine - Daily Task & Goals Smart Time System
 * Mengira statistik penggunaan masa, peratusan kejayaan, dan menjana visual SVG.
 */

const Analytics = {
  CATEGORY_COLORS: {
    'Kerja': '#6366f1',     // Indigo / Violet
    'Belajar': '#06b6d4',   // Cyan
    'Kesihatan': '#10b981', // Emerald green
    'Peribadi': '#f59e0b',  // Amber
    'Lain-lain': '#8b5cf6'  // Purple
  },

  /**
   * Menjana metrik harian lengkap
   */
  getDailyMetrics(tasks = [], goals = []) {
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(t => t.completed).length;
    const taskCompletionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

    const totalGoals = goals.length;
    const completedGoals = goals.filter(g => g.completedToday || (g.actualMinutesSpent >= g.allocatedMinutes)).length;
    const goalCompletionRate = totalGoals > 0 ? Math.round((completedGoals / totalGoals) * 100) : 0;

    const totalPlannedMinutes = tasks.reduce((sum, t) => sum + (t.durationMinutes || 0), 0) +
                               goals.reduce((sum, g) => sum + (g.allocatedMinutes || 0), 0);

    const totalActualMinutes = tasks.reduce((sum, t) => sum + (t.actualMinutesSpent || 0), 0) +
                              goals.reduce((sum, g) => sum + (g.actualMinutesSpent || 0), 0);

    // Kira pecahan mengikut kategori
    const categoryBreakdown = {};
    const allItems = [
      ...tasks.map(t => ({ ...t, planned: t.durationMinutes || 0, actual: t.actualMinutesSpent || 0 })),
      ...goals.map(g => ({ ...g, planned: g.allocatedMinutes || 0, actual: g.actualMinutesSpent || 0 }))
    ];

    allItems.forEach(item => {
      const cat = item.category || 'Lain-lain';
      if (!categoryBreakdown[cat]) {
        categoryBreakdown[cat] = {
          plannedMinutes: 0,
          actualMinutes: 0,
          color: this.CATEGORY_COLORS[cat] || '#a855f7'
        };
      }
      categoryBreakdown[cat].plannedMinutes += item.planned;
      categoryBreakdown[cat].actualMinutes += item.actual;
    });

    // Cari streak tertinggi
    const maxStreak = goals.reduce((max, g) => Math.max(max, g.streakDays || 0), 0);

    return {
      totalTasks,
      completedTasks,
      taskCompletionRate,
      totalGoals,
      completedGoals,
      goalCompletionRate,
      totalPlannedMinutes,
      totalActualMinutes,
      categoryBreakdown,
      maxStreak
    };
  },

  /**
   * Menjana kod SVG untuk Donut Chart pecahan kategori masa
   */
  renderCategoryDonut(categoryBreakdown, size = 180) {
    const categories = Object.keys(categoryBreakdown);
    const totalMinutes = categories.reduce((sum, cat) => sum + categoryBreakdown[cat].plannedMinutes, 0);

    if (totalMinutes === 0) {
      return `
        <svg width="${size}" height="${size}" viewBox="0 0 100 100" class="donut-svg">
          <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="14" />
          <text x="50" y="54" text-anchor="middle" fill="#94a3b8" font-size="9" font-family="Inter, sans-serif">Tiada Data</text>
        </svg>
      `;
    }

    const radius = 38;
    const circumference = 2 * Math.PI * radius;
    let accumulatedAngle = 0;
    let paths = '';

    categories.forEach(cat => {
      const data = categoryBreakdown[cat];
      if (data.plannedMinutes <= 0) return;

      const percentage = data.plannedMinutes / totalMinutes;
      const strokeLength = percentage * circumference;
      const strokeDashoffset = -accumulatedAngle;
      accumulatedAngle += strokeLength;

      paths += `
        <circle 
          cx="50" cy="50" r="${radius}" 
          fill="none" 
          stroke="${data.color}" 
          stroke-width="12" 
          stroke-dasharray="${strokeLength} ${circumference}" 
          stroke-dashoffset="${strokeDashoffset}"
          class="donut-segment"
        />
      `;
    });

    return `
      <svg width="${size}" height="${size}" viewBox="0 0 100 100" class="donut-svg" style="transform: rotate(-90deg);">
        ${paths}
      </svg>
    `;
  }
};

if (typeof window !== 'undefined') {
  window.Analytics = Analytics;
}


/* --- js/app.js --- */
/**
 * App Controller - DailyPulse: Smart Daily Task & Goals Time Planner
 * Pengendalian interaksi antara muka, dwi-bahasa (Malay & English), modal, dan pengiraan masa langsung.
 */

document.addEventListener('DOMContentLoaded', () => {
  // ================= STATE UTAMA =================
  let currentTab = 'tab-dashboard';
  let currentTaskFilter = 'all'; // 'all', 'Kerja', 'Belajar', 'Kesihatan', 'Peribadi', 'pending'
  let tasks = window.Storage.getTasks();
  let goals = window.Storage.getGoals();
  let settings = window.Storage.getSettings();

  // Tetapkan bahasa awal
  if (window.I18N) {
    window.I18N.setLanguage(settings.language || 'ms');
  }

  // ================= ELEMEN DOM =================
  const navItems = document.querySelectorAll('.nav-item');
  const tabPanes = document.querySelectorAll('.tab-pane');
  const currentDateDisplay = document.getElementById('current-date-display');

  // Penukar Bahasa (Language Switcher)
  const langToggle = document.getElementById('lang-toggle');
  const langOptMs = document.getElementById('lang-opt-ms');
  const langOptEn = document.getElementById('lang-opt-en');
  const settingLanguage = document.getElementById('setting-language');

  // Dashboard DOM
  const budgetPlannedVal = document.getElementById('budget-planned-val');
  const budgetCapacitySub = document.getElementById('budget-capacity-sub');
  const budgetProgressFill = document.getElementById('budget-progress-fill');
  const budgetStatusPill = document.getElementById('budget-status-pill');
  const statTaskTime = document.getElementById('stat-task-time');
  const statGoalTime = document.getElementById('stat-goal-time');
  const statFreeTime = document.getElementById('stat-free-time');
  const overlapAlertContainer = document.getElementById('overlap-alert-container');
  const nextTaskContainer = document.getElementById('next-task-container');
  const dashboardGoalsList = document.getElementById('dashboard-goals-list');

  // Tasks DOM
  const tasksListContainer = document.getElementById('tasks-list-container');
  const filterPills = document.querySelectorAll('.filter-pill');
  const btnTaskAutoCascade = document.getElementById('btn-task-auto-cascade');

  // Goals DOM
  const goalsListContainer = document.getElementById('goals-list-container');
  const btnAddGoalTop = document.getElementById('btn-add-goal-top');

  // Timeline DOM
  const timelineBlocksContainer = document.getElementById('timeline-blocks-container');

  // Analytics DOM
  const donutChartContainer = document.getElementById('donut-chart-container');
  const categoryLegendContainer = document.getElementById('category-legend-container');
  const analyticsStreakBadge = document.getElementById('analytics-streak-badge');
  const agendaTextPreview = document.getElementById('agenda-text-preview');
  const btnCopyAgenda = document.getElementById('btn-copy-agenda');
  const btnExportData = document.getElementById('btn-export-data');
  const btnImportTrigger = document.getElementById('btn-import-trigger');
  const fileImportInput = document.getElementById('file-import-input');
  const btnResetDemo = document.getElementById('btn-reset-demo');

  // Modals DOM
  const modalTask = document.getElementById('modal-task');
  const formTask = document.getElementById('form-task');
  const taskIdInput = document.getElementById('task-id');
  const taskTitleInput = document.getElementById('task-input-title');
  const taskCategoryInput = document.getElementById('task-input-category');
  const taskPriorityInput = document.getElementById('task-input-priority');
  const taskStartInput = document.getElementById('task-input-start');
  const taskEndInput = document.getElementById('task-input-end');
  const taskNotesInput = document.getElementById('task-input-notes');
  const calcDurationText = document.getElementById('calc-duration-text');
  const btnCloseTaskModal = document.getElementById('btn-close-task-modal');
  const modalTaskTitle = document.getElementById('modal-task-title');

  const modalGoal = document.getElementById('modal-goal');
  const formGoal = document.getElementById('form-goal');
  const goalTitleInput = document.getElementById('goal-input-title');
  const goalCategoryInput = document.getElementById('goal-input-category');
  const goalHoursInput = document.getElementById('goal-input-hours');
  const goalDaysInput = document.getElementById('goal-input-days');
  const goalNotesInput = document.getElementById('goal-input-notes');
  const calcGoalDailyText = document.getElementById('calc-goal-daily-text');
  const btnCloseGoalModal = document.getElementById('btn-close-goal-modal');

  const modalSettings = document.getElementById('modal-settings');
  const settingDayStart = document.getElementById('setting-day-start');
  const settingDayEnd = document.getElementById('setting-day-end');
  const settingBreakMins = document.getElementById('setting-break-mins');
  const btnOpenSettings = document.getElementById('btn-open-settings');
  const btnCloseSettings = document.getElementById('btn-close-settings');
  const btnSaveSettings = document.getElementById('btn-save-settings');
  const btnApplyAutoSchedule = document.getElementById('btn-apply-auto-schedule');
  const btnAutoScheduleHeader = document.getElementById('btn-auto-schedule');

  // Timer DOM
  const modalTimer = document.getElementById('modal-timer');
  const btnCloseTimer = document.getElementById('btn-close-timer');
  const timerTag = document.getElementById('timer-tag');
  const timerItemTitle = document.getElementById('timer-item-title');
  const timerCountdownDisplay = document.getElementById('timer-countdown-display');
  const timerRingProgress = document.getElementById('timer-ring-progress');
  const btnTimerToggle = document.getElementById('btn-timer-toggle');
  const timerIconPlay = document.getElementById('timer-icon-play');
  const timerIconPause = document.getElementById('timer-icon-pause');
  const btnTimerReset = document.getElementById('btn-timer-reset');
  const btnTimerMarkDone = document.getElementById('btn-timer-mark-done');
  const miniTimerWidget = document.getElementById('mini-timer-widget');
  const miniTimerText = document.getElementById('mini-timer-text');
  const miniTimerTitle = document.getElementById('mini-timer-title');

  // Quick Add FAB
  const fabQuickAdd = document.getElementById('fab-quick-add');

  // ================= UTILITI AUDIO, HAPTIK & TOAST =================
  function playAudioChime(type = 'success') {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      if (ctx.state === 'suspended') ctx.resume();
      const now = ctx.currentTime;

      if (type === 'complete') {
        [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'triangle';
          osc.connect(gain);
          gain.connect(ctx.destination);
          const t = now + i * 0.09;
          osc.frequency.setValueAtTime(freq, t);
          gain.gain.setValueAtTime(0.2, t);
          gain.gain.exponentialRampToValueAtTime(0.001, t + 0.35);
          osc.start(t);
          osc.stop(t + 0.35);
        });
      } else if (type === 'success') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.frequency.setValueAtTime(587.33, now);
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.12);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
        osc.start(now);
        osc.stop(now + 0.4);
      } else {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.frequency.setValueAtTime(440, now);
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
        osc.start(now);
        osc.stop(now + 0.12);
      }
    } catch (e) {}
  }

  function triggerHaptic(pattern = [30]) {
    try {
      if (navigator.vibrate) navigator.vibrate(pattern);
    } catch (e) {}
  }

  function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast-item toast-${type}`;
    const icon = type === 'success' ? '⚡' : '🔔';
    toast.innerHTML = `<span style="font-size: 1.1rem;">${icon}</span> <span>${escapeHtml(message)}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('toast-out');
      setTimeout(() => toast.remove(), 250);
    }, 2800);
  }

  function isTaskCurrentlyOngoing(task) {
    if (!task || task.completed) return false;
    const now = new Date();
    const currentMins = now.getHours() * 60 + now.getMinutes();
    const startMins = window.TimeEngine.timeToMinutes(task.startTime);
    const endMins = window.TimeEngine.timeToMinutes(task.endTime);

    if (endMins >= startMins) {
      return currentMins >= startMins && currentMins < endMins;
    } else {
      return currentMins >= startMins || currentMins < endMins;
    }
  }

  function addGoalQuickMinutes(id, addedMinutes) {
    const goal = goals.find(g => g.id === id);
    if (!goal) return;

    goal.actualMinutesSpent = (goal.actualMinutesSpent || 0) + addedMinutes;
    if (goal.actualMinutesSpent >= goal.allocatedMinutes) {
      goal.completedToday = true;
    }
    window.Storage.saveGoals(goals);
    renderAll();

    const isEn = window.I18N && window.I18N.getLanguage() === 'en';
    const minText = isEn ? 'mins' : 'minit';
    showToast(`+${addedMinutes} ${minText} untuk "${goal.title}"! 🎯`, 'success');
    triggerHaptic([40, 30, 40]);
    playAudioChime('success');
  }

  function bindSwipeToDismiss() {
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
      const sheet = overlay.querySelector('.modal-sheet');
      if (!sheet) return;

      let startY = 0;
      let currentY = 0;
      let isDragging = false;

      sheet.addEventListener('touchstart', (e) => {
        if (sheet.scrollTop > 5 && !e.target.closest('.modal-handle')) return;
        startY = e.touches[0].clientY;
        currentY = startY;
        isDragging = true;
        sheet.classList.add('dragging');
      }, { passive: true });

      sheet.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        currentY = e.touches[0].clientY;
        const diff = currentY - startY;
        if (diff > 0) {
          sheet.style.transform = `translateY(${diff}px)`;
        }
      }, { passive: true });

      sheet.addEventListener('touchend', () => {
        if (!isDragging) return;
        isDragging = false;
        sheet.classList.remove('dragging');
        const diff = currentY - startY;
        sheet.style.transform = '';
        if (diff > 90) {
          overlay.classList.remove('active');
          triggerHaptic([30]);
        }
      });
    });
  }

  // ================= INISIALISASI =================
  function initApp() {
    updateLanguagePills();
    updateStaticTranslations();
    renderCurrentDate();
    loadSettingsIntoUI();
    bindEvents();
    bindTimerEvents();
    bindSwipeToDismiss();
    renderAll();

    // Kemas kini automatik setiap 60 saat untuk status tugasan aktif semasa
    setInterval(() => {
      renderDashboard();
      renderTasksList();
    }, 60000);

    // Inisialisasi Cloud Database Sync
    if (window.Storage && window.Storage.initCloudSync) {
      window.Storage.onSync(() => {
        tasks = window.Storage.getTasks();
        goals = window.Storage.getGoals();
        settings = window.Storage.getSettings();
        renderAll();
      });
      window.Storage.initCloudSync();
    }
  }

  function renderCurrentDate() {
    if (window.I18N) {
      currentDateDisplay.textContent = window.I18N.formatDate(new Date());
    } else {
      const options = { weekday: 'long', day: 'numeric', month: 'long' };
      currentDateDisplay.textContent = new Intl.DateTimeFormat('ms-MY', options).format(new Date());
    }
  }

  function loadSettingsIntoUI() {
    settingDayStart.value = settings.dayStartTime || '07:30';
    settingDayEnd.value = settings.dayEndTime || '23:00';
    settingBreakMins.value = settings.defaultBreakMinutes || '10';
    if (settingLanguage) {
      settingLanguage.value = settings.language || 'ms';
    }
  }

  function updateLanguagePills() {
    const lang = window.I18N ? window.I18N.getLanguage() : 'ms';
    if (langOptMs && langOptEn) {
      langOptMs.classList.toggle('active', lang === 'ms');
      langOptEn.classList.toggle('active', lang === 'en');
    }
    if (settingLanguage) {
      settingLanguage.value = lang;
    }
  }

  // Kemas kini teks statik dalam UI mengikut bahasa aktif
  function updateStaticTranslations() {
    if (!window.I18N) return;
    const t = (k) => window.I18N.t(k);

    // Navigasi Bawah
    document.querySelector('#nav-dashboard span').textContent = t('navDashboard');
    document.querySelector('#nav-tasks span').textContent = t('navTasks');
    document.querySelector('#nav-goals span').textContent = t('navGoals');
    document.querySelector('#nav-timeline span').textContent = t('navTimeline');
    document.querySelector('#nav-analytics span').textContent = t('navAnalytics');

    // Dashboard
    document.querySelector('#daily-budget-card .budget-title').textContent = t('dailyCapacityTitle');
    document.querySelectorAll('.stat-box')[0].querySelector('.stat-label').textContent = t('statTasks');
    document.querySelectorAll('.stat-box')[1].querySelector('.stat-label').textContent = t('statGoals');
    document.querySelectorAll('.stat-box')[2].querySelector('.stat-label').textContent = t('statFreeTime');
    document.getElementById('btn-jump-tasks').textContent = t('viewAll');
    document.getElementById('btn-jump-goals').textContent = t('manageGoals');

    // Tugasan
    document.querySelector('#tab-tasks .section-title').textContent = t('taskListTitle');
    btnTaskAutoCascade.textContent = t('btnAutoCascade');

    // Filter pills
    const pillKeys = ['filterAll', 'filterWork', 'filterStudy', 'filterHealth', 'filterPersonal', 'filterPending'];
    filterPills.forEach((p, idx) => {
      if (pillKeys[idx]) {
        p.textContent = t(pillKeys[idx]);
      }
    });

    // Matlamat
    document.querySelector('#tab-goals .section-title').textContent = t('goalsTitle');
    document.querySelector('#tab-goals p').textContent = t('goalsSubtitle');
    btnAddGoalTop.textContent = t('addGoalBtn');

    // Timeline
    document.querySelector('#tab-timeline .section-title').textContent = t('timelineTitle');
    document.querySelector('#tab-timeline span').textContent = t('timelineSubtitle');

    // Analisis
    document.querySelector('#tab-analytics .section-title').textContent = t('analyticsTitle');
    btnCopyAgenda.textContent = t('copyText');
    btnExportData.textContent = t('exportBackup');
    btnImportTrigger.textContent = t('importData');
    btnResetDemo.textContent = t('restoreDemo');

    // Timer modal
    btnTimerMarkDone.textContent = t('finishAndSaveSession');

    // Update live calculation box label
    const calcBoxLabel = document.querySelector('#calc-result-container .calc-text');
    if (calcBoxLabel) {
      calcBoxLabel.textContent = t('timeToSpend');
    }
  }

  // Tukar bahasa dan simpan
  function switchLanguage(lang) {
    if (!window.I18N) return;
    window.I18N.setLanguage(lang);
    settings.language = lang;
    window.Storage.saveSettings(settings);

    updateLanguagePills();
    updateStaticTranslations();
    renderCurrentDate();
    renderAll();
    updateLiveTaskDuration();
    updateLiveGoalCalculation();
  }

  // ================= PENGIRAAN MASA SECARA LANGSUNG (LIVE CALCULATION) =================
  function updateLiveTaskDuration() {
    const start = taskStartInput.value;
    const end = taskEndInput.value;
    const t = (k) => window.I18N ? window.I18N.t(k) : k;

    if (!start || !end) {
      calcDurationText.textContent = t('startTimeLabel') + ' & ' + t('endTimeLabel');
      return;
    }

    const { minutes, formatted, isNextDay } = window.TimeEngine.calculateDuration(start, end);

    if (minutes === 0) {
      calcDurationText.textContent = t('timeEqualWarning');
    } else {
      const minWord = window.I18N && window.I18N.getLanguage() === 'en' ? 'mins' : 'minit';
      calcDurationText.innerHTML = `${formatted} (${minutes} ${minWord})${isNextDay ? ` <span style="color:#f59e0b; font-size:0.75rem;">${t('crossMidnight')}</span>` : ''}`;
    }
  }

  function updateLiveGoalCalculation() {
    const hours = parseFloat(goalHoursInput.value) || 0;
    const days = parseInt(goalDaysInput.value, 10) || 5;
    const t = (k) => window.I18N ? window.I18N.t(k) : k;

    const { dailyMinutes, dailyFormatted } = window.TimeEngine.calculateDailyGoalCommitment(hours, days);
    const minWord = window.I18N && window.I18N.getLanguage() === 'en' ? 'mins' : 'minit';
    const dayWord = t('perDay');
    calcGoalDailyText.textContent = `${dailyFormatted} (${dailyMinutes} ${minWord} / ${dayWord})`;
  }

  // ================= RENDER SEMUA PAPARAN =================
  function renderAll() {
    tasks = window.Storage.getTasks();
    goals = window.Storage.getGoals();
    settings = window.Storage.getSettings();

    renderDashboard();
    renderTasksList();
    renderGoalsList();
    renderTimeline();
    renderAnalytics();
  }

  // 1. Dashboard Render
  function renderDashboard() {
    const t = (k) => window.I18N ? window.I18N.t(k) : k;
    const budget = window.TimeEngine.calculateDailyBudget(
      settings.dayStartTime,
      settings.dayEndTime,
      tasks,
      goals
    );

    budgetPlannedVal.textContent = budget.totalPlannedFormatted;
    budgetCapacitySub.textContent = window.I18N && window.I18N.getLanguage() === 'en'
      ? `Of ${budget.availableFormatted} ${t('awakeHours')}`
      : `Daripada ${budget.availableFormatted} ${t('awakeHours')}`;

    statTaskTime.textContent = budget.taskFormatted;
    statGoalTime.textContent = budget.goalFormatted;
    statFreeTime.textContent = budget.remainingFormatted;

    const fillWidth = Math.min(100, budget.usagePercentage);
    budgetProgressFill.style.width = `${fillWidth}%`;

    if (budget.isOverbooked) {
      budgetProgressFill.className = 'progress-fill warning';
      budgetStatusPill.className = 'badge badge-priority-tinggi';
      budgetStatusPill.textContent = `${t('overbooked')} ${budget.remainingFormatted}!`;
    } else {
      budgetProgressFill.className = 'progress-fill';
      budgetStatusPill.className = 'badge badge-duration';
      budgetStatusPill.textContent = `${fillWidth}% ${t('used')}`;
    }

    // Semak Pertindihan Masa
    const overlaps = window.TimeEngine.findOverlaps(tasks);
    if (overlaps.length > 0) {
      overlapAlertContainer.innerHTML = `
        <div class="alert-banner alert-warning">
          <span>⚠️ ${overlaps.length} ${t('overlapAlert')}</span>
          <button class="btn-focus" id="btn-fix-overlap" style="margin-left:auto; font-size:0.72rem; padding:3px 8px;">
            ⚡ ${t('autoFix')}
          </button>
        </div>
      `;
      document.getElementById('btn-fix-overlap')?.addEventListener('click', handleAutoCascade);
    } else {
      overlapAlertContainer.innerHTML = '';
    }

    // Tugasan Seterusnya (Next Up Task)
    const pendingTasks = tasks.filter(t => !t.completed);
    if (pendingTasks.length > 0) {
      const nextTask = pendingTasks[0];
      const isLive = isTaskCurrentlyOngoing(nextTask);
      const catDisplay = window.I18N ? window.I18N.formatCategory(nextTask.category) : nextTask.category;
      nextTaskContainer.innerHTML = `
        <div class="task-card" style="border-left: 3px solid ${isLive ? '#10b981' : 'var(--primary)'}; ${isLive ? 'box-shadow: 0 0 20px rgba(16,185,129,0.25);' : ''}">
          <div class="task-top">
            <div class="task-details">
              <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px; flex-wrap:wrap;">
                <div class="task-title" style="margin-bottom:0;">${escapeHtml(nextTask.title)}</div>
                ${isLive ? `<span class="badge-live-pulse"><span class="pulse-dot"></span> ${window.I18N && window.I18N.getLanguage() === 'en' ? 'LIVE NOW' : 'AKTIF SEKARANG'}</span>` : ''}
              </div>
              ${nextTask.notes ? `<div class="task-notes">${escapeHtml(nextTask.notes)}</div>` : ''}
              <div class="task-meta">
                <span class="badge badge-time">⏰ ${nextTask.startTime} - ${nextTask.endTime}</span>
                <span class="badge badge-duration">⏱️ ${window.TimeEngine.formatDuration(nextTask.durationMinutes)}</span>
                <span class="badge badge-category">${escapeHtml(catDisplay)}</span>
              </div>
            </div>
          </div>
          <div class="task-actions">
            <span style="font-size:0.75rem; color:var(--text-muted);">${t('notCompleted')}</span>
            <button class="btn-focus" data-focus-task="${nextTask.id}">
              ${t('startFocusNow')}
            </button>
          </div>
        </div>
      `;
    } else {
      nextTaskContainer.innerHTML = `
        <div class="glass-card" style="text-align: center; padding: 24px 16px;">
          <div style="font-size: 2rem; margin-bottom: 8px;">🎉</div>
          <div style="font-weight: 700; color: #fff;">${t('allTasksDone')}</div>
          <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 4px;">${t('allTasksDoneSub')}</div>
        </div>
      `;
    }

    // Matlamat Hari Ini Ringkas (Dashboard)
    dashboardGoalsList.innerHTML = goals.map(g => {
      const isDone = g.completedToday || (g.actualMinutesSpent >= g.allocatedMinutes);
      return `
        <div class="goal-card" style="padding: 12px 14px; margin-bottom: 8px;">
          <div class="goal-header" style="margin-bottom: 4px;">
            <div class="goal-title" style="font-size: 0.9rem;">${escapeHtml(g.title)}</div>
            <div class="streak-pill">🔥 ${g.streakDays || 0}d</div>
          </div>
          <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.75rem; color:var(--text-muted); flex-wrap:wrap; gap:6px;">
            <span>${t('dailyAllocation')}: ${window.TimeEngine.formatDuration(g.allocatedMinutes)} / ${t('perDay')}</span>
            <div style="display:flex; align-items:center; gap:6px;">
              <span class="badge ${isDone ? 'badge-priority-tinggi' : 'badge-duration'}" style="${isDone ? 'background:rgba(16,185,129,0.2); color:#34d399;' : ''}">
                ${isDone ? t('completedToday') : `${g.actualMinutesSpent || 0}/${g.allocatedMinutes}m`}
              </span>
              <button class="btn-goal-quick-add" data-quick-goal="${g.id}" data-mins="15" title="Tambah 15 minit">+15m</button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // 2. Tasks List Render
  function renderTasksList() {
    const t = (k) => window.I18N ? window.I18N.t(k) : k;
    let filtered = [...tasks];

    if (currentTaskFilter === 'pending') {
      filtered = filtered.filter(item => !item.completed);
    } else if (currentTaskFilter !== 'all') {
      filtered = filtered.filter(item => {
        const cat = item.category || '';
        if (currentTaskFilter === 'Kerja') return cat === 'Kerja' || cat === 'Work';
        if (currentTaskFilter === 'Belajar') return cat === 'Belajar' || cat === 'Study';
        if (currentTaskFilter === 'Kesihatan') return cat === 'Kesihatan' || cat === 'Health';
        if (currentTaskFilter === 'Peribadi') return cat === 'Peribadi' || cat === 'Personal';
        return cat === currentTaskFilter;
      });
    }

    if (filtered.length === 0) {
      tasksListContainer.innerHTML = `
        <div class="glass-card" style="text-align: center; padding: 30px 16px;">
          <div style="font-size: 1.8rem; margin-bottom: 6px;">📝</div>
          <div style="font-weight: 600; color: #fff;">${t('noTasksFound')}</div>
          <div style="font-size: 0.78rem; color: var(--text-muted); margin-top: 4px;">${t('noTasksSub')}</div>
        </div>
      `;
      return;
    }

    tasksListContainer.innerHTML = filtered.map(taskItem => {
      const priorityClass = `badge-priority-${(taskItem.priority || 'sederhana').toLowerCase()}`;
      const priorityDisplay = window.I18N ? window.I18N.formatPriority(taskItem.priority) : taskItem.priority;
      const categoryDisplay = window.I18N ? window.I18N.formatCategory(taskItem.category) : taskItem.category;
      const isLive = isTaskCurrentlyOngoing(taskItem);

      return `
        <div class="task-card ${taskItem.completed ? 'completed' : ''}" data-id="${taskItem.id}" style="${isLive ? 'border-left: 3px solid #10b981; box-shadow: 0 0 15px rgba(16, 185, 129, 0.2);' : ''}">
          <div class="task-top">
            <input type="checkbox" class="custom-checkbox task-check" data-id="${taskItem.id}" ${taskItem.completed ? 'checked' : ''}>
            <div class="task-details">
              <div style="display:flex; align-items:center; gap:8px; margin-bottom:3px; flex-wrap:wrap;">
                <div class="task-title" style="margin-bottom:0;">${escapeHtml(taskItem.title)}</div>
                ${isLive ? `<span class="badge-live-pulse"><span class="pulse-dot"></span> ${window.I18N && window.I18N.getLanguage() === 'en' ? 'LIVE NOW' : 'AKTIF SEKARANG'}</span>` : ''}
              </div>
              ${taskItem.notes ? `<div class="task-notes">${escapeHtml(taskItem.notes)}</div>` : ''}
              <div class="task-meta">
                <span class="badge badge-time">⏰ ${taskItem.startTime} - ${taskItem.endTime}</span>
                <span class="badge badge-duration">⏱️ ${window.TimeEngine.formatDuration(taskItem.durationMinutes)}</span>
                <span class="badge ${priorityClass}">${priorityDisplay}</span>
                <span class="badge badge-category">${escapeHtml(categoryDisplay)}</span>
              </div>
            </div>
          </div>
          <div class="task-actions">
            <button class="btn-focus" data-focus-task="${taskItem.id}">
              ${t('startFocus')}
            </button>
            <div style="display:flex; align-items:center; gap:8px;">
              <button class="btn-delete" data-edit-task="${taskItem.id}" title="${t('edit')}">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
              </button>
              <button class="btn-delete" data-delete-task="${taskItem.id}" title="${t('delete')}">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // 3. Goals List Render
  function renderGoalsList() {
    const t = (k) => window.I18N ? window.I18N.t(k) : k;
    if (goals.length === 0) {
      goalsListContainer.innerHTML = `
        <div class="glass-card" style="text-align: center; padding: 30px 16px;">
          <div style="font-size: 1.8rem; margin-bottom: 6px;">🎯</div>
          <div style="font-weight: 600; color: #fff;">${t('noGoalsFound')}</div>
          <div style="font-size: 0.78rem; color: var(--text-muted); margin-top: 4px;">${t('noGoalsSub')}</div>
        </div>
      `;
      return;
    }

    const dayWord = window.I18N && window.I18N.getLanguage() === 'en' ? 'Days' : 'Hari';
    const hourUnit = window.I18N && window.I18N.getLanguage() === 'en' ? 'h' : 'j';

    goalsListContainer.innerHTML = goals.map(g => {
      const isDone = g.completedToday || (g.actualMinutesSpent >= g.allocatedMinutes);
      const percent = Math.min(100, Math.round(((g.actualMinutesSpent || 0) / (g.allocatedMinutes || 1)) * 100));

      return `
        <div class="goal-card" data-id="${g.id}">
          <div class="goal-header">
            <div class="goal-title">${escapeHtml(g.title)}</div>
            <div class="streak-pill">🔥 ${g.streakDays || 0} ${dayWord}</div>
          </div>

          <div class="goal-calc-info">
            ${t('dailyAllocation')}: <strong>${window.TimeEngine.formatDuration(g.allocatedMinutes)} / ${t('perDay')}</strong>
            <span style="font-size: 0.72rem; color: var(--text-muted);">(${g.weeklyTargetHours}${hourUnit} ${t('perWeek')} / ${g.daysPerWeek} ${t('days')})</span>
          </div>

          ${g.notes ? `<div style="font-size:0.75rem; color:var(--text-muted); margin-bottom:8px;">💡 ${escapeHtml(g.notes)}</div>` : ''}

          <div class="progress-track" style="margin: 6px 0 10px;">
            <div class="progress-fill" style="width: ${percent}%; ${isDone ? 'background:#10b981;' : ''}"></div>
          </div>

          <div class="goal-footer" style="flex-wrap:wrap; gap:8px;">
            <span style="font-size: 0.75rem; color: var(--text-muted);">
              ${t('timeSpent')}: <strong style="color: #fff;">${g.actualMinutesSpent || 0}m</strong> / ${g.allocatedMinutes}m
            </span>
            <div style="display:flex; align-items:center; gap:6px;">
              <button class="btn-goal-quick-add" data-quick-goal="${g.id}" data-mins="15" title="Tambah 15 minit">+15m</button>
              <button class="btn-goal-quick-add" data-quick-goal="${g.id}" data-mins="30" title="Tambah 30 minit">+30m</button>
              <button class="btn-focus" data-focus-goal="${g.id}">
                ${t('goalSession')}
              </button>
              <button class="btn-delete" data-delete-goal="${g.id}" title="${t('delete')}">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // 4. Timeline Render (Time-Blocking)
  function renderTimeline() {
    const t = (k) => window.I18N ? window.I18N.t(k) : k;
    const sortedTasks = [...tasks].sort((a, b) => {
      return window.TimeEngine.timeToMinutes(a.startTime) - window.TimeEngine.timeToMinutes(b.startTime);
    });

    if (sortedTasks.length === 0) {
      timelineBlocksContainer.innerHTML = `
        <div class="timeline-line"></div>
        <div style="padding: 20px 0; color: var(--text-muted); font-size: 0.8rem; text-align: center;">
          ${t('noTimelineBlocks')}
        </div>
      `;
      return;
    }

    timelineBlocksContainer.innerHTML = `
      <div class="timeline-line"></div>
      ${sortedTasks.map(taskItem => {
        const catDisplay = window.I18N ? window.I18N.formatCategory(taskItem.category) : taskItem.category;
        return `
          <div class="timeline-item">
            <div class="timeline-time-label">${taskItem.startTime}</div>
            <div class="timeline-node"></div>
            <div class="timeline-card">
              <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                <div style="font-size: 0.88rem; font-weight: 700; color: #fff;">${escapeHtml(taskItem.title)}</div>
                <span class="badge badge-duration" style="font-size: 0.68rem;">${window.TimeEngine.formatDuration(taskItem.durationMinutes)}</span>
              </div>
              <div style="display: flex; align-items: center; gap: 8px; margin-top: 6px; font-size: 0.72rem; color: var(--text-muted);">
                <span>⏰ ${taskItem.startTime} - ${taskItem.endTime}</span>
                <span>•</span>
                <span style="color: ${window.Analytics.CATEGORY_COLORS[taskItem.category] || '#a855f7'}; font-weight: 600;">${catDisplay}</span>
                ${taskItem.completed ? `<span style="color: #10b981; font-weight: 700; margin-left: auto;">✓ ${t('done')}</span>` : ''}
              </div>
            </div>
          </div>
        `;
      }).join('')}
    `;
  }

  // 5. Analytics Render
  function renderAnalytics() {
    const t = (k) => window.I18N ? window.I18N.t(k) : k;
    const isEn = window.I18N && window.I18N.getLanguage() === 'en';
    const metrics = window.Analytics.getDailyMetrics(tasks, goals);

    analyticsStreakBadge.textContent = isEn
      ? `🔥 ${metrics.maxStreak} ${t('longestStreak')}`
      : `🔥 ${metrics.maxStreak} ${t('longestStreak')}`;

    // Render Donut Chart
    donutChartContainer.innerHTML = window.Analytics.renderCategoryDonut(metrics.categoryBreakdown, 180);

    // Render Legend
    const cats = Object.keys(metrics.categoryBreakdown);
    if (cats.length === 0) {
      categoryLegendContainer.innerHTML = `<span style="color:var(--text-muted); font-size:0.75rem;">${t('noCategoryData')}</span>`;
    } else {
      categoryLegendContainer.innerHTML = cats.map(c => {
        const item = metrics.categoryBreakdown[c];
        const catLabel = window.I18N ? window.I18N.formatCategory(c) : c;
        return `
          <div style="display: flex; align-items: center; gap: 5px; font-size: 0.75rem;">
            <div style="width: 10px; height: 10px; border-radius: 2px; background: ${item.color};"></div>
            <span style="color: #cbd5e1;">${catLabel}: <strong>${window.TimeEngine.formatDuration(item.plannedMinutes)}</strong></span>
          </div>
        `;
      }).join('');
    }

    // Format WhatsApp / Text Agenda
    const todayFormatted = window.I18N ? window.I18N.formatDate(new Date()) : new Date().toDateString();
    let agenda = isEn
      ? `📅 *Daily Schedule (${todayFormatted})*\n`
      : `📅 *Jadual Harian (${todayFormatted})*\n`;

    agenda += isEn
      ? `⏱️ Total Planned Time: ${window.TimeEngine.formatDuration(metrics.totalPlannedMinutes)}\n`
      : `⏱️ Jumlah Masa Dirancang: ${window.TimeEngine.formatDuration(metrics.totalPlannedMinutes)}\n`;

    agenda += `--------------------------------\n`;
    agenda += isEn ? `*Tasks:*\n` : `*Tugasan:*\n`;

    const sortedTasks = [...tasks].sort((a, b) => window.TimeEngine.timeToMinutes(a.startTime) - window.TimeEngine.timeToMinutes(b.startTime));
    sortedTasks.forEach((taskItem, i) => {
      agenda += `${i + 1}. [${taskItem.startTime} - ${taskItem.endTime}] ${taskItem.title} (${window.TimeEngine.formatDuration(taskItem.durationMinutes)}) ${taskItem.completed ? '✅' : '⏳'}\n`;
    });

    if (goals.length > 0) {
      agenda += isEn ? `\n*Daily Goals:*\n` : `\n*Matlamat Harian:*\n`;
      const perDayWord = t('perDay');
      goals.forEach((g) => {
        agenda += `🎯 ${g.title}: ${window.TimeEngine.formatDuration(g.allocatedMinutes)} / ${perDayWord} (Streak: ${g.streakDays || 0}d)\n`;
      });
    }

    agendaTextPreview.textContent = agenda;
  }

  // ================= PENGENDALIAN ACARA (EVENT LISTENERS) =================
  function bindEvents() {
    // Penukar Bahasa Header (Pill)
    langToggle.addEventListener('click', () => {
      const current = window.I18N ? window.I18N.getLanguage() : 'ms';
      const next = current === 'ms' ? 'en' : 'ms';
      switchLanguage(next);
    });

    // Pilihan Bahasa dalam Modal Tetapan
    settingLanguage.addEventListener('change', (e) => {
      switchLanguage(e.target.value);
    });

    // Navigasi Tab
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        const targetTab = item.dataset.tab;
        switchTab(targetTab);
      });
    });

    // Pautan Pantas Dashboard
    document.getElementById('btn-jump-tasks')?.addEventListener('click', () => switchTab('tab-tasks'));
    document.getElementById('btn-jump-goals')?.addEventListener('click', () => switchTab('tab-goals'));

    // Filter Tugasan
    filterPills.forEach((pill, idx) => {
      pill.addEventListener('click', () => {
        filterPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');

        const filterMap = ['all', 'Kerja', 'Belajar', 'Kesihatan', 'Peribadi', 'pending'];
        currentTaskFilter = filterMap[idx] || 'all';
        renderTasksList();
      });
    });

    // Buka Modal Tugasan Baru (FAB)
    fabQuickAdd.addEventListener('click', () => {
      openTaskModal();
    });

    // Buka Modal Matlamat Baru
    btnAddGoalTop.addEventListener('click', () => {
      openGoalModal();
    });

    // Pengiraan Langsung Waktu Mula & Tamat Tugasan
    taskStartInput.addEventListener('input', updateLiveTaskDuration);
    taskEndInput.addEventListener('input', updateLiveTaskDuration);

    // Pengiraan Langsung Matlamat
    goalHoursInput.addEventListener('input', updateLiveGoalCalculation);
    goalDaysInput.addEventListener('change', updateLiveGoalCalculation);

    // Butang Pintas Durasi Pantas (+15m, +30m, +45m, +1j, +1j 30m, +2j)
    const presetPillsContainer = document.getElementById('task-duration-presets');
    if (presetPillsContainer) {
      presetPillsContainer.addEventListener('click', (e) => {
        const btn = e.target.closest('.preset-pill');
        if (!btn) return;
        const mins = parseInt(btn.dataset.mins, 10);
        if (!mins) return;

        presetPillsContainer.querySelectorAll('.preset-pill').forEach(p => p.classList.remove('active'));
        btn.classList.add('active');

        const startVal = taskStartInput.value || '09:00';
        const startMins = window.TimeEngine.timeToMinutes(startVal);
        const endMins = startMins + mins;
        taskEndInput.value = window.TimeEngine.minutesToTime(endMins);

        updateLiveTaskDuration();
        triggerHaptic([25]);
        playAudioChime('pop');
      });
    }

    // Simpan Tugasan (Borang)
    formTask.addEventListener('submit', (e) => {
      e.preventDefault();
      saveTaskFromForm();
    });

    // Simpan Matlamat (Borang)
    formGoal.addEventListener('submit', (e) => {
      e.preventDefault();
      saveGoalFromForm();
    });

    // Tutup Modals (Butang Batal & Butang X Atas)
    btnCloseTaskModal.addEventListener('click', () => modalTask.classList.remove('active'));
    btnCloseGoalModal.addEventListener('click', () => modalGoal.classList.remove('active'));
    btnCloseSettings.addEventListener('click', () => modalSettings.classList.remove('active'));

    const btnXCloseTask = document.getElementById('btn-x-close-task');
    if (btnXCloseTask) btnXCloseTask.addEventListener('click', () => modalTask.classList.remove('active'));

    const btnXCloseGoal = document.getElementById('btn-x-close-goal');
    if (btnXCloseGoal) btnXCloseGoal.addEventListener('click', () => modalGoal.classList.remove('active'));

    const btnXCloseSettings = document.getElementById('btn-x-close-settings');
    if (btnXCloseSettings) btnXCloseSettings.addEventListener('click', () => modalSettings.classList.remove('active'));

    // Tutup Modal Bila Ketuk Latar Gelap (Backdrop Tap to Dismiss)
    [modalTask, modalGoal, modalSettings].forEach(overlay => {
      if (overlay) {
        overlay.addEventListener('click', (e) => {
          if (e.target === overlay) {
            overlay.classList.remove('active');
          }
        });
      }
    });

    // Tutup Modal Bila Ketuk Pemegang Atas (Modal Handle)
    document.querySelectorAll('.modal-handle').forEach(handle => {
      handle.addEventListener('click', () => {
        modalTask.classList.remove('active');
        modalGoal.classList.remove('active');
        modalSettings.classList.remove('active');
      });
    });

    // Tutup Menggunakan Papan Kekunci ESC
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        modalTask.classList.remove('active');
        modalGoal.classList.remove('active');
        modalSettings.classList.remove('active');
        if (modalTimer) modalTimer.classList.remove('active');
      }
    });

    // Buka Tetapan
    btnOpenSettings.addEventListener('click', () => modalSettings.classList.add('active'));
    btnAutoScheduleHeader.addEventListener('click', () => modalSettings.classList.add('active'));

    // Simpan Tetapan
    btnSaveSettings.addEventListener('click', () => {
      settings.dayStartTime = settingDayStart.value;
      settings.dayEndTime = settingDayEnd.value;
      settings.defaultBreakMinutes = parseInt(settingBreakMins.value, 10) || 10;
      settings.language = settingLanguage.value || 'ms';
      window.Storage.saveSettings(settings);
      modalSettings.classList.remove('active');
      renderAll();
    });

    // Laksana Auto-Susun Jadual (Cascading)
    btnApplyAutoSchedule.addEventListener('click', () => {
      settings.dayStartTime = settingDayStart.value;
      settings.dayEndTime = settingDayEnd.value;
      settings.defaultBreakMinutes = parseInt(settingBreakMins.value, 10) || 10;
      settings.language = settingLanguage.value || 'ms';
      window.Storage.saveSettings(settings);
      handleAutoCascade();
      modalSettings.classList.remove('active');
    });

    btnTaskAutoCascade.addEventListener('click', handleAutoCascade);

    // Tindakan Interaktif Pada Senarai Tugasan (Check, Delete, Edit, Focus)
    tasksListContainer.addEventListener('click', (e) => {
      const checkEl = e.target.closest('.task-check');
      if (checkEl) {
        const id = checkEl.dataset.id;
        toggleTaskComplete(id, checkEl.checked);
        return;
      }

      const delBtn = e.target.closest('[data-delete-task]');
      if (delBtn) {
        const id = delBtn.dataset.deleteTask;
        deleteTask(id);
        return;
      }

      const editBtn = e.target.closest('[data-edit-task]');
      if (editBtn) {
        const id = editBtn.dataset.editTask;
        openTaskModal(id);
        return;
      }

      const focusBtn = e.target.closest('[data-focus-task]');
      if (focusBtn) {
        const id = focusBtn.dataset.focusTask;
        startFocusForTask(id);
        return;
      }
    });

    // Tindakan Pada Dashboard Next Task
    nextTaskContainer.addEventListener('click', (e) => {
      const focusBtn = e.target.closest('[data-focus-task]');
      if (focusBtn) {
        const id = focusBtn.dataset.focusTask;
        startFocusForTask(id);
      }
    });

    // Tindakan Pada Dashboard Matlamat (Pintas Tambah Masa)
    dashboardGoalsList.addEventListener('click', (e) => {
      const qBtn = e.target.closest('[data-quick-goal]');
      if (qBtn) {
        const id = qBtn.dataset.quickGoal;
        const mins = parseInt(qBtn.dataset.mins, 10) || 15;
        addGoalQuickMinutes(id, mins);
      }
    });

    // Tindakan Pada Senarai Matlamat (Delete, Focus & Pintas Tambah Masa)
    goalsListContainer.addEventListener('click', (e) => {
      const qBtn = e.target.closest('[data-quick-goal]');
      if (qBtn) {
        const id = qBtn.dataset.quickGoal;
        const mins = parseInt(qBtn.dataset.mins, 10) || 15;
        addGoalQuickMinutes(id, mins);
        return;
      }

      const delBtn = e.target.closest('[data-delete-goal]');
      if (delBtn) {
        const id = delBtn.dataset.deleteGoal;
        deleteGoal(id);
        return;
      }

      const focusBtn = e.target.closest('[data-focus-goal]');
      if (focusBtn) {
        const id = focusBtn.dataset.focusGoal;
        startFocusForGoal(id);
        return;
      }
    });

    // Salin Teks Agenda ke Papan Keratan (Clipboard)
    btnCopyAgenda.addEventListener('click', () => {
      const t = (k) => window.I18N ? window.I18N.t(k) : k;
      navigator.clipboard.writeText(agendaTextPreview.textContent).then(() => {
        btnCopyAgenda.textContent = t('copied');
        setTimeout(() => { btnCopyAgenda.textContent = t('copyText'); }, 2000);
      });
    });

    // Eksport & Import Data
    btnExportData.addEventListener('click', () => {
      window.Storage.exportDataJSON();
      showToast('Fail sandaran data JSON dimuat turun! 💾', 'success');
      playAudioChime('success');
    });
    btnImportTrigger.addEventListener('click', () => fileImportInput.click());

    fileImportInput.addEventListener('change', (e) => {
      const t = (k) => window.I18N ? window.I18N.t(k) : k;
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (event) => {
        const success = window.Storage.importDataJSON(event.target.result);
        if (success) {
          showToast(t('importSuccess') || 'Data berjaya diimport! 📥', 'success');
          playAudioChime('complete');
          renderAll();
        } else {
          showToast(t('importError') || 'Ralat mengimport fail data', 'warning');
        }
      };
      reader.readAsText(file);
    });

    // Pulihkan Demo
    btnResetDemo.addEventListener('click', () => {
      const t = (k) => window.I18N ? window.I18N.t(k) : k;
      if (confirm(t('confirmResetDemo'))) {
        window.Storage.resetToDefaults();
        renderAll();
      }
    });
  }

  // Tukar Tab Navigasi
  function switchTab(tabId) {
    currentTab = tabId;
    navItems.forEach(item => {
      item.classList.toggle('active', item.dataset.tab === tabId);
    });
    tabPanes.forEach(pane => {
      pane.classList.toggle('active', pane.id === tabId);
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Buka Modal Tugasan
  function openTaskModal(editId = null) {
    const t = (k) => window.I18N ? window.I18N.t(k) : k;
    if (editId) {
      const taskItem = tasks.find(item => item.id === editId);
      if (taskItem) {
        modalTaskTitle.textContent = t('editTaskTitle');
        taskIdInput.value = taskItem.id;
        taskTitleInput.value = taskItem.title;
        taskCategoryInput.value = taskItem.category;
        taskPriorityInput.value = taskItem.priority;
        taskStartInput.value = taskItem.startTime;
        taskEndInput.value = taskItem.endTime;
        taskNotesInput.value = taskItem.notes || '';
      }
    } else {
      modalTaskTitle.textContent = t('addTaskTitle');
      taskIdInput.value = '';
      formTask.reset();

      if (tasks.length > 0) {
        const last = tasks[tasks.length - 1];
        const nextStartMins = window.TimeEngine.timeToMinutes(last.endTime) + 10;
        taskStartInput.value = window.TimeEngine.minutesToTime(nextStartMins);
        taskEndInput.value = window.TimeEngine.minutesToTime(nextStartMins + 45);
      } else {
        taskStartInput.value = settings.dayStartTime || '09:00';
        taskEndInput.value = window.TimeEngine.minutesToTime(window.TimeEngine.timeToMinutes(taskStartInput.value) + 45);
      }
    }

    updateLiveTaskDuration();
    modalTask.classList.add('active');
    taskTitleInput.focus();
  }

  // Buka Modal Matlamat
  function openGoalModal() {
    formGoal.reset();
    goalHoursInput.value = '3.5';
    goalDaysInput.value = '5';
    updateLiveGoalCalculation();
    modalGoal.classList.add('active');
    goalTitleInput.focus();
  }

  // Simpan Tugasan Baru / Sunting
  function saveTaskFromForm() {
    const title = taskTitleInput.value.trim();
    if (!title) return;

    const start = taskStartInput.value;
    const end = taskEndInput.value;
    const { minutes } = window.TimeEngine.calculateDuration(start, end);

    const editId = taskIdInput.value;
    if (editId) {
      const idx = tasks.findIndex(item => item.id === editId);
      if (idx !== -1) {
        tasks[idx] = {
          ...tasks[idx],
          title,
          category: taskCategoryInput.value,
          priority: taskPriorityInput.value,
          startTime: start,
          endTime: end,
          durationMinutes: minutes,
          notes: taskNotesInput.value.trim()
        };
      }
    } else {
      const newTask = {
        id: 'task-' + Date.now(),
        title,
        category: taskCategoryInput.value,
        priority: taskPriorityInput.value,
        startTime: start,
        endTime: end,
        durationMinutes: minutes,
        actualMinutesSpent: 0,
        completed: false,
        notes: taskNotesInput.value.trim()
      };
      tasks.push(newTask);
    }

    window.Storage.saveTasks(tasks);
    modalTask.classList.remove('active');
    renderAll();

    const isEn = window.I18N && window.I18N.getLanguage() === 'en';
    showToast(editId ? (isEn ? 'Task updated! ⚡' : 'Tugasan dikemaskini! ⚡') : (isEn ? 'New task added! ⚡' : 'Tugasan berjaya ditambah! ⚡'), 'success');
    playAudioChime('success');
    triggerHaptic([30, 40]);
  }

  // Simpan Matlamat Baru
  function saveGoalFromForm() {
    const title = goalTitleInput.value.trim();
    if (!title) return;

    const hours = parseFloat(goalHoursInput.value) || 0;
    const days = parseInt(goalDaysInput.value, 10) || 5;
    const { dailyMinutes } = window.TimeEngine.calculateDailyGoalCommitment(hours, days);

    const newGoal = {
      id: 'goal-' + Date.now(),
      title,
      category: goalCategoryInput.value,
      weeklyTargetHours: hours,
      daysPerWeek: days,
      allocatedMinutes: dailyMinutes,
      actualMinutesSpent: 0,
      completedToday: false,
      streakDays: 1,
      notes: goalNotesInput.value.trim()
    };

    goals.push(newGoal);
    window.Storage.saveGoals(goals);
    modalGoal.classList.remove('active');
    renderAll();

    const isEn = window.I18N && window.I18N.getLanguage() === 'en';
    showToast(isEn ? 'New goal added! 🎯' : 'Matlamat berjaya ditambah! 🎯', 'success');
    playAudioChime('success');
    triggerHaptic([30, 40]);
  }

  // Togol Siap Tugasan
  function toggleTaskComplete(id, isCompleted) {
    const idx = tasks.findIndex(item => item.id === id);
    if (idx !== -1) {
      tasks[idx].completed = isCompleted;
      if (isCompleted && (!tasks[idx].actualMinutesSpent || tasks[idx].actualMinutesSpent === 0)) {
        tasks[idx].actualMinutesSpent = tasks[idx].durationMinutes;
      }
      window.Storage.saveTasks(tasks);
      renderAll();

      if (isCompleted) {
        const isEn = window.I18N && window.I18N.getLanguage() === 'en';
        showToast(isEn ? 'Task completed! 🎉' : 'Tahniah! Tugasan telah diselesaikan! 🎉', 'success');
        playAudioChime('complete');
        triggerHaptic([40, 30, 50]);
      }
    }
  }

  // Padam Tugasan
  function deleteTask(id) {
    const t = (k) => window.I18N ? window.I18N.t(k) : k;
    if (confirm(t('confirmDeleteTask'))) {
      tasks = tasks.filter(item => item.id !== id);
      window.Storage.saveTasks(tasks);
      if (typeof fetch !== 'undefined') {
        fetch(`/api/tasks/${id}`, { method: 'DELETE' }).catch(() => {});
      }
      renderAll();
    }
  }

  // Padam Matlamat
  function deleteGoal(id) {
    const t = (k) => window.I18N ? window.I18N.t(k) : k;
    if (confirm(t('confirmDeleteGoal'))) {
      goals = goals.filter(item => item.id !== id);
      window.Storage.saveGoals(goals);
      if (typeof fetch !== 'undefined') {
        fetch(`/api/goals/${id}`, { method: 'DELETE' }).catch(() => {});
      }
      renderAll();
    }
  }

  // Auto-Susun Jadual Berperingkat
  function handleAutoCascade() {
    const buffer = parseInt(settings.defaultBreakMinutes, 10) || 10;
    const anchor = settings.dayStartTime || '08:00';
    tasks = window.TimeEngine.autoCascadeSchedule(anchor, tasks, buffer);
    window.Storage.saveTasks(tasks);
    renderAll();
  }

  // ================= LIVE FOCUS TIMER HANDLING =================
  function bindTimerEvents() {
    const t = (k) => window.I18N ? window.I18N.t(k) : k;

    // Buka / Tutup Modal Pemasa
    btnCloseTimer.addEventListener('click', () => {
      modalTimer.classList.remove('active');
      updateMiniTimer();
    });

    miniTimerWidget.addEventListener('click', () => {
      modalTimer.classList.add('active');
    });

    // Togol Mula / Jeda
    btnTimerToggle.addEventListener('click', () => {
      if (window.Timer.isRunning) {
        window.Timer.pause();
      } else {
        window.Timer.start();
      }
    });

    // Reset Pemasa
    btnTimerReset.addEventListener('click', () => {
      window.Timer.reset();
    });

    // Selesaikan Sesi
    btnTimerMarkDone.addEventListener('click', () => {
      const minutes = window.Timer.finishCurrentSession();
      if (minutes !== null) {
        modalTimer.classList.remove('active');
        miniTimerWidget.classList.remove('active');
        renderAll();
      }
    });

    // Langgan kemas kini saat pemasa
    window.Timer.onTick((state) => {
      timerCountdownDisplay.textContent = state.formattedTime;

      const circumference = 276.46; // 2 * pi * 44
      const offset = circumference * (1 - state.progress);
      timerRingProgress.style.strokeDashoffset = offset;

      if (state.isRunning) {
        timerIconPlay.style.display = 'none';
        timerIconPause.style.display = 'block';
      } else {
        timerIconPlay.style.display = 'block';
        timerIconPause.style.display = 'none';
      }

      updateMiniTimer();
    });

    window.Timer.onComplete((state) => {
      const itemTitle = state.item ? state.item.title : 'Focus Session';
      showToast(`⏱️ ${t('timerFinishedAlert')}: ${itemTitle}!`, 'success');
      playAudioChime('complete');
      triggerHaptic([60, 50, 60, 50, 80]);
      window.Timer.finishCurrentSession();
      modalTimer.classList.remove('active');
      miniTimerWidget.classList.remove('active');
      renderAll();
    });
  }

  function startFocusForTask(id) {
    const taskItem = tasks.find(item => item.id === id);
    if (!taskItem) return;

    const t = (k) => window.I18N ? window.I18N.t(k) : k;
    timerTag.textContent = t('focusTaskTag');
    timerItemTitle.textContent = taskItem.title;
    window.Timer.setItem(taskItem, 'task', 'countdown');
    modalTimer.classList.add('active');
    window.Timer.start();
  }

  function startFocusForGoal(id) {
    const goalItem = goals.find(item => item.id === id);
    if (!goalItem) return;

    const t = (k) => window.I18N ? window.I18N.t(k) : k;
    timerTag.textContent = t('focusGoalTag');
    timerItemTitle.textContent = goalItem.title;
    window.Timer.setItem(goalItem, 'goal', 'countdown');
    modalTimer.classList.add('active');
    window.Timer.start();
  }

  function updateMiniTimer() {
    const state = window.Timer.getState();
    if (state.isRunning && !modalTimer.classList.contains('active')) {
      miniTimerWidget.classList.add('active');
      miniTimerText.textContent = state.formattedTime;
      miniTimerTitle.textContent = state.item ? state.item.title : 'Focus';
    } else if (!state.isRunning) {
      miniTimerWidget.classList.remove('active');
    }
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>"']/g, m => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    })[m]);
  }

  // Mulakan Aplikasi
  initApp();
});

