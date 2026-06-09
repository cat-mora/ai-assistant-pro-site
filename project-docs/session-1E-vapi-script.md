# Session 1E — Vapi Outbound Sales Agent Script

## What this session is for
Write the complete conversation script for the AI outbound sales agent that calls tradie leads within 60 seconds of form submission. Map all three closing branches. Format ready for Vapi.

## Context
Read COWORK-HANDOVER.md in this folder first.

## About this agent
- Calls tradies who submitted the /tradies form
- Calls within 60 seconds of form submission
- Uses Vapi's own number (international) until Twilio AU number is active
- Australian voice, warm and direct — not salesy
- Identifies itself as AI upfront (legal and trust reasons)
- Goal: qualify, pitch, handle objections, close or route to next step

## The three closing branches

**Branch A — Yes (ready to buy)**
Send Stripe payment link via SMS. Book onboarding.

**Branch B — Maybe (wants more info or to speak to Cathryn)**
Send Google Calendar sales call booking link via SMS.

**Branch C — Not ready**
Polite close. Trigger follow-up SMS sequence.

## Script must include
1. Warm Australian opening (name, business type from form data)
2. Honest AI disclosure ("I'm an AI agent — same type we'd set up for you")
3. Discovery questions (missed calls, job value, current solution)
4. Pivot: "You're speaking to the same type of agent right now"
5. Founder pricing presentation (if still applicable) or standard pricing
6. Objection handling (robotic, customers won't like it, can't afford it, need to think)
7. Three branches with correct SMS sends
8. Natural closing for each branch

## Format for Vapi
Write as a system prompt plus conversation flow. Vapi uses a system prompt to instruct the LLM. Include:
- Role and persona
- Business context
- Conversation flow with exact example phrases
- Objection responses
- Branch logic
- Tool calls needed (send SMS, end call)

## Output expected
Save the complete script as `vapi-outbound-sales-script.md` in this folder. Get Cathryn approval before Session 1F (Vapi configuration).

## Notes
- Australian English throughout — "mate", "tradies", "arvo" are fine in moderation
- Warm but confident — not pushy
- The "you're experiencing the product" pivot is key — use it
- Pricing to present: use the 4-level website pricing unless founder pricing is still active
