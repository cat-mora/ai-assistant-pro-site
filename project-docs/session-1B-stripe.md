# Session 1B — Stripe Payment Links

## What this session is for
Set up all four pricing tiers as Stripe payment links. Both monthly subscriptions and one-time setup fees. Configure the success page to show the Google Calendar AI Intake Call booking link.

## Context
Read COWORK-HANDOVER.md in this folder first.

## Pricing to set up in Stripe

| Level | Name | Monthly | Setup Fee |
|---|---|---|---|
| Level 1 | Answer & Message | A$295/mo | A$495 |
| Level 2 | Answer & Book | A$395/mo | A$695 |
| Level 3 | Lead Callback | A$595/mo | A$995 |
| Level 4 | Rebook & Reactivate | A$995/mo | A$1,495 |

## What to create in Stripe
1. Four recurring subscription products (one per level)
2. Four one-time setup fee products (one per level)
3. Payment links for each — total of 8 links
4. Success page on each payment link: show Google Calendar AI Intake Call booking link (get URL from Session 1C first, or use a placeholder and update)

## Collect during this session
- All 8 payment link URLs
- Save them to a file called `stripe-payment-links.md` in this folder
- These URLs are used by the Vapi outbound sales agent when a lead says yes

## Notes
- Stripe account already exists — log in at stripe.com
- Australian business — set currency to AUD
- Subscriptions are month-to-month, no lock-in
- Setup fees are one-time, non-refundable (except as per the 30-day pilot offer)
- The Vapi agent sends the payment link via SMS — keep the URLs short (use Stripe's built-in link shortening)
