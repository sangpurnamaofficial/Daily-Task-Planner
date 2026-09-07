/**
 * Automated REST API & Database Test Suite for DailyPulse
 */

const http = require('http');

function request(method, path, data = null) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: '127.0.0.1',
      port: 3000,
      path: path,
      method: method,
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const req = http.request(options, res => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        try {
          resolve({ status: res.statusCode, data: JSON.parse(body) });
        } catch (e) {
          resolve({ status: res.statusCode, raw: body });
        }
      });
    });

    req.on('error', reject);
    if (data) req.write(JSON.stringify(data));
    req.end();
  });
}

async function runTests() {
  console.log('--- MEMULAKAN UJIAN AUTOMATIK REST API & PANGKALAN DATA ---');
  let passed = 0;
  let total = 0;

  function assert(cond, msg) {
    total++;
    if (cond) {
      console.log(`✅ [LULUS] ${msg}`);
      passed++;
    } else {
      console.error(`❌ [GAGAL] ${msg}`);
    }
  }

  try {
    // 1. Health Check
    const health = await request('GET', '/api/health');
    assert(health.status === 200 && health.data.status === 'healthy', 'GET /api/health mengembalikan status 200 OK');

    // 2. GET Tasks
    const getTasks = await request('GET', '/api/tasks');
    assert(getTasks.status === 200 && Array.isArray(getTasks.data.tasks), 'GET /api/tasks mengembalikan senarai tugasan');
    const initialCount = getTasks.data.tasks.length;

    // 3. POST Task (Create)
    const newTaskPayload = {
      title: 'Ujian Database Online',
      category: 'Kerja',
      priority: 'Tinggi',
      startTime: '10:00',
      endTime: '11:30',
      durationMinutes: 90,
      notes: 'Ujian penyegerakan database'
    };
    const created = await request('POST', '/api/tasks', newTaskPayload);
    assert(created.status === 201 && created.data.task.title === 'Ujian Database Online', 'POST /api/tasks mencipta tugasan baru dalam pangkalan data');
    const createdId = created.data.task.id;

    // 4. PUT Task (Update)
    const updated = await request('PUT', `/api/tasks/${createdId}`, { completed: true, actualMinutesSpent: 90 });
    assert(updated.status === 200 && updated.data.task.completed === true, 'PUT /api/tasks/:id mengemaskini status siap dalam database');

    // 5. GET Task by ID
    const fetched = await request('GET', `/api/tasks/${createdId}`);
    assert(fetched.status === 200 && fetched.data.task.id === createdId, 'GET /api/tasks/:id mengambil rekod spesifik');

    // 6. DELETE Task
    const deleted = await request('DELETE', `/api/tasks/${createdId}`);
    assert(deleted.status === 200 && deleted.data.success === true, 'DELETE /api/tasks/:id memadam tugasan daripada pangkalan data');

    // 7. Verify deletion
    const afterDelete = await request('GET', `/api/tasks/${createdId}`);
    assert(afterDelete.status === 404, 'Tugasan yang dipadam tidak lagi wujud (Status 404)');

    // 8. Goals CRUD
    const getGoals = await request('GET', '/api/goals');
    assert(getGoals.status === 200 && Array.isArray(getGoals.data.goals), 'GET /api/goals mengambil senarai matlamat');

    const newGoalPayload = {
      title: 'Belajar Cloud Deployment',
      category: 'Belajar',
      weeklyTargetHours: 5,
      daysPerWeek: 5,
      allocatedMinutes: 60
    };
    const createdGoal = await request('POST', '/api/goals', newGoalPayload);
    assert(createdGoal.status === 201 && createdGoal.data.goal.title === 'Belajar Cloud Deployment', 'POST /api/goals mencipta matlamat baru');

    const deleteGoal = await request('DELETE', `/api/goals/${createdGoal.data.goal.id}`);
    assert(deleteGoal.status === 200, 'DELETE /api/goals/:id memadam rekod matlamat');

    // 9. Settings API
    const settings = await request('GET', '/api/settings');
    assert(settings.status === 200 && settings.data.settings.language, 'GET /api/settings mengambil tetapan sistem');

    const updateSettings = await request('PUT', '/api/settings', { theme: 'dark', defaultBreakMinutes: 15 });
    assert(updateSettings.status === 200 && updateSettings.data.settings.defaultBreakMinutes === 15, 'PUT /api/settings mengemaskini tetapan kekal');

    console.log(`\n======================================================`);
    console.log(`JUMLAH UJIAN REST API: ${passed} / ${total} LULUS!`);
    console.log(`======================================================\n`);
  } catch (err) {
    console.error('Ralat semasa menjalankan ujian API:', err);
  }
}

runTests();
