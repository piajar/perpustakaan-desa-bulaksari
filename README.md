<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=250&section=header&text=Perpustakaan%20Desa%20Bulaksari&fontSize=50&animation=fadeIn&fontAlignY=35" alt="Header Perpustakaan" width="100%" />

  # 📚 Sistem Informasi Perpustakaan Desa Bulaksari

  *Membangun Literasi, Memajukan Desa.*

  [![Status](https://img.shields.io/badge/Status-Dalam_Pengembangan-success.svg?style=for-the-badge)]()
  [![License](https://img.shields.io/badge/Lisensi-MIT-blue.svg?style=for-the-badge)]()
  [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge)]()
</div>

---

## 📖 Tentang Proyek

Sistem Informasi **Perpustakaan Desa Bulaksari** adalah platform digital berbasis web yang dirancang khusus untuk mempermudah tata kelola perpustakaan di tingkat desa. Dengan antarmuka yang ramah pengguna, sistem ini membantu pustakawan dalam mendata buku, mengelola anggota, serta melacak transaksi sirkulasi (peminjaman dan pengembalian) secara efisien dan transparan.

---

## ✨ Fitur Unggulan

- 📊 **Dasbor Interaktif**: Ringkasan real-time jumlah buku, anggota aktif, dan grafik peminjaman bulanan.
- 📚 **Katalog Pintar**: Pencarian buku tingkat lanjut berdasarkan judul, pengarang, kategori, atau ISBN.
- 👥 **Manajemen Keanggotaan**: Pendaftaran warga desa sebagai anggota, lengkap dengan fitur cetak kartu perpustakaan otomatis.
- 🔄 **Sistem Sirkulasi**: Alur peminjaman dan pengembalian yang mudah dengan notifikasi denda jika terjadi keterlambatan.
- 📱 **Desain Responsif**: Tampilan yang rapi dan nyaman digunakan melalui Komputer, Tablet, maupun Smartphone.

---

## 📈 Alur Sistem (Grafik Interaktif)

*(Grafik di bawah ini menggunakan Mermaid.js yang akan otomatis ter-render menjadi diagram interaktif di GitHub)*

```mermaid
sequenceDiagram
    autonumber
    actor Anggota
    participant Sistem as 💻 Sistem Web
    actor Pustakawan

    Anggota->>Sistem: Cari Buku di Katalog
    Sistem-->>Anggota: Tampilkan Hasil (Rak & Ketersediaan)
    Anggota->>Pustakawan: Serahkan Buku Fisik & Kartu
    Pustakawan->>Sistem: Scan/Input ID Anggota & Kode Buku
    Sistem->>Sistem: Validasi Status & Limit Pinjaman
    
    alt Validasi Berhasil
        Sistem-->>Pustakawan: Peminjaman Disetujui
        Pustakawan-->>Anggota: Serahkan Buku beserta Bukti Pinjam
    else Validasi Gagal (Denda/Limit)
        Sistem-->>Pustakawan: Muncul Peringatan Merah!
        Pustakawan-->>Anggota: Minta Penyelesaian Denda/Kembalikan Buku Lama
    end
```

---

## 🛠️ Teknologi yang Digunakan

| Komponen | Teknologi / Framework |
| :--- | :--- |
| **Frontend & API** | ![Next JS](https://img.shields.io/badge/Next-black?style=flat&logo=next.js&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=flat&logo=tailwind-css&logoColor=white) |
| **Database & Auth** | ![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=flat&logo=supabase&logoColor=white) ![PostgreSQL](https://img.shields.io/badge/postgresql-%23316192.svg?style=flat&logo=postgresql&logoColor=white) |
| **Deployment** | ![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=flat&logo=vercel&logoColor=white) |

---

## 🚀 Panduan Instalasi (Local Development)

Berikut adalah panduan langkah demi langkah untuk menjalankan sistem ini di komputer Anda:

<details>
  <summary><b>🛠️ Klik di sini untuk melihat langkah instalasi</b></summary>
  
  <br>

  1. **Clone Repositori:**
     ```bash
     git clone https://github.com/USERNAME_KAMU/perpustakaan-desa-bulaksari.git
     ```
  2. **Masuk ke Direktori Proyek:**
     ```bash
     cd perpustakaan-desa-bulaksari
     ```
  3. **Instal Dependensi:**
     ```bash
     npm install
     ```
  4. **Konfigurasi Environment (Jika sudah terhubung Supabase):**
     - Buat file `.env.local`
     - Tambahkan API keys dari dashboard Supabase Anda:
       ```env
       NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
       NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
       ```
  5. **Mulai Server Lokal:**
     ```bash
     npm run dev
     ```
     Buka web browser dan akses: `http://localhost:3000`

</details>

---

## 📸 Cuplikan Layar (Screenshots)

Berikut adalah antarmuka sistem kami:

| Halaman Dasbor | Halaman Katalog Buku |
|:---:|:---:|
| <img src="https://via.placeholder.com/400x250.png?text=Dashboard+Aplikasi" alt="Dasbor"> | <img src="https://via.placeholder.com/400x250.png?text=Katalog+Buku" alt="Katalog"> |

*(Catatan: Ganti URL gambar placeholder di atas dengan path gambar asli aplikasi Anda yang ada di folder `docs` atau `assets/img`)*

---

## 🤝 Cara Berkontribusi

Kami sangat menyambut baik kontribusi Anda untuk mengembangkan perpustakaan desa ini! 
- **Bug Reports:** Gunakan fitur *Issues* untuk melaporkan bug.
- **Pull Requests:** 
  1. *Fork* proyek ini.
  2. Buat *branch* fitur Anda (`git checkout -b fitur/NamaFitur-Baru`).
  3. Lakukan *commit* (`git commit -m 'Menambahkan fitur X'`).
  4. *Push* ke *branch* (`git push origin fitur/NamaFitur-Baru`).
  5. Buka *Pull Request*.

---

## 📄 Lisensi

Proyek ini menggunakan Lisensi **MIT**. Anda bebas untuk menggunakan, menyalin, dan memodifikasi proyek ini. Lihat file [LICENSE](./LICENSE) untuk detail lebih lanjut.

---

<div align="center">
  <sub>Dibuat dengan ❤️ untuk kemajuan literasi <b>Desa Bulaksari</b></sub>
</div>
