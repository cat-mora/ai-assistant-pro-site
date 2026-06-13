# AI Assistant Pro — Master Task List
## Work through each item in a new Claude Cowork chat, one at a time.

Each item links to a session briefing file in this folder. Open the briefing file in your chat to give Claude full context before starting work.

---

## PHASE 1 — Business Foundations (do these before marketing)

These need to be done before you can sell with confidence. Work through them in order.

- [x] **1A — Business Readiness Audit** → `session-1A-business-readiness.md` ✅
  Full audit complete. Report saved as `business-readiness-report.md`. ABN confirmed: 97 722 882 034.

- [x] **1K — Twilio + ElevenLabs Setup** → `session-1K-twilio-elevenlabs.md` ✅
  Regulatory bundle "AI Assistant Pro - Australian Mobile" approved (SID: BU07e54ef4e39483553565ea00588e2503). Number +61 468 154 584 purchased and active. Damian (male AU) and Lily (female AU) voices confirmed in ElevenLabs. All connected to Vapi. Number imported into Vapi as "AI Assistant Pro - Australia". See `vapi-config.md` for all IDs. Still to do: register number with caller ID services (Truecaller etc.) + set up AI Assistant Pro email under Kindred Systems Google Workspace.

- [ ] **1L — Kai Sales Agent Upgrade** → `session-1L-kai-update.md`
  Upgrade Kai from a discovery/qualifier agent to a full sales agent that can close deals. Kai should pitch, handle objections, and send a Stripe payment link via SMS at any point. "Book a call with Cathryn" is a last resort only — offered if the prospect explicitly asks for a human, or after two nos. If they say no, Kai asks: follow-up later, or speak to Cathryn?

- [ ] **1M — Documentation Library** → `session-1M-docs-library.md`
  Set up a Google Drive documentation library. Folder structure covering: business overview, systems and processes, agent scripts, client onboarding, change management, pricing, and handover guide. Written as if handing to a buyer who has never met Cathryn. Start populating with what already exists. Build to sell from day one.

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
  Build the complete post-payment onboarding system. Stripe webhook triggers: welcome email (prep checklist + Trello link + intake call booking), Trello board auto-created per client. AI intake interview agent gathers all info needed to build their Vapi agent. Transcript emailed to Cathryn. Must be ready before first client.

---

## PHASE 2 — Free Marketing (work through these after Phase 1)

Each strategy gets its own session. Do them in order — earlier ones feed later ones.

- [ ] **2A — Answer Engine Optimisation (AEO)** → `session-2A-aeo.md`
  Write structured FAQ content so ChatGPT, Perplexity, and Claude cite aiassistantpro.com.au when people ask about AI phone agents for tradies.

- [ ] **2B — Programmatic SEO** → `session-2B-seo.md`
  Build location + niche landing pages (e.g. "AI phone agent for Brisbane plumbers"). Target Google search traffic from tradies.

- [ ] **2C — Missed Calls Cost Calculator** → `session-2C-free-tool.md`
  Build a free web tool: "How much are missed calls costing your business?" Captures email on result. Embeds on website.

- [ ] **2D — Social Listening Agent** → `session-2D-social-listening.md`
  Set up a Claude scheduled task that searches Reddit and X every 20 minutes for people asking about missed calls, AI receptionists, and phone answering — and drafts replies.

- [ ] **2E — AI Content Repurposing Engine** → `session-2E-content-engine.md`
  One voice memo or idea per week → Claude turns it into LinkedIn posts, tweets, email, and a blog post automatically.

- [ ] **2F — Viral Artifact** → `session-2F-viral-artifact.md`
  Build a shareable branded output (e.g. "Missed Calls Audit") that users want to screenshot and share.

---

## PHASE 3 — Paid Marketing (after Phase 2 is running)

- [ ] **3A — Meta Ads Setup** → `session-3A-meta-ads.md`
  Write two ad versions. Set up Meta Business Manager. Target AU tradies 28–55. Launch at $20–30/day pointing to /tradies.

---

## Notes

- ABN confirmed: 97 722 882 034.
- ASIC token for .com.au domain: domain is already live, token has been used. Nothing more needed.
- Twilio number +61 468 154 584 active (purchased 2026-06-12). Regulatory bundle approved. Number imported into Vapi. Still to do: register with Truecaller/caller ID services + set up AI Assistant Pro email.
- Kai upgrade (Session 1L): Kai is already live on the homepage. Upgrading him to a full sales agent is a priority — he's talking to the hottest prospects right now.
- Documentation library (Session 1M): Google Drive, start now, build to sell. 5-year exit horizon.
- Sales flow agreed and saved as `sales-flow.md` — reference this in all build sessions.
- Trello for client change requests: one board per client, auto-created on payment.
- Homepage /pricing page: Phase 2, after first client.
- Digital Employee Pro (second business): separate project, separate chat sessions — not covered here.
