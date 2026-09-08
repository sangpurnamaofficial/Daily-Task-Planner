/**
 * AI Schedule & Optimization Engine - DailyPulse
 * Enjin pemprosesan bahasa pintar, penjadualan berperingkat automatik,
 * dan penasihat penjimatan masa serta pengoptimuman aliran kerja.
 */

const TimeEngine = require('./js/timeEngine');

// Kamus Klasifikasi Semantik Kategori & Durasi
const CATEGORY_RULES = [
  {
    category: 'Kerja',
    keywords: ['kerja', 'work', 'office', 'pejabat', 'meeting', 'mesyuarat', 'klien', 'client', 'projek', 'project', 'laporan', 'report', 'slide', 'presentation', 'pembentangan', 'emel', 'email', 'coding', 'koding', 'bug', 'deploy', 'pr', 'github', 'bos', 'boss', 'dokumen', 'invos', 'invoice', 'proposal'],
    defaultMinutes: 45
  },
  {
    category: 'Belajar',
    keywords: ['belajar', 'study', 'baca', 'buku', 'reading', 'read', 'assignment', 'tugasan sekolah', 'kursus', 'course', 'tutorial', 'kelas', 'class', 'nota', 'notes', 'latihan', 'exam', 'peperiksaan', 'kajian', 'research'],
    defaultMinutes: 50
  },
  {
    category: 'Kesihatan',
    keywords: ['jogging', 'jog', 'lari', 'run', 'gym', 'workout', 'senaman', 'exercise', 'stretching', 'yoga', 'sarapan', 'breakfast', 'lunch', 'makan tengah hari', 'dinner', 'makan malam', 'rehat', 'nap', 'tidur', 'ubat', 'klinik', 'doktor', 'hospital', 'jalan'],
    defaultMinutes: 35
  },
  {
    category: 'Peribadi',
    keywords: ['basuh', 'cuci', 'kereta', 'baju', 'laundry', 'kemas', 'rumah', 'beli', 'pasar raya', 'groceries', 'shopee', 'solat', 'doa', 'keluarga', 'family', 'anak', 'kawan', 'friend', 'wayang', 'movie', 'game', 'santai'],
    defaultMinutes: 30
  }
];

const PRIORITY_KEYWORDS = {
  Tinggi: ['urgent', 'must', 'wajib', 'segera', 'penting', 'kritikal', 'deadline', 'bos', 'priority', 'asap', 'utama', 'must do'],
  Rendah: ['kalau sempat', 'santai', 'rileks', 'bila-bila', 'nanti', 'optional', 'sekadar', 'low']
};

/**
 * Ekstrak durasi eksplisit dari teks (cth: "30 minit", "1 jam", "45m", "1.5h", "1j 30m")
 */
function extractExplicitDuration(text) {
  const lower = text.toLowerCase();

  // Format gabungan jam & minit: "1j 30m", "1 jam 20 minit", "1h 15m"
  const comboMatch = lower.match(/(\d+)\s*(?:j|jam|h|hour|hours)\s*(\d+)\s*(?:m|min|minit|mins|minutes)/);
  if (comboMatch) {
    const hours = parseInt(comboMatch[1], 10) || 0;
    const mins = parseInt(comboMatch[2], 10) || 0;
    return (hours * 60) + mins;
  }

  // Format perpuluhan jam: "1.5 jam", "2.5h", "0.5 jam"
  const decimalHourMatch = lower.match(/(\d+(?:\.\d+)?)\s*(?:jam|j|hour|hours|h)\b/);
  if (decimalHourMatch) {
    const hours = parseFloat(decimalHourMatch[1]);
    if (!isNaN(hours) && hours > 0) {
      return Math.round(hours * 60);
    }
  }

  // Format minit sahaja: "45 minit", "30m", "15 mins"
  const minuteMatch = lower.match(/(\d+)\s*(?:minit|min|mins|minutes|m)\b/);
  if (minuteMatch) {
    const mins = parseInt(minuteMatch[1], 10);
    if (!isNaN(mins) && mins > 0) {
      return mins;
    }
  }

  return null;
}

/**
 * Ekstrak julat masa dari teks (cth: "pukul 9 sampai 11", "9 to 11am", "10:00 - 12:00")
 */
