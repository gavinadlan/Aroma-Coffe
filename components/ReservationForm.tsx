"use client"

import type React from "react"

import { useState } from "react"
import { Calendar, Clock, Users, User, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ReservationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    specialRequests: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Reservasi dikirim:", formData)
    // Handle pengiriman form di sini
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="font-playfair text-3xl font-bold text-stone-900 mb-2">Buat Reservasi</h2>
        <p className="text-stone-600">Reservasi pengalaman kopi sempurna Anda</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Informasi Pribadi */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="flex items-center space-x-2">
              <User className="h-4 w-4 text-amber-600" />
              <span>Nama Lengkap</span>
            </Label>
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
            <Label htmlFor="email" className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-amber-600" />
              <span>Email</span>
            </Label>
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
          <Label htmlFor="phone" className="flex items-center space-x-2">
            <Phone className="h-4 w-4 text-amber-600" />
            <span>Nomor Telepon</span>
          </Label>
          <Input
            id="phone"
            type="tel"
            placeholder="+62 812 3456 7890"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            className="rounded-xl border-stone-300 focus:border-amber-600"
            required
          />
        </div>

        {/* Detail Reservasi */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="date" className="flex items-center space-x-2">
              <Calendar className="h-4 w-4 text-amber-600" />
              <span>Tanggal</span>
            </Label>
            <Input
              id="date"
              type="date"
              value={formData.date}
              onChange={(e) => handleChange("date", e.target.value)}
              className="rounded-xl border-stone-300 focus:border-amber-600"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="time" className="flex items-center space-x-2">
              <Clock className="h-4 w-4 text-amber-600" />
              <span>Waktu</span>
            </Label>
            <Select onValueChange={(value) => handleChange("time", value)}>
              <SelectTrigger className="rounded-xl border-stone-300 focus:border-amber-600">
                <SelectValue placeholder="Pilih waktu" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 14 }, (_, i) => {
                  const hour = i + 8
                  const time = `${hour.toString().padStart(2, "0")}:00`
                  return (
                    <SelectItem key={time} value={time}>
                      {time}
                    </SelectItem>
                  )
                })}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="guests" className="flex items-center space-x-2">
              <Users className="h-4 w-4 text-amber-600" />
              <span>Tamu</span>
            </Label>
            <Select onValueChange={(value) => handleChange("guests", value)}>
              <SelectTrigger className="rounded-xl border-stone-300 focus:border-amber-600">
                <SelectValue placeholder="Jumlah tamu" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 10 }, (_, i) => (
                  <SelectItem key={i + 1} value={(i + 1).toString()}>
                    {i + 1} {i === 0 ? "Tamu" : "Tamu"}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Permintaan Khusus */}
        <div className="space-y-2">
          <Label htmlFor="requests">Permintaan Khusus (Opsional)</Label>
          <Textarea
            id="requests"
            placeholder="Permintaan khusus atau kebutuhan diet..."
            value={formData.specialRequests}
            onChange={(e) => handleChange("specialRequests", e.target.value)}
            className="rounded-xl border-stone-300 focus:border-amber-600 min-h-[100px]"
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-amber-700 hover:bg-amber-800 text-white py-3 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105"
        >
          Konfirmasi Reservasi
        </Button>
      </form>
    </div>
  )
}
