"use client"

import BlogCard from "@/components/BlogCard"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { useState } from "react"

const blogPosts = [
  {
    title: "Seni Pembuatan Kopi: Panduan Lengkap",
    excerpt:
      "Temukan rahasia di balik pembuatan cangkir kopi sempurna, dari pemilihan biji hingga teknik ekstraksi. Pelajari berbagai metode brewing dan bagaimana mereka mempengaruhi rasa akhir.",
    image: "/images/seni-kopi.jpg",
    author: "Sarah Johnson",
    date: "15 Des 2024",
    slug: "art-of-coffee-brewing",
    category: "Panduan Kopi",
  },
  {
    title: "Kopi Berkelanjutan: Perjalanan Kami Menuju Sourcing Etis",
    excerpt:
      "Pelajari tentang komitmen kami terhadap pertanian kopi berkelanjutan dan bagaimana kami mendukung komunitas lokal. Temukan dampak sourcing etis terhadap petani dan kualitas kopi.",
    image: "/images/kopi-berkelanjutan.jpg",
    author: "Agus Setiawan",
    date: "12 Des 2024",
    slug: "sustainable-coffee-journey",
    category: "Keberlanjutan",
  },
  {
    title: "Masterclass Latte Art: Membuat Desain Indah",
    excerpt:
      "Kuasai seni latte art dengan panduan langkah demi langkah kami. Dari hati sederhana hingga rosetta kompleks, pelajari teknik yang membuat setiap cangkir menjadi karya seni.",
    image: "/images/latte-art.jpg",
    author: "Jessica Kumala Wongso",
    date: "10 Des 2024",
    slug: "latte-art-masterclass",
    category: "Keahlian Barista",
  },
  {
    title: "Kopi dan Kesehatan: Memisahkan Fakta dari Fiksi",
    excerpt:
      "Jelajahi penelitian terbaru tentang manfaat kesehatan kopi dan bantah mitos umum. Pelajari bagaimana kopi bisa menjadi bagian dari gaya hidup sehat ketika dikonsumsi dengan bijak.",
    image: "/images/blog1.png",
    author: "Dr. James Wilson",
    date: "8 Des 2024",
    slug: "coffee-and-health",
    category: "Kesehatan",
  },
  {
    title: "Padanan Kopi dan Makanan yang Sempurna",
    excerpt:
      "Temukan makanan mana yang paling cocok dengan berbagai varietas kopi. Dari pastry hingga hidangan gurih, pelajari cara meningkatkan pengalaman kopi Anda melalui padanan yang bijaksana.",
    image: "/images/blog2.jpeg",
    author: "Chef Maria Santos",
    date: "5 Des 2024",
    slug: "coffee-food-pairings",
    category: "Makanan & Kopi",
  },
  {
    title: "Di Balik Layar: Sehari di Roastery Kami",
    excerpt:
      "Ikuti tur virtual proses roasting kopi kami. Temui master roaster kami dan pelajari tentang kerajinan hati-hati yang masuk ke setiap batch blend signature kami.",
    image: "/images/roasted.webp",
    author: "Robert Kim",
    date: "3 Des 2024",
    slug: "behind-scenes-roastery",
    category: "Di Balik Layar",
  },
]

// Ambil kategori unik dari blogPosts
const allCategories = Array.from(new Set(blogPosts.map((post) => post.category)))

// Urutan kategori sesuai permintaan user
const orderedCategories = [
  "Semua",
  "Panduan Kopi",
  "Keberlanjutan",
  "Keahlian Barista",
  "Kesehatan",
  "Makanan & Kopi",
  "Di Balik Layar",
]

// Filter kategori yang memang ada di blogPosts (kecuali 'Semua')
const categories = [
  "Semua",
  ...orderedCategories.filter((cat) => cat !== "Semua" && allCategories.includes(cat)),
]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("Semua")
  const [searchTerm, setSearchTerm] = useState("")

  // Filter dan search
  const filteredPosts = blogPosts.filter((post) => {
    const matchCategory = selectedCategory === "Semua" || post.category === selectedCategory
    const matchSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    return matchCategory && matchSearch
  })

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-playfair text-5xl font-bold text-stone-900 mb-4">Blog Kopi</h1>
          <p className="text-stone-600 text-lg max-w-2xl mx-auto">
            Selami dunia kopi dengan wawasan ahli kami, tips brewing, dan cerita dari komunitas kopi.
          </p>
        </div>

        {/* Pencarian dan Filter */}
        <div className="flex flex-col md:flex-row gap-6 mb-12">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-stone-400" />
            <Input
              type="text"
              placeholder="Cari artikel..."
              className="pl-10 rounded-xl border-stone-300 focus:border-amber-600"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 text-sm rounded-full border border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white transition-all duration-300 ${selectedCategory === category ? "bg-amber-700 text-white" : ""}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Artikel Unggulan */}
        {filteredPosts.length > 0 && (
          <div className="mb-16">
            <div className="bg-gradient-to-r from-stone-900 to-amber-900 rounded-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 lg:p-12 text-white">
                  <span className="inline-block bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-semibold mb-4">
                    Artikel Unggulan
                  </span>
                  <h2 className="font-playfair text-3xl lg:text-4xl font-bold mb-4">{filteredPosts[0].title}</h2>
                  <p className="text-stone-200 mb-6 leading-relaxed">{filteredPosts[0].excerpt}</p>
                  <div className="flex items-center space-x-4 text-sm text-stone-300 mb-6">
                    <span>Oleh {filteredPosts[0].author}</span>
                    <span>•</span>
                    <span>{filteredPosts[0].date}</span>
                  </div>
                  <a
                    href={`/blog/${filteredPosts[0].slug}`}
                    className="inline-flex items-center bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                  >
                    Baca Artikel Lengkap
                  </a>
                </div>
                <div className="h-64 lg:h-auto relative">
                  <Image
                    src={filteredPosts[0].image}
                    alt={filteredPosts[0].title}
                    fill
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Grid Blog */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.slice(1).map((post, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <BlogCard {...post} />
            </div>
          ))}
        </div>

        {/* Pendaftaran Newsletter */}
        <div className="mt-16 bg-amber-50 rounded-2xl p-12 text-center">
          <h2 className="font-playfair text-3xl font-bold text-stone-900 mb-4">Tetap Terupdate</h2>
          <p className="text-stone-600 mb-6 max-w-2xl mx-auto">
            Berlangganan newsletter kami dan jangan pernah ketinggalan tips kopi terbaru, panduan brewing, dan cerita dari
            komunitas kami.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Masukkan email Anda"
              className="rounded-xl border-amber-300 focus:border-amber-600"
            />
            <button className="bg-amber-700 hover:bg-amber-800 text-white px-6 py-2 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
              Berlangganan
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
