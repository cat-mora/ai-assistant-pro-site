# Session 1F — Vapi Assistant Configuration

## What this session is for
Create the outbound sales assistant in Vapi using the approved script from Session 1E. Configure voice, timezone, call recording, and outbound settings.

## Context
Read COWORK-HANDOVER.md in this folder first.
Script is in `vapi-outbound-sales-script.md` — complete Session 1E first.

## What to configure in Vapi

### New assistant settings
- Name: Outbound Sales Agent
- Type: Outbound
- System prompt: paste from approved script
- Voice: best available Australian-sounding voice in Vapi built-in options (ElevenLabs added later)
- Language: en-AU
- Timezone: Australia/Brisbane
- Call recording: ON
- Max call duration: 10 minutes
- Silence timeout: 30 seconds

### Phone number
- Use Vapi's own number for now (Twilio AU number pending regulatory bundle)
- Note on /tradies confirmation screen: "Our agent will call from an international number — please answer it"

### Tool setup
The agent needs two tools:
1. Send SMS (via Twilio) — sends payment link or booking link depending on branch
2. End call — closes the conversation cleanly

### Webhook
Configure Vapi to POST call results (transcript, outcome, branch taken) to the Supabase edge function or a Zapier webhook for logging.

## Outputs expected
- Assistant created in Vapi
- Assistant ID saved to `vapi-config.md` in this folder
- Test call made manually to confirm script loads and voice sounds right

## Notes
- Do not reuse the existing Kai or Electrician Demo assistant IDs — create a new one
- Australian accent is non-negotiable — test the voice before confirming
- Record the assistant ID — it is used in Session 1H to trigger outbound calls
