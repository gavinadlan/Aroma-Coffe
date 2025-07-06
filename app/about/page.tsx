import Image from "next/image"
import { Coffee, Users, Award, Heart, Leaf, Clock } from "lucide-react"

const values = [
  {
    icon: Coffee,
    title: "Kualitas Pertama",
    description: "Kami hanya menggunakan biji kopi terbaik dari perkebunan berkelanjutan di seluruh dunia.",
  },
  {
    icon: Users,
    title: "Komunitas",
    description: "Membangun koneksi satu cangkir demi cangkir, menciptakan lingkungan yang hangat dan ramah.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "Setiap cangkir dibuat dengan cinta dan dedikasi oleh barista kami yang terampil.",
  },
  {
    icon: Leaf,
    title: "Keberlanjutan",
    description: "Berkomitmen pada tanggung jawab lingkungan dan praktik sourcing yang etis.",
  },
]

const team = [
  {
    name: "Sarah Johnson",
    role: "Head Barista & Co-Founder",
    image: "/placeholder.svg?height=400&width=300",
    bio: "Dengan pengalaman 10+ tahun di dunia kopi, Sarah membawa keahlian dan passion ke setiap cangkir.",
  },
  {
    name: "Michael Chen",
    role: "Coffee Roaster",
    image: "/placeholder.svg?height=400&width=300",
    bio: "Keahlian roasting Michael memastikan setiap biji mencapai profil rasa yang sempurna.",
  },
  {
    name: "Emma Rodriguez",
    role: "Store Manager",
    image: "/placeholder.svg?height=400&width=300",
    bio: "Emma menciptakan suasana hangat dan ramah yang membuat Aroma terasa seperti rumah.",
  },
]

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20">
      {/* Bagian Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h1 className="font-playfair text-5xl font-bold text-stone-900 mb-6">Cerita Kami</h1>
            <p className="text-stone-600 text-lg leading-relaxed mb-6">
              Didirikan pada tahun 2020 dengan misi sederhana: menyajikan kopi istimewa di ruang tempat komunitas berkembang.
              Yang dimulai sebagai mimpi antara dua pecinta kopi telah berkembang menjadi destinasi kopi favorit Jakarta.
            </p>
            <p className="text-stone-600 text-lg leading-relaxed mb-8">
              Kami percaya bahwa kopi lebih dari sekadar minuman—ini adalah katalis untuk koneksi, kreativitas, dan
              kenyamanan. Setiap cangkir yang kami sajikan adalah bukti komitmen kami terhadap kualitas, keberlanjutan, dan seni
              pembuatan kopi.
            </p>
            <div className="flex items-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-700">4+</div>
                <div className="text-stone-600">Tahun Melayani</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-700">50K+</div>
                <div className="text-stone-600">Pelanggan Puas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-700">15+</div>
                <div className="text-stone-600">Asal Kopi</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/placeholder.svg?height=600&width=500"
              alt="Interior coffee shop"
              width={500}
              height={600}
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3">
                <Award className="h-8 w-8 text-amber-600" />
                <div>
                  <h4 className="font-semibold text-stone-900">Coffee Shop Terbaik</h4>
                  <p className="text-stone-600 text-sm">Jakarta 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bagian Nilai */}
      <section className="bg-stone-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold text-stone-900 mb-4">Nilai-Nilai Kami</h2>
            <p className="text-stone-600 text-lg max-w-2xl mx-auto">
              Prinsip-prinsip yang memandu semua yang kami lakukan, dari sourcing biji hingga melayani pelanggan.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center group animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <value.icon className="h-10 w-10 text-amber-700" />
                </div>
                <h3 className="font-playfair text-xl font-bold text-stone-900 mb-3">{value.title}</h3>
                <p className="text-stone-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bagian Tim */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold text-stone-900 mb-4">Tim Kami</h2>
            <p className="text-stone-600 text-lg max-w-2xl mx-auto">
              Orang-orang yang penuh passion di balik setiap cangkir sempurna, berdedikasi untuk membuat pengalaman kopi Anda istimewa.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="text-center group animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={400}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="font-playfair text-xl font-bold text-stone-900 mb-2">{member.name}</h3>
                <p className="text-amber-700 font-medium mb-3">{member.role}</p>
                <p className="text-stone-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bagian Misi */}
      <section className="bg-stone-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-4xl font-bold mb-6">Misi Kami</h2>
              <p className="text-stone-300 text-lg leading-relaxed mb-6">
                Menciptakan ruang di mana kopi istimewa bertemu dengan komunitas yang tulus. Kami berkomitmen untuk sourcing
                secara etis, brewing dengan ahli, dan melayani dengan hati.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Clock className="h-6 w-6 text-amber-400 flex-shrink-0" />
                  <span className="text-stone-300">Kualitas konsisten di setiap cangkir, setiap waktu</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Leaf className="h-6 w-6 text-amber-400 flex-shrink-0" />
                  <span className="text-stone-300">Praktik berkelanjutan dari kebun hingga cangkir</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="h-6 w-6 text-amber-400 flex-shrink-0" />
                  <span className="text-stone-300">Membangun hubungan yang langgeng dengan komunitas kami</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Biji kopi dan peralatan brewing"
                width={600}
                height={500}
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
