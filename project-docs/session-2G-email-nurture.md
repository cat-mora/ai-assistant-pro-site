# Session 2G — Email Nurture Sequence

## What this session is for
Build a branching email nurture sequence for leads captured via the revenue leak calculator (2C). Each branch is tailored to the pain point the person identified with. Sequence leads them back to the relevant landing page or direct checkout.

## Context
Read COWORK-HANDOVER.md and sales-flow.md in this folder first.
DEPENDENCY: Requires session 2C (revenue leak calculator) to be built first — that's where emails are captured.

## How leads enter the sequence

Calculator on aiassistantpro.com.au shows result immediately (no email gate).
Email captured when person clicks "Email me the detailed breakdown / save my result."
Tag applied based on which pain point their inputs pointed to:
- Tag: MISSED_CALLS → Branch 1
- Tag: SLOW_LEADS → Branch 2
- Tag: EMPTY_DIARY → Branch 3
- Tag: DORMANT_CUSTOMERS → Branch 4

## Email sequence — all branches

**Timing:** Day 0 (immediate), Day 2, Day 5, Day 10, Day 21

### Branch 1 — Missed calls / interruption → L1 pitch

| Email | Subject line | Content angle |
|---|---|---|
| Day 0 | Your missed calls report | Here's your personalised result + what it means |
| Day 2 | What actually happens when you miss a call | The story: caller tries next business, job gone |
| Day 5 | How the electrician demo works | Hear what your customers would hear — link to demo |
| Day 10 | Answer & Message: what's included | Plain English breakdown of L1, pricing, setup |
| Day 21 | Still losing calls? | Soft close — direct checkout link for L1 |

### Branch 2 — Slow lead follow-up → L3 pitch

| Email | Subject line | Content angle |
|---|---|---|
| Day 0 | Your lead follow-up report | Here's your personalised result |
| Day 2 | The 5-minute rule that changes everything | Why 60 seconds vs 5 hours is the difference between winning and losing the job |
| Day 5 | Watch the AI call back a lead in 60 seconds | Link to YouTube demo video (session 2H) |
| Day 10 | Lead Callback: what's included | Plain English breakdown of L3, pricing, compatibility check |
| Day 21 | Still losing paid leads? | Soft close — compatibility check + checkout link for L3 |

### Branch 3 — Empty diary / bookings → L2 pitch

| Email | Subject line | Content angle |
|---|---|---|
| Day 0 | Your booking gap report | Here's your personalised result |
| Day 2 | Why calls don't turn into bookings | The drop-off: caller doesn't leave a voicemail, doesn't try again |
| Day 5 | Hear the booking flow in action | Demo call link — show what booking via agent sounds like |
| Day 10 | Answer & Book: what's included | Plain English breakdown of L2, pricing, setup |
| Day 21 | Diary still not full? | Soft close — direct checkout link for L2 |

### Branch 4 — Dormant customers → L4 pitch

| Email | Subject line | Content angle |
|---|---|---|
| Day 0 | Your customer reactivation report | Here's your personalised result + how many customers may be overdue |
| Day 2 | The customer list that's sitting there doing nothing | Story: pest control business, 400 past customers, zero outreach |
| Day 5 | Watch the AI reactivate an overdue customer | Link to YouTube demo video (session 2H) |
| Day 10 | Rebook & Reactivate: what's included | Plain English breakdown of L4, pricing, compatibility check |
| Day 21 | Still leaving repeat business on the table? | Soft close — compatibility check + checkout link for L4 |

## Email rules

- Australian English always
- Plain English — short sentences, no jargon
- One point per email, one CTA per email
- Never more than 3 short paragraphs
- Unsubscribe link in every email (ACMA compliance)
- Sender: Cathryn at AI Assistant Pro (cathryn@aiassistantpro.com.au or similar)
- Sender name: Cathryn, AI Assistant Pro

## Platform
Decide in session: likely Mailchimp, ConvertKit, or Supabase + a transactional email provider (e.g. Resend). Match whatever is easiest to wire to the calculator email capture in session 2C.

## Outputs expected
- Email platform chosen and set up
- All 4 branches written (20 emails total)
- Branching logic configured based on pain point tag
- Unsubscribe and ACMA compliance confirmed
- Connected to calculator email capture (session 2C)
- Test send completed for each branch
