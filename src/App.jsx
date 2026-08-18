import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  BarChart3,
  BadgeDollarSign,
  Banknote,
  Bell,
  CalendarDays,
  CheckCircle2,
  Download,
  Edit3,
  FileSpreadsheet,
  FileOutput,
  Leaf,
  LogOut,
  Menu,
  Megaphone,
  Package,
  Plus,
  Printer,
  RadioTower,
  ReceiptText,
  RotateCcw,
  Send,
  Settings,
  ShieldCheck,
  Sprout,
  Trash2,
  TrendingUp,
  TriangleAlert,
  User,
  Users,
  X,
} from 'lucide-react';
import { deleteStorageImages, readAppState, uploadStorageImage, writeAppState } from './database';
import { isSupabaseConfigured } from './supabaseClient';
import invoiceLeavesTopRight from './assets/invoice-leaves-top-right.png';
import invoicePlantBottomLeft from './assets/invoice-plant-bottom-left.png';
import invoiceLeavesBottomRight from './assets/invoice-leaves-bottom-right.png';

const sources = ['Facebook', 'TikTok', 'Viber', 'Phone'];
const paymentStatuses = ['Paid', 'Pending', 'Partial'];
const saleStages = ['Preparing', 'On the way', 'Confirmed'];
const plantTypes = ['Indoor', 'Outdoor', 'Succulent', 'Cactus', 'Flowers', 'Decorative', 'Garden Center', 'Landscaping'];
const expenseCategories = ['General cost', 'Salary', 'Delivery cost', 'Packaging'];

const heroPlantImages = {
  pos: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Crassula_ovata_700.jpg',
  sales: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Haworthia_cymbiformis_1.jpg',
  invoices: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Zamioculcas_zamiifolia_1.jpg',
  stock: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Snake_Plant_%28Sansevieria_trifasciata_%27Laurentii%27%29.jpg',
  customers: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Pilea_peperomioides_Chinese_money_plant.jpg',
  daily: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Haworthia_cymbiformis_1.jpg',
  monthly: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Senecio_rowleyanus.jpg',
  expenses: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Peperomia_obtusifolia_2.jpg',
  export: 'https://upload.wikimedia.org/wikipedia/commons/e/e2/Dracaena_sanderiana_2.jpg',
  settings: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/A_potted_aloe_vera_plant.jpg',
};

const emptyPlants = [];
const emptyCustomers = [];
const emptyInvoices = [];
const defaultUsers = [];

const navItems = [
  { id: 'pos', label: 'Dashboard', icon: BarChart3, group: 'Selling' },
  { id: 'sales', label: 'Sales', icon: BadgeDollarSign, group: 'Selling' },
  { id: 'invoices', label: 'Invoices', icon: ReceiptText, group: 'Selling' },
  { id: 'stock', label: 'Plant Stock', icon: Leaf, group: 'Selling' },
  { id: 'customers', label: 'Customers', icon: Users, group: 'Selling' },
  { id: 'daily', label: 'Daily Data', icon: CalendarDays, group: 'Reports' },
  { id: 'monthly', label: 'Monthly Data', icon: BarChart3, group: 'Reports' },
  { id: 'export', label: 'Export Center', icon: FileOutput, group: 'Reports' },
  { id: 'expenses', label: 'Expenses', icon: Banknote, group: 'Expenses' },
  { id: 'settings', label: 'Settings', icon: Settings, group: 'System' },
];

const money = (value) => `${Number(value || 0).toLocaleString()} Ks`;
const today = () => new Date().toISOString().slice(0, 10);
const monthNow = () => new Date().toISOString().slice(0, 7);
const clean = (value) => String(value ?? '').toLowerCase();
const saleStageFor = (invoice) => saleStages.includes(invoice?.order_status) ? invoice.order_status : 'Confirmed';
const CONFIRMED_DETAIL_VISIBLE_DAYS = 7;
const DELETED_PLANT_RETENTION_DAYS = 30;
const isWithinDays = (value, days) => {
  if (!value) return true;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return true;
  return Date.now() - date.getTime() <= days * 24 * 60 * 60 * 1000;
};
const SESSION_DURATION_MS = 8 * 60 * 60 * 1000;
const passwordSaltBytes = 16;
const roleLabels = {
  admin: 'Admin',
  inventory_manager: 'Inventory Manager',
  staff: 'Staff',
};

const rolePermissions = {
  admin: ['manage_users', 'manage_inventory', 'manage_sales', 'view_reports', 'view_audit_logs'],
  inventory_manager: ['manage_inventory', 'manage_sales', 'view_reports'],
  staff: ['manage_sales'],
};

const storageKeys = {
  session: 'plant-zone-session',
  legacySessionUser: 'plant-zone-session-user',
};
const appStorageResetKey = 'plant-zone-ui-clean-reset';
const appStorageResetVersion = '2026-08-13-clear-all-data';
const appStateStorageKeys = [
  'plant-zone-plants',
  'plant-zone-customers',
  'plant-zone-invoices',
  'plant-zone-sale-adjustments',
  'plant-zone-expenses',
  'plant-zone-users',
  'plant-zone-audit-logs',
  'plant-zone-stock-history',
  'plant-zone-session',
  'plant-zone-session-user',
  'plant-zone-cache:plant-zone-plants',
];
const supabaseImageBucket = 'plant-zone-images';
const maxStoredImageBytes = 250000;
const maxPlantImageBytes = maxStoredImageBytes;
const maxPlantUploadBytes = 5000000;
const maxPlantImageDimension = 900;
const plantImageQuality = 0.75;

function readStoredJson(storage, key, fallback = null) {
  try {
    const stored = storage?.getItem(key);
    return stored ? JSON.parse(stored) : fallback;
  } catch {
    return fallback;
  }
}

function writeStoredJson(storage, key, value) {
  try {
    storage?.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.warn(`Could not save ${key} to browser storage`, error);
    return false;
  }
}

function removeStoredValue(storage, key) {
  try {
    storage?.removeItem(key);
  } catch {
    // Ignore unavailable browser storage.
  }
}

function prepareCleanStorage() {
  try {
    if (localStorage.getItem(appStorageResetKey) === appStorageResetVersion) return true;
    appStateStorageKeys.forEach((key) => {
      localStorage.removeItem(key);
      sessionStorage.removeItem(key);
    });
    localStorage.setItem(appStorageResetKey, appStorageResetVersion);
  } catch {
    // Ignore unavailable browser storage.
  }
  return true;
}

function readStateCache(key, fallback) {
  return readStoredJson(localStorage, key, fallback);
}

function writeStateCache(key, value) {
  writeStoredJson(localStorage, key, value);
}

function createSession(userId) {
  return {
    userId: String(userId),
    expiresAt: Date.now() + SESSION_DURATION_MS,
  };
}

function readSession() {
  const session = readStoredJson(sessionStorage, storageKeys.session);
  return session?.expiresAt > Date.now() ? session : null;
}

function saveSession(userId) {
  const session = createSession(userId);
  writeStoredJson(sessionStorage, storageKeys.session, session);
  removeStoredValue(sessionStorage, storageKeys.legacySessionUser);
  removeStoredValue(localStorage, storageKeys.legacySessionUser);
  return session.userId;
}

function clearSession() {
  removeStoredValue(sessionStorage, storageKeys.session);
  removeStoredValue(localStorage, storageKeys.session);
  removeStoredValue(sessionStorage, storageKeys.legacySessionUser);
  removeStoredValue(localStorage, storageKeys.legacySessionUser);
}

const defaultAuditLogs = [];
const defaultInventoryHistory = [];

function hasPermission(user, permission) {
  return Boolean(rolePermissions[user?.role]?.includes(permission));
}

function appError(message, code = 'APP_ERROR') {
  return { success: false, message, code };
}

function validateText(value, label, min = 2, max = 80) {
  const text = String(value ?? '').trim();
  if (text.length < min) return `${label} must be at least ${min} characters.`;
  if (text.length > max) return `${label} must be ${max} characters or less.`;
  return '';
}

function validatePlant(plant) {
  const errors = [
    validateText(plant.plant_name, 'Plant name', 2, 80),
    validateText(plant.plant_code, 'Plant code', 2, 40),
    plantTypes.includes(plant.plant_type) ? '' : 'Choose a valid plant category.',
    Number(plant.quantity) >= 0 ? '' : 'Quantity cannot be negative.',
    Number(plant.unit_price) >= 0 ? '' : 'Selling price cannot be negative.',
    Number(plant.ws_price) >= 0 ? '' : 'Original cost cannot be negative.',
    Number(plant.low_stock_limit) >= 0 ? '' : 'Low stock limit cannot be negative.',
    String(plant.image || '').length <= maxPlantImageBytes ? '' : 'Image is too large. Upload the photo again so it can be optimized.',
  ].filter(Boolean);
  return errors[0] || '';
}

function validateCustomer(customer) {
  const errors = [
    validateText(customer.cus_name, 'Customer name', 2, 80),
    /^\+?[\d\s-]{6,24}$/.test(String(customer.cus_ph || '').trim()) ? '' : 'Enter a valid phone number.',
    sources.includes(customer.source) ? '' : 'Choose a valid customer source.',
  ].filter(Boolean);
  return errors[0] || '';
}

function validateInvoiceDraft(draft) {
  if (validateCustomer(draft.customer)) return validateCustomer(draft.customer);
  const validItems = draft.items.filter((item) => item.plant_name.trim());
  if (!validItems.length) return 'Add at least one plant to the sale.';
  const invalidItem = validItems.find((item) => Number(item.quantity) <= 0 || Number(item.unit_price) < 0 || Number(item.ws_price) < 0);
  if (invalidItem) return 'Sale items need positive quantity and non-negative prices.';
  return '';
}

function bytesToBase64(bytes) {
  return btoa(String.fromCharCode(...bytes));
}

function base64ToBytes(value) {
  return Uint8Array.from(atob(value), (char) => char.charCodeAt(0));
}

function loadImageElement(source) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error('Could not read image file.'));
    image.src = source;
  });
}

function canvasToBlob(canvas, type, quality) {
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (blob) resolve(blob);
      else reject(new Error('Could not optimize image file.'));
    }, type, quality);
  });
}

async function resizeImageBlob(source, maxDimension = maxPlantImageDimension, quality = plantImageQuality) {
  const image = await loadImageElement(source);
  const scale = Math.min(1, maxDimension / Math.max(image.naturalWidth || image.width, image.naturalHeight || image.height));
  const width = Math.max(1, Math.round((image.naturalWidth || image.width) * scale));
  const height = Math.max(1, Math.round((image.naturalHeight || image.height) * scale));
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext('2d');
  context.drawImage(image, 0, 0, width, height);
  return canvasToBlob(canvas, 'image/jpeg', quality);
}

async function resizeImageSource(source, maxDimension = maxPlantImageDimension, quality = plantImageQuality) {
  const blob = await resizeImageBlob(source, maxDimension, quality);
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error('Could not read optimized image file.'));
    reader.readAsDataURL(blob);
  });
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error('Could not read image file.'));
    reader.readAsDataURL(file);
  });
}

async function optimizePlantImageFile(file) {
  const original = await readFileAsDataUrl(file);
  if (typeof original !== 'string') throw new Error('Could not read image file.');
  let dimension = maxPlantImageDimension;
  let quality = plantImageQuality;

  for (let attempt = 0; attempt < 8; attempt += 1) {
    const blob = await resizeImageBlob(original, dimension, quality);
    if (blob.size <= maxStoredImageBytes || attempt === 7) {
      return new File([blob], `${Date.now()}.jpg`, { type: 'image/jpeg' });
    }
    quality = Math.max(0.52, quality - 0.06);
    if (attempt >= 3) dimension = Math.max(520, Math.round(dimension * 0.86));
  }

  throw new Error('Could not optimize image file.');
}

function storageImagePath(folder, file) {
  const extension = file.type === 'image/webp' ? 'webp' : 'jpg';
  return `${folder}/${Date.now()}-${Math.random().toString(36).slice(2, 10)}.${extension}`;
}

async function uploadOptimizedImage(file, folder) {
  const optimizedFile = await optimizePlantImageFile(file);
  return uploadStorageImage(supabaseImageBucket, storageImagePath(folder, optimizedFile), optimizedFile);
}

async function optimizeOversizedPlantImages(plants) {
  const updates = await Promise.all(plants.map(async (plant) => {
    if (typeof plant.image !== 'string' || !plant.image.startsWith('data:image/') || plant.image.length <= maxPlantImageBytes) {
      return plant;
    }

    try {
      const image = await resizeImageSource(plant.image);
      return image.length < plant.image.length ? { ...plant, image } : plant;
    } catch {
      return plant;
    }
  }));
  const changed = updates.some((plant, index) => plant.image !== plants[index]?.image);
  return changed ? updates : plants;
}

async function hashPassword(password, salt = crypto.getRandomValues(new Uint8Array(passwordSaltBytes))) {
  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(password),
    'PBKDF2',
    false,
    ['deriveBits'],
  );
  const bits = await crypto.subtle.deriveBits(
    { name: 'PBKDF2', salt, iterations: 210000, hash: 'SHA-256' },
    key,
    256,
  );
  return `pbkdf2_sha256$210000$${bytesToBase64(salt)}$${bytesToBase64(new Uint8Array(bits))}`;
}

async function verifyPassword(password, storedHash) {
  if (!storedHash?.startsWith('pbkdf2_sha256$')) return false;
  const [, iterations, saltValue, expected] = storedHash.split('$');
  const salt = base64ToBytes(saltValue);
  const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(password), 'PBKDF2', false, ['deriveBits']);
  const bits = await crypto.subtle.deriveBits({ name: 'PBKDF2', salt, iterations: Number(iterations), hash: 'SHA-256' }, key, 256);
  return bytesToBase64(new Uint8Array(bits)) === expected;
}

function usePersistentState(key, initialValue) {
  const initialValueRef = useRef(initialValue);
  const [state, setState] = useState(() => readStateCache(key, initialValue));
  const [databaseLoaded, setDatabaseLoaded] = useState(!isSupabaseConfigured);
  const [databaseError, setDatabaseError] = useState('');
  const [hasLocalChanges, setHasLocalChanges] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function loadDatabaseState() {
      if (!isSupabaseConfigured) return;

      try {
        const databaseValue = await readAppState(key);
        if (!isMounted) return;
        if (databaseValue !== null) {
          setState(databaseValue);
          writeStateCache(key, databaseValue);
        } else {
          await writeAppState(key, initialValueRef.current);
          writeStateCache(key, initialValueRef.current);
        }
      } catch (error) {
        console.error(`Could not load ${key} from Supabase`, error);
        setDatabaseError(error?.message || 'Could not load shared app data.');
      } finally {
        if (isMounted) setDatabaseLoaded(true);
      }
    }

    loadDatabaseState();

    return () => {
      isMounted = false;
    };
  }, [key]);

  useEffect(() => {
    if (!databaseLoaded || !isSupabaseConfigured || !hasLocalChanges) return;

    const saveTimer = window.setTimeout(() => {
      writeAppState(key, state).then(() => {
        setHasLocalChanges(false);
      }).catch((error) => {
        console.error(`Could not save ${key} to Supabase`, error);
      });
    }, 350);

    return () => window.clearTimeout(saveTimer);
  }, [databaseLoaded, hasLocalChanges, key, state]);

  const setPersistentState = useCallback((value) => {
    setState((current) => {
      const nextValue = typeof value === 'function' ? value(current) : value;
      writeStateCache(key, nextValue);
      setHasLocalChanges(true);
      return nextValue;
    });
  }, [key]);

  return [state, setPersistentState, databaseLoaded, databaseError];
}

const recoveredPlantDefaults = {
  plant_type: 'Outdoor',
  size: 'S',
  unit_price: 0,
  ws_price: 0,
  low_stock_limit: 5,
  damaged_quantity: 0,
  written_off_quantity: 0,
  image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80',
};
const defaultInvoicePackage = { title: '', fee: 0, image: '', features: [] };

function isActivePlant(plant) {
  return !plant?.deleted_at;
}

function shouldPurgeDeletedPlant(plant) {
  return Boolean(plant?.deleted_at) && !isWithinDays(plant.deleted_at, DELETED_PLANT_RETENTION_DAYS);
}

function plantIdentity(name, code) {
  return `${clean(name)}|${clean(code)}`;
}

function recoverPlantsFromHistory(plants, history) {
  if (!Array.isArray(plants) || !Array.isArray(history)) return [];

  const currentKeys = new Set(plants.map((plant) => plantIdentity(plant.plant_name, plant.plant_code)));
  const deletedAtByKey = new Map();
  const historyByKey = new Map();

  history.forEach((entry) => {
    const key = plantIdentity(entry.plant_name, entry.plant_code);
    if (!historyByKey.has(key)) historyByKey.set(key, []);
    historyByKey.get(key).push(entry);

    if (entry.reason === 'Product deleted') {
      const deletedAt = new Date(entry.date).getTime();
      deletedAtByKey.set(key, Math.max(deletedAtByKey.get(key) || 0, deletedAt));
    }
  });

  const recoveredKeys = new Set();
  return [...history]
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .reduce((recovered, entry) => {
      if (entry.reason !== 'New plant created') return recovered;

      const key = plantIdentity(entry.plant_name, entry.plant_code);
      const createdAt = new Date(entry.date).getTime();
      if (currentKeys.has(key) || recoveredKeys.has(key) || (deletedAtByKey.get(key) || 0) > createdAt) {
        return recovered;
      }

      const relatedHistory = (historyByKey.get(key) || [])
        .filter((item) => new Date(item.date).getTime() >= createdAt)
        .sort((a, b) => new Date(a.date) - new Date(b.date));
      const latestEntry = relatedHistory[relatedHistory.length - 1] || entry;
      const latestQuantityEntry = [...relatedHistory]
        .reverse()
        .find((item) => item.after_quantity !== undefined || item.quantity !== undefined) || entry;

      recoveredKeys.add(key);
      recovered.push({
        ...recoveredPlantDefaults,
        id: createdAt + recovered.length,
        plant_name: entry.plant_name,
        plant_code: entry.plant_code,
        quantity: Number(latestQuantityEntry.after_quantity ?? latestQuantityEntry.quantity ?? 0),
        created_at: String(entry.date).slice(0, 10),
        updated_at: String(latestEntry.date || entry.date).slice(0, 10),
        synced_at: latestEntry.date || entry.date,
        recovered_from_history: true,
      });
      return recovered;
    }, []);
}

