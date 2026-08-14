import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Inisialisasi client Supabase. 
// Jika environment variable belum diisi (misal saat build atau awal setup),
// kita handle agar tidak langsung crash dan memberikan pesan error yang jelas.
export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder'
)

// Helper function untuk mengecek apakah Supabase sudah dikonfigurasi dengan benar
export const isSupabaseConfigured = () => {
  return supabaseUrl && supabaseAnonKey && supabaseUrl !== 'https://placeholder.supabase.co';
}
