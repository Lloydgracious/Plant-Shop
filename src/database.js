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
  'plant-zone-stock-history',
  'plant-zone-audit-logs',
  'plant-zone-users',
]);

function itemKey(item) {
  if (item?.id !== undefined && item?.id !== null && item.id !== '') return `id:${item.id}`;
  return `${String(item?.plant_name || '').trim().toLowerCase()}|${String(item?.plant_code || '').trim().toLowerCase()}`;
}

function itemTimestamp(item) {
  return Math.max(
    Date.parse(item?.deleted_at || '') || 0,
    Date.parse(item?.synced_at || '') || 0,
    Date.parse(item?.updated_at || '') || 0,
    Date.parse(item?.created_at || '') || 0,
  );
}

function mergePlantsState(localValue, databaseValue) {
  if (!Array.isArray(localValue) || !Array.isArray(databaseValue)) return localValue;

  const merged = new Map(databaseValue.map((item) => [itemKey(item), item]));

  localValue.forEach((localItem) => {
    const key = itemKey(localItem);
    const databaseItem = merged.get(key);
    if (!databaseItem || itemTimestamp(localItem) >= itemTimestamp(databaseItem)) {
      merged.set(key, localItem);
    }
  });

  return Array.from(merged.values()).sort((a, b) => itemTimestamp(b) - itemTimestamp(a));
}

function mergeUniqueHistory(localValue, databaseValue) {
  if (!Array.isArray(localValue) || !Array.isArray(databaseValue)) return localValue;

  const merged = new Map(databaseValue.map((item) => [String(item.id), item]));
  localValue.forEach((item) => merged.set(String(item.id), item));
  return Array.from(merged.values()).sort((a, b) => (Date.parse(b.date || b.updated_at || '') || 0) - (Date.parse(a.date || a.updated_at || '') || 0));
}

function mergeAppStateValue(key, localValue, databaseValue) {
  if (key === 'plant-zone-plants') return mergePlantsState(localValue, databaseValue);
  if (key === 'plant-zone-stock-history' || key === 'plant-zone-audit-logs') {
    return mergeUniqueHistory(localValue, databaseValue);
  }
  return localValue;
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

  let nextValue = value;

  if (backedUpStateKeys.has(key)) {
    const { data: current, error: readError } = await supabase
      .from('app_state')
      .select('value, updated_at')
      .eq('state_key', key)
      .maybeSingle();

    if (readError) throw normalizeDatabaseError(readError, 'Could not back up saved app data.');

    if (current) {
      nextValue = mergeAppStateValue(key, value, current.value);
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
      value: nextValue,
      updated_at: new Date().toISOString(),
    });

  if (error) throw normalizeDatabaseError(error, 'Could not save app data.');
}
