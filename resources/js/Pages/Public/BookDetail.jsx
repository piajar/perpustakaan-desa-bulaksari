import { Head, Link } from '@inertiajs/react';

export default function BookDetail({ auth, book }) {
    return (
        <>
            <Head title={`${book.title} - Perpustakaan Desa Bulaksari`} />
            <div className="bg-gray-50 min-h-screen font-sans">
                {/* Navbar */}
                <nav className="bg-green-800 shadow-lg sticky top-0 z-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between h-16">
                            <div className="flex items-center gap-3">
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
                                    <Link href={route('login')} className="text-green-200 hover:text-white hover:bg-green-700 px-3 py-2 rounded-md font-medium transition">
                                        Masuk
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Breadcrumb */}
                <div className="bg-green-50 border-b border-green-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Link href="/" className="text-green-700 hover:text-green-900 font-medium transition">Beranda</Link>
                            <span>/</span>
                            <span className="text-gray-700 font-semibold truncate">{book.title}</span>
                        </div>
                    </div>
                </div>

                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                            {/* Gambar Cover */}
                            <div className="md:col-span-1 bg-green-50 p-8 flex items-center justify-center border-r border-gray-100">
                                <div className="bg-white rounded-xl h-72 w-full max-w-xs flex items-center justify-center overflow-hidden shadow-md border border-gray-200">
                                    {book.cover_image ? (
                                        <img src={book.cover_image} alt={book.title} className="w-full h-full object-cover" />
                                    ) : (
                                        <div className="flex flex-col items-center justify-center text-green-300">
                                            <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                            </svg>
                                            <span className="text-sm mt-2">Tidak ada gambar</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                            
                            {/* Detail Informasi */}
                            <div className="md:col-span-2 p-8 flex flex-col">
                                {book.category && (
                                    <span className="inline-block self-start bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full mb-4">
                                        {book.category.name}
                                    </span>
                                )}
                                <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 leading-tight">{book.title}</h1>
                                <p className="text-xl text-gray-500 mb-6">
                                    oleh <span className="font-semibold text-green-700">{book.author}</span>
                                </p>
                                
                                {/* Info Grid */}
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 bg-green-50 p-4 rounded-xl border border-green-100">
                                    <div>
                                        <p className="text-xs text-green-600 uppercase tracking-wider font-bold mb-1">Penerbit</p>
                                        <p className="font-semibold text-gray-800 text-sm">{book.publisher || '-'}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-green-600 uppercase tracking-wider font-bold mb-1">ISBN</p>
                                        <p className="font-semibold text-gray-800 text-sm">{book.isbn || '-'}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-green-600 uppercase tracking-wider font-bold mb-1">Stok Tersedia</p>
                                        <p className="font-bold text-gray-800 text-lg">{book.stock}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-green-600 uppercase tracking-wider font-bold mb-1">Status</p>
                                        <span className={`inline-block mt-1 px-3 py-1 text-xs font-bold rounded-full ${book.stock > 0 ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                                            {book.stock > 0 ? '✓ Tersedia' : '✗ Habis'}
                                        </span>
                                    </div>
                                </div>

                                {/* Sinopsis */}
                                <div className="mb-8 flex-grow">
                                    <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                                        <span className="w-1 h-5 bg-green-600 rounded-full inline-block"></span>
                                        Sinopsis
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                                        {book.synopsis || 'Belum ada sinopsis untuk buku ini.'}
                                    </p>
                                </div>

                                {/* CTA */}
                                <div>
                                    {auth.user ? (
                                        <button className="w-full md:w-auto px-8 py-3 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition shadow-lg shadow-green-200 flex items-center gap-2">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                            </svg>
                                            Ajukan Peminjaman
                                        </button>
                                    ) : (
                                        <div className="bg-green-50 border border-green-200 p-4 rounded-xl">
                                            <p className="text-green-800 text-sm font-medium">
                                                Silakan{' '}
                                                <Link href={route('login')} className="font-bold underline text-green-700 hover:text-green-900">Masuk</Link>{' '}
                                                atau{' '}
                                                <Link href={route('register')} className="font-bold underline text-green-700 hover:text-green-900">Daftar</Link>{' '}
                                                untuk meminjam buku ini dari perpustakaan.
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6">
                        <Link href="/" className="text-green-700 hover:text-green-900 font-semibold flex items-center gap-1 transition">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Kembali ke Beranda
                        </Link>
                    </div>
                </main>

                {/* Footer */}
                <footer className="bg-green-900 text-white py-8 mt-10">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                        <p className="text-green-500 text-sm">&copy; {new Date().getFullYear()} Perpustakaan Desa Bulaksari &mdash;{' '}
                            <a href="https://bulaksari.desa.id" className="text-green-400 hover:text-white underline transition" target="_blank" rel="noopener noreferrer">
                                bulaksari.desa.id
                            </a>
                        </p>
                    </div>
                </footer>
            </div>
        </>
    );
}
