import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookCard from "@/components/BookCard";
import { supabase } from "@/lib/supabase";

export const metadata = {
  title: "Katalog Buku - Perpustakaan Desa Bulaksari",
  description: "Jelajahi berbagai koleksi buku yang tersedia di Perpustakaan Desa Bulaksari.",
};

export default async function Katalog() {
  const { data: books, error } = await supabase
    .from('books')
    .select('*')
    .order('created_at', { ascending: false });

  const displayBooks = books || [];

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
            {displayBooks.map(book => (
              <BookCard key={book.id} book={book} />
            ))}
            {displayBooks.length === 0 && (
              <div className="col-span-full py-16 flex flex-col items-center justify-center text-slate-500">
                <svg className="w-16 h-16 mb-4 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                <p className="text-lg font-medium">Belum ada buku di katalog.</p>
                <p className="text-sm">Silakan import data dari Supabase atau tambahkan lewat panel admin.</p>
              </div>
            )}
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
