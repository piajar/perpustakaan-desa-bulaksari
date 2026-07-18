<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Book;
use App\Models\Category;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Admin User
        User::factory()->create([
            'name' => 'Admin Pustakawan',
            'email' => 'admin@perpustakaandesa.com',
            'password' => bcrypt('password'),
        ]);

        // Categories
        $cat1 = Category::create(['name' => 'Pendidikan', 'slug' => 'pendidikan', 'description' => 'Buku-buku edukasi dan pelajaran sekolah.']);
        $cat2 = Category::create(['name' => 'Pertanian & Peternakan', 'slug' => 'pertanian', 'description' => 'Panduan bertani dan beternak untuk warga.']);
        $cat3 = Category::create(['name' => 'Novel & Fiksi', 'slug' => 'novel', 'description' => 'Buku cerita dan hiburan.']);

        // Books
        Book::create([
            'title' => 'Panduan Sukses Bertani Cabai',
            'slug' => Str::slug('Panduan Sukses Bertani Cabai'),
            'author' => 'Ir. Susanto',
            'publisher' => 'AgroMedia',
            'isbn' => '978-602-0000-00-1',
            'synopsis' => 'Buku ini membahas tuntas cara bertani cabai yang baik, mulai dari pemilihan bibit hingga masa panen.',
            'stock' => 5,
            'category_id' => $cat2->id,
            'cover_image' => 'https://images.unsplash.com/photo-1596131499596-f366113b567d?q=80&w=600&auto=format&fit=crop'
        ]);

        Book::create([
            'title' => 'Laskar Pelangi',
            'slug' => Str::slug('Laskar Pelangi'),
            'author' => 'Andrea Hirata',
            'publisher' => 'Bentang Pustaka',
            'isbn' => '978-979-3062-79-2',
            'synopsis' => 'Kisah inspiratif tentang sepuluh anak dari keluarga miskin di Pulau Belitung.',
            'stock' => 2,
            'category_id' => $cat3->id,
            'cover_image' => 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=600&auto=format&fit=crop'
        ]);
        
        Book::create([
            'title' => 'Matematika Dasar untuk SD',
            'slug' => Str::slug('Matematika Dasar untuk SD'),
            'author' => 'Budi Raharjo',
            'publisher' => 'Pustaka Ilmu',
            'isbn' => '978-602-1234-56-7',
            'synopsis' => 'Buku panduan belajar matematika yang menyenangkan untuk anak SD.',
            'stock' => 10,
            'category_id' => $cat1->id,
            'cover_image' => 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?q=80&w=600&auto=format&fit=crop'
        ]);
    }
}
