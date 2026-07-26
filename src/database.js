import { isSupabaseConfigured, supabase } from './supabaseClient';

export async function readAppState(key) {
  if (!isSupabaseConfigured) return null;

  const { data, error } = await supabase
    .from('app_state')
    .select('value')
    .eq('state_key', key)
    .maybeSingle();

  if (error) throw error;
  return data?.value ?? null;
}

export async function writeAppState(key, value) {
  if (!isSupabaseConfigured) return;

  const { error } = await supabase
    .from('app_state')
    .upsert({
      state_key: key,
      value,
      updated_at: new Date().toISOString(),
    });

  if (error) throw error;
}
