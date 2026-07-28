import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookCard from "@/components/BookCard";
import { dummyBooks } from "@/lib/dummyData";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      
      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-emerald-950 overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-emerald-800/30 blur-3xl mix-blend-screen"></div>
            <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-emerald-600/20 blur-3xl mix-blend-screen"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark text-emerald-300 text-xs font-semibold mb-8 uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Pusat Literasi Warga
            </span>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight">
              Jendela Dunia Ada di <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-emerald-500">
                Desa Bulaksari
              </span>
            </h1>
            
            <p className="text-emerald-100/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
              Temukan ribuan koleksi buku menarik. Dari buku pelajaran, novel, hingga panduan pertanian modern untuk kesejahteraan warga desa.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
              <Link href="/katalog" className="w-full sm:w-auto px-8 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-white rounded-full font-bold transition-all shadow-lg shadow-emerald-500/30 hover:-translate-y-1">
                Jelajahi Koleksi 📚
              </Link>
              <Link href="#layanan" className="w-full sm:w-auto px-8 py-3.5 bg-emerald-900/50 hover:bg-emerald-800 border border-emerald-700 text-white rounded-full font-semibold transition-all backdrop-blur-sm">
                Lihat Layanan
              </Link>
            </div>
            
            {/* Floating Stats */}
            <div className="mt-16 lg:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                { label: "Koleksi Buku", value: "2,500+" },
                { label: "Anggota Aktif", value: "450+" },
                { label: "Kunjungan/Bulan", value: "1,200" },
                { label: "E-Books", value: "300+" }
              ].map((stat, i) => (
                <div key={i} className="glass-dark rounded-2xl p-4 transform hover:-translate-y-1 transition-transform">
                  <div className="text-2xl md:text-3xl font-black text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-emerald-300 font-medium uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INFO STRIP */}
        <div className="bg-emerald-600 text-emerald-50 py-4 shadow-inner">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 text-sm font-medium">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>Senin–Sabtu, 08.00–16.00 WIB</span>
            </div>
            <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              <span>Gratis Peminjaman untuk Warga Bulaksari</span>
            </div>
          </div>
        </div>

        {/* LAYANAN SECTION */}
        <section id="layanan" className="py-20 lg:py-32 bg-slate-50 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-emerald-600 font-bold tracking-widest uppercase text-sm mb-3">Layanan Kami</h2>
              <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Lebih Dari Sekadar Tempat Membaca</h3>
              <p className="text-slate-600">Perpustakaan Desa Bulaksari menyediakan berbagai fasilitas untuk mendukung kegiatan edukasi dan literasi masyarakat.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  title: "Peminjaman Buku", 
                  desc: "Akses ribuan buku fisik yang bisa dipinjam secara gratis oleh seluruh warga desa yang terdaftar.",
                  icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                },
                { 
                  title: "Ruang Baca Nyaman", 
                  desc: "Fasilitas ruang baca ber-AC, tempat duduk yang nyaman, dan akses WiFi gratis untuk belajar.",
                  icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                },
                { 
                  title: "Kegiatan Literasi", 
                  desc: "Berbagai program rutin seperti mendongeng untuk anak, bedah buku, dan pelatihan keterampilan warga.",
                  icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                }
              ].map((service, i) => (
                <div key={i} className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:border-emerald-100 transition-all duration-300 group">
                  <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors">
                    <svg className="w-7 h-7 text-emerald-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-slate-800 mb-3">{service.title}</h4>
                  <p className="text-slate-500 leading-relaxed text-sm">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* KOLEKSI TERBARU */}
        <section className="py-20 lg:py-32 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-emerald-600 font-bold tracking-widest uppercase text-sm mb-3">Katalog</h2>
                <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900">Buku Terbaru</h3>
              </div>
              <Link href="/katalog" className="text-emerald-600 font-semibold hover:text-emerald-700 flex items-center gap-1 group">
                Lihat Semua Koleksi 
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {dummyBooks.map(book => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          </div>
        </section>

        {/* TENTANG KAMI */}
        <section className="py-20 lg:py-32 bg-emerald-900 text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 pointer-events-none">
            <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
              <path fill="currentColor" d="M0,0 L100,0 L100,100 L50,100 Z" />
            </svg>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-emerald-400 font-bold tracking-widest uppercase text-sm mb-3">Tentang Kami</h2>
                <h3 className="text-3xl md:text-4xl font-extrabold mb-6">Membangun Masa Depan Lewat Membaca</h3>
                <p className="text-emerald-100/80 leading-relaxed mb-6">
                  Perpustakaan Desa Bulaksari didirikan pada tahun 2020 sebagai wujud komitmen perangkat desa untuk meningkatkan kualitas sumber daya manusia. Kami percaya bahwa akses informasi yang mudah adalah kunci kemajuan sebuah desa.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "Koleksi buku ter-update",
                    "Sistem peminjaman digital",
                    "Program literasi berkelanjutan"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-emerald-50 font-medium">
                      <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative z-10 border-4 border-emerald-800">
                  <img src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800&auto=format&fit=crop" alt="Perpustakaan" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-6 -left-6 w-full h-full rounded-3xl border-2 border-emerald-500/30 z-0"></div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
