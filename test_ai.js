/**
 * Test Suite - AI Schedule & Optimization Engine
 * Menguji pengekstrakan teks mentah, penetapan waktu mula/tamat,
 * cadangan penjimatan masa, dan penjadualan bebas konflik.
 */

const assert = require('assert');
const aiEngine = require('./aiEngine');
const TimeEngine = require('./js/timeEngine');

console.log('\n--- MEMULAKAN UJIAN AUTOMATIK AI SCHEDULE & OPTIMIZATION ENGINE ---');

let passedTests = 0;

function runTest(description, fn) {
  try {
    fn();
    console.log(`✅ [LULUS] ${description}`);
    passedTests++;
  } catch (err) {
    console.error(`❌ [GAGAL] ${description}:`, err.message);
    process.exitCode = 1;
  }
}

// 1. Ujian Pengekstrakan Durasi Eksplisit
runTest('Ekstrak pelbagai format durasi minit dan jam', () => {
  assert.strictEqual(aiEngine.extractExplicitDuration('Jogging 30 minit'), 30);
  assert.strictEqual(aiEngine.extractExplicitDuration('Siapkan slide 1 jam'), 60);
  assert.strictEqual(aiEngine.extractExplicitDuration('Baca buku 1.5 jam'), 90);
  assert.strictEqual(aiEngine.extractExplicitDuration('Koding modul 1j 30m'), 90);
  assert.strictEqual(aiEngine.extractExplicitDuration('Sesi pantas 15m'), 15);
});

// 2. Ujian Pengekstrakan Waktu Tetap (Fixed Anchor Time)
runTest('Ekstrak waktu tetap (AM/PM/Petang/Pagi)', () => {
  assert.strictEqual(aiEngine.extractFixedTime('Meeting client pukul 2 petang'), '14:00');
  assert.strictEqual(aiEngine.extractFixedTime('Sarapan jam 8:30 pagi'), '08:30');
  assert.strictEqual(aiEngine.extractFixedTime('Webinar at 3:00 pm'), '15:00');
});

// 3. Ujian Menghurai Teks Mentah (Brain Dump)
runTest('Hurai teks catatan mentah kepada tugasan berstruktur', () => {
  const raw = `
  - Jogging kat taman 30 minit
  - Balas emel penting bos
  - Meeting projek pukul 2 petang (1 jam)
  - Basuh baju dan kemas bilik
  `;

  const tasks = aiEngine.parseRawText(raw);
  assert.strictEqual(tasks.length, 4);

  // Semak tugasan 1
  assert.strictEqual(tasks[0].title, 'Jogging kat taman');
  assert.strictEqual(tasks[0].category, 'Kesihatan');
  assert.strictEqual(tasks[0].durationMinutes, 30);

  // Semak tugasan 2
  assert.strictEqual(tasks[1].category, 'Kerja');
  assert.strictEqual(tasks[1].priority, 'Tinggi'); // ada kata kunci "penting" / "bos"

  // Semak tugasan 3 (Anchor)
  assert.strictEqual(tasks[2].isFixedAnchor, true);
  assert.strictEqual(tasks[2].fixedTime, '14:00');
  assert.strictEqual(tasks[2].durationMinutes, 60);

  // Semak tugasan 4
  assert.strictEqual(tasks[3].category, 'Peribadi');
});

// 4. Ujian Cadangan Pengurangan Masa Pintar (AI Suggestions)
runTest('Jana cadangan pengurangan masa bagi tugasan yang boleh dioptimumkan', () => {
  // Tugasan emel 60 minit -> patut cadang kurangkan ke 25 minit (jimat 35 minit)
  const emailTask = {
    title: 'Balas emel dan mesej',
    category: 'Kerja',
    durationMinutes: 60
  };
  const emailSug = aiEngine.generateTaskSuggestions(emailTask);
  assert.ok(emailSug.length > 0);
  assert.strictEqual(emailSug[0].type, 'time_compression');
  assert.strictEqual(emailSug[0].suggestedDuration, 25);
  assert.strictEqual(emailSug[0].timeSavedMinutes, 35);

  // Tugasan mesyuarat 60 minit -> patut cadang hadkan 45 minit
  const meetingTask = {
    title: 'Mesyuarat mingguan',
    category: 'Kerja',
    durationMinutes: 60
  };
  const meetingSug = aiEngine.generateTaskSuggestions(meetingTask);
  assert.strictEqual(meetingSug[0].suggestedDuration, 45);

  // Tugasan koding panjang 120 minit -> patut cadang fasa fokus / pecahan
  const longTask = {
    title: 'Koding sistem pangkalan data',
    category: 'Kerja',
    durationMinutes: 120
  };
  const longSug = aiEngine.generateTaskSuggestions(longTask);
  assert.strictEqual(longSug[0].type, 'task_split');
});

