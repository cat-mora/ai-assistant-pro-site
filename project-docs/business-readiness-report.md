# AI Assistant Pro — Business Readiness Report
**Generated:** 9 June 2026  
**Purpose:** Full audit of every account, tool, and setup item. Identifies what needs to happen before the first paying client.

---

## Summary

The website is live and looks professional. Two Vapi demo agents are working. The core infrastructure accounts exist. But the sales funnel — the thing that turns an ad click into a paying client — is not yet connected. Nothing between "form submission" and "money in Stripe" is wired up.

**Estimated sessions to launch-ready:** 9 focused sessions (1B through 1J).

---

## Status by Category

### 🌐 Website & Hosting

| Item | Status | Notes |
|---|---|---|
| Domain aiassistantpro.com.au | ✅ DONE | Live, resolves correctly to www |
| Vercel project | ✅ DONE | Project `ai-assistant-pro-site` under Kindred Systems team |
| GitHub repo | ✅ DONE | `cat-mora/ai-assistant-pro-site`, auto-deploys to Vercel |
| Homepage (index.html) | ✅ DONE | Live, 4-tier pricing displayed |
| /tradies landing page | ❌ NOT STARTED | Priority 1 for ad launch — Session 1G |
| /pricing standalone page | ⏳ PHASE 2 | Not needed before launch |

### 🤖 Vapi

| Item | Status | Notes |
|---|---|---|
| Vapi account | ✅ DONE | Active |
| Electrician Receptionist Demo | ✅ DONE | Live on homepage |
| Kai Sales Advisor | ✅ DONE | Live on homepage |
| Outbound Sales Agent | ❌ NOT STARTED | Sessions 1E + 1F |
| AI Intake Interview Agent | ❌ NOT STARTED | Session 1J |
| Twilio number in Vapi | 🔴 BLOCKED | ABN now available — complete regulatory bundle |

### 📞 Twilio

| Item | Status | Notes |
|---|---|---|
| Account | ✅ DONE | SID and Auth Token saved |
| Australian number +61 480 844 608 | ⚠️ UNBLOCK NOW | ABN 97 722 882 034 is confirmed — complete the regulatory bundle |
| Interim workaround | ✅ DONE | Using Vapi's number for launch |

### 💳 Stripe

| Item | Status | Notes |
|---|---|---|
| Account | ✅ DONE | Exists |
| Payment links | ❌ NOT STARTED | Session 1B |
| Setup fee products | ❌ NOT STARTED | Session 1B |
| Monthly products | ❌ NOT STARTED | Session 1B |
| Success page → booking link | ❌ NOT STARTED | Needs Calendar first (1C) |
| Webhook → welcome email + Trello | ❌ NOT STARTED | Session 1J |

### 📅 Google Calendar

| Item | Status | Notes |
|---|---|---|
| Google Workspace | ⚠️ NOT CONFIRMED | Needed for email + booking pages |
| AI Intake Call booking page | ❌ NOT STARTED | Session 1C |
| Sales Call booking page | ❌ NOT STARTED | Session 1C |

### 🗄️ Supabase

| Item | Status | Notes |
|---|---|---|
| Account | ✅ DONE | Exists |
| AAP project | ❌ NOT STARTED | Only "Cultivating the Fruit" project exists — create new one in Session 1D |
| Leads table | ❌ NOT STARTED | Session 1D |
| Form → Supabase → Vapi trigger | ❌ NOT STARTED | Session 1H |

### 📧 Email

| Item | Status | Notes |
|---|---|---|
| Google Workspace | ⚠️ NOT CONFIRMED | Session 1C will confirm this |
| cathryn@aiassistantpro.com.au | ❌ NOT STARTED | Needed for client comms and transcripts |

### 🏢 Legal & Admin

| Item | Status | Notes |
|---|---|---|
| Business name (ASIC) | ✅ DONE | Registered |
| ABN | ✅ DONE | 97 722 882 034 |
| ASIC token (.com.au) | ✅ DONE | Domain already live, token used |
| GST registration | ⏳ NOT YET | Required at $75,000 revenue |

### 🗂️ Client Management

| Item | Status | Notes |
|---|---|---|
| Trello for change requests | ❌ NOT STARTED | One board per client, auto-created on payment — Session 1J |

---

## What's Blocking the First Sale

1. No Stripe payment links — agent can't close a sale
2. No Google Calendar booking pages — agent can't book calls
3. No Supabase AAP project — leads have nowhere to go
4. No outbound sales agent script — the funnel has no brain
5. No /tradies landing page — ads have nowhere to point
6. No form → automation — nothing connects without this
7. No client onboarding system — first client would get a manual experience

---

## Recommended Session Order

| Session | What It Does |
|---|---|
| 1B | Stripe payment links |
| 1C | Google Calendar booking pages |
| 1D | Supabase AAP project + leads table |
| 1E | Outbound sales agent script |
| 1F | Vapi outbound assistant config |
| 1G | /tradies landing page |
| 1H | Form → Supabase → Vapi automation |
| 1I | Full funnel test |
| 1J | Client onboarding flow (email, intake agent, Trello) |

*Next session: open session-1B-stripe.md in a new Cowork chat.*
