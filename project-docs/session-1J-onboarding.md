# Session 1J — Client Onboarding Flow

## What this session is for
Build the complete automated onboarding experience that every new client receives from the moment they pay. This must be ready before any marketing starts — the first client should get the full system, not a manual workaround.

## Context
Read COWORK-HANDOVER.md in this folder first.

The goal is for Cathryn to be mostly hands-off during onboarding. The client pays → automation takes over → Cathryn receives a clean intake transcript → she builds their agent → short handover. Cathryn only steps in if the client specifically requests it.

## The Full Post-Payment Flow to Build

```
Client pays via Stripe
      ↓
Stripe webhook fires
      ↓
Two things happen automatically:
  1. Welcome email sent to client
  2. Trello board created for client
      ↓
Client reads prep checklist, books AI intake call
      ↓
AI intake agent calls them (or they call in)
Agent frames: "I'm an AI agent — same type we're setting up for you"
Agent interviews them (10–15 mins)
Agent offers Cathryn contact if needed
      ↓
Call transcript + summary emailed to Cathryn
      ↓
Cathryn reviews, builds their agent in Vapi
      ↓
Handover: email or short call
      ↓
Ongoing changes submitted via Trello board
```

## What to Build in This Session

### 1. Welcome Email (auto-sent on Stripe payment)
Triggered by Stripe webhook. Warm, Australian tone. Contains:
- Congratulations and what happens next
- Prep checklist (see below)
- Link to book their AI intake call (Google Calendar booking page from Session 1C)
- Link to their Trello board (auto-created — see step 3)
- Cathryn's contact details for urgent matters

**Prep checklist content:**
- Your exact business name and how you like the phone to be answered
- Your services and rough prices (ballpark is fine)
- Your top 3–5 questions callers usually ask
- How you currently handle bookings (do you use any software?)
- What would make you want a call transferred to you urgently
- Your trading hours
- Any types of calls the agent should never handle

### 2. AI Intake Interview Agent (Vapi)
A new Vapi assistant. Inbound — client calls in after booking.

**Opening framing (non-negotiable):**
"Hi [name], this is an AI agent from AI Assistant Pro — actually, the same type of agent we'll be setting up for your business, so you're getting a live demo right now. I'm going to ask you a few questions to get your agent configured. This usually takes about 10 minutes. And if at any point you'd like to speak with Cathryn directly, just say so and she'll follow up with you personally. Ready to get started?"

**Questions to cover:**
1. Business name and preferred phone greeting (word for word)
2. What services do you offer, and are there prices you're happy for the agent to share?
3. What are the most common questions callers ask you?
4. How do you handle bookings — do you use any software, or is it manual?
5. What's your availability like — days and hours?
6. Are there any call types that should always be transferred to you?
7. Anything else callers regularly ask that we should program in?
8. Is there anything specific you want the agent to avoid saying or doing?

**End of call:**
"Brilliant — I've got everything I need. Cathryn will review this and your agent will be configured within [X] business days. You'll receive a confirmation once it's live. Your Trello board is already set up — that's where you can send any updates or change requests once you're live. Any questions before we finish?"

**Recording:** ON. Transcript delivered to cathryn@aiassistantpro.com.au.

### 3. Trello Board Auto-Creation
Triggered by same Stripe webhook as welcome email.

**Board setup per client:**
- Board name: [Client Business Name] — AI Assistant Pro
- Lists: Requested Changes | In Progress | Done | Reference Info
- Template card in "Requested Changes":
  Title: [Short description of change]
  Description: What needs to change, and why. Include any example calls or scripts if helpful.
  Label options: Urgent / Normal / Question
- Client invited as member using email provided at payment

**How to trigger:** Zapier (Stripe → Trello) is the simplest no-code option.

### 4. Webhook Orchestration
The Stripe payment webhook needs to trigger:
- Welcome email send
- Trello board creation + client invite
- (Optional) Outbound Vapi intake call reminder if client hasn't booked within 24 hours

## Outputs Expected from This Session
- Welcome email copy written and saved
- Intake agent script written and formatted for Vapi
- Intake agent created in Vapi and tested
- Trello automation wired up (Stripe payment → board created → client invited)
- Welcome email automation wired up (Stripe payment → email sent)
- End-to-end test: simulate a Stripe payment, confirm email fires, Trello board appears, intake call works

## Notes
- Australian English throughout all copy
- The "you're experiencing the product" framing is a feature, not a disclaimer — lean into it
- Cathryn wants to be hands-off — every step that can be automated should be
- Trello is also used in Cathryn's other businesses — keep the board structure consistent (one board per client)