function LoginPage({ users, setUsers, onLogin, onAudit }) {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [setup, setSetup] = useState({ name: '', username: '', password: '' });
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const needsFirstAdmin = users.length === 0;

  const createFirstAdmin = async () => {
    if (busy) return;
    const validationError = validateText(setup.name, 'Name', 2, 80)
      || validateText(setup.username, 'Username', 2, 40)
      || validateText(setup.password, 'Password', 6, 80);
    if (validationError) {
      setError(validationError);
      return;
    }

    setBusy(true);
    const admin = {
      id: `user-${Date.now()}`,
      name: setup.name.trim(),
      username: setup.username.trim(),
      password_hash: await hashPassword(setup.password),
      role: 'admin',
      can_view_reports: true,
      active: true,
      created_at: today(),
      updated_at: today(),
    };
    try {
      await writeAppState('plant-zone-users', [admin]);
      setUsers([admin]);
      onAudit({
        user_name: admin.name,
        action: 'First admin created',
        target: admin.username,
        detail: 'Initial shared account setup',
      });
      onLogin(admin.id);
    } catch (saveError) {
      console.error('Could not save first admin to Supabase', saveError);
      setError(saveError?.message || 'Could not save owner account to the shared database.');
    } finally {
      setBusy(false);
    }
  };

  const login = async () => {
    if (busy) return;
    setBusy(true);
    const user = users.find((item) => (
      item.active
      && clean(item.username) === clean(credentials.username)
    ));
    const passwordMatches = user?.password_hash
      ? await verifyPassword(credentials.password, user.password_hash)
      : Boolean(user && user.password === credentials.password);
    if (!user || !passwordMatches) {
      const response = appError('Username or password is incorrect, or this account is inactive.', 'AUTH_FAILED');
      setError(response.message);
      onAudit({
        user_name: credentials.username || 'Unknown',
        action: 'Failed login',
        target: 'Login',
        detail: response.message,
      });
      setBusy(false);
      return;
    }
    if (!user.password_hash && user.password) {
      const password_hash = await hashPassword(credentials.password);
      setUsers((current) => current.map((item) => (
        item.id === user.id ? { ...item, password_hash, password: undefined } : item
      )));
    }
    setError('');
    onAudit({
      user_name: user.name,
      action: 'User login',
      target: user.username,
      detail: `${roleLabels[user.role] || user.role} signed in`,
    });
    onLogin(user.id);
    setBusy(false);
  };

  return (
    <main className="login-page">
      <section className="login-card">
        <div className="login-brand"><span className="brand-mark"><Sprout size={26} /></span><div><strong>Plant Zone POS</strong><small>Garden Center · Pyay</small></div></div>
        <div className="login-copy"><span className="eyebrow">Secure workspace</span><h1>{needsFirstAdmin ? 'Create admin' : 'Welcome back'}</h1><p>{needsFirstAdmin ? 'Start with a blank local workspace and create the first admin account.' : 'Sign in to manage sales, stock, customers, invoices, and reports.'}</p></div>
        <div className="login-form">
          {needsFirstAdmin ? (
            <>
              <label>Name<input autoComplete="name" placeholder="Owner name" value={setup.name} onChange={(event) => setSetup({ ...setup, name: event.target.value })} onKeyDown={(event) => { if (event.key === 'Enter') createFirstAdmin(); }} /></label>
              <label>Login username<input autoComplete="username" placeholder="Choose a username" value={setup.username} onChange={(event) => setSetup({ ...setup, username: event.target.value })} onKeyDown={(event) => { if (event.key === 'Enter') createFirstAdmin(); }} /></label>
              <label>Password<input type="password" autoComplete="new-password" value={setup.password} onChange={(event) => setSetup({ ...setup, password: event.target.value })} onKeyDown={(event) => { if (event.key === 'Enter') createFirstAdmin(); }} /></label>
            </>
          ) : (
            <>
              <label>Login username<input autoComplete="username" placeholder="Your login username" value={credentials.username} onChange={(event) => setCredentials({ ...credentials, username: event.target.value })} onKeyDown={(event) => { if (event.key === 'Enter') login(); }} /></label>
              <label>Password<input type="password" autoComplete="current-password" value={credentials.password} onChange={(event) => setCredentials({ ...credentials, password: event.target.value })} onKeyDown={(event) => { if (event.key === 'Enter') login(); }} /></label>
            </>
          )}
          {error && <p className="login-error" role="alert">{error}</p>}
          <button className="primary-button wide" onClick={needsFirstAdmin ? createFirstAdmin : login} disabled={busy}><ShieldCheck size={18} /> {busy ? 'Please wait...' : needsFirstAdmin ? 'Create admin' : 'Sign in'}</button>
        </div>
      </section>
    </main>
  );
}

function LoadingPage() {
  return (
    <main className="login-page">
      <section className="login-card">
        <div className="login-brand"><span className="brand-mark"><Sprout size={26} /></span><div><strong>Plant Zone POS</strong><small>Garden Center | Pyay</small></div></div>
        <div className="login-copy"><span className="eyebrow">Secure workspace</span><h1>Loading workspace</h1><p>Checking the shared store data before sign in.</p></div>
      </section>
    </main>
  );
}

function ConfigurationErrorPage({ message = 'Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in Vercel, then redeploy this site.' }) {
  return (
    <main className="login-page">
      <section className="login-card">
        <div className="login-brand"><span className="brand-mark"><TriangleAlert size={26} /></span><div><strong>Plant Zone POS</strong><small>Setup required</small></div></div>
        <div className="login-copy"><span className="eyebrow">Database unavailable</span><h1>Shared data cannot load</h1><p>{message}</p></div>
      </section>
    </main>
  );
}

function App() {
  useState(prepareCleanStorage);
  const [activePage, setActivePage] = useState('pos');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [invoiceModalOpen, setInvoiceModalOpen] = useState(false);
  const [invoiceListOpen, setInvoiceListOpen] = useState(false);
  const [stockModalOpen, setStockModalOpen] = useState(false);
  const [customerModalOpen, setCustomerModalOpen] = useState(false);
  const [plants, setPlants, plantsLoaded] = usePersistentState('plant-zone-plants', emptyPlants);
  const [customers, setCustomers] = usePersistentState('plant-zone-customers', emptyCustomers);
  const [invoices, setInvoices] = usePersistentState('plant-zone-invoices', emptyInvoices);
  const [saleAdjustments, setSaleAdjustments] = usePersistentState('plant-zone-sale-adjustments', []);
  const [expenses, setExpenses] = usePersistentState('plant-zone-expenses', []);
  const [users, setUsers, usersLoaded, usersLoadError] = usePersistentState('plant-zone-users', defaultUsers);
  const [auditLogs, setAuditLogs] = usePersistentState('plant-zone-audit-logs', defaultAuditLogs);
  const [inventoryHistory, setInventoryHistory, inventoryHistoryLoaded] = usePersistentState('plant-zone-stock-history', defaultInventoryHistory);
  const [sessionUserId, setSessionUserId] = useState(() => readSession()?.userId || '');
  const currentUser = users.find((user) => String(user.id) === String(sessionUserId) && user.active);
  const canViewReports = Boolean(currentUser && (hasPermission(currentUser, 'view_reports') || currentUser.can_view_reports));
  const visibleNavItems = navItems.filter((item) => {
    if (item.group === 'Reports') return canViewReports;
    if (item.group === 'Expenses') return hasPermission(currentUser, 'manage_inventory');
    if (item.id === 'stock') return hasPermission(currentUser, 'manage_inventory');
    if (item.id === 'settings') return Boolean(currentUser);
    if (['pos', 'sales', 'invoices', 'customers'].includes(item.id)) return hasPermission(currentUser, 'manage_sales');
    return false;
  });

  const rows = useMemo(() => flattenInvoiceRows(invoices), [invoices]);
  const activePlants = useMemo(() => plants.filter(isActivePlant), [plants]);
  useEffect(() => {
    if (!plantsLoaded || !inventoryHistoryLoaded) return;
    const recoveredPlants = recoverPlantsFromHistory(plants, inventoryHistory);
    if (!recoveredPlants.length) return;
    setPlants((current) => [...recoveredPlants.reverse(), ...current]);
  }, [plants, inventoryHistory, plantsLoaded, inventoryHistoryLoaded, setPlants]);

  useEffect(() => {
    if (!plantsLoaded || !plants.some((plant) => typeof plant.image === 'string' && plant.image.startsWith('data:image/') && plant.image.length > maxPlantImageBytes)) return;
    let isMounted = true;

    optimizeOversizedPlantImages(plants).then((optimizedPlants) => {
      if (!isMounted || optimizedPlants === plants) return;
      setPlants(optimizedPlants);
    });

    return () => {
      isMounted = false;
    };
  }, [plants, plantsLoaded, setPlants]);

  useEffect(() => {
    if (!plantsLoaded) return;
    const expiredDeletedPlants = plants.filter(shouldPurgeDeletedPlant);
    if (!expiredDeletedPlants.length) return;

    let isCancelled = false;

    async function purgeDeletedPlants() {
      const imagePaths = Array.from(new Set(expiredDeletedPlants
        .map((plant) => plant.image_path)
        .filter(Boolean)));

      if (imagePaths.length) {
        try {
          await deleteStorageImages(supabaseImageBucket, imagePaths);
        } catch (error) {
          console.warn('Could not delete one or more expired plant images from storage', error);
        }
      }

      if (isCancelled) return;
      setPlants((current) => current.filter((plant) => !shouldPurgeDeletedPlant(plant)));
    }

    purgeDeletedPlants();

    return () => {
      isCancelled = true;
    };
  }, [plants, plantsLoaded, setPlants]);

  const logAudit = (entry) => {
    setAuditLogs((current) => [{
      id: Date.now() + Math.random(),
      date: new Date().toISOString(),
      user_name: entry.user_name || currentUser?.name || 'System',
      action: entry.action,
      target: entry.target || '',
      detail: entry.detail || '',
    }, ...current].slice(0, 500));
  };
  const handleLogin = (userId) => {
    setSessionUserId(saveSession(userId));
  };
  const handleLogout = () => {
    clearSession();
    setSessionUserId('');
    setActivePage('pos');
  };

  useEffect(() => {
    if (sessionUserId) {
      saveSession(sessionUserId);
    } else {
      clearSession();
    }
  }, [sessionUserId]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      const session = readSession();
      if (sessionUserId && !session) {
        logAudit({
          action: 'Session expired',
          target: currentUser?.username || 'Session',
          detail: 'Automatic logout after inactivity window',
        });
        setSessionUserId('');
        setActivePage('pos');
      }
    }, 60000);
    return () => window.clearInterval(timer);
  }, [currentUser?.username, sessionUserId]);

  useEffect(() => {
    if (!canViewReports && ['daily', 'monthly', 'export'].includes(activePage)) setActivePage('pos');
  }, [activePage, canViewReports]);

  useEffect(() => {
    if (currentUser && !visibleNavItems.some((item) => item.id === activePage)) {
      setActivePage(visibleNavItems[0]?.id || 'settings');
    }
  }, [activePage, currentUser, visibleNavItems]);

  const nextInvoiceNo = useMemo(() => {
    const dateKey = today().replaceAll('-', '');
    const todaysCount = invoices.filter((invoice) => invoice.invoice_no.includes(dateKey)).length + 1;
    return `PZ-${dateKey}-${String(todaysCount).padStart(3, '0')}`;
  }, [invoices]);

  const todayRows = useMemo(() => rows.filter((row) => row.date === today()), [rows]);
  const monthlyRows = useMemo(() => rows.filter((row) => row.date.startsWith(monthNow())), [rows]);

  if (!isSupabaseConfigured) return <ConfigurationErrorPage />;
  if (!usersLoaded) return <LoadingPage />;
  if (usersLoadError) return <ConfigurationErrorPage message={usersLoadError} />;
  if (!currentUser) return <LoginPage users={users} setUsers={setUsers} onLogin={handleLogin} onAudit={logAudit} />;

  return (
    <div className="app-shell">
      <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="brand">
          <span className="brand-mark"><Sprout size={24} /></span>
          <div>
            <strong>Plant Zone POS</strong>
            <small>Garden Center | Pyay</small>
          </div>
        </div>
        <nav className="nav-list" aria-label="Main navigation">
          {['Selling', 'Reports', 'Expenses', 'System'].map((group) => (
            visibleNavItems.some((item) => item.group === group) && <React.Fragment key={group}>
              <div className="nav-label">{group}</div>
              {visibleNavItems.filter((item) => item.group === group).map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    className={`nav-item ${activePage === item.id ? 'active' : ''}`}
                    onClick={() => {
                      setActivePage(item.id);
                      setSidebarOpen(false);
                    }}
                  >
                    <Icon size={18} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </React.Fragment>
          ))}
        </nav>
      </aside>

      <div className="mobile-backdrop" hidden={!sidebarOpen} onClick={() => setSidebarOpen(false)} />

      <main className="main-content">
        <Header activePage={activePage} onMenu={() => setSidebarOpen(true)} onAddInvoice={() => setInvoiceModalOpen(true)} onShowInvoices={() => setInvoiceListOpen(true)} onAddPlant={() => setStockModalOpen(true)} onAddCustomer={() => setCustomerModalOpen(true)} />
        {activePage === 'pos' && (
          <DashboardPage
            plants={activePlants}
            rows={todayRows}
            invoices={invoices}
            monthlyRows={monthlyRows}
            expenses={expenses}
          />
        )}
        {activePage === 'sales' && (
          <SalesPage
            invoices={invoices}
            setInvoices={setInvoices}
            plants={activePlants}
            setPlants={setPlants}
            customers={customers}
            isFormOpen={invoiceModalOpen}
            setIsFormOpen={setInvoiceModalOpen}
            adjustments={saleAdjustments}
            setAdjustments={setSaleAdjustments}
            nextInvoiceNo={nextInvoiceNo}
            currentUser={currentUser}
            logAudit={logAudit}
            setInventoryHistory={setInventoryHistory}
          />
        )}
        {activePage === 'invoices' && (
          <>
            <InvoiceArchivePage invoices={invoices} setInvoices={setInvoices} plants={activePlants} customers={customers} logAudit={logAudit} />
            <InvoicesPage
              invoices={invoices}
              setInvoices={setInvoices}
              plants={activePlants}
              setPlants={setPlants}
              customers={customers}
              isFormOpen={invoiceModalOpen}
              setIsFormOpen={setInvoiceModalOpen}
              isListOpen={invoiceListOpen}
              setIsListOpen={setInvoiceListOpen}
              nextInvoiceNo={nextInvoiceNo}
              showWorkspace={false}
              currentUser={currentUser}
              logAudit={logAudit}
              setInventoryHistory={setInventoryHistory}
            />
          </>
        )}
        {activePage === 'stock' && <StockPage plants={activePlants} plantsLoaded={plantsLoaded} setPlants={setPlants} adjustments={saleAdjustments} setAdjustments={setSaleAdjustments} history={inventoryHistory} setHistory={setInventoryHistory} isFormOpen={stockModalOpen} setIsFormOpen={setStockModalOpen} currentUser={currentUser} logAudit={logAudit} />}
        {activePage === 'customers' && (
          <CustomersPage
            customers={customers}
            setCustomers={setCustomers}
            invoices={invoices}
            isFormOpen={customerModalOpen}
            setIsFormOpen={setCustomerModalOpen}
            currentUser={currentUser}
            logAudit={logAudit}
          />
        )}
        {activePage === 'daily' && <DailyDataPage rows={rows} expenses={expenses} />}
        {activePage === 'monthly' && <MonthlyDataPage rows={rows} invoices={invoices} expenses={expenses} />}
        {activePage === 'expenses' && <ExpensesPage expenses={expenses} setExpenses={setExpenses} logAudit={logAudit} currentUser={currentUser} />}
        {activePage === 'export' && <ExportCenterPage rows={rows} invoices={invoices} />}
        {activePage === 'settings' && <SettingsPage users={users} setUsers={setUsers} currentUser={currentUser} auditLogs={auditLogs} logAudit={logAudit} onLogout={() => { logAudit({ action: 'User logout', target: currentUser.username, detail: `${currentUser.name} signed out` }); handleLogout(); }} />}
      </main>
    </div>
  );
}

