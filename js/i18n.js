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
      errPassTooShort: 'Kata laluan mestilah sekurang-kurangnya 6 aksara.'
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
      errPassTooShort: 'Password must be at least 6 characters.'
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
