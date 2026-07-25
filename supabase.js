const SUPABASE_URL = "https://hgtdeivsmvldhqcftlru.supabase.co"
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_yqPIuJwZh3BIFvY0SxGUTg_R6KpE9bT"

// Create a client to connect to the database
const supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
)

console.log(supabaseClient);
