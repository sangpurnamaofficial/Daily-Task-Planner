/**
 * Server & REST API Engine - DailyPulse
 * Pelayan pengeluaran dengan REST API pangkalan data penuh & penghantaran aset web statik.
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');
const db = require('./db');

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

      // 2. Tasks API
      if (pathname === '/api/tasks') {
        if (req.method === 'GET') {
          return sendJSON(res, 200, { success: true, tasks: db.getTasks() });
        }
        if (req.method === 'POST') {
          const body = await parseBody(req);
          if (Array.isArray(body.tasks)) {
            // Bulk update / reorder
            const updated = db.replaceTasks(body.tasks);
            return sendJSON(res, 200, { success: true, tasks: updated });
          }
          if (!body.title) {
            return sendJSON(res, 400, { success: false, error: 'Tajuk tugasan diperlukan' });
          }
          const task = db.addTask(body);
          return sendJSON(res, 201, { success: true, task });
        }
      }

      const taskMatch = pathname.match(/^\/api\/tasks\/([^/]+)$/);
      if (taskMatch) {
        const taskId = decodeURIComponent(taskMatch[1]);
        if (req.method === 'GET') {
          const task = db.getTaskById(taskId);
          if (!task) return sendJSON(res, 404, { success: false, error: 'Tugasan tidak dijumpai' });
          return sendJSON(res, 200, { success: true, task });
        }
        if (req.method === 'PUT') {
          const body = await parseBody(req);
          const updated = db.updateTask(taskId, body);
          if (!updated) return sendJSON(res, 404, { success: false, error: 'Tugasan tidak dijumpai' });
          return sendJSON(res, 200, { success: true, task: updated });
        }
        if (req.method === 'DELETE') {
          const ok = db.deleteTask(taskId);
          if (!ok) return sendJSON(res, 404, { success: false, error: 'Tugasan tidak dijumpai' });
          return sendJSON(res, 200, { success: true, message: 'Tugasan berjaya dipadam' });
        }
      }

      // 3. Goals API
      if (pathname === '/api/goals') {
        if (req.method === 'GET') {
          return sendJSON(res, 200, { success: true, goals: db.getGoals() });
        }
        if (req.method === 'POST') {
          const body = await parseBody(req);
          if (!body.title) {
            return sendJSON(res, 400, { success: false, error: 'Nama matlamat diperlukan' });
          }
          const goal = db.addGoal(body);
          return sendJSON(res, 201, { success: true, goal });
        }
      }

      const goalMatch = pathname.match(/^\/api\/goals\/([^/]+)$/);
      if (goalMatch) {
        const goalId = decodeURIComponent(goalMatch[1]);
        if (req.method === 'GET') {
          const goal = db.getGoalById(goalId);
          if (!goal) return sendJSON(res, 404, { success: false, error: 'Matlamat tidak dijumpai' });
          return sendJSON(res, 200, { success: true, goal });
        }
        if (req.method === 'PUT') {
          const body = await parseBody(req);
          const updated = db.updateGoal(goalId, body);
          if (!updated) return sendJSON(res, 404, { success: false, error: 'Matlamat tidak dijumpai' });
          return sendJSON(res, 200, { success: true, goal: updated });
        }
        if (req.method === 'DELETE') {
          const ok = db.deleteGoal(goalId);
          if (!ok) return sendJSON(res, 404, { success: false, error: 'Matlamat tidak dijumpai' });
          return sendJSON(res, 200, { success: true, message: 'Matlamat berjaya dipadam' });
        }
      }

      // 4. Settings API
      if (pathname === '/api/settings') {
        if (req.method === 'GET') {
          return sendJSON(res, 200, { success: true, settings: db.getSettings() });
        }
        if (req.method === 'PUT' || req.method === 'POST') {
          const body = await parseBody(req);
          const updated = db.updateSettings(body);
          return sendJSON(res, 200, { success: true, settings: updated });
        }
      }

      // 5. History / Analytics Logs API
      if (pathname === '/api/history') {
        if (req.method === 'GET') {
          return sendJSON(res, 200, { success: true, history: db.getHistory() });
        }
        if (req.method === 'POST') {
          const body = await parseBody(req);
          const entry = db.addHistory(body);
          return sendJSON(res, 201, { success: true, entry });
        }
      }

      // 6. Reset to Defaults API
      if (pathname === '/api/reset' && req.method === 'POST') {
        const resetData = db.resetToDefaults();
        return sendJSON(res, 200, { success: true, message: 'Pangkalan data telah dipulihkan', data: resetData });
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
