import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://gjsmmysjuviyrkmvoqlb.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdqc21teXNqdXZpeXJrbXZvcWxiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIxNTIxMzcsImV4cCI6MjAyNzcyODEzN30.-qdsdHMYRgXE0uAIKN02okRb5jIuy4BhNYW7dg8D30I"
export const supabase = createClient(supabaseUrl, supabaseKey)