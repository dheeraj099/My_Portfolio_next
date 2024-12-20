import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://yyklkswpczvzijjuniqe.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl5a2xrc3dwY3p2emlqanVuaXFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ0MTg0OTcsImV4cCI6MjA0OTk5NDQ5N30.rfXV2H0JRIX3Rwnf-eGkfRosejD4e1qOV318MOjNy3I";
export const supabase = createClient(supabaseUrl, supabaseKey);