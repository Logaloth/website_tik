# 🎸 Rebellion Rose Concert 2025 - Landing Page

Website Landing Page Konser Rock modern dan responsif untuk event Rebellion Rose di Polinema Kediri. Dibangun dengan HTML, CSS, dan JavaScript murni tanpa framework atau backend.

---

## 📁 Struktur Folder

```
project-folder/
│
├── index.html              # File HTML utama
├── README.md               # Dokumentasi project
│
├── css/
│   └── style.css           # Semua styling dan animasi
│
├── js/
│   └── script.js           # Semua JavaScript dan interaktivitas
│
└── assets/
    └── images/             # Folder untuk gambar (logo, speakers, dll)
        ├── logo.png
        ├── speaker1.jpg
        ├── speaker2.jpg
        └── ...
```

---

## 🎯 Fitur Utama

### ✨ UI/UX Features
- **Hero Section** dengan gradient rock theme dan animated grid background
- **Dark Rock Theme** - Tema gelap dengan aksen merah dan kuning untuk nuansa rock
- **Responsive Design** - Otomatis menyesuaikan untuk mobile & desktop
- **Smooth Scrolling** - Navigasi antar section yang halus
- **Hover Effects** - Animasi interaktif pada cards dan buttons dengan glow effect
- **Animate on Scroll** - Element muncul dengan animasi saat di-scroll

### 🔐 Form Features
- **Modal Login/Ticket Purchase** - Pop-up form yang elegant untuk pembelian tiket
- **Ticket Type Selection** - Pilihan tiket Regular, VIP, dan VVIP
- **Form Validation** - Validasi email format dan panjang password
- **Real-time Password Strength** - Indikator kekuatan password
- **Notification System** - Notifikasi sukses/error yang slide dari samping
- **Switch Between Forms** - Toggle mudah antara login dan pembelian tiket

### 📱 Sections
1. **Navbar** - Fixed navigation dengan blur effect dan logo Rebellion Rose
2. **Hero** - Judul konser dan CTA buttons untuk beli tiket
3. **Info Konser** - 4 feature cards (Tanggal, Lokasi, Kapasitas, Genre)
4. **Rundown Konser** - Timeline jadwal konser dari gates open hingga meet & greet
5. **Band Members** - Grid anggota band Rebellion Rose
6. **Contact** - Informasi kontak lengkap untuk pertanyaan

---

## 🚀 Cara Menggunakan

### 1. Download/Clone Project
```bash
git clone [repository-url]
cd project-folder
```

### 2. Struktur File
Pastikan struktur folder sesuai:
```
project-folder/
├── index.html
├── css/style.css
├── js/script.js
└── assets/images/
```

### 3. Buka di Browser
- Double-click `index.html`, atau
- Gunakan Live Server (VS Code extension)
- Atau jalankan local server:
  ```bash
  # Python 3
  python -m http.server 8000
  
  # Python 2
  python -m SimpleHTTPServer 8000
  
  # Node.js (http-server)
  npx http-server
  ```

### 4. Akses di Browser
```
http://localhost:8000
```

---

## 🎨 Kustomisasi

### Mengubah Warna Tema

Edit di **css/style.css**:
```css
:root {
    --primary: #dc2626;      /* Merah rock */
    --secondary: #f59e0b;    /* Orange */
    --dark: #0a0a0a;         /* Hitam pekat */
    --light: #1a1a1a;        /* Abu gelap */
    --accent: #fbbf24;       /* Kuning emas */
}
```

### Mengubah Konten Konser

Edit di **index.html**:
```html
<!-- Judul Konser -->
<h1>Rebellion Rose Concert 2025</h1>

<!-- Tanggal -->
<p>25 Desember 2025</p>

<!-- Lokasi -->
<p>Politeknik Negeri Malang - Kampus Kediri</p>
```

### Menambah Band Member

Tambahkan di section band members (**index.html**):
```html
<div class="speaker-card">
    <div class="speaker-img">🎸</div>
    <div class="speaker-info">
        <h4>Nama Member</h4>
        <p>Posisi di Band</p>
    </div>
</div>
```

### Menambah Rundown

Tambahkan di section schedule (**index.html**):
```html
<div class="schedule-item">
    <div class="schedule-time">21:00</div>
    <div class="schedule-details">
        <h4>Judul Sesi Konser</h4>
        <p>Deskripsi singkat sesi</p>
    </div>
</div>
```

### Menggunakan Foto Real

Ganti emoji dengan foto di **index.html**:
```html
<!-- Sebelum (emoji) -->
<div class="speaker-img">🎸</div>

<!-- Sesudah (foto) -->
<div class="speaker-img">
    <img src="assets/images/speaker1.jpg" alt="Speaker Name">
</div>
```

Tambahkan CSS di **style.css**:
```css
.speaker-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
```

---

## 🛠️ Teknologi yang Digunakan

| Teknologi | Kegunaan |
|-----------|----------|
| **HTML5** | Struktur dan markup |
| **CSS3** | Styling, animasi, responsive |
| **JavaScript (ES6)** | Interaktivitas dan logic |
| **Flexbox** | Layout horizontal |
| **CSS Grid** | Layout cards & grid |
| **Intersection Observer API** | Animate on scroll |
| **CSS Variables** | Theme management |
| **Keyframe Animations** | Smooth animations |

