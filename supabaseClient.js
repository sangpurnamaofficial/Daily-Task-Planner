// Muat turun pemboleh ubah persekitaran tempatan (.env) jika wujud
try {
  const fs = require('fs');
  const path = require('path');
  const envPath = path.join(__dirname, '.env');
  if (fs.existsSync(envPath)) {
    const lines = fs.readFileSync(envPath, 'utf8').split('\n');
    for (const line of lines) {
      const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
      if (match) {
        const key = match[1];
        let val = (match[2] || '').trim();
        if (val.startsWith('"') && val.endsWith('"')) val = val.slice(1, -1);
        if (val.startsWith("'") && val.endsWith("'")) val = val.slice(1, -1);
        if (!process.env[key]) process.env[key] = val;
      }
    }
  }
} catch (_) {}

const SUPABASE_URL = (process.env.SUPABASE_URL || '').replace(/\/+$/, '');
const SUPABASE_KEY = process.env.SUPABASE_KEY || '';

const isConfigured = Boolean(SUPABASE_URL && SUPABASE_KEY);

function getHeaders(preferReturn = false) {
  const headers = {
    'apikey': SUPABASE_KEY,
    'Authorization': `Bearer ${SUPABASE_KEY}`,
    'Content-Type': 'application/json'
  };
  if (preferReturn) {
    headers['Prefer'] = 'return=representation';
  }
  return headers;
}

// ================= TRANSFORMASI DATA (CAMELCASE <-> SNAKE_CASE) =================
function taskToRow(task) {
  return {
    id: task.id,
    user_id: task.userId || 'user-demo',
    title: task.title,
    category: task.category || 'Kerja',
    priority: task.priority || 'Sederhana',
    start_time: task.startTime || '09:00',
    end_time: task.endTime || '09:45',
    duration_minutes: task.durationMinutes || 45,
    actual_minutes_spent: task.actualMinutesSpent || 0,
    completed: Boolean(task.completed),
    notes: task.notes || ''
  };
}

function rowToTask(row) {
  return {
    id: row.id,
    userId: row.user_id,
    title: row.title,
    category: row.category,
    priority: row.priority,
    startTime: row.start_time,
    endTime: row.end_time,
    durationMinutes: row.duration_minutes,
    actualMinutesSpent: row.actual_minutes_spent,
    completed: Boolean(row.completed),
    notes: row.notes || ''
  };
}

function goalToRow(goal) {
  return {
    id: goal.id,
    user_id: goal.userId || 'user-demo',
    title: goal.title,
    category: goal.category || 'Kesihatan',
    weekly_target_hours: goal.weeklyTargetHours || 3.5,
    days_per_week: goal.daysPerWeek || 5,
    allocated_minutes: goal.allocatedMinutes || 30,
    actual_minutes_spent: goal.actualMinutesSpent || 0,
    completed_today: Boolean(goal.completedToday),
    streak_days: goal.streakDays || 0,
    notes: goal.notes || ''
  };
}

function rowToGoal(row) {
  return {
    id: row.id,
    userId: row.user_id,
    title: row.title,
    category: row.category,
    weeklyTargetHours: parseFloat(row.weekly_target_hours) || 0,
    daysPerWeek: parseInt(row.days_per_week, 10) || 5,
    allocatedMinutes: parseInt(row.allocated_minutes, 10) || 30,
    actualMinutesSpent: parseInt(row.actual_minutes_spent, 10) || 0,
    completedToday: Boolean(row.completed_today),
    streakDays: parseInt(row.streak_days, 10) || 0,
    notes: row.notes || ''
  };
}

function userToRow(user) {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    salt: user.salt || '',
    password_hash: user.passwordHash || '',
    avatar: user.avatar || '',
    auth_provider: user.authProvider || 'local',
    created_at: user.createdAt || new Date().toISOString()
  };
}

function rowToUser(row) {
  return {
    id: row.id,
    name: row.name,
    email: row.email,
    salt: row.salt,
    passwordHash: row.password_hash,
    avatar: row.avatar,
    authProvider: row.auth_provider,
    createdAt: row.created_at
  };
}

function sessionToRow(token, session) {
  return {
    token,
    user_id: session.userId,
    created_at: session.createdAt || new Date().toISOString(),
    expires_at: session.expiresAt || new Date(Date.now() + 30 * 86400000).toISOString()
  };
}

