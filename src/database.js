import { isSupabaseConfigured, supabase } from './supabaseClient';

function normalizeDatabaseError(error, fallbackMessage) {
  return {
    success: false,
    message: error?.message || fallbackMessage,
    code: error?.code || 'DATABASE_ERROR',
  };
}

const backedUpStateKeys = new Set([
  'plant-zone-customers',
  'plant-zone-expenses',
  'plant-zone-invoices',
  'plant-zone-plants',
  'plant-zone-sale-adjustments',
  'plant-zone-users',
]);

export async function readAppState(key) {
  if (!isSupabaseConfigured) return null;

  const { data, error } = await supabase
    .from('app_state')
    .select('value')
    .eq('state_key', key)
    .maybeSingle();

  if (error) throw normalizeDatabaseError(error, 'Could not load saved app data.');
  return data?.value ?? null;
}

export async function writeAppState(key, value) {
  if (!isSupabaseConfigured) return;

  if (backedUpStateKeys.has(key)) {
    const { data: current, error: readError } = await supabase
      .from('app_state')
      .select('value, updated_at')
      .eq('state_key', key)
      .maybeSingle();

    if (readError) throw normalizeDatabaseError(readError, 'Could not back up saved app data.');

    if (current) {
      const backupKey = `backup:${key}:${new Date().toISOString()}`;
      const { error: backupError } = await supabase
        .from('app_state')
        .upsert({
          state_key: backupKey,
          value: {
            original_key: key,
            original_updated_at: current.updated_at,
            value: current.value,
          },
          updated_at: new Date().toISOString(),
        });

      if (backupError) throw normalizeDatabaseError(backupError, 'Could not back up saved app data.');
    }
  }

  const { error } = await supabase
    .from('app_state')
    .upsert({
      state_key: key,
      value,
      updated_at: new Date().toISOString(),
    });

  if (error) throw normalizeDatabaseError(error, 'Could not save app data.');
}
