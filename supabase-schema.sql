create table if not exists public.app_state (
  state_key text primary key,
  value jsonb not null,
  updated_at timestamptz not null default now()
);

alter table public.app_state enable row level security;

drop policy if exists "Plant Zone app can read state" on public.app_state;
drop policy if exists "Plant Zone app can insert state" on public.app_state;
drop policy if exists "Plant Zone app can update state" on public.app_state;

create policy "Plant Zone app can read state"
on public.app_state
for select
to anon
using (true);

create policy "Plant Zone app can insert state"
on public.app_state
for insert
to anon
with check (true);

create policy "Plant Zone app can update state"
on public.app_state
for update
to anon
using (true)
with check (true);
