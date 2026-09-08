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
      sessionLogged: 'Sesi anda telah direkodkan.',

      // Pengesahan & Pengguna (Auth)
      authModalTitleLogin: 'Log Masuk DailyPulse',
      authModalTitleSignup: 'Daftar Akaun DailyPulse',
      authModalSubtitle: 'Segerakkan tugasan & matlamat anda merentasi semua peranti dengan selamat.',
      loginTab: 'Log Masuk',
      signupTab: 'Daftar Akaun',
      btnGoogleAuth: 'Teruskan dengan Google',
      orDivider: 'atau guna emel',
      fullNameLabel: 'Nama Penuh',
      fullNamePlaceholder: 'Cth: Ahmad Razak',
      emailLabel: 'Alamat Emel',
      emailPlaceholder: 'nama@contoh.com',
      passwordLabel: 'Kata Laluan',
      passwordPlaceholder: 'Sekurang-kurangnya 6 aksara',
      btnSubmitLogin: 'Log Masuk Sekarang',
      btnSubmitSignup: 'Daftar Akaun Percuma',
      guestModeNote: 'Data anda disimpan secara peribadi & selamat.',
      alreadyHaveAccount: 'Sudah mempunyai akaun?',
      dontHaveAccount: 'Belum mempunyai akaun?',
      switchToSignup: 'Daftar sekarang',
      switchToLogin: 'Log masuk di sini',
      profileMenu: 'Profil Pengguna',
      guestUser: 'Tetamu / Demo',
      loggedInAs: 'Log masuk sebagai',
      logoutBtn: 'Log Keluar',
      loginRequiredMsg: 'Sila log masuk untuk menyimpan data ke awan.',
      loginSuccessMsg: 'Selamat kembali!',
      signupSuccessMsg: 'Akaun anda berjaya dicipta!',
      logoutSuccessMsg: 'Anda telah log keluar.',
      errFillAll: 'Sila lengkapkan semua ruangan.',
      errPassTooShort: 'Kata laluan mestilah sekurang-kurangnya 6 aksara.',

      // AI Scheduler & Optimization
      aiSchedulerTitle: 'Pembantu Jadual Pintar AI',
      aiSchedulerSub: 'Masukkan senarai tugasan mentah, AI akan susun masa mula/tamat & beri cadangan penjimatan masa.',
      aiPromptPlaceholder: 'Taip atau tampal apa sahaja senarai tugasan di sini...\nCth:\n- Jogging 30 minit\n- Meeting client pukul 2 petang (1 jam)\n- Siapkan proposal slide 1 jam\n- Balas emel penting\n- Basuh kereta',
      aiStartTimeLabel: 'Waktu Mula',
      aiUseCurrentTime: 'Waktu Sekarang',
      aiPacingLabel: 'Gaya Kerja (Pacing)',
      aiPacingBalanced: '⚖️ Seimbang (Rehat 10m)',
      aiPacingDeepWork: '🚀 Deep Work (Tugasan Berat Pagi)',
      aiPacingPomodoro: '🍅 Pomodoro (Blok 25-50m)',
      aiBufferLabel: 'Masa Rehat Antara Tugasan',
      aiBtnGenerate: '✨ Jana Jadual Pintar AI',
      aiGenerating: 'AI Sedang Menganalisis & Menyusun...',
      aiSummaryHeader: 'Ringkasan Jadual AI',
      aiTotalFocus: 'Jumlah Fokus',
      aiProjectedEnd: 'Anggaran Tamat',
      aiTimeSaved: 'Penjimatan Masa',
      aiOptimizeAllBtn: '⚡ Terapkan Semua Cadangan AI',
      aiApplyToScheduleBtn: '✅ Terapkan ke Jadual Harian Saya',
      aiRegenerateBtn: '🔄 Jana Semula',
      aiTemplateBusyWork: '💼 Hari Kerja Sibuk',
      aiTemplateStudy: '📚 Ulang Kaji / Belajar',
      aiTemplateWeekend: '✨ Hujung Minggu Santai',
      aiSuccessApplied: 'Jadual AI berjaya diterapkan ke senarai tugasan anda!'
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
      sessionLogged: 'Your session has been logged.',

      // Authentication & Users
      authModalTitleLogin: 'Sign In to DailyPulse',
      authModalTitleSignup: 'Create DailyPulse Account',
      authModalSubtitle: 'Sync your daily tasks and goals securely across all your devices.',
      loginTab: 'Sign In',
      signupTab: 'Sign Up',
      btnGoogleAuth: 'Continue with Google',
      orDivider: 'or continue with email',
      fullNameLabel: 'Full Name',
      fullNamePlaceholder: 'E.g., John Doe',
      emailLabel: 'Email Address',
      emailPlaceholder: 'name@example.com',
      passwordLabel: 'Password',
      passwordPlaceholder: 'At least 6 characters',
      btnSubmitLogin: 'Sign In Now',
      btnSubmitSignup: 'Create Free Account',
      guestModeNote: 'Your data is securely and privately partitioned.',
      alreadyHaveAccount: 'Already have an account?',
      dontHaveAccount: "Don't have an account?",
      switchToSignup: 'Sign up now',
      switchToLogin: 'Sign in here',
      profileMenu: 'User Profile',
      guestUser: 'Guest / Demo',
      loggedInAs: 'Signed in as',
      logoutBtn: 'Sign Out',
      loginRequiredMsg: 'Please sign in to sync your data with the cloud.',
      loginSuccessMsg: 'Welcome back!',
      signupSuccessMsg: 'Account created successfully!',
      logoutSuccessMsg: 'You have signed out.',
      errFillAll: 'Please fill in all required fields.',
      errPassTooShort: 'Password must be at least 6 characters.',

      // AI Scheduler & Optimization
      aiSchedulerTitle: 'AI Smart Schedule Architect',
      aiSchedulerSub: 'Input a raw task list, AI will calculate sequential start/end times & suggest time optimizations.',
      aiPromptPlaceholder: 'Type or paste any tasks or brain dump here...\nE.g.:\n- Jogging 30 minutes\n- Client meeting at 2:00 PM (1 hour)\n- Finish proposal slides 1 hour\n- Reply critical emails\n- Wash car',
      aiStartTimeLabel: 'Start Time',
      aiUseCurrentTime: 'Use Current Time',
      aiPacingLabel: 'Work Pacing Style',
      aiPacingBalanced: '⚖️ Balanced (10m Break)',
      aiPacingDeepWork: '🚀 Deep Work (Heavy Tasks First)',
      aiPacingPomodoro: '🍅 Pomodoro (25-50m Blocks)',
      aiBufferLabel: 'Rest Buffer Between Tasks',
      aiBtnGenerate: '✨ Generate AI Schedule',
      aiGenerating: 'AI is Analyzing & Scheduling...',
      aiSummaryHeader: 'AI Schedule Summary',
      aiTotalFocus: 'Total Focus',
      aiProjectedEnd: 'Projected Finish',
      aiTimeSaved: 'Time Saved',
      aiOptimizeAllBtn: '⚡ Apply All AI Suggestions',
      aiApplyToScheduleBtn: '✅ Apply to My Daily Schedule',
      aiRegenerateBtn: '🔄 Regenerate',
      aiTemplateBusyWork: '💼 Busy Work Day',
      aiTemplateStudy: '📚 Study & Exam Prep',
      aiTemplateWeekend: '✨ Relaxed Weekend',
      aiSuccessApplied: 'AI schedule successfully applied to your daily planner!'
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