function extractTimeRange(text) {
  const lower = text.toLowerCase();
  const rangeMatch = lower.match(/(?:pukul|jam|dari|from)?\s*(\d{1,2})(?::(\d{2}))?\s*(?:pagi|petang|am|pm)?\s*(?:sampai|hingga|to|-)\s*(\d{1,2})(?::(\d{2}))?\s*(pagi|petang|malam|am|pm)?/);
  if (rangeMatch) {
    let startH = parseInt(rangeMatch[1], 10);
    let startM = rangeMatch[2] ? parseInt(rangeMatch[2], 10) : 0;
    let endH = parseInt(rangeMatch[3], 10);
    let endM = rangeMatch[4] ? parseInt(rangeMatch[4], 10) : 0;
    const period = (rangeMatch[5] || '').toLowerCase();

    if (period === 'petang' || period === 'malam' || period === 'pm') {
      if (endH < 12) endH += 12;
      if (startH < 12 && startH <= 6) startH += 12;
    } else if (endH >= 1 && endH <= 6 && startH >= 1 && startH <= 6) {
      startH += 12;
      endH += 12;
    }

    const startMins = (startH * 60) + startM;
    let endMins = (endH * 60) + endM;
    if (endMins <= startMins) endMins += 720;
    const diff = endMins - startMins;

    if (diff > 0 && diff <= 600) {
      return {
        startTime: `${String(startH).padStart(2, '0')}:${String(startM).padStart(2, '0')}`,
        endTime: `${String(Math.floor(endMins / 60) % 24).padStart(2, '0')}:${String(endMins % 60).padStart(2, '0')}`,
        durationMinutes: diff
      };
    }
  }
  return null;
}

/**
 * Ekstrak waktu tetap / temujanji dari teks (cth: "pukul 2 petang", "pukul 14:00", "2pm", "10:30am")
 */
function extractFixedTime(text) {
  const lower = text.toLowerCase();

  // Format 1: "pukul 2:30 petang", "jam 10:00 pagi", "at 3:00 pm"
  const timeRegex = /(?:pukul|jam|at|pada jam|waktu)?\s*(\d{1,2})(?::(\d{2}))?\s*(pagi|petang|malam|tengah hari|am|pm)?/i;
  
  // Periksa frasa masa khusus
  const match = lower.match(/(?:pukul|jam|at)\s+(\d{1,2})(?::(\d{2}))?\s*(pagi|petang|malam|tengah hari|am|pm)?/) ||
                lower.match(/\b(\d{1,2})(?::(\d{2}))?\s*(am|pm)\b/);

  if (match) {
    let hours = parseInt(match[1], 10);
    let minutes = match[2] ? parseInt(match[2], 10) : 0;
    const period = (match[3] || '').toLowerCase();

    if (hours > 24) return null;

    if (period === 'petang' || period === 'malam' || period === 'pm') {
      if (hours < 12) hours += 12;
    } else if (period === 'tengah hari') {
      if (hours !== 12 && hours < 6) hours += 12;
    } else if (period === 'pagi' || period === 'am') {
      if (hours === 12) hours = 0;
    } else if (hours >= 1 && hours <= 6) {
      // Kebiasaannya jika 1-6 tanpa penanda pagi/petang untuk jadual harian, ia merujuk petang (cth: "meeting pukul 2")
      hours += 12;
    }

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
  }

  return null;
}

/**
 * Menganalisis dan mengekstrak tugasan daripada teks mentah (Brain Dump)
 */
