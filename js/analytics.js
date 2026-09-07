/**
 * Analytics Engine - Daily Task & Goals Smart Time System
 * Mengira statistik penggunaan masa, peratusan kejayaan, dan menjana visual SVG.
 */

const Analytics = {
  CATEGORY_COLORS: {
    'Kerja': '#6366f1',     // Indigo / Violet
    'Belajar': '#06b6d4',   // Cyan
    'Kesihatan': '#10b981', // Emerald green
    'Peribadi': '#f59e0b',  // Amber
    'Lain-lain': '#8b5cf6'  // Purple
  },

  /**
   * Menjana metrik harian lengkap
   */
  getDailyMetrics(tasks = [], goals = []) {
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(t => t.completed).length;
    const taskCompletionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

    const totalGoals = goals.length;
    const completedGoals = goals.filter(g => g.completedToday || (g.actualMinutesSpent >= g.allocatedMinutes)).length;
    const goalCompletionRate = totalGoals > 0 ? Math.round((completedGoals / totalGoals) * 100) : 0;

    const totalPlannedMinutes = tasks.reduce((sum, t) => sum + (t.durationMinutes || 0), 0) +
                               goals.reduce((sum, g) => sum + (g.allocatedMinutes || 0), 0);

    const totalActualMinutes = tasks.reduce((sum, t) => sum + (t.actualMinutesSpent || 0), 0) +
                              goals.reduce((sum, g) => sum + (g.actualMinutesSpent || 0), 0);

    // Kira pecahan mengikut kategori
    const categoryBreakdown = {};
    const allItems = [
      ...tasks.map(t => ({ ...t, planned: t.durationMinutes || 0, actual: t.actualMinutesSpent || 0 })),
      ...goals.map(g => ({ ...g, planned: g.allocatedMinutes || 0, actual: g.actualMinutesSpent || 0 }))
    ];

    allItems.forEach(item => {
      const cat = item.category || 'Lain-lain';
      if (!categoryBreakdown[cat]) {
        categoryBreakdown[cat] = {
          plannedMinutes: 0,
          actualMinutes: 0,
          color: this.CATEGORY_COLORS[cat] || '#a855f7'
        };
      }
      categoryBreakdown[cat].plannedMinutes += item.planned;
      categoryBreakdown[cat].actualMinutes += item.actual;
    });

    // Cari streak tertinggi
    const maxStreak = goals.reduce((max, g) => Math.max(max, g.streakDays || 0), 0);

    return {
      totalTasks,
      completedTasks,
      taskCompletionRate,
      totalGoals,
      completedGoals,
      goalCompletionRate,
      totalPlannedMinutes,
      totalActualMinutes,
      categoryBreakdown,
      maxStreak
    };
  },

  /**
   * Menjana kod SVG untuk Donut Chart pecahan kategori masa
   */
  renderCategoryDonut(categoryBreakdown, size = 180) {
    const categories = Object.keys(categoryBreakdown);
    const totalMinutes = categories.reduce((sum, cat) => sum + categoryBreakdown[cat].plannedMinutes, 0);

    if (totalMinutes === 0) {
      return `
        <svg width="${size}" height="${size}" viewBox="0 0 100 100" class="donut-svg">
          <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="14" />
          <text x="50" y="54" text-anchor="middle" fill="#94a3b8" font-size="9" font-family="Inter, sans-serif">Tiada Data</text>
        </svg>
      `;
    }

    const radius = 38;
    const circumference = 2 * Math.PI * radius;
    let accumulatedAngle = 0;
    let paths = '';

    categories.forEach(cat => {
      const data = categoryBreakdown[cat];
      if (data.plannedMinutes <= 0) return;

      const percentage = data.plannedMinutes / totalMinutes;
      const strokeLength = percentage * circumference;
      const strokeDashoffset = -accumulatedAngle;
      accumulatedAngle += strokeLength;

      paths += `
        <circle 
          cx="50" cy="50" r="${radius}" 
          fill="none" 
          stroke="${data.color}" 
          stroke-width="12" 
          stroke-dasharray="${strokeLength} ${circumference}" 
          stroke-dashoffset="${strokeDashoffset}"
          class="donut-segment"
        />
      `;
    });

    return `
      <svg width="${size}" height="${size}" viewBox="0 0 100 100" class="donut-svg" style="transform: rotate(-90deg);">
        ${paths}
      </svg>
    `;
  }
};

if (typeof window !== 'undefined') {
  window.Analytics = Analytics;
}