// Export ke window untuk kegunaan global dalam pelayar & CommonJS untuk Node.js
if (typeof window !== 'undefined') {
  window.TimeEngine = TimeEngine;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = TimeEngine;
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
  HISTORY: 'DAILY_PULSE_HISTORY',
  AUTH_TOKEN: 'DAILY_PULSE_AUTH_TOKEN',
  AUTH_USER: 'DAILY_PULSE_AUTH_USER'
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
  onAuthCallbacks: [],

  // ================= AUTHENTICATION MANAGEMENT =================
  getAuthToken() {
    try {
      return localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN) || null;
    } catch (e) {
      return null;
    }
  },

  getAuthUser() {
    try {
      const u = localStorage.getItem(STORAGE_KEYS.AUTH_USER);
      return u ? JSON.parse(u) : null;
    } catch (e) {
      return null;
    }
  },

  setSession(token, user) {
    try {
      if (token) localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, token);
      if (user) localStorage.setItem(STORAGE_KEYS.AUTH_USER, JSON.stringify(user));
      this.notifyAuth(user);
    } catch (e) {
      console.error('Ralat simpan sesi pengguna:', e);
    }
  },

  clearSession() {
    try {
      localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
      localStorage.removeItem(STORAGE_KEYS.AUTH_USER);
      this.notifyAuth(null);
    } catch (e) {
      console.error('Ralat padam sesi pengguna:', e);
    }
  },

  isAuthenticated() {
    return !!this.getAuthToken();
  },

  getAuthHeaders() {
    const headers = { 'Content-Type': 'application/json' };
    const token = this.getAuthToken();
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
    return headers;
  },

  onAuth(callback) {
    this.onAuthCallbacks.push(callback);
  },

  notifyAuth(user) {
    this.onAuthCallbacks.forEach(cb => {
      try { cb(user); } catch (err) { console.error(err); }
    });
  },

  async register({ name, email, password }) {
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password })
    });
    const data = await res.json();
    if (!res.ok || !data.success) {
      throw new Error(data.error || 'Pendaftaran gagal');
    }
    this.setSession(data.token, data.user);
    await this.initCloudSync();
    return data;
  },

  async login({ email, password }) {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    if (!res.ok || !data.success) {
      throw new Error(data.error || 'Log masuk gagal');
    }
    this.setSession(data.token, data.user);
    await this.initCloudSync();
    return data;
  },

  async loginWithGoogle({ credential, email, name, avatar }) {
    const res = await fetch('/api/auth/google', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ credential, email, name, avatar })
    });
    const data = await res.json();
    if (!res.ok || !data.success) {
      throw new Error(data.error || 'Log masuk Google gagal');
    }
    this.setSession(data.token, data.user);
    await this.initCloudSync();
    return data;
  },

  async logout() {
    const token = this.getAuthToken();
    if (token) {
      try {
        await fetch('/api/auth/logout', {
          method: 'POST',
          headers: this.getAuthHeaders()
        });
      } catch (e) {}
    }
    this.clearSession();
    // Muat semula data demo/awam
    await this.initCloudSync();
    return true;
  },

  async checkAuthStatus() {
    const token = this.getAuthToken();
    if (!token) return null;
    try {
      const res = await fetch('/api/auth/me', {
        headers: this.getAuthHeaders()
      });
      if (res.ok) {
        const data = await res.json();
        if (data.success && data.user) {
          this.setSession(token, data.user);
          return data.user;
        }
      }
      this.clearSession();
      return null;
    } catch (e) {
      return this.getAuthUser();
    }
  },

  /**
   * Muat turun data terkini dari REST API pelayan mengikut pengguna aktif
   */
  async initCloudSync() {
    try {
      const res = await fetch('/api/health');
      if (res.ok) {
        this.isCloudConnected = true;

        const headers = this.getAuthHeaders();

        // Tarik data serentak dari database pelayan
        const [tasksRes, goalsRes, settingsRes] = await Promise.all([
          fetch('/api/tasks', { headers }).then(r => r.json()).catch(() => null),
          fetch('/api/goals', { headers }).then(r => r.json()).catch(() => null),
          fetch('/api/settings', { headers }).then(r => r.json()).catch(() => null)
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
          headers: this.getAuthHeaders(),
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
            headers: this.getAuthHeaders(),
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
          headers: this.getAuthHeaders(),
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
          headers: this.getAuthHeaders(),
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
      fetch('/api/reset', {
        method: 'POST',
        headers: this.getAuthHeaders()
      }).catch(() => {});
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

  // ================= ELEMEN DOM AUTH & PROFIL =================
  const btnOpenAuth = document.getElementById('btn-open-auth');
  const headerUserAvatar = document.getElementById('header-user-avatar');
  const headerUserName = document.getElementById('header-user-name');
  const userDropdownMenu = document.getElementById('user-dropdown-menu');
  const dropdownUserName = document.getElementById('dropdown-user-name');
  const dropdownUserEmail = document.getElementById('dropdown-user-email');
  const btnDropdownLogout = document.getElementById('btn-dropdown-logout');
  const txtDropdownLogout = document.getElementById('txt-dropdown-logout');

  const modalAuth = document.getElementById('modal-auth');
  const btnXCloseAuth = document.getElementById('btn-x-close-auth');
  const btnCloseAuthModal = document.getElementById('btn-close-auth-modal');
  const btnGoogleSignin = document.getElementById('btn-google-signin');
  const txtGoogleBtn = document.getElementById('txt-google-btn');
  const tabAuthLogin = document.getElementById('tab-auth-login');
  const tabAuthSignup = document.getElementById('tab-auth-signup');
  const authAlertBox = document.getElementById('auth-alert-box');
  const authAlertText = document.getElementById('auth-alert-text');
  const formAuth = document.getElementById('form-auth');
  const groupAuthName = document.getElementById('group-auth-name');
  const authInputName = document.getElementById('auth-input-name');
  const authInputEmail = document.getElementById('auth-input-email');
  const authInputPassword = document.getElementById('auth-input-password');
  const btnTogglePwdEye = document.getElementById('btn-toggle-pwd-eye');
  const eyeIconShow = document.getElementById('eye-icon-show');
  const eyeIconHide = document.getElementById('eye-icon-hide');
  const btnSubmitAuth = document.getElementById('btn-submit-auth');
  const authModalTitle = document.getElementById('auth-modal-title');
  const authModalSubtitle = document.getElementById('auth-modal-subtitle');
  const authFooterNote = document.getElementById('auth-footer-note');
  const authDividerLabel = document.getElementById('auth-divider-label');
  const authNameLabel = document.getElementById('auth-name-label');
  const authEmailLabel = document.getElementById('auth-email-label');
  const authPasswordLabel = document.getElementById('auth-password-label');

  let authMode = 'login'; // 'login' | 'signup'

  // ================= ELEMEN DOM HAMBURGER & DRAWER MENU =================
  const headerBrandTitle = document.getElementById('header-brand-title');
  const btnHamburger = document.getElementById('btn-hamburger');
  const drawerOverlay = document.getElementById('drawer-overlay');
  const drawerContent = document.getElementById('drawer-content');
  const btnCloseDrawer = document.getElementById('btn-close-drawer');
  const drawerUserCard = document.getElementById('drawer-user-card');
  const drawerUserAvatar = document.getElementById('drawer-user-avatar');
  const drawerUserName = document.getElementById('drawer-user-name');
  const drawerUserEmail = document.getElementById('drawer-user-email');
  const drawerUserBadge = document.getElementById('drawer-user-badge');
  const drawerLangMs = document.getElementById('drawer-lang-ms');
  const drawerLangEn = document.getElementById('drawer-lang-en');
  const drawerNavBtns = document.querySelectorAll('.drawer-nav-btn');
  const desktopNavItems = document.querySelectorAll('.desktop-nav-item');
  const drawerBtnAutoSchedule = document.getElementById('drawer-btn-auto-schedule');
  const drawerBtnSettings = document.getElementById('drawer-btn-settings');
  const drawerBtnExport = document.getElementById('drawer-btn-export');
  const drawerBtnImport = document.getElementById('drawer-btn-import');
  const drawerBtnReset = document.getElementById('drawer-btn-reset');
  const btnDrawerAuth = document.getElementById('btn-drawer-auth');
  const txtDrawerAuthBtn = document.getElementById('txt-drawer-auth-btn');

  function openDrawer() {
    if (drawerOverlay) drawerOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    triggerHaptic([20]);
  }

  function closeDrawer() {
    if (drawerOverlay) drawerOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

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
      const handle = overlay.querySelector('.modal-handle');
      if (!sheet || !handle) return;

      let startY = 0;
      let currentY = 0;
      let isDragging = false;

      // HANYA aktifkan heretan leret untuk tutup bila pengguna menarik pemegang bar (.modal-handle)
      handle.addEventListener('touchstart', (e) => {
        startY = e.touches[0].clientY;
        currentY = startY;
        isDragging = true;
        sheet.classList.add('dragging');
      }, { passive: true });

      handle.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        currentY = e.touches[0].clientY;
        const diff = currentY - startY;
        if (diff > 0) {
          sheet.style.transform = `translateY(${diff}px)`;
        }
      }, { passive: true });

      handle.addEventListener('touchend', () => {
        if (!isDragging) return;
        isDragging = false;
        sheet.classList.remove('dragging');
        const diff = currentY - startY;
        sheet.style.transform = '';
        if (diff > 80) {
          overlay.classList.remove('active');
          triggerHaptic([30]);
        }
      });
    });
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
    if (drawerLangMs && drawerLangEn) {
      drawerLangMs.classList.toggle('active', lang === 'ms');
      drawerLangEn.classList.toggle('active', lang === 'en');
    }
    if (settingLanguage) {
      settingLanguage.value = lang;
    }
  }

  // Kemas kini teks statik dalam UI mengikut bahasa aktif
  function updateStaticTranslations() {
    if (!window.I18N) return;
    const t = (k) => window.I18N.t(k);
    const isEn = window.I18N.getLanguage() === 'en';

    // Navigasi Bawah (Mobile)
    const navD = document.querySelector('#nav-dashboard span');
    const navT = document.querySelector('#nav-tasks span');
    const navG = document.querySelector('#nav-goals span');
    const navTl = document.querySelector('#nav-timeline span');
    const navA = document.querySelector('#nav-analytics span');
    if (navD) navD.textContent = t('navDashboard');
    if (navT) navT.textContent = t('navTasks');
    if (navG) navG.textContent = t('navGoals');
    if (navTl) navTl.textContent = t('navTimeline');
    if (navA) navA.textContent = t('navAnalytics');

    // Navigasi Atas (Desktop)
    const txtDnavDashboard = document.getElementById('txt-dnav-dashboard');
    const txtDnavTasks = document.getElementById('txt-dnav-tasks');
    const txtDnavGoals = document.getElementById('txt-dnav-goals');
    const txtDnavTimeline = document.getElementById('txt-dnav-timeline');
    const txtDnavAnalytics = document.getElementById('txt-dnav-analytics');
    if (txtDnavDashboard) txtDnavDashboard.textContent = t('navDashboard');
    if (txtDnavTasks) txtDnavTasks.textContent = t('navTasks');
    if (txtDnavGoals) txtDnavGoals.textContent = t('navGoals');
    if (txtDnavTimeline) txtDnavTimeline.textContent = t('navTimeline');
    if (txtDnavAnalytics) txtDnavAnalytics.textContent = t('navAnalytics');

    // Menu Drawer Terjemahan
    const txtDrawerLangTitle = document.getElementById('txt-drawer-lang-title');
    const txtDrawerNavTitle = document.getElementById('txt-drawer-nav-title');
    const dmenuDashboard = document.getElementById('dmenu-dashboard');
    const dmenuTasks = document.getElementById('dmenu-tasks');
    const dmenuGoals = document.getElementById('dmenu-goals');
    const dmenuTimeline = document.getElementById('dmenu-timeline');
    const dmenuAnalytics = document.getElementById('dmenu-analytics');
    const txtDrawerToolsTitle = document.getElementById('txt-drawer-tools-title');
    const txtDrawerAutoSched = document.getElementById('txt-drawer-auto-sched');
    const txtDrawerAutoSchedSub = document.getElementById('txt-drawer-auto-sched-sub');
    const txtDrawerSettings = document.getElementById('txt-drawer-settings');
    const txtDrawerSettingsSub = document.getElementById('txt-drawer-settings-sub');
    const txtDrawerDataTitle = document.getElementById('txt-drawer-data-title');
    const txtDrawerExport = document.getElementById('txt-drawer-export');
    const txtDrawerImport = document.getElementById('txt-drawer-import');
    const txtDrawerReset = document.getElementById('txt-drawer-reset');

    if (txtDrawerLangTitle) txtDrawerLangTitle.textContent = isEn ? 'Language' : 'Bahasa / Language';
    if (txtDrawerNavTitle) txtDrawerNavTitle.textContent = isEn ? 'Pages & Navigation' : 'Halaman & Navigasi';
    if (dmenuDashboard) dmenuDashboard.textContent = isEn ? 'Dashboard Overview' : 'Ringkasan Utama';
    if (dmenuTasks) dmenuTasks.textContent = isEn ? 'Tasks List' : 'Senarai Tugasan';
    if (dmenuGoals) dmenuGoals.textContent = isEn ? 'Daily Goals' : 'Matlamat Harian';
    if (dmenuTimeline) dmenuTimeline.textContent = isEn ? 'Timeline Blocks' : 'Blok Garis Masa';
    if (dmenuAnalytics) dmenuAnalytics.textContent = isEn ? 'Analytics & Performance' : 'Analisis & Prestasi';
    if (txtDrawerToolsTitle) txtDrawerToolsTitle.textContent = isEn ? 'Tools & Settings' : 'Alat & Tetapan';
    if (txtDrawerAutoSched) txtDrawerAutoSched.textContent = isEn ? 'Smart Auto-Cascade' : 'Auto-Susun Jadual Pintar';
    if (txtDrawerAutoSchedSub) txtDrawerAutoSchedSub.textContent = isEn ? 'Eliminate overlaps automatically' : 'Hapuskan pertindihan masa secara berturutan';
    if (txtDrawerSettings) txtDrawerSettings.textContent = isEn ? 'Daily Time Budget' : 'Tetapan Waktu Harian';
    if (txtDrawerSettingsSub) txtDrawerSettingsSub.textContent = isEn ? 'Wake, sleep & buffer times' : 'Waktu bangun, tidur & masa rehat';
    if (txtDrawerDataTitle) txtDrawerDataTitle.textContent = isEn ? 'Data Management' : 'Pengurusan Data';
    if (txtDrawerExport) txtDrawerExport.textContent = isEn ? 'Export' : 'Eksport';
    if (txtDrawerImport) txtDrawerImport.textContent = isEn ? 'Import' : 'Import';
    if (txtDrawerReset) txtDrawerReset.textContent = isEn ? 'Restore Demo' : 'Pulih Demo';

    // Dashboard
    const bTitle = document.querySelector('#daily-budget-card .budget-title');
    if (bTitle) bTitle.textContent = t('dailyCapacityTitle');
    const statBoxes = document.querySelectorAll('.stat-box');
    if (statBoxes.length >= 3) {
      const s0 = statBoxes[0].querySelector('.stat-label');
      const s1 = statBoxes[1].querySelector('.stat-label');
      const s2 = statBoxes[2].querySelector('.stat-label');
      if (s0) s0.textContent = t('statTasks');
      if (s1) s1.textContent = t('statGoals');
      if (s2) s2.textContent = t('statFreeTime');
    }
    const btnJTasks = document.getElementById('btn-jump-tasks');
    const btnJGoals = document.getElementById('btn-jump-goals');
    if (btnJTasks) btnJTasks.textContent = t('viewAll');
    if (btnJGoals) btnJGoals.textContent = t('manageGoals');

    // Tugasan
    const tasksSecTitle = document.querySelector('#tab-tasks .section-title');
    if (tasksSecTitle) tasksSecTitle.textContent = t('taskListTitle');
    if (btnTaskAutoCascade) btnTaskAutoCascade.textContent = t('btnAutoCascade');

    // Filter pills
    const pillKeys = ['filterAll', 'filterWork', 'filterStudy', 'filterHealth', 'filterPersonal', 'filterPending'];
    filterPills.forEach((p, idx) => {
      if (pillKeys[idx]) {
        p.textContent = t(pillKeys[idx]);
      }
    });

    // Matlamat
    const goalsSecTitle = document.querySelector('#tab-goals .section-title');
    const goalsSub = document.querySelector('#tab-goals p');
    if (goalsSecTitle) goalsSecTitle.textContent = t('goalsTitle');
    if (goalsSub) goalsSub.textContent = t('goalsSubtitle');
    if (btnAddGoalTop) btnAddGoalTop.textContent = t('addGoalBtn');

    // Timeline
    const timelineSecTitle = document.querySelector('#tab-timeline .section-title');
    const timelineSub = document.querySelector('#tab-timeline span');
    if (timelineSecTitle) timelineSecTitle.textContent = t('timelineTitle');
    if (timelineSub) timelineSub.textContent = t('timelineSubtitle');

    // Analisis
    const analyticsSecTitle = document.querySelector('#tab-analytics .section-title');
    if (analyticsSecTitle) analyticsSecTitle.textContent = t('analyticsTitle');
    if (btnCopyAgenda) btnCopyAgenda.textContent = t('copyText');
    if (btnExportData) btnExportData.textContent = t('exportBackup');
    if (btnImportTrigger) btnImportTrigger.textContent = t('importData');
    if (btnResetDemo) btnResetDemo.textContent = t('restoreDemo');

    // Timer modal
    if (btnTimerMarkDone) btnTimerMarkDone.textContent = t('finishAndSaveSession');

    // Update live calculation box label
    const calcBoxLabel = document.querySelector('#calc-result-container .calc-text');
    if (calcBoxLabel) {
      calcBoxLabel.textContent = t('timeToSpend');
    }

    // Terjemahan Auth Modal & Profil
    if (txtGoogleBtn) txtGoogleBtn.textContent = t('btnGoogleAuth');
    if (authDividerLabel) authDividerLabel.textContent = t('orDivider');
    if (tabAuthLogin) tabAuthLogin.textContent = t('loginTab');
    if (tabAuthSignup) tabAuthSignup.textContent = t('signupTab');
    if (authNameLabel) authNameLabel.textContent = t('fullNameLabel');
    if (authInputName) authInputName.placeholder = t('fullNamePlaceholder');
    if (authEmailLabel) authEmailLabel.textContent = t('emailLabel');
    if (authInputEmail) authInputEmail.placeholder = t('emailPlaceholder');
    if (authPasswordLabel) authPasswordLabel.textContent = t('passwordLabel');
    if (authInputPassword) authInputPassword.placeholder = t('passwordPlaceholder');
    if (authFooterNote) authFooterNote.textContent = t('guestModeNote');
    if (txtDropdownLogout) txtDropdownLogout.textContent = t('logoutBtn');
    if (authModalSubtitle) authModalSubtitle.textContent = t('authModalSubtitle');

    if (authMode === 'signup') {
      if (authModalTitle) authModalTitle.textContent = t('authModalTitleSignup');
      if (btnSubmitAuth) btnSubmitAuth.textContent = t('btnSubmitSignup');
    } else {
      if (authModalTitle) authModalTitle.textContent = t('authModalTitleLogin');
      if (btnSubmitAuth) btnSubmitAuth.textContent = t('btnSubmitLogin');
    }

    updateAuthUI(window.Storage.getAuthUser());
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
    if (btnCloseAuthModal) btnCloseAuthModal.addEventListener('click', closeAuthModal);

    const btnXCloseTask = document.getElementById('btn-x-close-task');
    if (btnXCloseTask) btnXCloseTask.addEventListener('click', () => modalTask.classList.remove('active'));

    const btnXCloseGoal = document.getElementById('btn-x-close-goal');
    if (btnXCloseGoal) btnXCloseGoal.addEventListener('click', () => modalGoal.classList.remove('active'));

    const btnXCloseSettings = document.getElementById('btn-x-close-settings');
    if (btnXCloseSettings) btnXCloseSettings.addEventListener('click', () => modalSettings.classList.remove('active'));

    if (btnXCloseAuth) btnXCloseAuth.addEventListener('click', closeAuthModal);

    // Tutup Modal Bila Ketuk Latar Gelap (Backdrop Tap to Dismiss)
    [modalTask, modalGoal, modalSettings, modalAuth].forEach(overlay => {
      if (overlay) {
        overlay.addEventListener('click', (e) => {
          if (e.target === overlay) {
            overlay.classList.remove('active');
            if (overlay === modalAuth) hideAuthAlert();
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
        if (modalAuth) closeAuthModal();
      });
    });

    // Tutup Menggunakan Papan Kekunci ESC
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        modalTask.classList.remove('active');
        modalGoal.classList.remove('active');
        modalSettings.classList.remove('active');
        if (modalAuth) closeAuthModal();
        if (modalTimer) modalTimer.classList.remove('active');
        if (userDropdownMenu) userDropdownMenu.style.display = 'none';
        closeDrawer();
      }
    });

    // ================= EVENT LISTENERS HAMBURGER & DRAWER MENU =================
    if (btnHamburger) {
      btnHamburger.addEventListener('click', openDrawer);
    }
    if (btnCloseDrawer) {
      btnCloseDrawer.addEventListener('click', closeDrawer);
    }
    if (drawerOverlay) {
      drawerOverlay.addEventListener('click', (e) => {
        if (e.target === drawerOverlay) closeDrawer();
      });
    }

    // Penukar Bahasa Drawer
    if (drawerLangMs) {
      drawerLangMs.addEventListener('click', () => switchLanguage('ms'));
    }
    if (drawerLangEn) {
      drawerLangEn.addEventListener('click', () => switchLanguage('en'));
    }

    // Navigasi Desktop
    desktopNavItems.forEach(item => {
      item.addEventListener('click', () => {
        const targetTab = item.dataset.tab;
        switchTab(targetTab);
      });
    });

    // Butang Navigasi Drawer
    drawerNavBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetTab = btn.dataset.drawerTab;
        switchTab(targetTab);
        closeDrawer();
      });
    });

    // Kad Profil Drawer (Buka modal login jika tetamu)
    if (drawerUserCard) {
      drawerUserCard.addEventListener('click', () => {
        closeDrawer();
        if (!window.Storage.isAuthenticated()) {
          openAuthModal('login');
        }
      });
    }

    // Alat Produktiviti Drawer
    if (drawerBtnAutoSchedule) {
      drawerBtnAutoSchedule.addEventListener('click', () => {
        closeDrawer();
        handleAutoCascade();
        const isEn = window.I18N && window.I18N.getLanguage() === 'en';
        showToast(isEn ? 'Schedule auto-arranged! ⚡' : 'Jadual disusun secara berturutan! ⚡', 'success');
        playAudioChime('success');
      });
    }

    if (drawerBtnSettings) {
      drawerBtnSettings.addEventListener('click', () => {
        closeDrawer();
        modalSettings.classList.add('active');
      });
    }

    // Pengurusan Data Drawer
    if (drawerBtnExport) {
      drawerBtnExport.addEventListener('click', () => {
        closeDrawer();
        window.Storage.exportDataJSON();
        showToast('Fail sandaran data JSON dimuat turun! 💾', 'success');
        playAudioChime('success');
      });
    }

    if (drawerBtnImport) {
      drawerBtnImport.addEventListener('click', () => {
        closeDrawer();
        fileImportInput.click();
      });
    }

    if (drawerBtnReset) {
      drawerBtnReset.addEventListener('click', () => {
        closeDrawer();
        const t = (k) => window.I18N ? window.I18N.t(k) : k;
        if (confirm(t('confirmResetDemo'))) {
          window.Storage.resetToDefaults();
          renderAll();
        }
      });
    }

    // Butang Auth Drawer (Log Masuk / Keluar)
    if (btnDrawerAuth) {
      btnDrawerAuth.addEventListener('click', () => {
        closeDrawer();
        if (window.Storage.isAuthenticated()) {
          handleLogout();
        } else {
          openAuthModal('login');
        }
      });
    }

    // ================= EVENT LISTENERS AUTH =================
    if (btnOpenAuth) {
      btnOpenAuth.addEventListener('click', (e) => {
        e.stopPropagation();
        if (window.Storage.isAuthenticated()) {
          const isShown = userDropdownMenu.style.display === 'block';
          userDropdownMenu.style.display = isShown ? 'none' : 'block';
        } else {
          openAuthModal('login');
        }
      });
    }

    if (btnDropdownLogout) {
      btnDropdownLogout.addEventListener('click', (e) => {
        e.stopPropagation();
        handleLogout();
      });
    }

    document.addEventListener('click', (e) => {
      if (userDropdownMenu && !e.target.closest('#auth-header-wrapper')) {
        userDropdownMenu.style.display = 'none';
      }
    });

    if (tabAuthLogin) tabAuthLogin.addEventListener('click', () => setAuthMode('login'));
    if (tabAuthSignup) tabAuthSignup.addEventListener('click', () => setAuthMode('signup'));

    if (btnTogglePwdEye) {
      btnTogglePwdEye.addEventListener('click', () => {
        const isPassword = authInputPassword.type === 'password';
        authInputPassword.type = isPassword ? 'text' : 'password';
        eyeIconShow.style.display = isPassword ? 'none' : 'block';
        eyeIconHide.style.display = isPassword ? 'block' : 'none';
      });
    }

    if (formAuth) {
      formAuth.addEventListener('submit', (e) => {
        e.preventDefault();
        handleAuthFormSubmit();
      });
    }

    if (btnGoogleSignin) {
      btnGoogleSignin.addEventListener('click', () => {
        handleGoogleLoginClick();
      });
    }

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

  // Tukar Tab Navigasi (Diselaraskan untuk Mobile Bottom Nav, Desktop Top Nav & Drawer)
  function switchTab(tabId) {
    currentTab = tabId;
    navItems.forEach(item => {
      item.classList.toggle('active', item.dataset.tab === tabId);
    });
    desktopNavItems.forEach(item => {
      item.classList.toggle('active', item.dataset.tab === tabId);
    });
    drawerNavBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.drawerTab === tabId);
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
    if (window.innerWidth >= 768) {
      taskTitleInput.focus();
    }
  }

  // Buka Modal Matlamat
  function openGoalModal() {
    formGoal.reset();
    goalHoursInput.value = '3.5';
    goalDaysInput.value = '5';
    updateLiveGoalCalculation();
    modalGoal.classList.add('active');
    if (window.innerWidth >= 768) {
      goalTitleInput.focus();
    }
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

  // ================= PENGURUSAN PENGESAHAN & PROFIL (AUTH) =================
  function updateAuthUI(user) {
    const isEn = window.I18N && window.I18N.getLanguage() === 'en';
    const t = (k) => window.I18N ? window.I18N.t(k) : k;

    if (user) {
      const fullName = user.name || 'User';
      const firstName = fullName.split(' ')[0];
      const greetingPrefix = isEn ? 'Hello, ' : 'Hai, ';

      // Menu Atas: Paparkan "Hello, [Nama] 👋" selepas login
      if (headerBrandTitle) {
        headerBrandTitle.textContent = `${greetingPrefix}${firstName} 👋`;
      }
      if (headerUserName) headerUserName.textContent = firstName;
      if (headerUserAvatar) {
        if (user.avatar) {
          headerUserAvatar.innerHTML = `<img src="${escapeHtml(user.avatar)}" alt="${escapeHtml(user.name)}" onerror="this.parentElement.textContent='${escapeHtml(firstName.charAt(0).toUpperCase())}'">`;
        } else {
          headerUserAvatar.textContent = firstName.charAt(0).toUpperCase();
        }
      }

      // Drawer Kad Profil Pengguna
      if (drawerUserName) drawerUserName.textContent = `${greetingPrefix}${firstName} 👋`;
      if (drawerUserEmail) drawerUserEmail.textContent = user.email || '';
      if (drawerUserAvatar) {
        if (user.avatar) {
          drawerUserAvatar.innerHTML = `<img src="${escapeHtml(user.avatar)}" alt="${escapeHtml(user.name)}" onerror="this.parentElement.textContent='${escapeHtml(firstName.charAt(0).toUpperCase())}'">`;
        } else {
          drawerUserAvatar.textContent = firstName.charAt(0).toUpperCase();
        }
      }
      if (drawerUserBadge) {
        drawerUserBadge.style.display = 'inline-block';
        drawerUserBadge.textContent = user.provider === 'google' ? 'Google Account' : 'Cloud Sync';
      }

      // Butang Tindakan Drawer menjadi "Log Keluar"
      if (txtDrawerAuthBtn) txtDrawerAuthBtn.textContent = isEn ? 'Sign Out' : 'Log Keluar';
      if (btnDrawerAuth) {
        btnDrawerAuth.classList.add('logout-state');
      }

      if (dropdownUserName) dropdownUserName.textContent = user.name || 'Pengguna';
      if (dropdownUserEmail) dropdownUserEmail.textContent = user.email || '';
      if (btnOpenAuth) btnOpenAuth.title = `${t('profileMenu') || 'Profil'}: ${user.name}`;
    } else {
      // Status Tetamu (Guest / Not Logged In)
      if (headerBrandTitle) {
        headerBrandTitle.textContent = 'DailyPulse';
      }
      if (headerUserName) headerUserName.textContent = t('loginTab') || 'Masuk';
      if (headerUserAvatar) {
        headerUserAvatar.innerHTML = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>';
      }

      // Drawer Kad Profil Tetamu
      if (drawerUserName) drawerUserName.textContent = 'DailyPulse Guest';
      if (drawerUserEmail) drawerUserEmail.textContent = isEn ? 'Not logged in (Local data)' : 'Belum log masuk (Data setempat)';
      if (drawerUserAvatar) {
        drawerUserAvatar.innerHTML = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>';
      }
      if (drawerUserBadge) {
        drawerUserBadge.style.display = 'none';
      }

      // Butang Tindakan Drawer menjadi "Log Masuk / Daftar"
      if (txtDrawerAuthBtn) txtDrawerAuthBtn.textContent = isEn ? 'Sign In / Sign Up' : 'Log Masuk / Daftar';
      if (btnDrawerAuth) {
        btnDrawerAuth.classList.remove('logout-state');
      }

      if (btnOpenAuth) btnOpenAuth.title = t('authModalTitleLogin') || 'Log Masuk / Profil';
      if (userDropdownMenu) userDropdownMenu.style.display = 'none';
    }
  }

  function setAuthMode(mode) {
    authMode = mode;
    const t = (k) => window.I18N ? window.I18N.t(k) : k;

    if (mode === 'signup') {
      if (tabAuthSignup) tabAuthSignup.classList.add('active');
      if (tabAuthLogin) tabAuthLogin.classList.remove('active');
      if (groupAuthName) groupAuthName.style.display = 'block';
      if (authInputName) authInputName.setAttribute('required', 'required');
      if (authModalTitle) authModalTitle.textContent = t('authModalTitleSignup');
      if (btnSubmitAuth) btnSubmitAuth.textContent = t('btnSubmitSignup');
      if (authInputPassword) authInputPassword.setAttribute('autocomplete', 'new-password');
    } else {
      if (tabAuthLogin) tabAuthLogin.classList.add('active');
      if (tabAuthSignup) tabAuthSignup.classList.remove('active');
      if (groupAuthName) groupAuthName.style.display = 'none';
      if (authInputName) authInputName.removeAttribute('required');
      if (authModalTitle) authModalTitle.textContent = t('authModalTitleLogin');
      if (btnSubmitAuth) btnSubmitAuth.textContent = t('btnSubmitLogin');
      if (authInputPassword) authInputPassword.setAttribute('autocomplete', 'current-password');
    }
    hideAuthAlert();
  }

  function openAuthModal(mode = 'login') {
    if (userDropdownMenu) userDropdownMenu.style.display = 'none';
    setAuthMode(mode);
    if (formAuth) formAuth.reset();
    if (authInputPassword) authInputPassword.type = 'password';
    if (eyeIconShow) eyeIconShow.style.display = 'block';
    if (eyeIconHide) eyeIconHide.style.display = 'none';
    if (modalAuth) modalAuth.classList.add('active');
    setTimeout(() => {
      if (window.innerWidth >= 768) {
        if (mode === 'signup' && authInputName) authInputName.focus();
        else if (authInputEmail) authInputEmail.focus();
      }
    }, 150);
  }

  function closeAuthModal() {
    if (modalAuth) modalAuth.classList.remove('active');
    hideAuthAlert();
  }

  function showAuthAlert(msg) {
    if (authAlertText) authAlertText.textContent = msg;
    if (authAlertBox) authAlertBox.style.display = 'flex';
  }

  function hideAuthAlert() {
    if (authAlertBox) authAlertBox.style.display = 'none';
  }

  async function handleAuthFormSubmit() {
    const t = (k) => window.I18N ? window.I18N.t(k) : k;
    hideAuthAlert();

    const email = authInputEmail.value.trim();
    const password = authInputPassword.value;
    const name = authInputName ? authInputName.value.trim() : '';

    if (!email || !password || (authMode === 'signup' && !name)) {
      showAuthAlert(t('errFillAll'));
      return;
    }

    if (password.length < 6) {
      showAuthAlert(t('errPassTooShort'));
      return;
    }

    const origBtnText = btnSubmitAuth.textContent;
    btnSubmitAuth.disabled = true;
    btnSubmitAuth.textContent = '⏳ ...';

    try {
      if (authMode === 'signup') {
        await window.Storage.register({ name, email, password });
        showToast(t('signupSuccessMsg'), 'success');
      } else {
        await window.Storage.login({ email, password });
        showToast(t('loginSuccessMsg'), 'success');
      }

      playAudioChime('complete');
      triggerHaptic([30, 40, 50]);
      closeAuthModal();

      // Muat semula data pengguna
      tasks = window.Storage.getTasks();
      goals = window.Storage.getGoals();
      settings = window.Storage.getSettings();
      renderAll();
    } catch (err) {
      showAuthAlert(err.message || 'Ralat berlaku. Sila cuba lagi.');
      triggerHaptic([50, 40, 50]);
      playAudioChime('pop');
    } finally {
      btnSubmitAuth.disabled = false;
      btnSubmitAuth.textContent = origBtnText;
    }
  }

  const GOOGLE_CLIENT_ID = window.GOOGLE_CLIENT_ID || '47398644341-kaft2lql4e1ecaiinc9lm69bq0cnmtri.apps.googleusercontent.com';
  window.GOOGLE_CLIENT_ID = GOOGLE_CLIENT_ID;

  async function handleGoogleLoginClick() {
    const t = (k) => window.I18N ? window.I18N.t(k) : k;

    // 1. Cuba Google Identity Services OAuth 2.0 Popup (Membuka tetingkap rasmi Google akaun)
    if (window.google && window.google.accounts && window.google.accounts.oauth2) {
      try {
        const tokenClient = window.google.accounts.oauth2.initTokenClient({
          client_id: GOOGLE_CLIENT_ID,
          scope: 'email profile openid',
          callback: async (tokenResponse) => {
            if (tokenResponse && tokenResponse.access_token) {
              try {
                // Ambil profil pengguna Google rasmi (nama, emel, avatar)
                const userRes = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
                  headers: { Authorization: `Bearer ${tokenResponse.access_token}` }
                });
                const googleProfile = await userRes.json();
                if (googleProfile && googleProfile.email) {
                  await window.Storage.loginWithGoogle({
                    email: googleProfile.email,
                    name: googleProfile.name || googleProfile.given_name || googleProfile.email.split('@')[0],
                    avatar: googleProfile.picture || `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(googleProfile.name || 'Google')}`
                  });

                  showToast(t('loginSuccessMsg') || 'Log masuk Google berjaya! 🎉', 'success');
                  playAudioChime('complete');
                  triggerHaptic([30, 40, 50]);
                  closeAuthModal();

                  tasks = window.Storage.getTasks();
                  goals = window.Storage.getGoals();
                  settings = window.Storage.getSettings();
                  renderAll();
                  return;
                }
              } catch (fetchErr) {
                console.warn('Ralat fetch Google UserInfo:', fetchErr);
                showAuthAlert(fetchErr.message || 'Ralat mendapatkan maklumat profil Google.');
              }
            } else if (tokenResponse && tokenResponse.error) {
              console.warn('Token response error:', tokenResponse.error);
              if (tokenResponse.error !== 'popup_closed_by_user') {
                showAuthAlert(`Google Auth: ${tokenResponse.error}`);
              }
            }
          }
        });
        tokenClient.requestAccessToken({ prompt: 'select_account' });
        return;
      } catch (err) {
        console.warn('Google oauth2 TokenClient error:', err);
      }
    }

    // 2. Cuba GIS ID Token (One Tap)
    if (window.google && window.google.accounts && window.google.accounts.id) {
      try {
        window.google.accounts.id.initialize({
          client_id: GOOGLE_CLIENT_ID,
          callback: async (response) => {
            if (response.credential) {
              try {
                await window.Storage.loginWithGoogle({ credential: response.credential });
                showToast(t('loginSuccessMsg'), 'success');
                playAudioChime('complete');
                closeAuthModal();
                tasks = window.Storage.getTasks();
                goals = window.Storage.getGoals();
                renderAll();
              } catch (e) {
                showAuthAlert(e.message);
              }
            }
          }
        });
        window.google.accounts.id.prompt();
        return;
      } catch (e) {
        console.warn('GIS ID token error:', e);
      }
    }

    // 3. Sandaran Mesra Pengguna sekiranya Google script belum sedia
    const defaultEmail = authInputEmail ? authInputEmail.value.trim() : '';
    const isEn = window.I18N && window.I18N.getLanguage() === 'en';
    const googleEmail = prompt(
      isEn
        ? 'Sign In with Google\nEnter your Google Account Email to continue:'
        : 'Log Masuk Melalui Google\nMasukkan alamat emel akaun Google anda untuk meneruskan:',
      defaultEmail || 'anda@gmail.com'
    );

    if (!googleEmail) return;

    try {
      const cleanEmail = googleEmail.trim();
      const derivedName = cleanEmail.split('@')[0].replace(/[._-]/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      const avatar = `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(derivedName)}`;

      await window.Storage.loginWithGoogle({
        email: cleanEmail,
        name: derivedName,
        avatar
      });

      showToast(t('loginSuccessMsg'), 'success');
      playAudioChime('complete');
      triggerHaptic([30, 40, 50]);
      closeAuthModal();

      tasks = window.Storage.getTasks();
      goals = window.Storage.getGoals();
      settings = window.Storage.getSettings();
      renderAll();
    } catch (err) {
      showAuthAlert(err.message || 'Ralat log masuk Google.');
    }
  }

  async function handleLogout() {
    const t = (k) => window.I18N ? window.I18N.t(k) : k;
    if (userDropdownMenu) userDropdownMenu.style.display = 'none';
    await window.Storage.logout();
    showToast(t('logoutSuccessMsg'), 'success');
    playAudioChime('pop');
    triggerHaptic([30]);

    tasks = window.Storage.getTasks();
    goals = window.Storage.getGoals();
    settings = window.Storage.getSettings();
    renderAll();
  }

  // ================= MODUL 5: PEMBANTU JADUAL PINTAR AI =================
  const modalAi = document.getElementById('modal-ai-schedule');
  const btnOpenAiHeader = document.getElementById('btn-open-ai-schedule');
  const btnOpenAiTasks = document.getElementById('btn-tasks-ai-schedule');
  const btnOpenAiDrawer = document.getElementById('drawer-btn-ai-schedule');
  const btnCloseAi = document.getElementById('btn-x-close-ai');

  const aiInputSection = document.getElementById('ai-input-section');
  const aiLoadingSection = document.getElementById('ai-loading-section');
  const aiResultsSection = document.getElementById('ai-results-section');

  const aiRawTextInput = document.getElementById('ai-input-raw-text');
  const aiStartTimeInput = document.getElementById('ai-input-start-time');
  const aiPacingSelect = document.getElementById('ai-select-pacing');
  const btnAiUseNow = document.getElementById('btn-ai-use-now');
  const btnAiGenerate = document.getElementById('btn-ai-generate-schedule');

  const aiResTotalFocus = document.getElementById('ai-res-total-focus');
  const aiResProjectedEnd = document.getElementById('ai-res-projected-end');
  const aiBoxSavings = document.getElementById('ai-box-savings');
  const aiResTimeSaved = document.getElementById('ai-res-time-saved');
  const aiResEngine = document.getElementById('ai-res-engine');
  const aiCoachTipText = document.getElementById('ai-coach-tip-text');
  const aiGlobalActions = document.getElementById('ai-global-actions');
  const btnAiOptimizeAll = document.getElementById('btn-ai-optimize-all');
  const aiPreviewTasksList = document.getElementById('ai-preview-tasks-list');
  const btnApplyAiSchedule = document.getElementById('btn-apply-ai-schedule');
  const btnAiBackToInput = document.getElementById('btn-ai-back-to-input');

  // AI Status & Konfigurasi Kunci API Gemini
  const aiStatusCard = document.getElementById('ai-status-card');
  const aiStatusDot = document.getElementById('ai-status-dot');
  const aiStatusLabel = document.getElementById('ai-status-label');
  const btnToggleKeyConfig = document.getElementById('btn-toggle-key-config');
  const aiKeyConfigPanel = document.getElementById('ai-key-config-panel');
  const aiInputApiKey = document.getElementById('ai-input-api-key');
  const btnSaveAiKey = document.getElementById('btn-save-ai-key');
  const btnClearAiKey = document.getElementById('btn-clear-ai-key');
  let hasServerGeminiKey = false;

  let currentAiScheduleResult = null;

  const AI_TEMPLATES = {
    work: "- Review PR dan semak isu bug\n- Siapkan pembentangan projek Alpha (1 jam)\n- Mesyuarat koordinasi klien pukul 2 petang\n- Balas emel dan semak invois (45m)\n- Refleksi kerja & perancangan esok",
    study: "- Baca bab 4 buku rujukan (45m)\n- Buat nota ringkas & peta minda (30m)\n- Ulang kaji latihan peperiksaan 1 jam\n- Tonton video tutorial koding (40m)\n- Uji kaji soalan lepas (30m)",
    weekend: "- Jogging kat taman rekreasi 40 minit\n- Sarapan santai bersama keluarga (45m)\n- Basuh kereta dan kemas laman\n- Beli barang dapur kat pasar raya 1 jam\n- Tonton wayang & santai malam"
  };

  async function checkAiStatus() {
    const localKey = localStorage.getItem('gemini_api_key') || '';
    if (aiInputApiKey) {
      aiInputApiKey.value = localKey;
    }
    if (btnClearAiKey) {
      btnClearAiKey.style.display = localKey ? 'inline-block' : 'none';
    }

    try {
      const resp = await fetch('/api/ai/status');
      if (resp.ok) {
        const data = await resp.json();
        hasServerGeminiKey = Boolean(data.hasServerKey);
      }
    } catch (e) {
      // Offline fallback
    }

    const isConnected = hasServerGeminiKey || Boolean(localKey);
    if (aiStatusCard) {
      aiStatusCard.classList.toggle('connected', isConnected);
    }
    if (aiStatusDot) {
      aiStatusDot.className = `status-dot ${isConnected ? 'dot-online' : 'dot-offline'}`;
    }
    if (aiStatusLabel) {
      if (hasServerGeminiKey) {
        aiStatusLabel.innerHTML = '<strong>🟢 Google Gemini AI Aktif (Kunci Server)</strong> — Analisis Penuh';
      } else if (localKey) {
        aiStatusLabel.innerHTML = '<strong>🟢 Google Gemini AI Aktif (Kunci Peribadi)</strong> — Analisis Penuh';
      } else {
        aiStatusLabel.innerHTML = '<strong>🟡 Mod Tempatan (Offline)</strong> — Klik "API Key" untuk aktifkan AI percuma';
      }
    }
  }

  function getRoundedCurrentTime() {
    const now = new Date();
    let mins = now.getMinutes();
    let hrs = now.getHours();
    mins = Math.ceil(mins / 5) * 5;
    if (mins >= 60) {
      mins = 0;
      hrs = (hrs + 1) % 24;
    }
    return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}`;
  }

  function openAiModal() {
    if (drawerOverlay) drawerOverlay.classList.remove('active');
    if (modalAi) {
      if (aiStartTimeInput) {
        aiStartTimeInput.value = getRoundedCurrentTime();
      }
      if (!currentAiScheduleResult) {
        showAiSection('input');
      }
      modalAi.classList.add('active');
      checkAiStatus();
      triggerHaptic([20]);
    }
  }

  function closeAiModal() {
    if (modalAi) modalAi.classList.remove('active');
  }

  function showAiSection(section) {
    if (aiInputSection) aiInputSection.style.display = (section === 'input') ? 'block' : 'none';
    if (aiLoadingSection) aiLoadingSection.style.display = (section === 'loading') ? 'block' : 'none';
    if (aiResultsSection) aiResultsSection.style.display = (section === 'results') ? 'block' : 'none';
  }

  async function handleAiGenerate(applySuggestions = false) {
    const rawText = aiRawTextInput ? aiRawTextInput.value.trim() : '';

    if (!rawText) {
      showToast('Sila masukkan senarai tugasan atau teks harian anda.', 'warning');
      if (aiRawTextInput) aiRawTextInput.focus();
      return;
    }

    const startTime = aiStartTimeInput ? aiStartTimeInput.value : '09:00';
    const pacing = aiPacingSelect ? aiPacingSelect.value : 'balanced';

    showAiSection('loading');
    triggerHaptic([30]);

    try {
      const userApiKey = localStorage.getItem('gemini_api_key') || undefined;
      const resp = await fetch('/api/ai/schedule', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          rawText,
          startTime,
          pacing,
          bufferMinutes: 10,
          includeBreaks: true,
          applySuggestions,
          apiKey: userApiKey
        })
      });

      const data = await resp.json();
      if (!resp.ok || !data.success) {
        throw new Error(data.error || 'Gagal menjana jadual AI');
      }

      currentAiScheduleResult = data;
      renderAiPreview(data);
      showAiSection('results');
      playAudioChime('chime');
      triggerHaptic([40, 60]);
    } catch (err) {
      console.error('Ralat AI Scheduler:', err);
      showAiSection('input');
      showToast('Ralat: ' + err.message, 'warning');
    }
  }

  function renderAiPreview(result) {
    if (!result || !result.scheduledTasks) return;

    const { scheduledTasks, summary } = result;

    if (aiResTotalFocus) aiResTotalFocus.textContent = summary.totalFocusFormatted || `${summary.totalFocusMinutes}m`;
    if (aiResProjectedEnd) aiResProjectedEnd.textContent = window.TimeEngine ? window.TimeEngine.formatTime12Hour(summary.projectedEndTime) : summary.projectedEndTime;

    if (aiBoxSavings && aiResTimeSaved) {
      if (summary.totalSavedMinutes > 0) {
        aiBoxSavings.style.display = 'block';
        aiResTimeSaved.textContent = `+${summary.totalSavedMinutes}m`;
      } else {
        aiBoxSavings.style.display = 'none';
      }
    }

    if (aiResEngine) {
      if (summary.isGemini) {
        aiResEngine.textContent = '✨ Gemini AI';
        aiResEngine.style.color = '#c084fc';
        aiResEngine.title = 'Dianalisis menggunakan Google Gemini Neural LLM';
      } else {
        aiResEngine.textContent = '⚡ Heuristik';
        aiResEngine.style.color = '#94a3b8';
        aiResEngine.title = 'Dianalisis menggunakan Enjin Heuristik Tempatan (Offline)';
      }
    }

    if (aiCoachTipText) {
      aiCoachTipText.textContent = summary.productivityTip || 'Jadual anda telah dioptimumkan secara seimbang tanpa pertembungan masa.';
    }

    const hasUnappliedSavings = scheduledTasks.some(t => 
      t.suggestions && t.suggestions.some(s => s.timeSavedMinutes > 0 && (!t.appliedSuggestion || t.appliedSuggestion.type !== s.type))
    );

    if (aiGlobalActions) {
      aiGlobalActions.style.display = hasUnappliedSavings ? 'block' : 'none';
    }

    if (aiPreviewTasksList) {
      aiPreviewTasksList.innerHTML = '';

      scheduledTasks.forEach((task, idx) => {
        const card = document.createElement('div');
        card.className = `ai-task-preview-card ${task.isBreak ? 'is-break-card' : ''}`;

        const topRow = document.createElement('div');
        topRow.className = 'ai-preview-top-row';

        const titleSpan = document.createElement('div');
        titleSpan.className = 'ai-preview-title';
        titleSpan.textContent = task.title;

        const timePill = document.createElement('div');
        timePill.className = 'ai-preview-time-pill';
        const start12 = window.TimeEngine ? window.TimeEngine.formatTime12Hour(task.startTime) : task.startTime;
        const end12 = window.TimeEngine ? window.TimeEngine.formatTime12Hour(task.endTime) : task.endTime;
        timePill.textContent = `${start12} - ${end12} (${task.durationMinutes}m)`;

        topRow.appendChild(titleSpan);
        topRow.appendChild(timePill);
        card.appendChild(topRow);

        const badgeRow = document.createElement('div');
        badgeRow.className = 'ai-preview-badges';
        badgeRow.innerHTML = `
          <span class="task-category-tag category-${(task.category || 'other').toLowerCase()}">${task.category || 'Kerja'}</span>
          <span class="badge ${task.priority === 'Tinggi' ? 'badge-danger' : (task.priority === 'Rendah' ? 'badge-muted' : 'badge-warning')}">${task.priority || 'Sederhana'}</span>
        `;
        card.appendChild(badgeRow);

        if (task.suggestions && task.suggestions.length > 0 && !task.isBreak) {
          const sug = task.suggestions[0];
          const isApplied = task.appliedSuggestion && task.appliedSuggestion.type === sug.type;

          const sugChip = document.createElement('div');
          sugChip.className = 'ai-suggestion-chip';
          sugChip.innerHTML = `
            <div style="display: flex; align-items: center; gap: 6px;">
              <span>${sug.icon || '💡'}</span>
              <span><strong>${sug.title}</strong>: ${sug.message}</span>
            </div>
          `;

          if (sug.suggestedDuration && sug.suggestedDuration !== task.durationMinutes) {
            const applyBtn = document.createElement('button');
            applyBtn.type = 'button';
            applyBtn.className = `btn-chip-apply ${isApplied ? 'applied' : ''}`;
            applyBtn.textContent = isApplied ? '✓ Dioptimumkan' : `⚡ Guna (${sug.suggestedDuration}m)`;
            if (!isApplied) {
              applyBtn.onclick = () => {
                applySingleSuggestion(idx, sug);
              };
            }
            sugChip.appendChild(applyBtn);
          }

          card.appendChild(sugChip);
        }

        aiPreviewTasksList.appendChild(card);
      });
    }
  }

  function applySingleSuggestion(taskIndex, suggestion) {
    if (!currentAiScheduleResult || !currentAiScheduleResult.scheduledTasks) return;

    const tasks = currentAiScheduleResult.scheduledTasks;
    if (!tasks[taskIndex]) return;

    tasks[taskIndex].durationMinutes = suggestion.suggestedDuration;
    tasks[taskIndex].appliedSuggestion = suggestion;

    recalculateScheduledCascade();
    triggerHaptic([30]);
  }

  function recalculateScheduledCascade() {
    if (!currentAiScheduleResult || !currentAiScheduleResult.scheduledTasks) return;

    const startTime = currentAiScheduleResult.summary.startTime || '09:00';
    const buffer = 10;
    let currentMins = window.TimeEngine.timeToMinutes(startTime);

    currentAiScheduleResult.scheduledTasks = currentAiScheduleResult.scheduledTasks.map((t, idx) => {
      if (t.isFixedAnchor && t.fixedTime) {
        const anchorMins = window.TimeEngine.timeToMinutes(t.fixedTime);
        if (anchorMins >= currentMins) currentMins = anchorMins;
      }

      const sTime = window.TimeEngine.minutesToTime(currentMins);
      const eMins = currentMins + t.durationMinutes;
      const eTime = window.TimeEngine.minutesToTime(eMins);

      currentMins = eMins;
      if (idx < currentAiScheduleResult.scheduledTasks.length - 1) {
        currentMins += buffer;
      }

      return {
        ...t,
        startTime: sTime,
        endTime: eTime
      };
    });

    const totalFocus = currentAiScheduleResult.scheduledTasks
      .filter(t => !t.isBreak)
      .reduce((sum, t) => sum + t.durationMinutes, 0);

    const totalSaved = currentAiScheduleResult.scheduledTasks
      .filter(t => t.appliedSuggestion && t.appliedSuggestion.timeSavedMinutes)
      .reduce((sum, t) => sum + t.appliedSuggestion.timeSavedMinutes, 0);

    currentAiScheduleResult.summary.totalFocusMinutes = totalFocus;
    currentAiScheduleResult.summary.totalFocusFormatted = window.TimeEngine.formatDuration(totalFocus);
    currentAiScheduleResult.summary.projectedEndTime = window.TimeEngine.minutesToTime(currentMins);
    currentAiScheduleResult.summary.totalSavedMinutes = totalSaved;

    renderAiPreview(currentAiScheduleResult);
  }

  async function handleApplyAiSchedule() {
    const t = (k) => window.I18N ? window.I18N.t(k) : k;
    if (!currentAiScheduleResult || !currentAiScheduleResult.scheduledTasks || currentAiScheduleResult.scheduledTasks.length === 0) {
      showToast('Tiada tugasan untuk diterapkan.', 'warning');
      return;
    }

    btnApplyAiSchedule.disabled = true;
    btnApplyAiSchedule.textContent = 'Menyimpan...';

    try {
      const resp = await fetch('/api/ai/apply-batch', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': window.Storage.getAuthToken() ? `Bearer ${window.Storage.getAuthToken()}` : ''
        },
        body: JSON.stringify({
          tasks: currentAiScheduleResult.scheduledTasks
        })
      });

      const data = await resp.json();
      if (!resp.ok || !data.success) {
        throw new Error(data.error || 'Gagal menyimpan tugasan AI');
      }

      if (window.Storage && window.Storage.fetchCloudData) {
        await window.Storage.fetchCloudData();
      }
      tasks = window.Storage.getTasks();
      goals = window.Storage.getGoals();
      settings = window.Storage.getSettings();

      renderAll();
      closeAiModal();
      showToast(t('aiSuccessApplied'), 'success');
      playAudioChime('chime');
      triggerHaptic([50, 80, 50]);

      switchTab('tab-tasks');
    } catch (err) {
      console.error('Ralat apply AI batch:', err);
      showToast('Ralat: ' + err.message, 'warning');
    } finally {
      btnApplyAiSchedule.disabled = false;
      btnApplyAiSchedule.textContent = t('aiApplyToScheduleBtn');
    }
  }

  function bindAiScheduleEvents() {
    const dnavAi = document.getElementById('dnav-ai-schedule');
    const heroAi = document.getElementById('btn-hero-ai-schedule');
    if (dnavAi) dnavAi.addEventListener('click', openAiModal);
    if (heroAi) heroAi.addEventListener('click', openAiModal);

    if (btnOpenAiHeader) btnOpenAiHeader.addEventListener('click', openAiModal);
    if (btnOpenAiTasks) btnOpenAiTasks.addEventListener('click', openAiModal);
    if (btnOpenAiDrawer) btnOpenAiDrawer.addEventListener('click', openAiModal);
    if (btnCloseAi) btnCloseAi.addEventListener('click', closeAiModal);

    document.querySelectorAll('.ai-template-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        const type = pill.dataset.template;
        if (AI_TEMPLATES[type] && aiRawTextInput) {
          aiRawTextInput.value = AI_TEMPLATES[type];
          triggerHaptic([20]);
        }
      });
    });

    if (btnAiUseNow) {
      btnAiUseNow.addEventListener('click', () => {
        if (aiStartTimeInput) {
          aiStartTimeInput.value = getRoundedCurrentTime();
          triggerHaptic([20]);
        }
      });
    }

    if (btnAiGenerate) {
      btnAiGenerate.addEventListener('click', () => handleAiGenerate(false));
    }

    if (btnAiBackToInput) {
      btnAiBackToInput.addEventListener('click', () => {
        showAiSection('input');
        triggerHaptic([20]);
      });
    }

    if (btnAiOptimizeAll) {
      btnAiOptimizeAll.addEventListener('click', () => {
        handleAiGenerate(true);
      });
    }

    if (btnApplyAiSchedule) {
      btnApplyAiSchedule.addEventListener('click', handleApplyAiSchedule);
    }

    if (btnToggleKeyConfig) {
      btnToggleKeyConfig.addEventListener('click', () => {
        if (!aiKeyConfigPanel) return;
        const isHidden = aiKeyConfigPanel.style.display === 'none' || !aiKeyConfigPanel.style.display;
        aiKeyConfigPanel.style.display = isHidden ? 'block' : 'none';
        if (isHidden && aiInputApiKey) {
          aiInputApiKey.focus();
        }
        triggerHaptic([20]);
      });
    }

    if (btnSaveAiKey) {
      btnSaveAiKey.addEventListener('click', () => {
        if (!aiInputApiKey) return;
        const val = aiInputApiKey.value.trim();
        if (!val) {
          showToast('Sila masukkan Kunci Gemini API yang sah.', 'warning');
          return;
        }
        localStorage.setItem('gemini_api_key', val);
        showToast('Kunci Gemini API berjaya disimpan!', 'success');
        playAudioChime('chime');
        triggerHaptic([30, 40]);
        checkAiStatus();
        if (aiKeyConfigPanel) aiKeyConfigPanel.style.display = 'none';
      });
    }

    if (btnClearAiKey) {
      btnClearAiKey.addEventListener('click', () => {
        localStorage.removeItem('gemini_api_key');
        if (aiInputApiKey) aiInputApiKey.value = '';
        showToast('Kunci API telah dipadamkan.', 'info');
        triggerHaptic([20]);
        checkAiStatus();
        if (aiKeyConfigPanel) aiKeyConfigPanel.style.display = 'none';
      });
    }
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
    bindAiScheduleEvents();

    // Sediakan status auth awal
    updateAuthUI(window.Storage.getAuthUser());
    window.Storage.onAuth(updateAuthUI);

    renderAll();

    // Sahkan token dengan pelayan
    window.Storage.checkAuthStatus().then(user => {
      updateAuthUI(user);
    });

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

  // Mulakan Aplikasi
  initApp();
});


window.DailyPulseLoaded = true;
