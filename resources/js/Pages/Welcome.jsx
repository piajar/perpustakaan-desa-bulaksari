import { Head, Link } from '@inertiajs/react';

export default function Welcome({ auth, featuredBooks }) {
    return (
        <>
            <Head title="Beranda - Perpustakaan Desa Bulaksari" />
            <div className="bg-gray-50 min-h-screen font-sans">
                {/* Navbar */}
                <nav className="bg-green-800 shadow-lg sticky top-0 z-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between h-16">
                            <div className="flex items-center gap-3">
                                {/* Ikon Buku */}
                                <div className="bg-green-600 p-2 rounded-lg">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                </div>
                                <Link href="/" className="text-white font-bold text-lg leading-tight">
                                    <span className="block text-green-300 text-xs font-normal tracking-wider">PERPUSTAKAAN</span>
                                    DESA BULAKSARI
                                </Link>
                            </div>
                            <div className="flex items-center gap-2">
                                {auth.user ? (
                                    <Link href={route('dashboard')} className="text-green-200 hover:text-white hover:bg-green-700 px-3 py-2 rounded-md font-medium transition">
                                        Dashboard Admin
                                    </Link>
                                ) : (
                                    <>
                                        <Link href={route('login')} className="text-green-200 hover:text-white px-3 py-2 rounded-md font-medium transition">
                                            Masuk
                                        </Link>
                                        <Link href={route('register')} className="bg-green-500 text-white hover:bg-green-400 px-4 py-2 rounded-md font-semibold transition">
                                            Daftar
                                        </Link>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Hero Section */}
                <div className="relative bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white overflow-hidden">
                    {/* Decorative circles */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-green-600 opacity-20 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-500 opacity-20 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                    
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                        <span className="inline-block bg-green-600/50 text-green-200 text-sm font-semibold px-4 py-1 rounded-full mb-4 border border-green-500/50">
                            📍 Bantarsan, Cilacap
                        </span>
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5 leading-tight">
                            Jendela Dunia Ada di<br/>
                            <span className="text-green-300">Desa Bulaksari</span>
                        </h1>
                        <p className="text-lg text-green-100 max-w-2xl mx-auto mb-8">
                            Temukan ribuan koleksi buku menarik. Dari buku pelajaran, novel fiksi,
                            hingga panduan pertanian dan peternakan modern untuk warga desa.
                        </p>
                        <div className="flex justify-center gap-4">
                            <a href="#katalog" className="bg-white text-green-800 px-6 py-3 rounded-full font-bold hover:bg-green-50 transition shadow-lg">
                                📚 Lihat Koleksi Buku
                            </a>
                            <Link href={route('login')} className="border-2 border-white text-white px-6 py-3 rounded-full font-bold hover:bg-white hover:text-green-800 transition">
                                Masuk Sekarang
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Info Strip */}
                <div className="bg-green-600 text-white py-3">
                    <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-6 text-sm font-medium">
                        <span className="flex items-center gap-2">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/></svg>
                            Jam Buka: Senin–Sabtu, 08.00–16.00 WIB
                        </span>
                        <span className="flex items-center gap-2">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
                            Gratis untuk Warga Desa Bulaksari
                        </span>
                    </div>
                </div>

                {/* Featured Books */}
                <main id="katalog" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-extrabold text-gray-900">Koleksi Buku Terbaru</h2>
                        <p className="text-gray-500 mt-2">Buku-buku baru yang bisa Anda pinjam di perpustakaan kami</p>
                        <div className="w-16 h-1 bg-green-600 mx-auto mt-4 rounded-full"></div>
                    </div>
                    
                    {featuredBooks && featuredBooks.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 gap-6">
                            {featuredBooks.map((book) => (
                                <Link href={`/katalog/${book.slug}`} key={book.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group flex flex-col">
                                    <div className="h-52 bg-gray-100 relative overflow-hidden">
                                        {book.cover_image ? (
                                            <img src={book.cover_image} alt={book.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center bg-green-50">
                                                <svg className="w-16 h-16 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                                </svg>
                                            </div>
                                        )}
                                        {book.category && (
                                            <span className="absolute top-2 left-2 bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded-md shadow">
                                                {book.category.name}
                                            </span>
                                        )}
                                    </div>
                                    <div className="p-4 flex flex-col flex-grow">
                                        <h3 className="text-base font-bold text-gray-900 leading-snug mb-1 group-hover:text-green-700 transition">{book.title}</h3>
                                        <p className="text-sm text-gray-500 mb-3">{book.author}</p>
                                        <div className="mt-auto flex items-center justify-between">
                                            <span className={`text-xs font-semibold px-2 py-1 rounded-full ${book.stock > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                                {book.stock > 0 ? `✓ Tersedia (${book.stock})` : '✗ Habis Dipinjam'}
                                            </span>
                                            <span className="text-green-600 text-sm font-semibold group-hover:underline">Detail →</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16 bg-white rounded-2xl border border-gray-100 shadow-sm">
                            <svg className="w-16 h-16 text-green-200 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                            <p className="text-gray-500 font-medium">Belum ada koleksi buku yang ditambahkan.</p>
                            <p className="text-gray-400 text-sm mt-1">Silakan hubungi petugas perpustakaan.</p>
                        </div>
                    )}
                </main>
                
                {/* Footer */}
                <footer className="bg-green-900 text-white py-10 mt-8">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                        <div className="flex justify-center items-center gap-3 mb-4">
                            <div className="bg-green-700 p-2 rounded-lg">
                                <svg className="w-6 h-6 text-green-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <span className="text-lg font-bold">Perpustakaan Desa Bulaksari</span>
                        </div>
                        <p className="text-green-400 text-sm">Bantarsan, Cilacap, Jawa Tengah</p>
                        <div className="border-t border-green-800 mt-6 pt-4">
                            <p className="text-green-500 text-sm">&copy; {new Date().getFullYear()} Perpustakaan Desa Bulaksari. Bagian dari{' '}
                                <a href="https://bulaksari.desa.id" className="text-green-400 hover:text-white underline transition" target="_blank" rel="noopener noreferrer">
                                    bulaksari.desa.id
                                </a>
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
