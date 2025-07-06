"use client"

import Image from "next/image"
import { Star } from "lucide-react"

interface MenuCardProps {
  name: string
  description: string
  price: string
  image: string
  rating?: number
  category: string
  isPopular?: boolean
}

export default function MenuCard({
  name,
  description,
  price,
  image,
  rating = 4.5,
  category,
  isPopular = false,
}: MenuCardProps) {
  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2">
      {/* Container Gambar */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image || "/placeholder.svg?height=300&width=400"}
          alt={name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {isPopular && (
          <div className="absolute top-3 left-3 bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
            Populer
          </div>
        )}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
          <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
          <span className="text-xs font-medium">{rating}</span>
        </div>
      </div>

      {/* Konten */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <div>
            <span className="text-xs text-amber-600 font-medium uppercase tracking-wide">{category}</span>
            <h3 className="font-playfair text-xl font-bold text-stone-900 mt-1">{name}</h3>
          </div>
          <span className="text-2xl font-bold text-amber-700">{price}</span>
        </div>

        <p className="text-stone-600 text-sm leading-relaxed mb-4">{description}</p>

        <div className="text-center py-2 px-4 bg-stone-100 rounded-xl text-stone-600 text-sm font-medium">
          Tersedia untuk Dine-in
        </div>
      </div>
    </div>
  )
}
