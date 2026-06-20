# Booking Page URLs — Kindred Systems / AI Assistant Pro

Created in Session 1C (2026-06-20) using TidyCal Agency plan.

## TidyCal Account
- **Slug:** kindredsystems
- **Base URL:** https://tidycal.com/kindredsystems/
- **Plan:** Agency (lifetime, via AppSumo)
- **Login:** cathrynmora.therapy@gmail.com

---

## Booking Page 1 — AI Assistant Intake Call

**URL:** https://tidycal.com/kindredsystems/ai-intake-call  
**Duration:** 20 minutes  
**Purpose:** Post-payment onboarding — AI agent calls the client at their booked time  
**Location:** Phone call (agent calls them)  
**Calendar:** AI Assistant Intake Agent — Kindred Systems (dedicated Google Calendar, not Cathryn's personal calendar)  
**Scheduling window:** 14 days ahead  
**Minimum notice:** 1 hour  
**Conflict check:** OFF — agent is available any time  
**Used in:** Stripe success page (after payment), client welcome email  

---

## Booking Page 2 — Sales Call with Cathryn

**URL:** https://tidycal.com/kindredsystems/sales-call  
**Duration:** 20 minutes  
**Purpose:** Prospects who want to speak to a human before buying  
**Location:** Phone call  
**Calendar:** Cathryn's primary Google Calendar  
**Scheduling window:** 14 days ahead  
**Minimum notice:** 4 hours  
**Conflict check:** ON — respects Cathryn's existing calendar  
**Used in:** Vapi outbound agent SMS (Branch B — maybe), Kai sales agent fallback  

---

## Google Calendar Created

**Name:** AI Assistant Intake Agent — Kindred Systems  
**Purpose:** Dedicated calendar for AI intake call scheduling. Separate from Cathryn's personal calendar. As team grows, additional intake agents can be added to this calendar.  
**Calendar ID:** 4252eaef893d6caf36dfcc0345a6a3c2699d9704dd4bba11f06191958187f9db@group.calendar.google.com  

---

## Still To Do

- [ ] Reconnect Google Calendar in TidyCal integrations (disconnect + re-add) so the AI Assistant Intake Agent calendar appears in the dropdown, then set booking type 1 to use it
- [ ] Update Stripe success page redirect to use the AI intake call URL above
- [ ] Set Cathryn's actual availability on the Sales Call booking type (currently uses default Mon–Fri 9am–5pm)
- [ ] Consider custom domain (e.g. book.kindredsystems.com.au) to brand URLs further
