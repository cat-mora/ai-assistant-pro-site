# Booking Page URLs — Kindred Systems / AI Assistant Pro

Created in Session 1C (2026-06-20) using TidyCal Agency plan.

## Naming Convention

`[business-abbreviation]-[person/agent]-[purpose]`

- `aap` = AI Assistant Pro
- `dep` = Digital Employee Pro (future)
- Agent names are real names (e.g. Connor)
- Person names are real names (e.g. Cathryn)

---

## TidyCal Account

- **Slug:** kindredsystems
- **Base URL:** https://tidycal.com/kindredsystems/
- **Plan:** Agency (lifetime, via AppSumo)
- **Login:** cathrynmora.therapy@gmail.com

---

## Booking Page 1 — Connor Intake Call

**URL:** https://tidycal.com/kindredsystems/aap-connor-intake
**Title:** AI Assistant Pro — Intake Call with Connor (AI Agent)
**Duration:** 20 minutes
**Purpose:** Post-payment onboarding — Connor (AI agent) calls the client at their booked time
**Location:** Phone call (agent calls them)
**Calendar:** TidyCal only — no Google Calendar needed
**Scheduling window:** 14 days ahead
**Minimum notice:** 1 hour
**Conflict check:** OFF — Connor is available 24/7
**Used in:** Stripe success page (after payment), client welcome email

---

## Booking Page 2 — Cathryn Intro Call

**URL:** https://tidycal.com/kindredsystems/aap-cathryn-intro
**Title:** Chat with Cathryn — AI Assistant Pro
**Duration:** 20 minutes
**Purpose:** Prospects who want to speak to a human before buying
**Location:** Phone call
**Calendar:** Cathryn's Google Calendar (connect when ready)
**Scheduling window:** 14 days ahead
**Minimum notice:** 4 hours
**Conflict check:** ON — respects Cathryn's existing calendar
**Used in:** Vapi outbound agent SMS (Branch B — maybe), Kai sales agent fallback

---

## Still To Do

- [ ] Reconnect Cathryn's Google Calendar in TidyCal integrations so aap-cathryn-intro respects her availability
- [ ] Set Cathryn's actual availability hours on the aap-cathryn-intro booking type
- [ ] Update Stripe success page redirect to: https://tidycal.com/kindredsystems/aap-connor-intake
- [ ] Delete the 3 default TidyCal booking types (15/30/60 Minute Meeting) — not needed
- [ ] Consider custom domain (e.g. book.kindredsystems.com.au) to brand URLs further
