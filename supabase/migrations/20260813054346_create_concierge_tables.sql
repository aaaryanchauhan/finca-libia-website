/*
# Create concierge requests and guest memories tables

## Purpose
This is a single-tenant (no auth) luxury concierge app. Guests access the app via a URL/QR code without signing in.
All data is intentionally shared/public — any guest using the app can read existing entries and submit new ones.

## New Tables

### 1. concierge_requests
- `id` (uuid, primary key)
- `type` (text, not null) — the category of request: "custom", "towels", "housekeeping", "ride", "restaurant", "grocery", "maintenance"
- `message` (text, not null) — the guest's request text
- `status` (text, not null, default 'pending') — "pending", "acknowledged", "completed"
- `created_at` (timestamptz, default now())

### 2. guestbook_entries
- `id` (uuid, primary key)
- `best_meal` (text, nullable) — guest's recommendation for best meal
- `best_experience` (text, nullable) — guest's recommendation for best experience
- `discovered` (text, nullable) — something the guest discovered
- `must_do` (text, nullable) — one thing every guest should do
- `quote` (text, nullable) — a short memory/quote
- `author_name` (text, nullable) — guest's name
- `created_at` (timestamptz, default now())

## Security
- Enable RLS on both tables.
- Allow anon + authenticated CRUD on both tables because the data is intentionally public/shared (no-auth app accessed via QR code).
- USING (true) / WITH CHECK (true) is acceptable here because this is a single-tenant app with no sign-in.
*/

CREATE TABLE IF NOT EXISTS concierge_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  type text NOT NULL,
  message text NOT NULL,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE concierge_requests ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_requests" ON concierge_requests;
CREATE POLICY "anon_select_requests" ON concierge_requests FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_requests" ON concierge_requests;
CREATE POLICY "anon_insert_requests" ON concierge_requests FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_requests" ON concierge_requests;
CREATE POLICY "anon_update_requests" ON concierge_requests FOR UPDATE
  TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_requests" ON concierge_requests;
CREATE POLICY "anon_delete_requests" ON concierge_requests FOR DELETE
  TO anon, authenticated USING (true);

CREATE TABLE IF NOT EXISTS guestbook_entries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  best_meal text,
  best_experience text,
  discovered text,
  must_do text,
  quote text,
  author_name text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE guestbook_entries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_guestbook" ON guestbook_entries;
CREATE POLICY "anon_select_guestbook" ON guestbook_entries FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_guestbook" ON guestbook_entries;
CREATE POLICY "anon_insert_guestbook" ON guestbook_entries FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_guestbook" ON guestbook_entries;
CREATE POLICY "anon_delete_guestbook" ON guestbook_entries FOR DELETE
  TO anon, authenticated USING (true);