function rowToSession(row) {
  return {
    token: row.token,
    session: {
      userId: row.user_id,
      createdAt: row.created_at,
      expiresAt: row.expires_at
    }
  };
}

function settingsToRow(userId, settings) {
  return {
    user_id: userId,
    user_name: settings.userName || 'Dania',
    day_start_time: settings.dayStartTime || '07:30',
    day_end_time: settings.dayEndTime || '23:00',
    theme: settings.theme || 'dark',
    default_break_minutes: settings.defaultBreakMinutes || 10,
    enable_sound: typeof settings.enableSound === 'boolean' ? settings.enableSound : true,
    language: settings.language || 'ms',
    updated_at: new Date().toISOString()
  };
}

function rowToSettings(row) {
  return {
    userName: row.user_name,
    dayStartTime: row.day_start_time,
    dayEndTime: row.day_end_time,
    theme: row.theme,
    defaultBreakMinutes: row.default_break_minutes,
    enableSound: Boolean(row.enable_sound),
    language: row.language
  };
}

// ================= OPERASI REST CLOUD SUPABASE =================
const Supabase = {
  isConfigured() {
    return isConfigured;
  },

  /**
   * Muat turun semua data daripada Supabase untuk menghidrat cache pelayan
   */
  async fetchAll() {
    if (!isConfigured) return null;
    try {
      const headers = getHeaders();
      const [uRes, sRes, tRes, gRes, setRes] = await Promise.all([
        fetch(`${SUPABASE_URL}/rest/v1/users?select=*`, { headers }),
        fetch(`${SUPABASE_URL}/rest/v1/sessions?select=*`, { headers }),
        fetch(`${SUPABASE_URL}/rest/v1/tasks?select=*`, { headers }),
        fetch(`${SUPABASE_URL}/rest/v1/goals?select=*`, { headers }),
        fetch(`${SUPABASE_URL}/rest/v1/settings?select=*`, { headers })
      ]);

      if (!uRes.ok || !tRes.ok) {
        console.warn('Gagal memuat turun data daripada Supabase:', uRes.status, tRes.status);
        return null;
      }

      const [usersRows, sessionsRows, tasksRows, goalsRows, settingsRows] = await Promise.all([
        uRes.json(),
        sRes.json(),
        tRes.json(),
        gRes.json(),
        setRes.json()
      ]);

      const users = usersRows.map(rowToUser);
      const sessions = {};
      sessionsRows.forEach(row => {
        sessions[row.token] = {
          userId: row.user_id,
          createdAt: row.created_at,
          expiresAt: row.expires_at
        };
      });
      const tasks = tasksRows.map(rowToTask);
      const goals = goalsRows.map(rowToGoal);
      
      const userSettings = {};
      let defaultSettings = null;
      settingsRows.forEach(row => {
        const s = rowToSettings(row);
        userSettings[row.user_id] = s;
        if (row.user_id === 'user-demo' || !defaultSettings) {
          defaultSettings = s;
        }
      });

      return {
        users,
        sessions,
        tasks,
        goals,
        settings: defaultSettings,
        userSettings
      };
    } catch (err) {
      console.error('Ralat fetchAll Supabase:', err.message);
      return null;
    }
  },

  // ================= TASKS =================
  async upsertTask(task) {
    if (!isConfigured) return;
    try {
      const row = taskToRow(task);
      await fetch(`${SUPABASE_URL}/rest/v1/tasks`, {
        method: 'POST',
        headers: {
          ...getHeaders(),
          'Prefer': 'resolution=merge-duplicates'
        },
        body: JSON.stringify(row)
      });
    } catch (e) {
      console.warn('Supabase upsertTask ralat:', e.message);
    }
  },

  async deleteTask(id) {
    if (!isConfigured) return;
    try {
      await fetch(`${SUPABASE_URL}/rest/v1/tasks?id=eq.${encodeURIComponent(id)}`, {
        method: 'DELETE',
        headers: getHeaders()
      });
    } catch (e) {
      console.warn('Supabase deleteTask ralat:', e.message);
    }
  },

  // ================= GOALS =================
  async upsertGoal(goal) {
    if (!isConfigured) return;
    try {
      const row = goalToRow(goal);
      await fetch(`${SUPABASE_URL}/rest/v1/goals`, {
        method: 'POST',
        headers: {
          ...getHeaders(),
          'Prefer': 'resolution=merge-duplicates'
        },
        body: JSON.stringify(row)
      });
    } catch (e) {
      console.warn('Supabase upsertGoal ralat:', e.message);
    }
  },

  async deleteGoal(id) {
    if (!isConfigured) return;
    try {
      await fetch(`${SUPABASE_URL}/rest/v1/goals?id=eq.${encodeURIComponent(id)}`, {
        method: 'DELETE',
        headers: getHeaders()
      });
    } catch (e) {
      console.warn('Supabase deleteGoal ralat:', e.message);
    }
  },

  // ================= USERS & AUTH =================
  async insertUser(user) {
    if (!isConfigured) return;
    try {
      const row = userToRow(user);
      await fetch(`${SUPABASE_URL}/rest/v1/users`, {
        method: 'POST',
        headers: {
          ...getHeaders(),
          'Prefer': 'resolution=merge-duplicates'
        },
        body: JSON.stringify(row)
      });
    } catch (e) {
      console.warn('Supabase insertUser ralat:', e.message);
    }
  },

  async insertSession(token, session) {
    if (!isConfigured) return;
    try {
      const row = sessionToRow(token, session);
      await fetch(`${SUPABASE_URL}/rest/v1/sessions`, {
        method: 'POST',
        headers: {
          ...getHeaders(),
          'Prefer': 'resolution=merge-duplicates'
        },
        body: JSON.stringify(row)
      });
    } catch (e) {
      console.warn('Supabase insertSession ralat:', e.message);
    }
  },

  async deleteSession(token) {
    if (!isConfigured) return;
    try {
      await fetch(`${SUPABASE_URL}/rest/v1/sessions?token=eq.${encodeURIComponent(token)}`, {
        method: 'DELETE',
        headers: getHeaders()
      });
    } catch (e) {
      console.warn('Supabase deleteSession ralat:', e.message);
    }
  },

  // ================= SETTINGS =================
  async upsertSettings(userId, settings) {
    if (!isConfigured) return;
    try {
      const row = settingsToRow(userId, settings);
      await fetch(`${SUPABASE_URL}/rest/v1/settings`, {
        method: 'POST',
        headers: {
          ...getHeaders(),
          'Prefer': 'resolution=merge-duplicates'
        },
        body: JSON.stringify(row)
      });
    } catch (e) {
      console.warn('Supabase upsertSettings ralat:', e.message);
    }
  },

  /**
   * Muat naik semua data sedia ada dari fail tempatan ke Supabase (Initial Seeding)
   */
  async seedFromLocal(localData) {
    if (!isConfigured || !localData) return;
    try {
      const headers = { ...getHeaders(), 'Prefer': 'resolution=merge-duplicates' };

      // 1. Users
      if (localData.users && localData.users.length > 0) {
        const rows = localData.users.map(userToRow);
        await fetch(`${SUPABASE_URL}/rest/v1/users`, {
          method: 'POST',
          headers,
          body: JSON.stringify(rows)
        });
      }

      // 2. Tasks
      if (localData.tasks && localData.tasks.length > 0) {
        const rows = localData.tasks.map(taskToRow);
        await fetch(`${SUPABASE_URL}/rest/v1/tasks`, {
          method: 'POST',
          headers,
          body: JSON.stringify(rows)
        });
      }

      // 3. Goals
      if (localData.goals && localData.goals.length > 0) {
        const rows = localData.goals.map(goalToRow);
        await fetch(`${SUPABASE_URL}/rest/v1/goals`, {
          method: 'POST',
          headers,
          body: JSON.stringify(rows)
        });
      }

      // 4. Settings
      if (localData.settings) {
        const row = settingsToRow('user-demo', localData.settings);
        await fetch(`${SUPABASE_URL}/rest/v1/settings`, {
          method: 'POST',
          headers,
          body: JSON.stringify(row)
        });
      }

      console.log('✅ Supabase berjaya dimuatkan dengan data awal!');
    } catch (e) {
      console.warn('Ralat seedFromLocal Supabase:', e.message);
    }
  }
};

module.exports = Supabase;
