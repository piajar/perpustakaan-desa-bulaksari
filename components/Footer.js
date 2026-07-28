import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-emerald-950 text-emerald-50 border-t border-emerald-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-emerald-800 p-2 rounded-lg">
                <svg className="w-5 h-5 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">Perpus<span className="text-emerald-400">Desa</span></span>
            </div>
            <p className="text-emerald-200/70 text-sm leading-relaxed max-w-sm">
              Fasilitas publik yang dikelola oleh Pemerintah Desa Bulaksari untuk meningkatkan literasi dan pengetahuan warga.
            </p>
          </div>

          {/* Links Col */}
          <div>
            <h3 className="font-semibold text-white mb-4 uppercase tracking-wider text-xs">Akses Cepat</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-emerald-200/70 hover:text-white transition-colors text-sm flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-emerald-500"></span> Beranda
                </Link>
              </li>
              <li>
                <Link href="/katalog" className="text-emerald-200/70 hover:text-white transition-colors text-sm flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-emerald-500"></span> Katalog Buku
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-emerald-200/70 hover:text-white transition-colors text-sm flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-emerald-500"></span> Panel Admin
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h3 className="font-semibold text-white mb-4 uppercase tracking-wider text-xs">Kontak & Lokasi</h3>
            <ul className="space-y-3 text-sm text-emerald-200/70">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span>Balai Desa Bulaksari,<br />Kecamatan Bantarsari, Cilacap</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-emerald-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Senin - Jumat (14.00 - 16.00 WIB)</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-emerald-900 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-emerald-200/50 text-xs">
            &copy; {new Date().getFullYear()} Perpustakaan Desa Bulaksari.
          </p>
          <a href="https://bulaksari.desa.id" target="_blank" rel="noopener noreferrer" className="text-xs text-emerald-400 hover:text-emerald-300 transition-colors">
            Website Resmi Desa →
          </a>
        </div>
      </div>
    </footer>
  );
}
