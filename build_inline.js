const fs = require('fs');
const path = require('path');

const baseDir = __dirname;
let html = fs.readFileSync(path.join(baseDir, 'index.html'), 'utf8');
let css = fs.readFileSync(path.join(baseDir, 'css', 'style.css'), 'utf8');

// Clean up CSS for inlining
css = css.replace('@charset "UTF-8";', '');
css = css.replace(/@import\s+url\([^)]+\);\s*/g, '');

// Ensure Apple native font fallback is first for instant mobile rendering
css = css.replace(
  /--font-family:\s*'Plus Jakarta Sans',\s*-apple-system/g,
  "--font-family: -apple-system, BlinkMacSystemFont, 'Plus Jakarta Sans'"
);

// Prepare Google Fonts links in HTML head
const fontPreconnect = `  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/css/style.css?v=3.0">
  <style id="app-inline-styles">
${css}
  </style>`;

const styleTagRegex = /<style id="app-inline-styles">[\s\S]*?<\/style>/;
if (styleTagRegex.test(html)) {
  html = html.replace(styleTagRegex, `<style id="app-inline-styles">\n${css}\n  </style>`);
  console.log('Successfully updated app-inline-styles in index.html');
} else {
  const headRegex = /<link rel="stylesheet" href="css\/style\.css">[\s\S]*?<\/style>/;
  if (headRegex.test(html)) {
    html = html.replace(headRegex, fontPreconnect);
    console.log('Successfully replaced head styles with inline styles + preconnect + style.css fallback');
  } else {
    console.log('Head regex did not match, please inspect');
  }
}

// Replace scripts at the bottom with bundle.js and fallbacks
const scriptSection = `  <!-- Skrip Enjin Sistem Disatukan (Single High-Performance Production Bundle) -->
  <script src="/js/bundle.js?v=3.0"></script>
  <script>
    // Fallback sekiranya bundle.js lambat / terganggu
    if (!window.DailyPulseLoaded && !window.Storage) {
      console.warn('Memuatkan skrip modular sebagai sandaran...');
      ['js/i18n.js', 'js/timeEngine.js', 'js/storage.js', 'js/timer.js', 'js/analytics.js', 'js/app.js'].forEach(function(src) {
        var s = document.createElement('script');
        s.src = '/' + src + '?v=3.0';
        s.defer = true;
        document.body.appendChild(s);
      });
    }
  </script>`;

const scriptRegex = /<!-- Skrip Enjin Sistem -->[\s\S]*?<script src="js\/app\.js"><\/script>/;
if (scriptRegex.test(html)) {
  html = html.replace(scriptRegex, scriptSection);
  console.log('Successfully replaced individual scripts with high-performance bundle.js');
} else {
  console.log('Script regex did not match, please inspect');
}

// Bump version query params in index.html to bust aggressive browser caches
html = html.replace(/style\.css\?v=[^"]+/g, 'style.css?v=7.0');
html = html.replace(/bundle\.js\?v=[^"]+/g, 'bundle.js?v=7.0');

fs.writeFileSync(path.join(baseDir, 'index.html'), html, 'utf8');
console.log('index.html updated successfully! File size:', html.length, 'bytes');

// ================= BUNDLE JS COMPILATION =================
const jsFiles = ['i18n.js', 'timeEngine.js', 'storage.js', 'timer.js', 'analytics.js', 'app.js'];
let bundleContent = '/* DailyPulse Consolidated Production Bundle */\n\n';

for (const file of jsFiles) {
  const filePath = path.join(baseDir, 'js', file);
  if (fs.existsSync(filePath)) {
    bundleContent += `/* --- js/${file} --- */\n`;
    bundleContent += fs.readFileSync(filePath, 'utf8') + '\n\n';
  }
}

bundleContent += 'window.DailyPulseLoaded = true;\n';

fs.writeFileSync(path.join(baseDir, 'js', 'bundle.js'), bundleContent, 'utf8');
console.log('js/bundle.js generated successfully! Size:', bundleContent.length, 'bytes');
