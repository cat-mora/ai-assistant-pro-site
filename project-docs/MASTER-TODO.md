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

- [x] **Pricing model & website update** ✅ (completed 2026-06-13)
  Full cost modelling done for all four levels including Vapi/Twilio/ElevenLabs/Supabase usage costs. Pricing confirmed profitable at all levels. Added minute inclusions per level, per-employee add-ons for L3/L4, and running costs explainer to pricing section on homepage. Pricing model saved locally as `aap_pricing_model.xlsx`. Website fixes: minutes text moved below price, bold removed from minutes, logo 404 fixed with cache-buster, vercel.json redirect bug fixed.

- [x] **1B — Stripe Payment Links** → `session-1B-stripe.md` ✅ (completed 2026-06-14, redirect updated 2026-06-20)
  10 payment links created in live mode (AUD) in the AI Assistant Pro Stripe account. 4 monthly subscriptions, 4 one-time setup fees, 2 per-employee add-ons (L3 +$95/mo, L4 +$175/mo). All URLs saved to `stripe-payment-links.md`. Success page on all 10 links redirects to https://tidycal.com/kindredsystems/aap-connor-intake ✅. Stripe account set up as a separate account from Cultivate the Fruits.

- [x] **1C — Booking Pages** → `session-1C-google-calendar.md` ✅ (completed 2026-06-20)
  Booking tool: TidyCal Agency plan (lifetime, AppSumo ~$79 AUD one-time). Account slug: `kindredsystems`. Two booking pages created and fully configured:
  - **Connor intake:** https://tidycal.com/kindredsystems/aap-connor-intake — "AI Assistant Pro — Intake Call with Connor (AI Agent)", 20 min, TidyCal only, conflicts OFF, 14 days, 1hr notice
  - **Cathryn intro:** https://tidycal.com/kindredsystems/aap-cathryn-intro — "Chat with Cathryn — AI Assistant Pro", 20 min, Google Calendar synced, conflicts ON, 14 days, 4hr notice
  Cathryn's availability set: M/T/W/F 5–7pm, Thu 9am–5pm, Sat 9am–12pm, Sun off.
  Google Calendar connected to TidyCal. 3 default booking types deleted.
  Descriptions written for both pages. See `calendar-booking-urls.md` for full detail.
  Stripe success redirect updated to Connor intake URL ✅

- [ ] **1L — Kai Sales Agent Upgrade** → `session-1L-kai-update.md`
  Upgrade Kai from a discovery/qualifier agent to a full sales agent that can close deals. Kai should pitch, handle objections, and send a Stripe payment link via SMS at any point. "Book a call with Cathryn" is a last resort only — offered if the prospect explicitly asks for a human, or after two nos. If they say no, Kai asks: follow-up later, or speak to Cathryn?
  **NOW UNBLOCKED.** Cathryn intro call URL: https://tidycal.com/kindredsystems/aap-cathryn-intro. Stripe links in `stripe-payment-links.md`.

- [ ] **1M — Documentation Library** → `session-1M-docs-library.md`
  Set up a Google Drive documentation library. Folder structure covering: business overview, systems and processes, agent scripts, client onboarding, change management, pricing, and handover guide. Written as if handing to a buyer who has never met Cathryn. Build to sell from day one.
  NOTE: Session 1M should also document the full client onboarding/handover process including what goes in the post-setup email (links to connect calendar, CRM, Google Drive etc.). This detail needs to be mapped before Session 1J is built.

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
  Build the complete post-payment onboarding system. Stripe webhook triggers: welcome email (prep checklist + Trello link + Connor intake booking link), Trello board auto-created per client. Connor AI intake agent interviews the client (covers: business greeting, services, FAQs, hours, booking process, transfer rules). Transcript emailed to Cathryn. Cathryn builds their Vapi agent. Handover email sent with links for client to connect their calendar, CRM, Google Drive etc.
  DEPENDENCIES: Requires `calendar-booking-urls.md` (done), Session 1M onboarding process doc (do 1M first or in parallel).

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
- TidyCal: Agency plan, slug `kindredsystems`. Booking pages fully set up. See `calendar-booking-urls.md`.
- Stripe success page: all 10 payment links now redirect to https://tidycal.com/kindredsystems/aap-connor-intake ✅ (updated 2026-06-20).
- Kai upgrade (Session 1L): NOW UNBLOCKED. Cathryn intro URL: https://tidycal.com/kindredsystems/aap-cathryn-intro. Stripe links in `stripe-payment-links.md`.
- Documentation library (Session 1M): Google Drive, start now, build to sell. $100M exit target, 5-year horizon. Also use 1M to document the client onboarding/handover process.
- Sales flow agreed and saved as `sales-flow.md` — reference this in all build sessions.
- Trello for client change requests: one board per client, auto-created on payment.
- Homepage /pricing page: Phase 2, after first client.
- Digital Employee Pro (second business): separate project, separate chat sessions — not covered here.
- Pricing model spreadsheet: saved locally as `aap_pricing_model.xlsx` in the AI Business to sell folder.
- Per-employee add-ons confirmed: L3 +A$95/mo per extra employee, L4 +A$175/mo per extra employee.
- vercel.json: fixed 2026-06-13.
- Stripe: AI Assistant Pro is a separate Stripe account. Payment links in `stripe-payment-links.md`.