---

## 📱 Browser Support

Website ini kompatibel dengan:

| Browser | Version |
|---------|---------|
| Chrome  | 90+ ✅ |
| Firefox | 88+ ✅ |
| Safari  | 14+ ✅ |
| Edge    | 90+ ✅ |
| Opera   | 76+ ✅ |

---

## 🎯 Fitur JavaScript Detail

### Modal Management
```javascript
openModal('login')        // Buka modal login
closeModal('register')    // Tutup modal register
switchModal('login', 'register')  // Pindah antar modal
```

### Form Handlers
```javascript
handleLogin(event)        // Handle submit login
handleRegister(event)     // Handle submit register
```

### Notifications
```javascript
showNotification('Pesan sukses', true)   // Notifikasi sukses
showNotification('Pesan error', false)   // Notifikasi error
```

### Scroll & Navigation
```javascript
scrollToSection('about')  // Smooth scroll ke section
```

---

## 🔧 Validasi Form

### Login Form
- **Email**: Harus format email valid
- **Password**: Minimal 6 karakter

### Ticket Purchase Form
- **Nama**: Wajib diisi
- **Email**: Harus format email valid
- **Password**: Minimal 8 karakter
  - < 8 karakter: Border merah
  - 8-11 karakter: Border orange
  - 12+ karakter: Border hijau
- **Tipe Tiket**: Pilih antara Regular (Rp 150k), VIP (Rp 350k), atau VVIP (Rp 500k)

---

## 🎨 Animasi yang Tersedia

### CSS Animations
- `fadeInUp` - Fade in dari bawah
- `slideIn` - Slide dari kiri
- `moveGrid` - Grid pattern bergerak
- `scaleIn` - Scale dari kecil

### Hover Effects
- Card hover: `translateY(-10px)` + shadow
- Button hover: `translateY(-2px)` + shadow
- Speaker hover: `scale(1.05)`

### Scroll Animations
- Feature cards: Fade in saat terlihat
- Speaker cards: Fade in saat terlihat

---

## 📊 Performance Tips

### Optimasi Loading
1. **Minify CSS/JS** untuk production
   ```bash
   # Gunakan tools seperti:
   npm install -g csso-cli uglify-js
   
   csso css/style.css -o css/style.min.css
   uglifyjs js/script.js -o js/script.min.js
   ```

2. **Compress Images** di folder assets/images
   - Gunakan format WebP untuk web
   - Resize sesuai kebutuhan (max 1920px)

3. **Lazy Loading** untuk images
   ```html
   <img data-src="image.jpg" alt="Description">
   ```

### Browser Caching
Tambahkan di `.htaccess` (jika hosting):
```apache
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
</IfModule>
```

---

## 🐛 Troubleshooting

### CSS tidak muncul
✅ Cek path file: `<link rel="stylesheet" href="css/style.css">`
✅ Pastikan file css/style.css ada

### JavaScript tidak jalan
✅ Cek path file: `<script src="js/script.js"></script>`
✅ Buka Console (F12) untuk lihat error

### Modal tidak muncul
✅ Pastikan ID modal sesuai: `loginModal` dan `registerModal`
✅ Cek fungsi `openModal()` dipanggil dengan benar

### Animasi patah-patah
✅ Pastikan browser support CSS transitions
✅ Disable hardware acceleration jika perlu

---

## 🚀 Deployment

### Hosting Gratis

#### 1. **Netlify** (Recommended)
```bash
# Drag & drop folder ke netlify.com
# atau via Netlify CLI:
npm install -g netlify-cli
netlify deploy
```

#### 2. **GitHub Pages**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin [repo-url]
git push -u origin main

# Enable GitHub Pages di Settings > Pages
```

#### 3. **Vercel**
```bash
npm i -g vercel
vercel
```

#### 4. **Firebase Hosting**
```bash
npm install -g firebase-tools
firebase login
firebase init
firebase deploy
```

---

## 📝 TODO / Future Improvements

- [ ] Tambah mobile menu slide-out
- [ ] Countdown timer ke tanggal konser
- [ ] Google Maps integration untuk lokasi Polinema Kediri
- [ ] Payment gateway integration untuk pembelian tiket
- [ ] Social media share buttons
- [ ] Testimonials section dari fans
- [ ] Gallery/photos dari konser sebelumnya
- [ ] FAQ accordion section tentang konser
- [ ] Spotify/YouTube embed untuk preview lagu Rebellion Rose
- [ ] Merchandise shop section

---

## 📄 License

MIT License - Feel free to use for personal or commercial projects

---

## 👨‍💻 Author

Created with 🎸 for Rebellion Rose Concert 2025

---

## 🤝 Contributing

Contributions are welcome! Silakan:
1. Fork repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

---

## 📞 Support

Jika ada pertanyaan atau butuh bantuan:
- 📧 Email: your.email@example.com
- 💬 Discord: YourUsername#0000
- 🐦 Twitter: @yourusername

---

## 🙏 Credits

- Icons: Emoji Unicode
- Theme: Rock Concert Dark Theme
- Fonts: System Fonts (Segoe UI)
- Inspiration: Modern rock concert landing pages
- Event: Rebellion Rose Concert @ Polinema Kediri

---

**Happy Coding! 🚀**