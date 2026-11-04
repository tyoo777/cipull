# Portofolio Rangga Prasetio

Website portofolio programmer (multi-halaman, tema gelap/terang, animasi 3D).

## Struktur folder
```
portofolio-rangga/
├── index.html            ← struktur halaman (semua halaman ada di sini)
├── css/style.css         ← seluruh gaya dan animasi
├── js/main.js            ← routing halaman, animasi, loading, pencarian Ctrl+K, latar 3D
└── assets/images/        ← logo, foto, dan screenshot proyek
```

## Cara membuka di VS Code
1. Buka VS Code, pilih **File → Open Folder**, lalu pilih folder `portofolio-rangga`.
2. Pasang ekstensi **Live Server** (Ritwick Dey).
3. Klik kanan `index.html` → **Open with Live Server**.

Web memerlukan internet karena memuat font Google Fonts dan Three.js dari CDN.

## Yang sering diubah
- **Nomor WhatsApp:** cari `85196` dengan Ctrl+Shift+F di `js/main.js`. Nomor sengaja ditulis terpecah agar tidak terlihat di halaman, tetapi tombolnya tetap membuka WhatsApp.
- **Email:** cari `ciomr3772@gmail.com` di `index.html` dan `js/main.js`.
- **Foto dan screenshot proyek:** ganti file di `assets/images/` dengan nama yang sama.
- **Teks dan proyek:** edit di `index.html`.
- **Warna tema:** ubah variabel `--ac`, `--ac2`, `--bg` di bagian atas `css/style.css`.
