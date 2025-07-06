import HeroSection from "@/components/HeroSection"
import MenuCard from "@/components/MenuCard"
import BlogCard from "@/components/BlogCard"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Coffee, Users, Award, Clock, MapPin, Phone } from "lucide-react"

const featuredMenuItems = [
  {
    name: "Espresso Signature",
    description: "Espresso kaya dan berani dengan aroma cokelat dan karamel",
    price: "Rp 35,000",
    image: "/images/espresso.jpg",
    category: "Kopi",
    rating: 4.8,
    isPopular: true,
  },
  {
    name: "Cappuccino Artisan",
    description: "Susu yang dikukus sempurna dengan latte art yang indah",
    price: "Rp 42,000",
    image: "/images/cappuccino.jpg",
    category: "Kopi",
    rating: 4.7,
  },
  {
    name: "Sandwich Croissant",
    description: "Croissant mentega dengan ham dan keju premium",
    price: "Rp 55,000",
    image: "/images/croissant.jpg",
    category: "Makanan",
    rating: 4.6,
  },
]

const blogPosts = [
  {
    title: "Seni Membuat Kopi: Panduan Lengkap",
    excerpt:
      "Temukan rahasia di balik pembuatan secangkir kopi sempurna, dari pemilihan biji hingga teknik ekstraksi.",
    image: "/images/coffee-brewing.jpg",
    author: "Sarah Johnson",
    date: "15 Des 2024",
    slug: "art-of-coffee-brewing",
    category: "Panduan Kopi",
  },
  {
    title: "Kopi Berkelanjutan: Perjalanan Kami Menuju Sumber Etis",
    excerpt: "Pelajari tentang komitmen kami terhadap pertanian kopi berkelanjutan dan bagaimana kami mendukung komunitas lokal.",
    image: "/images/sustainable-coffee.jpg",
    author: "Michael Chen",
    date: "12 Des 2024",
    slug: "sustainable-coffee-journey",
    category: "Keberlanjutan",
  },
]

export default function HomePage() {
  return (
    <div className="pt-20">
      <HeroSection />

      {/* Bagian Tentang */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="font-playfair text-4xl font-bold text-stone-900 mb-6">
                Membuat Kopi Sempurna Sejak 2020
              </h2>
              <p className="text-stone-600 text-lg leading-relaxed mb-8">
                Di Aroma Coffee, kami percaya bahwa setiap cangkir menceritakan sebuah kisah. Barista kami yang penuh semangat 
                dengan hati-hati memilih dan memanggang biji kopi premium dari seluruh dunia, menciptakan pengalaman kopi 
                yang tak terlupakan dalam suasana yang hangat dan ramah.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Coffee className="h-8 w-8 text-amber-700" />
                  </div>
                  <h3 className="font-semibold text-stone-900">Biji Premium</h3>
                  <p className="text-stone-600 text-sm">Sumber global</p>
                </div>
                <div className="text-center">
                  <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="h-8 w-8 text-amber-700" />
                  </div>
                  <h3 className="font-semibold text-stone-900">Barista Ahli</h3>
                  <p className="text-stone-600 text-sm">Pengrajin terampil</p>
                </div>
              </div>
              <Button asChild size="lg" className="bg-amber-700 hover:bg-amber-800 text-white rounded-full">
                <Link href="/about">Pelajari Lebih Lanjut</Link>
              </Button>
            </div>
            <div className="relative">
              <Image
                src="/images/coffee-brewing-process.jpg"
                alt="Proses pembuatan kopi"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Award className="h-8 w-8 text-amber-600" />
                  <div>
                    <h4 className="font-semibold text-stone-900">Kopi Terbaik 2024</h4>
                    <p className="text-stone-600 text-sm">Jakarta Coffee Awards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Unggulan */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold text-stone-900 mb-4">Menu Unggulan</h2>
            <p className="text-stone-600 text-lg max-w-2xl mx-auto">
              Temukan item paling populer kami, dibuat dengan hati-hati menggunakan bahan premium dan disajikan dengan penuh kasih.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredMenuItems.map((item, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <MenuCard {...item} />
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white rounded-full bg-transparent"
            >
              <Link href="/menu">Lihat Menu Lengkap</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Bagian Statistik */}
      <section className="py-20 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400 mb-2">50K+</div>
              <div className="text-stone-300">Pelanggan Puas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400 mb-2">100+</div>
              <div className="text-stone-300">Variasi Kopi</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400 mb-2">4.9</div>
              <div className="text-stone-300">Rating Rata-rata</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400 mb-2">24/7</div>
              <div className="text-stone-300">Dukungan Online</div>
            </div>
          </div>
        </div>
      </section>

      {/* Bagian Blog */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold text-stone-900 mb-4">Terbaru dari Blog Kami</h2>
            <p className="text-stone-600 text-lg max-w-2xl mx-auto">
              Tetap terupdate dengan tips kopi, panduan brewing, dan cerita dari komunitas kopi kami.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {blogPosts.map((post, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <BlogCard {...post} />
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white rounded-full bg-transparent"
            >
              <Link href="/blog">Baca Artikel Lainnya</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Peta Lokasi */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold text-stone-900 mb-4">Kunjungi Coffee Shop Kami</h2>
            <p className="text-stone-600 text-lg max-w-2xl mx-auto">
              Berada di jantung Jakarta, kami mudah ditemukan dan selalu siap melayani Anda dengan secangkir kopi sempurna.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-amber-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-stone-900 mb-1">Alamat</h3>
                  <p className="text-stone-600">Jl. Kopi No. 123, Jakarta Pusat 12345, Indonesia</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-amber-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-stone-900 mb-1">Jam Operasional</h3>
                  <div className="text-stone-600 space-y-1">
                    <p>Senin - Jumat: 07:00 - 22:00</p>
                    <p>Sabtu: 08:00 - 23:00</p>
                    <p>Minggu: 08:00 - 21:00</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-amber-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-stone-900 mb-1">Kontak</h3>
                  <p className="text-stone-600">+62 21 1234 5678</p>
                  <p className="text-stone-600">hello@aromacoffee.com</p>
                </div>
              </div>
            </div>

            <div className="bg-stone-200 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center text-stone-600">
                <MapPin className="h-12 w-12 mx-auto mb-4 text-amber-700" />
                <p className="text-lg font-medium">Peta Interaktif</p>
                <p className="text-sm">Integrasi Google Maps akan ditempatkan di sini</p>
                <p className="text-xs mt-2">Jl. Kopi No. 123, Jakarta Pusat</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
