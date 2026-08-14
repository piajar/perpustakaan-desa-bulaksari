import { supabase } from "@/lib/supabase";

export default async function PeminjamanPage() {
  const { data: borrowings, error } = await supabase
    .from('borrowings')
    .select(`
      *,
      members (nama),
      books (title)
    `)
    .order('created_at', { ascending: false });

  const displayPeminjaman = borrowings || [];

  const getStatusStyle = (status) => {
    switch (status) {
      case "Dipinjam":
        return "bg-blue-50 text-blue-700";
      case "Terlambat":
        return "bg-red-50 text-red-700";
      case "Dikembalikan":
        return "bg-emerald-50 text-emerald-700";
      default:
        return "bg-slate-100 text-slate-600";
    }
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Riwayat Peminjaman</h2>
          <p className="text-slate-500 mt-1">Catatan sirkulasi peminjaman dan pengembalian buku.</p>
        </div>
        <button className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold shadow-lg shadow-emerald-600/20 hover:-translate-y-0.5 transition-all flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" /></svg>
          Catat Peminjaman Baru
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white shrink-0">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Sedang Dipinjam</p>
            <p className="text-2xl font-bold text-blue-800">2</p>
          </div>
        </div>
        <div className="bg-red-50 border border-red-100 rounded-2xl p-5 flex items-center gap-4">
          <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center text-white shrink-0">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>
          <div>
            <p className="text-sm text-red-600 font-medium">Terlambat</p>
            <p className="text-2xl font-bold text-red-800">1</p>
          </div>
        </div>
        <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-5 flex items-center gap-4">
          <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center text-white shrink-0">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>
          <div>
            <p className="text-sm text-emerald-600 font-medium">Dikembalikan</p>
            <p className="text-2xl font-bold text-emerald-800">2</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center gap-4">
          <div className="relative flex-1">
            <svg className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            <input type="text" placeholder="Cari nama anggota atau judul buku..." className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-colors" />
          </div>
          <select className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 font-medium text-slate-600">
            <option>Semua Status</option>
            <option>Dipinjam</option>
            <option>Terlambat</option>
            <option>Dikembalikan</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left whitespace-nowrap">
            <thead>
              <tr className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider font-bold">
                <th className="px-6 py-4">Anggota</th>
                <th className="px-6 py-4">Judul Buku</th>
                <th className="px-6 py-4">Tgl. Pinjam</th>
                <th className="px-6 py-4">Tgl. Kembali</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {displayPeminjaman.map((p) => {
                const anggotaNama = p.members?.nama || "Unknown";
                const bukuTitle = p.books?.title || "Unknown";
                return (
                <tr key={p.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold text-sm shrink-0">
                        {anggotaNama.split(" ").map(n => n[0]).join("").slice(0, 2)}
                      </div>
                      <span className="font-bold text-slate-800">{anggotaNama}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-700 font-medium">{bukuTitle}</td>
                  <td className="px-6 py-4 text-slate-600 text-sm">{new Date(p.tgl_pinjam).toLocaleDateString('id-ID')}</td>
                  <td className="px-6 py-4 text-slate-600 text-sm">{new Date(p.tgl_kembali).toLocaleDateString('id-ID')}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold ${getStatusStyle(p.status)}`}>
                      {p.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    {p.status === "Dipinjam" && (
                      <button className="px-3 py-1.5 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 rounded-lg text-xs font-bold transition-colors">
                        Kembalikan
                      </button>
                    )}
                    {p.status === "Terlambat" && (
                      <button className="px-3 py-1.5 bg-red-50 text-red-700 hover:bg-red-100 rounded-lg text-xs font-bold transition-colors">
                        Proses Denda
                      </button>
                    )}
                  </td>
                </tr>
              )})}
              {displayPeminjaman.length === 0 && (
                <tr>
                  <td colSpan="6" className="px-6 py-10 text-center text-slate-500">
                    Belum ada riwayat peminjaman.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="p-6 border-t border-slate-100 flex items-center justify-between">
          <p className="text-sm text-slate-500">Menampilkan <span className="font-bold text-slate-700">{displayPeminjaman.length}</span> transaksi</p>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 disabled:opacity-50" disabled>Sebelumnya</button>
            <button className="px-3 py-1.5 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 disabled:opacity-50" disabled>Selanjutnya</button>
          </div>
        </div>
      </div>
    </div>
  );
}
