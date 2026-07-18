import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function CategoriesIndex({ categories }) {
    const { flash } = usePage().props;
    const [isEditing, setIsEditing] = useState(false);
    const [currentCategory, setCurrentCategory] = useState(null);

    const { data, setData, post, put, delete: destroy, reset, errors, processing } = useForm({
        name: '',
        description: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEditing) {
            put(route('categories.update', currentCategory.id), {
                onSuccess: () => { reset(); setIsEditing(false); setCurrentCategory(null); },
            });
        } else {
            post(route('categories.store'), {
                onSuccess: () => reset(),
            });
        }
    };

    const handleEdit = (category) => {
        setIsEditing(true);
        setCurrentCategory(category);
        setData({
            name: category.name,
            description: category.description || '',
        });
    };

    const handleCancel = () => {
        setIsEditing(false);
        setCurrentCategory(null);
        reset();
    };

    const handleDelete = (id) => {
        if (confirm('Yakin ingin menghapus kategori ini?')) {
            destroy(route('categories.destroy', id));
        }
    };

    return (
        <AuthenticatedLayout
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Kelola Kategori</h2>}
        >
            <Head title="Kelola Kategori" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 flex flex-col md:flex-row gap-6">
                    {/* Form Kategori */}
                    <div className="md:w-1/3">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                            <h3 className="text-lg font-bold mb-4">{isEditing ? 'Edit Kategori' : 'Tambah Kategori'}</h3>
                            
                            {flash?.message && (
                                <div className="bg-green-100 text-green-700 p-3 rounded mb-4 text-sm">
                                    {flash.message}
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Nama Kategori</label>
                                    <input
                                        type="text"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                        value={data.name}
                                        onChange={e => setData('name', e.target.value)}
                                        required
                                    />
                                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Deskripsi</label>
                                    <textarea
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                        rows="3"
                                        value={data.description}
                                        onChange={e => setData('description', e.target.value)}
                                    ></textarea>
                                    {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description}</p>}
                                </div>
                                
                                <div className="flex gap-2">
                                    <button 
                                        type="submit" 
                                        disabled={processing}
                                        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                                    >
                                        {isEditing ? 'Simpan Perubahan' : 'Tambah'}
                                    </button>
                                    {isEditing && (
                                        <button 
                                            type="button" 
                                            onClick={handleCancel}
                                            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 transition"
                                        >
                                            Batal
                                        </button>
                                    )}
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Tabel Kategori */}
                    <div className="md:w-2/3">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 text-gray-900 overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr>
                                            <th className="border-b-2 p-3 text-sm font-bold uppercase text-gray-600">Nama</th>
                                            <th className="border-b-2 p-3 text-sm font-bold uppercase text-gray-600">Total Buku</th>
                                            <th className="border-b-2 p-3 text-sm font-bold uppercase text-gray-600 text-right">Aksi</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {categories.length > 0 ? categories.map(cat => (
                                            <tr key={cat.id} className="hover:bg-gray-50 border-b">
                                                <td className="p-3">
                                                    <p className="font-semibold">{cat.name}</p>
                                                    <p className="text-xs text-gray-500">{cat.description}</p>
                                                </td>
                                                <td className="p-3 text-center">{cat.books_count}</td>
                                                <td className="p-3 text-right">
                                                    <button 
                                                        onClick={() => handleEdit(cat)} 
                                                        className="text-blue-600 hover:underline mr-3"
                                                    >
                                                        Edit
                                                    </button>
                                                    <button 
                                                        onClick={() => handleDelete(cat.id)}
                                                        className="text-red-600 hover:underline"
                                                    >
                                                        Hapus
                                                    </button>
                                                </td>
                                            </tr>
                                        )) : (
                                            <tr>
                                                <td colSpan="3" className="p-6 text-center text-gray-500">
                                                    Belum ada data kategori.
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
