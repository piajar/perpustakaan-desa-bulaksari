"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function TambahBukuPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.target);
    const title = formData.get("title");
    
    // Auto-generate slug from title
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

    const newBook = {
      nomor_inventaris: formData.get("nomor_inventaris"),
      title: title,
      slug: slug,
      author: formData.get("author"),
      penerbit: formData.get("penerbit"),
      tahun_terbit: formData.get("tahun_terbit"),
      category: formData.get("category"),
      sumber: formData.get("sumber"),
      stock: parseInt(formData.get("stock")) || 1,
      keterangan: formData.get("keterangan"),
      tanggal_terima: new Date().toLocaleDateString('id-ID'), // format: DD/MM/YYYY
    };

    const { error: insertError } = await supabase.from('books').insert([newBook]);

    setLoading(false);

    if (insertError) {
      setError(insertError.message);
    } else {
      router.push("/admin/buku");
      router.refresh();
    }
  };

  return (
    <div className="max-w-4xl">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/buku" className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-xl transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
        </Link>
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Tambah Buku Baru</h2>
          <p className="text-slate-500 mt-1">Masukkan data inventaris buku secara manual.</p>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6 md:p-10">
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 rounded-xl text-sm font-medium">
            Error: {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Field Nomor Inventaris */}
            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-slate-700 mb-2">Nomor Inventaris <span className="text-red-500">*</span></label>
              <input 
                type="text" 
                name="nomor_inventaris"
                required
                placeholder="Contoh: PERPUSTAKAAN GOLET ILMU 398.209.598 RID a" 
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors"
              />
            </div>

            {/* Field Judul Buku */}
            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-slate-700 mb-2">Judul Buku <span className="text-red-500">*</span></label>
              <input 
                type="text" 
                name="title"
                required
                placeholder="Judul lengkap buku" 
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors"
              />
            </div>

            {/* Field Pengarang */}
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Pengarang</label>
              <input 
                type="text" 
                name="author"
                placeholder="Nama penulis" 
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors"
              />
            </div>

            {/* Field Penerbit */}
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Penerbit</label>
              <input 
                type="text" 
                name="penerbit"
                placeholder="Nama penerbit" 
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors"
              />
            </div>

            {/* Field Tahun Terbit & Stok */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Tahun Terbit</label>
                <input 
                  type="text" 
                  name="tahun_terbit"
                  placeholder="Contoh: 2023" 
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Stok (Jumlah)</label>
                <input 
                  type="number" 
                  name="stock"
                  defaultValue="1"
                  min="0"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors"
                />
              </div>
            </div>

            {/* Field Kategori / Subjek */}
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Kategori / Subjek</label>
              <input 
                type="text" 
                name="category"
                placeholder="Contoh: 700 Seni & Rekreasi" 
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors"
              />
            </div>

            {/* Field Sumber */}
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Sumber</label>
              <input 
                type="text" 
                name="sumber"
                placeholder="Asal buku (Milik Desa / Sumbangan / dll)" 
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors"
              />
            </div>

            {/* Field Keterangan */}
            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-slate-700 mb-2">Keterangan / Deskripsi</label>
              <textarea 
                name="keterangan"
                rows="3"
                placeholder="Catatan tambahan atau sinopsis singkat" 
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors"
              ></textarea>
            </div>

          </div>

          <div className="pt-6 border-t border-slate-100 flex justify-end">
            <button 
              type="submit" 
              disabled={loading}
              className="px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-emerald-600/20 disabled:opacity-50 flex items-center gap-2"
            >
              {loading ? "Menyimpan..." : "Simpan Data Buku"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
