/**
 * Test Suite - Supabase Cloud Database Integration
 */

const supabase = require('./supabaseClient');

async function runSupabaseTests() {
  console.log('\n--- MEMULAKAN UJIAN AUTOMATIK SUPABASE CLOUD DATABASE ---');

  if (!supabase.isConfigured()) {
    console.error('❌ Supabase belum dikonfigurasikan!');
    process.exit(1);
  }
  console.log('✅ [LULUS] Konfigurasi Supabase sah');

  const testId = `test-${Date.now()}`;
  const testUserId = `user-${testId}`;

  try {
    // 1. Ujian Cipta Pengguna
    const testUser = {
      id: testUserId,
      name: 'Ujian Supabase User',
      email: `${testId}@example.com`,
      salt: 'testsalt',
      passwordHash: 'testhash',
      avatar: 'https://example.com/avatar.png',
      authProvider: 'local',
      createdAt: new Date().toISOString()
    };
    await supabase.insertUser(testUser);
    console.log('✅ [LULUS] Simpan pengguna baharu ke Supabase');

    // 2. Ujian Cipta Sesi Token
    const testToken = `token-${testId}`;
    await supabase.insertSession(testToken, {
      userId: testUserId,
      createdAt: new Date().toISOString(),
      expiresAt: new Date(Date.now() + 86400000).toISOString()
    });
    console.log('✅ [LULUS] Simpan sesi token ke Supabase');

    // 3. Ujian Cipta Tugasan
    const testTask = {
      id: `task-${testId}`,
      userId: testUserId,
      title: 'Tugasan Ujian Supabase Cloud',
      category: 'Kerja',
      priority: 'Tinggi',
      startTime: '09:00',
      endTime: '10:00',
      durationMinutes: 60,
      actualMinutesSpent: 15,
      completed: false,
      notes: 'Nota ujian cloud'
    };
    await supabase.upsertTask(testTask);
    console.log('✅ [LULUS] Simpan tugasan ke Supabase');

    // 4. Ujian Kemaskini Tugasan
    testTask.completed = true;
    testTask.actualMinutesSpent = 60;
    await supabase.upsertTask(testTask);
    console.log('✅ [LULUS] Kemaskini status tugasan dalam Supabase');

    // 5. Ujian Cipta Matlamat
    const testGoal = {
      id: `goal-${testId}`,
      userId: testUserId,
      title: 'Matlamat Ujian Supabase',
      category: 'Kesihatan',
      weeklyTargetHours: 5,
      daysPerWeek: 5,
      allocatedMinutes: 60,
      actualMinutesSpent: 30,
      completedToday: true,
      streakDays: 3,
      notes: 'Nota matlamat'
    };
    await supabase.upsertGoal(testGoal);
    console.log('✅ [LULUS] Simpan matlamat ke Supabase');

    // 6. Ujian Simpan Tetapan
    await supabase.upsertSettings(testUserId, {
      userName: 'Danial Ujian',
      dayStartTime: '08:00',
      dayEndTime: '22:00',
      theme: 'dark',
      defaultBreakMinutes: 15,
      enableSound: true,
      language: 'ms'
    });
    console.log('✅ [LULUS] Simpan tetapan pengguna ke Supabase');

    // 7. Ujian Muat Turun Data (fetchAll)
    const remoteData = await supabase.fetchAll();
    const foundTask = remoteData.tasks.find(t => t.id === `task-${testId}`);
    const foundGoal = remoteData.goals.find(g => g.id === `goal-${testId}`);
    if (foundTask && foundGoal) {
      console.log('✅ [LULUS] Data yang disimpan berjaya disahkan dalam Supabase');
    } else {
      throw new Error('Data tidak dijumpai semasa fetchAll');
    }

    // 8. Pembersihan (Cleanup)
    await supabase.deleteTask(`task-${testId}`);
    await supabase.deleteGoal(`goal-${testId}`);
    await supabase.deleteSession(testToken);
    console.log('✅ [LULUS] Pemadaman rekod ujian daripada Supabase');

    console.log('\n======================================================');
    console.log('JUMLAH UJIAN SUPABASE: 8 / 8 LULUS 100%!');
    console.log('======================================================\n');
  } catch (err) {
    console.error('❌ Ralat semasa ujian Supabase:', err);
    process.exit(1);
  }
}

runSupabaseTests();
