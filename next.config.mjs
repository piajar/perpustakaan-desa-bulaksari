/** @type {import('next').NextConfig} */

// ==========================================
// TINGGAL UBAH DI SINI:
// true  = Mode Maintenance MENYALA
// false = Mode Maintenance MATI (Web Normal)
const isMaintenance = false; 
// ==========================================

const nextConfig = {
  async redirects() {
    // Jika isMaintenance bernilai false, website langsung berjalan normal tanpa pengalihan
    if (!isMaintenance) return [];

    // Jika isMaintenance bernilai true, kunci semua halaman ke /maintenance
    return [
      {
        source: '/((?!maintenance|api|_next/static|_next/image|favicon.ico).*)',
        destination: '/maintenance',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
