export default function MaintenancePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-slate-900 to-slate-950 text-slate-200 px-6 font-sans">
      <div className="max-w-md w-full text-center space-y-8 p-8 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm shadow-2xl">
        
        {/* Ikon Estetik / Logo Buku */}
        <div className="flex justify-center">
          <div className="p-4 bg-emerald-500/10 rounded-full border border-emerald-500/20 text-emerald-400 animate-pulse">
            <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
            </svg>
          </div>
        </div>

        {/* Teks Pengumuman */}
        <div className="space-y-3">
          <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Jendela Dunia Sedang Dirapikan
          </h1>
          <p className="text-sm text-slate-400 leading-relaxed">
            Website Perpustakaan Desa Bulaksari saat ini sedang dalam peningkatan sistem dan penataan katalog buku digital agar nantinya lebih nyaman diakses oleh warga.
          </p>
        </div>

        {/* Estimasi / Footer Informasi */}
        <div className="pt-6 border-t border-slate-800/60 text-xs text-slate-500 flex flex-col items-center space-y-2">
          <div className="flex items-center space-x-1.5 text-emerald-500/80 bg-emerald-500/5 px-2.5 py-1 rounded-full border border-emerald-500/10">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
            <span>Proses Pemeliharaan Sistem</span>
          </div>
          <p>Kami akan segera kembali. Terima kasih atas kesabaran Anda.</p>
        </div>

      </div>
    </div>
  );
}
