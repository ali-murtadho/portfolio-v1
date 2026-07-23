# Portfolio Website — Ali Murtadho

Website portfolio pribadi responsif yang dibangun menggunakan **Next.js 13 (Pages Router)** dan **Vanilla CSS**. Proyek ini dirancang agar ringan, mudah disesuaikan, dan mendukung fitur Dark Mode secara bawaan (native dark mode support).

---

## 🚀 Fitur Utama

- **Desain Modern & Responsif**: Beradaptasi dengan sempurna di perangkat mobile, tablet, maupun desktop.
- **Dukungan Dark Mode**: Toggle tema terintegrasi yang menyimpan preferensi pengguna secara lokal (*localStorage*).
- **Halaman Dinamis**:
  - **Beranda (Home)**: Menampilkan ringkasan profil (*Hero*), pengalaman kerja terbaru, keahlian utama, dan proyek pilihan.
  - **Tentang Saya (About)**: Detail pendidikan, sertifikasi, prestasi, dan pengalaman organisasi.
  - **Proyek (Projects)**: Showcase portofolio lengkap dengan filter tag teknologi.
  - **Kontak (Contact)**: Form kontak dan tautan media sosial.
- **Dokumen CV Terintegrasi**: Tempat penyimpanan CV dalam format Markdown, DOCX, dan PDF di folder `/cv`.

---

## 📂 Struktur Proyek

```text
site/
├── components/          # Komponen UI reusable (Header, Hero, Experience, dll)
├── cv/                  # File resume/CV (PDF, DOCX, Markdown)
├── pages/               # Halaman Next.js (index, about, projects, contact, _app)
├── public/              # Aset statis (gambar, ikon, pdf)
│   └── assets/          # Tempat menyimpan foto profil, ikon proyek, dll.
├── styles/              # File CSS (styling global dan tema)
├── next.config.js       # Konfigurasi Next.js (menggunakan output: 'export')
├── package.json         # Dependensi dan script npm
└── README.md            # Dokumentasi proyek (file ini)
```

---

## 💻 Panduan Pengembangan Lokal

Ikuti langkah-langkah di bawah ini untuk menjalankan proyek di komputer lokal Anda:

### 1. Prasyarat
Pastikan Anda sudah menginstal:
- [Node.js](https://nodejs.org/) (Versi LTS direkomendasikan, minimal v16+)
- npm (Bawaan dari instalasi Node.js)

### 2. Instalasi Dependensi
Jalankan perintah berikut di dalam direktori `site/` untuk menginstal semua pustaka (library) yang dibutuhkan:
```bash
npm install
```

### 3. Menjalankan Server Pengembangan (Local Dev Server)
Jalankan server lokal untuk melihat hasil perubahan secara langsung (hot-reloading):
```bash
npm run dev
```
Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

### 4. Build dan Export Statis
Proyek ini dikonfigurasi untuk mengekspor halaman ke bentuk HTML statis melalui pengaturan `output: 'export'` di `next.config.js`.

Untuk membangun aplikasi:
```bash
npm run build
```
Hasil ekspor statis akan otomatis dibuat di dalam folder `out/`. Anda dapat menguji hasil produksi secara lokal menggunakan server statis:
```bash
npx serve out
```

---

## ☁️ Panduan Deploy menggunakan Vercel CLI

Vercel adalah platform hosting utama untuk Next.js. Selain integrasi Git lewat web dashboard, Anda dapat mendeploy proyek langsung dari terminal menggunakan **Vercel CLI**.

Ikuti langkah-langkah di bawah ini untuk melakukan deployment menggunakan Vercel CLI.

### Langkah 1: Instalasi Vercel CLI
Instal Vercel CLI secara global di sistem Anda menggunakan npm:
```bash
npm install -g vercel
```
*Catatan untuk Windows: Jalankan PowerShell atau Command Prompt sebagai Administrator jika mengalami masalah izin instalasi (permission error).*

### Langkah 2: Login ke Akun Vercel
Hubungkan terminal/CLI dengan akun Vercel Anda:
```bash
vercel login
```
Pilih metode login yang Anda inginkan (GitHub, GitLab, Email, dll). Silakan ikuti instruksi otentikasi di browser hingga selesai.

### Langkah 3: Inisialisasi & Deploy ke Preview (Development)
Pastikan Anda berada di dalam folder `site/` (tempat file `package.json` berada), lalu jalankan perintah:
```bash
vercel
```
CLI akan menanyakan beberapa hal untuk konfigurasi awal:
1. **Set up and deploy “E:\Project\portfolio-static\site”?** [Y/n] `y` (Tekan Enter/Y)
2. **Which scope do you want to deploy to?** (Pilih akun/tim Vercel Anda)
3. **Link to existing project?** [y/N] `n` (Pilih `n` karena ini adalah proyek baru)
4. **What’s your project’s name?** `portfolio-site` (Tekan Enter untuk menggunakan nama default atau ketik nama baru)
5. **In which directory is your code located?** `./` (Tekan Enter karena Anda sudah berada di direktori proyek)
6. **Want to modify these settings?** [y/N] `n` (Pilih `n`. Vercel CLI akan secara otomatis mendeteksi Next.js dan mengatur perintah build serta folder output yang sesuai).

Setelah proses build selesai, Vercel akan menghasilkan **Preview URL** yang dapat Anda buka untuk meninjau hasil deployment.

### Langkah 4: Deploy ke Produksi (Production Build)
Setelah preview dirasa aman dan siap dipublikasikan ke publik, jalankan perintah berikut untuk melakukan deploy ke server produksi utama:
```bash
vercel --prod
```
Perintah ini akan membangun ulang aplikasi Anda dan memetakannya ke URL produksi utama Anda (contoh: `portfolio-site.vercel.app`).

---

## 🛠️ Pemecahan Masalah (Troubleshooting)

- **Masalah Resolusi Host (`Could not resolve host: github.com`)**:
  Jika Anda menemui error koneksi di terminal saat melakukan `git pull` atau deployment, periksa koneksi internet Anda. Anda dapat mengetes resolusi DNS di PowerShell dengan perintah:
  ```powershell
  Resolve-DnsName github.com
  ```
- **Custom Domain**:
  Setelah deploy berhasil, Anda dapat mengaitkan domain kustom pribadi Anda (seperti `alimurtadho.com`) melalui tab **Settings > Domains** di dashboard Vercel Anda.
- **Memperbarui Deployment**:
  Setiap kali Anda membuat perubahan kode di komputer lokal dan ingin memperbarui website produksi, Anda cukup menjalankan kembali perintah:
  ```bash
  vercel --prod
  ```
