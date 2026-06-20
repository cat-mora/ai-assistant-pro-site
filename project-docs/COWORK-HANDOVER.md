# AI Assistant Pro — Cowork Handover Document

This document gives Claude Cowork full context on the AI Assistant Pro business. Treat every session as a continuation of an ongoing build. Never ask for context that is already here. Jump straight into the task.

---

## CRITICAL: How Claude Must Work in This Project

### Connector-First Rule (MANDATORY)
Before ever asking Cathryn to do something manually, Claude MUST:
1. **Check for a connected MCP or connector** that can do it (Stripe, GitHub, Supabase, Vercel, Google Calendar, Canva, Twilio, etc.)
2. **Check for the Claude in Chrome extension** — if the task is in a web app with no dedicated MCP, use Chrome to navigate and interact with it directly
3. **Only ask Cathryn to do it manually as a last resort** — and only if there is a genuine technical reason neither option works

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

---

## What the Business Does

AI Assistant Pro sells fully managed AI voice agent services to Australian businesses. The business builds, deploys, and maintains AI phone agents that handle inbound calls, call back new leads, book appointments, and run outbound campaigns — automatically.

**Core pitch:** Most callers will not realise they are talking to AI. It sounds like a real person having a real conversation — not a phone menu, not a bot.

**Key differentiators:**
1. The agent closes sales on the call — no competitor does this
2. Outbound cold calling campaigns — barely offered in Australia
3. Inbound-to-close — form submission triggers callback within 60 seconds
4. Fully managed service — not just software, we maintain and improve it
5. Transparent pricing — competitors all hide pricing behind demos

---

## Current Pricing

| Level | Name | Monthly | Setup | Minutes included |
|---|---|---|---|
---|
| L1 | Answer & Message | A$295/mo | A$495 | 300 mins/mo |
| L2 | Answer & Book | A$395/mo | A$695 | 400 mins/mo |
| L3 | Lead Callback | A$595/mo | A$995 | 600 mins/mo (sole operator) |
| L4 | Rebook & Reactivate | A$995/mo | A$1,495 | 800 mins/mo (sole operator) |

Per-employee add-ons: L3 +A$95/mo, L4 +A$175/mo per extra employee.

---

## Tech Stack

| Function | Tool | Status |
|---|---|---|
| Landing page + form | Vercel + GitHub | ✅ Live |
| Lead database | Supabase | ⏳ AAP project not yet created (Session 1D) |
| AI voice agent platform | Vapi.ai | ✅ Two assistants live |
| Phone + SMS | Twilio | ✅ +61 468 154 584 active. Still to do: caller ID registration + AI Assistant Pro email. |
| Payment | Stripe Payment Links | ✅ All 10 links live → redirect to Connor intake |
| Booking | TidyCal Agency plan | ✅ Fully set up. Slug: `kindredsystems`. See `calendar-booking-urls.md`. |
| Email | Google Workspace | ⚠️ Kindred Systems account active. AI Assistant Pro mailbox/alias still to add. |
| Australian voice | ElevenLabs | ✅ Damian (male) and Lily (female) connected to Vapi. |
| Client change requests | Trello | ⏳ One board per client, auto-created on payment — Session 1J |

---

## Booking Tool — TidyCal

**Plan:** Agency (lifetime, AppSumo ~$79 AUD one-time, purchased 2026-06-20)  
**Slug:** `kindredsystems`

| Page | URL | Purpose |
|---|---|---|
| Connor intake | https://tidycal.com/kindredsystems/aap-connor-intake | Post-payment AI onboarding call |
| Cathryn intro | https://tidycal.com/kindredsystems/aap-cathryn-intro | Human intro call for prospects |

---

## GitHub Repository

**Repo:** `cat-mora/ai-assistant-pro-site`  
**Branch:** main  
**Language:** Plain HTML/CSS/JS  
**Deployed via:** Vercel (auto-deploys on push to main)  
**Vercel project ID:** prj_Qi6cD0H9lvFM5cEdO1xRoEF7ZhgY  
**Project docs:** `/project-docs/` folder in this repo