function parseRawText(rawText) {
  if (!rawText || typeof rawText !== 'string') return [];

  // Pisahkan mengikut baris, semikolon, atau frasa penghubung perbualan santai
  const rawLines = rawText
    .split(/\r?\n|;|\band then\b|\blepas\s*tu\b|\blepastu\b|\bpastu\b|\bkemudian\b|\bselepas\s*itu\b|\bthen\b|\bseterusnya\b|\bdan\s+(?:lepas\s*tu|kemudian|pastu)\b/i)
    .map(line => line.trim())
    .filter(line => line.length > 0);

  const tasks = [];

  for (let line of rawLines) {
    // Bersihkan buletin, nombor senarai (cth: "- ", "1. ", "* ")
    let cleanLine = line.replace(/^[\s\-\*\•\d\.\)\:]+/, '').trim();
    if (cleanLine.length < 2) continue;

    // Bersihkan awalan perbualan santai (cth: "esok aku nak", "nak buat", "tolong", "kena")
    cleanLine = cleanLine.replace(/^(?:(?:esok|hari\s+ni)\s+(?:aku\s+|saya\s+)?nak\s+|(?:esok|hari\s+ni)\s+|aku\s+nak\s+|saya\s+nak\s+|nak\s+|kena\s+|tolong\s+|perlu\s+|lepas\s+tu\s+|pastu\s+|kemudian\s+)/i, '').trim();
    if (cleanLine.length < 2) continue;

    // Semak jika ada julat masa (cth: "pukul 10 sampai 12")
    const timeRange = extractTimeRange(cleanLine);
    let fixedTime = timeRange ? timeRange.startTime : extractFixedTime(cleanLine);
    let duration = timeRange ? timeRange.durationMinutes : extractExplicitDuration(cleanLine);

    // Tentukan kategori berasaskan kata kunci
    let detectedCategory = 'Lain-lain';
    let defaultDuration = 35;
    const lowerLine = cleanLine.toLowerCase();

    for (const rule of CATEGORY_RULES) {
      if (rule.keywords.some(kw => lowerLine.includes(kw))) {
        detectedCategory = rule.category;
        defaultDuration = rule.defaultMinutes;
        break;
      }
    }

    if (!duration) {
      duration = defaultDuration;
    }

    // Tentukan keutamaan
    let priority = 'Sederhana';
    for (const kw of PRIORITY_KEYWORDS.Tinggi) {
      if (lowerLine.includes(kw)) {
        priority = 'Tinggi';
        break;
      }
    }
    if (priority === 'Sederhana') {
      for (const kw of PRIORITY_KEYWORDS.Rendah) {
        if (lowerLine.includes(kw)) {
          priority = 'Rendah';
          break;
        }
      }
    }

    // Bersihkan tajuk tugasan daripada frasa masa teknikal untuk paparan kemas
    let displayTitle = cleanLine
      .replace(/\b(?:pukul|jam|dari|from)?\s*\d{1,2}(?::\d{2})?\s*(?:pagi|petang|am|pm)?\s*(?:sampai|hingga|to|-)\s*\d{1,2}(?::\d{2})?\s*(?:pagi|petang|malam|am|pm)?/gi, '')
      .replace(/\b(?:selama|dalam|kira-kira|around|for)?\s*\d+\s*(?:j|jam|h|hour|hours|min|minit|mins|m)\b/gi, '')
      .replace(/(?:pukul|jam|at)\s+\d{1,2}(?::\d{2})?\s*(?:pagi|petang|malam|am|pm)?/gi, '')
      .replace(/\(\s*\)/g, '')
      .replace(/\[\s*\]/g, '')
      .replace(/\s{2,}/g, ' ')
      .trim();

    if (!displayTitle || displayTitle.length < 2) displayTitle = cleanLine;

    // Huruf pertama besar
    displayTitle = displayTitle.charAt(0).toUpperCase() + displayTitle.slice(1);
    displayTitle = displayTitle.charAt(0).toUpperCase() + displayTitle.slice(1);

    tasks.push({
      id: `ai-task-${Date.now()}-${tasks.length + 1}`,
      rawTitle: cleanLine,
      title: displayTitle,
      category: detectedCategory,
      priority: priority,
      durationMinutes: duration,
      originalDurationMinutes: duration,
      fixedTime: fixedTime,
      isFixedAnchor: Boolean(fixedTime)
    });
  }

  return tasks;
}

/**
 * Menjana cadangan pengoptimuman & pengurangan masa pintar bagi setiap tugasan
 * (Memenuhi permintaan pengguna: "ai akan suggestion kan jugak task ni boleh kurangkan masa ke or anything so on")
 */
