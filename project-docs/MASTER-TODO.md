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

- [ ] **1N — Direct Checkout + Compatibility Check** → `session-1N-direct-checkout.md`
  Add "Start this package" CTAs to each pricing card on the homepage.
  - L1 and L2: go straight to Stripe checkout (no Kai required)
  - L3 and L4: short compatibility check first (5 questions: lead source, calendar setup, team size, customer data quality, booking system) — if compatible, straight to Stripe; if not, route to Cathryn call
  Kai remains available as an option throughout, not a mandatory step.
  Also add direct checkout buttons to relevant SEO/trade landing pages when built.

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
  NOTE: Form must include separate consent fields — one for the 60-second AI callback, one for ongoing SMS/email marketing. ACMA compliance required.

- [ ] **1H — Form → Supabase → Vapi Automation** → `session-1H-automation.md`
  Wire the form submission to Supabase, then trigger the Vapi outbound call within 60 seconds.

- [ ] **1I — Full Funnel Test** → `session-1I-funnel-test.md`
  Submit a test lead. Confirm Supabase saves it, Vapi calls within 60 seconds, all three branches work, Stripe link fires, booking page loads.

- [ ] **1J — Client Onboarding Flow** → `session-1J-onboarding.md`
  Build the complete post-payment onboarding system. Includes:
  - Stripe webhook triggers: welcome email (prep checklist + Connor intake booking link), Trello board auto-created per client
  - Connor AI intake agent interviews the client (covers: business greeting, services, FAQs, hours, booking process, transfer rules, escalation rules, pricing/quote boundaries, jobs they don't take, emergency wording)
  - Transcript + structured approval summary emailed to Cathryn
  - Cathryn reviews and sends client an approval summary to sign off before go-live
  - Internal test calls before forwarding goes live
  - Client gets test number and 3 scenarios to try (normal enquiry, urgent call, booking/escalation)
  - Client approves → phone forwarding goes live
  - Failure plan documented per client (what happens if agent unavailable, calendar drops, urgent call can't transfer)
  - Handover email sent with links for client to connect their calendar, CRM etc.
  - Client change requests: email changes@aiassistantpro.com.au → auto-creates Trello card on their board → Cathryn actions it. Client never sees Trello.
  - Connor is the default intake path. Human intake only if client explicitly refuses the agent during the call.
  DEPENDENCIES: Requires `calendar-booking-urls.md` (done), Session 1M onboarding process doc (do 1M first or in parallel).

- [ ] **1O — Linktree Setup** → `session-1O-linktree.md`
  Set up a Linktree (or equivalent) for AI Assistant Pro social profiles.
  - Links to include: Homepage, Demo call, Talk to Kai, each pricing level, booking page (Cathryn intro call)
  - Brand it with AAP colours (navy #17283f, gold #bd985c, cream #f7f0e5)
  - Used across all social media bios
  - Also set up social media profiles on: LinkedIn, Facebook, Instagram, YouTube, X, TikTok (placeholder at minimum)
  - Note: X and TikTok are lower priority for tradie content but relevant to the broader Kindred Systems brand and $100M exit strategy — set up profiles now even if inactive

---

## PHASE 2 — Free Marketing (work through these after Phase 1)

Build everything now. Don't wait for clients. Every channel compounds over time.

- [ ] **2A — Answer Engine Optimisation (AEO)** → `session-2A-aeo.md`
  Write structured FAQ and authority content so ChatGPT, Perplexity, and Claude cite aiassistantpro.com.au when people ask about AI phone agents for Australian tradies or service businesses. Treat AEO as an outcome of excellent content — clear pricing, product facts, original examples, named workflows, structured data, FAQs, strong entity information. Covers all four pain points (interruption, slow follow-up, empty diary, dormant customers).

- [ ] **2B — SEO Pages** → `session-2B-seo.md`
  Build high-quality trade + service level pages. Fewer, genuinely useful pages over thin location spam.
  Priority pages:
  - AI receptionist for electricians / plumbers / pest control / HVAC
  - AI lead callback for tradies running Google Ads
  - AI rebooking calls for pest control and maintenance businesses
  - AI receptionist vs voicemail / vs answering service / vs hiring a receptionist
  - ServiceM8 AI receptionist / Tradify AI receptionist
  - What happens when a tradie misses a call?
  - How fast should a business call back a web lead?
  Each page: trade-specific examples, demo call embed, FAQ, real implementation detail. No thin AI-generated filler.

- [ ] **2C — Revenue Leak Calculator** → `session-2C-free-tool.md`
  Expand from "missed calls calculator" to a full "revenue leak calculator" covering all four pain points:
  - Missed calls (L1/L2)
  - Slow lead callbacks (L3)
  - Empty diary slots (L2/L3)
  - Dormant customers not being rebooked (L4)
  Show result immediately — no email gate. Offer detailed breakdown / saved report in exchange for email.
  Result feeds into viral artifact (2F) and email nurture sequence (2G).

- [ ] **2D — Social Listening Agent** → `session-2D-social-listening.md`
  Cron job every 20 minutes, 24/7. Monitors Reddit, X, and Facebook Groups for trigger phrases across all four pain points. Drafts reply suggestions for Cathryn's approval — never posts automatically.
  Platforms: Reddit (r/aussmallbusiness, r/tradies, r/smallbusiness), X, Facebook Groups (Tradies in Business Australia, Electricians Australia, HVAC & Refrigeration Trade Talk, and others).
  Keyword sets — all four pain points:
  - Interruption/missed calls: "can't answer my phone", "miss calls on the tools", "phone rings while I'm working", "missed call lost job"
  - Slow lead follow-up: "paid for ads but leads go cold", "form submissions not converting", "calling back too late", "leads not answering"
  - Booking/diary: "hard to fill the calendar", "clients don't show", "empty slots", "diary not full"
  - Rebooking/reactivation: "past customers not coming back", "how do I get repeat business", "customer database sitting there", "overdue for service"
  - AI generally: "AI receptionist", "AI phone agent", "virtual receptionist Australia", "answering service for tradies", "phone answering service small business"
  Use as research tool too — weekly digest of recurring pain point language informs content and copy.

- [ ] **2E — AI Content Repurposing Engine** → `session-2E-content-engine.md`
  Cathryn shoots 4 short videos per month (one per service level/pain point), ideally in a single batch session. Claude turns each into: LinkedIn post, Facebook post, Instagram caption, tweet thread, email to list, blog post, YouTube description. All scheduled via Publer automatically.
  Video content angles:
  - L1: "What happens when a tradie can't answer the phone" (story/scenario)
  - L2: "How many bookings are you actually losing" (insight/calculator hook)
  - L3: "Why calling back leads in 60 seconds changes everything" (stat-led)
  - L4: "The money sitting in your customer list that nobody's calling" (proof-led)
  Output channels: LinkedIn, Facebook, Instagram, X, YouTube (description + shorts clip), email list.
  X stays as an output channel — relevant to broader Kindred Systems brand and business exit strategy even if tradie engagement is lower.

- [ ] **2F — Viral Artifact** → `session-2F-viral-artifact.md`
  Shareable personalised output from the revenue leak calculator. "You're losing $X/year from [specific pain point]." Branded, screenshot-worthy, tradies want to share it or save it. Embeds on website.

- [ ] **2G — Email Nurture Sequence** → `session-2G-email-nurture.md` *(new)*
  Calculator captures emails. Sequence follows up based on which pain point they identified with.
  - Branch 1 (missed calls/interruption → L1/L2 pitch)
  - Branch 2 (slow lead follow-up → L3 pitch)
  - Branch 3 (empty diary → L2/L3 pitch)
  - Branch 4 (dormant customers → L4 pitch)
  Minimum 5 emails per branch. Leads back to homepage or relevant trade landing page. Plain English, Australian voice, no corporate fluff.

- [ ] **2H — YouTube** → `session-2H-youtube.md` *(new)*
  Set up YouTube channel. Produce three anchor videos:
  1. "Watch an AI receptionist handle a real electrician call" (L1/L2 proof)
  2. "Watch our AI call back a Facebook lead in 60 seconds" (L3 proof)
  3. "Watch our AI reactivate an overdue pest control customer" (L4 proof)
  These become website proof assets, social clips, sales follow-up content and partner assets.
  Ongoing: monthly video from content engine (2E) uploaded to YouTube.

- [ ] **2I — Partner/Referral Program** → `session-2I-partners.md` *(new)*
  Build a simple partner program targeting people who already work with tradies:
  - ServiceM8, Tradify, Jobber consultants and resellers
  - Google Ads agencies serving trades
  - Tradie web designers and lead-gen agencies
  - Business coaches for tradies
  - Bookkeepers and accountants (secondary)
  Deliverables: partner landing page, unique referral links, commission structure, one-page "who this is for" guide, demo phone number, short email pitch template.

- [ ] **2J — Podcast + Webinar Outreach** → `session-2J-podcast.md` *(new)*
  Identify 10 AU tradie and small business podcasts. Draft pitch focused on a useful topic with a live demo, not "interview me about AI."
  Pitch angles: "Stop losing paid leads after 5pm", "How a pest control business filled its rebooking list automatically", "What happens when a tradie misses a call."
  Also target: trade association webinars, partner newsletters, guest training sessions for ServiceM8/Tradify consultants.

---

## PHASE 3 — Paid Marketing (after Phase 2 is running)

- [ ] **3A — Meta Ads Setup** → `session-3A-meta-ads.md`
  Write two ad versions. Set up Meta Business Manager. Target AU tradies 28–55. Launch at $20–30/day pointing to /tradies.
  NOTE: Also consider Google Search ads (catches active searchers — "AI receptionist for tradies", "missed call solution") alongside or before Meta.

---

## Notes

- ABN confirmed: 97 722 882 034.
- Twilio number +61 468 154 584 active (purchased 2026-06-12). Regulatory bundle approved. Number imported into Vapi. Still to do: register with Truecaller/caller ID services + set up AI Assistant Pro email.
- TidyCal: Agency plan, slug `kindredsystems`. Booking pages fully set up. See `calendar-booking-urls.md`.
- Stripe success page: all 10 payment links now redirect to https://tidycal.com/kindredsystems/aap-connor-intake ✅ (updated 2026-06-20).
- Kai upgrade (Session 1L): NOW UNBLOCKED. Cathryn intro URL: https://tidycal.com/kindredsystems/aap-cathryn-intro. Stripe links in `stripe-payment-links.md`.
- Direct checkout (Session 1N): Add to homepage pricing cards. L1/L2 straight to Stripe. L3/L4 via compatibility check. Kai stays optional.
- Documentation library (Session 1M): Google Drive, start now, build to sell. $100M exit target, 5-year horizon. Also use 1M to document the client onboarding/handover process.
- Client change requests: email changes@aiassistantpro.com.au → auto-creates Trello card on client's board → Cathryn actions it. Client never sees Trello directly.
- Connor intake agent: mandatory default. Human intake only if client explicitly refuses the AI agent during the call.
- Onboarding must include: test calls before go-live, client approval of agent summary, documented failure plan per client, separate consent on /tradies form (callback consent vs marketing consent).
- Sales flow agreed and saved as `sales-flow.md` — reference this in all build sessions.
- Trello for client change requests: one board per client, auto-created on payment. Change requests come in via email → auto-Trello card.
- Homepage /pricing page: Phase 2, after first client.
- Digital Employee Pro (second business): separate project, separate chat sessions — not covered here.
- Pricing model spreadsheet: saved locally as `aap_pricing_model.xlsx` in the AI Business to sell folder.
- Per-employee add-ons confirmed: L3 +A$95/mo per extra employee, L4 +A$175/mo per extra employee.
- vercel.json: fixed 2026-06-13.
- Stripe: AI Assistant Pro is a separate Stripe account. Payment links in `stripe-payment-links.md`.
- X and TikTok: lower priority for tradie content but set up profiles now. Relevant to broader Kindred Systems brand and $100M exit strategy.
- Build everything now. Don't wait for clients. Every channel compounds.
