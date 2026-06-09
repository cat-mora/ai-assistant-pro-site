# Session 1I — Full Funnel Test

## What this session is for
Test the complete sales funnel end to end. Confirm every component works before running ads.

## Context
Read COWORK-HANDOVER.md in this folder first.
All of Sessions 1B through 1H must be complete before this session.

## Test checklist

### Step 1 — Form submission
- [ ] Go to www.aiassistantpro.com.au/tradies on a mobile device
- [ ] Fill in the form with test data (use a real mobile number you can answer)
- [ ] Submit the form
- [ ] Confirm: confirmation screen appears (no page reload)
- [ ] Confirm: Supabase leads table has a new row with correct data

### Step 2 — Outbound call
- [ ] Confirm: Vapi call fires within 60 seconds
- [ ] Answer the call
- [ ] Confirm: agent introduces itself correctly
- [ ] Confirm: agent uses your first name
- [ ] Confirm: agent sounds Australian (not American)
- [ ] Run through the full conversation

### Step 3 — Branch A (yes)
- [ ] Tell the agent you want to proceed
- [ ] Confirm: agent sends Stripe payment link via SMS
- [ ] Open the Stripe link — confirm correct product and price
- [ ] Complete a test payment (use Stripe test mode)
- [ ] Confirm: Stripe success page shows Google Calendar intake call booking link
- [ ] Book a test intake call

### Step 4 — Branch B (maybe)
- [ ] Run a second test call
- [ ] Tell the agent you want to think about it
- [ ] Confirm: agent sends Sales Call booking link via SMS
- [ ] Open the link — confirm it goes to the correct Google Calendar page

### Step 5 — Branch C (not ready)
- [ ] Run a third test call
- [ ] Tell the agent you're not interested
- [ ] Confirm: follow-up SMS fires

### Step 6 — Supabase logging
- [ ] Confirm: call outcomes are logged in Supabase (call_status updated)

## If something breaks
Note exactly which step failed and what happened. Each session briefing file (1B–1H) covers how to fix its component.

## Outputs expected
A short test results note saved as `funnel-test-results.md` — what passed, what needed fixing.
