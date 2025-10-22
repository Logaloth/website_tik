# 📸 Panduan Menggunakan Gambar

Panduan lengkap untuk menambahkan dan mengelola gambar di website Landing Page Event.

---

## 📁 Struktur Folder Images

```
assets/
└── images/
    ├── logo.png                 # Logo event (optional)
    ├── hero-bg.jpg              # Background hero (optional)
    ├── speakers/                # Folder khusus speakers
    │   ├── speaker1.jpg
    │   ├── speaker2.jpg
    │   ├── speaker3.jpg
    │   └── speaker4.jpg
    ├── sponsors/                # Logo sponsor (optional)
    │   ├── sponsor1.png
    │   ├── sponsor2.png
    │   └── sponsor3.png
    └── gallery/                 # Galeri event (optional)
        ├── event1.jpg
        ├── event2.jpg
        └── event3.jpg
```

---

## 🖼️ Ukuran Gambar yang Direkomendasikan

### Logo Event
- **Ukuran**: 200x200px atau 300x300px
- **Format**: PNG dengan transparent background
- **Ukuran file**: < 50KB

### Speaker Photos
- **Ukuran**: 400x400px (square/persegi)
- **Format**: JPG atau WebP
- **Ukuran file**: < 100KB per foto
- **Aspect ratio**: 1:1 (square)

### Hero Background
- **Ukuran**: 1920x1080px (Full HD)
- **Format**: JPG atau WebP
- **Ukuran file**: < 300KB
- **Aspect ratio**: 16:9

### Sponsor Logos
- **Ukuran**: 200x100px atau 300x150px
- **Format**: PNG dengan transparent background
- **Ukuran file**: < 30KB

---

## 🔧 Cara Mengganti Emoji dengan Gambar Real

### 1. Speakers Section

**SEBELUM (dengan emoji):**
```html
<div class="speaker-card">
    <div class="speaker-img">👨‍💼</div>
    <div class="speaker-info">
        <h4>Dr. Budi Santoso</h4>
        <p>AI Research Lead @ TechCorp</p>
    </div>
</div>
```

**SESUDAH (dengan foto):**
```html
<div class="speaker-card">
    <div class="speaker-img">
        <img src="assets/images/speakers/speaker1.jpg" 
             alt="Dr. Budi Santoso">
    </div>
    <div class="speaker-info">
        <h4>Dr. Budi Santoso</h4>
        <p>AI Research Lead @ TechCorp</p>
    </div>
</div>
```

**Tambahkan CSS di style.css:**
```css
.speaker-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}
```

---

### 2. Feature Icons

**SEBELUM:**
```html
<div class="feature-icon">📅</div>
```

**SESUDAH:**
```html
<div class="feature-icon">
    <img src="assets/images/icons/calendar.svg" 
         alt="Calendar Icon">
</div>
```

**CSS untuk icons:**
```css
.feature-icon img {
    width: 60px;
    height: 60px;
}
```

---

### 3. Logo di Navbar

**Edit di index.html:**
```html
<div class="logo">
    <img src="assets/images/logo.png" alt="TechSummit Logo">
    TechSummit
</div>
```

**Tambahkan CSS:**
```css
.logo img {
    height: 40px;
    margin-right: 10px;
    vertical-align: middle;
}
```

---

## 🎨 Optimasi Gambar

### Tools Rekomendasi

#### Online Tools
1. **TinyPNG** - https://tinypng.com
   - Compress PNG & JPG
   - Batch processing

2. **Squoosh** - https://squoosh.app
   - Convert ke WebP
   - Advanced compression

3. **ImageOptim** - https://imageoptim.com
   - Mac app untuk compression

#### Command Line Tools
```bash
# ImageMagick - Resize batch
mogrify -resize 400x400 -quality 85 *.jpg

# WebP Converter
cwebp input.jpg -q 80 -o output.webp
```

---

## 📝 Format File yang Direkomendasikan

### JPG/JPEG
✅ Foto speaker, background
✅ Gambar dengan banyak warna
❌ Logo dengan transparency

### PNG
✅ Logo, icons
✅ Gambar dengan transparency
❌ Foto besar (ukuran file besar)

### WebP (Modern Format)
✅ Semua jenis gambar
✅ Ukuran file lebih kecil
✅ Support transparency
⚠️ Perlu fallback untuk browser lama

### SVG
✅ Icons, logo simple
✅ Scalable tanpa loss quality
✅ Ukuran file sangat kecil

---

## 🔄 Implementasi WebP dengan Fallback

