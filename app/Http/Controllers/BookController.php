<?php

namespace App\Http\Controllers;

use App\Models\Book;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;

class BookController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Books/Index', [
            'books' => Book::with('category')->latest()->get(),
            'categories' => Category::orderBy('name')->get()
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'author' => 'required|string|max:255',
            'publisher' => 'nullable|string|max:255',
            'isbn' => 'nullable|string|max:255',
            'synopsis' => 'nullable|string',
            'stock' => 'required|integer|min:0',
            'category_id' => 'nullable|exists:categories,id',
            'cover_image' => 'nullable|url',
        ]);
        
        $validated['slug'] = Str::slug($validated['title']) . '-' . rand(1000, 9999);

        Book::create($validated);

        return redirect()->back()->with('message', 'Buku berhasil ditambahkan.');
    }

    public function update(Request $request, Book $book)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'author' => 'required|string|max:255',
            'publisher' => 'nullable|string|max:255',
            'isbn' => 'nullable|string|max:255',
            'synopsis' => 'nullable|string',
            'stock' => 'required|integer|min:0',
            'category_id' => 'nullable|exists:categories,id',
            'cover_image' => 'nullable|url',
        ]);
        
        if ($book->title !== $validated['title']) {
            $validated['slug'] = Str::slug($validated['title']) . '-' . rand(1000, 9999);
        }

        $book->update($validated);

        return redirect()->back()->with('message', 'Buku berhasil diperbarui.');
    }

    public function destroy(Book $book)
    {
        $book->delete();

        return redirect()->back()->with('message', 'Buku berhasil dihapus.');
    }
}
