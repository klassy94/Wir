import { createClient } from '@supabase/supabase-js'

const url = https://fyqrboeimpffrpfpkgbl.supabase.co
const anonKey = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ5cXJib2VpbXBmZnJwZnBrZ2JsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQwMTY0ODMsImV4cCI6MjA5OTU5MjQ4M30.ftikXq6JpiR4fHPocG_FtW6wj1DcBCZx4sK2AF7hqNw

if (!url || !anonKey) {
  console.error('Supabase-Zugangsdaten fehlen. Lege eine .env.local mit VITE_SUPABASE_URL und VITE_SUPABASE_ANON_KEY an.')
}

export const supabase = createClient(url, anonKey)
