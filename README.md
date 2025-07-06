# Aroma Coffee - Website Coffee Shop

Website coffee shop modern yang dibangun dengan Next.js, TypeScript, dan Tailwind CSS.

## 🚀 Fitur

- **Responsive Design** - Tampilan yang optimal di semua perangkat
- **Modern UI/UX** - Desain yang elegan dan user-friendly
- **Fast Performance** - Optimized dengan Next.js
- **SEO Friendly** - Meta tags dan struktur yang baik untuk SEO
- **Accessibility** - Mengikuti standar aksesibilitas web

## 📁 Struktur Project

```
coffee-shop-website/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Halaman utama
│   ├── about/page.tsx     # Halaman Tentang
│   ├── menu/page.tsx      # Halaman Menu
│   ├── blog/page.tsx      # Halaman Blog
│   ├── contact/page.tsx   # Halaman Kontak
│   ├── gallery/page.tsx   # Halaman Galeri
│   ├── location/page.tsx  # Halaman Lokasi
│   └── reservation/page.tsx # Halaman Reservasi
├── components/            # React Components
│   ├── HeroSection.tsx    # Hero section
│   ├── MenuCard.tsx       # Card untuk menu
│   ├── BlogCard.tsx       # Card untuk blog
│   ├── Footer.tsx         # Footer
│   └── ui/               # UI Components (shadcn/ui)
├── public/               # Static files
│   └── images/          # Gambar-gambar website
└── styles/              # CSS files
```

## 🛠️ Setup dan Instalasi

1. **Clone repository**
   ```bash
   git clone <repository-url>
   cd coffee-shop-website
   ```

2. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Jalankan development server**
   ```bash
   npm run dev
   ```

4. **Buka browser**
   ```
   http://localhost:3000
   ```

## 🖼️ Menambahkan Gambar

Website ini menggunakan gambar dari folder `public/images/`. Untuk menambahkan gambar:

1. **Siapkan gambar dengan ukuran yang sesuai:**
   - Hero images: 1200x800px
   - Menu images: 400x300px
   - Blog images: 400x300px
   - Process images: 500x600px

2. **Simpan gambar di folder `public/images/` dengan nama yang sesuai:**
   ```
   public/images/
   ├── hero-1.jpg
   ├── hero-2.jpg
   ├── hero-3.jpg
   ├── espresso.jpg
   ├── cappuccino.jpg
   ├── croissant.jpg
   ├── coffee-brewing.jpg
   ├── sustainable-coffee.jpg
   └── coffee-brewing-process.jpg
   ```

3. **Format gambar yang didukung:**
   - JPG/JPEG
   - PNG
   - WebP
   - SVG

## 🎨 Customization

### Mengubah Konten

1. **Halaman Utama** - Edit `app/page.tsx`
2. **Menu Items** - Edit data di `app/menu/page.tsx`
3. **Blog Posts** - Edit data di `app/blog/page.tsx`
4. **Navbar** - Edit `components/FloatingNavbar.tsx`
5. **Footer** - Edit `components/Footer.tsx`

### Mengubah Styling

1. **Global CSS** - Edit `app/globals.css`
2. **Tailwind Classes** - Gunakan Tailwind CSS classes
3. **Component Styling** - Edit styling di masing-masing component

### Mengubah Warna

Website menggunakan tema warna amber/brown. Untuk mengubah:

1. Edit CSS variables di `app/globals.css`
2. Ganti Tailwind classes yang menggunakan `amber-` dengan warna yang diinginkan

## 📱 Halaman yang Tersedia

- **Beranda** (`/`) - Halaman utama dengan hero section dan preview konten
- **Menu** (`/menu`) - Daftar lengkap menu kopi dan makanan
- **Tentang** (`/about`) - Informasi tentang coffee shop
- **Galeri** (`/gallery`) - Foto-foto coffee shop dan menu
- **Lokasi** (`/location`) - Peta dan informasi lokasi
- **Reservasi** (`/reservation`) - Form untuk reservasi meja
- **Kontak** (`/contact`) - Form kontak dan informasi
- **Blog** (`/blog`) - Artikel tentang kopi dan tips

## 🚀 Deployment

### Vercel (Recommended)
1. Push code ke GitHub
2. Connect repository ke Vercel
3. Deploy otomatis

### Netlify
1. Build project: `npm run build`
2. Upload folder `out/` ke Netlify

### Manual
1. Build project: `npm run build`
2. Start production server: `npm start`

## 🔧 Scripts

```bash
npm run dev      # Development server
npm run build    # Build untuk production
npm run start    # Production server
npm run lint     # Linting code
```

## 📝 Catatan

- Website ini adalah frontend-only, tidak ada backend untuk order
- Button "Add to Order" telah dihapus dan diganti dengan "Tersedia untuk Dine-in"
- Semua konten telah diterjemahkan ke bahasa Indonesia
- Gambar menggunakan fallback ke placeholder jika tidak ditemukan

## 🤝 Kontribusi

1. Fork repository
2. Buat feature branch
3. Commit changes
4. Push ke branch
5. Buat Pull Request

## 📄 License

MIT License - lihat file LICENSE untuk detail.

---

Dibuat dengan ❤️ untuk pecinta kopi ☕ 