```html
<picture>
    <!-- WebP untuk browser modern -->
    <source srcset="assets/images/speaker1.webp" type="image/webp">
    
    <!-- JPG fallback untuk browser lama -->
    <img src="assets/images/speaker1.jpg" 
         alt="Speaker Name">
</picture>
```

---

## 🚀 Lazy Loading Images

### Cara 1: Native Lazy Loading
```html
<img src="assets/images/speaker1.jpg" 
     alt="Speaker Name"
     loading="lazy">
```

### Cara 2: JavaScript (sudah ada di script.js)
```html
<img data-src="assets/images/speaker1.jpg" 
     alt="Speaker Name"
     class="lazy">
```

JavaScript akan otomatis load gambar saat terlihat di viewport.

---

## 🎯 Contoh Lengkap Speakers dengan Foto

```html
<!-- Speakers Section dengan Real Photos -->
<section class="speakers" id="speakers">
    <h2 class="section-title">Pembicara Kami</h2>
    <div class="speakers-grid">
        
        <!-- Speaker 1 -->
        <div class="speaker-card">
            <div class="speaker-img">
                <picture>
                    <source srcset="assets/images/speakers/budi.webp" 
                            type="image/webp">
                    <img src="assets/images/speakers/budi.jpg" 
                         alt="Dr. Budi Santoso"
                         loading="lazy">
                </picture>
            </div>
            <div class="speaker-info">
                <h4>Dr. Budi Santoso</h4>
                <p>AI Research Lead @ TechCorp</p>
            </div>
        </div>

        <!-- Speaker 2 -->
        <div class="speaker-card">
            <div class="speaker-img">
                <picture>
                    <source srcset="assets/images/speakers/sarah.webp" 
                            type="image/webp">
                    <img src="assets/images/speakers/sarah.jpg" 
                         alt="Sarah Johnson"
                         loading="lazy">
                </picture>
            </div>
            <div class="speaker-info">
                <h4>Sarah Johnson</h4>
                <p>Cloud Architect @ CloudTech</p>
            </div>
        </div>

        <!-- Speaker 3 -->
        <div class="speaker-card">
            <div class="speaker-img">
                <picture>
                    <source srcset="assets/images/speakers/ahmad.webp" 
                            type="image/webp">
                    <img src="assets/images/speakers/ahmad.jpg" 
                         alt="Ahmad Rizki"
                         loading="lazy">
                </picture>
            </div>
            <div class="speaker-info">
                <h4>Ahmad Rizki</h4>
                <p>Cybersecurity Expert @ SecureNet</p>
            </div>
        </div>

        <!-- Speaker 4 -->
        <div class="speaker-card">
            <div class="speaker-img">
                <picture>
                    <source srcset="assets/images/speakers/lisa.webp" 
                            type="image/webp">
                    <img src="assets/images/speakers/lisa.jpg" 
                         alt="Lisa Chen"
                         loading="lazy">
                </picture>
            </div>
            <div class="speaker-info">
                <h4>Lisa Chen</h4>
                <p>Blockchain Developer @ CryptoLab</p>
            </div>
        </div>
        
    </div>
</section>
```

---

## 🎨 CSS Tambahan untuk Images

Tambahkan di **css/style.css**:

```css
/* ========================================
   IMAGE STYLES
   ======================================== */

/* Speaker Image dengan foto real */
.speaker-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
    transition: transform 0.3s ease;
}

.speaker-card:hover .speaker-img img {
    transform: scale(1.1);
}

/* Fallback jika gambar error */
.speaker-img img {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

/* Logo styling */
.logo img {
    height: 40px;
    width: auto;
    margin-right: 10px;
    vertical-align: middle;
}

/* Lazy loading placeholder */
img[data-src] {
    filter: blur(5px);
    transition: filter 0.3s;
}

img[data-src].loaded {
    filter: blur(0);
}

/* Image loading skeleton */
.speaker-img::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        90deg,
        #f0f0f0 25%,
        #e0e0e0 50%,
        #f0f0f0 75%
    );
    background-size: 200% 100%;
    animation: loading 1.5s infinite;
}

@keyframes loading {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
}

.speaker-img img {
    position: relative;
    z-index: 1;
}
```

---

## 🔍 Sumber Gambar Gratis

### Stock Photos
1. **Unsplash** - https://unsplash.com
2. **Pexels** - https://pexels.com
3. **Pixabay** - https://pixabay.com

### Icons & Illustrations
1. **Flaticon**