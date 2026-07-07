// ============================================================
// إعدادات الاتصال بـ Supabase
// ضع بيانات مشروعك هنا (Settings > API في لوحة تحكم Supabase)
// ============================================================
const SUPABASE_URL = "YOUR_SUPABASE_URL"; // مثال: https://xxxxxxxx.supabase.co
const SUPABASE_ANON_KEY = "YOUR_SUPABASE_ANON_KEY";

// إنشاء عميل Supabase (المكتبة محمّلة عبر CDN في index.html باسم supabase)
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
