# Session 1N — Direct Checkout + Compatibility Check

## What this session is for
Add direct "Start this package" CTAs to the homepage pricing cards so a confident buyer can go straight to Stripe without speaking to Kai. Kai remains available throughout as an option, not a requirement.

## Context
Read COWORK-HANDOVER.md and sales-flow.md in this folder first.

## The problem this solves
Currently every visitor who wants to buy must go through Kai. A tradie who has read the page, heard the demo, and knows they want Level 2 should be able to just pay. Forcing everyone through Kai creates unnecessary friction for confident buyers.

## What to build

### L1 and L2 — straight to Stripe
Add a "Start Answer & Message" / "Start Answer & Book" button to each pricing card.
Clicks go directly to the relevant Stripe setup fee payment link (from `stripe-payment-links.md`).
No intermediate step. No Kai required.

### L3 and L4 — compatibility check first
These levels depend on external systems (lead sources, calendars, customer data) that may not exist or may not be usable. Selling L3 or L4 to someone without the right setup creates a bad client experience.

Build a short compatibility check (5 questions, inline or modal — not a separate page):

**For L3 — Lead Callback:**
1. How do new leads currently reach you? (ads/form, Google enquiry, directory, other)
2. Do you have a calendar or booking system? (Google Calendar, Calendly, ServiceM8, Tradify, other, none)
3. Roughly how many new leads do you get per week?
4. How quickly do you currently call them back?
5. What state/territory are you based in?

**For L4 — Rebook & Reactivate:**
1. Do you have a list of past customers with phone numbers? (yes / sort of / no)
2. What system is that list in? (spreadsheet, ServiceM8, Tradify, Jobber, other CRM, none)
3. How often do your customers typically need to rebook? (monthly, quarterly, annually, varies)
4. Do you have consent to contact past customers? (yes / not sure)
5. What state/territory are you based in?

**If compatible:** proceed directly to Stripe.
**If not compatible (e.g. no leads coming in for L3, no customer list for L4):** show a friendly message explaining why this level may not be the best starting point, and offer: "Talk to Kai to find your best package" or "Book a call with Cathryn."

### Where to add CTAs
- Homepage pricing cards (primary)
- Any SEO/trade landing pages built in session 2B
- Confirmation should be: after compatibility check passes, show a brief summary of what they're signing up for before hitting Stripe

## What Kai's role becomes
Kai is an option, not a gate. The homepage still has "Talk to Kai" prominently. Kai is best for people who are unsure which level suits them, or who want to talk through their setup before buying. He's not the only path.

## Stripe links (from stripe-payment-links.md)
- L1 setup: https://buy.stripe.com/14A28t8fO1CBdeW3MEfjG04
- L1 monthly: https://buy.stripe.com/00w3cxeEca97caSfvmfjG00
- L2 setup: https://buy.stripe.com/cNi7sN67Gdljgr8cjafjG05
- L2 monthly: https://buy.stripe.com/4gM00lfIgftr4IqgzqfjG01
- L3 setup: https://buy.stripe.com/bJeaEZ67G80Z1we6YQfjG06
- L3 monthly: https://buy.stripe.com/7sYaEZfIg2GF2AidnefjG02
- L4 setup: https://buy.stripe.com/9B628t0Nmgxv8YGerifjG07
- L4 monthly: https://buy.stripe.com/00w4gBbs0ftrfn4ab2fjG03

NOTE: Send setup fee and monthly subscription as separate links. Buyer pays setup fee first, then monthly.

## Outputs expected
- Updated homepage pricing section with direct checkout CTAs
- Compatibility check built for L3 and L4 (inline modal or short form)
- Deployed to Vercel via GitHub push
- Tested end to end: L1/L2 direct to Stripe, L3/L4 through check
