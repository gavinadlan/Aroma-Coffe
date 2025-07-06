import { MapPin, Phone, Clock, Mail, Car, Train, Bus } from "lucide-react"

export default function LocationPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-playfair text-5xl font-bold text-stone-900 mb-4">Kunjungi Kami</h1>
          <p className="text-stone-600 text-lg max-w-2xl mx-auto">
            Berada di jantung Jakarta, kami mudah diakses dan siap menyambut Anda dengan cangkir kopi yang sempurna.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Informasi Kontak */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="font-playfair text-2xl font-bold text-stone-900 mb-6">Informasi Kontak</h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-amber-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-1">Alamat</h3>
                    <p className="text-stone-600">Jl. Kopi No. 123</p>
                    <p className="text-stone-600">Jakarta Pusat 12345</p>
                    <p className="text-stone-600">Indonesia</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-amber-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-1">Telepon</h3>
                    <p className="text-stone-600">+62 21 1234 5678</p>
                    <p className="text-stone-600">+62 812 3456 7890</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-amber-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-1">Email</h3>
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

            {/* Transportasi */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="font-playfair text-2xl font-bold text-stone-900 mb-6">Cara Menuju Kesini</h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Car className="h-6 w-6 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-1">Dengan Mobil</h3>
                    <p className="text-stone-600 text-sm">
                      Parkir gratis tersedia. Berada 5 menit dari Thamrin City.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Train className="h-6 w-6 text-green-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-1">Dengan MRT</h3>
                    <p className="text-stone-600 text-sm">Stasiun Bundaran HI - 10 menit jalan kaki</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <Bus className="h-6 w-6 text-orange-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-1">Dengan Bus</h3>
                    <p className="text-stone-600 text-sm">TransJakarta Koridor 1 - Halte Sarinah</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Peta */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="font-playfair text-2xl font-bold text-stone-900 mb-6">Temukan Kami di Peta</h2>

            <div className="bg-stone-200 rounded-xl h-96 flex items-center justify-center mb-6">
              <div className="text-center text-stone-600">
                <MapPin className="h-16 w-16 mx-auto mb-4 text-amber-700" />
                <p className="text-xl font-medium mb-2">Peta Interaktif</p>
                <p className="text-sm mb-2">Integrasi Google Maps akan ditempatkan di sini</p>
                <p className="text-xs">Jl. Kopi No. 123, Jakarta Pusat 12345</p>
              </div>
            </div>

            <div className="bg-stone-50 rounded-lg p-4">
              <h3 className="font-semibold text-stone-900 mb-2">Tempat Terdekat</h3>
              <ul className="text-stone-600 text-sm space-y-1">
                <li>• Plaza Indonesia (2 menit jalan kaki)</li>
                <li>• Grand Indonesia Mall (3 menit jalan kaki)</li>
                <li>• Hotel Indonesia Kempinski (5 menit jalan kaki)</li>
                <li>• Bundaran HI (8 menit jalan kaki)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Seruan untuk Bertindak */}
        <div className="mt-16 bg-stone-900 rounded-2xl p-12 text-center text-white">
          <h2 className="font-playfair text-3xl font-bold mb-4">Siap Berkunjung?</h2>
          <p className="text-stone-300 mb-6 max-w-2xl mx-auto">
            Kami tidak sabar untuk menyajikan Anda cangkir kopi yang sempurna. Buat reservasi atau langsung datang saja - kami selalu
            senang menyambut teman baru!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/reservation"
              className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              Buat Reservasi
            </a>
            <a
              href="tel:+622112345678"
              className="border border-white text-white hover:bg-white hover:text-stone-900 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              Telepon Sekarang
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