function generateTaskSuggestions(task) {
  const suggestions = [];
  const dur = task.durationMinutes;
  const lowerTitle = (task.title || '').toLowerCase();

  // 0. Cadangan Tersuai daripada Google Gemini AI
  if (task.geminiSuggestion) {
    const reduction = parseInt(task.geminiReduction, 10) || 0;
    const sugDur = reduction > 0 ? Math.max(10, dur - reduction) : dur;
    suggestions.push({
      type: 'gemini_smart_suggestion',
      icon: '✨',
      title: 'Cadangan Analisis AI Gemini',
      message: task.geminiSuggestion,
      suggestedDuration: sugDur,
      timeSavedMinutes: reduction
    });
  }

  // 1. Cadangan Pengurangan Masa untuk Komunikasi / Emel / Mesej
  if ((lowerTitle.includes('emel') || lowerTitle.includes('email') || lowerTitle.includes('mesej') || lowerTitle.includes('chat') || lowerTitle.includes('whatsapp')) && dur > 30) {
    const saved = dur - 25;
    suggestions.push({
      type: 'time_compression',
      icon: '⚡',
      title: 'Timeboxing Komunikasi',
      message: `Tugasan emel/komunikasi dicadangkan dipendekkan ke 25 minit untuk elak gangguan fokus. Boleh jimat ${saved} minit!`,
      suggestedDuration: 25,
      timeSavedMinutes: saved
    });
  }

  // 2. Cadangan Pengurangan Masa untuk Mesyuarat / Perbincangan
  else if ((lowerTitle.includes('meeting') || lowerTitle.includes('mesyuarat') || lowerTitle.includes('bincang') || lowerTitle.includes('sync')) && dur >= 60) {
    const saved = dur - 45;
    suggestions.push({
      type: 'time_compression',
      icon: '⏱️',
      title: 'Mesyuarat Efisien 45 Minit',
      message: `Pakar produktiviti mencadangkan had mesyuarat 45 minit berbanding 60 minit agar perbincangan padat & ada masa rehat 15 minit.`,
      suggestedDuration: 45,
      timeSavedMinutes: Math.max(15, saved)
    });
  }

  // 3. Cadangan Pemecahan Tugasan Panjang / Berat (> 90 minit)
  else if (dur >= 90) {
    const half = Math.round(dur / 2);
    suggestions.push({
      type: 'task_split',
      icon: '🧩',
      title: 'Pecah Kepada 2 Fasa Fokus',
      message: `Tugasan ${dur} minit agak panjang. Dicadangkan hadkan Fasa 1 kepada ${half} minit dengan rehat minda sebelum sambung fasa akhir.`,
      suggestedDuration: half,
      timeSavedMinutes: 0
    });
  }

  // 4. Cadangan Pengurangan Masa untuk Tugasan Rutin / Pembentangan / Slide
  else if ((lowerTitle.includes('slide') || lowerTitle.includes('proposal') || lowerTitle.includes('laporan') || lowerTitle.includes('draft')) && dur >= 60) {
    suggestions.push({
      type: 'time_compression',
      icon: '🚀',
      title: 'Prinsip Pareto 80/20',
      message: `Gunakan teknik draf pantas (Timeboxing 45 minit) untuk siapkan rangka utama terlebih dahulu.`,
      suggestedDuration: 45,
      timeSavedMinutes: dur - 45
    });
  }

  // 5. Cadangan Pengurangan untuk Senaman / Rutin Panjang
  else if ((task.category === 'Kesihatan' || lowerTitle.includes('workout') || lowerTitle.includes('gym') || lowerTitle.includes('jogging')) && dur > 45) {
    suggestions.push({
      type: 'time_compression',
      icon: '🏃',
      title: 'Sesi Kardio / Senaman Padat',
      message: `Senaman intensif 35-40 minit sudah memadai untuk membakar kalori dan memelihara tenaga tanpa keletihan berlebihan.`,
      suggestedDuration: 35,
      timeSavedMinutes: dur - 35
    });
  }

  // 6. Cadangan Pengelompokan Tugasan Kecil (Batching)
  else if (dur <= 20) {
    suggestions.push({
      type: 'batching',
      icon: '📦',
      title: 'Kelompokkan (Task Batching)',
      message: `Tugasan pantas ini sesuai digabungkan dalam satu sesi 'Power Sprint' bersama tugasan kecil yang lain.`,
      suggestedDuration: dur,
      timeSavedMinutes: 0
    });
  }

  return suggestions;
}

/**
 * Menyusun jadual berperingkat pintar tanpa pertindihan (Smart Collision-Free Cascade)
 */
