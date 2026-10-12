# Batik Selotigo

Website profil dan katalog digital untuk Batik Selotigo, usaha batik lokal dari Salatiga. Website ini dibuat dengan React, Vite, dan Tailwind CSS untuk memperkenalkan cerita usaha, menampilkan kategori dan pilihan produk, serta memudahkan pengunjung menghubungi Batik Selotigo.

## Fitur

- Halaman beranda, cerita Batik Selotigo, pilihan produk, kontak, dan footer.
- Katalog produk dalam kategori Batik, Pakaian, Aksesori, dan Workshop.
- Filter kategori: pilih kartu kategori untuk melihat produk yang terkait.
- Dialog katalog berisi daftar produk dan tautan pertanyaan melalui WhatsApp.
- Bahasa Indonesia dan Inggris.
- Mode terang dan gelap; pilihan bahasa dan tema disimpan di browser.
- Layout responsif untuk ponsel, tablet, dan desktop.

Konten dan produk disimpan secara statis di aplikasi. Website tidak memerlukan backend atau database.

## Teknologi

- React 19
- Vite 7
- Tailwind CSS 4 melalui plugin Vite
- JavaScript (ES modules)

## Persiapan

Pasang [Node.js](https://nodejs.org/) versi yang didukung Vite 7 (Node.js 20.19+ atau 22.12+ disarankan) dan npm. Periksa instalasi:

```bash
node --version
npm --version
```

## Menjalankan secara lokal

1. Clone repositori, lalu masuk ke folder proyek:

   ```bash
   git clone <URL_REPOSITORI>
   cd <FOLDER_PROYEK>
   ```

2. Pasang dependensi:

   ```bash
   npm install
   ```

3. Jalankan server pengembangan:

   ```bash
   npm run dev
   ```

   Vite membuka browser secara otomatis. Alamat lokal yang dikonfigurasi adalah `http://localhost:6969`.

## Perintah yang tersedia

| Perintah | Kegunaan |
| --- | --- |
| `npm run dev` | Menjalankan server pengembangan Vite pada port 6969. |
| `npm run build` | Membuat build produksi ke folder `dist/`. |
| `npm run preview` | Menjalankan preview lokal dari hasil build. Jalankan `npm run build` terlebih dahulu. |
| `npm run lint` | Memeriksa kode dengan ESLint. |

## Struktur proyek

```text
public/
└── images/                   # Foto dan aset gambar yang disajikan langsung
src/
├── App.jsx                   # Komponen root aplikasi
├── main.jsx                  # Entry React dan stylesheet
├── index.css                 # Tailwind, token warna/tema, font, dan global styles
├── pages/
│   └── HomePage.jsx          # Merangkai section dan mengatur dialog katalog
├── sections/
│   ├── HeroSection.jsx
│   ├── IntroStrip.jsx
│   ├── StorySection.jsx
│   ├── CollectionSection.jsx
│   ├── QuoteSection.jsx
│   └── ContactSection.jsx
├── components/
│   ├── catalog/              # Kartu produk dan dialog katalog
│   ├── common/               # Komponen kecil yang digunakan ulang
│   └── layout/               # Navbar dan footer
├── data/
│   └── siteContent.jsx       # Teks bilingual dan data kategori/produk
├── hooks/
│   └── useSitePreferences.js # Preferensi bahasa dan tema
└── utils/
    └── whatsapp.js           # Pembentukan tautan WhatsApp
```

## Mengubah konten

- **Nama produk, deskripsi, kategori, dan teks halaman:** edit `src/data/siteContent.jsx`. Perbarui bagian `id` dan `en` agar kedua bahasa tetap konsisten. Setiap kategori memiliki `title`, `description`, `details`, `products`, `image`, dan `alt`.
- **Foto:** simpan aset di `public/images/`, lalu gunakan path seperti `/images/nama-file.jpg` pada data kategori. Pastikan nama file dan path cocok.
- **Susunan serta interaksi section koleksi:** edit `src/sections/CollectionSection.jsx`.
- **Tampilan kartu produk:** edit `src/components/catalog/ProductCard.jsx`.
- **Isi dialog katalog:** edit `src/components/catalog/ProductCatalogDialog.jsx`.
- **Nomor WhatsApp:** edit `src/utils/whatsapp.js`.
- **Layout halaman:** edit file section di `src/sections/`; `src/pages/HomePage.jsx` mengatur urutannya.

Gaya antarmuka menggunakan utility class Tailwind pada komponen. Variabel warna dan tema global berada di `src/index.css`.
