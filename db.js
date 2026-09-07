/**
 * Database Engine - DailyPulse
 * Mengendalikan storan pangkalan data kekal (Persistent File-Backed Database)
 * dengan operasi atomik selamat untuk pengeluaran (production-ready).
 */

const fs = require('fs');
const path = require('path');

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

class Database {
  constructor() {
    this.ensureDataDir();
    this.data = this.readDb();
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
        return JSON.parse(raw);
      }
    } catch (e) {
      console.error('Ralat membaca fail database, memulakan data baru:', e.message);
    }

    // Default structure
    const initialData = {
      tasks: INITIAL_TASKS,
      goals: INITIAL_GOALS,
      settings: DEFAULT_SETTINGS,
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

  // ================= TASKS CRUD =================
  getTasks() {
    return this.data.tasks || [];
  }

  getTaskById(id) {
    return (this.data.tasks || []).find(t => t.id === id) || null;
  }

  addTask(task) {
    const newTask = {
      id: task.id || `task-${Date.now()}`,
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
    this.data.tasks.push(newTask);
    this.writeDb(this.data);
    return newTask;
  }

  updateTask(id, updates) {
    const idx = (this.data.tasks || []).findIndex(t => t.id === id);
    if (idx === -1) return null;

    this.data.tasks[idx] = {
      ...this.data.tasks[idx],
      ...updates,
      updatedAt: new Date().toISOString()
    };
    this.writeDb(this.data);
    return this.data.tasks[idx];
  }

  deleteTask(id) {
    const initialLen = this.data.tasks.length;
    this.data.tasks = this.data.tasks.filter(t => t.id !== id);
    if (this.data.tasks.length !== initialLen) {
      this.writeDb(this.data);
      return true;
    }
    return false;
  }

  replaceTasks(tasks) {
    this.data.tasks = Array.isArray(tasks) ? tasks : [];
    this.writeDb(this.data);
    return this.data.tasks;
  }

  // ================= GOALS CRUD =================
  getGoals() {
    return this.data.goals || [];
  }

  getGoalById(id) {
    return (this.data.goals || []).find(g => g.id === id) || null;
  }

  addGoal(goal) {
    const newGoal = {
      id: goal.id || `goal-${Date.now()}`,
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
    this.data.goals.push(newGoal);
    this.writeDb(this.data);
    return newGoal;
  }

  updateGoal(id, updates) {
    const idx = (this.data.goals || []).findIndex(g => g.id === id);
    if (idx === -1) return null;

    this.data.goals[idx] = {
      ...this.data.goals[idx],
      ...updates,
      updatedAt: new Date().toISOString()
    };
    this.writeDb(this.data);
    return this.data.goals[idx];
  }

  deleteGoal(id) {
    const initialLen = this.data.goals.length;
    this.data.goals = this.data.goals.filter(g => g.id !== id);
    if (this.data.goals.length !== initialLen) {
      this.writeDb(this.data);
      return true;
    }
    return false;
  }

  // ================= SETTINGS =================
  getSettings() {
    return { ...DEFAULT_SETTINGS, ...(this.data.settings || {}) };
  }

  updateSettings(updates) {
    this.data.settings = {
      ...this.getSettings(),
      ...updates
    };
    this.writeDb(this.data);
    return this.data.settings;
  }

  // ================= HISTORY =================
  getHistory() {
    return this.data.history || [];
  }

  addHistory(entry) {
    const record = {
      ...entry,
      id: `hist-${Date.now()}`,
      timestamp: Date.now(),
      date: new Date().toISOString().slice(0, 10)
    };
    if (!this.data.history) this.data.history = [];
    this.data.history.push(record);
    this.writeDb(this.data);
    return record;
  }

  // ================= RESET =================
  resetToDefaults() {
    const resetData = {
      tasks: INITIAL_TASKS,
      goals: INITIAL_GOALS,
      settings: DEFAULT_SETTINGS,
      history: []
    };
    this.writeDb(resetData);
    return resetData;
  }
}

module.exports = new Database();