function Header({ activePage, onMenu, onAddInvoice, onShowInvoices, onAddPlant, onAddCustomer }) {
  const page = navItems.find((item) => item.id === activePage);
  const heroPlant = heroPlantImages[activePage] || heroPlantImages.pos;
  const isSalesPage = activePage === 'sales';
  const isInvoicesPage = activePage === 'invoices';
  const isStockPage = activePage === 'stock';
  const isCustomersPage = activePage === 'customers';
  return (
    <>
      <header className="topbar">
        <button className="icon-button mobile-menu" onClick={onMenu} aria-label="Open navigation">
          <Menu size={20} />
        </button>
        <button className="soft-button topbar-date"><CalendarDays size={17} /> {today()}</button>
      </header>
      <section className={`hero hero-${activePage}`}>
        <div className="hero-plant-photo" aria-hidden="true">
          <img
            src={heroPlant}
            alt=""
            loading="lazy"
            onError={(event) => {
              event.currentTarget.src = 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=900&q=80';
            }}
          />
        </div>
        <div className="hero-content">
          <div>
            <p className="eyebrow">Plant Zone Garden Center</p>
            <h1>{page?.label || 'Dashboard'}</h1>
            <p className="hero-copy">{activePage === 'pos' ? 'Key sales, invoice, stock, customer, and source health in one overview.' : 'A modern POS for plant sales, social media customers, delivery orders, reservations, landscaping service, invoices, and export-ready daily/monthly data.'}</p>
            {(isSalesPage || isInvoicesPage || isStockPage || isCustomersPage) && (
              <div className="hero-actions">
                {isSalesPage && <button className="primary-button" onClick={onAddInvoice}><Plus size={17} /> New Sale</button>}
                {isInvoicesPage && <button className="primary-button" onClick={onAddInvoice}><Plus size={17} /> New Invoice</button>}
                {isStockPage && <button className="primary-button" onClick={onAddPlant}><Plus size={17} /> Add Plant</button>}
                {isCustomersPage && <button className="primary-button" onClick={onAddCustomer}><Plus size={17} /> Add Customer</button>}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function DashboardPage({ plants, rows, invoices, monthlyRows, expenses }) {
  const todaySales = rows.reduce((sum, row) => sum + row.sale_amount, 0);
  const monthlySales = monthlyRows.reduce((sum, row) => sum + row.sale_amount, 0);
  const todayProfit = rows.reduce((sum, row) => sum + row.profit, 0);
  const monthlyProfit = monthlyRows.reduce((sum, row) => sum + row.profit, 0);
  const todayExpenses = expenseTotalFor(expenses, (expense) => expense.date === today());
  const monthlyExpenses = expenseTotalFor(expenses, (expense) => String(expense.date || '').startsWith(monthNow()));
  const todayNetProfit = todayProfit - todayExpenses;
  const monthlyNetProfit = monthlyProfit - monthlyExpenses;
  const invoiceCount = new Set(rows.map((row) => row.invoice_no)).size;
  const lowStockPlants = plants.filter((plant) => plant.quantity <= plant.low_stock_limit);
  const stockUnits = plants.reduce((sum, plant) => sum + Number(plant.quantity || 0), 0);
  const stockValue = plants.reduce((sum, plant) => sum + (Number(plant.quantity || 0) * Number(plant.unit_price || 0)), 0);
  const topSource = bestBy(rows.length ? rows : monthlyRows, 'customer_source') || '-';
  const recentInvoices = [...invoices].sort((a, b) => String(b.sale_date).localeCompare(String(a.sale_date))).slice(0, 5);
  const sourceRows = rows.length ? rows : monthlyRows;
  const sourceTotals = sources.map((source) => ({
    source,
    total: sourceRows.filter((row) => row.customer_source === source).reduce((sum, row) => sum + row.sale_amount, 0),
  }));
  const sourceMax = Math.max(1, ...sourceTotals.map((item) => item.total));

  return (
    <section className="dashboard-page">
      <div className="summary-grid reveal">
        <MetricCard icon={<Banknote size={18} />} label="Today Sales" value={money(todaySales)} detail={`${invoiceCount} invoices today`} />
        <MetricCard icon={<ReceiptText size={18} />} label="Today Expenses" value={money(todayExpenses)} detail="Costs recorded today" />
        <MetricCard icon={<BadgeDollarSign size={18} />} label="Today Net Profit" value={money(todayNetProfit)} detail={`${money(todayProfit)} gross profit`} />
        <MetricCard icon={<TrendingUp size={18} />} label="Monthly Sales" value={money(monthlySales)} detail={`${money(monthlyProfit)} gross profit`} />
        <MetricCard icon={<ReceiptText size={18} />} label="Monthly Expenses" value={money(monthlyExpenses)} detail="Costs recorded this month" />
        <MetricCard icon={<BadgeDollarSign size={18} />} label="Monthly Net Profit" value={money(monthlyNetProfit)} detail="Gross profit minus expenses" />
        <MetricCard icon={<Package size={18} />} label="Stock Value" value={money(stockValue)} detail={`${stockUnits} units in stock`} />
        <MetricCard icon={<TriangleAlert size={18} />} label="Low Stock" value={lowStockPlants.length} detail="Items needing refill" />
      </div>

      <div className="dashboard-grid">
        <section className="panel reveal dashboard-panel">
          <div className="panel-title-row">
            <div className="panel-title">
              <RadioTower size={20} />
              <div><h2>Sales by Source</h2><p>{rows.length ? 'Today customer source mix.' : 'Monthly source mix shown because today has no rows.'}</p></div>
            </div>
          </div>
          <div className="source-list">
            {sourceTotals.map((item) => (
              <div className="source-row" key={item.source}>
                <span>{item.source}</span>
                <div className="bar"><i style={{ width: `${Math.max(8, Math.round((item.total / sourceMax) * 100))}%` }} /></div>
                <b>{money(item.total)}</b>
              </div>
            ))}
          </div>
          <div className="dashboard-note"><Megaphone size={16} /> Top source: {topSource}</div>
        </section>

        <section className="panel reveal dashboard-panel">
          <div className="panel-title-row">
            <div className="panel-title">
              <ReceiptText size={20} />
              <div><h2>Recent Invoices</h2><p>Latest sales records.</p></div>
            </div>
          </div>
          <div className="dashboard-list">
            {recentInvoices.map((invoice) => (
              <div className="dashboard-list-row" key={invoice.id}>
                <span><strong>{invoice.invoice_no}</strong><small>{invoice.customer.cus_name} - {invoice.sale_date}</small></span>
                <b>{money(invoice.sale_amount)}</b>
              </div>
            ))}
            {recentInvoices.length === 0 && <div className="empty-state">No invoices yet.</div>}
          </div>
        </section>

        <section className="panel reveal dashboard-panel">
          <div className="panel-title-row">
            <div className="panel-title">
              <TriangleAlert size={20} />
              <div><h2>Stock Attention</h2><p>Plants at or below their low-stock limit.</p></div>
            </div>
          </div>
          <div className="dashboard-list">
            {lowStockPlants.slice(0, 6).map((plant) => (
              <div className="dashboard-list-row" key={plant.id}>
                <span><strong>{plant.plant_name}</strong><small>{plant.plant_code} - {plant.plant_type} / Size {plant.size}</small></span>
                <b>{plant.quantity}</b>
              </div>
            ))}
            {lowStockPlants.length === 0 && <div className="empty-state">Stock levels look healthy.</div>}
          </div>
        </section>
      </div>
    </section>
  );
}

function Totals({ totals }) {
  const itemTotal = Number(totals.gross ?? totals.subtotal ?? 0);
  const discount = Number(totals.discount || 0);
  const totalCost = Number(totals.total ?? (itemTotal - discount));
  return (
    <div className="totals">
      <div><span>Item total</span><strong>{money(itemTotal)}</strong></div>
      {discount > 0 && <div className="discount-total"><span>Discount</span><strong>- {money(discount)}</strong></div>}
      <div className="grand-total"><span>Total cost</span><strong>{money(totalCost)}</strong></div>
    </div>
  );
}

function SalesPage({ invoices, setInvoices, plants, setPlants, customers, isFormOpen, setIsFormOpen, adjustments, setAdjustments, nextInvoiceNo, currentUser, logAudit, setInventoryHistory }) {
  const [processTab, setProcessTab] = useState('return');
  const [salesStageFilter, setSalesStageFilter] = useState('All');
  const [selectedSalesDetailStage, setSelectedSalesDetailStage] = useState('');
  const [processNotice, setProcessNotice] = useState(null);
  const [draft, setDraft] = useState({
    plant_id: plants[0]?.id || '',
    customer_id: '',
    quantity: 1,
    return_condition: 'Good — return to available stock',
    refund_type: 'No refund',
    damage_cause: 'Shop damage',
    damage_result: 'Move to damaged stock',
    amount: 0,
    reason: '',
  });
  const selectedPlant = plants.find((plant) => String(plant.id) === String(draft.plant_id));
  const selectedCustomer = customers.find((customer) => String(customer.id) === String(draft.customer_id));
  const stageCount = (stage) => invoices.filter((invoice) => saleStageFor(invoice) === stage).length;
  const paidForInvoice = (invoice) => Number(invoice.paid_amount ?? (invoice.payment_status === 'Paid' ? invoice.sale_amount : 0));
  const invoicesByStage = saleStages.map((stage) => {
    const stageInvoices = invoices.filter((invoice) => saleStageFor(invoice) === stage);
    const saleTotal = stageInvoices.reduce((sum, invoice) => sum + Number(invoice.sale_amount || 0), 0);
    const paidTotal = stageInvoices.reduce((sum, invoice) => sum + paidForInvoice(invoice), 0);
    return {
      stage,
      invoices: stageInvoices,
      saleTotal,
      paidTotal,
      balanceTotal: Math.max(0, saleTotal - paidTotal),
      recentInvoices: [...stageInvoices].sort((a, b) => String(b.sale_date).localeCompare(String(a.sale_date))).slice(0, 3),
    };
  });
  const visibleSalesStages = salesStageFilter === 'All'
    ? invoicesByStage
    : invoicesByStage.filter((item) => item.stage === salesStageFilter);
  const selectedSalesDetail = invoicesByStage.find((item) => item.stage === selectedSalesDetailStage);
  const selectedSalesDetailInvoices = selectedSalesDetail?.stage === 'Confirmed'
    ? selectedSalesDetail.invoices.filter((invoice) => isWithinDays(invoice.created_at || invoice.sale_date, CONFIRMED_DETAIL_VISIBLE_DAYS))
    : selectedSalesDetail?.invoices || [];
  const requestedQuantity = Math.max(0, Number(draft.quantity) || 0);
  const processQuantity = processTab === 'damage'
    ? Math.min(requestedQuantity, Number(selectedPlant?.quantity || 0))
    : requestedQuantity;
  const stockEffect = useMemo(() => {
    const effect = { available: 0, damaged: 0, writtenOff: 0, supplierReturn: 0 };
    if (!selectedPlant || !processQuantity) return effect;
    if (processTab === 'return') {
      if (draft.return_condition.startsWith('Good')) effect.available = processQuantity;
      if (draft.return_condition.startsWith('Damaged')) effect.damaged = processQuantity;
      if (draft.return_condition.startsWith('Dead')) effect.writtenOff = processQuantity;
      return effect;
    }
    effect.available = -processQuantity;
    if (['Keep for recovery', 'Move to damaged stock'].includes(draft.damage_result)) effect.damaged = processQuantity;
    if (draft.damage_result === 'Write off') effect.writtenOff = processQuantity;
    if (draft.damage_result === 'Return to supplier') effect.supplierReturn = processQuantity;
    return effect;
  }, [selectedPlant, processQuantity, processTab, draft.return_condition, draft.damage_result]);

  const updateSaleStage = (invoice, stage) => {
    if (!invoice.stock_deducted) {
      const syncedAt = new Date().toISOString();
      const historyRows = plants.flatMap((plant) => {
        const soldItem = invoice.items.find((item) => String(item.plant_id) === String(plant.id) || item.plant_code === plant.plant_code);
        if (!soldItem) return [];
        const beforeQuantity = Number(plant.quantity || 0);
        const afterQuantity = Math.max(0, beforeQuantity - Number(soldItem.quantity || 0));
        return [{
          id: Date.now() + Math.random(),
          date: syncedAt,
          plant_name: plant.plant_name,
          plant_code: plant.plant_code,
          before_quantity: beforeQuantity,
          after_quantity: afterQuantity,
          reason: `Sale confirmed: ${invoice.invoice_no}`,
          user_name: currentUser.name,
        }];
      });
      setPlants((current) => current.map((plant) => {
        const soldItem = invoice.items.find((item) => String(item.plant_id) === String(plant.id) || item.plant_code === plant.plant_code);
        return soldItem ? { ...plant, quantity: Math.max(0, Number(plant.quantity || 0) - Number(soldItem.quantity || 0)), updated_at: today(), synced_at: syncedAt } : plant;
      }));
      if (historyRows.length) setInventoryHistory((history) => [...historyRows, ...history]);
    }
    setInvoices((current) => current.map((item) => item.id === invoice.id ? {
      ...item,
      order_status: stage,
      stock_deducted: true,
      updated_at: new Date().toISOString(),
    } : item));
    logAudit({ action: 'Sale stage updated', target: invoice.invoice_no, detail: `${saleStageFor(invoice)} -> ${stage}` });
  };

  const updatePaidAmount = (invoice, value) => {
    const paidAmount = Math.min(Math.max(Number(value) || 0, 0), Number(invoice.sale_amount || 0));
    const paymentStatus = paidAmount <= 0 ? 'Pending' : paidAmount >= Number(invoice.sale_amount || 0) ? 'Paid' : 'Partial';
    setInvoices((current) => current.map((item) => item.id === invoice.id ? { ...item, paid_amount: paidAmount, payment_status: paymentStatus } : item));
    logAudit({ action: 'Payment updated', target: invoice.invoice_no, detail: `${money(paidAmount)} / ${money(invoice.sale_amount)}` });
  };

  const applyProcess = () => {
    if (!selectedPlant || !processQuantity || !draft.reason.trim()) return;
    const processId = Date.now();
    const syncedAt = new Date().toISOString();
    const processLabel = processTab === 'return' ? 'Customer return' : 'Plant damage';
    const outcome = processTab === 'return' ? draft.return_condition : draft.damage_result;
    const processRecord = {
      id: processId,
      process_group: processTab,
      type: processLabel,
      outcome,
      cause: processTab === 'damage' ? draft.damage_cause : '',
      refund_type: processTab === 'return' ? draft.refund_type : 'No refund',
      plant_id: selectedPlant.id,
      plant_name: selectedPlant.plant_name,
      plant_code: selectedPlant.plant_code,
      customer_id: processTab === 'return' ? draft.customer_id : '',
      customer_name: processTab === 'return' ? selectedCustomer?.cus_name || 'Walk-in / no customer' : 'Inventory',
      date: today(),
      quantity: processQuantity,
      amount: processTab === 'return' && draft.refund_type !== 'No refund' ? Number(draft.amount || 0) : 0,
      reason: draft.reason.trim(),
      stock_delta: stockEffect.available,
      damaged_delta: stockEffect.damaged,
      written_off_delta: stockEffect.writtenOff,
      supplier_return_delta: stockEffect.supplierReturn,
      status: 'Completed',
    };
    setPlants((current) => current.map((plant) => (
      String(plant.id) === String(selectedPlant.id)
        ? {
          ...plant,
          quantity: Math.max(0, Number(plant.quantity || 0) + stockEffect.available),
          damaged_quantity: Math.max(0, Number(plant.damaged_quantity || 0) + stockEffect.damaged),
          written_off_quantity: Math.max(0, Number(plant.written_off_quantity || 0) + stockEffect.writtenOff),
          updated_at: today(),
          synced_at: syncedAt,
        }
        : plant
    )));
    setInventoryHistory((history) => [{
      id: processId + Math.random(),
      date: syncedAt,
      plant_name: selectedPlant.plant_name,
      plant_code: selectedPlant.plant_code,
      before_quantity: Number(selectedPlant.quantity || 0),
      after_quantity: Math.max(0, Number(selectedPlant.quantity || 0) + stockEffect.available),
      reason: `${processLabel}: ${draft.reason.trim()}`,
      user_name: currentUser.name,
    }, ...history]);
    setAdjustments((current) => [processRecord, ...current]);
    logAudit({ action: 'Inventory adjusted', target: selectedPlant.plant_name, detail: `${processLabel}: ${stockEffect.available >= 0 ? '+' : ''}${stockEffect.available}` });
    setProcessNotice(processRecord);
    setDraft((current) => ({ ...current, quantity: 1, amount: 0, reason: '' }));
  };

  const undoLastProcess = () => {
    if (!processNotice) return;
    const syncedAt = new Date().toISOString();
    setPlants((current) => current.map((plant) => (
      String(plant.id) === String(processNotice.plant_id)
        ? {
          ...plant,
          quantity: Math.max(0, Number(plant.quantity || 0) - Number(processNotice.stock_delta || 0)),
          damaged_quantity: Math.max(0, Number(plant.damaged_quantity || 0) - Number(processNotice.damaged_delta || 0)),
          written_off_quantity: Math.max(0, Number(plant.written_off_quantity || 0) - Number(processNotice.written_off_delta || 0)),
          updated_at: today(),
          synced_at: syncedAt,
        }
        : plant
    )));
    setAdjustments((current) => current.filter((item) => item.id !== processNotice.id));
    logAudit({ action: 'Inventory adjustment undone', target: processNotice.plant_name, detail: processNotice.reason });
    setProcessNotice(null);
  };

  return (
    <section className="sales-page">
      <div className="summary-grid reveal">
        <MetricCard icon={<Package size={18} />} label="Preparing" value={stageCount('Preparing')} detail="Getting orders ready" />
        <MetricCard icon={<Send size={18} />} label="On the way" value={stageCount('On the way')} detail="Orders in delivery" />
        <MetricCard icon={<ReceiptText size={18} />} label="Confirmed" value={stageCount('Confirmed')} detail="Sales completed" />
        <MetricCard icon={<BadgeDollarSign size={18} />} label="Paid sales" value={invoices.filter((item) => item.payment_status === 'Paid').length} detail="Payment completed" />
      </div>

      <section className="panel reveal">
        <div className="panel-title-row">
          <div><h2>Sales Pipeline</h2><p>Move each sale through Preparing, On the way, and Confirmed while tracking payment amounts.</p></div>
          <button className="primary-button" onClick={() => setIsFormOpen(true)}><Plus size={17} /> New Sale</button>
        </div>
        <div className="sales-filter-bar" role="tablist" aria-label="Sale stage filter">
          {['All', ...saleStages].map((stage) => (
            <button type="button" role="tab" aria-selected={salesStageFilter === stage} className={salesStageFilter === stage ? 'active' : ''} key={stage} onClick={() => setSalesStageFilter(stage)}>
              <span>{stage}</span>
              <strong>{stage === 'All' ? invoices.length : stageCount(stage)}</strong>
            </button>
          ))}
        </div>
        <div className={`sales-pipeline compact ${salesStageFilter === 'All' ? 'all-stages' : 'single-stage'}`}>
          {visibleSalesStages.map(({ stage, invoices: stageInvoices, saleTotal, paidTotal, balanceTotal, recentInvoices }) => (
            <section
              className={`sales-stage-column ${clean(stage).replaceAll(' ', '-')}`}
              key={stage}
              onClick={() => setSelectedSalesDetailStage(stage)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  setSelectedSalesDetailStage(stage);
                }
              }}
              tabIndex={0}
            >
              <div className="sales-stage-header">
                <span className={`status-pill ${clean(stage).replaceAll(' ', '-')}`}>{stage}</span>
                <strong>{stageInvoices.length}</strong>
              </div>
              <div className="sales-stage-summary">
                <div><span>Total</span><strong>{money(saleTotal)}</strong></div>
                <div><span>Paid</span><strong>{money(paidTotal)}</strong></div>
                <div><span>Balance</span><strong>{money(balanceTotal)}</strong></div>
              </div>
              <div className="sales-stage-preview">
                {recentInvoices.map((invoice) => (
                  <div key={`${stage}-preview-${invoice.id}`}>
                    <span><strong>{invoice.invoice_no}</strong><small>{invoice.customer.cus_name}</small></span>
                    <b>{money(invoice.sale_amount)}</b>
                  </div>
                ))}
                {!recentInvoices.length && <p>No sales in this stage yet.</p>}
              </div>
              <button type="button" className="ghost-button sales-more-button" onClick={(event) => { event.stopPropagation(); setSelectedSalesDetailStage(stage); }}>
                More details
              </button>
              <div className="sales-stage-list">
                {stageInvoices.map((invoice) => (
            <article className="sale-card" key={invoice.id}>
              <div className="sale-card-main">
                <strong>{invoice.invoice_no} · {invoice.customer.cus_name}</strong>
                <small>{invoice.items.length} item(s) · {money(invoice.sale_amount)} · {invoice.sale_date}</small>
              </div>
              <div className="sale-card-controls">
                <label>Sale stage<select value={saleStageFor(invoice)} onChange={(event) => updateSaleStage(invoice, event.target.value)}>{saleStages.map((item) => <option key={item}>{item}</option>)}</select></label>
                <label>Paid amount<input type="number" min="0" max={invoice.sale_amount} value={invoice.paid_amount ?? (invoice.payment_status === 'Paid' ? invoice.sale_amount : 0)} onChange={(event) => updatePaidAmount(invoice, event.target.value)} /></label>
              </div>
              <div className="payment-balance"><span>{invoice.payment_status}</span><strong>Balance {money(Math.max(0, Number(invoice.sale_amount || 0) - Number(invoice.paid_amount ?? (invoice.payment_status === 'Paid' ? invoice.sale_amount : 0))))}</strong></div>
                  </article>
                ))}
                {!stageInvoices.length && <div className="empty-state sales-stage-empty">No {stage.toLowerCase()} sales.</div>}
              </div>
            </section>
          ))}
        </div>
      </section>

      {selectedSalesDetail && (
        <div className="modal-backdrop sales-detail-backdrop" onMouseDown={() => setSelectedSalesDetailStage('')}>
          <div className="stock-modal sales-detail-modal" role="dialog" aria-modal="true" aria-labelledby="sales-detail-title" onMouseDown={(event) => event.stopPropagation()}>
            <div className="modal-title-row">
              <div>
                <h2 id="sales-detail-title">{selectedSalesDetail.stage} Sales</h2>
                <p>{selectedSalesDetailInvoices.length} sale{selectedSalesDetailInvoices.length === 1 ? '' : 's'} in this stage.</p>
              </div>
              <button className="icon-button" onClick={() => setSelectedSalesDetailStage('')} aria-label="Close sales details"><X size={18} /></button>
            </div>
            <div className="sales-stage-list sales-detail-list">
              {selectedSalesDetailInvoices.map((invoice) => (
                <article className="sale-card" key={invoice.id}>
                  <div className="sale-card-main">
                    <strong>{invoice.invoice_no} - {invoice.customer.cus_name}</strong>
                    <small>{invoice.items.length} item(s) - {money(invoice.sale_amount)} - {invoice.sale_date}</small>
                  </div>
                  <div className="sale-card-controls">
                    <label>Sale stage<select value={saleStageFor(invoice)} onChange={(event) => { updateSaleStage(invoice, event.target.value); setSelectedSalesDetailStage(event.target.value); }}>{saleStages.map((item) => <option key={item}>{item}</option>)}</select></label>
                    <label>Paid amount<input type="number" min="0" max={invoice.sale_amount} value={invoice.paid_amount ?? (invoice.payment_status === 'Paid' ? invoice.sale_amount : 0)} onChange={(event) => updatePaidAmount(invoice, event.target.value)} /></label>
                  </div>
                  <div className="payment-balance"><span>{invoice.payment_status}</span><strong>Balance {money(Math.max(0, Number(invoice.sale_amount || 0) - Number(invoice.paid_amount ?? (invoice.payment_status === 'Paid' ? invoice.sale_amount : 0))))}</strong></div>
                </article>
              ))}
              {!selectedSalesDetailInvoices.length && <div className="empty-state sales-stage-empty">No {selectedSalesDetail.stage.toLowerCase()} sales.</div>}
            </div>
          </div>
        </div>
      )}

      <section className="panel reveal process-center">
        <div className="panel-title-row">
          <div className="panel-title"><RotateCcw size={20} /><div><h2>Returns & Plant Damage</h2><p>Choose a process, enter the details, review the stock result, then confirm.</p></div></div>
        </div>
        <div className="process-tabs" role="tablist" aria-label="Stock process">
          <button className={processTab === 'return' ? 'active' : ''} onClick={() => { setProcessTab('return'); setProcessNotice(null); }}><RotateCcw size={17} /> Customer Return</button>
          <button className={processTab === 'damage' ? 'active' : ''} onClick={() => { setProcessTab('damage'); setProcessNotice(null); }}><TriangleAlert size={17} /> Plant Damage</button>
        </div>
        {processNotice && (
          <div className="process-success" role="status">
            <span><strong>{processNotice.quantity} × {processNotice.plant_name} processed successfully.</strong><small>{processNotice.outcome}</small></span>
            <button className="ghost-button" onClick={undoLastProcess}>Undo</button>
          </div>
        )}
        <div className="process-workspace">
          <div className="form-grid adjustment-form">
            <label className="span-2">Plant item<select value={draft.plant_id} onChange={(event) => setDraft({ ...draft, plant_id: event.target.value })}><option value="">Choose an item</option>{plants.map((plant) => <option value={plant.id} key={plant.id}>{plant.plant_name} — {plant.plant_code} — available {plant.quantity}</option>)}</select></label>
            {processTab === 'return' && <label className="span-2">Customer (optional)<select value={draft.customer_id} onChange={(event) => setDraft({ ...draft, customer_id: event.target.value })}><option value="">Walk-in / no customer</option>{customers.map((customer) => <option value={customer.id} key={customer.id}>{customer.cus_name} — {customer.cus_ph}</option>)}</select></label>}
            <label>Quantity<input type="number" min="1" max={processTab === 'damage' ? selectedPlant?.quantity || 1 : undefined} value={draft.quantity} onChange={(event) => setDraft({ ...draft, quantity: event.target.value })} /><small>{processTab === 'damage' && selectedPlant ? `Maximum available: ${selectedPlant.quantity}` : 'Enter the number of plants'}</small></label>
            {processTab === 'return' ? (
              <>
                <label>Plant condition<select value={draft.return_condition} onChange={(event) => setDraft({ ...draft, return_condition: event.target.value })}><option>Good — return to available stock</option><option>Damaged — move to damaged stock</option><option>Dead/unusable — write off</option></select></label>
                <label>Refund<select value={draft.refund_type} onChange={(event) => setDraft({ ...draft, refund_type: event.target.value })}><option>No refund</option><option>Full refund</option><option>Partial refund</option></select></label>
                {draft.refund_type !== 'No refund' && <label>Refund amount<input type="number" min="0" value={draft.amount} onChange={(event) => setDraft({ ...draft, amount: event.target.value })} /></label>}
              </>
            ) : (
              <>
                <label>Cause<select value={draft.damage_cause} onChange={(event) => setDraft({ ...draft, damage_cause: event.target.value })}><option>Shop damage</option><option>Delivery damage</option><option>Disease or pests</option><option>Dead plant</option><option>Supplier damage</option><option>Other</option></select></label>
                <label className="span-2">Result<select value={draft.damage_result} onChange={(event) => setDraft({ ...draft, damage_result: event.target.value })}><option>Keep for recovery</option><option>Move to damaged stock</option><option>Write off</option><option>Return to supplier</option></select></label>
              </>
            )}
            <label className="span-2">Reason / notes<textarea value={draft.reason} onChange={(event) => setDraft({ ...draft, reason: event.target.value })} placeholder={processTab === 'return' ? 'Why was the plant returned?' : 'What happened to the plant?'} /></label>
            <div className="quick-reasons span-2">
              {(processTab === 'return' ? ['Changed mind', 'Wrong item', 'Plant condition', 'Delivery issue'] : ['Broken pot', 'Wilted', 'Pest damage', 'Transport damage']).map((reason) => <button key={reason} type="button" onClick={() => setDraft({ ...draft, reason })}>{reason}</button>)}
            </div>
          </div>
          <aside className="stock-preview" aria-label="Stock change preview">
            <div><span>Stock result</span><strong>{selectedPlant?.plant_name || 'Choose a plant'}</strong></div>
            <StockPreviewRow label="Available stock" current={Number(selectedPlant?.quantity || 0)} delta={stockEffect.available} />
            <StockPreviewRow label="Damaged stock" current={Number(selectedPlant?.damaged_quantity || 0)} delta={stockEffect.damaged} />
            <StockPreviewRow label="Written off" current={Number(selectedPlant?.written_off_quantity || 0)} delta={stockEffect.writtenOff} />
            {stockEffect.supplierReturn > 0 && <div className="stock-preview-row supplier"><span>Return to supplier</span><strong>{stockEffect.supplierReturn}</strong></div>}
            <button className="primary-button wide" disabled={!selectedPlant || !processQuantity || !draft.reason.trim()} onClick={applyProcess}>{processTab === 'return' ? 'Complete Return' : 'Record Damage'}</button>
          </aside>
        </div>
      </section>

      <section className="panel reveal process-history">
        <div className="panel-title-row"><div><h2>Process History</h2><p>Completed returns and damage records are kept for stock auditing.</p></div></div>
        <div className="adjustment-list">
          {adjustments.map((item) => (
            <article className="adjustment-card" key={item.id}>
              <div><span className="status-pill completed">Completed</span><strong>{item.type} · {item.plant_name || item.plant_code}</strong><small>{item.customer_name || 'Inventory'} · {item.date}</small><p>{item.reason}</p><small>{item.quantity} unit(s) · {item.outcome || item.stock_action || 'Stock recorded'}{Number(item.amount || 0) > 0 ? ` · ${money(item.amount)}` : ''}</small></div>
            </article>
          ))}
          {!adjustments.length && <div className="empty-state">No return or damage records yet.</div>}
        </div>
      </section>

      <InvoicesPage invoices={invoices} setInvoices={setInvoices} plants={plants} setPlants={setPlants} customers={customers} isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} isListOpen={false} setIsListOpen={() => {}} nextInvoiceNo={nextInvoiceNo} showWorkspace={false} currentUser={currentUser} logAudit={logAudit} setInventoryHistory={setInventoryHistory} />
    </section>
  );
}

function StockPreviewRow({ label, current, delta }) {
  const next = Math.max(0, current + delta);
  return (
    <div className="stock-preview-row">
      <span>{label}</span>
      <strong>{current}</strong>
      <i className={delta > 0 ? 'positive' : delta < 0 ? 'negative' : ''}>{delta > 0 ? `+${delta}` : delta}</i>
      <b>{next}</b>
    </div>
  );
}

function InvoiceArchivePage({ invoices, setInvoices, plants = [], customers = [], logAudit }) {
  const emptyItem = { plant_id: '', plant_name: '', plant_code: '', plant_type: 'Indoor', size: 'M', quantity: 1, unit_price: 0, ws_price: 0 };
  const emptyDraft = {
    invoice_no: '',
    sale_date: today(),
    payment_status: 'Paid',
    payment_method: 'Cash',
    paid_amount: 0,
    order_status: 'Preparing',
    discount_amount: 0,
    customer: { cus_name: '', cus_ph: '', cus_address: '', source: 'Facebook' },
    items: [emptyItem],
    photo_session_package: defaultInvoicePackage,
  };
  const [filters, setFilters] = useState({ customer: '', status: '', date: today() });
  const [showMore, setShowMore] = useState(false);
  const [selectedId, setSelectedId] = useState(invoices[0]?.id || null);
  const [draft, setDraft] = useState(emptyDraft);
  const [editingId, setEditingId] = useState(null);
  const [formError, setFormError] = useState('');
  const sortedInvoices = [...invoices].sort((a, b) => String(b.sale_date || '').localeCompare(String(a.sale_date || '')) || String(b.created_at || b.id).localeCompare(String(a.created_at || a.id)));
  const previewInvoices = sortedInvoices.slice(0, 4);
  const previewIds = new Set(previewInvoices.map((invoice) => invoice.id));
  const filtered = sortedInvoices.filter((invoice) => (
    !previewIds.has(invoice.id)
    && (!filters.customer || clean(invoice.customer.cus_name).includes(clean(filters.customer)))
    && (!filters.status || invoice.payment_status === filters.status)
    && (!filters.date || invoice.sale_date === filters.date)
  )).sort((a, b) => String(b.created_at || b.id).localeCompare(String(a.created_at || a.id)));
  const groupedInvoices = filtered.reduce((groups, invoice) => {
    const date = invoice.sale_date || 'No date';
    groups[date] = groups[date] || [];
    groups[date].push(invoice);
    return groups;
  }, {});
  const selected = invoices.find((invoice) => invoice.id === selectedId) || previewInvoices[0] || filtered[0];
  const invoiceTotals = useMemo(() => {
    const itemTotals = draft.items.reduce((totals, item) => {
      const quantity = Number(item.quantity) || 0;
      const unit = Number(item.unit_price) || 0;
      const ws = Number(item.ws_price) || 0;
      totals.gross += quantity * unit;
      totals.wholesale += quantity * ws;
      return totals;
    }, { gross: 0, wholesale: 0 });
    const packageFee = Number(draft.photo_session_package?.fee) || 0;
    const gross = itemTotals.gross + packageFee;
    const discount = Math.min(Math.max(Number(draft.discount_amount) || 0, 0), gross);
    const total = gross - discount;
    return { ...itemTotals, packageFee, gross, discount, total, profit: total - itemTotals.wholesale };
  }, [draft.items, draft.discount_amount, draft.photo_session_package?.fee]);
  const deleteInvoice = (invoice) => {
    setInvoices((current) => current.filter((item) => item.id !== invoice.id));
    if (selectedId === invoice.id) setSelectedId('');
    logAudit?.({ action: 'Product sale deleted', target: invoice.invoice_no, detail: money(invoice.sale_amount) });
  };
  const closeEditForm = () => {
    setDraft(emptyDraft);
    setEditingId(null);
    setFormError('');
  };
  const editInvoice = (invoice) => {
    if (!invoice) return;
    setDraft({
      invoice_no: invoice.invoice_no,
      sale_date: invoice.sale_date,
      payment_status: invoice.payment_status,
      payment_method: invoice.payment_method,
      paid_amount: Number(invoice.paid_amount ?? (invoice.payment_status === 'Paid' ? invoice.sale_amount : 0)),
      order_status: invoice.order_status || 'Confirmed',
      discount_amount: Number(invoice.discount_amount || 0),
      customer: { ...invoice.customer },
      items: invoice.items.map((item) => ({
        plant_id: item.plant_id || '',
        plant_name: item.plant_name,
        plant_code: item.plant_code,
        plant_type: item.plant_type,
        size: item.size,
        quantity: item.quantity,
        unit_price: item.unit_price,
        ws_price: item.ws_price,
      })),
      photo_session_package: invoice.photo_session_package || defaultInvoicePackage,
    });
    setEditingId(invoice.id);
    setFormError('');
  };
  const selectCustomer = (customerId) => {
    const customer = customers.find((item) => String(item.id) === customerId);
    if (!customer) {
      setDraft((current) => ({
        ...current,
        customer: { cus_name: '', cus_ph: '', cus_address: '', source: current.customer.source || 'Facebook' },
      }));
      return;
    }
    setDraft((current) => ({
      ...current,
      customer: {
        id: customer.id,
        cus_name: customer.cus_name || '',
        cus_ph: customer.cus_ph || '',
        cus_address: customer.cus_address || '',
        source: customer.source || 'Facebook',
      },
    }));
  };
  const selectPlant = (index, plantId) => {
    const plant = plants.find((item) => String(item.id) === plantId);
    if (!plant) return;
    updateDraftItem(index, {
      plant_id: plant.id,
      plant_name: plant.plant_name,
      plant_code: plant.plant_code,
      plant_type: plant.plant_type,
      size: plant.size,
      unit_price: plant.unit_price,
      ws_price: plant.ws_price,
    });
  };
  const updateDraftItem = (index, updates) => {
    setDraft((current) => ({
      ...current,
      items: current.items.map((item, itemIndex) => (itemIndex === index ? { ...item, ...updates } : item)),
    }));
  };
  const updateDraftPackage = (updates) => {
    setDraft((current) => ({
      ...current,
      photo_session_package: { ...defaultInvoicePackage, ...current.photo_session_package, ...updates },
    }));
  };
  const uploadPackageImage = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/') || file.size > maxPlantUploadBytes) {
      setFormError(appError('Upload a valid package image under 5 MB.', 'FILE_UPLOAD_ERROR').message);
      event.target.value = '';
      return;
    }
    try {
      const image = await uploadOptimizedImage(file, 'invoice-packages');
      updateDraftPackage({ image: image.url, image_path: image.path });
      setFormError('');
    } catch (error) {
      console.error('Could not upload package image', error);
      setFormError(appError('Could not upload this package image. Try a different photo.', 'FILE_UPLOAD_ERROR').message);
    } finally {
      event.target.value = '';
    }
  };
  const saveEditedInvoice = () => {
    const validationError = validateInvoiceDraft(draft);
    if (validationError) {
      setFormError(appError(validationError, 'VALIDATION_ERROR').message);
      return;
    }
    const existingInvoice = invoices.find((invoice) => invoice.id === editingId);
    if (!existingInvoice) return;
    const items = draft.items
      .filter((item) => item.plant_name.trim())
      .map((item) => {
        const quantity = Number(item.quantity) || 0;
        const unit = Number(item.unit_price) || 0;
        const ws = Number(item.ws_price) || 0;
        return {
          plant_id: item.plant_id || Date.now(),
          plant_name: item.plant_name,
          plant_code: item.plant_code,
          plant_type: item.plant_type,
          size: item.size,
          quantity,
          unit_price: unit,
          ws_price: ws,
          sale_amount: quantity * unit,
          profit_amount: (quantity * (unit - ws)) - (invoiceTotals.gross ? invoiceTotals.discount * ((quantity * unit) / invoiceTotals.gross) : 0),
        };
      });
    const paidAmount = draft.payment_status === 'Paid'
      ? invoiceTotals.total
      : Math.min(Math.max(Number(draft.paid_amount) || 0, 0), invoiceTotals.total);
    const paymentStatus = paidAmount <= 0 ? 'Pending' : paidAmount >= invoiceTotals.total ? 'Paid' : 'Partial';
    const invoice = {
      ...existingInvoice,
      invoice_no: draft.invoice_no,
      customer: { ...existingInvoice.customer, ...draft.customer, updated_at: today() },
      sale_date: draft.sale_date || today(),
      payment_status: paymentStatus,
      payment_method: draft.payment_method,
      paid_amount: paidAmount,
      order_status: draft.order_status || existingInvoice.order_status || 'Preparing',
      gross_total: invoiceTotals.gross,
      discount_amount: invoiceTotals.discount,
      subtotal: invoiceTotals.total,
      wholesale_total: invoiceTotals.wholesale,
      profit_total: invoiceTotals.profit,
      sale_amount: invoiceTotals.total,
      items,
      photo_session_package: {
        ...defaultInvoicePackage,
        ...draft.photo_session_package,
        fee: Number(draft.photo_session_package?.fee) || 0,
      },
      updated_at: new Date().toISOString(),
    };
    setInvoices((current) => current.map((item) => (item.id === editingId ? invoice : item)));
    setSelectedId(invoice.id);
    logAudit?.({ action: 'Product sale updated', target: invoice.invoice_no, detail: `${invoice.items.length} item(s), ${money(invoice.sale_amount)}` });
    closeEditForm();
  };

  return (
    <section className="invoice-archive">
      <div className="panel reveal invoice-archive-panel">
        <div className="panel-title-row">
          <div><h2>Invoice Archive</h2><p>Recent invoices stay compact. Open more to browse invoices by date.</p></div>
        </div>
        <div className="invoice-archive-list">
          {previewInvoices.map((invoice) => (
            <InvoiceArchiveRow invoice={invoice} selected={selected?.id === invoice.id} onSelect={() => setSelectedId(invoice.id)} onDelete={() => deleteInvoice(invoice)} key={invoice.id} />
          ))}
          {!previewInvoices.length && <div className="empty-state">No invoices yet.</div>}
        </div>
        {sortedInvoices.length > 4 && <button className="ghost-button wide invoice-more-button" onClick={() => setShowMore((current) => !current)}>{showMore ? 'Show less' : 'More'}</button>}
        {showMore && (
          <div className="invoice-more-panel">
            <div className="filter-grid invoice-archive-filters">
              <label>Date<input type="date" value={filters.date} onChange={(event) => setFilters({ ...filters, date: event.target.value })} /></label>
              <label>Customer<input value={filters.customer} onChange={(event) => setFilters({ ...filters, customer: event.target.value })} placeholder="Search customer" /></label>
              <label>Status<select value={filters.status} onChange={(event) => setFilters({ ...filters, status: event.target.value })}><option value="">All statuses</option>{paymentStatuses.map((status) => <option key={status}>{status}</option>)}</select></label>
            </div>
            <div className="invoice-date-groups">
              {Object.entries(groupedInvoices).map(([date, dateInvoices]) => (
                <section className="invoice-date-group" key={date}>
                  <h3>{date}</h3>
                  <div className="invoice-archive-list">
                    {dateInvoices.map((invoice) => (
                      <InvoiceArchiveRow invoice={invoice} selected={selected?.id === invoice.id} onSelect={() => setSelectedId(invoice.id)} onDelete={() => deleteInvoice(invoice)} key={invoice.id} />
                    ))}
                  </div>
                </section>
              ))}
              {!filtered.length && <div className="empty-state">No invoices match these filters.</div>}
            </div>
          </div>
        )}
      </div>
      <InvoiceDetail invoice={selected} onEdit={editInvoice} onDelete={() => selected && deleteInvoice(selected)} />
      {editingId && (
        <div className="modal-backdrop" role="presentation" onMouseDown={closeEditForm}>
          <div className="stock-modal invoice-modal" role="dialog" aria-modal="true" aria-labelledby="invoice-edit-modal-title" onMouseDown={(event) => event.stopPropagation()}>
            <div className="modal-title-row">
              <div>
                <h2 id="invoice-edit-modal-title">Edit Sale</h2>
                <p>Update sale customer, payment, and item rows.</p>
              </div>
              <button className="icon-button" onClick={closeEditForm} aria-label="Close invoice form"><X size={17} /></button>
            </div>
            <div className="form-grid invoice-form">
              {formError && <p className="login-error span-2" role="alert">{formError}</p>}
              <label>Invoice no<input value={draft.invoice_no} onChange={(event) => setDraft({ ...draft, invoice_no: event.target.value })} /></label>
              <label>Sale date<input type="date" value={draft.sale_date} onChange={(event) => setDraft({ ...draft, sale_date: event.target.value })} /></label>
              <label className="span-2">Choose customer<select value={draft.customer.id || ''} onChange={(event) => selectCustomer(event.target.value)}><option value="">New customer / not saved yet</option>{customers.map((customer) => <option value={customer.id} key={customer.id}>{customer.cus_name} - {customer.cus_ph || customer.source}</option>)}</select></label>
              <label>Customer name<input value={draft.customer.cus_name} onChange={(event) => setDraft({ ...draft, customer: { ...draft.customer, cus_name: event.target.value } })} /></label>
              <label>Phone<input value={draft.customer.cus_ph} onChange={(event) => setDraft({ ...draft, customer: { ...draft.customer, cus_ph: event.target.value } })} /></label>
              <label>Address<input value={draft.customer.cus_address} onChange={(event) => setDraft({ ...draft, customer: { ...draft.customer, cus_address: event.target.value } })} /></label>
              <label>Source<select value={draft.customer.source} onChange={(event) => setDraft({ ...draft, customer: { ...draft.customer, source: event.target.value } })}>{sources.map((source) => <option key={source}>{source}</option>)}</select></label>
              <label>Payment status<select value={draft.payment_status} onChange={(event) => setDraft({ ...draft, payment_status: event.target.value, paid_amount: event.target.value === 'Paid' ? invoiceTotals.total : event.target.value === 'Pending' ? 0 : draft.paid_amount })}>{paymentStatuses.map((status) => <option key={status}>{status}</option>)}</select></label>
              <label>Payment method<input value={draft.payment_method} onChange={(event) => setDraft({ ...draft, payment_method: event.target.value })} /></label>
              {draft.payment_status === 'Partial' && <label className="span-2">Amount paid (Ks)<input type="number" min="0" max={invoiceTotals.total} value={draft.paid_amount} onChange={(event) => setDraft({ ...draft, paid_amount: event.target.value })} /><small>Balance: {money(Math.max(0, invoiceTotals.total - Number(draft.paid_amount || 0)))}</small></label>}
              <label className="span-2">Sale discount (Ks)<input type="number" min="0" max={invoiceTotals.gross} value={draft.discount_amount} onChange={(event) => setDraft({ ...draft, discount_amount: event.target.value })} placeholder="0" /></label>
            </div>
            <div className="invoice-item-editor">
              {draft.items.map((item, index) => (
                <div className="invoice-edit-row" key={`archive-draft-item-${index}`}>
                  <label>Plant<select value={item.plant_id || ''} onChange={(event) => selectPlant(index, event.target.value)}><option value="">Choose stock plant</option>{plants.map((plant) => <option value={plant.id} key={plant.id}>{plant.plant_name} - {plant.plant_code}</option>)}</select></label>
                  <label>Qty<input type="number" value={item.quantity} onChange={(event) => updateDraftItem(index, { quantity: Number(event.target.value) })} /></label>
                  <label>Selling price<input type="number" value={item.unit_price} onChange={(event) => updateDraftItem(index, { unit_price: Number(event.target.value) })} /></label>
                  <label>Original cost<input type="number" value={item.ws_price} onChange={(event) => updateDraftItem(index, { ws_price: Number(event.target.value) })} /></label>
                  <button className="icon-button danger" onClick={() => setDraft((current) => ({ ...current, items: current.items.filter((_, itemIndex) => itemIndex !== index) }))} aria-label="Remove invoice item"><Trash2 size={16} /></button>
                </div>
              ))}
              <button className="ghost-button" onClick={() => setDraft((current) => ({ ...current, items: [...current.items, emptyItem] }))}><Plus size={17} /> Add item</button>
            </div>
            <section className="invoice-package-form">
              <div className="panel-title-row">
                <div><h3>Plant Package</h3><p>Add a package photo and price to show on the customer invoice.</p></div>
              </div>
              <div className="form-grid">
                <label>Package name<input value={draft.photo_session_package?.title || ''} onChange={(event) => updateDraftPackage({ title: event.target.value })} placeholder="Plant Package" /></label>
                <label>Package fee (Ks)<input type="number" min="0" value={draft.photo_session_package?.fee || 0} onChange={(event) => updateDraftPackage({ fee: Number(event.target.value) })} /></label>
                <label className="span-2 image-upload-field">
                  Package image
                  <span className="image-upload-control">
                    {draft.photo_session_package?.image ? <img src={draft.photo_session_package.image} alt="Package preview" /> : <Package size={30} />}
                    <span>Upload package image</span>
                    <input type="file" accept="image/*" onChange={uploadPackageImage} />
                  </span>
                </label>
              </div>
            </section>
            <Totals totals={{ gross: invoiceTotals.gross, discount: invoiceTotals.discount, total: invoiceTotals.total }} />
            <button className="primary-button wide" onClick={saveEditedInvoice}><Plus size={17} /> Update sale</button>
          </div>
        </div>
      )}
    </section>
  );
}

