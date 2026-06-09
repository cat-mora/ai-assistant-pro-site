# Session 1K — Twilio + ElevenLabs Setup

## What this session is for
Activate the Australian phone number (+61 480 844 608) through the Twilio regulatory bundle, then connect an ElevenLabs Australian voice to Vapi. Both must be done before building the outbound sales agent — the business should launch with the right number and voice from day one.

## Context
Read COWORK-HANDOVER.md and sales-flow.md in this folder first.

## Part 1 — Twilio Regulatory Bundle

### What it is
Australian phone numbers require identity verification before Twilio will activate them. The regulatory bundle proves AI Assistant Pro is a legitimate Australian business.

### What's needed
- ABN: 97 722 882 034
- Business name: AI Assistant Pro
- Business address: Brisbane, QLD, Australia
- Cathryn's name and contact details
- The number to activate: +61 480 844 608

### Steps
1. Log into Twilio console (twilio.com/console)
2. Go to Phone Numbers → Regulatory Compliance
3. Find the pending regulatory bundle (may already be started)
4. Complete all required fields using ABN above
5. Submit for approval (usually approved within minutes to hours)
6. Once approved, the number +61 480 844 608 becomes active
7. Import the number into Vapi (Phone Numbers section in Vapi dashboard)
8. Update /tradies confirmation screen — remove "international number" note

## Part 2 — ElevenLabs Australian Voice

### What's needed
- ElevenLabs account (already exists)
- Choose or create an Australian-sounding voice
- Connect to Vapi via ElevenLabs API key

### Steps
1. Log into ElevenLabs
2. Browse Voice Library — filter by accent: Australian
3. Test 3–5 voices. Choose one that sounds warm, professional, and clearly Australian (not British, not American)
4. Note the Voice ID
5. In Vapi dashboard → Voices → add ElevenLabs as provider
6. Enter ElevenLabs API key
7. Select the chosen voice
8. Test a sample call to confirm it sounds right
9. This voice will be used for: outbound sales agent, AI intake interview agent

## Outputs expected
- Twilio number +61 480 844 608 active and imported into Vapi
- ElevenLabs Australian voice connected to Vapi and tested
- Voice ID and name saved to `vapi-config.md`
- Confirmation screen on /tradies updated (or noted for update in Session 1G)

## Notes
- Australian accent is non-negotiable. Test the voice carefully before confirming.
- The same voice should be used consistently across all AI agents for brand consistency
- If regulatory bundle approval takes more than 24 hours, proceed with other sessions and return to this one
