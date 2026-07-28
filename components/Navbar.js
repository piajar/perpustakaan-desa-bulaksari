"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass border-b border-emerald-100 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo & Branding */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="bg-emerald-600 p-2.5 rounded-xl group-hover:bg-emerald-500 transition-colors shadow-lg shadow-emerald-900/20">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div className="font-bold leading-tight">
              <span className={`block text-[10px] uppercase tracking-widest font-semibold transition-colors ${scrolled ? 'text-emerald-600' : 'text-emerald-300'}`}>Perpustakaan</span>
              <span className={`text-base transition-colors ${scrolled ? 'text-slate-800 group-hover:text-emerald-700' : 'text-white'}`}>Desa Bulaksari</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className={`text-sm font-medium transition-colors hover:opacity-100 ${scrolled ? 'text-slate-600 hover:text-emerald-600' : 'text-white/80 hover:text-white'}`}>
              Beranda
            </Link>
            <Link href="/katalog" className={`text-sm font-medium transition-colors hover:opacity-100 ${scrolled ? 'text-slate-600 hover:text-emerald-600' : 'text-white/80 hover:text-white'}`}>
              Katalog Buku
            </Link>
            <Link href="/login" className="bg-emerald-500 hover:bg-emerald-400 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg hover:shadow-emerald-500/30 hover:-translate-y-0.5">
              Login Admin
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`focus:outline-none p-2 ${scrolled ? 'text-slate-800' : 'text-white'}`}
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-emerald-50 px-4 pt-2 pb-6 shadow-xl absolute w-full left-0 top-full">
          <div className="flex flex-col gap-4 mt-2">
            <Link href="/" className="text-slate-600 font-medium p-3 hover:bg-emerald-50 hover:text-emerald-600 rounded-xl transition-colors" onClick={() => setIsOpen(false)}>
              Beranda
            </Link>
            <Link href="/katalog" className="text-slate-600 font-medium p-3 hover:bg-emerald-50 hover:text-emerald-600 rounded-xl transition-colors" onClick={() => setIsOpen(false)}>
              Katalog Buku
            </Link>
            <div className="h-px bg-slate-100 my-1"></div>
            <Link href="/login" className="bg-emerald-600 text-white text-center p-3.5 rounded-xl font-semibold hover:bg-emerald-700 transition-colors" onClick={() => setIsOpen(false)}>
              Login Admin
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
