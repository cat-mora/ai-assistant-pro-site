# AI Assistant Pro — Cowork Handover Document

This document gives Claude Cowork full context on the AI Assistant Pro business. Treat every session as a continuation of an ongoing build. Never ask for context that is already here. Jump straight into the task.

---

## The Business

**Business name:** AI Assistant Pro  
**Domain:** aiassistantpro.com.au + aiassistantpro.ai  
**Parent company:** Kindred Systems  
**Owner:** Cathryn (use Cathryn in all content and communications)  
**Location:** Brisbane, Queensland, Australia  
**ABN:** 97 722 882 034  
**Status:** Pre-launch. Domain registered, business name registered with ASIC, ABN confirmed, pricing finalised.  
**Owner background:** No coding background. Prefers plain English explanations before and after any code.

---

## What the Business Does

AI Assistant Pro sells fully managed AI voice agent services to Australian businesses. The business builds, deploys, and maintains AI phone agents that handle inbound calls, call back new leads, book appointments, and run outbound campaigns — automatically, without the business owner needing to answer the phone.

**Core pitch:** Most callers will not realise they are talking to AI. It sounds like a real person having a real conversation — not a phone menu, not a bot.

**Key differentiators from every Australian competitor:**
1. The agent closes sales on the call — no competitor does this
2. Outbound cold calling campaigns — barely offered in Australia
3. Inbound-to-close — form submission triggers callback within 60 seconds
4. Fully managed service — not just software, we maintain and improve it
5. Transparent pricing — competitors all hide pricing behind demos

---

## The Three Products (Internal Framing)

### Product 1 — The Answering Agent (internal: Starter plan)
Inbound only. Answers every call 24/7, captures caller details, books appointments, sends SMS confirmation, handles FAQs, transfers urgent calls.

### Product 2 — The Sales Agent (internal: Growth plan)
Everything in Starter plus: calls back web form submissions within 60 seconds, qualifies leads, handles objections, attempts to close on the call, sends Stripe payment link via SMS, books onboarding after payment, triggers follow-up SMS for maybes.

### Product 3 — The Full Agent System (internal: Pro plan)
Everything in Growth plus: outbound cold calling campaigns, trigger-based outbound, CRM integration, multi-agent setup, DNC register compliance, full ROI reporting.

---

## Current Pricing (Live on Website)

The website uses a 4-level structure:

| Level | Name | Monthly | Setup |
|---|---|---|---|
| Level 1 | Answer & Message | A$295/mo | A$495 |
| Level 2 | Answer & Book | A$395/mo | A$695 |
| Level 3 | Lead Callback | A$595/mo | A$995 |
| Level 4 | Rebook & Reactivate | A$995/mo | A$1,495 |

All prices in AUD. GST registration needed at $75,000 revenue.

---

## Tech Stack

| Function | Tool | Status |
|---|---|---|
| Landing page + form | Vercel + GitHub | ✅ Live |
| Lead database | Supabase | ✅ Account exists — AAP project NOT yet created |
| AI voice agent platform | Vapi.ai | ✅ Account created, demo assistants live |
| Phone + SMS | Twilio | ⏳ Number +61 480 844 608 exists. Regulatory bundle "AI Assistant Pro - Australian Mobile" submitted — awaiting approval. Once approved: assign bundle to number, then import into Vapi. |
| Payment | Stripe Payment Links | ✅ Account exists — payment links NOT yet created |
| Booking | Google Calendar booking pages | ❌ Not set up yet |
| Email | Google Workspace | ⚠️ Kindred Systems account active. Need to add AI Assistant Pro mailbox/alias — logged as task. |
| Australian voice | ElevenLabs | ✅ Two Australian voices saved: Damian (male) and Lily (female). Both connected to Vapi. See vapi-config.md for IDs and settings. |
| Client change requests | Trello | ⏳ One board per client, auto-created on payment — to be set up in Session 1J |

---

## GitHub Repository

**Repo:** `cat-mora/ai-assistant-pro-site`  
**URL:** https://github.com/cat-mora/ai-assistant-pro-site  
**Branch:** main  
**Language:** Plain HTML/CSS/JS (no framework, no build step)  
**Deployed via:** Vercel (auto-deploys on push to main)  
**Project docs:** stored in `/project-docs/` folder in this repo