function scheduleTasks(tasks, options = {}) {
  const {
    startTime = '09:00',
    endTime = '18:00',
    pacing = 'balanced', // 'deep_work', 'balanced', 'pomodoro'
    bufferMinutes = 10,
    includeBreaks = true,
    applySuggestions = false
  } = options;

  let currentMins = TimeEngine.timeToMinutes(startTime);
  const endOfDayMins = TimeEngine.timeToMinutes(endTime);

  // Jika mod 'deep_work', susun tugasan berkeutamaan tinggi dan kategori 'Kerja' di waktu pagi
  let orderedTasks = [...tasks];
  if (pacing === 'deep_work') {
    orderedTasks.sort((a, b) => {
      if (a.isFixedAnchor !== b.isFixedAnchor) return a.isFixedAnchor ? -1 : 1;
      const prioScore = { 'Tinggi': 3, 'Sederhana': 2, 'Rendah': 1 };
      const scoreA = (prioScore[a.priority] || 1) + (a.category === 'Kerja' ? 1 : 0);
      const scoreB = (prioScore[b.priority] || 1) + (b.category === 'Kerja' ? 1 : 0);
      return scoreB - scoreA;
    });
  }

  const scheduledItems = [];
  let totalSavedMinutes = 0;
  let hasInsertedLunch = false;

  for (let i = 0; i < orderedTasks.length; i++) {
    const item = orderedTasks[i];
    const suggestions = generateTaskSuggestions(item);

    let effectiveDuration = item.durationMinutes;
    let appliedSuggestion = null;

    // Guna cadangan pengurangan masa jika diaktifkan atau dipersetujui
    if (applySuggestions && suggestions.length > 0 && suggestions[0].suggestedDuration) {
      appliedSuggestion = suggestions[0];
      if (appliedSuggestion.timeSavedMinutes > 0) {
        totalSavedMinutes += (effectiveDuration - appliedSuggestion.suggestedDuration);
      }
      effectiveDuration = appliedSuggestion.suggestedDuration;
    }

    // Semak jika masa sekarang telah mencecah waktu tengah hari dan belum dimasukkan rehat makan
    if (includeBreaks && !hasInsertedLunch && currentMins >= 750 && currentMins <= 840) { // 12:30 PM - 2:00 PM
      const lunchStart = TimeEngine.minutesToTime(currentMins);
      const lunchEndMins = currentMins + 45;
      const lunchEnd = TimeEngine.minutesToTime(lunchEndMins);

      scheduledItems.push({
        id: `ai-break-lunch-${Date.now()}`,
        title: '🍽️ Makan Tengah Hari & Rehat Solat',
        category: 'Kesihatan',
        priority: 'Tinggi',
        startTime: lunchStart,
        endTime: lunchEnd,
        durationMinutes: 45,
        isBreak: true,
        notes: 'Masa rehat berkhasiat untuk cas semula tenaga minda.'
      });

      currentMins = lunchEndMins;
      hasInsertedLunch = true;
    }

    // Jika item mempunyai waktu tetap (Fixed Anchor), laraskan waktu mula kepadanya
    if (item.isFixedAnchor && item.fixedTime) {
      const anchorMins = TimeEngine.timeToMinutes(item.fixedTime);
      if (anchorMins >= currentMins) {
        currentMins = anchorMins;
      }
    }

    const taskStart = TimeEngine.minutesToTime(currentMins);
    const taskEndMins = currentMins + effectiveDuration;
    const taskEnd = TimeEngine.minutesToTime(taskEndMins);

    scheduledItems.push({
      ...item,
      durationMinutes: effectiveDuration,
      startTime: taskStart,
      endTime: taskEnd,
      suggestions: suggestions,
      appliedSuggestion: appliedSuggestion
    });

    // Tambah masa tamat + selang rehat pintar
    currentMins = taskEndMins;

    // Selang rehat antara tugasan (Buffer & Rehat Pintar)
    if (i < orderedTasks.length - 1) {
      let restTime = bufferMinutes || 0;
      if (includeBreaks) {
        if (pacing === 'pomodoro' && effectiveDuration >= 45) {
          restTime = Math.max(restTime, 10);
        } else if (pacing === 'deep_work' && item.priority === 'Tinggi') {
          restTime = Math.max(restTime, 15);
        }
      }

      if (restTime > 0) {
        currentMins += restTime;
      }
    }
  }

  const projectedEndTime = TimeEngine.minutesToTime(currentMins);
  const totalFocusMinutes = scheduledItems
    .filter(it => !it.isBreak)
    .reduce((sum, it) => sum + it.durationMinutes, 0);
  const totalBreakMinutes = scheduledItems
    .filter(it => it.isBreak)
    .reduce((sum, it) => sum + it.durationMinutes, 0);

  const isOverloaded = currentMins > endOfDayMins;

  // Hasilkan Tip Produktiviti Kontekstual AI
  let productivityTip = 'Jadual anda telah dioptimumkan secara seimbang tanpa pertindihan waktu.';
  if (totalSavedMinutes > 0) {
    productivityTip = `⚡ Hebat! Penjimatan ${totalSavedMinutes} minit dicapai melalui cadangan Timeboxing & saiz tugasan optimum.`;
  } else if (pacing === 'deep_work') {
    productivityTip = `🚀 Mod Deep Work aktif: Tugasan berimpak tinggi disusun pada waktu pagi ketika tumpuan mental anda paling tajam.`;
  } else if (isOverloaded) {
    productivityTip = `⚠️ Perhatian: Keseluruhan jadual melebihi waktu sasaran (${endTime}). Pertimbangkan untuk memendekkan durasi atau mengalihkan tugasan berkeutamaan rendah ke esok.`;
  }

  return {
    success: true,
    scheduledTasks: scheduledItems,
    summary: {
      totalTasks: tasks.length,
      totalFocusMinutes,
      totalFocusFormatted: TimeEngine.formatDuration(totalFocusMinutes),
      totalBreakMinutes,
      totalBreakFormatted: TimeEngine.formatDuration(totalBreakMinutes),
      startTime,
      projectedEndTime,
      totalSavedMinutes,
      isOverloaded,
      pacing,
      productivityTip
    }
  };
}

