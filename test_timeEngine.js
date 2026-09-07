/**
 * Automated Unit Test Suite for TimeEngine, Storage, and Bilingual i18n
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

// Muat turun modul i18n dan TimeEngine
const i18nCode = fs.readFileSync(path.join(__dirname, 'js', 'i18n.js'), 'utf8');
const timeEngineCode = fs.readFileSync(path.join(__dirname, 'js', 'timeEngine.js'), 'utf8');

const context = { window: {}, console, Intl };
vm.createContext(context);
vm.runInContext(i18nCode, context);
vm.runInContext(timeEngineCode, context);

const I18N = context.window.I18N;
const TimeEngine = context.window.TimeEngine;

console.log('--- MEMULAKAN UJIAN AUTOMATIK TIME ENGINE & I18N (BILINGUAL) ---');

let passed = 0;
let total = 0;

function assert(condition, message) {
  total++;
  if (condition) {
    console.log(`✅ [LULUS] ${message}`);
    passed++;
  } else {
    console.error(`❌ [GAGAL] ${message}`);
  }
}

// Ujian 1: Time to Minutes & Minutes to Time
assert(TimeEngine.timeToMinutes('08:30') === 510, '08:30 bersamaan 510 minit');
assert(TimeEngine.timeToMinutes('14:45') === 885, '14:45 bersamaan 885 minit');
assert(TimeEngine.minutesToTime(510) === '08:30', '510 minit menghasilkan 08:30');

// Ujian 2: Format Durasi BM (Bahasa Melayu)
I18N.setLanguage('ms');
assert(TimeEngine.formatDuration(90) === '1j 30m', 'BM: 90 minit diformat kepada 1j 30m');
assert(TimeEngine.formatDuration(45) === '45 minit', 'BM: 45 minit diformat kepada 45 minit');
assert(TimeEngine.formatDuration(120) === '2 jam', 'BM: 120 minit diformat kepada 2 jam');

// Ujian 3: Format Durasi EN (English)
I18N.setLanguage('en');
assert(TimeEngine.formatDuration(90) === '1h 30m', 'EN: 90 minutes formatted to 1h 30m');
assert(TimeEngine.formatDuration(45) === '45 mins', 'EN: 45 minutes formatted to 45 mins');
assert(TimeEngine.formatDuration(120) === '2 hours', 'EN: 120 minutes formatted to 2 hours');

// Ujian 4: Pengiraan Durasi Waktu Mula & Tamat (BM vs EN)
I18N.setLanguage('ms');
const calc1 = TimeEngine.calculateDuration('09:00', '10:30');
assert(calc1.minutes === 90 && calc1.formatted === '1j 30m', 'BM: Durasi 09:00 hingga 10:30 adalah 90 minit (1j 30m)');

I18N.setLanguage('en');
const calc2 = TimeEngine.calculateDuration('10:00', '11:45');
assert(calc2.minutes === 105 && calc2.formatted === '1h 45m', 'EN: Duration 10:00 to 11:45 is 105 mins (1h 45m)');

// Ujian 5: Terjemahan Kategori & Keutamaan (Category & Priority)
assert(I18N.formatCategory('Kerja') === 'Work', 'EN: Kategori Kerja -> Work');
assert(I18N.formatPriority('Tinggi') === 'High', 'EN: Keutamaan Tinggi -> High');

I18N.setLanguage('ms');
assert(I18N.formatCategory('Work') === 'Kerja', 'BM: Category Work -> Kerja');
assert(I18N.formatPriority('High') === 'Tinggi', 'BM: Priority High -> Tinggi');

// Ujian 6: Goal Breakdown Calculator
const goalCalc = TimeEngine.calculateDailyGoalCommitment(3.5, 5);
assert(goalCalc.dailyMinutes === 42, '3.5 jam seminggu bagi 5 hari adalah 42 minit/hari');

// Ujian 7: Kapasiti Harian (Daily Budget)
const mockTasks = [{ durationMinutes: 60 }, { durationMinutes: 90 }];
const mockGoals = [{ allocatedMinutes: 30 }];
const budget = TimeEngine.calculateDailyBudget('08:00', '22:00', mockTasks, mockGoals);
assert(budget.availableMinutes === 840, 'Kapasiti hari 14 jam (840 minit)');
assert(budget.totalPlannedMinutes === 180, 'Jumlah masa dirancang 180 minit (3 jam)');
assert(!budget.isOverbooked, 'Status tidak terlebih muatan');

// Ujian 8: Pengesanan Pertindihan (Overlap Detection)
const overlapTasks = [
  { id: '1', title: 'Task A', startTime: '09:00', endTime: '10:30' },
  { id: '2', title: 'Task B', startTime: '10:00', endTime: '11:00' }
];
const overlaps = TimeEngine.findOverlaps(overlapTasks);
assert(overlaps.length === 1, 'Mengesan tepat 1 pertindihan antara Task A dan Task B');

// Ujian 9: Auto Cascade Scheduling
const cascaded = TimeEngine.autoCascadeSchedule('08:30', overlapTasks, 10);
assert(cascaded[0].startTime === '08:30' && cascaded[0].endTime === '10:00', 'Task 1 bermula 08:30 dan tamat 10:00');
assert(cascaded[1].startTime === '10:10' && cascaded[1].endTime === '11:10', 'Task 2 bermula 10:10 (selepas rehat 10 minit) dan tamat 11:10');

console.log(`\n======================================================`);
console.log(`JUMLAH KEPUTUSAN UJIAN DWIBAHASA: ${passed} / ${total} LULUS!`);
console.log(`======================================================\n`);
