import Link from "next/link";
import Image from "next/image";

export default function BookCard({ book }) {
  return (
    <Link href={`/katalog/${book.slug}`} className="group flex flex-col bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
      
      {/* Cover Image */}
      <div className="relative aspect-[3/4] bg-slate-50 w-full overflow-hidden">
        {book.cover_image ? (
          <img 
            src={book.cover_image} 
            alt={book.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-emerald-200 bg-emerald-50/50">
            <svg className="w-16 h-16 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <span className="text-xs font-medium text-emerald-400">Tidak ada cover</span>
          </div>
        )}
        
        {/* Category Badge overlay */}
        {book.category && (
          <div className="absolute top-3 left-3 bg-white/90 backdrop-blur text-emerald-700 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm">
            {book.category}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-bold text-slate-800 text-lg leading-snug mb-1.5 group-hover:text-emerald-600 transition-colors line-clamp-2">
          {book.title}
        </h3>
        <p className="text-slate-500 text-sm mb-4 line-clamp-1">{book.author}</p>
        
        {/* Footer Card */}
        <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
          <div className={`text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1.5 ${book.stock > 0 ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${book.stock > 0 ? 'bg-emerald-500' : 'bg-red-500'}`}></span>
            {book.stock > 0 ? 'Tersedia' : 'Habis'}
          </div>
          <span className="text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0 font-semibold text-sm">
            Lihat →
          </span>
        </div>
      </div>
    </Link>
  );
}
