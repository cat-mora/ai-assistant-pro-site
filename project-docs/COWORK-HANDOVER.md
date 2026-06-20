# AI Assistant Pro — Cowork Handover Document

This document gives Claude Cowork full context on the AI Assistant Pro business. Treat every session as a continuation of an ongoing build. Never ask for context that is already here. Jump straight into the task.

---

## CRITICAL: How Claude Must Work in This Project

### Connector-First Rule (MANDATORY)
Before ever asking Cathryn to do something manually, Claude MUST:
1. **Check for a connected MCP or connector** that can do it (Stripe, GitHub, Supabase, Vercel, Google Calendar, Canva, Twilio, etc.)
2. **Check for the Claude in Chrome extension** — if the task is in a web app with no dedicated MCP, use Chrome to navigate and interact with it directly
3. **Only ask Cathryn to do it manually as a last resort** — and only if there is a genuine technical reason neither option works (e.g. the tool has no API at all)

Cathryn has connected: GitHub, Google Calendar, Google Drive, Stripe, Supabase, Vercel, Canva, Twilio, and the Claude in Chrome browser extension. Always try these before defaulting to manual instructions.

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

| Level | Name | Monthly | Setup | Minutes included | Per-employee add-on |
|---|---|---|---|---|---|
| Level 1 | Answer & Message | A$295/mo | A$495 | 300 mins/mo | n/a |
| Level 2 | Answer & Book | A$395/mo | A$695 | 400 mins/mo | n/a |
| Level 3 | Lead Callback | A$595/mo | A$995 | 600 mins/mo (sole operator) | +A$95/mo per employee |
| Level 4 | Rebook & Reactivate | A$995/mo | A$1,495 | 800 mins/mo (sole operator) | +A$175/mo per employee |

All prices in AUD. GST registration needed at $75,000 revenue.

---

## Tech Stack

| Function | Tool | Status |
|---|---|---|
| Landing page + form | Vercel + GitHub | ✅ Live |
| Lead database | Supabase | ✅ Account exists — AAP project NOT yet created |
| AI voice agent platform | Vapi.ai | ✅ Account created, demo assistants live |
| Phone + SMS | Twilio | ✅ Number +61 468 154 584 active (purchased 2026-06-12). Regulatory bundle "AI Assistant Pro - Australian Mobile" approved (SID: BU07e54ef4e39483553565ea00588e2503). Number imported into Vapi. Still to do: register with caller ID services (Truecaller etc.). |
| Payment | Stripe Payment Links | ✅ All 10 links live. Success page redirects to https://tidycal.com/kindredsystems/aap-connor-intake ✅ (updated 2026-06-20). See `stripe-payment-links.md`. |
| Booking | TidyCal Agency plan | ✅ Fully set up (2026-06-20). Slug: `kindredsystems`. Two booking pages live. See `calendar-booking-urls.md`. |
| Email | Google Workspace | ⚠️ Kindred Systems account active. Need to add AI Assistant Pro mailbox/alias. |
| Australian voice | ElevenLabs | ✅ Two Australian voices saved: Damian (male) and Lily (female). Both connected to Vapi. See `vapi-config.md` for IDs and settings. |
| Client change requests | Trello | ⏳ One board per client, auto-created on payment — to be set up in Session 1J |

---

## Booking Tool — TidyCal

**Plan:** Agency (lifetime, purchased 2026-06-20 via AppSumo — one-time cost ~$79 AUD)  
**Account slug:** `kindredsystems`  
**Login:** cathrynmora.therapy@gmail.com (never expose this in booking URLs — the slug `kindredsystems` is what clients see)  
**Google Calendar:** Connected. Cathryn's primary Google Calendar synced for conflict checking.

### Booking Pages (both live ✅)

| Page | URL | Purpose |
|---|---|---|
| Connor intake | https://tidycal.com/kindredsystems/aap-connor-intake | Post-payment AI onboarding call |
| Cathryn intro | https://tidycal.com/kindredsystems/aap-cathryn-intro | Human intro call for prospects |

Full detail in `calendar-booking-urls.md`.

---

## GitHub Repository

**Repo:** `cat-mora/ai-assistant-pro-site`  
**URL:** https://github.com/cat-mora/ai-assistant-pro-site  
**Branch:** main  
**Language:** Plain HTML/CSS/JS (no framework, no build step)  
**Deployed via:** Vercel (auto-deploys on push to main)  
**Vercel team:** kindred-systems-team  
**Vercel project ID:** prj_Qi6cD0H9lvFM5cEdO1xRoEF7ZhgY  
**Project docs:** stored in `/project-docs/` folder in this repo

---

## Vapi Assistants (Live)

| Assistant | ID | Purpose | Voice |
|---|---|---|---|
| Electrician Demo - Bright Side | `e111e9e6-f69c-463d-a377-d71ae331537d` | Demo call on homepage | Lily (ElevenLabs) |
| Kai - AI Advisor | `71f4bbf5-5ebb-44aa-a383-1a1d2b8272a2` | Prospect sales agent on homepage — **upgrade in progress (Session 1L)** | Damian (ElevenLabs) |

**Vapi Public Key:** `46223d21-06e8-4659-9957-fc297f108320`

**Default voice for all new agents:** Damian — ElevenLabs voice ID `L6n6lykkxcsgjmsqknme`  
**Lily voice ID:** `0qt4ordtvpdlupmfsuwn`

See `vapi-config.md` for full voice details and Twilio number setup steps.

Still to build:
- Outbound Sales Agent (calls new leads from /tradies form) — Session 1E/1F
- Connor AI Intake Agent (onboards new clients post-payment) — Session 1J

---

## Website — Current State

**Live URL:** https://www.aiassistantpro.com.au  
**Current page:** Homepage only. No other pages live yet.  
**Current version:** v13 (2026-06-13)

**Design system:**
- Navy: `#17283f`
- Cream: `#f7f0e5`
- Gold: `#bd985c`
- Font: Inter (sans-serif), Georgia (headings)
- Radius: 30px (large), 22px (medium), 15px (small)

---

## Session Rules for Cowork

- Always assume full context from this document — never ask what the business does
- Read COWORK-HANDOVER.md and MASTER-TODO.md at the start of every session
- Australian English always
- Prices always in AUD
- Explain what code does in plain English before and after writing it
- Build complete, deployable outputs — not templates, not starters
- Speed to launch is the standing priority
- Default to doing, not planning
- Cathryn wants to be hands-off — automate everything possible
- Build for scale from the start — architecture should support 50+ clients and multiple team members per business unit
- **CONNECTOR FIRST:** Always check for an MCP connector or Claude in Chrome before asking Cathryn to do anything manually. See "CRITICAL" section at top of this document.
