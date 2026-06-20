# AI Assistant Pro — Master Task List
## Work through each item in a new Claude Cowork chat, one at a time.

Each item links to a session briefing file in this folder. Open the briefing file in your chat to give Claude full context before starting work.

---

## PHASE 1 — Business Foundations (do these before marketing)

These need to be done before you can sell with confidence. Work through them in order.

- [x] **1A — Business Readiness Audit** → `session-1A-business-readiness.md` ✅
  Full audit complete. Report saved as `business-readiness-report.md`. ABN confirmed: 97 722 882 034.

- [x] **1K — Twilio + ElevenLabs Setup** → `session-1K-twilio-elevenlabs.md` ✅
  Regulatory bundle approved. Number +61 468 154 584 active. Damian (male AU) and Lily (female AU) voices in ElevenLabs, connected to Vapi. See `vapi-config.md`.

- [x] **Pricing model & website update** ✅ (completed 2026-06-13)
  Full cost modelling done. Pricing confirmed profitable. Website updated with minutes, per-employee add-ons, running costs explainer.

- [x] **1B — Stripe Payment Links** → `session-1B-stripe.md` ✅ (completed 2026-06-14, redirect updated 2026-06-20)
  10 payment links live (AUD). All redirect to https://tidycal.com/kindredsystems/aap-connor-intake. See `stripe-payment-links.md`.

- [x] **1C — Booking Pages** → `session-1C-google-calendar.md` ✅ (completed 2026-06-20)
  TidyCal Agency plan. Slug: `kindredsystems`. Two pages live:
  - Connor intake: https://tidycal.com/kindredsystems/aap-connor-intake
  - Cathryn intro: https://tidycal.com/kindredsystems/aap-cathryn-intro
  See `calendar-booking-urls.md`.

- [x] **1L — Kai Sales Agent Upgrade** → `session-1L-kai-update.md` ✅ (completed 2026-06-20)
  Kai fully upgraded to sales agent. System prompt rewritten. Knowledge base built and attached. See full notes below.

- [ ] **1N — Direct Checkout + Compatibility Check** → `session-1N-direct-checkout.md`
  Add "Start this package" CTAs to each pricing card on the homepage.
  - L1 and L2: go straight to Stripe checkout
  - L3 and L4: short compatibility check first (5 questions) — if compatible, straight to Stripe; if not, route to Cathryn call
  Kai remains available as an option throughout, not a mandatory step.

- [ ] **1M — Documentation Library** → `session-1M-docs-library.md`
  Set up a Google Drive documentation library. Written as if handing to a buyer. Build to sell from day one.
  NOTE: Also document the full client onboarding/handover process before Session 1J.

- [ ] **1D — Supabase Lead Database** → `session-1D-supabase.md`
  Create AAP Supabase project. Set up leads table. Wire to /tradies form. Test submissions.
  NOTE: Also needed to activate Kai's SMS tool — the sendSMS webhook endpoint needs to be built here.

- [ ] **1E — Vapi Outbound Sales Agent Script** → `session-1E-vapi-script.md`
  Write the full outbound sales call script. Map all three branches. Format for Vapi.

- [ ] **1F — Vapi Assistant Configuration** → `session-1F-vapi-setup.md`
  Create the outbound assistant in Vapi. Paste approved script. Configure voice, timezone, recording.

- [ ] **1G — /tradies Landing Page** → `session-1G-tradies-page.md`
  Build the complete /tradies HTML page with embedded lead form. Mobile-first. Deploy to Vercel.
  NOTE: Separate consent fields required — one for 60-second AI callback, one for SMS/email marketing. ACMA compliance.

- [ ] **1H — Form → Supabase → Vapi Automation** → `session-1H-automation.md`
  Wire form submission to Supabase, then trigger Vapi outbound call within 60 seconds.

- [ ] **1I — Full Funnel Test** → `session-1I-funnel-test.md`
  Submit a test lead. Confirm Supabase saves it, Vapi calls within 60 seconds, all three branches work, Stripe link fires, booking page loads.

- [ ] **1J — Client Onboarding Flow** → `session-1J-onboarding.md`
  Build the complete post-payment onboarding system. Includes Stripe webhook, welcome email, Trello board auto-creation, Connor AI intake agent, approval process, test calls, go-live, failure plan, change request system.
  DEPENDENCIES: `calendar-booking-urls.md` (done ✅), Session 1M (do first or in parallel).

- [ ] **1O — Linktree Setup** → `session-1O-linktree.md`
  Set up Linktree for AAP. Brand with navy/gold/cream. Set up social profiles on LinkedIn, Facebook, Instagram, YouTube, X, TikTok.

---

## PHASE 2 — Free Marketing (work through these after Phase 1)

- [ ] **2A — Answer Engine Optimisation (AEO)** → `session-2A-aeo.md`
- [ ] **2B — SEO Pages** → `session-2B-seo.md`
- [ ] **2C — Revenue Leak Calculator** → `session-2C-free-tool.md`
- [ ] **2D — Social Listening Agent** → `session-2D-social-listening.md`
- [ ] **2E — AI Content Repurposing Engine** → `session-2E-content-engine.md`
- [ ] **2F — Viral Artifact** → `session-2F-viral-artifact.md`
- [ ] **2G — Email Nurture Sequence** → `session-2G-email-nurture.md`
- [ ] **2H — YouTube** → `session-2H-youtube.md`
- [ ] **2I — Partner/Referral Program** → `session-2I-partners.md`
- [ ] **2J — Podcast + Webinar Outreach** → `session-2J-podcast.md`

---

## PHASE 3 — Paid Marketing

- [ ] **3A — Meta Ads Setup** → `session-3A-meta-ads.md`

---

## Notes

- ABN: 97 722 882 034
- Twilio: +61 468 154 584 active. Still to do: register with Truecaller/caller ID services + set up AI Assistant Pro email under Kindred Systems Google Workspace.
- TidyCal: Agency plan, slug `kindredsystems`. Both booking pages live. See `calendar-booking-urls.md`.
- Stripe: All 10 links redirect to Connor intake URL ✅
- Kai (Session 1L ✅): Full sales agent. Vapi assistant ID `71f4bbf5-5ebb-44aa-a383-1a1d2b8272a2`. System prompt rewritten, knowledge base attached (file ID `e228de48-5e30-4310-8f9b-8ebe9933c296`). SMS tool configured (placeholder webhook — activate in Session 1D). See `session-1L-kai-update.md` and `vapi-config.md`.
- Kai SMS tool: sendSMS function is in Kai's model tools. Server URL is placeholder. Needs real webhook built in Session 1D (Supabase Edge Function or Make.com scenario).
- Kai knowledge base covers: packages (deep detail), Cathryn/Kindred Systems background, Digital Employee Pro, how the system works, common Q&A, sales psychology.
- Digital Employee Pro: Kai CAN mention and sell DEP if the prospect needs more than a phone agent.
- Vapi files: 2 active files. Electrician Demo KB (`102db6e7`), Kai KB (`e228de48`). Two old duplicate files deleted 2026-06-20.
- Direct checkout (Session 1N): L1/L2 straight to Stripe. L3/L4 via compatibility check. Kai stays optional.
- Documentation library (Session 1M): Google Drive, build to sell. $100M exit target. Also document client onboarding/handover process.
- Cancellation policy: month-to-month, 5 days notice before billing date, no lock-in, setup fee non-refundable.
- Go-live timeline: 5 business days after intake call.
- Build everything now. Don't wait for clients. Every channel compounds.
