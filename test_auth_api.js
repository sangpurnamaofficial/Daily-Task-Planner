/**
 * Test Suite: Auth & Multi-User Partitioning
 */
const http = require('http');

function request(method, path, data = null, token = null) {
  return new Promise((resolve, reject) => {
    const headers = { 'Content-Type': 'application/json' };
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const req = http.request({
      hostname: '127.0.0.1',
      port: 3000,
      path,
      method,
      headers
    }, res => {
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

async function runAuthTests() {
  console.log('--- MEMULAKAN UJIAN AUTHENTICATION & MULTI-USER ---');
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

  const testEmail = `user_${Date.now()}@example.com`;
  const testPassword = 'Password123!';
  const testName = 'Ahmad Test';

  try {
    // 1. Register User
    const regRes = await request('POST', '/api/auth/register', {
      name: testName,
      email: testEmail,
      password: testPassword
    });
    assert(regRes.status === 201 && regRes.data.success && regRes.data.token, 'Pendaftaran pengguna baharu berjaya dengan token');
    const userToken = regRes.data.token;
    const userId = regRes.data.user.id;

    // 2. Prevent Duplicate Email Registration
    const dupRes = await request('POST', '/api/auth/register', {
      name: 'Duplicate',
      email: testEmail,
      password: 'differentPassword'
    });
    assert(dupRes.status === 400 && dupRes.data.success === false, 'Pendaftaran emel pendua dihalang (Status 400)');

    // 3. Login with Correct Password
    const loginRes = await request('POST', '/api/auth/login', {
      email: testEmail,
      password: testPassword
    });
    assert(loginRes.status === 200 && loginRes.data.success && loginRes.data.token, 'Log masuk berjaya dengan kata laluan yang betul');

    // 4. Login with Wrong Password
    const wrongLogin = await request('POST', '/api/auth/login', {
      email: testEmail,
      password: 'WrongPassword'
    });
    assert(wrongLogin.status === 401, 'Log masuk dengan kata laluan salah ditolak (Status 401)');

    // 5. GET /api/auth/me with valid Bearer token
    const meRes = await request('GET', '/api/auth/me', null, userToken);
    assert(meRes.status === 200 && meRes.data.user.email === testEmail, 'GET /api/auth/me mengesahkan identiti pengguna aktif');

    // 6. User creates a task
    const createTask = await request('POST', '/api/tasks', {
      title: 'Tugasan Rahsia Pengguna Ahmad',
      category: 'Kerja',
      priority: 'Tinggi',
      durationMinutes: 45
    }, userToken);
    assert(createTask.status === 201 && createTask.data.task.userId === userId, 'Tugasan yang dicipta dikhususkan kepada ID pengguna berdaftar');
    const taskId = createTask.data.task.id;

    // 7. Demo / Unauthenticated user does NOT see Ahmad's task
    const demoTasks = await request('GET', '/api/tasks');
    const hasSecretTask = demoTasks.data.tasks.some(t => t.id === taskId);
    assert(!hasSecretTask, 'Pengguna demo / tidak log masuk TIDAK dapat melihat tugasan pengguna berdaftar (Data Isolation Berjaya)');

    // 8. Authenticated user sees their own task
    const ahmadTasks = await request('GET', '/api/tasks', null, userToken);
    const seesSecretTask = ahmadTasks.data.tasks.some(t => t.id === taskId);
    assert(seesSecretTask, 'Pengguna berdaftar dapat melihat tugasan persendirian mereka');

    // 9. Google Sign-In flow test
    const googleRes = await request('POST', '/api/auth/google', {
      email: `google_${Date.now()}@gmail.com`,
      name: 'Google User',
      avatar: 'https://lh3.googleusercontent.com/a/sample'
    });
    assert(googleRes.status === 200 && googleRes.data.success && googleRes.data.token, 'Log masuk Google berjaya mencipta akaun dan token');

    // 10. Logout invalidates session
    const logoutRes = await request('POST', '/api/auth/logout', null, userToken);
    assert(logoutRes.status === 200, 'POST /api/auth/logout berjaya');

    const meAfterLogout = await request('GET', '/api/auth/me', null, userToken);
    assert(meAfterLogout.status === 401, 'Sesi dipadam selepas log keluar (Token tidak sah lagi)');

    console.log(`\n======================================================`);
    console.log(`JUMLAH UJIAN AUTH: ${passed} / ${total} LULUS!`);
    console.log(`======================================================\n`);
    process.exit(passed === total ? 0 : 1);
  } catch (err) {
    console.error('Ralat ujian auth:', err);
    process.exit(1);
  }
}

runAuthTests();
