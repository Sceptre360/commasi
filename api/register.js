import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const { name, email, password } = req.body;

  try {
    // Insert user into Supabase
    const { data, error } = await supabase
      .from('users')
      .insert([{ name, email, password }])
      .single();

    if (error) {
      return res.status(400).json({ success: false, message: 'Registration failed' });
    }

    res.status(200).json({ success: true, user: data });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
}