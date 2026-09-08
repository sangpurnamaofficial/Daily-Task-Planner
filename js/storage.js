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

  clearAllTasks() {
    try {
      localStorage.setItem(STORAGE_KEYS.TASKS, JSON.stringify([]));
      if (typeof fetch !== 'undefined') {
        fetch('/api/tasks', {
          method: 'DELETE',
          headers: this.getAuthHeaders()
        }).catch(() => {
          fetch('/api/tasks', {
            method: 'POST',
            headers: this.getAuthHeaders(),
            body: JSON.stringify({ tasks: [] })
          }).catch(() => {});
        });
      }
    } catch (e) {
      console.error('Ralat mengosongkan tugasan:', e);
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
