import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://auozsgtczuoouvgzbjhm.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF1b3pzZ3RjenVvb3V2Z3piamhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ5NDExODIsImV4cCI6MjA1MDUxNzE4Mn0.1OLxvC8Z6PA1jCII1kdHTckRd54nW40soNJtZU0oI4Y';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})