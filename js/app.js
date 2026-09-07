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
      }
    });

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

  // ================= PENGURUSAN PENGESAHAN & PROFIL (AUTH) =================
  function updateAuthUI(user) {
    const t = (k) => window.I18N ? window.I18N.t(k) : k;
    if (user) {
      const firstName = (user.name || 'User').split(' ')[0];
      if (headerUserName) headerUserName.textContent = firstName;
      if (headerUserAvatar) {
        if (user.avatar) {
          headerUserAvatar.innerHTML = `<img src="${escapeHtml(user.avatar)}" alt="${escapeHtml(user.name)}" onerror="this.parentElement.textContent='${escapeHtml(firstName.charAt(0).toUpperCase())}'">`;
        } else {
          headerUserAvatar.textContent = firstName.charAt(0).toUpperCase();
        }
      }
      if (dropdownUserName) dropdownUserName.textContent = user.name || 'Pengguna';
      if (dropdownUserEmail) dropdownUserEmail.textContent = user.email || '';
      if (btnOpenAuth) btnOpenAuth.title = `${t('profileMenu')}: ${user.name}`;
    } else {
      if (headerUserName) headerUserName.textContent = t('loginTab') || 'Masuk';
      if (headerUserAvatar) {
        headerUserAvatar.innerHTML = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>';
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
      if (mode === 'signup' && authInputName) authInputName.focus();
      else if (authInputEmail) authInputEmail.focus();
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

  async function handleGoogleLoginClick() {
    const t = (k) => window.I18N ? window.I18N.t(k) : k;

    // Jika GIS client telah dikonfigurasi dengan Client ID
    if (window.google && window.google.accounts && window.google.accounts.id && window.GOOGLE_CLIENT_ID) {
      try {
        window.google.accounts.id.initialize({
          client_id: window.GOOGLE_CLIENT_ID,
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
        console.warn('GIS error, using fallback:', e);
      }
    }

    // Kotak dialog mesra pengguna untuk sambungan Google
    const defaultEmail = authInputEmail.value.trim() || 'user.google@gmail.com';
    const googleEmail = prompt(
      window.I18N && window.I18N.getLanguage() === 'en'
        ? 'Sign In with Google\nEnter your Google Account Email to continue:'
        : 'Log Masuk Melalui Google\nMasukkan alamat emel akaun Google anda untuk meneruskan:',
      defaultEmail
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

  // ================= INISIALISASI =================
  function initApp() {
    updateLanguagePills();
    updateStaticTranslations();
    renderCurrentDate();
    loadSettingsIntoUI();
    bindEvents();
    bindTimerEvents();
    bindSwipeToDismiss();

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
