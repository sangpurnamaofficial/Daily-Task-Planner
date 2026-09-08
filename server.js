/**
 * Server & REST API Engine - DailyPulse
 * Pelayan pengeluaran dengan REST API pangkalan data penuh & penghantaran aset web statik.
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');
const db = require('./db');
const aiEngine = require('./aiEngine');

const PORT = process.env.PORT || 3000;
const BASE_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

// Pembantu Membaca JSON Body dari Request
function parseBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
      if (body.length > 1e6) { // Had 1MB
        req.connection.destroy();
        reject(new Error('Payload terlalu besar'));
      }
    });
    req.on('end', () => {
      if (!body) return resolve({});
      try {
        resolve(JSON.parse(body));
      } catch (err) {
        resolve({});
      }
    });
    req.on('error', reject);
  });
}

// Pembantu Menghantar Respons JSON
function sendJSON(res, statusCode, data) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization'
  });
  res.end(JSON.stringify(data));
}

// Pembantu Mengurus Sesi & Pengesahan Pengguna
function getAuthToken(req) {
  const auth = req.headers['authorization'] || '';
  if (auth.startsWith('Bearer ')) {
    return auth.slice(7).trim();
  }
  return null;
}

function getAuthUser(req) {
  const token = getAuthToken(req);
  if (!token) return null;
  return db.getSessionUser(token);
}

function decodeJwtPayload(jwt) {
  try {
    const parts = jwt.split('.');
    if (parts.length < 2) return null;
    const base64 = parts[1].replace(/-/g, '+').replace(/_/g, '/');
    const json = Buffer.from(base64, 'base64').toString('utf8');
    return JSON.parse(json);
  } catch (e) {
    return null;
  }
}

const server = http.createServer(async (req, res) => {
  // CORS Preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization'
    });
    res.end();
    return;
  }

  const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  const pathname = parsedUrl.pathname;

  // ================= REST API ROUTES =================
  if (pathname.startsWith('/api/')) {
    try {
      // 1. Health Check
      if (pathname === '/api/health' && req.method === 'GET') {
        return sendJSON(res, 200, { status: 'healthy', timestamp: new Date().toISOString() });
      }

      // ================= AUTHENTICATION ROUTES =================
      if (pathname === '/api/auth/register' && req.method === 'POST') {
        const body = await parseBody(req);
        try {
          const result = db.registerUser(body);
          return sendJSON(res, 201, { success: true, ...result });
        } catch (authErr) {
          return sendJSON(res, 400, { success: false, error: authErr.message });
        }
      }

      if (pathname === '/api/auth/login' && req.method === 'POST') {
        const body = await parseBody(req);
        try {
          const result = db.loginUser(body);
          return sendJSON(res, 200, { success: true, ...result });
        } catch (authErr) {
          return sendJSON(res, 401, { success: false, error: authErr.message });
        }
      }

      if (pathname === '/api/auth/google' && req.method === 'POST') {
        const body = await parseBody(req);
        try {
          let { credential, email, name, avatar } = body;
          // Decode Google JWT if credential provided
          if (credential) {
            const payload = decodeJwtPayload(credential);
            if (payload) {
              email = email || payload.email;
              name = name || payload.name || payload.given_name;
              avatar = avatar || payload.picture;
            }
          }
          if (!email) {
            return sendJSON(res, 400, { success: false, error: 'Emel Google tidak ditemui' });
          }
          const result = db.loginWithGoogle({ credential, email, name, avatar });
          return sendJSON(res, 200, { success: true, ...result });
        } catch (authErr) {
          return sendJSON(res, 400, { success: false, error: authErr.message });
        }
      }

      if (pathname === '/api/auth/me' && req.method === 'GET') {
        const user = getAuthUser(req);
        if (!user) {
          return sendJSON(res, 401, { success: false, error: 'Sesi tidak sah atau belum log masuk' });
        }
        return sendJSON(res, 200, { success: true, user });
      }

      if (pathname === '/api/auth/logout' && req.method === 'POST') {
        const token = getAuthToken(req);
        if (token) {
          db.deleteSession(token);
        }
        return sendJSON(res, 200, { success: true, message: 'Berjaya log keluar' });
      }

      // User context for scoped resources
      const authUser = getAuthUser(req);
      const userId = authUser ? authUser.id : 'user-demo';

      // 2. Tasks API
      if (pathname === '/api/tasks') {
        if (req.method === 'GET') {
          return sendJSON(res, 200, { success: true, tasks: db.getTasks(userId) });
        }
        if (req.method === 'POST') {
          const body = await parseBody(req);
          if (Array.isArray(body.tasks)) {
            // Bulk update / reorder
            const updated = db.replaceTasks(body.tasks, userId);
            return sendJSON(res, 200, { success: true, tasks: updated });
          }
          if (!body.title) {
            return sendJSON(res, 400, { success: false, error: 'Tajuk tugasan diperlukan' });
          }
          const task = db.addTask(body, userId);
          return sendJSON(res, 201, { success: true, task });
        }
      }

      const taskMatch = pathname.match(/^\/api\/tasks\/([^/]+)$/);
      if (taskMatch) {
        const taskId = decodeURIComponent(taskMatch[1]);
        if (req.method === 'GET') {
          const task = db.getTaskById(taskId, userId);
          if (!task) return sendJSON(res, 404, { success: false, error: 'Tugasan tidak dijumpai' });
          return sendJSON(res, 200, { success: true, task });
        }
        if (req.method === 'PUT') {
          const body = await parseBody(req);
          const updated = db.updateTask(taskId, body, userId);
          if (!updated) return sendJSON(res, 404, { success: false, error: 'Tugasan tidak dijumpai' });
          return sendJSON(res, 200, { success: true, task: updated });
        }
        if (req.method === 'DELETE') {
          const ok = db.deleteTask(taskId, userId);
          if (!ok) return sendJSON(res, 404, { success: false, error: 'Tugasan tidak dijumpai' });
          return sendJSON(res, 200, { success: true, message: 'Tugasan berjaya dipadam' });
        }
      }

      // 3. Goals API
      if (pathname === '/api/goals') {
        if (req.method === 'GET') {
          return sendJSON(res, 200, { success: true, goals: db.getGoals(userId) });
        }
        if (req.method === 'POST') {
          const body = await parseBody(req);
          if (!body.title) {
            return sendJSON(res, 400, { success: false, error: 'Nama matlamat diperlukan' });
          }
          const goal = db.addGoal(body, userId);
          return sendJSON(res, 201, { success: true, goal });
        }
      }

      const goalMatch = pathname.match(/^\/api\/goals\/([^/]+)$/);
      if (goalMatch) {
        const goalId = decodeURIComponent(goalMatch[1]);
        if (req.method === 'GET') {
          const goal = db.getGoalById(goalId, userId);
          if (!goal) return sendJSON(res, 404, { success: false, error: 'Matlamat tidak dijumpai' });
          return sendJSON(res, 200, { success: true, goal });
        }
        if (req.method === 'PUT') {
          const body = await parseBody(req);
          const updated = db.updateGoal(goalId, body, userId);
          if (!updated) return sendJSON(res, 404, { success: false, error: 'Matlamat tidak dijumpai' });
          return sendJSON(res, 200, { success: true, goal: updated });
        }
        if (req.method === 'DELETE') {
          const ok = db.deleteGoal(goalId, userId);
          if (!ok) return sendJSON(res, 404, { success: false, error: 'Matlamat tidak dijumpai' });
          return sendJSON(res, 200, { success: true, message: 'Matlamat berjaya dipadam' });
        }
      }

      // 4. Settings API
      if (pathname === '/api/settings') {
        if (req.method === 'GET') {
          return sendJSON(res, 200, { success: true, settings: db.getSettings(userId) });
        }
        if (req.method === 'PUT' || req.method === 'POST') {
          const body = await parseBody(req);
          const updated = db.updateSettings(body, userId);
          return sendJSON(res, 200, { success: true, settings: updated });
        }
      }

      // 5. History / Analytics Logs API
      if (pathname === '/api/history') {
        if (req.method === 'GET') {
          return sendJSON(res, 200, { success: true, history: db.getHistory(userId) });
        }
        if (req.method === 'POST') {
          const body = await parseBody(req);
          const entry = db.addHistory(body, userId);
          return sendJSON(res, 201, { success: true, entry });
        }
      }

      // 6. Reset to Defaults API
      if (pathname === '/api/reset' && req.method === 'POST') {
        const resetData = db.resetToDefaults(userId);
        return sendJSON(res, 200, { success: true, message: 'Pangkalan data telah dipulihkan', data: resetData });
      }

      // 7. AI Smart Schedule & Optimization API
      if (pathname === '/api/ai/schedule' && req.method === 'POST') {
        const body = await parseBody(req);
        if (!body.rawText || typeof body.rawText !== 'string' || !body.rawText.trim()) {
          return sendJSON(res, 400, { success: false, error: 'Teks tugasan diperlukan untuk penjadualan AI' });
        }
        const scheduleResult = await aiEngine.generateSmartSchedule({
          rawText: body.rawText,
          startTime: body.startTime || '09:00',
          endTime: body.endTime || '18:00',
          pacing: body.pacing || 'balanced',
          bufferMinutes: typeof body.bufferMinutes === 'number' ? body.bufferMinutes : 10,
          includeBreaks: body.includeBreaks !== false,
          applySuggestions: Boolean(body.applySuggestions),
          apiKey: body.apiKey || process.env.GEMINI_API_KEY || null
        });
        return sendJSON(res, 200, scheduleResult);
      }

      if (pathname === '/api/ai/apply-batch' && req.method === 'POST') {
        const body = await parseBody(req);
        const tasksToApply = Array.isArray(body.tasks) ? body.tasks : [];
        if (tasksToApply.length === 0) {
          return sendJSON(res, 400, { success: false, error: 'Tiada tugasan untuk diterapkan' });
        }

        const createdTasks = [];
        for (const t of tasksToApply) {
          if (!t.title) continue;
          const created = db.addTask({
            title: t.title,
            category: t.category || 'Kerja',
            priority: t.priority || 'Sederhana',
            startTime: t.startTime || '09:00',
            endTime: t.endTime || '10:00',
            durationMinutes: t.durationMinutes || 30,
            notes: t.notes || (t.isBreak ? 'Slot Rehat Berjadual AI' : 'Dijana oleh Pembantu Jadual Pintar AI'),
            completed: false
          }, userId);
          createdTasks.push(created);
        }

        return sendJSON(res, 201, {
          success: true,
          message: `Berjaya menerapkan ${createdTasks.length} tugasan ke jadual anda`,
          tasks: createdTasks
        });
      }

      // Route API tidak ditemui
      return sendJSON(res, 404, { success: false, error: 'Endpoint API tidak wujud' });
    } catch (err) {
      console.error('Ralat API:', err);
      return sendJSON(res, 500, { success: false, error: 'Ralat dalaman pelayan' });
    }
  }

  // ================= STATIC ASSET SERVING =================
  let cleanUrl = pathname;
  if (cleanUrl === '/') cleanUrl = '/index.html';

  const filePath = path.join(BASE_DIR, cleanUrl);

  if (!filePath.startsWith(BASE_DIR)) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('Akses Disekat');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end('<h2>404 - Halaman Tidak Dijumpai</h2>');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': 'no-cache'
    });

    fs.createReadStream(filePath).pipe(res);
  });
});

function getLocalIP() {
  const nets = os.networkInterfaces();
  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      if (net.family === 'IPv4' && !net.internal) {
        return net.address;
      }
    }
  }
  return 'localhost';
}

server.listen(PORT, '0.0.0.0', () => {
  const localIP = getLocalIP();
  console.log(`\n======================================================`);
  console.log(`🚀 DailyPulse: Pelayan REST API & Pangkalan Data Aktif!`);
  console.log(`💻 Akses Komputer:  http://localhost:${PORT}`);
  console.log(`📱 Akses Telefon:   http://${localIP}:${PORT}`);
  console.log(`🗄️  Pangkalan Data: data/planner_db.json (Kekal / Persistent)`);
  console.log(`🔌 REST API:        http://localhost:${PORT}/api/tasks`);
  console.log(`======================================================\n`);
});