---

## Vapi Assistants (Live)

| Assistant | ID | Purpose | Voice | Knowledge Base |
|---|---|---|---|---|
| Electrician Demo - Bright Side | `e111e9e6-f69c-463d-a377-d71ae331537d` | Demo call on homepage | Lily (ElevenLabs) | Agent-1-Electrician-Demo-Knowledge-Base (file `102db6e7`) |
| Kai - AI Advisor | `71f4bbf5-5ebb-44aa-a383-1a1d2b8272a2` | Full sales agent on homepage ✅ UPGRADED | Damian (ElevenLabs) | Kai-Sales-Knowledge-Base (file `e228de48`) |

**Vapi Public Key:** `46223d21-06e8-4659-9957-fc297f108320`  
**Default voice:** Damian — ElevenLabs ID `L6n6lykkxcsgjmsqknme`  
**Lily voice ID:** `0qt4ordtvpdlupmfsuwn`

### Kai — What Was Done in Session 1L (2026-06-20)
- System prompt fully rewritten: Kai is now a full sales agent (not a qualifier)
- Opening message updated to: warm, explains AI upfront, invites natural conversation
- Pitch flow: discovery → pivot → pitch → process explanation → close
- Covers all four packages with deep detail
- Handles objections: robotic, cost, customers won't like it, need to think, cheaper options, setup fee question
- Closing branches: A (pay now), B (book Cathryn), C (not ready — follow up or Cathryn)
- 20% setup fee discount available as one-time soft close
- Cathryn routing: sends booking link via SMS (https://tidycal.com/kindredsystems/aap-cathryn-intro)
- Cancellation policy scripted: month-to-month, 5 days notice, no lock-in, setup fee non-refundable
- Go-live: 5 business days after intake call
- On/off toggle and voice library mentioned in pitch
- Setup fee explanation: the Kindred Systems team does the build work, not the AI
- sendSMS tool added to Kai's model (placeholder webhook URL — activate in Session 1D)
- Knowledge base uploaded and attached (Vapi file ID: `e228de48-5e30-4310-8f9b-8ebe9933c296`)
- Knowledge base covers: packages (deep detail), Cathryn/Kindred Systems bio, Digital Employee Pro, system mechanics, common Q&A, sales psychology
- Digital Employee Pro: Kai can mention and sell DEP if the prospect is a better fit
- Two orphan Vapi files deleted (old Electrician Demo KB duplicates)

### Kai — Still To Do
- SMS tool is live in Vapi but won't fire until Session 1D builds the real webhook endpoint
- Supabase lead logging not yet wired (Session 1D)

Still to build:
- Outbound Sales Agent (calls new leads from /tradies form) — Session 1E/1F
- Connor AI Intake Agent (onboards new clients post-payment) — Session 1J

---

## Website — Current State

**Live URL:** https://www.aiassistantpro.com.au  
**Current page:** Homepage only.  
**Current version:** v13 (2026-06-13)

**Design system:**
- Navy: `#17283f` | Cream: `#f7f0e5` | Gold: `#bd985c`
- Font: Inter (sans-serif), Georgia (headings)
- Radius: 30px (large), 22px (medium), 15px (small)

---

## Session Rules for Cowork

- Always assume full context from this document — never ask what the business does
- Read COWORK-HANDOVER.md and MASTER-TODO.md at the start of every session
- Australian English always. Prices always in AUD.
- Explain what code does in plain English before and after writing it
- Build complete, deployable outputs — not templates, not starters
- Speed to launch is the standing priority. Default to doing, not planning.
- Cathryn wants to be hands-off — automate everything possible
- Build for scale from the start — architecture should support 50+ clients
- **CONNECTOR FIRST:** Always check for an MCP connector or Claude in Chrome before asking Cathryn to do anything manually