---

## Vapi Assistants (Live)

| Assistant | ID | Purpose | Voice |
|---|---|---|---|
| Electrician Demo - Bright Side | `e111e9e6-f69c-463d-a377-d71ae331537d` | Demo call on homepage | Lily (ElevenLabs) |
| Kai - AI Advisor | `71f4bbf5-5ebb-44aa-a383-1a1d2b8272a2` | Prospect discovery on homepage | Damian (ElevenLabs) |

**Vapi Public Key:** `46223d21-06e8-4659-9957-fc297f108320`

**Default voice for all new agents:** Damian — ElevenLabs voice ID `L6n6lykkxcsgjmsqknme`

See `vapi-config.md` for full voice details and Twilio number setup steps.

Still to build:
- Outbound Sales Agent (calls new leads from /tradies form) — Session 1E/1F
- AI Intake Interview Agent (onboards new clients post-payment) — Session 1J

---

## Website — Current State

**Live URL:** https://www.aiassistantpro.com.au  
**Current page:** Homepage only. No other pages live yet.

**Design system:**
- Navy: `#17283f`
- Cream: `#f7f0e5`
- Gold: `#bd985c`
- Font: Inter (sans-serif), Georgia (headings)
- Radius: 30px (large), 22px (medium), 15px (small)

**Pages still to build:**
- `/tradies` — ad landing page, Phase 1 priority (Session 1G)
- `/pricing` — Phase 2
- `/fitness`, `/roofing`, `/mortgage-brokers` — Phase 2/3

---

## Client Onboarding Flow (to be built in Session 1J)

```
Client pays via Stripe
      ↓
Stripe webhook fires
      ↓
1. Welcome email sent (prep checklist + Trello link + intake call booking link)
2. Trello board auto-created (one per client, client invited as member)
      ↓
Client books AI intake call
      ↓
AI intake agent interviews them (10–15 min)
Opening: "I'm an AI agent — same type we're setting up for you"
Covers: greeting, services, FAQs, bookings, hours, transfer rules
Offers Cathryn contact if needed
      ↓
Transcript emailed to Cathryn
      ↓
Cathryn builds their agent in Vapi
      ↓
Handover email or short call
      ↓
Ongoing changes via Trello board
```

---

## Sales Funnel (Target State)

```
Facebook/Google Ad
      ↓
/tradies landing page
      ↓
Form: name, mobile, business type, pain point, suburb, consent
      ↓
Form saves to Supabase → triggers Vapi outbound call within 60 seconds
      ↓
Confirmation screen: "Our AI agent is about to call you"
      ↓
Agent calls, discovers, pitches, handles objections
      ↓
BRANCH A — Yes: Stripe payment link via SMS → success page → intake call booking
BRANCH B — Maybe: Sales call booking link via SMS
BRANCH C — Not ready: follow-up SMS
```

---

## Target Markets

**Phase 1 — Tradies (launch focus)**
Plumbers, electricians, carpenters, HVAC, roofers, landscapers. Pain: on the tools, can't answer phone, miss jobs worth $200–$2,000+.

**Phase 2:** PTs, gym owners, mobile beauty, dog groomers, cleaning companies.

**Phase 3:** Mortgage brokers, real estate, allied health, cosmetic clinics.

---

## Brand Voice

Plain English always. Warm but straight-talking. Australian. Like a smart mate who knows tech explaining it to a business owner.

**Key phrases:**
- "Most callers won't realise they're talking to AI"
- "Not a phone menu. Not a bot. A real conversation."
- "While you're on the tools, your agent is on the phones"
- "You're a tradie, not a receptionist"

**Avoid:** Corporate speak, American spelling, "cutting-edge", "revolutionary", em dashes, staccato sentence triplets.

---

## Session Rules for Cowork

- Always assume full context from this document — never ask what the business does
- Australian English always
- Prices always in AUD
- Explain what code does in plain English before and after writing it
- Build complete, deployable outputs — not templates, not starters
- Speed to launch is the standing priority
- Default to doing, not planning
- Cathryn wants to be hands-off — automate everything possible
- Build for scale from the start — architecture should support 50+ clients
