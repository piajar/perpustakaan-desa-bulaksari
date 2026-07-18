import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function BooksIndex({ books, categories }) {
    const { flash } = usePage().props;
    const [isEditing, setIsEditing] = useState(false);
    const [currentBook, setCurrentBook] = useState(null);
    const [showForm, setShowForm] = useState(false);

    const { data, setData, post, put, delete: destroy, reset, errors, processing } = useForm({
        title: '',
        author: '',
        publisher: '',
        isbn: '',
        synopsis: '',
        stock: 1,
        category_id: '',
        cover_image: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEditing) {
            put(route('books.update', currentBook.id), {
                onSuccess: () => { reset(); setIsEditing(false); setCurrentBook(null); setShowForm(false); },
            });
        } else {
            post(route('books.store'), {
                onSuccess: () => { reset(); setShowForm(false); },
            });
        }
    };

    const handleEdit = (book) => {
        setIsEditing(true);
        setCurrentBook(book);
        setShowForm(true);
        setData({
            title: book.title,
            author: book.author,
            publisher: book.publisher || '',
            isbn: book.isbn || '',
            synopsis: book.synopsis || '',
            stock: book.stock,
            category_id: book.category_id || '',
            cover_image: book.cover_image || '',
        });
    };

    const handleCancel = () => {
        setIsEditing(false);
        setCurrentBook(null);
        setShowForm(false);
        reset();
    };

    const handleDelete = (id) => {
        if (confirm('Yakin ingin menghapus buku ini?')) {
            destroy(route('books.destroy', id));
        }
    };

    return (
        <AuthenticatedLayout
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">Kelola Buku</h2>
                    {!showForm && (
                        <button 
                            onClick={() => { setShowForm(true); setIsEditing(false); reset(); }}
                            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition shadow-sm text-sm"
                        >
                            + Tambah Buku
                        </button>
                    )}
                </div>
            }
        >
            <Head title="Kelola Buku" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    
                    {flash?.message && (
                        <div className="bg-green-100 text-green-700 p-4 rounded mb-6 text-sm font-medium">
                            {flash.message}
                        </div>
                    )}

                    {showForm ? (
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6 mb-6">
                            <h3 className="text-lg font-bold mb-4 border-b pb-2">{isEditing ? 'Edit Buku' : 'Tambah Buku Baru'}</h3>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Judul Buku *</label>
                                        <input
                                            type="text"
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                            value={data.title}
                                            onChange={e => setData('title', e.target.value)}
                                            required
                                        />
                                        {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Penulis / Pengarang *</label>
                                        <input
                                            type="text"
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                            value={data.author}
                                            onChange={e => setData('author', e.target.value)}
                                            required
                                        />
                                        {errors.author && <p className="text-red-500 text-xs mt-1">{errors.author}</p>}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Kategori</label>
                                        <select
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                            value={data.category_id}
                                            onChange={e => setData('category_id', e.target.value)}
                                        >
                                            <option value="">-- Pilih Kategori --</option>
                                            {categories.map(cat => (
                                                <option key={cat.id} value={cat.id}>{cat.name}</option>
                                            ))}
                                        </select>
                                        {errors.category_id && <p className="text-red-500 text-xs mt-1">{errors.category_id}</p>}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Stok *</label>
                                        <input
                                            type="number"
                                            min="0"
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                            value={data.stock}
                                            onChange={e => setData('stock', e.target.value)}
                                            required
                                        />
                                        {errors.stock && <p className="text-red-500 text-xs mt-1">{errors.stock}</p>}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Penerbit</label>
                                        <input
                                            type="text"
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                            value={data.publisher}
                                            onChange={e => setData('publisher', e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">ISBN</label>
                                        <input
                                            type="text"
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                            value={data.isbn}
                                            onChange={e => setData('isbn', e.target.value)}
                                        />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-gray-700">URL Gambar Cover</label>
                                        <input
                                            type="url"
                                            placeholder="https://..."
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                            value={data.cover_image}
                                            onChange={e => setData('cover_image', e.target.value)}
                                        />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-gray-700">Sinopsis</label>
                                        <textarea
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                            rows="4"
                                            value={data.synopsis}
                                            onChange={e => setData('synopsis', e.target.value)}
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="flex justify-end gap-3 mt-4 pt-4 border-t">
                                    <button 
                                        type="button" 
                                        onClick={handleCancel}
                                        className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition"
                                    >
                                        Batal
                                    </button>
                                    <button 
                                        type="submit" 
                                        disabled={processing}
                                        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                                    >
                                        {isEditing ? 'Simpan Perubahan' : 'Simpan Buku'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    ) : (
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 text-gray-900 overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr>
                                            <th className="border-b-2 p-3 text-sm font-bold uppercase text-gray-600">Buku</th>
                                            <th className="border-b-2 p-3 text-sm font-bold uppercase text-gray-600">Kategori</th>
                                            <th className="border-b-2 p-3 text-sm font-bold uppercase text-gray-600 text-center">Stok</th>
                                            <th className="border-b-2 p-3 text-sm font-bold uppercase text-gray-600 text-right">Aksi</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {books.length > 0 ? books.map(book => (
                                            <tr key={book.id} className="hover:bg-gray-50 border-b">
                                                <td className="p-3">
                                                    <div className="flex items-center space-x-3">
                                                        {book.cover_image ? (
                                                            <img src={book.cover_image} className="w-12 h-16 object-cover rounded bg-gray-100" alt={book.title} />
                                                        ) : (
                                                            <div className="w-12 h-16 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500">No Img</div>
                                                        )}
                                                        <div>
                                                            <p className="font-bold text-gray-900">{book.title}</p>
                                                            <p className="text-sm text-gray-500">{book.author}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="p-3">
                                                    {book.category ? (
                                                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                                                            {book.category.name}
                                                        </span>
                                                    ) : '-'}
                                                </td>
                                                <td className="p-3 text-center">
                                                    <span className={`font-bold ${book.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                                                        {book.stock}
                                                    </span>
                                                </td>
                                                <td className="p-3 text-right">
                                                    <button 
                                                        onClick={() => handleEdit(book)} 
                                                        className="text-blue-600 hover:underline mr-3 text-sm"
                                                    >
                                                        Edit
                                                    </button>
                                                    <button 
                                                        onClick={() => handleDelete(book.id)}
                                                        className="text-red-600 hover:underline text-sm"
                                                    >
                                                        Hapus
                                                    </button>
                                                </td>
                                            </tr>
                                        )) : (
                                            <tr>
                                                <td colSpan="4" className="p-6 text-center text-gray-500">
                                                    Belum ada data buku.
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
