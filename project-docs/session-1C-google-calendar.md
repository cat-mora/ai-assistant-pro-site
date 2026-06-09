# Session 1C — Google Calendar Booking Pages

## What this session is for
Create two booking pages using Google Calendar's free appointment scheduling feature. Get both URLs — they are used in Stripe success pages, Vapi SMS messages, and the client welcome email.

## Context
Read COWORK-HANDOVER.md in this folder first.

## Two pages to create

### Page 1 — AI Intake Call (for new paying clients)
- Duration: 15 minutes (AI agent interviews them — not a call with Cathryn)
- Purpose: Post-payment onboarding interview with the AI intake agent
- Availability: Business hours, Mon–Fri (adjust to Cathryn's preference)
- Title: "AI Intake Call — Let's set up your agent"
- Description: "Your AI agent will interview you to gather everything needed to configure your service. Have your business details handy — the call takes about 10–15 minutes."
- This URL goes on: Stripe success page, client welcome email

### Page 2 — Sales Call (for prospects who want to speak to a human)
- Duration: 20 minutes
- Purpose: Prospect who said "maybe" gets to talk to Cathryn
- Availability: Set to Cathryn's actual availability
- Title: "Quick chat with Cathryn — AI Assistant Pro"
- Description: "Wondering if an AI phone agent is right for your business? Let's have a quick chat."
- This URL goes on: Vapi outbound agent SMS (Branch B — maybe)

## Outputs expected
- Both booking page URLs saved to `calendar-booking-urls.md` in this folder
- Confirm Google Workspace / Google account is active and can receive bookings

## Notes
- Google Calendar appointment scheduling is free — no paid tool needed
- If Google Workspace email (cathryn@aiassistantpro.com.au) is not yet active, set up booking pages under personal Gmail for now and migrate later
- The AI Intake Call page is booked by clients — it doesn't need to be Cathryn's actual calendar, just a trigger that tells the system when to run the intake call
