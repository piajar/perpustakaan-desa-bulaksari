<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Book;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;

class PublicController extends Controller
{
    public function index()
    {
        $books = Book::with('category')->latest()->take(6)->get();

        return Inertia::render('Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
            'featuredBooks' => $books
        ]);
    }

    public function showBook(Book $book)
    {
        $book->load('category');
        return Inertia::render('Public/BookDetail', [
            'book' => $book,
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
        ]);
    }
}
