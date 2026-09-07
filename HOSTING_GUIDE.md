# Panduan Lengkap: Cara Host DailyPulse Online & Simpan Database Secara Percuma (100% Free)

Dokumen ini menyediakan panduan langkah demi langkah untuk menghoskan sistem **DailyPulse** ke internet secara percuma supaya anda dan sesiapa sahaja boleh membukanya dari telefon pintar atau komputer di mana-mana sahaja dengan pangkalan data kekal.

---

## 🚀 Kaedah 1: Render.com (Disyorkan - Paling Mudah & 100% Percuma)

Render.com menyediakan pelayan awan percuma dengan sokongan Node.js, HTTPS automatik, dan domain awam percuma (contoh: `https://dailypulse-planner.onrender.com`).

### Langkah-langkah:
1. **Muat naik kod ke GitHub**:
   - Buka [GitHub.com](https://github.com) dan cipta repositori baru (contoh: `daily-task-planner`).
   - Muat naik semua fail dari folder `daily-task-planner` ini ke repositori tersebut.
2. **Daftar Akaun di Render**:
   - Layari [Render.com](https://render.com) dan daftar akaun percuma (gunakan butang *Sign in with GitHub*).
3. **Cipta Web Service Baru**:
   - Di papan pemuka Render, klik butang **"New +"** dan pilih **"Web Service"**.
   - Pilih repositori GitHub `daily-task-planner` yang anda baru cipta.
4. **Konfigurasi Tetapan**:
   - **Name**: `dailypulse-planner` (atau apa-apa nama yang anda suka)
   - **Environment**: `Node`
   - **Build Command**: *(biarkan kosong atau `npm install`)*
   - **Start Command**: `node server.js`
   - **Instance Type**: Pilih **Free** ($0/month)
5. **Klik "Deploy Web Service"**:
   - Dalam masa 1–2 minit, aplikasi anda akan siap dideploy!
   - Render akan memberikan pautan HTTPS rasmi (contoh: `https://dailypulse-planner.onrender.com`).
   - Semua data tugasan, matlamat, dan sejarah masa akan disimpan secara kekal dalam pangkalan data `data/planner_db.json`.

---

## ⚡ Kaedah 2: Pautan Online Serta-Merta (Instant Live URL via Cloudflare / Localtunnel)

Jika anda ingin membuka aplikasi ini di telefon pintar anda dari luar rumah **sekarang juga** tanpa perlu mendaftar akaun GitHub atau hos awan terlebih dahulu:

### Menggunakan Localtunnel:
Buka terminal / PowerShell dan jalankan arahan berikut:
```bash
npx localtunnel --port 3000
```
Sistem akan serta-merta menjana pautan awam selamat seperti:
👉 `https://neat-apple-42.loca.lt`

Buka pautan tersebut pada pelayar telefon pintar anda dari mana-mana rangkaian (4G/5G/Wi-Fi luar) untuk mengakses DailyPulse anda secara langsung!

---

## 🚂 Kaedah 3: Railway.app / Koyeb / Fly.io

Fail `Dockerfile` standard telah pun disediakan di dalam projek ini:
- Di **Railway.app** atau **Koyeb.com**, anda hanya perlu pilih *Deploy from GitHub repo* atau *Deploy Dockerfile*.
- Platform tersebut akan membina kontena secara automatik dan menetapkan pemboleh ubah `PORT` secara dinamik.

---

## 🗄️ Struktur & Keselamatan Pangkalan Data (Database)

- **Lokasi Fail**: `data/planner_db.json`
- **Ciri-ciri Utama**:
  1. **Operasi Atomik (Atomic Write)**: Mengelakkan kerosakan fail sekiranya pelayan dimatikan secara tiba-tiba.
  2. **REST API Penuh**:
     - `GET /api/tasks` — Senarai semua tugasan
     - `POST /api/tasks` — Tambah tugasan baru
     - `PUT /api/tasks/:id` — Kemas kini tugasan
     - `DELETE /api/tasks/:id` — Padam tugasan
     - `GET /api/goals` — Senarai semua matlamat
     - `POST /api/goals` — Tambah matlamat baru
     - `PUT /api/goals/:id` — Kemas kini matlamat
     - `DELETE /api/goals/:id` — Padam matlamat
     - `GET /api/settings` — Tetapan sistem
     - `POST /api/history` — Rekod masa fokus langsung
  3. **Sandaran Data Mudah (1-Click Backup)**:
     - Anda boleh memuat turun sandaran penuh JSON pada bila-bila masa melalui menu **Analisis > Eksport Sandaran**.
