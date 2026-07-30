import AdminSidebar from "@/components/AdminSidebar";

export const metadata = {
  title: "Admin Panel - Perpustakaan Desa Bulaksari",
  description: "Sistem Manajemen Perpustakaan Desa Bulaksari",
};

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar - fixed on the left */}
      <AdminSidebar />
      
      {/* Main Content Area */}
      <div className="flex-1 ml-64 flex flex-col h-screen">
        {/* Top Header */}
        <header className="h-20 bg-white border-b border-slate-100 flex items-center justify-between px-8 shrink-0">
          <h1 className="text-xl font-bold text-slate-800">Panel Manajemen</h1>
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-slate-400 hover:text-emerald-600 transition-colors">
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
            </button>
          </div>
        </header>

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto p-8">
          <div className="max-w-6xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
