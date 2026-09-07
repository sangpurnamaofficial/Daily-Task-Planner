# ⚡ DailyPulse - Smart Daily Tasks & Goals Time Planner

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-20+-green.svg)](https://nodejs.org)
[![Bilingual](https://img.shields.io/badge/Languages-Malay%20%7C%20English-purple.svg)](#bilingual-support)
[![Platform](https://img.shields.io/badge/Platform-Mobile%20%26%20Web-orange.svg)](#features)

> **Sistem Pengurusan Tugasan & Matlamat Harian Pintar dengan Pengiraan Masa Automatik, Pangkalan Data Kekal, dan Reka Bentuk Mesra Telefon (Mobile-First).**

---

## 🌟 Ciri-Ciri Utama (Key Features)

- ⏱️ **Kalkulator Masa Pintar**: Masukkan waktu mula dan waktu tamat, sistem secara automatik mengira durasi masa yang tepat (*hours & minutes*).
- 🎯 **Kalkulator Matlamat Harian**: Masukkan sasaran jam mingguan dan bilangan hari aktif, sistem mengira kuota masa yang perlu diluangkan setiap hari.
- 📊 **Kapasiti Harian (Daily Budget Gauge)**: Pantau jumlah masa yang dirancang berbanding waktu berjaga untuk mengelakkan keletihan (*overbooking*).
- ⚡ **Auto-Susun Jadual (Cascade Scheduler)**: Susun semula semua blok tugasan secara berturutan tanpa sebarang pertindihan waktu (*no overlaps*).
- ⏲️ **Live Focus Timer**: Pemasa fokus countdown/stopwatch dengan deringan melodi (*Web Audio chime*) tanpa dependensi luar.
- 🌐 **Sokongan Dwi-Bahasa (Bilingual)**: Tukar antara **Bahasa Melayu** dan **English** bila-bila masa dengan 1 klik.
- 🗄️ **Pangkalan Data Kekal (Persistent Database)**: REST API lengkap (`/api/tasks`, `/api/goals`, `/api/settings`) dengan sandaran data JSON atomik.
- 📱 **Mobile-First & PWA Ready**: Navigasi bawah mesra sentuhan (*Thumb-Friendly Bottom Navigation*), tema gelap moden (*Dark Glassmorphism*).

---

## 🚀 Pemasangan & Menjalankan Sistem (Local Run)

1. **Jalankan Pelayan**:
   ```bash
   npm start
   ```
2. **Buka di Pelayar**:
   - Komputer: [http://localhost:3000](http://localhost:3000)
   - Telefon (Wi-Fi tempatan): `http://<IP-Komputer>:3000`

---

## ☁️ Deploy ke Internet Secara Percuma (Online Hosting)

### Pilihan 1: Render.com (100% Percuma)
1. Sambungkan repositori GitHub ini ke akaun percuma anda di [Render.com](https://render.com).
2. Pilih **New + > Web Service**.
3. Tetapkan:
   - **Environment**: `Node`
   - **Start Command**: `node server.js`
   - **Plan**: `Free`
4. Klik **Deploy** dan anda akan menerima pautan HTTPS rasmi anda sendiri!

### Pilihan 2: Docker / Railway / Fly.io / Koyeb
Fail `Dockerfile` dan `render.yaml` telah disediakan sedia ada di dalam repositori ini.

---

## 📁 Struktur Fail

```
├── index.html              # Antara muka web utama
├── server.js               # Pelayan REST API & pangkalan data
├── db.js                   # Enjin pangkalan data kekal (CRUD)
├── Dockerfile              # Konfigurasi kontena awan
├── render.yaml             # Konfigurasi 1-klik deploy Render.com
├── HOSTING_GUIDE.md        # Panduan terperinci hosting online
├── css/
│   ├── main.css            # Tema gelap moden, layout & penukar bahasa
│   └── components.css      # Kad tugasan, pemasa, gauge, timeline
└── js/
    ├── i18n.js             # Enjin dwibahasa (BM & EN)
    ├── timeEngine.js       # Pengiraan masa pintar & auto-schedule
    ├── storage.js          # Storan hibrid (Cloud API + Offline-First)
    ├── timer.js            # Pemasa fokus langsung & Web Audio
    ├── analytics.js        # Carta Donut SVG & statistik
    └── app.js              # Logik UI & interaksi pengguna
```

---

## 📄 Lesen (License)
Dilesenkan di bawah [Lesen MIT](LICENSE).
