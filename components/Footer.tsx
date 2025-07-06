import Link from "next/link"
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Merek */}
          <div className="space-y-4">
            <div className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Aroma Coffee Logo"
              width={120}
              height={120}
              priority
              className="w-[120px] h-[120px] object-contain"
            />
            </div>
            <p className="text-stone-400 text-sm leading-relaxed">
              Nikmati kopi terbaik dalam suasana modern yang nyaman. Biji premium, dibuat oleh pengrajin ahli.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-stone-400 hover:text-amber-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-stone-400 hover:text-amber-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-stone-400 hover:text-amber-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Tautan Cepat */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Tautan Cepat</h3>
            <div className="space-y-2">
              {["Menu", "Tentang Kami", "Galeri", "Reservasi"].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase().replace(" ", "-")}`}
                  className="block text-stone-400 hover:text-amber-600 transition-colors text-sm"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Info Kontak */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Info Kontak</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="h-4 w-4 text-amber-600 flex-shrink-0" />
                <span className="text-stone-400">Jl. Kopi No. 123, Jakarta 12345</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="h-4 w-4 text-amber-600 flex-shrink-0" />
                <span className="text-stone-400">+62 21 1234 5678</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="h-4 w-4 text-amber-600 flex-shrink-0" />
                <span className="text-stone-400">hello@aromacoffee.com</span>
              </div>
            </div>
          </div>

          {/* Jam Operasional */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Jam Operasional</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-stone-400">Sen - Jum</span>
                <span className="text-stone-300">07:00 - 22:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-400">Sabtu</span>
                <span className="text-stone-300">08:00 - 23:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-400">Minggu</span>
                <span className="text-stone-300">08:00 - 21:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-12 pt-8 text-center">
          <p className="text-stone-400 text-sm">
            © 2024 Aroma Coffee. Hak cipta dilindungi. Dibuat dengan ❤️ untuk pecinta kopi.
          </p>
        </div>
      </div>
    </footer>
  )
}
