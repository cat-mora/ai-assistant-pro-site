# Session 1H — Form → Supabase → Vapi Automation

## What this session is for
Wire together the full automation: form submission on /tradies saves to Supabase, which triggers a Vapi outbound call within 60 seconds.

## Context
Read COWORK-HANDOVER.md in this folder first.
Requires Sessions 1D (Supabase), 1F (Vapi assistant ID), and 1G (/tradies page) to be complete first.

## The automation chain

```
User submits /tradies form
      ↓
Form POSTs to Supabase leads table
      ↓
Supabase Database Webhook fires on INSERT
      ↓
Edge function calls Vapi API to trigger outbound call
      ↓
Vapi calls the lead's mobile number
      ↓
Call outcome (branch A/B/C) logged back to Supabase
```

## What to build

### 1. Supabase edge function
A Deno function that:
- Receives the webhook payload (new lead row)
- Extracts mobile number and first name
- Calls the Vapi API to initiate an outbound call
- Passes lead data as call metadata (so agent can use first name, business type)
- Returns 200 on success

### 2. Supabase database webhook
- Trigger: INSERT on `leads` table
- Target: the edge function above
- Filter: only fire when `call_status = 'pending'`

### 3. Vapi call initiation API call
POST to `https://api.vapi.ai/call/phone` with:
- assistantId: [from vapi-config.md]
- phoneNumber: lead's mobile
- assistantOverrides: pass first_name and business_type as variables

### 4. Update call_status in Supabase
After Vapi confirms the call is initiated, update the lead row: `call_status = 'called'`

## Outputs expected
- Edge function deployed and active
- Database webhook configured
- Test: submit a form → confirm Supabase row created → confirm Vapi call fires within 60 seconds
- Save Vapi API key location to `vapi-config.md`

## Notes
- Vapi API key is a private key (different from the public key in the website) — find it in Vapi dashboard under API Keys
- The edge function needs the Vapi private API key as an environment variable in Supabase
- If the call fails (no answer, wrong number), update call_status to 'failed' for retry logic later
