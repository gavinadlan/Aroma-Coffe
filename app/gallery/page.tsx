"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const galleryImages = [
  {
    src: "/images/interior.jpg",
    alt: "Interior coffee shop dengan tempat duduk yang nyaman",
    category: "Interior",
  },
  {
    src: "/images/pembuatan-kopi.jpg",
    alt: "Barista menyiapkan latte art",
    category: "Pembuatan Kopi",
  },
  {
    src: "/images/biji-kopi.jpg",
    alt: "Biji kopi segar",
    category: "Bahan Baku",
  },
  {
    src: "/images/display-pastry.jpg",
    alt: "Display pastry yang lezat",
    category: "Makanan",
  },
  {
    src: "/images/interior-outdoor.jpg",
    alt: "Area tempat duduk outdoor",
    category: "Interior",
  },
  {
    src: "/images/roasting-kopi.jpg",
    alt: "Proses roasting kopi",
    category: "Pembuatan Kopi",
  },
  {
    src: "/images/espresso.jpg",
    alt: "Minuman kopi spesial",
    category: "Minuman",
  },
  {
    src: "/images/sudut-membaca.jpeg",
    alt: "Sudut membaca yang nyaman",
    category: "Interior",
  },
  {
    src: "/images/pembuatan-sandwich.jpg",
    alt: "Persiapan sandwich segar",
    category: "Makanan",
  },
  {
    src: "/images/alatkopi.jpg",
    alt: "Peralatan dan alat kopi",
    category: "Pembuatan Kopi",
  },
  {
    src: "/images/interior-malam.jpeg",
    alt: "Suasana malam",
    category: "Interior",
  },
  {
    src: "images/pembuatan-coldbrew.jpg",
    alt: "Persiapan cold brew",
    category: "Minuman",
  },
]

const categories = ["Semua", "Interior", "Pembuatan Kopi", "Makanan", "Minuman", "Bahan Baku"]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("Semua")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const filteredImages =
    selectedCategory === "Semua" ? galleryImages : galleryImages.filter((image) => image.category === selectedCategory)

  const openLightbox = (index: number) => {
    setSelectedImage(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1)
    }
  }

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-playfair text-5xl font-bold text-stone-900 mb-4">Galeri</h1>
          <p className="text-stone-600 text-lg max-w-2xl mx-auto">
            Ikuti perjalanan visual melalui coffee shop kami - dari interior yang nyaman hingga seni pembuatan kopi.
          </p>
        </div>

        {/* Filter Kategori */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-amber-700 text-white"
                  : "bg-white text-amber-700 border border-amber-700 hover:bg-amber-700 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid Galeri */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openLightbox(index)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                  <p className="font-medium">{image.category}</p>
                  <p className="text-sm mt-1">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <Image
                src={filteredImages[selectedImage].src || "/placeholder.svg"}
                alt={filteredImages[selectedImage].alt}
                width={800}
                height={600}
                className="max-w-full max-h-full object-contain rounded-lg"
              />

              {/* Tombol Tutup */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Tombol Navigasi */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Info Gambar */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/50 text-white p-4 rounded-lg">
                <p className="font-medium">{filteredImages[selectedImage].alt}</p>
                <p className="text-sm text-stone-300">{filteredImages[selectedImage].category}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
