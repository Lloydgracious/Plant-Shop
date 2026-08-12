import { isSupabaseConfigured, supabase } from './supabaseClient';

function normalizeDatabaseError(error, fallbackMessage) {
  return {
    success: false,
    message: error?.message || fallbackMessage,
    code: error?.code || 'DATABASE_ERROR',
  };
}

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

  const { error } = await supabase
    .from('app_state')
    .upsert({
      state_key: key,
      value,
      updated_at: new Date().toISOString(),
    });

  if (error) throw normalizeDatabaseError(error, 'Could not save app data.');
}

export async function createAppBackup(backupName, value) {
  if (!isSupabaseConfigured) return;

  const { error } = await supabase
    .from('app_backups')
    .insert({
      backup_name: backupName,
      value,
    });

  if (error) throw normalizeDatabaseError(error, 'Could not create app backup.');
}

export function publicStorageUrl(bucket, path) {
  if (!isSupabaseConfigured || !path) return '';
  return supabase.storage.from(bucket).getPublicUrl(path).data.publicUrl;
}

export async function uploadStorageImage(bucket, path, file) {
  if (!isSupabaseConfigured) {
    throw normalizeDatabaseError(null, 'Supabase is not configured.');
  }

  const { data, error } = await supabase.storage.from(bucket).upload(path, file, {
    cacheControl: '31536000',
    contentType: file.type || 'image/jpeg',
    upsert: true,
  });

  if (error) throw normalizeDatabaseError(error, 'Could not upload image.');
  return {
    path: data.path,
    url: publicStorageUrl(bucket, data.path),
  };
}