/**
 * Panggilan Google Gemini API (jika API Key disediakan)
 */
async function callGeminiAI(rawText, options = {}, apiKey) {
  if (!apiKey) return null;

  const models = ['gemini-1.5-flash', 'gemini-2.0-flash', 'gemini-1.5-pro'];
  
  for (const model of models) {
    try {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
      
      const prompt = `Anda adalah Pakar Pengurusan Masa & Jurulatih Produktiviti Pintar DailyPulse.
Tugas anda adalah menganalisis nota, perenggan santai, atau senarai tugasan mentah pengguna dan menukarkannya kepada jadual harian yang realistik, berurutan, dan mencadangkan pengurangan masa sekiranya durasi boleh dioptimumkan:

TEKS MENTAH PENGGUNA:
"""
${rawText}
"""

KONFIGURASI:
- Waktu Mula: ${options.startTime || '09:00'}
- Waktu Tamat Sasaran: ${options.endTime || '18:00'}
- Gaya Kerja (Pacing): ${options.pacing || 'balanced'} (deep_work, balanced, atau pomodoro)
- Masa Rehat Antara Tugasan: ${options.bufferMinutes || 10} minit

ARAHAN PINTAR:
1. Fahami ayat perbualan santai bahasa Melayu atau bahasa pasar (contoh: "esok nak gym lepastu meeting pastu lunch then siapkan slide").
2. Ekstrak setiap tugasan/aktiviti individu mengikut turutan yang logik.
3. Jika ada waktu khusus disebut (cth: "meeting pukul 2 petang", "lunch 12:30", "kul 10 pagi", "10 sampai 12"), set fixedTime (format 24-jam "HH:MM", cth: "14:00"). Jika tiada, set fixedTime: null.
4. Berikan anggaran durasi (durationMinutes) yang realistik dan logik dalam minit.
5. Klasifikasikan kategori: "Kerja", "Belajar", "Kesihatan", "Peribadi", atau "Lain-lain".
6. Tentukan tahap keutamaan: "Tinggi", "Sederhana", atau "Rendah".
7. Berikan cadangan bernas (suggestion) sekiranya tugasan boleh dibuat lebih cepat (Timeboxing / 80-20), dan nyatakan berapa minit boleh dijimatkan (suggestedReductionMinutes). Jika tiada penjimatan, setkan 0.
8. Berikan nasihat produktiviti ringkas, mesra dan menyemangatkan (productivityTip) dalam Bahasa Melayu.

Sila pulangkan HANYA JSON mengikut skema berikut:
{
  "tasks": [
    {
      "title": "Tajuk Tugasan Kemas",
      "category": "Kerja",
      "priority": "Tinggi",
      "durationMinutes": 45,
      "fixedTime": null,
      "suggestion": "Tip pengurangan masa atau pengoptimuman jika ada",
      "suggestedReductionMinutes": 15
    }
  ],
  "productivityTip": "Nasihat produktiviti peribadi ringkas dalam Bahasa Melayu"
}`;

      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            temperature: 0.2,
            maxOutputTokens: 2048,
            responseMimeType: "application/json"
          }
        })
      });

      if (!response.ok) {
        const errText = await response.text();
        console.warn(`Gemini model ${model} ralat status ${response.status}:`, errText);
        continue;
      }

      const data = await response.json();
      let candidateText = data.candidates?.[0]?.content?.parts?.[0]?.text;
      if (!candidateText) continue;

      candidateText = candidateText.trim();
      if (candidateText.startsWith('```')) {
        candidateText = candidateText.replace(/^```(?:json)?\s*/i, '').replace(/```\s*$/i, '').trim();
      }
      const firstBrace = candidateText.indexOf('{');
      const lastBrace = candidateText.lastIndexOf('}');
      if (firstBrace !== -1 && lastBrace > firstBrace) {
        candidateText = candidateText.substring(firstBrace, lastBrace + 1);
      }

      const parsedJson = JSON.parse(candidateText);
      if (Array.isArray(parsedJson.tasks) && parsedJson.tasks.length > 0) {
        return parsedJson;
      }
    } catch (err) {
      console.warn(`Gemini model ${model} ralat proses:`, err.message);
    }
  }

  return null;
}

