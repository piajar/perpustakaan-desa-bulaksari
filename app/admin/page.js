import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default async function AdminDashboard() {
  const { count: totalBooks } = await supabase.from('books').select('*', { count: 'exact', head: true });
  const { count: activeMembers } = await supabase.from('members').select('*', { count: 'exact', head: true }).eq('status', 'Aktif');
  const { count: borrowedBooks } = await supabase.from('borrowings').select('*', { count: 'exact', head: true }).eq('status', 'Dipinjam');

  const { data: recentBooks } = await supabase
    .from('books')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(4);

  const displayBooks = recentBooks || [];

  const stats = [
    { title: "Total Koleksi Buku", value: totalBooks || 0, icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253", color: "bg-emerald-500", shadow: "shadow-emerald-500/20" },
    { title: "Buku Dipinjam", value: borrowedBooks || 0, icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4", color: "bg-blue-500", shadow: "shadow-blue-500/20" },
    { title: "Anggota Aktif", value: activeMembers || 0, icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z", color: "bg-orange-500", shadow: "shadow-orange-500/20" },
    { title: "Kunjungan Bulan Ini", value: "312", icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z", color: "bg-indigo-500", shadow: "shadow-indigo-500/20" },
  ];

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-800">Selamat datang kembali, Admin! 👋</h2>
        <p className="text-slate-500 mt-1">Berikut adalah ringkasan aktivitas perpustakaan hari ini.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex items-start gap-4 transition-transform hover:-translate-y-1">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white ${stat.color} shadow-lg ${stat.shadow} shrink-0`}>
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} /></svg>
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500 mb-1">{stat.title}</p>
              <h3 className="text-2xl font-bold text-slate-800">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Books */}
        <div className="lg:col-span-2 bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-slate-800">Buku Baru Ditambahkan</h3>
            <Link href="/admin/buku" className="text-sm font-bold text-emerald-600 hover:text-emerald-700">Lihat Semua</Link>
          </div>
          <div className="space-y-4">
            {displayBooks.map((book) => (
              <div key={book.id} className="flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-colors">
                <div className="w-12 h-16 bg-slate-200 rounded-lg overflow-hidden shrink-0">
                  {book.cover_image && <img src={book.cover_image} alt={book.title} className="w-full h-full object-cover" />}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-slate-800 truncate">{book.title}</h4>
                  <p className="text-sm text-slate-500 truncate">{book.author} • {book.category}</p>
                </div>
                <div className="shrink-0 text-right">
                  <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold ${book.stock > 0 ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'}`}>
                    Stok: {book.stock}
                  </span>
                </div>
              </div>
            ))}
            {displayBooks.length === 0 && (
              <div className="p-4 text-center text-slate-500 bg-slate-50 rounded-2xl">
                Belum ada buku yang ditambahkan.
              </div>
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-slate-900 rounded-3xl p-6 shadow-sm text-white relative overflow-hidden">
           <div className="absolute top-[-20%] right-[-10%] w-40 h-40 bg-emerald-500/30 rounded-full mix-blend-screen filter blur-3xl"></div>
          <h3 className="text-lg font-bold mb-6 relative z-10">Aksi Cepat</h3>
          <div className="space-y-3 relative z-10">
            <Link href="/admin/buku/tambah" className="w-full flex items-center gap-3 p-4 rounded-2xl bg-white/10 hover:bg-white/20 transition-colors text-left">
              <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
              </div>
              <div>
                <div className="font-bold">Tambah Buku Baru</div>
                <div className="text-xs text-slate-400">Input data koleksi ke katalog</div>
              </div>
            </Link>
            <button className="w-full flex items-center gap-3 p-4 rounded-2xl bg-white/10 hover:bg-white/20 transition-colors text-left">
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" /></svg>
              </div>
              <div>
                <div className="font-bold">Daftar Anggota</div>
                <div className="text-xs text-slate-400">Buat kartu untuk warga</div>
              </div>
            </button>
            <button className="w-full flex items-center gap-3 p-4 rounded-2xl bg-white/10 hover:bg-white/20 transition-colors text-left">
              <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
              </div>
              <div>
                <div className="font-bold">Catat Peminjaman</div>
                <div className="text-xs text-slate-400">Sirkulasi buku fisik</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