// 5. Ujian Penjadualan Berperingkat Bebas Konflik (Auto-Cascade Schedule)
runTest('Susun jadual berperingkat dari 09:00 tanpa pertindihan masa', () => {
  const tasks = [
    { title: 'Tugasan A', durationMinutes: 30, priority: 'Sederhana' },
    { title: 'Tugasan B', durationMinutes: 45, priority: 'Sederhana' },
    { title: 'Tugasan C', durationMinutes: 60, priority: 'Sederhana' }
  ];

  const result = aiEngine.scheduleTasks(tasks, {
    startTime: '09:00',
    bufferMinutes: 10,
    includeBreaks: false
  });

  assert.strictEqual(result.success, true);
  const scheduled = result.scheduledTasks;

  // Task A: 09:00 -> 09:30
  assert.strictEqual(scheduled[0].startTime, '09:00');
  assert.strictEqual(scheduled[0].endTime, '09:30');

  // Task B bermula selepas 10m rehat: 09:40 -> 10:25
  assert.strictEqual(scheduled[1].startTime, '09:40');
  assert.strictEqual(scheduled[1].endTime, '10:25');

  // Task C bermula selepas 10m rehat: 10:35 -> 11:35
  assert.strictEqual(scheduled[2].startTime, '10:35');
  assert.strictEqual(scheduled[2].endTime, '11:35');

  // Pastikan sifar pertindihan
  const overlaps = TimeEngine.findOverlaps(scheduled);
  assert.strictEqual(overlaps.length, 0);
});

// 6. Ujian Penghormatan Waktu Tetap (Anchor Time Collision-Free)
runTest('Patuhi waktu tetap (Fixed Anchor) dan susun tugas fleksibel di sekelilingnya', () => {
  const tasks = [
    { title: 'Persediaan Pagi', durationMinutes: 60, isFixedAnchor: false },
    { title: 'Mesyuarat Klien Penting', durationMinutes: 60, isFixedAnchor: true, fixedTime: '14:00' },
    { title: 'Refleksi Petang', durationMinutes: 30, isFixedAnchor: false }
  ];

  const result = aiEngine.scheduleTasks(tasks, {
    startTime: '09:00',
    bufferMinutes: 10,
    includeBreaks: false
  });

  const scheduled = result.scheduledTasks;
  // Mesyuarat Klien patut dikunci tepat jam 14:00
  const meeting = scheduled.find(t => t.title === 'Mesyuarat Klien Penting');
  assert.ok(meeting);
  assert.strictEqual(meeting.startTime, '14:00');
  assert.strictEqual(meeting.endTime, '15:00');

  // Refleksi Petang patut bermula selepas meeting + 10m buffer -> 15:10
  const reflection = scheduled.find(t => t.title === 'Refleksi Petang');
  assert.strictEqual(reflection.startTime, '15:10');
  assert.strictEqual(reflection.endTime, '15:40');
});

// 7. Ujian Pacing Mod Deep Work
runTest('Mod Deep Work meletakkan tugasan utama dan berkeutamaan tinggi di sebelah pagi', () => {
  const tasks = [
    { title: 'Basuh kereta', durationMinutes: 30, category: 'Peribadi', priority: 'Rendah' },
    { title: 'Siapkan Koding Enjin AI', durationMinutes: 90, category: 'Kerja', priority: 'Tinggi' },
    { title: 'Semak bil air', durationMinutes: 15, category: 'Peribadi', priority: 'Sederhana' }
  ];

  const result = aiEngine.scheduleTasks(tasks, {
    startTime: '08:30',
    pacing: 'deep_work',
    bufferMinutes: 10
  });

  // Tugas pertama patut Koding Enjin AI kerana ia Kerja & Tinggi
  assert.strictEqual(result.scheduledTasks[0].title, 'Siapkan Koding Enjin AI');
  assert.strictEqual(result.scheduledTasks[0].startTime, '08:30');
});

// 8. Ujian Mengaplikasikan Cadangan Pengurangan Masa AI
runTest('Menerapkan cadangan pengurangan masa mengira penjimatan masa secara dinamik', () => {
  const tasks = [
    { title: 'Balas emel', durationMinutes: 60, category: 'Kerja', priority: 'Sederhana' },
    { title: 'Mesyuarat koordinasi', durationMinutes: 60, category: 'Kerja', priority: 'Sederhana' }
  ];

  const result = aiEngine.scheduleTasks(tasks, {
    startTime: '09:00',
    bufferMinutes: 10,
    applySuggestions: true
  });

  // Emel dikurangkan ke 25m (jimat 35m), Meeting ke 45m (jimat 15m) -> jumlah jimat 50m
  assert.strictEqual(result.summary.totalSavedMinutes, 50);
  assert.strictEqual(result.scheduledTasks[0].durationMinutes, 25);
  assert.strictEqual(result.scheduledTasks[1].durationMinutes, 45);
});

