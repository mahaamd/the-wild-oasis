import { createClient } from "@supabase/supabase-js";

//https://srkbaoptowgshssvcezg.supabase.co
export const supabaseUrl = "https://srkbaoptowgshssvcezg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNya2Jhb3B0b3dnc2hzc3ZjZXpnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIyNjkzNzAsImV4cCI6MjAyNzg0NTM3MH0.lymTtxbAKFGD1xul0kXxWI3SX_Yx6fJ3n8g2Id5WemE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