function InvoiceArchiveRow({ invoice, selected, onSelect, onDelete }) {
  return (
    <article className={`invoice-row invoice-card-row ${selected ? 'active' : ''}`}>
      <button type="button" onClick={onSelect}>
        <span><strong>{invoice.invoice_no}</strong><small>{invoice.sale_date} - {invoice.customer.cus_name}</small></span>
        <span><strong>{money(invoice.sale_amount)}</strong><small>{invoice.payment_status}</small></span>
      </button>
      <button type="button" className="icon-button danger invoice-row-delete" onClick={onDelete} aria-label={`Delete ${invoice.invoice_no}`}><Trash2 size={16} /></button>
    </article>
  );
}

function InvoicesPage({ invoices, setInvoices, plants, setPlants, customers, isFormOpen, setIsFormOpen, isListOpen, setIsListOpen, nextInvoiceNo, showWorkspace = true, currentUser, logAudit, setInventoryHistory }) {
  const emptyItem = { plant_id: '', plant_name: '', plant_code: '', plant_type: 'Indoor', size: 'M', quantity: 1, unit_price: 0, ws_price: 0 };
  const emptyDraft = {
    invoice_no: nextInvoiceNo,
    sale_date: today(),
    payment_status: 'Paid',
    payment_method: 'Cash',
    paid_amount: 0,
    order_status: 'Preparing',
    discount_amount: 0,
    customer: { cus_name: '', cus_ph: '', cus_address: '', source: 'Facebook' },
    items: [emptyItem],
    photo_session_package: defaultInvoicePackage,
  };
  const [filters, setFilters] = useState({ date: '', customer: '', status: '', source: '' });
  const [selectedId, setSelectedId] = useState(invoices[0]?.id ?? null);
  const [draft, setDraft] = useState(emptyDraft);
  const [editingId, setEditingId] = useState(null);
  const [formError, setFormError] = useState('');
  const selected = invoices.find((invoice) => invoice.id === selectedId) || invoices[0];
  const filtered = invoices.filter((invoice) => (
    (!filters.date || invoice.sale_date === filters.date)
    && (!filters.customer || clean(invoice.customer.cus_name).includes(clean(filters.customer)))
    && (!filters.status || invoice.payment_status === filters.status)
    && (!filters.source || invoice.customer.source === filters.source)
  ));

  useEffect(() => {
    if (!selectedId && invoices[0]) setSelectedId(invoices[0].id);
  }, [invoices, selectedId]);

  useEffect(() => {
    if (!editingId) setDraft((current) => ({ ...current, invoice_no: nextInvoiceNo }));
  }, [editingId, nextInvoiceNo]);

  const invoiceTotals = useMemo(() => {
    const itemTotals = draft.items.reduce((totals, item) => {
      const quantity = Number(item.quantity) || 0;
      const unit = Number(item.unit_price) || 0;
      const ws = Number(item.ws_price) || 0;
      totals.gross += quantity * unit;
      totals.wholesale += quantity * ws;
      return totals;
    }, { gross: 0, wholesale: 0 });
    const packageFee = Number(draft.photo_session_package?.fee) || 0;
    const gross = itemTotals.gross + packageFee;
    const discount = Math.min(Math.max(Number(draft.discount_amount) || 0, 0), gross);
    const total = gross - discount;
    return { ...itemTotals, packageFee, gross, discount, total, profit: total - itemTotals.wholesale };
  }, [draft.items, draft.discount_amount, draft.photo_session_package?.fee]);

  const closeForm = () => {
    setDraft({ ...emptyDraft, invoice_no: nextInvoiceNo });
    setEditingId(null);
    setFormError('');
    setIsFormOpen(false);
  };

  const editInvoice = (invoice) => {
    if (!invoice) return;
    setDraft({
      invoice_no: invoice.invoice_no,
      sale_date: invoice.sale_date,
      payment_status: invoice.payment_status,
      payment_method: invoice.payment_method,
      paid_amount: Number(invoice.paid_amount ?? (invoice.payment_status === 'Paid' ? invoice.sale_amount : 0)),
      order_status: invoice.order_status || 'Confirmed',
      discount_amount: Number(invoice.discount_amount || 0),
      customer: { ...invoice.customer },
      items: invoice.items.map((item) => ({
        plant_id: item.plant_id || '',
        plant_name: item.plant_name,
        plant_code: item.plant_code,
        plant_type: item.plant_type,
        size: item.size,
        quantity: item.quantity,
        unit_price: item.unit_price,
        ws_price: item.ws_price,
      })),
      photo_session_package: invoice.photo_session_package || defaultInvoicePackage,
    });
    setEditingId(invoice.id);
    setIsFormOpen(true);
  };

  const selectCustomer = (customerId) => {
    const customer = customers.find((item) => String(item.id) === customerId);
    if (!customer) {
      setDraft((current) => ({
        ...current,
        customer: { cus_name: '', cus_ph: '', cus_address: '', source: current.customer.source || 'Facebook' },
      }));
      return;
    }
    setDraft((current) => ({
      ...current,
      customer: {
        id: customer.id,
        cus_name: customer.cus_name || '',
        cus_ph: customer.cus_ph || '',
        cus_address: customer.cus_address || '',
        source: customer.source || 'Facebook',
      },
    }));
  };

  const selectPlant = (index, plantId) => {
    const plant = plants.find((item) => String(item.id) === plantId);
    if (!plant) return;
    updateDraftItem(index, {
      plant_id: plant.id,
      plant_name: plant.plant_name,
      plant_code: plant.plant_code,
      plant_type: plant.plant_type,
      size: plant.size,
      unit_price: plant.unit_price,
      ws_price: plant.ws_price,
    });
  };

  const updateDraftItem = (index, updates) => {
    setDraft((current) => ({
      ...current,
      items: current.items.map((item, itemIndex) => (itemIndex === index ? { ...item, ...updates } : item)),
    }));
  };
  const updateDraftPackage = (updates) => {
    setDraft((current) => ({
      ...current,
      photo_session_package: { ...defaultInvoicePackage, ...current.photo_session_package, ...updates },
    }));
  };
  const uploadPackageImage = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/') || file.size > maxPlantUploadBytes) {
      setFormError(appError('Upload a valid package image under 5 MB.', 'FILE_UPLOAD_ERROR').message);
      event.target.value = '';
      return;
    }
    try {
      const image = await uploadOptimizedImage(file, 'invoice-packages');
      updateDraftPackage({ image: image.url, image_path: image.path });
      setFormError('');
    } catch (error) {
      console.error('Could not upload package image', error);
      setFormError(appError('Could not upload this package image. Try a different photo.', 'FILE_UPLOAD_ERROR').message);
    } finally {
      event.target.value = '';
    }
  };

  const saveInvoice = () => {
    const validationError = validateInvoiceDraft(draft);
    if (validationError) {
      setFormError(appError(validationError, 'VALIDATION_ERROR').message);
      return;
    }
    const items = draft.items
      .filter((item) => item.plant_name.trim())
      .map((item) => {
        const quantity = Number(item.quantity) || 0;
        const unit = Number(item.unit_price) || 0;
        const ws = Number(item.ws_price) || 0;
        return {
          plant_id: item.plant_id || Date.now(),
          plant_name: item.plant_name,
          plant_code: item.plant_code,
          plant_type: item.plant_type,
          size: item.size,
          quantity,
          unit_price: unit,
          ws_price: ws,
          sale_amount: quantity * unit,
          profit_amount: (quantity * (unit - ws)) - (invoiceTotals.gross ? invoiceTotals.discount * ((quantity * unit) / invoiceTotals.gross) : 0),
        };
      });
    const paidAmount = draft.payment_status === 'Paid'
      ? invoiceTotals.total
      : Math.min(Math.max(Number(draft.paid_amount) || 0, 0), invoiceTotals.total);
    const paymentStatus = paidAmount <= 0 ? 'Pending' : paidAmount >= invoiceTotals.total ? 'Paid' : 'Partial';
    const invoice = {
      id: editingId || Date.now(),
      invoice_no: draft.invoice_no || nextInvoiceNo,
      customer: { id: editingId || Date.now(), ...draft.customer, created_at: today(), updated_at: today() },
      sale_date: draft.sale_date || today(),
      payment_status: paymentStatus,
      payment_method: draft.payment_method,
      paid_amount: paidAmount,
      order_status: draft.order_status || 'Preparing',
      stock_deducted: true,
      gross_total: invoiceTotals.gross,
      discount_amount: invoiceTotals.discount,
      subtotal: invoiceTotals.total,
      wholesale_total: invoiceTotals.wholesale,
      profit_total: invoiceTotals.profit,
      sale_amount: invoiceTotals.total,
      items,
      photo_session_package: {
        ...defaultInvoicePackage,
        ...draft.photo_session_package,
        fee: Number(draft.photo_session_package?.fee) || 0,
      },
      created_at: new Date().toISOString(),
    };
    if (editingId) {
      setInvoices((current) => current.map((item) => (item.id === editingId ? invoice : item)));
      logAudit?.({ action: 'Product sale updated', target: invoice.invoice_no, detail: `${invoice.items.length} item(s), ${money(invoice.sale_amount)}` });
    } else {
      const syncedAt = new Date().toISOString();
      const historyRows = [];
      setPlants?.((current) => current.map((plant) => {
        const soldItem = items.find((item) => String(item.plant_id) === String(plant.id) || item.plant_code === plant.plant_code);
        if (!soldItem) return plant;
        const beforeQuantity = Number(plant.quantity || 0);
        const afterQuantity = Math.max(0, beforeQuantity - Number(soldItem.quantity || 0));
        historyRows.push({
          id: Date.now() + Math.random(),
          date: syncedAt,
          plant_name: plant.plant_name,
          plant_code: plant.plant_code,
          before_quantity: beforeQuantity,
          after_quantity: afterQuantity,
          reason: `Sale: ${invoice.invoice_no}`,
          user_name: currentUser?.name || 'System',
        });
        return { ...plant, quantity: afterQuantity, updated_at: today(), synced_at: syncedAt };
      }));
      if (historyRows.length) setInventoryHistory?.((current) => [...historyRows, ...current]);
      setInvoices((current) => [invoice, ...current]);
      setSelectedId(invoice.id);
      logAudit?.({ action: 'Product sale created', target: invoice.invoice_no, detail: `${invoice.items.length} item(s), ${money(invoice.sale_amount)}` });
    }
    closeForm();
  };

  const invoiceListPanel = (
    <div className="invoice-list-panel">
      <div className="panel-title-row">
        <div><h2>Invoices</h2><p>Filter by date, customer, status, and source.</p></div>
        <button className="ghost-button" onClick={() => exportRows('plant-zone-invoices', flattenInvoiceRows(filtered), 'csv')}><Download size={17} /> CSV</button>
      </div>
      <div className="filter-grid invoice-list-filters">
        <label>Date<input type="date" value={filters.date} onChange={(event) => setFilters({ ...filters, date: event.target.value })} /></label>
        <label>Customer<input value={filters.customer} onChange={(event) => setFilters({ ...filters, customer: event.target.value })} placeholder="Customer name" /></label>
        <label>Status<select value={filters.status} onChange={(event) => setFilters({ ...filters, status: event.target.value })}><option value="">All</option>{paymentStatuses.map((status) => <option key={status}>{status}</option>)}</select></label>
        <label>Source<select value={filters.source} onChange={(event) => setFilters({ ...filters, source: event.target.value })}><option value="">All</option>{sources.map((source) => <option key={source}>{source}</option>)}</select></label>
      </div>
      <div className="list-stack">
        {filtered.map((invoice) => (
          <button key={invoice.id} className={`invoice-row ${selected?.id === invoice.id ? 'active' : ''}`} onClick={() => { setSelectedId(invoice.id); setIsListOpen(false); }}>
            <span><strong>{invoice.invoice_no}</strong><small>{invoice.customer.cus_name} - {invoice.customer.source}</small></span>
            <span><strong>{money(invoice.sale_amount)}</strong><small>{invoice.payment_status}</small></span>
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <>
      {showWorkspace && <section className="page-grid invoice-page-grid invoice-detail-grid">
        <InvoiceDetail invoice={selected} onEdit={editInvoice} onDelete={(id) => {
          const invoice = invoices.find((item) => item.id === id);
          setInvoices((current) => current.filter((invoice) => invoice.id !== id));
          if (invoice) logAudit?.({ action: 'Product sale deleted', target: invoice.invoice_no, detail: money(invoice.sale_amount) });
        }} />
      </section>}
      {isListOpen && (
        <div className="modal-backdrop" role="presentation" onMouseDown={() => setIsListOpen(false)}>
          <div className="stock-modal invoice-list-modal" role="dialog" aria-modal="true" aria-labelledby="invoice-list-title" onMouseDown={(event) => event.stopPropagation()}>
            <div className="modal-title-row">
              <div>
                <h2 id="invoice-list-title">Invoice List</h2>
                <p>Choose an invoice or export the filtered rows.</p>
              </div>
              <button className="icon-button" onClick={() => setIsListOpen(false)} aria-label="Close invoice list"><X size={17} /></button>
            </div>
            {invoiceListPanel}
          </div>
        </div>
      )}
      {isFormOpen && (
        <div className="modal-backdrop" role="presentation" onMouseDown={closeForm}>
          <div className="stock-modal invoice-modal" role="dialog" aria-modal="true" aria-labelledby="invoice-modal-title" onMouseDown={(event) => event.stopPropagation()}>
            <div className="modal-title-row">
              <div>
                <h2 id="invoice-modal-title">{editingId ? 'Edit Sale' : 'New Sale'}</h2>
                <p>{editingId ? 'Update sale customer, payment, and item rows.' : 'Build the sale, then confirm it from the Sales Pipeline.'}</p>
              </div>
              <button className="icon-button" onClick={closeForm} aria-label="Close invoice form"><X size={17} /></button>
            </div>
            <div className="form-grid invoice-form">
              {formError && <p className="login-error span-2" role="alert">{formError}</p>}
              <label>Invoice no<input value={draft.invoice_no} onChange={(event) => setDraft({ ...draft, invoice_no: event.target.value })} /></label>
              <label>Sale date<input type="date" value={draft.sale_date} onChange={(event) => setDraft({ ...draft, sale_date: event.target.value })} /></label>
              <label className="span-2">Choose customer<select value={draft.customer.id || ''} onChange={(event) => selectCustomer(event.target.value)}><option value="">New customer / not saved yet</option>{customers.map((customer) => <option value={customer.id} key={customer.id}>{customer.cus_name} - {customer.cus_ph || customer.source}</option>)}</select></label>
              <label>Customer name<input value={draft.customer.cus_name} onChange={(event) => setDraft({ ...draft, customer: { ...draft.customer, cus_name: event.target.value } })} /></label>
              <label>Phone<input value={draft.customer.cus_ph} onChange={(event) => setDraft({ ...draft, customer: { ...draft.customer, cus_ph: event.target.value } })} /></label>
              <label>Address<input value={draft.customer.cus_address} onChange={(event) => setDraft({ ...draft, customer: { ...draft.customer, cus_address: event.target.value } })} /></label>
              <label>Source<select value={draft.customer.source} onChange={(event) => setDraft({ ...draft, customer: { ...draft.customer, source: event.target.value } })}>{sources.map((source) => <option key={source}>{source}</option>)}</select></label>
              <label>Payment status<select value={draft.payment_status} onChange={(event) => setDraft({ ...draft, payment_status: event.target.value, paid_amount: event.target.value === 'Paid' ? invoiceTotals.total : event.target.value === 'Pending' ? 0 : draft.paid_amount })}>{paymentStatuses.map((status) => <option key={status}>{status}</option>)}</select></label>
              <label>Payment method<input value={draft.payment_method} onChange={(event) => setDraft({ ...draft, payment_method: event.target.value })} /></label>
              {draft.payment_status === 'Partial' && <label className="span-2">Amount paid (Ks)<input type="number" min="0" max={invoiceTotals.total} value={draft.paid_amount} onChange={(event) => setDraft({ ...draft, paid_amount: event.target.value })} /><small>Balance: {money(Math.max(0, invoiceTotals.total - Number(draft.paid_amount || 0)))}</small></label>}
              <label className="span-2">Sale discount (Ks)<input type="number" min="0" max={invoiceTotals.gross} value={draft.discount_amount} onChange={(event) => setDraft({ ...draft, discount_amount: event.target.value })} placeholder="0" /></label>
            </div>
            <div className="invoice-item-editor">
              {draft.items.map((item, index) => (
                <div className="invoice-edit-row" key={`draft-item-${index}`}>
                  <label>Plant<select value={item.plant_id || ''} onChange={(event) => selectPlant(index, event.target.value)}><option value="">Choose stock plant</option>{plants.map((plant) => <option value={plant.id} key={plant.id}>{plant.plant_name} - {plant.plant_code}</option>)}</select></label>
                  <label>Item name<input value={item.plant_name} onChange={(event) => updateDraftItem(index, { plant_name: event.target.value })} placeholder="Plant or package item" /></label>
                  <label>Qty<input type="number" value={item.quantity} onChange={(event) => updateDraftItem(index, { quantity: Number(event.target.value) })} /></label>
                  <label>Selling price<input type="number" value={item.unit_price} onChange={(event) => updateDraftItem(index, { unit_price: Number(event.target.value) })} /></label>
                  <label>Original cost<input type="number" value={item.ws_price} onChange={(event) => updateDraftItem(index, { ws_price: Number(event.target.value) })} /></label>
                  <button className="icon-button danger" onClick={() => setDraft((current) => ({ ...current, items: current.items.filter((_, itemIndex) => itemIndex !== index) }))} aria-label="Remove invoice item"><Trash2 size={16} /></button>
                </div>
              ))}
              <button className="ghost-button" onClick={() => setDraft((current) => ({ ...current, items: [...current.items, emptyItem] }))}><Plus size={17} /> Add item</button>
            </div>
            <section className="invoice-package-form">
              <div className="panel-title-row">
                <div><h3>Plant Package</h3><p>Add a package photo and price to show on the customer invoice.</p></div>
              </div>
              <div className="form-grid">
                <label>Package name<input value={draft.photo_session_package?.title || ''} onChange={(event) => updateDraftPackage({ title: event.target.value })} placeholder="Plant Package" /></label>
                <label>Package fee (Ks)<input type="number" min="0" value={draft.photo_session_package?.fee || 0} onChange={(event) => updateDraftPackage({ fee: Number(event.target.value) })} /></label>
                <label className="span-2 image-upload-field">
                  Package image
                  <span className="image-upload-control">
                    {draft.photo_session_package?.image ? <img src={draft.photo_session_package.image} alt="Package preview" /> : <Package size={30} />}
                    <span>Upload package image</span>
                    <input type="file" accept="image/*" onChange={uploadPackageImage} />
                  </span>
                </label>
              </div>
            </section>
            <Totals totals={{ gross: invoiceTotals.gross, discount: invoiceTotals.discount, total: invoiceTotals.total }} />
            <button className="primary-button wide" onClick={saveInvoice}><Plus size={17} /> {editingId ? 'Update sale' : 'Save new sale'}</button>
          </div>
        </div>
      )}
    </>
  );
}

function InvoiceDetail({ invoice, onEdit, onDelete, readOnly = false }) {
  if (!invoice) return <div className="panel empty-state">No invoices yet.</div>;
  const paidAmount = Number(invoice.paid_amount ?? (invoice.payment_status === 'Paid' ? invoice.sale_amount : 0));
  const balanceAmount = Math.max(0, Number(invoice.sale_amount || 0) - paidAmount);
  const packageData = { ...defaultInvoicePackage, ...invoice.photo_session_package };
  const packageFee = Number(packageData.fee || 0);
  const plantItemsTotal = invoice.items.reduce((sum, item) => sum + (Number(item.sale_amount) || 0), 0);
  const discountAmount = Number(invoice.discount_amount || 0);
  const grossAmount = Number(invoice.gross_total ?? (plantItemsTotal + packageFee));
  return (
    <aside className="panel reveal invoice-detail printable">
      <div className="invoice-action-bar">
        <div>
          <h2>{invoice.invoice_no}</h2>
          <p>{invoice.sale_date} - {invoice.payment_method}</p>
        </div>
        <div className="invoice-actions">
          {!readOnly && onEdit && <button className="ghost-button" onClick={() => onEdit(invoice)}><Edit3 size={17} /> Edit</button>}
          <button className="ghost-button" onClick={() => window.print()}><Printer size={17} /> Print</button>
          <button className="ghost-button" onClick={() => shareText(`${invoice.invoice_no} - ${invoice.customer.cus_name} - ${money(invoice.sale_amount)}`)}><Send size={17} /> Share</button>
          {!readOnly && onDelete && <button className="ghost-button danger" onClick={() => onDelete(invoice.id)}><Trash2 size={17} /> Delete</button>}
        </div>
      </div>
      <div className="invoice-workspace">
        <div className="shop-invoice">
          <img className="invoice-leaf-corner top" src={invoiceLeavesTopRight} alt="" aria-hidden="true" />
          <img className="invoice-leaf-corner bottom-left" src={invoicePlantBottomLeft} alt="" aria-hidden="true" />
          <img className="invoice-leaf-corner bottom-right" src={invoiceLeavesBottomRight} alt="" aria-hidden="true" />
          <div className="shop-invoice-head">
            <div className="invoice-brand">
              <span className="invoice-brand-mark">PZ</span>
              <h2>Plant Zone</h2>
              <p>Garden Center</p>
            </div>
          </div>
          <h1 className="invoice-title">Invoice</h1>
          <div className="invoice-info-grid">
            <section className="invoice-party">
              <span className="invoice-section-label">Invoice To :</span>
              <strong>{invoice.customer.cus_name}</strong>
              <p>{invoice.customer.cus_ph || 'No phone provided'}</p>
              <p>{invoice.customer.cus_address || 'No address provided'}</p>
            </section>
            <section className="invoice-reference">
              <p><b>Invoice No :</b> {invoice.invoice_no}</p>
              <p><b>Date :</b> {invoice.sale_date}</p>
              <b className={`invoice-payment-badge ${clean(invoice.payment_status)}`}>{invoice.payment_status}</b>
            </section>
          </div>
          <div className="invoice-divider" aria-hidden="true"><span /></div>
          <div className="invoice-table-wrap">
            <table className="shop-invoice-table">
              <thead><tr><th>Items</th><th>Qty</th><th>Price</th><th>Total</th></tr></thead>
              <tbody>
                {invoice.items.map((item) => (
                  <tr key={`${invoice.id}-${item.plant_code}`}>
                    <td><strong>{item.plant_name}</strong><small>{item.plant_type} / Size {item.size}</small></td>
                    <td>{item.quantity}</td>
                    <td>{money(item.unit_price)}</td>
                    <td>{money(item.sale_amount)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {(packageFee > 0 || packageData.image) && (
              <div className="invoice-package-card">
                <div className="invoice-package-label"><Package size={14} /> Plant Package</div>
                <div className="invoice-package-content">
                  {packageData.image && <img src={packageData.image} alt={packageData.title || 'Plant package'} />}
                  <div>
                    <strong>{packageData.title || 'Plant Package'}</strong>
                    <span>Package Fee: {money(packageFee)}</span>
                  </div>
                </div>
              </div>
            )}

          </div>
          <section className="invoice-total-card">
            <dl>
              <div><dt>Sub-total:</dt><dd>{money(grossAmount)}</dd></div>
              {discountAmount > 0 && <div><dt>Discount:</dt><dd>- {money(discountAmount)}</dd></div>}
              <div className="invoice-final-total"><dt>Items:</dt><dd>{money(invoice.sale_amount)}</dd></div>
            </dl>
          </section>
          <div className="invoice-bottom">
            <div className="invoice-note invoice-payment-to">
              <strong>Payment to :</strong>
              <p><span>Shop name</span><b>Plant Zone Garden Center</b></p>
              <p><span>Location</span><b>Pyay, Bago Region</b></p>
            </div>
            <div className="invoice-settlement">
              <section className="invoice-payment-summary">
                <span className="invoice-section-label">Payment details</span>
                <dl>
                  <div><dt>Method</dt><dd>{invoice.payment_method}</dd></div>
                  <div><dt>Status</dt><dd>{invoice.payment_status}</dd></div>
                  <div><dt>Amount paid</dt><dd>{money(paidAmount)}</dd></div>
                  <div className={balanceAmount > 0 ? 'balance-due' : ''}><dt>Balance due</dt><dd>{money(balanceAmount)}</dd></div>
                </dl>
              </section>
              <section className="invoice-contact">
                <p>+95 9 756 040646</p>
                <p>Plant Zone Garden Center</p>
                <p>Customer source: {invoice.customer.source || 'Walk-in'}</p>
              </section>
            </div>
          </div>
          <p className="invoice-thanks">Thank you for your business!</p>
        </div>
      </div>
    </aside>
  );
}

function StockCardImage({ src, fallback, alt }) {
  const [imageSrc, setImageSrc] = useState(src || fallback);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
    setImageSrc(src || fallback);
  }, [src, fallback]);

  return (
    <span className={`stock-card-image-frame ${loaded ? 'loaded' : ''}`}>
      <span className="stock-image-skeleton" aria-hidden="true" />
      <img
        src={imageSrc}
        alt={alt}
        onLoad={() => setLoaded(true)}
        onError={() => {
          if (imageSrc !== fallback) {
            setImageSrc(fallback);
            return;
          }
          setLoaded(true);
        }}
      />
    </span>
  );
}

function StockCardSkeleton() {
  return (
    <article className="stock-card stock-card-skeleton" aria-hidden="true">
      <div className="skeleton-block skeleton-image" />
      <div className="stock-card-main">
        <div>
          <div className="skeleton-block skeleton-title" />
          <div className="skeleton-block skeleton-code" />
        </div>
        <dl className="stock-card-metrics">
          <div><dt /><dd className="skeleton-block" /></div>
          <div><dt /><dd className="skeleton-block" /></div>
          <div><dt /><dd className="skeleton-block" /></div>
        </dl>
      </div>
      <div className="stock-card-side">
        <div className="skeleton-block skeleton-pill" />
        <div className="stock-card-actions">
          <div className="skeleton-block skeleton-button" />
          <div className="skeleton-block skeleton-button" />
        </div>
      </div>
      <div className="stock-card-footer">
        <div className="skeleton-block skeleton-footer" />
        <div className="skeleton-block skeleton-footer" />
      </div>
    </article>
  );
}

function StockPage({ plants, plantsLoaded, setPlants, adjustments = [], setAdjustments, history, setHistory, isFormOpen, setIsFormOpen, currentUser, logAudit }) {
  const emptyPlant = { plant_name: '', plant_code: '', plant_type: 'Indoor', size: 'M', quantity: 0, unit_price: 0, ws_price: 0, low_stock_limit: 5, image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80' };
  const [draft, setDraft] = useState(emptyPlant);
  const [editingId, setEditingId] = useState(null);
  const [filters, setFilters] = useState({ search: '', type: '', size: '', minPrice: '', maxPrice: '' });
  const [formError, setFormError] = useState('');
  const [imageBusy, setImageBusy] = useState(false);
  const sizes = useMemo(() => Array.from(new Set(plants.map((plant) => plant.size).filter(Boolean))).sort(), [plants]);
  const stockTotals = useMemo(() => plants.reduce((totals, plant) => ({
    units: totals.units + Number(plant.quantity || 0),
    value: totals.value + (Number(plant.quantity || 0) * Number(plant.unit_price || 0)),
    lowStock: totals.lowStock + (Number(plant.quantity || 0) <= Number(plant.low_stock_limit || 0) ? 1 : 0),
  }), { units: 0, value: 0, lowStock: 0 }), [plants]);
  const outOfStockPlants = plants.filter((plant) => Number(plant.quantity || 0) === 0);
  const lowStockPlants = plants.filter((plant) => Number(plant.quantity || 0) > 0 && Number(plant.quantity || 0) <= Number(plant.low_stock_limit || 0));
  const damagedRecords = adjustments.filter((item) => (
    Number(item.damaged_delta || 0) > 0
    || Number(item.written_off_delta || 0) > 0
    || item.process_group === 'damage'
    || item.type === 'Damaged plant return'
    || item.type === 'Plant damage'
  ));
  const filteredPlants = useMemo(() => plants.filter((plant) => {
    const minPrice = filters.minPrice === '' ? null : Number(filters.minPrice);
    const maxPrice = filters.maxPrice === '' ? null : Number(filters.maxPrice);
    return (
      (!filters.search || clean(plant.plant_name).includes(clean(filters.search)))
      && (!filters.type || plant.plant_type === filters.type)
      && (!filters.size || plant.size === filters.size)
      && (minPrice === null || Number(plant.unit_price || 0) >= minPrice)
      && (maxPrice === null || Number(plant.unit_price || 0) <= maxPrice)
    );
  }), [plants, filters]);
  const showStockSkeletons = !plantsLoaded && !filters.search;
  const stockSkeletonCount = Math.max(4, 8 - Math.min(filteredPlants.length, 8));

  const savePlant = () => {
    const validationError = validatePlant(draft);
    if (validationError) {
      setFormError(appError(validationError, 'VALIDATION_ERROR').message);
      return;
    }
    const previous = plants.find((plant) => plant.id === editingId);
    const beforeQuantity = Number(previous?.quantity || 0);
    const afterQuantity = Number(draft.quantity || 0);
    const savedAt = new Date().toISOString();
    if (editingId) {
      setPlants((current) => current.map((plant) => (plant.id === editingId ? { ...draft, id: editingId, updated_at: today(), synced_at: savedAt } : plant)));
    } else {
      setPlants((current) => [{ ...draft, id: Date.now(), created_at: today(), updated_at: today(), synced_at: savedAt }, ...current]);
    }
    setHistory((current) => [{
      id: Date.now() + Math.random(),
      date: new Date().toISOString(),
      plant_name: draft.plant_name,
      plant_code: draft.plant_code,
      before_quantity: beforeQuantity,
      after_quantity: afterQuantity,
      reason: editingId ? 'Manual plant update' : 'New plant created',
      user_name: currentUser.name,
    }, ...current]);
    logAudit({ action: editingId ? 'Product updated' : 'Product created', target: draft.plant_name, detail: `${beforeQuantity} -> ${afterQuantity}` });
    setDraft(emptyPlant);
    setEditingId(null);
    setFormError('');
    setIsFormOpen(false);
  };

  const closeForm = () => {
    setDraft(emptyPlant);
    setEditingId(null);
    setFormError('');
    setIsFormOpen(false);
  };

  const editPlant = (plant) => {
    setDraft(plant);
    setEditingId(plant.id);
    setIsFormOpen(true);
  };

  const clearConditionStock = (plant, condition) => {
    const isDamaged = condition === 'damaged';
    const field = isDamaged ? 'damaged_quantity' : 'written_off_quantity';
    const deltaField = isDamaged ? 'damaged_delta' : 'written_off_delta';
    const removedField = isDamaged ? 'damaged_removed' : 'written_off_removed';
    const label = isDamaged ? 'Damaged stock' : 'Written-off stock';
    const quantity = Number(plant[field] || 0);
    if (quantity <= 0 || !window.confirm(`Remove all ${quantity} ${label.toLowerCase()} unit(s) for ${plant.plant_name}?`)) return;

    const clearedAt = new Date().toISOString();
    setPlants((current) => current.map((item) => (
      String(item.id) === String(plant.id) ? { ...item, [field]: 0, updated_at: today(), synced_at: clearedAt } : item
    )));
    setAdjustments((current) => current.map((item) => (
      String(item.plant_id) === String(plant.id) && Number(item[deltaField] || 0) > 0 && !item[removedField]
        ? { ...item, [removedField]: true, condition_removed_at: clearedAt, condition_removed_by: currentUser.name }
        : item
    )));
    setHistory((current) => [{
      id: Date.now() + Math.random(),
      date: clearedAt,
      plant_name: plant.plant_name,
      plant_code: plant.plant_code,
      balance_type: label,
      before_quantity: quantity,
      after_quantity: 0,
      reason: `${label} cleared`,
      user_name: currentUser.name,
    }, ...current]);
    logAudit({ action: `${label} cleared`, target: plant.plant_name, detail: `${quantity} -> 0; future records remain independent` });
  };

  const removeConditionRecord = (record) => {
    const damagedQuantity = record.damaged_removed ? 0 : Number(record.damaged_delta || 0);
    const writtenOffQuantity = record.written_off_removed ? 0 : Number(record.written_off_delta || 0);
    if (damagedQuantity <= 0 && writtenOffQuantity <= 0) return;
    if (!window.confirm(`Remove this condition stock entry for ${record.plant_name}? The history record will be kept.`)) return;

    const removedAt = new Date().toISOString();
    setPlants((current) => current.map((plant) => (
      String(plant.id) === String(record.plant_id)
        ? {
          ...plant,
          damaged_quantity: Math.max(0, Number(plant.damaged_quantity || 0) - damagedQuantity),
          written_off_quantity: Math.max(0, Number(plant.written_off_quantity || 0) - writtenOffQuantity),
          updated_at: today(),
          synced_at: removedAt,
        }
        : plant
    )));
    setAdjustments((current) => current.map((item) => (
      item.id === record.id
        ? {
          ...item,
          damaged_removed: damagedQuantity > 0 || item.damaged_removed,
          written_off_removed: writtenOffQuantity > 0 || item.written_off_removed,
          condition_removed_at: removedAt,
          condition_removed_by: currentUser.name,
        }
        : item
    )));
    const removedLabel = damagedQuantity > 0 ? 'Damaged stock' : 'Written-off stock';
    const removedQuantity = damagedQuantity + writtenOffQuantity;
    setHistory((current) => [{
      id: Date.now() + Math.random(),
      date: removedAt,
      plant_name: record.plant_name,
      plant_code: record.plant_code,
      balance_type: removedLabel,
      before_quantity: removedQuantity,
      after_quantity: 0,
      reason: `Condition entry removed: ${record.reason || record.outcome || 'Recorded adjustment'}`,
      user_name: currentUser.name,
    }, ...current]);
    logAudit({ action: 'Condition stock entry removed', target: record.plant_name, detail: `${removedQuantity} unit(s); record ${record.id}` });
  };

  const uploadPlantImage = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/') || file.size > maxPlantUploadBytes) {
      setFormError(appError('Upload a valid image under 5 MB.', 'FILE_UPLOAD_ERROR').message);
      event.target.value = '';
      return;
    }
    setImageBusy(true);
    setFormError('');
    try {
      const image = await uploadOptimizedImage(file, 'plants');
      setDraft((current) => ({ ...current, image: image.url, image_path: image.path }));
    } catch (error) {
      console.error('Could not upload plant image', error);
      setFormError(appError('Could not upload this image. Try a different photo.', 'FILE_UPLOAD_ERROR').message);
    } finally {
      setImageBusy(false);
      event.target.value = '';
    }
  };

  return (
    <>
      <section className="page-grid stock-grid">
        <div className="panel reveal stock-panel">
          <div className="stock-summary-strip">
            <div><span>Total plants</span><strong>{plants.length}</strong></div>
            <div><span>Total units</span><strong>{stockTotals.units}</strong></div>
            <div><span>Stock value</span><strong>{money(stockTotals.value)}</strong></div>
            <div><span>Low stock</span><strong>{stockTotals.lowStock}</strong></div>
          </div>
          {(outOfStockPlants.length > 0 || lowStockPlants.length > 0) && (
            <div className="inventory-alerts" role="status" aria-label="Inventory notifications">
              {outOfStockPlants.length > 0 && <div className="inventory-alert danger"><TriangleAlert size={18} /><span><strong>{outOfStockPlants.length} out of stock</strong><small>{outOfStockPlants.map((plant) => plant.plant_name).join(', ')}</small></span></div>}
              {lowStockPlants.length > 0 && <div className="inventory-alert warning"><Bell size={18} /><span><strong>{lowStockPlants.length} low-stock warning{lowStockPlants.length === 1 ? '' : 's'}</strong><small>{lowStockPlants.map((plant) => `${plant.plant_name} (${plant.quantity})`).join(', ')}</small></span></div>}
            </div>
          )}
          <div className="stock-filter-bar">
            <label className="stock-search-field">Search plants<input value={filters.search} onChange={(event) => setFilters({ ...filters, search: event.target.value })} placeholder="Plant name" /></label>
            <label>Type<select value={filters.type} onChange={(event) => setFilters({ ...filters, type: event.target.value })}><option value="">All types</option>{plantTypes.map((type) => <option key={type}>{type}</option>)}</select></label>
            <label>Size<select value={filters.size} onChange={(event) => setFilters({ ...filters, size: event.target.value })}><option value="">All sizes</option>{sizes.map((size) => <option key={size}>{size}</option>)}</select></label>
            <label>Min price<input type="number" value={filters.minPrice} onChange={(event) => setFilters({ ...filters, minPrice: event.target.value })} placeholder="0" /></label>
            <label>Max price<input type="number" value={filters.maxPrice} onChange={(event) => setFilters({ ...filters, maxPrice: event.target.value })} placeholder="100000" /></label>
            <button className="ghost-button" type="button" onClick={() => setFilters({ search: '', type: '', size: '', minPrice: '', maxPrice: '' })}><RotateCcw size={16} /> Clear</button>
          </div>
          <div className="stock-result-note">{filteredPlants.length} of {plants.length} plants shown</div>
        <div className="stock-card-grid">
          {filteredPlants.map((plant) => {
            const damagedQuantity = Number(plant.damaged_quantity || 0);
            const writtenOffQuantity = Number(plant.written_off_quantity || 0);
            const hasConditionStock = damagedQuantity > 0 || writtenOffQuantity > 0;
            return (
            <article key={plant.id} className={`stock-card ${plant.quantity <= plant.low_stock_limit ? 'low-stock-card' : ''} ${Number(plant.quantity) === 0 ? 'out-stock-card' : ''}`}>
              <StockCardImage src={plant.image} fallback={emptyPlant.image} alt={plant.plant_name} />
              <div className="stock-card-main">
                <div>
                  <strong>{plant.plant_name}</strong>
                  <span>{plant.plant_code}</span>
                </div>
                <dl className="stock-card-metrics">
                  <div><dt>Available</dt><dd>{plant.quantity}</dd></div>
                  <div><dt>Original Cost</dt><dd>{money(plant.ws_price)}</dd></div>
                  <div><dt>Selling Price</dt><dd>{money(plant.unit_price)}</dd></div>
                </dl>
                {hasConditionStock && (
                  <div className="stock-condition-metrics" aria-label={`Condition stock for ${plant.plant_name}`}>
                    {damagedQuantity > 0 && <span className="stock-condition-badge damaged"><TriangleAlert size={14} /> Damaged <strong>{damagedQuantity}</strong><button type="button" onClick={() => clearConditionStock(plant, 'damaged')} aria-label={`Clear damaged stock for ${plant.plant_name}`}>Clear</button></span>}
                    {writtenOffQuantity > 0 && <span className="stock-condition-badge written-off"><X size={14} /> Written off <strong>{writtenOffQuantity}</strong><button type="button" onClick={() => clearConditionStock(plant, 'written-off')} aria-label={`Clear written-off stock for ${plant.plant_name}`}>Clear</button></span>}
                  </div>
                )}
              </div>
              <div className="stock-card-side">
                <span className={Number(plant.quantity) === 0 ? 'status-out' : plant.quantity <= plant.low_stock_limit ? 'status-low' : 'status-in'}>{Number(plant.quantity) === 0 ? 'Out of stock' : plant.quantity <= plant.low_stock_limit ? 'Low stock' : 'In stock'}</span>
                <div className="stock-card-actions">
                  <button className="ghost-button" onClick={() => editPlant(plant)}><Edit3 size={16} /> Edit</button>
                  <button className="ghost-button danger" onClick={() => {
                    const deletedAt = new Date().toISOString();
                    setPlants((current) => current.map((item) => (
                      item.id === plant.id
                        ? {
                          ...item,
                          quantity: 0,
                          deleted_at: deletedAt,
                          deleted_by: currentUser.name,
                          updated_at: today(),
                          synced_at: deletedAt,
                        }
                        : item
                    )));
                    setHistory((current) => [{
                      id: Date.now() + Math.random(),
                      date: deletedAt,
                      plant_name: plant.plant_name,
                      plant_code: plant.plant_code,
                      before_quantity: Number(plant.quantity || 0),
                      after_quantity: 0,
                      reason: 'Product deleted',
                      user_name: currentUser.name,
                    }, ...current]);
                    logAudit({ action: 'Product deleted', target: plant.plant_name, detail: `${plant.quantity} unit(s) removed` });
                  }}><Trash2 size={16} /> Delete</button>
                </div>
              </div>
              <div className="stock-card-footer">
                <span><CalendarDays size={14} /> {plant.updated_at || plant.created_at || today()}</span>
                <span><Package size={14} /> {plant.plant_type} / Size {plant.size}</span>
              </div>
            </article>
            );
          })}
          {showStockSkeletons && Array.from({ length: stockSkeletonCount }, (_, index) => <StockCardSkeleton key={`stock-loading-${index}`} />)}
          {filteredPlants.length === 0 && !showStockSkeletons && <div className="empty-state">No plants match these filters.</div>}
        </div>
      </div>
      <footer className="panel reveal stock-footer">
        <h3>Stock in/out history</h3>
        <div className="mini-history">
          {history.map((entry) => (
            <span key={entry.id}>{String(entry.date).slice(0, 10)} - {entry.plant_name} - {entry.balance_type || 'Available stock'}: {entry.before_quantity ?? '-'} {'->'} {entry.after_quantity ?? entry.quantity ?? '-'} - {entry.reason || entry.type} - {entry.user_name || 'System'}</span>
          ))}
        </div>
      </footer>
      <section className="panel reveal damaged-stock-panel">
        <div className="panel-title-row">
          <div><h3>Damaged & Written-off Records</h3><p>Remove a condition entry from current stock without deleting its audit history.</p></div>
          <span className="status-pill">{damagedRecords.reduce((sum, item) => sum + (item.damaged_removed ? 0 : Number(item.damaged_delta || 0)) + (item.written_off_removed ? 0 : Number(item.written_off_delta || 0)), 0)} active units</span>
        </div>
        <div className="damaged-stock-list">
          {damagedRecords.map((item) => {
            const hasActiveConditionStock = (Number(item.damaged_delta || 0) > 0 && !item.damaged_removed) || (Number(item.written_off_delta || 0) > 0 && !item.written_off_removed);
            const wasRemoved = (Number(item.damaged_delta || 0) > 0 && item.damaged_removed) || (Number(item.written_off_delta || 0) > 0 && item.written_off_removed);
            return (
              <article key={item.id} className={wasRemoved && !hasActiveConditionStock ? 'condition-record-removed' : ''}>
                <TriangleAlert size={18} />
                <div><strong>{item.plant_name}</strong><span>{item.plant_code} · {item.quantity} unit(s) · {item.date}</span><p>{item.reason}</p></div>
                <div className="condition-record-action">
                  <b>{item.outcome || item.stock_action || 'Recorded'}</b>
                  {hasActiveConditionStock ? <button className="ghost-button danger" type="button" onClick={() => removeConditionRecord(item)}><Trash2 size={14} /> Remove stock</button> : wasRemoved ? <span>Stock removed</span> : null}
                </div>
              </article>
            );
          })}
          {!damagedRecords.length && <div className="empty-state">No damaged plants have been recorded.</div>}
        </div>
      </section>
      </section>
      {isFormOpen && (
        <div className="modal-backdrop" role="presentation" onMouseDown={closeForm}>
          <div className="stock-modal" role="dialog" aria-modal="true" aria-labelledby="stock-modal-title" onMouseDown={(event) => event.stopPropagation()}>
            <div className="modal-title-row">
              <div>
                <h2 id="stock-modal-title">{editingId ? 'Edit Plant' : 'Add Plant'}</h2>
                <p>{editingId ? 'Update the selected stock item.' : 'Create a new stocked plant item.'}</p>
              </div>
              <button className="icon-button" onClick={closeForm} aria-label="Close add plant form"><X size={17} /></button>
            </div>
            <div className="form-grid stock-form">
              {formError && <p className="login-error span-2" role="alert">{formError}</p>}
              <label>Plant name<input value={draft.plant_name} onChange={(event) => setDraft({ ...draft, plant_name: event.target.value })} /></label>
              <label>Plant code<input value={draft.plant_code} onChange={(event) => setDraft({ ...draft, plant_code: event.target.value })} /></label>
              <label>Type<select value={draft.plant_type} onChange={(event) => setDraft({ ...draft, plant_type: event.target.value })}>{plantTypes.map((type) => <option key={type}>{type}</option>)}</select></label>
              <label>Size<input value={draft.size} onChange={(event) => setDraft({ ...draft, size: event.target.value })} /></label>
              <label>Quantity<input type="number" value={draft.quantity} onChange={(event) => setDraft({ ...draft, quantity: Number(event.target.value) })} /></label>
              <label>Selling price<input type="number" value={draft.unit_price} onChange={(event) => setDraft({ ...draft, unit_price: Number(event.target.value) })} /></label>
              <label>Original cost<input type="number" value={draft.ws_price} onChange={(event) => setDraft({ ...draft, ws_price: Number(event.target.value) })} /></label>
              <label>Low stock limit<input type="number" value={draft.low_stock_limit} onChange={(event) => setDraft({ ...draft, low_stock_limit: Number(event.target.value) })} /></label>
              <label className="span-2 image-upload-field">
                Plant image
                <span className="image-upload-control">
                  <img src={draft.image || emptyPlant.image} alt="Plant preview" onError={(event) => { event.currentTarget.src = emptyPlant.image; }} />
                  <span>{imageBusy ? 'Optimizing...' : 'Upload image'}</span>
                  <input type="file" accept="image/*" onChange={uploadPlantImage} />
                </span>
              </label>
              <button className="primary-button span-2" onClick={savePlant} disabled={imageBusy}><Plus size={17} /> {editingId ? 'Update plant' : 'Add plant'}</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function CustomersPage({ customers, setCustomers, invoices, isFormOpen, setIsFormOpen, currentUser, logAudit }) {
  const emptyCustomer = { cus_name: '', cus_ph: '', cus_address: '', source: 'Facebook' };
  const [source, setSource] = useState('');
  const [draft, setDraft] = useState(emptyCustomer);
  const [editingId, setEditingId] = useState(null);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [formError, setFormError] = useState('');
  const filtered = source ? customers.filter((customer) => customer.source === source) : customers;
  const selectedPurchases = selectedCustomer ? invoices.filter((invoice) => (
    invoice.customer.cus_ph === selectedCustomer.cus_ph || invoice.customer.cus_name === selectedCustomer.cus_name
  )) : [];
  const selectedRows = flattenInvoiceRows(selectedPurchases);

  const saveCustomer = () => {
    const validationError = validateCustomer(draft);
    if (validationError) {
      setFormError(appError(validationError, 'VALIDATION_ERROR').message);
      return;
    }
    if (editingId) {
      setCustomers((current) => current.map((customer) => (
        customer.id === editingId ? { ...customer, ...draft, id: editingId, updated_at: today() } : customer
      )));
      logAudit({ action: 'Customer updated', target: draft.cus_name, detail: draft.cus_ph });
    } else {
      setCustomers((current) => [{ ...draft, id: Date.now(), created_at: today(), updated_at: today() }, ...current]);
      logAudit({ action: 'Customer created', target: draft.cus_name, detail: draft.cus_ph });
    }
    setDraft(emptyCustomer);
    setEditingId(null);
    setFormError('');
    setIsFormOpen(false);
  };

  const closeForm = () => {
    setDraft(emptyCustomer);
    setEditingId(null);
    setFormError('');
    setIsFormOpen(false);
  };

  const editCustomer = (customer) => {
    setDraft({
      cus_name: customer.cus_name || '',
      cus_ph: customer.cus_ph || '',
      cus_address: customer.cus_address || '',
      source: customer.source || 'Facebook',
    });
    setEditingId(customer.id);
    setIsFormOpen(true);
  };

  return (
    <>
      <section className="panel reveal">
        <div className="panel-title-row">
          <div><h2>Customers</h2><p>Manage saved customers and sales history.</p></div>
          <label className="compact-select">Source <select value={source} onChange={(event) => setSource(event.target.value)}><option value="">All</option>{sources.map((item) => <option key={item}>{item}</option>)}</select></label>
        </div>
        <div className="customer-grid">
          {filtered.map((customer) => {
            const related = invoices.filter((invoice) => invoice.customer.cus_ph === customer.cus_ph || invoice.customer.cus_name === customer.cus_name);
            const total = related.reduce((sum, invoice) => sum + invoice.sale_amount, 0);
            const lastDate = related.map((invoice) => invoice.sale_date).sort().at(-1) || customer.updated_at;
            return (
              <article className="customer-card clickable-card" key={customer.id} role="button" tabIndex="0" onClick={() => setSelectedCustomer(customer)} onKeyDown={(event) => { if (event.key === 'Enter') setSelectedCustomer(customer); }}>
                <div className="avatar">{customer.cus_name.slice(0, 1).toUpperCase()}</div>
                <div className="customer-card-main">
                  <strong>{customer.cus_name}</strong>
                  <span>{customer.cus_ph}</span>
                  <small>{customer.cus_address || 'No address saved'}</small>
                </div>
                <div className="customer-metrics">
                  <div><span>Total purchases</span><strong>{money(total)}</strong></div>
                  <div><span>Last purchase</span><strong>{lastDate || '-'}</strong></div>
                </div>
                <div className="customer-card-actions">
                  <button className="ghost-button" onClick={(event) => { event.stopPropagation(); setSelectedCustomer(customer); }}><User size={16} /> View</button>
                  <button className="ghost-button" onClick={(event) => { event.stopPropagation(); editCustomer(customer); }}><Edit3 size={16} /> Edit</button>
                  <button className="ghost-button danger" onClick={(event) => { event.stopPropagation(); setCustomers((current) => current.filter((item) => item.id !== customer.id)); logAudit({ action: 'Customer deleted', target: customer.cus_name, detail: customer.cus_ph }); }}><Trash2 size={16} /> Delete</button>
                </div>
                <div className="customer-card-footer">
                  <span><CalendarDays size={14} /> {customer.updated_at || customer.created_at || today()}</span>
                  <span><User size={14} /> {customer.source}</span>
                </div>
                <span className="source-pill">{customer.source}</span>
              </article>
            );
          })}
        </div>
      </section>
      {selectedCustomer && (
        <div className="modal-backdrop" role="presentation" onMouseDown={() => setSelectedCustomer(null)}>
          <div className="stock-modal customer-profile-modal" role="dialog" aria-modal="true" aria-labelledby="customer-profile-title" onMouseDown={(event) => event.stopPropagation()}>
            <div className="modal-title-row">
              <div><h2 id="customer-profile-title">{selectedCustomer.cus_name}</h2><p>{selectedCustomer.cus_ph} · {selectedCustomer.cus_address || 'No address saved'}</p></div>
              <button className="icon-button" onClick={() => setSelectedCustomer(null)} aria-label="Close customer profile"><X size={17} /></button>
            </div>
            <div className="customer-profile-summary">
              <div><span>Lifetime purchases</span><strong>{money(selectedPurchases.reduce((sum, invoice) => sum + Number(invoice.sale_amount || 0), 0))}</strong></div>
              <div><span>Orders</span><strong>{selectedPurchases.length}</strong></div>
              <div><span>Preferred plant</span><strong>{bestBy(selectedRows, 'plant_name') || 'Not enough data'}</strong></div>
              <div><span>Preferred type</span><strong>{bestBy(selectedRows, 'plant_type') || 'Not enough data'}</strong></div>
              <div><span>Shopping source</span><strong>{selectedCustomer.source}</strong></div>
            </div>
            <div className="customer-history">
              <h3>Purchase History</h3>
              {selectedPurchases.map((invoice) => (
                <article key={invoice.id}>
                  <div><strong>{invoice.invoice_no}</strong><span>{invoice.sale_date} · {invoice.payment_status}</span></div>
                  <p>{invoice.items.map((item) => `${item.plant_name} × ${item.quantity}`).join(', ')}</p>
                  <b>{money(invoice.sale_amount)}</b>
                </article>
              ))}
              {!selectedPurchases.length && <div className="empty-state">No purchase history for this customer yet.</div>}
            </div>
          </div>
        </div>
      )}
      {isFormOpen && (
        <div className="modal-backdrop" role="presentation" onMouseDown={closeForm}>
          <div className="stock-modal" role="dialog" aria-modal="true" aria-labelledby="customer-modal-title" onMouseDown={(event) => event.stopPropagation()}>
            <div className="modal-title-row">
              <div>
                <h2 id="customer-modal-title">{editingId ? 'Edit Customer' : 'Add Customer'}</h2>
                <p>{editingId ? 'Update customer contact details.' : 'Create a saved customer profile.'}</p>
              </div>
              <button className="icon-button" onClick={closeForm} aria-label="Close add customer form"><X size={17} /></button>
            </div>
            <div className="form-grid customer-form">
              {formError && <p className="login-error span-2" role="alert">{formError}</p>}
              <label>Customer name<input value={draft.cus_name} onChange={(event) => setDraft({ ...draft, cus_name: event.target.value })} /></label>
              <label>Phone<input value={draft.cus_ph} onChange={(event) => setDraft({ ...draft, cus_ph: event.target.value })} /></label>
              <label className="span-2">Address<input value={draft.cus_address} onChange={(event) => setDraft({ ...draft, cus_address: event.target.value })} /></label>
              <label>Source<select value={draft.source} onChange={(event) => setDraft({ ...draft, source: event.target.value })}>{sources.map((item) => <option key={item}>{item}</option>)}</select></label>
              <button className="primary-button" onClick={saveCustomer}><Plus size={17} /> {editingId ? 'Update customer' : 'Add customer'}</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function ExpensesPage({ expenses, setExpenses, logAudit, currentUser }) {
  const [draft, setDraft] = useState({ date: today(), category: 'General cost', description: '', amount: '' });
  const [filters, setFilters] = useState({ month: monthNow(), category: '' });
  const [formError, setFormError] = useState('');
  const filteredExpenses = expenses
    .filter((expense) => String(expense.date || '').startsWith(filters.month))
    .filter((expense) => !filters.category || expense.category === filters.category)
    .sort((a, b) => String(b.date).localeCompare(String(a.date)));
  const monthExpenses = expenses.filter((expense) => String(expense.date || '').startsWith(filters.month));
  const totalExpenses = expenseTotalFor(filteredExpenses, () => true);
  const monthTotal = expenseTotalFor(monthExpenses, () => true);
  const categoryTotals = expensesByCategory(monthExpenses);

  const saveExpense = () => {
    const amount = Number(draft.amount);
    if (!draft.date || !expenseCategories.includes(draft.category) || !Number.isFinite(amount) || amount <= 0) {
      setFormError(appError('Choose a date, category, and amount greater than zero.', 'VALIDATION_ERROR').message);
      return;
    }
    const expense = {
      id: Date.now() + Math.random(),
      date: draft.date,
      category: draft.category,
      description: String(draft.description || '').trim(),
      amount,
      created_at: new Date().toISOString(),
      user_name: currentUser?.name || 'System',
    };
    setExpenses((current) => [expense, ...current]);
    logAudit?.({ action: 'Expense added', target: expense.category, detail: `${money(amount)} on ${expense.date}` });
    setDraft({ date: today(), category: 'General cost', description: '', amount: '' });
    setFormError('');
  };

  const deleteExpense = (expense) => {
    setExpenses((current) => current.filter((item) => item.id !== expense.id));
    logAudit?.({ action: 'Expense deleted', target: expense.category, detail: `${money(expense.amount)} on ${expense.date}` });
  };

  return (
    <section className="expenses-page">
      <section className="expense-overview reveal">
        <div className="expense-overview-main">
          <span>Monthly expenses</span>
          <strong>{money(monthTotal)}</strong>
          <small>{filters.month} - affects net profit in daily and monthly reports</small>
        </div>
        <div className="expense-category-grid">
          {categoryTotals.map((item) => (
            <button
              key={item.category}
              className={`expense-category-card ${filters.category === item.category ? 'active' : ''}`}
              onClick={() => setFilters((current) => ({ ...current, category: current.category === item.category ? '' : item.category }))}
            >
              <span>{item.category}</span>
              <strong>{money(item.total)}</strong>
            </button>
          ))}
        </div>
      </section>

      <section className="expense-workspace">
        <div className="panel reveal expense-entry-panel">
          <div className="panel-title-row">
            <div><h2>Add Expense</h2><p>General cost, salary, delivery, and packaging only.</p></div>
          </div>
          <div className="expense-form">
            {formError && <p className="login-error" role="alert">{formError}</p>}
            <label>Date<input type="date" value={draft.date} onChange={(event) => setDraft({ ...draft, date: event.target.value })} /></label>
            <label>Category<select value={draft.category} onChange={(event) => setDraft({ ...draft, category: event.target.value })}>{expenseCategories.map((category) => <option key={category}>{category}</option>)}</select></label>
            <label>Description<input value={draft.description} onChange={(event) => setDraft({ ...draft, description: event.target.value })} placeholder="Optional note" /></label>
            <label>Amount (Ks)<input type="number" min="0" value={draft.amount} onChange={(event) => setDraft({ ...draft, amount: event.target.value })} /></label>
            <button className="primary-button wide" onClick={saveExpense}><Plus size={17} /> Add expense</button>
          </div>
        </div>

        <div className="panel reveal expense-list-panel">
          <div className="panel-title-row report-title-row">
            <div><h2>Expense List</h2><p>{filters.category || 'All categories'} - {money(totalExpenses)}</p></div>
            <label className="compact-month">Month<input type="month" value={filters.month} onChange={(event) => setFilters({ ...filters, month: event.target.value })} /></label>
          </div>
          <div className="expense-filter-chips">
            <button className={`chip ${!filters.category ? 'active' : ''}`} onClick={() => setFilters({ ...filters, category: '' })}>All</button>
            {expenseCategories.map((category) => (
              <button key={category} className={`chip ${filters.category === category ? 'active' : ''}`} onClick={() => setFilters({ ...filters, category })}>{category}</button>
            ))}
          </div>
          <div className="expense-list">
            {filteredExpenses.map((expense) => (
              <article className="expense-row" key={expense.id}>
                <div className="expense-row-main">
                  <span className="expense-category-pill">{expense.category}</span>
                  <strong>{expense.description || expense.category}</strong>
                  <small>{expense.date} - Added by {expense.user_name || 'System'}</small>
                </div>
                <div className="expense-row-side">
                  <b>{money(expense.amount)}</b>
                  <button className="icon-button danger" onClick={() => deleteExpense(expense)} aria-label={`Delete ${expense.category} expense`}><Trash2 size={16} /></button>
                </div>
              </article>
            ))}
            {!filteredExpenses.length && <div className="empty-state">No expenses match the current filters.</div>}
          </div>
        </div>
      </section>
    </section>
  );
}

function expenseTotalFor(expenses, predicate) {
  return expenses
    .filter(predicate)
    .reduce((sum, expense) => sum + Number(expense.amount || 0), 0);
}

function expensesByCategory(expenses) {
  return expenseCategories.map((category) => ({
    category,
    total: expenses
      .filter((expense) => expense.category === category)
      .reduce((sum, expense) => sum + Number(expense.amount || 0), 0),
  }));
}

function DailyDataPage({ rows, expenses }) {
  const [filters, setFilters] = useState({ date: today(), type: '', source: '', search: '' });
  const filtered = filterRows(rows, filters, 'day');
  const totalSales = filtered.reduce((sum, row) => sum + Number(row.sale_amount || 0), 0);
  const grossProfit = filtered.reduce((sum, row) => sum + Number(row.profit || 0), 0);
  const totalExpenses = expenseTotalFor(expenses, (expense) => expense.date === filters.date);
  const netProfit = grossProfit - totalExpenses;
  return (
    <ReportPage
      title="Daily Data List"
      description="All sale rows for the selected day, with expenses deducted from profit."
      rows={filtered}
      filters={filters}
      setFilters={setFilters}
      mode="day"
      filename="plant-zone-daily-data"
      summary={{
        'Total sales': money(totalSales),
        'Gross profit': money(grossProfit),
        Expenses: money(totalExpenses),
        'Net profit': money(netProfit),
        'Item rows': filtered.length,
      }}
    />
  );
}

function MonthlyDataPage({ rows, invoices, expenses }) {
  const [filters, setFilters] = useState({ month: monthNow(), type: '', source: '', search: '' });
  const filtered = filterRows(rows, filters, 'month');
  const monthlyExpenses = expenses.filter((expense) => String(expense.date || '').startsWith(filters.month));
  const invoiceIds = new Set(filtered.map((row) => row.invoice_no));
  const sourceTotals = sources.map((source) => ({
    source,
    total: filtered.filter((row) => row.customer_source === source).reduce((sum, row) => sum + row.sale_amount, 0),
  }));
  const bestPlant = bestBy(filtered, 'plant_name');
  const topSource = sourceTotals.slice().sort((a, b) => b.total - a.total)[0]?.source || '-';
  const totalSales = filtered.reduce((sum, row) => sum + row.sale_amount, 0);
  const grossProfit = filtered.reduce((sum, row) => sum + row.profit, 0);
  const totalExpenses = expenseTotalFor(monthlyExpenses, () => true);
  const netProfit = grossProfit - totalExpenses;
  const monthlyInvoices = invoices.filter((invoice) => invoice.sale_date.startsWith(filters.month));

  return (
    <section className="report-layout">
      <div className="summary-grid reveal">
        <MetricCard label="Total sales" value={money(totalSales)} />
        <MetricCard label="Gross profit" value={money(grossProfit)} />
        <MetricCard label="Expenses" value={money(totalExpenses)} />
        <MetricCard label="Net profit" value={money(netProfit)} />
        <MetricCard label="Invoice count" value={invoiceIds.size || monthlyInvoices.length} />
        <MetricCard label="Best-selling plant" value={bestPlant || '-'} />
        <MetricCard label="Top source" value={topSource} />
      </div>
      <div className="panel reveal source-breakdown">
        <div className="panel-title-row">
          <div><h2>Source Breakdown</h2><p>Monthly source report for Facebook, TikTok, Viber, and Phone.</p></div>
        </div>
        <div className="source-bars">
          {sourceTotals.map((item) => {
            const percent = totalSales ? Math.round((item.total / totalSales) * 100) : 0;
            return (
              <div className="source-bar" key={item.source}>
                <span>{item.source}</span>
                <div><i style={{ width: `${percent}%` }} /></div>
                <strong>{money(item.total)}</strong>
              </div>
            );
          })}
        </div>
      </div>
      <ReportPage
        title="Monthly Data List"
        description="A separate monthly report page for permission-based navigation later."
        rows={filtered}
        filters={filters}
        setFilters={setFilters}
        mode="month"
        filename="plant-zone-monthly-data"
        summary={{
          'Total sales': money(totalSales),
          'Gross profit': money(grossProfit),
          Expenses: money(totalExpenses),
          'Net profit': money(netProfit),
          'Invoice count': invoiceIds.size || monthlyInvoices.length,
          'Best-selling plant': bestPlant || '-',
          'Top source': topSource,
        }}
      />
    </section>
  );
}

function ReportPage({ title, description, rows, filters, setFilters, mode, filename, summary }) {
  const defaultSummary = {
    'Total sales': money(rows.reduce((sum, row) => sum + Number(row.sale_amount || 0), 0)),
    'Total profit': money(rows.reduce((sum, row) => sum + Number(row.profit || 0), 0)),
    'Item rows': rows.length,
  };

  return (
    <section className="panel reveal">
      <div className="panel-title-row report-title-row">
        <div><h2>{title}</h2><p>{description}</p></div>
        <div className="export-actions">
          <button className="ghost-button" onClick={() => exportRows(filename, rows, 'xls', { title, filters, summary: summary || defaultSummary })}><FileSpreadsheet size={17} /> Excel</button>
        </div>
      </div>
      <div className="filter-grid">
        {mode === 'day' ? (
          <label>Date<input type="date" value={filters.date} onChange={(event) => setFilters({ ...filters, date: event.target.value })} /></label>
        ) : (
          <label>Month<input type="month" value={filters.month} onChange={(event) => setFilters({ ...filters, month: event.target.value })} /></label>
        )}
        <label>Plant type<select value={filters.type} onChange={(event) => setFilters({ ...filters, type: event.target.value })}><option value="">All</option>{plantTypes.map((type) => <option key={type}>{type}</option>)}</select></label>
        <label>Source<select value={filters.source} onChange={(event) => setFilters({ ...filters, source: event.target.value })}><option value="">All</option>{sources.map((source) => <option key={source}>{source}</option>)}</select></label>
        <label>Keyword<input value={filters.search} onChange={(event) => setFilters({ ...filters, search: event.target.value })} placeholder="Plant, code, customer" /></label>
      </div>
      <DataTable rows={rows} />
    </section>
  );
}

function DataTable({ rows }) {
  const columns = [
    ['date', 'Date'],
    ['invoice_no', 'Invoice'],
    ['order_status', 'Sale stage'],
    ['payment_status', 'Payment status'],
    ['payment_method', 'Payment method'],
    ['plant_name', 'Plant name'],
    ['plant_code', 'Code'],
    ['plant_type', 'Type'],
    ['size', 'Size'],
    ['quantity', 'Qty'],
    ['unit_price', 'Selling price'],
    ['ws_price', 'Original cost'],
    ['customer_name', 'Customer'],
    ['customer_phone', 'Phone'],
    ['customer_address', 'Address'],
    ['customer_source', 'Source'],
    ['sale_amount', 'Sale amount'],
    ['profit', 'Profit'],
    ['discount_amount', 'Invoice discount'],
    ['invoice_total', 'Invoice total'],
    ['paid_amount', 'Paid amount'],
    ['balance_amount', 'Balance'],
  ];

  return (
    <div className="table-wrap report-table">
      <table>
        <thead>
          <tr>{columns.map(([, label]) => <th key={label}>{label}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={`${row.invoice_no}-${row.plant_code}-${index}`}>
              {columns.map(([key]) => (
                <td key={key}>{['unit_price', 'ws_price', 'sale_amount', 'profit', 'discount_amount', 'invoice_total', 'paid_amount', 'balance_amount'].includes(key) ? money(row[key]) : row[key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {!rows.length && <div className="empty-state">No rows match the current filters.</div>}
    </div>
  );
}

function MetricCard({ icon, label, value, detail }) {
  return (
    <article className="metric-card">
      <span className="metric-label">{label}{icon}</span>
      <strong>{value}</strong>
      {detail && <small>{detail}</small>}
    </article>
  );
}

function ExportCenterPage({ rows, invoices }) {
  return (
    <section className="panel reveal export-center">
      <div className="panel-title-row">
        <div className="panel-title">
          <FileOutput size={20} />
          <div><h2>Export Center</h2><p>Fast exports for cashier handoff, daily books, and monthly review.</p></div>
        </div>
      </div>
      <div className="export-tile-grid">
        <button className="export-tile" onClick={() => exportRows('plant-zone-all-sales', rows, 'xls')}>
          <FileSpreadsheet size={22} />
          <strong>All Sales Excel</strong>
          <span>{rows.length} item rows</span>
        </button>
      </div>
    </section>
  );
}

function SettingsPage({ users, setUsers, currentUser, auditLogs, logAudit, onLogout }) {
  const [userDraft, setUserDraft] = useState({ name: '', username: '', password: '', role: 'staff', can_view_reports: false });
  const [formError, setFormError] = useState('');
  const addUser = async () => {
    if (!hasPermission(currentUser, 'manage_users')) return;
    if (!userDraft.name.trim() || !userDraft.username.trim() || userDraft.password.length < 8 || users.some((user) => clean(user.username) === clean(userDraft.username))) {
      setFormError(appError('Enter a unique username and a password with at least 8 characters.', 'VALIDATION_ERROR').message);
      return;
    }
    const password_hash = await hashPassword(userDraft.password);
    const nextUsers = [...users, { ...userDraft, password: undefined, password_hash, id: Date.now(), active: true }];
    try {
      await writeAppState('plant-zone-users', nextUsers);
      setUsers(nextUsers);
      logAudit({ action: 'User created', target: userDraft.username, detail: roleLabels[userDraft.role] || userDraft.role });
      setUserDraft({ name: '', username: '', password: '', role: 'staff', can_view_reports: false });
      setFormError('');
    } catch (saveError) {
      console.error('Could not save user to Supabase', saveError);
      setFormError(saveError?.message || 'Could not save the user account to the shared database.');
    }
  };
  const updateUserRole = (user, role) => {
    setUsers((current) => current.map((item) => (
      item.id === user.id ? { ...item, role, can_view_reports: role !== 'staff' } : item
    )));
    logAudit({ action: 'User role updated', target: user.username, detail: `${roleLabels[user.role] || user.role} -> ${roleLabels[role] || role}` });
  };

  return (
    <section className="settings-page">
      <section className="panel reveal account-settings">
        <div className="panel-title-row"><div className="panel-title"><ShieldCheck size={20} /><div><h2>Signed-in Account</h2><p>Manage the current session on this device.</p></div></div></div>
        <div className="current-account">
          <div className="avatar">{currentUser.name.slice(0, 1).toUpperCase()}</div>
          <div><strong>{currentUser.name}</strong><span>@{currentUser.username} - {roleLabels[currentUser.role] || currentUser.role}</span></div>
          <button className="ghost-button danger" onClick={onLogout}><LogOut size={17} /> Log out</button>
        </div>
      </section>

      {hasPermission(currentUser, 'manage_users') && (
        <>
          <section className="panel reveal">
            <div className="panel-title-row"><div className="panel-title"><Users size={20} /><div><h2>User Management</h2><p>Create admin or staff accounts, control report visibility, disable access, and delete old accounts.</p></div></div></div>
            <div className="user-create-form">
              {formError && <p className="login-error span-2" role="alert">{formError}</p>}
              <label>Display name<input placeholder="Shown inside the app" value={userDraft.name} onChange={(event) => setUserDraft({ ...userDraft, name: event.target.value })} /></label>
              <label>Login username<input placeholder="Used on the login page" value={userDraft.username} onChange={(event) => setUserDraft({ ...userDraft, username: event.target.value })} /></label>
              <label>Temporary password<input type="password" value={userDraft.password} onChange={(event) => setUserDraft({ ...userDraft, password: event.target.value })} /></label>
              <label>Role<select value={userDraft.role} onChange={(event) => setUserDraft({ ...userDraft, role: event.target.value, can_view_reports: event.target.value !== 'staff' })}><option value="staff">Staff</option><option value="inventory_manager">Inventory Manager (Stock + Sales)</option><option value="admin">Admin</option></select></label>
              <button className="primary-button" onClick={addUser}><Plus size={17} /> Add user</button>
            </div>
            <div className="user-management-list">
              {users.map((user) => (
                <article key={user.id}>
                  <div className="avatar">{user.name.slice(0, 1).toUpperCase()}</div>
                  <div className="user-identity"><strong>{user.name}</strong><span>@{user.username} · {user.role}</span></div>
                  <label className="user-role-control">Role<select value={user.role} disabled={String(user.id) === String(currentUser.id)} onChange={(event) => updateUserRole(user, event.target.value)}>{Object.entries(roleLabels).map(([value, label]) => <option value={value} key={value}>{label}</option>)}</select></label>
                  <label className="permission-toggle"><input type="checkbox" checked={hasPermission(user, 'view_reports') || Boolean(user.can_view_reports)} disabled={hasPermission(user, 'view_reports')} onChange={(event) => { setUsers((current) => current.map((item) => item.id === user.id ? { ...item, can_view_reports: event.target.checked } : item)); logAudit({ action: 'User permission updated', target: user.username, detail: `Reports: ${event.target.checked ? 'on' : 'off'}` }); }} /><span>Reports</span></label>
                  <label className="permission-toggle"><input type="checkbox" checked={Boolean(user.active)} disabled={String(user.id) === String(currentUser.id)} onChange={(event) => { setUsers((current) => current.map((item) => item.id === user.id ? { ...item, active: event.target.checked } : item)); logAudit({ action: 'User status updated', target: user.username, detail: event.target.checked ? 'Active' : 'Inactive' }); }} /><span>Active</span></label>
                  {String(user.id) !== String(currentUser.id) && <button className="icon-button danger" onClick={() => { setUsers((current) => current.filter((item) => item.id !== user.id)); logAudit({ action: 'User deleted', target: user.username, detail: user.name }); }} aria-label={`Delete ${user.name}`}><Trash2 size={16} /></button>}
                </article>
              ))}
            </div>
          </section>
        </>
      )}

      {hasPermission(currentUser, 'view_audit_logs') && (
        <section className="panel reveal">
          <div className="panel-title-row"><div className="panel-title"><ShieldCheck size={20} /><div><h2>Audit Log</h2><p>Security and inventory activity trail.</p></div></div></div>
          <div className="mini-history">
            {auditLogs.slice(0, 80).map((entry) => (
              <span key={entry.id}>{String(entry.date).slice(0, 10)} - {entry.user_name} - {entry.action} - {entry.target} - {entry.detail}</span>
            ))}
            {!auditLogs.length && <div className="empty-state">No audit events yet.</div>}
          </div>
        </section>
      )}

      <section className="panel reveal">
        <div className="panel-title-row"><div className="panel-title"><Settings size={20} /><div><h2>Business Defaults</h2><p>Plant Zone store information used across the app.</p></div></div></div>
        <div className="settings-grid">
          <label>Business name<input value="Plant Zone" readOnly /></label>
          <label>Business type<input value="Garden Center" readOnly /></label>
          <label>Location<input value="Pyay, Bago Region, Myanmar" readOnly /></label>
          <label>Phone<input value="+95 9 756 040646" readOnly /></label>
          <label>Default payment method<input value="Cash" readOnly /></label>
          <label>Data storage<input value="Shared Supabase database" readOnly /></label>
        </div>
      </section>
    </section>
  );
}

function flattenInvoiceRows(invoices) {
  return invoices.flatMap((invoice) => invoice.items.map((item) => ({
    date: invoice.sale_date,
    invoice_no: invoice.invoice_no,
    order_status: saleStageFor(invoice),
    payment_status: invoice.payment_status,
    payment_method: invoice.payment_method,
    plant_name: item.plant_name,
    plant_code: item.plant_code,
    plant_type: item.plant_type,
    size: item.size,
    quantity: item.quantity,
    unit_price: item.unit_price,
    ws_price: item.ws_price,
    customer_name: invoice.customer.cus_name,
    customer_phone: invoice.customer.cus_ph,
    customer_address: invoice.customer.cus_address,
    customer_source: invoice.customer.source,
    sale_amount: item.sale_amount,
    profit: item.profit_amount,
    discount_amount: Number(invoice.discount_amount || 0),
    invoice_total: Number(invoice.sale_amount || invoice.subtotal || 0),
    paid_amount: Number(invoice.paid_amount ?? (invoice.payment_status === 'Paid' ? invoice.sale_amount : 0)),
    balance_amount: Math.max(0, Number(invoice.sale_amount || invoice.subtotal || 0) - Number(invoice.paid_amount ?? (invoice.payment_status === 'Paid' ? invoice.sale_amount : 0))),
  })));
}

function filterRows(rows, filters, mode) {
  return rows.filter((row) => {
    const dateMatch = mode === 'day' ? row.date === filters.date : row.date.startsWith(filters.month);
    const typeMatch = !filters.type || row.plant_type === filters.type;
    const sourceMatch = !filters.source || row.customer_source === filters.source;
    const searchMatch = !filters.search || [row.plant_name, row.plant_code, row.customer_name, row.customer_phone].some((value) => clean(value).includes(clean(filters.search)));
    return dateMatch && typeMatch && sourceMatch && searchMatch;
  });
}

function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function exportRows(filename, rows, type, options = {}) {
  const columns = [
    ['date', 'Date'],
    ['invoice_no', 'Invoice No'],
    ['order_status', 'Sale Stage'],
    ['payment_status', 'Payment Status'],
    ['payment_method', 'Payment Method'],
    ['plant_name', 'Plant Name'],
    ['plant_code', 'Plant Code'],
    ['plant_type', 'Plant Type'],
    ['size', 'Size'],
    ['quantity', 'Quantity'],
    ['unit_price', 'Selling Price'],
    ['ws_price', 'Original Cost'],
    ['customer_name', 'Customer Name'],
    ['customer_phone', 'Customer Phone'],
    ['customer_address', 'Customer Address'],
    ['customer_source', 'Customer Source'],
    ['sale_amount', 'Sale Amount'],
    ['profit', 'Profit'],
    ['discount_amount', 'Invoice Discount'],
    ['invoice_total', 'Invoice Total'],
    ['paid_amount', 'Paid Amount'],
    ['balance_amount', 'Balance'],
  ];
  const headers = columns.map(([key]) => key);
  const moneyColumns = ['unit_price', 'ws_price', 'sale_amount', 'profit', 'discount_amount', 'invoice_total', 'paid_amount', 'balance_amount'];
  if (type === 'xls') {
    const summary = options.summary || {
      'Total sales': money(rows.reduce((sum, row) => sum + Number(row.sale_amount || 0), 0)),
      'Total profit': money(rows.reduce((sum, row) => sum + Number(row.profit || 0), 0)),
      'Item rows': rows.length,
    };
    const filterRows = Object.entries(options.filters || {})
      .filter(([, value]) => value)
      .map(([key, value]) => `<tr><th>${escapeHtml(key.replaceAll('_', ' '))}</th><td>${escapeHtml(value)}</td></tr>`)
      .join('');
    const summaryRows = Object.entries(summary)
      .map(([label, value]) => `<tr><th>${escapeHtml(label)}</th><td>${escapeHtml(value)}</td></tr>`)
      .join('');
    const tableRows = rows.map((row) => `<tr>${columns.map(([key]) => {
      const value = moneyColumns.includes(key) ? money(row[key]) : row[key];
      return `<td>${escapeHtml(value)}</td>`;
    }).join('')}</tr>`).join('');
    const workbook = `<!doctype html><html><head><meta charset="utf-8"><style>
      body{font-family:Arial,sans-serif;color:#1f2a1f}
      h1{font-size:20px;margin:0 0 12px}
      table{border-collapse:collapse;width:100%;margin-bottom:18px}
      th{background:#dff3e3;color:#236235;font-weight:700}
      th,td{border:1px solid #8fbf98;padding:8px;text-align:left;vertical-align:top}
      .meta{width:420px}
      .amount{text-align:right}
    </style></head><body>
      <h1>${escapeHtml(options.title || filename)}</h1>
      <table class="meta"><tbody>${filterRows}${summaryRows}</tbody></table>
      <table><thead><tr>${columns.map(([, label]) => `<th>${escapeHtml(label)}</th>`).join('')}</tr></thead><tbody>${tableRows || `<tr><td colspan="${columns.length}">No rows match the current filters.</td></tr>`}</tbody></table>
    </body></html>`;
    download(`${filename}.xls`, 'application/vnd.ms-excel;charset=utf-8', workbook);
    return;
  }
  const csv = [
    columns.map(([, label]) => label).join(','),
    ...rows.map((row) => headers.map((header) => {
      const value = moneyColumns.includes(header) ? money(row[header]) : row[header];
      return `"${String(value ?? '').replaceAll('"', '""')}"`;
    }).join(',')),
  ].join('\n');
  download(`${filename}.csv`, 'text/csv;charset=utf-8', csv);
}

function download(filename, type, content) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

function shareText(text) {
  if (navigator.share) {
    navigator.share({ title: 'Plant Zone POS', text }).catch(() => {});
  } else {
    navigator.clipboard?.writeText(text);
    alert('Invoice record copied for sharing.');
  }
}

function bestBy(rows, key) {
  const totals = rows.reduce((acc, row) => {
    acc[row[key]] = (acc[row[key]] || 0) + Number(row.quantity || 1);
    return acc;
  }, {});
  return Object.entries(totals).sort((a, b) => b[1] - a[1])[0]?.[0];
}

export default App;




