# Supabase Setup for Plant Zone POS

## 1. Create the Supabase project

1. Go to https://supabase.com/dashboard.
2. Create a new project.
3. Open **Project Settings > API**.
4. Copy the **Project URL** and **publishable** key. Older dashboards may call this the **anon public** key.

## 2. Create the database table

1. In Supabase, open **SQL Editor**.
2. Paste the contents of `supabase-schema.sql`.
3. Click **Run**.

This creates one `app_state` table for the current app data:

- `plant-zone-plants`
- `plant-zone-customers`
- `plant-zone-invoices`
- `plant-zone-sale-adjustments`
- `plant-zone-stock-history`
- `plant-zone-audit-logs`
- `plant-zone-users`

## 3. Configure local environment variables

Create a local `.env` file:

```env
VITE_SUPABASE_URL=https://your-project-ref.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=your-supabase-publishable-or-anon-key
```

Restart Vite after creating or editing `.env`:

```bash
npm run dev
```

## 4. Configure Vercel environment variables

In Vercel:

1. Open your Plant Shop project.
2. Go to **Settings > Environment Variables**.
3. Add `VITE_SUPABASE_URL`.
4. Add `VITE_SUPABASE_PUBLISHABLE_KEY`.
5. Apply them to **Production**, **Preview**, and **Development** if you use all three.
6. Redeploy the project.

## 5. Check that it is connected

1. Open the app.
2. Sign in.
3. Go to **Settings**.
4. The **Data storage** field should say `Supabase database + browser cache`.
5. Add or edit a plant/customer/invoice.
6. In Supabase, open **Table Editor > app_state** and confirm rows are created.

## Security note

The app now adds local session expiration, role-based screens, password hash migration for app users, validation, audit logs, and inventory history.

For real production security, you still must use Supabase Auth so the database can know who is signed in. After moving users to Supabase Auth, run `supabase-production-security.sql` in the Supabase SQL Editor. That file:

- blocks anonymous reads/writes to `app_state`
- adds `profiles` with Admin / Inventory Manager / Staff roles
- adds database audit log and inventory history tables
- adds RLS policies for authenticated users only

Do not run `supabase-production-security.sql` until Supabase Auth users/profiles are ready, because it will stop the current anon frontend key from writing `app_state`.

## What you must do

1. Change the default `admin / admin123` password after first login.
2. Create real staff accounts in **Settings > User Management**.
3. Use passwords with at least 8 characters.
4. Keep `.env` private and never paste Supabase keys into frontend source files.
5. When ready for public/production use, move login to Supabase Auth and run `supabase-production-security.sql`.
6. In Supabase, enable email/password Auth and create one admin user first.
7. Insert that admin user into `profiles` with role `admin` before locking policies.
