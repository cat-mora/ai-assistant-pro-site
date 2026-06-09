# AI Assistant Pro — Agreed Sales Flow
**Last updated:** 9 June 2026  
**Status:** Approved — use this as the reference for all build sessions

---

## Design Principles

- The business runs itself. No step should require Cathryn unless the prospect explicitly asks for her.
- Close as fast as possible. Hot prospects should be able to pay in minutes.
- Never make someone wait. Payment is available at any point in the conversation.
- Build to sell. Every system is documented, every process is automated, every decision is made by the agent — not the founder.

---

## The Full Sales Flow

### Entry Points

**A — Facebook/Instagram ad**
→ Lands on /tradies (tradie-specific landing page)
→ Reads page, fills in lead form
→ Triggers AI outbound call within 60 seconds

**B — Google search / organic / word of mouth**
→ Lands on homepage (aiassistantpro.com.au)
→ Tries the Electrician Receptionist demo call (browser-based)
→ Talks to Kai (browser-based sales agent)
→ Kai closes them or routes them

**C — Direct / referral**
→ May land anywhere. Same flows apply.

---

### Flow A — /tradies Page

1. Person lands on /tradies from an ad
2. Reads tradie-specific copy (missed calls, lost jobs, dollar value)
3. Fills in lead form: first name, mobile, business type, biggest frustration, suburb, consent
4. Hits submit → confirmation screen: "Our AI agent is about to call you — please answer"
5. Form saves to Supabase → triggers Vapi outbound call within 60 seconds
6. **Australian number (+61 480 844 608 via Twilio) calls them**
7. Outbound sales agent (Australian voice via ElevenLabs) handles the call

**Outbound agent conversation flow:**
- Warm intro: identifies as AI, pivots ("you're speaking to the same type of agent we'd set up for your business right now")
- Discovery: missed calls, job value, current solution
- Pitch: what the agent does, pricing overview
- **Payment available at any point** — if they say yes, send link immediately
- Objection handling: robotic, cost, customers won't like it, need to think
- Closing branches (see below)

---

### Flow B — Homepage / Kai

1. Person lands on homepage
2. Tries the demo call (optional — sees what their customers would hear)
3. Starts talking to Kai
4. Kai qualifies, pitches, handles objections, attempts to close
5. **Payment available at any point** — Kai sends Stripe link via SMS whenever they're ready
6. Some people buy quickly, some need more conversation — Kai handles both
7. Closing branches (see below)

**Kai's role:** Full sales agent. Not a qualifier who hands off to Cathryn. Kai closes deals.

---

### Closing Branches (applies to both flows)

**Branch A — Ready to buy (at any point)**
- Agent/Kai sends Stripe payment link via SMS immediately
- Person pays setup fee + first month
- Goes to Step: Post-Payment

**Branch B — Wants to speak to a human**
- Only offered if the person explicitly asks to speak to someone
- Agent/Kai sends Google Calendar Sales Call booking link via SMS
- Cathryn takes the call, closes manually

**Branch C — Not ready / needs more time**
- Agent/Kai asks: "Would you like us to follow up with you in a few days, or would you actually prefer to have a quick chat with our founder Cathryn?"
  - Follow up later → add to follow-up SMS sequence
  - Speak to Cathryn → send Sales Call booking link (same as Branch B)
- Polite, no pressure close

---

### Post-Payment Flow

1. Stripe processes payment
2. **Stripe webhook fires automatically — triggers two things:**
   - Welcome email sent to client (prep checklist + Trello board link + intake call booking link)
   - Trello board created for client (auto-named, client invited as member)
3. Stripe success page shows: Google Calendar AI Intake Call booking link
4. Client books their AI Intake Call at a time that suits them
5. Client receives prep checklist — knows what to have ready
6. **AI Intake Interview Agent calls them at the booked time**
   - Opens with: "I'm an AI agent — same type we're setting up for your business, so you're getting a live demo right now"
   - Gathers: business name/greeting, services/prices, FAQs, booking process, hours, transfer rules, anything to avoid
   - Offers to connect with Cathryn if they ask
   - Call recorded, transcript emailed to Cathryn
7. Cathryn reviews transcript, builds their agent in Vapi (30–60 mins)
8. Agent goes live — client notified
9. Ongoing changes submitted via their Trello board

---

## What Requires Cathryn

- Reviewing intake transcript and building each client's Vapi agent (~30–60 mins per client)
- Taking Sales Call if prospect explicitly requested human contact
- Reviewing and approving any Trello change requests

**Everything else is automated.**

---

## Key Technical Dependencies for This Flow

| Dependency | Session | Status |
|---|---|---|
| Twilio AU number active (+61 480 844 608) | 1K | ❌ Not done |
| ElevenLabs Australian voice in Vapi | 1K | ❌ Not done |
| Kai upgraded to full sales agent | 1L | ❌ Not done |
| Documentation library (Google Drive) | 1M | ❌ Not done |
| Stripe payment links | 1B | ❌ Not done |
| Google Calendar booking pages | 1C | ❌ Not done |
| Supabase AAP project + leads table | 1D | ❌ Not done |
| Outbound sales agent script | 1E | ❌ Not done |
| Vapi outbound assistant config | 1F | ❌ Not done |
| /tradies landing page | 1G | ❌ Not done |
| Form → Supabase → Vapi automation | 1H | ❌ Not done |
| Full funnel test | 1I | ❌ Not done |
| Client onboarding flow | 1J | ❌ Not done |
