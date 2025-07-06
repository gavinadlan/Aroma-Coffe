"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import Image from "next/image"

const navItems = [
  { name: "Beranda", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "Tentang", href: "/about" },
  { name: "Galeri", href: "/gallery" },
  { name: "Lokasi", href: "/location" },
  { name: "Reservasi", href: "/reservation" },
  { name: "Kontak", href: "/contact" },
  { name: "Blog", href: "/blog" },
]

export default function FloatingNavbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
          isScrolled ? "scale-95" : "scale-100"
        }`}
      >
        <div
          className={`relative flex items-center justify-between gap-6 rounded-full px-6 py-3 transition-all duration-300 glassmorphism ${
            isScrolled ? "bg-white/20" : "bg-white/10"
          }`}
        >
          {/* Logo besar, tidak memengaruhi navbar height */}
          <Link href="/" className="absolute -left-16 -top-6">
            <Image
              src="/logo.svg"
              alt="Aroma Coffee Logo"
              width={0}
              height={0}
              priority
              className="w-[90px] h-auto object-contain drop-shadow-md pointer-events-auto"
            />
          </Link>

          {/* Spacer kosong untuk jaga layout */}
          <div className="w-[50px] hidden lg:block" />

          {/* Menu Desktop */}
          <div className="hidden lg:flex items-center space-x-8 ml-auto">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-all duration-200 hover:text-amber-700 hover:scale-105 ${
                  pathname === item.href ? "text-amber-800 font-semibold" : "text-stone-700"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Tombol Menu Mobile */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-stone-700 hover:text-amber-700 transition-colors ml-auto"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Menu Mobile */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="fixed top-20 left-1/2 transform -translate-x-1/2 w-80 glassmorphism rounded-2xl p-6">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-center py-2 px-4 rounded-lg transition-all duration-200 hover:bg-white/20 ${
                    pathname === item.href ? "text-amber-800 font-semibold bg-white/10" : "text-stone-700"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