/**
 * Titik Masuk Utama: Jana Jadual Pintar AI
 */
async function generateSmartSchedule({ rawText, startTime = '09:00', endTime = '18:00', pacing = 'balanced', bufferMinutes = 10, includeBreaks = true, applySuggestions = false, apiKey = null }) {
  // Cuba gunakan Gemini API terlebih dahulu jika API key wujud
  const geminiKey = apiKey || process.env.GEMINI_API_KEY;
  let parsedTasks = [];
  let isGeminiUsed = false;
  let geminiTip = null;

  if (geminiKey) {
    const geminiResult = await callGeminiAI(rawText, { startTime, endTime, pacing, bufferMinutes }, geminiKey);
    if (geminiResult && Array.isArray(geminiResult.tasks) && geminiResult.tasks.length > 0) {
      isGeminiUsed = true;
      geminiTip = geminiResult.productivityTip || null;
      parsedTasks = geminiResult.tasks.map((t, idx) => ({
        id: `ai-task-${Date.now()}-${idx + 1}`,
        rawTitle: t.title,
        title: t.title,
        category: t.category || 'Kerja',
        priority: t.priority || 'Sederhana',
        durationMinutes: parseInt(t.durationMinutes, 10) || 30,
        originalDurationMinutes: parseInt(t.durationMinutes, 10) || 30,
        fixedTime: t.fixedTime || null,
        isFixedAnchor: Boolean(t.fixedTime),
        geminiSuggestion: t.suggestion,
        geminiReduction: t.suggestedReductionMinutes || 0
      }));
    }
  }

  // Jika Gemini tidak digunakan atau tiada hasil, guna Enjin Heuristik Tempatan (100% Pantas & Mandiri)
  if (parsedTasks.length === 0) {
    parsedTasks = parseRawText(rawText);
  }

  // Laksanakan penjadualan masa berperingkat & cadangan pengurangan masa
  const scheduledResult = scheduleTasks(parsedTasks, {
    startTime,
    endTime,
    pacing,
    bufferMinutes,
    includeBreaks,
    applySuggestions
  });

  scheduledResult.summary.aiEngine = isGeminiUsed ? 'Google Gemini AI (Neural Model)' : 'Heuristik Pintar Tempatan (Offline Mode)';
  scheduledResult.summary.isGemini = isGeminiUsed;
  if (isGeminiUsed && geminiTip) {
    scheduledResult.summary.productivityTip = geminiTip;
  }

  return scheduledResult;
}

module.exports = {
  parseRawText,
  extractExplicitDuration,
  extractFixedTime,
  extractTimeRange,
  generateTaskSuggestions,
  scheduleTasks,
  generateSmartSchedule,
  callGeminiAI
};
