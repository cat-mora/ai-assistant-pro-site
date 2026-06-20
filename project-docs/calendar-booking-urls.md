# Booking Page URLs — Kindred Systems / AI Assistant Pro

Created and finalised in Session 1C (2026-06-20) using TidyCal Agency plan.

## Naming Convention

`[business-abbreviation]-[person/agent]-[purpose]`

- `aap` = AI Assistant Pro
- `dep` = Digital Employee Pro (future)
- Agent names are real names (e.g. Connor)
- Person names are real names (e.g. Cathryn)

---

## TidyCal Account

- **Slug:** `kindredsystems`
- **Base URL:** https://tidycal.com/kindredsystems/
- **Plan:** Agency (lifetime, via AppSumo — one-time cost)
- **Login:** cathrynmora.therapy@gmail.com
- **Google Calendar:** Connected (Cathryn's primary Google Calendar synced)
- **Teams:** Use TidyCal Teams for brand separation as more businesses are added

---

## Booking Page 1 — Connor Intake Call ✅

**URL:** https://tidycal.com/kindredsystems/aap-connor-intake  
**Title:** AI Assistant Pro — Intake Call with Connor (AI Agent)  
**Duration:** 20 minutes  
**Purpose:** Post-payment onboarding — Connor (AI agent) interviews the client at their booked time  
**Location:** Phone call (agent calls them)  
**Calendar:** TidyCal only — no Google Calendar sync. All bookings stored in TidyCal.  
**Scheduling window:** 14 days ahead  
**Minimum notice:** 1 hour  
**Conflict check:** OFF — Connor is an AI agent, available 24/7, no conflicts needed  
**Description (shown to client):** "Welcome to AI Assistant Pro. This call is with Connor, our AI onboarding agent. Before joining, please make sure you've read your onboarding email and have your business details ready. The call takes about 15 minutes."  
**Used in:** Stripe success page redirect (after payment), client welcome email (Session 1J)

---

## Booking Page 2 — Cathryn Intro Call ✅

**URL:** https://tidycal.com/kindredsystems/aap-cathryn-intro  
**Title:** Chat with Cathryn — AI Assistant Pro  
**Duration:** 20 minutes  
**Purpose:** Prospects who want to speak to a human before buying  
**Location:** Phone call  
**Calendar:** Cathryn's primary Google Calendar (connected and syncing)  
**Scheduling window:** 14 days ahead  
**Minimum notice:** 4 hours  
**Conflict check:** ON — "Ignore external calendar conflicts" is OFF, so TidyCal checks Google Calendar before showing availability  
**Description (shown to client):** "Not sure if an AI phone agent is right for your business? Book a no-pressure chat with Cathryn, founder of AI Assistant Pro. She'll listen to how your business currently handles calls, answer your questions, and give you an honest take on whether this is a good fit."  
**Used in:** Vapi outbound agent SMS (Branch B — maybe), Kai sales agent fallback

### Cathryn's Availability (set 2026-06-20)

| Day | Hours |
|---|---|
| Monday | 5:00 PM – 7:00 PM |
| Tuesday | 5:00 PM – 7:00 PM |
| Wednesday | 5:00 PM – 7:00 PM |
| Thursday | 9:00 AM – 5:00 PM (day off from day job) |
| Friday | 5:00 PM – 7:00 PM |
| Saturday | 9:00 AM – 12:00 PM |
| Sunday | Unavailable |

---

## Scalability Notes

TidyCal Agency plan supports Teams and round-robin scheduling. As the team grows:
- Each business unit gets its own TidyCal Team (e.g. `aiassistantpro`, `digitalemployeepro`)
- Each team member (human or AI agent) gets their own booking type under the relevant team
- Naming convention: `[biz]-[person]-[purpose]` (e.g. `aap-sarah-intro`, `dep-connor-intake`)

---

## Still To Do

- [ ] Update Stripe success page redirect to: https://tidycal.com/kindredsystems/aap-connor-intake
- [ ] Build Connor AI intake agent in Vapi (Session 1J)
- [ ] Wire Connor booking confirmation to trigger agent call (Session 1J)
- [ ] Consider custom domain (e.g. book.kindredsystems.com.au) to brand URLs further
