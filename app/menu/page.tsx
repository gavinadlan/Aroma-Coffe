"use client"

import { useState } from "react"
import MenuCard from "@/components/MenuCard"
import { Button } from "@/components/ui/button"

const categories = ["Semua", "Kopi", "Teh", "Makanan", "Dessert", "Minuman Dingin"]

const menuItems = [
  {
    name: "Espresso Signature",
    description: "Espresso kaya dan kuat dengan aroma cokelat dan karamel",
    price: "Rp 35.000",
    image: "/images/espresso.jpg",
    category: "Kopi",
    rating: 4.8,
    isPopular: true,
  },
  {
    name: "Cappuccino Artisan",
    description: "Susu yang dikukus sempurna dengan latte art yang indah",
    price: "Rp 42.000",
    image: "/images/cappuccino.jpg",
    category: "Kopi",
    rating: 4.7,
  },
  {
    name: "Vanilla Latte",
    description: "Espresso halus dengan sirup vanilla dan susu kukus",
    price: "Rp 45.000",
    image: "/images/vanila-latte.jpg",
    category: "Kopi",
    rating: 4.6,
  },
  {
    name: "Cold Brew",
    description: "Kopi yang direndam perlahan disajikan dengan es dengan finish yang halus",
    price: "Rp 38.000",
    image: "/images/cold-brew.jpg",
    category: "Minuman Dingin",
    rating: 4.5,
  },
  {
    name: "Teh Earl Grey",
    description: "Teh hitam klasik dengan minyak bergamot dan aroma jeruk",
    price: "Rp 28.000",
    image: "/images/earl-grey.jpg",
    category: "Teh",
    rating: 4.4,
  },
  {
    name: "Green Tea Latte",
    description: "Bubuk matcha dengan susu kukus dan kemanisan ringan",
    price: "Rp 40.000",
    image: "/images/green-tea.jpg",
    category: "Teh",
    rating: 4.6,
  },
  {
    name: "Croissant Sandwich",
    description: "Croissant mentega dengan ham dan keju premium",
    price: "Rp 55.000",
    image: "/images/Croissant-Sandwich.jpg",
    category: "Makanan",
    rating: 4.6,
  },
  {
    name: "Avocado Toast",
    description: "Roti sourdough dengan alpukat segar dan herba",
    price: "Rp 48.000",
    image: "/images/Avocado-Toast.jpg",
    category: "Makanan",
    rating: 4.5,
  },
  {
    name: "Chocolate Cake",
    description: "Kue cokelat kaya dengan ganache dan beri segar",
    price: "Rp 35.000",
    image: "/images/Chocolate-Cake.jpeg",
    category: "Dessert",
    rating: 4.8,
    isPopular: true,
  },
  {
    name: "Tiramisu",
    description: "Dessert Italia klasik dengan ladyfinger yang direndam kopi",
    price: "Rp 42.000",
    image: "/images/Tiramisu.jpeg",
    category: "Dessert",
    rating: 4.7,
  },
  {
    name: "Iced Americano",
    description: "Shot espresso dengan es dan air dingin",
    price: "Rp 32.000",
    image: "/images/Iced-Americano.jpg",
    category: "Minuman Dingin",
    rating: 4.4,
  },
  {
    name: "Frappuccino",
    description: "Minuman kopi yang diblender dengan es dan whipped cream",
    price: "Rp 48.000",
    image: "/images/Frappuccino.jpg",
    category: "Minuman Dingin",
    rating: 4.6,
  },
]

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState("Semua")

  const filteredItems =
    selectedCategory === "Semua" ? menuItems : menuItems.filter((item) => item.category === selectedCategory)

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-playfair text-5xl font-bold text-stone-900 mb-4">Menu Kami</h1>
          <p className="text-stone-600 text-lg max-w-2xl mx-auto">
            Temukan pilihan kopi premium, makanan lezat, dan hidangan manis yang kami kurasi dengan hati-hati.
          </p>
        </div>

        {/* Filter Kategori */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`rounded-full px-6 py-2 transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-amber-700 hover:bg-amber-800 text-white"
                  : "border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Grid Menu */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredItems.map((item, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <MenuCard {...item} />
            </div>
          ))}
        </div>

        {/* Seruan untuk Bertindak */}
        <div className="text-center mt-16 bg-stone-900 rounded-2xl p-12 text-white">
          <h2 className="font-playfair text-3xl font-bold mb-4">Tidak Bisa Memutuskan?</h2>
          <p className="text-stone-300 mb-6 max-w-2xl mx-auto">
            Biarkan barista ahli kami merekomendasikan minuman sempurna untuk preferensi rasa Anda. Kunjungi kami hari ini atau buat
            reservasi untuk pengalaman kopi yang dipersonalisasi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-amber-700 hover:bg-amber-800 text-white rounded-full">
              <a href="/reservation">Buat Reservasi</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-stone-900 rounded-full bg-transparent"
            >
              <a href="/contact">Hubungi Kami</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
