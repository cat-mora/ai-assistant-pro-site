# Session 1D — Supabase Lead Database

## What this session is for
Create a dedicated Supabase project for AI Assistant Pro and set up the leads table. This is where form submissions from /tradies will be stored, and where the trigger for the Vapi outbound call will fire.

## Context
Read COWORK-HANDOVER.md in this folder first.

## Important
There is already a Supabase account active, but the only project in it is "Cultivating the Fruit app backend" — that is a different business. Create a completely separate project for AI Assistant Pro. Do not touch the existing project.

## What to create

### New Supabase project
- Name: AI Assistant Pro
- Region: ap-southeast-2 (Sydney — closest to Brisbane)
- Save the project URL and anon key to `supabase-config.md` in this folder

### Leads table
Create a table called `leads` with these columns:

| Column | Type | Notes |
|---|---|---|
| id | uuid | Primary key, auto-generated |
| created_at | timestamptz | Auto-set on insert |
| first_name | text | From form |
| mobile | text | From form — store as string to preserve leading zeros |
| business_type | text | From form (e.g. "plumber", "electrician") |
| biggest_frustration | text | From form |
| suburb | text | From form |
| consent | boolean | Must be true — form requires this |
| call_status | text | Default: 'pending'. Updates to 'called', 'failed' etc |
| source | text | Default: 'tradies-page' — useful when multiple pages added later |

### Row Level Security
- Enable RLS on the leads table
- Add an insert policy that allows the anon key to insert rows (the form uses the anon key)
- Do not allow public reads — only service role can read

## Outputs expected
- Supabase project created
- Leads table created with correct schema
- Project URL and anon key saved to `supabase-config.md`
- Test: insert a row manually and confirm it saves

## Next step
Session 1H wires the /tradies form to this table and adds the Vapi call trigger.
