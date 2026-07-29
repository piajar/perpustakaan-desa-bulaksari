import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { dummyBooks } from "@/lib/dummyData";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const book = dummyBooks.find(b => b.slug === resolvedParams.slug);
  if (!book) return { title: 'Buku Tidak Ditemukan' };
  return { title: `${book.title} - Perpustakaan Desa Bulaksari` };
}

export default async function BookDetail({ params }) {
  const resolvedParams = await params;
  const book = dummyBooks.find(b => b.slug === resolvedParams.slug);
  
  if (!book) {
    notFound();
  }

  return (
    <>
      <Navbar />
      
      <main className="flex-1 bg-slate-50 pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm font-medium text-slate-500 mb-8">
            <Link href="/" className="hover:text-emerald-600 transition-colors">Beranda</Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <Link href="/katalog" className="hover:text-emerald-600 transition-colors">Katalog</Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <span className="text-slate-800 line-clamp-1">{book.title}</span>
          </div>

          <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-slate-100 flex flex-col md:flex-row gap-10">
            
            {/* Left: Image */}
            <div className="w-full md:w-1/3 lg:w-1/4 shrink-0">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-slate-100 shadow-xl shadow-slate-200/50 border border-slate-200">
                {book.cover_image ? (
                  <img src={book.cover_image} alt={book.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-emerald-300">
                    <svg className="w-20 h-20 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                    <span className="text-sm font-medium">Tidak ada cover</span>
                  </div>
                )}
              </div>
            </div>

            {/* Right: Info */}
            <div className="flex-1">
              <div className="inline-block bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg mb-4">
                {book.category}
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-2 leading-tight">
                {book.title}
              </h1>
              <p className="text-xl text-slate-500 mb-8 font-medium">
                Karya <span className="text-emerald-700 font-bold">{book.author}</span>
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 mb-8">
                <div>
                  <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1">Status</div>
                  <div className={`text-sm font-bold flex items-center gap-1.5 ${book.stock > 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                    <span className={`w-2 h-2 rounded-full ${book.stock > 0 ? 'bg-emerald-500' : 'bg-red-500'}`}></span>
                    {book.stock > 0 ? 'Tersedia' : 'Habis Dipinjam'}
                  </div>
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1">Stok</div>
                  <div className="text-sm font-bold text-slate-800">{book.stock} Eksemplar</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1">Penerbit</div>
                  <div className="text-sm font-bold text-slate-800">Gramedia (Contoh)</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1">Tahun</div>
                  <div className="text-sm font-bold text-slate-800">2023</div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="font-bold text-lg text-slate-800 mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block"></span>
                  Sinopsis Buku
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Buku ini membahas secara mendalam mengenai topik yang sangat relevan untuk kebutuhan warga desa. Disusun dengan bahasa yang mudah dipahami, diharapkan buku ini dapat memberikan wawasan baru dan meningkatkan pengetahuan pembaca. Terdapat berbagai ilustrasi menarik yang membantu mempermudah pemahaman materi.
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100">
                <button className="w-full md:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-emerald-600/20 hover:-translate-y-0.5 flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                  Datang ke Perpustakaan untuk Meminjam
                </button>
                <p className="text-xs text-slate-500 mt-3 text-center md:text-left">
                  Peminjaman fisik dilakukan langsung di perpustakaan dengan menunjukkan KTP Desa Bulaksari.
                </p>
              </div>

            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
