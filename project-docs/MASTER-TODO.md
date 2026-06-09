# AI Assistant Pro — Master Task List
## Work through each item in a new Claude Cowork chat, one at a time.

Each item links to a session briefing file in this folder. Open the briefing file in your chat to give Claude full context before starting work.

---

## PHASE 1 — Business Foundations (do these before marketing)

These need to be done before you can sell with confidence. Work through them in order.

- [x] **1A — Business Readiness Audit** → `session-1A-business-readiness.md` ✅
  Full audit complete. Report saved as `business-readiness-report.md`. ABN confirmed: 97 722 882 034.

- [ ] **1B — Stripe Payment Links** → `session-1B-stripe.md`
  Set up all four pricing tiers as Stripe payment links (monthly + setup fee for each). Configure success page to show Google Calendar onboarding booking link.

- [ ] **1C — Google Calendar Booking Pages** → `session-1C-google-calendar.md`
  Create two booking pages: AI Intake Call (new paid clients, triggers onboarding flow) and Sales Call (prospects who want to speak to Cathryn). Set availability. Copy both URLs — needed for Stripe and Vapi.

- [ ] **1D — Supabase Lead Database** → `session-1D-supabase.md`
  Create a new Supabase project for AI Assistant Pro (separate from other projects). Set up the leads table. Wire it to the /tradies form. Test that submissions save correctly.

- [ ] **1E — Vapi Outbound Sales Agent Script** → `session-1E-vapi-script.md`
  Write the full outbound sales call script for the AI agent. Map all three branches (yes/maybe/no). Format for Vapi.

- [ ] **1F — Vapi Assistant Configuration** → `session-1F-vapi-setup.md`
  Create the outbound assistant in Vapi. Paste the approved script. Configure voice, timezone, recording.

- [ ] **1G — /tradies Landing Page** → `session-1G-tradies-page.md`
  Build the complete /tradies HTML page with embedded lead form. Mobile-first. Deploy to Vercel.

- [ ] **1H — Form → Supabase → Vapi Automation** → `session-1H-automation.md`
  Wire the form submission to Supabase, then trigger the Vapi outbound call within 60 seconds.

- [ ] **1I — Full Funnel Test** → `session-1I-funnel-test.md`
  Submit a test lead. Confirm Supabase saves it, Vapi calls within 60 seconds, all three branches work, Stripe link fires, booking page loads.

- [ ] **1J — Client Onboarding Flow** → `session-1J-onboarding.md`
  Build the complete post-payment onboarding system. Must be ready before first client — this is the experience they get from the moment they pay.

  **What this session builds:**
  - Automated welcome email (triggered by Stripe payment): prep checklist + Trello board link + booking link for AI intake call
  - AI intake interview agent in Vapi: frames itself as "you're experiencing the product right now", gathers all info needed to build their agent, offers to connect with Cathryn if needed
  - Trello board auto-created per client on payment (via webhook/Zapier): one board per client, client invited as member, pre-populated with To Do / In Progress / Done lists and a template change-request card
  - Transcript of intake call emailed to Cathryn for review
  - Cathryn builds their agent, then short handover call or email

  **Prep checklist email covers:**
  - Business name and preferred phone greeting
  - Services offered and rough prices
  - Top 3–5 FAQs callers ask
  - Booking process (what system, if any)
  - What triggers an urgent transfer to the owner
  - Trading hours
  - Any call types the agent should never handle

  **AI intake agent framing:**
  "To get things moving quickly, I'm an AI agent — the same type we'll be setting up for your business. I'm going to ask you a few questions so we can get yours configured. If at any point you'd like to speak with Cathryn directly, just let me know and she'll be in touch."

---

## PHASE 2 — Free Marketing (work through these after Phase 1)

Each strategy gets its own session. Do them in order — earlier ones feed later ones.

- [ ] **2A — Answer Engine Optimisation (AEO)** → `session-2A-aeo.md`
  Write structured FAQ content so ChatGPT, Perplexity, and Claude cite aiassistantpro.com.au when people ask about AI phone agents for tradies.

- [ ] **2B — Programmatic SEO** → `session-2B-seo.md`
  Build location + niche landing pages (e.g. "AI phone agent for Brisbane plumbers"). Target Google search traffic from tradies.

- [ ] **2C — Missed Calls Cost Calculator** → `session-2C-free-tool.md`
  Build a free web tool: "How much are missed calls costing your business?" Captures email on result. Embeds on website.

- [ ] **2D — Social Listening Agent (Claude Cowork version)** → `session-2D-social-listening.md`
  Set up a Claude scheduled task that searches Reddit and X every 20 minutes for people asking about missed calls, AI receptionists, and phone answering — and drafts replies. Run on cheap model. Full allow/block rules included.

- [ ] **2E — AI Content Repurposing Engine** → `session-2E-content-engine.md`
  Set up a repeatable system: one voice memo or idea per week → Claude turns it into LinkedIn posts, tweets, email, and a blog post automatically.

- [ ] **2F — Viral Artifact** → `session-2F-viral-artifact.md`
  Build a shareable output (e.g. a "Your AI Agent Report Card" or "Missed Calls Audit") that users want to screenshot and share. Branded, subtle, drives traffic.

---

## PHASE 3 — Paid Marketing (after Phase 2 is running)

- [ ] **3A — Meta Ads Setup** → `session-3A-meta-ads.md`
  Write two ad versions (problem-focused and demo-focused). Set up Meta Business Manager. Target AU tradies 28–55. Launch at $20–30/day pointing to /tradies.

---

## Notes

- ABN confirmed: 97 722 882 034. Use this to complete the Twilio regulatory bundle and activate +61 480 844 608. Do this alongside or after 1B.
- ASIC token for .com.au domain: domain is already live so token has been used. Nothing more needed.
- Twilio/Australian number: once active, import into Vapi and update the /tradies confirmation screen (remove "international number" note).
- ElevenLabs Australian voice: add when first client is close to signing.
- Homepage (aiassistantpro.com.au) and /pricing page: Phase 2 items, build after first client.
- Trello for client change requests: one board per client, auto-created on payment. Same system used across Cathryn's businesses.
- Digital Employee Pro (second business): separate project, separate chat sessions — not covered here.
