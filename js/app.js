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

  // ================= INISIALISASI =================
  function initApp() {
    updateLanguagePills();
    updateStaticTranslations();
    renderCurrentDate();
    loadSettingsIntoUI();
    bindEvents();
    bindTimerEvents();
    renderAll();

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
      const catDisplay = window.I18N ? window.I18N.formatCategory(nextTask.category) : nextTask.category;
      nextTaskContainer.innerHTML = `
        <div class="task-card" style="border-left: 3px solid var(--primary);">
          <div class="task-top">
            <div class="task-details">
              <div class="task-title">${escapeHtml(nextTask.title)}</div>
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

    // Matlamat Hari Ini Ringkas
    dashboardGoalsList.innerHTML = goals.map(g => {
      const isDone = g.completedToday || (g.actualMinutesSpent >= g.allocatedMinutes);
      return `
        <div class="goal-card" style="padding: 12px 14px; margin-bottom: 8px;">
          <div class="goal-header" style="margin-bottom: 4px;">
            <div class="goal-title" style="font-size: 0.9rem;">${escapeHtml(g.title)}</div>
            <div class="streak-pill">🔥 ${g.streakDays || 0}d</div>
          </div>
          <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.75rem; color:var(--text-muted);">
            <span>${t('dailyAllocation')}: ${window.TimeEngine.formatDuration(g.allocatedMinutes)} / ${t('perDay')}</span>
            <span class="badge ${isDone ? 'badge-priority-tinggi' : 'badge-duration'}" style="${isDone ? 'background:rgba(16,185,129,0.2); color:#34d399;' : ''}">
              ${isDone ? t('completedToday') : t('notCompleted')}
            </span>
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

      return `
        <div class="task-card ${taskItem.completed ? 'completed' : ''}" data-id="${taskItem.id}">
          <div class="task-top">
            <input type="checkbox" class="custom-checkbox task-check" data-id="${taskItem.id}" ${taskItem.completed ? 'checked' : ''}>
            <div class="task-details">
              <div class="task-title">${escapeHtml(taskItem.title)}</div>
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

          <div class="goal-footer">
            <span style="font-size: 0.75rem; color: var(--text-muted);">
              ${t('timeSpent')}: <strong style="color: #fff;">${g.actualMinutesSpent || 0}m</strong> / ${g.allocatedMinutes}m
            </span>
            <div style="display:flex; align-items:center; gap:8px;">
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

    // Tutup Modals
    btnCloseTaskModal.addEventListener('click', () => modalTask.classList.remove('active'));
    btnCloseGoalModal.addEventListener('click', () => modalGoal.classList.remove('active'));
    btnCloseSettings.addEventListener('click', () => modalSettings.classList.remove('active'));

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

    // Tindakan Pada Senarai Matlamat (Delete & Focus)
    goalsListContainer.addEventListener('click', (e) => {
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
    btnExportData.addEventListener('click', () => window.Storage.exportDataJSON());
    btnImportTrigger.addEventListener('click', () => fileImportInput.click());

    fileImportInput.addEventListener('change', (e) => {
      const t = (k) => window.I18N ? window.I18N.t(k) : k;
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (event) => {
        const success = window.Storage.importDataJSON(event.target.result);
        if (success) {
          alert(t('importSuccess'));
          renderAll();
        } else {
          alert(t('importError'));
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
      alert(`⏱️ ${t('timerFinishedAlert')}: ${state.item ? state.item.title : 'Focus Session'}! ${t('sessionLogged')}`);
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
