"use client"

import type React from "react"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form kontak dikirim:", formData)
    // Handle pengiriman form di sini
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-playfair text-5xl font-bold text-stone-900 mb-4">Hubungi Kami</h1>
          <p className="text-stone-600 text-lg max-w-2xl mx-auto">
            Punya pertanyaan, saran, atau hanya ingin menyapa? Kami senang mendengar dari Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Informasi Kontak */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="font-playfair text-2xl font-bold text-stone-900 mb-6">Hubungi Kami</h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-amber-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-1">Kunjungi Kami</h3>
                    <p className="text-stone-600">Jl. Kopi No. 123</p>
                    <p className="text-stone-600">Jakarta Pusat 12345, Indonesia</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-amber-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-1">Telepon Kami</h3>
                    <p className="text-stone-600">+62 21 1234 5678</p>
                    <p className="text-stone-600">+62 812 3456 7890</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-amber-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-1">Email Kami</h3>
                    <p className="text-stone-600">hello@aromacoffee.com</p>
                    <p className="text-stone-600">info@aromacoffee.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-amber-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-1">Jam Operasional</h3>
                    <div className="space-y-1 text-stone-600">
                      <p>Senin - Jumat: 07:00 - 22:00</p>
                      <p>Sabtu: 08:00 - 23:00</p>
                      <p>Minggu: 08:00 - 21:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-stone-50 rounded-2xl p-8">
              <h3 className="font-playfair text-xl font-bold text-stone-900 mb-4">Pertanyaan Umum</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-stone-900 text-sm mb-1">Apakah Anda menyediakan WiFi?</h4>
                  <p className="text-stone-600 text-sm">Ya, kami menyediakan WiFi gratis berkecepatan tinggi untuk semua pelanggan.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-stone-900 text-sm mb-1">Bisakah saya bekerja di sini dengan laptop?</h4>
                  <p className="text-stone-600 text-sm">Kami memiliki tempat duduk yang nyaman dan stopkontak yang tersedia.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-stone-900 text-sm mb-1">Apakah Anda melayani acara?</h4>
                  <p className="text-stone-600 text-sm">
                    Ya, kami menawarkan layanan catering. Silakan hubungi kami untuk detailnya.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Kontak */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="font-playfair text-2xl font-bold text-stone-900 mb-6">Kirim Pesan</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nama Lengkap</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Nama lengkap Anda"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className="rounded-xl border-stone-300 focus:border-amber-600"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="email@anda.com"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className="rounded-xl border-stone-300 focus:border-amber-600"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Nomor Telepon (Opsional)</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+62 812 3456 7890"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className="rounded-xl border-stone-300 focus:border-amber-600"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subjek</Label>
                <Select onValueChange={(value) => handleChange("subject", value)}>
                  <SelectTrigger className="rounded-xl border-stone-300 focus:border-amber-600">
                    <SelectValue placeholder="Pilih subjek" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">Pertanyaan Umum</SelectItem>
                    <SelectItem value="reservation">Reservasi</SelectItem>
                    <SelectItem value="catering">Layanan Catering</SelectItem>
                    <SelectItem value="feedback">Umpan Balik</SelectItem>
                    <SelectItem value="complaint">Keluhan</SelectItem>
                    <SelectItem value="partnership">Kemitraan</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Pesan</Label>
                <Textarea
                  id="message"
                  placeholder="Ceritakan bagaimana kami bisa membantu Anda..."
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  className="rounded-xl border-stone-300 focus:border-amber-600 min-h-[120px]"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-amber-700 hover:bg-amber-800 text-white py-3 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                <Send className="h-5 w-5 mr-2" />
                Kirim Pesan
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
