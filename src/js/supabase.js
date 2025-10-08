console.log("supabase.js loaded");

// Initialize Supabase client
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";
const supabaseUrl = 'https://memhbmavorqiytekmmdr.supabase.co'; 
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1lbWhibWF2b3JxaXl0ZWttbWRyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk5MzUzMDQsImV4cCI6MjA3NTUxMTMwNH0.AfpV7PXCBsWyeGSL5uJegg0vmNrKMKqH2QLB_5b3uYM'; 
export const supabase = createClient(supabaseUrl, supabaseKey);
console.log("Supabase client created");