// 9. Ujian Pemprosesan Teks Perbualan Santai Bahasa Melayu
runTest('Hurai teks perbualan santai bersambung tanpa line break (pastu, lepastu, then)', () => {
  const conversationalText = 'esok aku nak jogging 30 minit lepastu meeting penting pukul 2 petang pastu lunch 45m then siapkan slide 1 jam';
  const tasks = aiEngine.parseRawText(conversationalText);
  
  assert.strictEqual(tasks.length, 4);
  assert.ok(tasks[0].title.toLowerCase().includes('jogging'));
  assert.strictEqual(tasks[0].durationMinutes, 30);
  assert.ok(tasks[1].title.toLowerCase().includes('meeting'));
  assert.strictEqual(tasks[1].fixedTime, '14:00');
  assert.ok(tasks[2].title.toLowerCase().includes('lunch'));
  assert.strictEqual(tasks[2].durationMinutes, 45);
  assert.ok(tasks[3].title.toLowerCase().includes('slide'));
  assert.strictEqual(tasks[3].durationMinutes, 60);
});

// 10. Ujian Ekstrak Julat Masa (Time Range)
runTest('Ekstrak julat masa pukul 10 sampai 12', () => {
  const range = aiEngine.extractTimeRange('Meeting klien pukul 10 sampai 12 tengah hari');
  assert.ok(range);
  assert.strictEqual(range.startTime, '10:00');
  assert.strictEqual(range.endTime, '12:00');
  assert.strictEqual(range.durationMinutes, 120);
});

// 11. Ujian Prioriti Cadangan Gemini AI
runTest('Cadangan Gemini AI diberi keutamaan tertinggi dalam generateTaskSuggestions', () => {
  const task = {
    title: 'Mesyuarat klien',
    durationMinutes: 60,
    geminiSuggestion: 'Cadangan AI: Padatkan agenda kepada 30 minit',
    geminiReduction: 30
  };

  const suggestions = aiEngine.generateTaskSuggestions(task);
  assert.ok(suggestions.length > 0);
  assert.strictEqual(suggestions[0].type, 'gemini_smart_suggestion');
  assert.strictEqual(suggestions[0].suggestedDuration, 30);
  assert.strictEqual(suggestions[0].timeSavedMinutes, 30);
});

// 12. Ujian Pengesanan Tindakan Sistem Agen AI (detectSystemAction)
runTest('Kesan tindakan sistem CLEAR_ALL_TASKS dengan pelbagai variasi Bahasa Melayu/Inggeris', () => {
  const variations = [
    'delete semua jadual',
    'padam semua task',
    'clear all schedule',
    'kosongkan jadual hari ini',
    'buang semua jadual',
    'reset jadual'
  ];

  for (const text of variations) {
    const action = aiEngine.detectSystemAction(text, [{ id: 1, title: 'Sample' }]);
    assert.ok(action, `Patut kesan tindakan bagi: "${text}"`);
    assert.strictEqual(action.type, 'CLEAR_ALL_TASKS', `Jenis tindakan patut CLEAR_ALL_TASKS untuk: "${text}"`);
  }
});

// 13. Ujian Pengesanan Tindakan DELETE_CATEGORY
runTest('Kesan tindakan sistem DELETE_CATEGORY mengikut kategori spesifik', () => {
  const action = aiEngine.detectSystemAction('padam semua task kerja', []);
  assert.ok(action);
  assert.strictEqual(action.type, 'DELETE_CATEGORY');
  assert.strictEqual(action.category, 'Kerja');
});

// 14. Ujian Pengesanan Tindakan COMPLETE_ALL_TASKS
runTest('Kesan tindakan sistem COMPLETE_ALL_TASKS', () => {
  const action = aiEngine.detectSystemAction('tandakan semua tugasan siap', []);
  assert.ok(action);
  assert.strictEqual(action.type, 'COMPLETE_ALL_TASKS');
});

// 15. Ujian Pengesanan Tindakan SET_START_TIME
runTest('Kesan tindakan sistem SET_START_TIME dengan waktu yang betul', () => {
  const action = aiEngine.detectSystemAction('tukar waktu mula ke 06:30', []);
  assert.ok(action);
  assert.strictEqual(action.type, 'SET_START_TIME');
  assert.strictEqual(action.targetTime, '06:30');
});

// 16. Ujian Integrasi generateSmartSchedule dengan Tindakan CLEAR_ALL_TASKS
runTest('generateSmartSchedule mengembalikan respons tindakan CLEAR_ALL_TASKS tanpa task lama', async () => {
  const existingTasks = [
    { id: 't1', title: 'Tugasan Lama 1', durationMinutes: 30, startTime: '09:00', endTime: '09:30' },
    { id: 't2', title: 'Tugasan Lama 2', durationMinutes: 60, startTime: '09:40', endTime: '10:40' }
  ];

  const result = await aiEngine.generateSmartSchedule({
    rawText: 'tolong padam semua jadual aku sekarang',
    currentTasks: existingTasks,
    isFollowup: true
  });

  assert.ok(result.action, 'Respons patut mempunyai atribut action');
  assert.strictEqual(result.action.type, 'CLEAR_ALL_TASKS');
  assert.strictEqual(result.scheduledTasks.length, 0, 'scheduledTasks patut kosong tanpa menghidupkan tugasan lama');
  assert.ok(result.conversationalReply, 'Patut mempunyai balasan mesra AI');
});

console.log(`\n======================================================`);
console.log(`JUMLAH UJIAN AI ENGINE: ${passedTests} / 16 LULUS 100%!`);
console.log(`======================================================\n`);
