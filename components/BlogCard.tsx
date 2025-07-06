import Image from "next/image"
import Link from "next/link"
import { Calendar, User, ArrowRight } from "lucide-react"

interface BlogCardProps {
  title: string
  excerpt: string
  image: string
  author: string
  date: string
  slug: string
  category: string
}

export default function BlogCard({ title, excerpt, image, author, date, slug, category }: BlogCardProps) {
  return (
    <article className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image || "/placeholder.svg?height=300&width=400"}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
          {category}
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center space-x-4 text-sm text-stone-500 mb-3">
          <div className="flex items-center space-x-1">
            <User className="h-4 w-4" />
            <span>{author}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Calendar className="h-4 w-4" />
            <span>{date}</span>
          </div>
        </div>

        <h3 className="font-playfair text-xl font-bold text-stone-900 mb-3 group-hover:text-amber-700 transition-colors">
          {title}
        </h3>

        <p className="text-stone-600 text-sm leading-relaxed mb-4 line-clamp-3">{excerpt}</p>

        <Link
          href={`/blog/${slug}`}
          className="inline-flex items-center space-x-2 text-amber-700 hover:text-amber-800 font-medium text-sm transition-colors group-hover:translate-x-1"
        >
          <span>Baca Selengkapnya</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  )
}
