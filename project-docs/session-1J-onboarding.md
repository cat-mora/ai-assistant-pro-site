# Session 1J — Client Onboarding Flow

## What this session is for
Build the complete post-payment onboarding system. Every step after Stripe payment fires should be automated or clearly documented. The only manual step in this entire flow is Cathryn reviewing the intake transcript and building the client's Vapi agent.

## Context
Read COWORK-HANDOVER.md and sales-flow.md in this folder first.
DEPENDENCIES: Requires `calendar-booking-urls.md` (done ✅), Session 1M documentation library (do 1M first or in parallel).

## Design principles
- The client should feel looked after from the moment they pay, without Cathryn lifting a finger
- Connor (AI agent) is the default intake path — human intake only if client explicitly refuses the AI during the call
- The client never needs to learn or log into Trello
- Nothing goes live until the client has approved their agent configuration
- Every client has a documented failure plan before go-live

---

## Step 1 — Stripe webhook fires (automatic)

Two things trigger immediately on payment:

**A. Welcome email to client**
Sent from: support@aiassistantpro.com.au (or Cathryn's Google Workspace)
Contains:
- Welcome message
- What happens next (clear 5-step summary)
- Prep checklist (what to have ready before their intake call)
- Link to book their Connor intake call: https://tidycal.com/kindredsystems/aap-connor-intake
- Their dedicated change request email address: changes@aiassistantpro.com.au

**B. Trello board created for client**
- Auto-named: "[Client Business Name] — AI Assistant Pro"
- Cathryn invited as member
- Client is NOT added to Trello — they never see it
- Board columns: To Do / In Progress / Done / Waiting on Client
- First card auto-created: "Initial Setup — [Client Name]"

---

## Step 2 — Client books Connor intake call

Client clicks the TidyCal link in their welcome email.
Booking page: https://tidycal.com/kindredsystems/aap-connor-intake
Duration: 20 minutes. Available 24/7. No conflict checks (Connor is an AI agent).

---

## Step 3 — Connor AI intake interview

Connor calls the client at the booked time.

**Connor's opening:**
"Hi, this is Connor from AI Assistant Pro. I'm an AI agent — and this is actually the same type of technology we'll be setting up for your business. So right now you're getting a live demo of what your customers will experience. Let's get your agent configured."

**Information Connor collects:**
- Business name and how calls should be answered
- Services offered (and services they don't take)
- Service area / suburbs covered
- Business hours
- Pricing / quote boundaries (what they can and can't quote on the call)
- Booking process (calendar system, how appointments work)
- Transfer contacts (who to transfer urgent calls to, and when they're available)
- Emergency / urgent job rules (what counts as urgent, what to do)
- FAQs (top 5–10 questions customers ask)
- Anything the agent should never say or do
- Client's own phone number for forwarding setup

**If client refuses the AI intake:**
Connor says: "No problem at all. I'll let Cathryn know and she'll be in touch to go through this with you directly."
Triggers a Trello card: "Client requested human intake — [Name]"
Cathryn handles it manually.

**Call recorded and transcribed automatically.**

---

## Step 4 — Approval summary sent to client

After the intake call, Claude processes the transcript and generates a structured approval summary:

```
AGENT CONFIGURATION SUMMARY — [Business Name]
To be approved before your agent goes live.

Business name / call greeting: ...
Services offered: ...
Services not offered: ...
Service area: ...
Hours: ...
Pricing / quote rules: ...
Booking process: ...
Transfer contacts: ...
Emergency rules: ...
Key FAQs: ...
Things to never say: ...
Forwarding number: ...

Please reply YES to approve, or reply with any changes.
```

Sent to client via email. Client replies to approve or request changes.
Cathryn also receives a copy.

---

## Step 5 — Cathryn builds the Vapi agent

Using the approved summary, Cathryn builds the client's agent in Vapi.
Time: approximately 30–60 minutes.
This is the only manual step in the entire onboarding flow.

---

## Step 6 — Internal test calls

Before anything goes live:
- Cathryn (or Claude) runs internal test calls against the agent
- Tests: normal enquiry, urgent/complex call, booking or escalation
- Any issues fixed before client sees it

---

## Step 7 — Client test and approval

Client is sent a test number and asked to try 3 scenarios:
1. A normal customer enquiry
2. An urgent or complex call
3. A booking or transfer request

Client approves in writing (email reply: "Approved" or notes changes).
No forwarding goes live until written approval received.

---

## Step 8 — Go live

Phone forwarding activated to the client's number.
Client notified: "Your agent is live."
Handover email includes:
- How their agent works
- What to expect in the first week
- How to request changes (email changes@aiassistantpro.com.au)
- Links to connect calendar, CRM, Google Drive if applicable

---

## Step 9 — Ongoing change requests

**Client experience:**
Client emails changes@aiassistantpro.com.au with their request.
They get an auto-reply confirming receipt.
That's all they need to do.

**Behind the scenes:**
The email auto-creates a Trello card on their board under "To Do."
Cathryn reviews and actions it.
Client never sees Trello. Never needs to create an account. Never needs to learn anything new.

**Tweak policy:** One weekly batch of reasonable tweaks included in all packages. Business-critical issues (affecting calls, bookings, or customer handoff) prioritised sooner.

---

## Step 10 — Failure plan (documented per client before go-live)

Every client must have a documented failure plan before their agent goes live. Saved to their Trello board.

Covers:
- What happens if the agent is unavailable? (fallback: voicemail / owner mobile / backup number)
- What happens if the calendar connection fails? (fallback: agent takes message and notifies owner)
- What happens if an urgent call can't be transferred? (fallback: specific instructions)
- Who receives call summaries?
- Who can authorise emergency changes outside the normal weekly cycle?
- What's the client's mobile for emergencies?

---

## Technical dependencies

| Dependency | Session | Status |
|---|---|---|
| TidyCal Connor intake booking page | 1C | ✅ Done |
| Stripe webhook | 1J (this session) | ⏳ |
| Welcome email template | 1J (this session) | ⏳ |
| Trello auto-board creation | 1J (this session) | ⏳ |
| changes@aiassistantpro.com.au email → Trello | 1J (this session) | ⏳ |
| Connor AI intake agent in Vapi | 1J (this session) | ⏳ |
| Approval summary generation | 1J (this session) | ⏳ |

---

## Outputs expected
- Stripe webhook configured and tested
- Welcome email template written and wired
- Trello board auto-creation working
- changes@aiassistantpro.com.au set up and wired to Trello
- Connor AI intake agent built in Vapi and tested
- Approval summary template created
- Failure plan template created
- Full flow tested end to end with a dummy client
