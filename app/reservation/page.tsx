import ReservationForm from "@/components/ReservationForm"
import { Clock, Users, Coffee, CheckCircle } from "lucide-react"

const benefits = [
  {
    icon: Clock,
    title: "Hindari Antrian",
    description: "Reservasi meja Anda dan hindari menunggu selama jam sibuk",
  },
  {
    icon: Users,
    title: "Sempurna untuk Grup",
    description: "Ideal untuk rapat bisnis, kencan, atau bersantai dengan teman",
  },
  {
    icon: Coffee,
    title: "Layanan Premium",
    description: "Dapatkan rekomendasi personal dari barista ahli kami",
  },
  {
    icon: CheckCircle,
    title: "Meja Terjamin",
    description: "Meja Anda akan siap ketika Anda tiba",
  },
]

export default function ReservationPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-playfair text-5xl font-bold text-stone-900 mb-4">Buat Reservasi</h1>
          <p className="text-stone-600 text-lg max-w-2xl mx-auto">
            Reservasi pengalaman kopi sempurna Anda. Baik untuk rapat bisnis, kencan romantis, atau santai
            bersama teman.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Manfaat */}
          <div className="space-y-8">
            <div>
              <h2 className="font-playfair text-3xl font-bold text-stone-900 mb-6">Mengapa Reservasi?</h2>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 animate-fade-in"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="bg-amber-100 p-3 rounded-full">
                      <benefit.icon className="h-6 w-6 text-amber-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-stone-900 mb-1">{benefit.title}</h3>
                      <p className="text-stone-600 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Informasi Tambahan */}
            <div className="bg-stone-50 rounded-2xl p-6">
              <h3 className="font-playfair text-xl font-bold text-stone-900 mb-4">Kebijakan Reservasi</h3>
              <ul className="space-y-2 text-stone-600 text-sm">
                <li>• Reservasi dapat dibuat hingga 30 hari sebelumnya</li>
                <li>• Harap tiba dalam 15 menit dari waktu reservasi</li>
                <li>• Untuk grup 8 orang atau lebih, silakan telepon kami langsung</li>
                <li>• Pembatalan dapat dilakukan hingga 2 jam sebelum reservasi</li>
                <li>• Kami akan mengirim email konfirmasi dengan semua detail</li>
              </ul>
            </div>

            {/* Kontak untuk Acara Khusus */}
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
              <h3 className="font-playfair text-xl font-bold text-amber-900 mb-2">Acara Khusus?</h3>
              <p className="text-amber-800 text-sm mb-4">
                Merencanakan pesta ulang tahun, acara perusahaan, atau perayaan khusus? Kami senang membantu membuatnya berkesan.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center text-amber-700 hover:text-amber-800 font-medium text-sm transition-colors"
              >
                Hubungi kami untuk acara khusus →
              </a>
            </div>
          </div>

          {/* Form Reservasi */}
          <div>
            <ReservationForm />
          </div>
        </div>
      </div>
    </div>
  )
}
