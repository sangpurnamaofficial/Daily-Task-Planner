/**
 * Database Engine - DailyPulse
 * Mengendalikan storan pangkalan data kekal (Persistent File-Backed Database)
 * dengan pengesahan pengguna multi-user, token sesi selamat, dan Google Auth.
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const supabase = require('./supabaseClient');

const DATA_DIR = path.join(__dirname, 'data');
const DB_FILE = path.join(DATA_DIR, 'planner_db.json');

const DEFAULT_SETTINGS = {
  userName: 'Dania',
  dayStartTime: '07:30',
  dayEndTime: '23:00',
  theme: 'dark',
  defaultBreakMinutes: 10,
  enableSound: true,
  language: 'ms'
};

const DEMO_USER_ID = 'user-demo';

const INITIAL_TASKS = [
  {
    id: 'task-1',
    userId: DEMO_USER_ID,
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
    userId: DEMO_USER_ID,
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
    userId: DEMO_USER_ID,
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
    userId: DEMO_USER_ID,
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
    userId: DEMO_USER_ID,
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
    userId: DEMO_USER_ID,
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
    userId: DEMO_USER_ID,
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

class Database {
  constructor() {
    this.ensureDataDir();
    this.data = this.readDb();
    this.initSupabaseSync();
  }

  async initSupabaseSync() {
    if (!supabase.isConfigured()) return;
    try {
      const remote = await supabase.fetchAll();
      if (remote) {
        if (remote.users && remote.users.length > 0) {
          this.data.users = remote.users;
          this.data.sessions = remote.sessions || {};
          this.data.tasks = remote.tasks || [];
          this.data.goals = remote.goals || [];
          if (remote.settings) this.data.settings = remote.settings;
          if (remote.userSettings) this.data.userSettings = remote.userSettings;
          this.writeDb(this.data);
          console.log('☁️ DailyPulse: Berjaya dimuatkan daripada Supabase Cloud Database!');
        } else {
          await supabase.seedFromLocal(this.data);
        }
      }
    } catch (err) {
      console.warn('Supabase initial sync info:', err.message);
    }
  }

  ensureDataDir() {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
  }

  readDb() {
    try {
      if (fs.existsSync(DB_FILE)) {
        const raw = fs.readFileSync(DB_FILE, 'utf8');
        const parsed = JSON.parse(raw);
        if (!parsed.users) parsed.users = [];
        if (!parsed.sessions) parsed.sessions = {};
        if (!parsed.userSettings) parsed.userSettings = {};

        // Seed demo user if missing
        if (!parsed.users.some(u => u.id === DEMO_USER_ID)) {
          const demoSalt = 'demo_salt_dailypulse_2026';
          parsed.users.push({
            id: DEMO_USER_ID,
            name: 'Dania (Demo)',
            email: 'demo@dailypulse.com',
            salt: demoSalt,
            passwordHash: this.hashPassword('demo123', demoSalt),
            avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=DaniaDemo',
            authProvider: 'local',
            createdAt: new Date().toISOString()
          });
        }
        return parsed;
      }
    } catch (e) {
      console.error('Ralat membaca fail database, memulakan data baru:', e.message);
    }

    // Default structure
    const demoSalt = 'demo_salt_dailypulse_2026';
    const initialData = {
      users: [
        {
          id: DEMO_USER_ID,
          name: 'Dania (Demo)',
          email: 'demo@dailypulse.com',
          salt: demoSalt,
          passwordHash: this.hashPassword('demo123', demoSalt),
          avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=DaniaDemo',
          authProvider: 'local',
          createdAt: new Date().toISOString()
        }
      ],
      sessions: {},
      tasks: INITIAL_TASKS,
      goals: INITIAL_GOALS,
      settings: DEFAULT_SETTINGS,
      userSettings: {},
      history: []
    };
    this.writeDb(initialData);
    return initialData;
  }

  writeDb(data) {
    this.ensureDataDir();
    const tempFile = `${DB_FILE}.tmp.${Date.now()}`;
    try {
      fs.writeFileSync(tempFile, JSON.stringify(data, null, 2), 'utf8');
      fs.renameSync(tempFile, DB_FILE);
      this.data = data;
    } catch (e) {
      if (fs.existsSync(tempFile)) {
        try { fs.unlinkSync(tempFile); } catch (_) {}
      }
      console.error('Ralat menulis ke pangkalan data:', e.message);
      throw e;
    }
  }

  // ================= AUTHENTICATION & USERS =================
  hashPassword(password, salt) {
    return crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
  }

  registerUser({ name, email, password }) {
    if (!email || !password || !name) {
      throw new Error('Nama, emel, dan kata laluan diperlukan.');
    }
    const cleanEmail = email.toLowerCase().trim();
    if (!this.data.users) this.data.users = [];

    const existing = this.data.users.find(u => u.email.toLowerCase() === cleanEmail);
    if (existing) {
      throw new Error('Akaun dengan alamat emel ini sudah wujud.');
    }

    const salt = crypto.randomBytes(16).toString('hex');
    const passwordHash = this.hashPassword(password, salt);
    const userId = `user-${Date.now()}`;
    const newUser = {
      id: userId,
      name: name.trim(),
      email: cleanEmail,
      salt,
      passwordHash,
      avatar: `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(name.trim())}`,
      authProvider: 'local',
      createdAt: new Date().toISOString()
    };

    this.data.users.push(newUser);

    // Initial starter tasks for this new user
    const userStarterTasks = [
      {
        id: `task-${Date.now()}-1`,
        userId: userId,
        title: 'Terokai Ciri DailyPulse & Tetapkan Sasaran Hari Ini',
        category: 'Peribadi',
        priority: 'Tinggi',
        startTime: '09:00',
        endTime: '09:30',
        durationMinutes: 30,
        actualMinutesSpent: 0,
        completed: false,
        notes: 'Selamat datang ke DailyPulse! Tambah tugas harian anda.'
      }
    ];
    if (!this.data.tasks) this.data.tasks = [];
    this.data.tasks.push(...userStarterTasks);

    const token = this.createSession(userId);
    this.writeDb(this.data);

    // Sync ke Supabase Cloud
    supabase.insertUser(newUser);
    supabase.insertSession(token, this.data.sessions[token]);
    userStarterTasks.forEach(t => supabase.upsertTask(t));

    const { salt: _, passwordHash: __, ...safeUser } = newUser;
    return { user: safeUser, token };
  }

  loginUser({ email, password }) {
    if (!email || !password) {
      throw new Error('Emel dan kata laluan diperlukan.');
    }
    const cleanEmail = email.toLowerCase().trim();
    const user = (this.data.users || []).find(u => u.email.toLowerCase() === cleanEmail);
    if (!user) {
      throw new Error('Emel atau kata laluan tidak tepat.');
    }

    if (user.authProvider === 'google' && !user.passwordHash) {
      throw new Error('Akaun ini didaftarkan melalui Google. Sila log masuk dengan Google.');
    }

    const hash = this.hashPassword(password, user.salt);
    if (hash !== user.passwordHash) {
      throw new Error('Emel atau kata laluan tidak tepat.');
    }

    const token = this.createSession(user.id);
    this.writeDb(this.data);

    // Sync ke Supabase Cloud
    supabase.insertSession(token, this.data.sessions[token]);

    const { salt: _, passwordHash: __, ...safeUser } = user;
    return { user: safeUser, token };
  }

  loginWithGoogle({ credential, email, name, avatar }) {
    if (!email) {
      throw new Error('Emel Google diperlukan.');
    }
    const cleanEmail = email.toLowerCase().trim();
    if (!this.data.users) this.data.users = [];

    let user = this.data.users.find(u => u.email.toLowerCase() === cleanEmail);
    if (!user) {
      const userId = `user-g-${Date.now()}`;
      user = {
        id: userId,
        name: name || cleanEmail.split('@')[0],
        email: cleanEmail,
        avatar: avatar || `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(name || cleanEmail)}`,
        authProvider: 'google',
        createdAt: new Date().toISOString()
      };
      this.data.users.push(user);

      // Starter task for google user
      const userStarterTasks = [
        {
          id: `task-${Date.now()}-1`,
          userId: userId,
          title: 'Sediakan Jadual Tugasan Hari Ini',
          category: 'Kerja',
          priority: 'Tinggi',
          startTime: '09:00',
          endTime: '09:45',
          durationMinutes: 45,
          actualMinutesSpent: 0,
          completed: false,
          notes: 'Log masuk melalui Google disahkan!'
        }
      ];
      if (!this.data.tasks) this.data.tasks = [];
      this.data.tasks.push(...userStarterTasks);
    } else {
      if (avatar && (!user.avatar || user.avatar.includes('dicebear'))) user.avatar = avatar;
      if (name && user.name === cleanEmail.split('@')[0]) user.name = name;
    }

    const token = this.createSession(user.id);
    this.writeDb(this.data);

    // Sync ke Supabase Cloud
    supabase.insertUser(user);
    supabase.insertSession(token, this.data.sessions[token]);
    if (typeof userStarterTasks !== 'undefined' && userStarterTasks.length > 0) {
      userStarterTasks.forEach(t => supabase.upsertTask(t));
    }

    const { salt: _, passwordHash: __, ...safeUser } = user;
    return { user: safeUser, token };
  }

  createSession(userId) {
    if (!this.data.sessions) this.data.sessions = {};
    const token = crypto.randomBytes(32).toString('hex');
    this.data.sessions[token] = {
      userId,
      createdAt: new Date().toISOString(),
      expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString() // 30 hari
    };
    return token;
  }

  getSessionUser(token) {
    if (!token || !this.data.sessions || !this.data.sessions[token]) return null;
    const session = this.data.sessions[token];
    if (new Date(session.expiresAt) < new Date()) {
      delete this.data.sessions[token];
      this.writeDb(this.data);
      return null;
    }
    const user = (this.data.users || []).find(u => u.id === session.userId);
    if (!user) return null;
    const { salt: _, passwordHash: __, ...safeUser } = user;
    return safeUser;
  }

  deleteSession(token) {
    if (this.data.sessions && this.data.sessions[token]) {
      delete this.data.sessions[token];
      this.writeDb(this.data);
      supabase.deleteSession(token);
      return true;
    }
    return false;
  }

  // ================= TASKS CRUD (USER-SCOPED) =================
  getTasks(userId = null) {
    const all = this.data.tasks || [];
    if (!userId || userId === DEMO_USER_ID) {
      return all.filter(t => !t.userId || t.userId === DEMO_USER_ID);
    }
    return all.filter(t => t.userId === userId);
  }

  getTaskById(id, userId = null) {
    return (this.data.tasks || []).find(t => {
      if (t.id !== id) return false;
      if (!userId || userId === DEMO_USER_ID) return !t.userId || t.userId === DEMO_USER_ID;
      return t.userId === userId;
    }) || null;
  }

  addTask(task, userId = null) {
    const ownerId = userId || task.userId || DEMO_USER_ID;
    const newTask = {
      id: task.id || `task-${Date.now()}`,
      userId: ownerId,
      title: task.title,
      category: task.category || 'Kerja',
      priority: task.priority || 'Sederhana',
      startTime: task.startTime || '09:00',
      endTime: task.endTime || '10:00',
      durationMinutes: parseInt(task.durationMinutes, 10) || 60,
      actualMinutesSpent: parseInt(task.actualMinutesSpent, 10) || 0,
      completed: !!task.completed,
      notes: task.notes || '',
      createdAt: new Date().toISOString()
    };
    if (!this.data.tasks) this.data.tasks = [];
    this.data.tasks.push(newTask);
    this.writeDb(this.data);
    supabase.upsertTask(newTask);
    return newTask;
  }

  updateTask(id, updates, userId = null) {
    const idx = (this.data.tasks || []).findIndex(t => {
      if (t.id !== id) return false;
      if (!userId || userId === DEMO_USER_ID) return !t.userId || t.userId === DEMO_USER_ID;
      return t.userId === userId;
    });
    if (idx === -1) return null;

    this.data.tasks[idx] = {
      ...this.data.tasks[idx],
      ...updates,
      updatedAt: new Date().toISOString()
    };
    this.writeDb(this.data);
    supabase.upsertTask(this.data.tasks[idx]);
    return this.data.tasks[idx];
  }

  deleteTask(id, userId = null) {
    const initialLen = (this.data.tasks || []).length;
    this.data.tasks = (this.data.tasks || []).filter(t => {
      if (t.id !== id) return true;
      if (!userId || userId === DEMO_USER_ID) return t.userId && t.userId !== DEMO_USER_ID;
      return t.userId !== userId;
    });
    if (this.data.tasks.length !== initialLen) {
      this.writeDb(this.data);
      supabase.deleteTask(id);
      return true;
    }
    return false;
  }

  replaceTasks(tasks, userId = null) {
    const ownerId = userId || DEMO_USER_ID;
    const otherUsersTasks = (this.data.tasks || []).filter(t => {
      if (ownerId === DEMO_USER_ID) return t.userId && t.userId !== DEMO_USER_ID;
      return t.userId !== ownerId;
    });
    const formatted = (Array.isArray(tasks) ? tasks : []).map(t => ({
      ...t,
      userId: ownerId
    }));
    this.data.tasks = [...otherUsersTasks, ...formatted];
    this.writeDb(this.data);
    formatted.forEach(t => supabase.upsertTask(t));
    return formatted;
  }

  // ================= GOALS CRUD (USER-SCOPED) =================
  getGoals(userId = null) {
    const all = this.data.goals || [];
    if (!userId || userId === DEMO_USER_ID) {
      return all.filter(g => !g.userId || g.userId === DEMO_USER_ID);
    }
    return all.filter(g => g.userId === userId);
  }

  getGoalById(id, userId = null) {
    return (this.data.goals || []).find(g => {
      if (g.id !== id) return false;
      if (!userId || userId === DEMO_USER_ID) return !g.userId || g.userId === DEMO_USER_ID;
      return g.userId === userId;
    }) || null;
  }

  addGoal(goal, userId = null) {
    const ownerId = userId || goal.userId || DEMO_USER_ID;
    const newGoal = {
      id: goal.id || `goal-${Date.now()}`,
      userId: ownerId,
      title: goal.title,
      category: goal.category || 'Belajar',
      weeklyTargetHours: parseFloat(goal.weeklyTargetHours) || 3.5,
      daysPerWeek: parseInt(goal.daysPerWeek, 10) || 5,
      allocatedMinutes: parseInt(goal.allocatedMinutes, 10) || 42,
      actualMinutesSpent: parseInt(goal.actualMinutesSpent, 10) || 0,
      completedToday: !!goal.completedToday,
      streakDays: parseInt(goal.streakDays, 10) || 1,
      notes: goal.notes || '',
      createdAt: new Date().toISOString()
    };
    if (!this.data.goals) this.data.goals = [];
    this.data.goals.push(newGoal);
    this.writeDb(this.data);
    supabase.upsertGoal(newGoal);
    return newGoal;
  }

  updateGoal(id, updates, userId = null) {
    const idx = (this.data.goals || []).findIndex(g => {
      if (g.id !== id) return false;
      if (!userId || userId === DEMO_USER_ID) return !g.userId || g.userId === DEMO_USER_ID;
      return g.userId === userId;
    });
    if (idx === -1) return null;

    this.data.goals[idx] = {
      ...this.data.goals[idx],
      ...updates,
      updatedAt: new Date().toISOString()
    };
    this.writeDb(this.data);
    supabase.upsertGoal(this.data.goals[idx]);
    return this.data.goals[idx];
  }

  deleteGoal(id, userId = null) {
    const initialLen = (this.data.goals || []).length;
    this.data.goals = (this.data.goals || []).filter(g => {
      if (g.id !== id) return true;
      if (!userId || userId === DEMO_USER_ID) return g.userId && g.userId !== DEMO_USER_ID;
      return g.userId !== userId;
    });
    if (this.data.goals.length !== initialLen) {
      this.writeDb(this.data);
      supabase.deleteGoal(id);
      return true;
    }
    return false;
  }

  // ================= SETTINGS (USER-SCOPED) =================
  getSettings(userId = null) {
    const ownerId = userId || DEMO_USER_ID;
    if (!this.data.userSettings) this.data.userSettings = {};
    if (ownerId === DEMO_USER_ID) {
      return { ...DEFAULT_SETTINGS, ...(this.data.settings || {}) };
    }
    return { ...DEFAULT_SETTINGS, ...(this.data.userSettings[ownerId] || {}) };
  }

  updateSettings(updates, userId = null) {
    const ownerId = userId || DEMO_USER_ID;
    if (!this.data.userSettings) this.data.userSettings = {};
    if (ownerId === DEMO_USER_ID) {
      this.data.settings = { ...this.getSettings(ownerId), ...updates };
    } else {
      this.data.userSettings[ownerId] = { ...this.getSettings(ownerId), ...updates };
    }
    this.writeDb(this.data);
    supabase.upsertSettings(ownerId, this.getSettings(ownerId));
    return this.getSettings(ownerId);
  }

  // ================= HISTORY =================
  getHistory(userId = null) {
    const ownerId = userId || DEMO_USER_ID;
    return (this.data.history || []).filter(h => !h.userId || h.userId === ownerId);
  }

  addHistory(entry, userId = null) {
    const ownerId = userId || DEMO_USER_ID;
    const record = {
      ...entry,
      id: `hist-${Date.now()}`,
      userId: ownerId,
      timestamp: Date.now(),
      date: new Date().toISOString().slice(0, 10)
    };
    if (!this.data.history) this.data.history = [];
    this.data.history.push(record);
    this.writeDb(this.data);
    return record;
  }

  // ================= RESET =================
  resetToDefaults(userId = null) {
    const ownerId = userId || DEMO_USER_ID;
    if (ownerId === DEMO_USER_ID) {
      this.data.tasks = (this.data.tasks || []).filter(t => t.userId && t.userId !== DEMO_USER_ID);
      this.data.tasks.push(...INITIAL_TASKS);
      this.data.goals = (this.data.goals || []).filter(g => g.userId && g.userId !== DEMO_USER_ID);
      this.data.goals.push(...INITIAL_GOALS);
      this.data.settings = DEFAULT_SETTINGS;
      this.writeDb(this.data);
      return { tasks: INITIAL_TASKS, goals: INITIAL_GOALS, settings: DEFAULT_SETTINGS };
    } else {
      this.data.tasks = (this.data.tasks || []).filter(t => t.userId !== ownerId);
      this.data.goals = (this.data.goals || []).filter(g => g.userId !== ownerId);
      if (this.data.userSettings) delete this.data.userSettings[ownerId];
      this.writeDb(this.data);
      return { tasks: [], goals: [], settings: DEFAULT_SETTINGS };
    }
  }
}

module.exports = new Database();
