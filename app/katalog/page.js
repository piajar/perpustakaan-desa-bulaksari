import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookCard from "@/components/BookCard";
import { dummyBooks } from "@/lib/dummyData";

export const metadata = {
  title: "Katalog Buku - Perpustakaan Desa Bulaksari",
  description: "Jelajahi berbagai koleksi buku yang tersedia di Perpustakaan Desa Bulaksari.",
};

export default function Katalog() {
  return (
    <>
      <Navbar />
      
      <main className="flex-1 bg-slate-50 pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-100 mb-10">
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Katalog Buku</h1>
            <p className="text-slate-600 mb-8 max-w-2xl">
              Gunakan fitur pencarian di bawah untuk menemukan buku yang Anda inginkan. Anda bisa mencari berdasarkan judul, penulis, atau kategori.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </div>
                <input 
                  type="text" 
                  placeholder="Cari judul atau penulis..." 
                  className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all text-sm font-medium text-slate-800"
                />
              </div>
              <div className="w-full md:w-64">
                <select className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all text-sm font-medium text-slate-700 cursor-pointer">
                  <option value="">Semua Kategori</option>
                  <option value="pertanian">Pertanian</option>
                  <option value="sejarah">Sejarah</option>
                  <option value="fiksi">Fiksi</option>
                  <option value="ekonomi">Ekonomi</option>
                </select>
              </div>
              <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-3.5 rounded-xl font-bold transition-colors shadow-sm">
                Cari
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {dummyBooks.map(book => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
