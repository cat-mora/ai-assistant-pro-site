# Vapi Configuration Reference

## Vapi Account

**Public Key:** `46223d21-06e8-4659-9957-fc297f108320`

---

## Live Assistants

| Assistant | Vapi ID | Purpose | Voice |
|---|---|---|---|
| Kai - AI Advisor | `71f4bbf5-5ebb-44aa-a383-1a1d2b8272a2` | Prospect discovery on homepage | Damian (ElevenLabs) |
| Electrician Demo - Bright Side | `e111e9e6-f69c-463d-a377-d71ae331537d` | Demo call on homepage | Lily (ElevenLabs) |

Still to build:
- Outbound Sales Agent (calls new leads from /tradies form) — Session 1E/1F
- AI Intake Interview Agent (onboards new clients post-payment) — Session 1J

---

## ElevenLabs Voices

| Voice Name | ElevenLabs Voice ID | Used By | Notes |
|---|---|---|---|
| Damian | `L6n6lykkxcsgjmsqknme` | Kai - AI Advisor | Australian male, mid-range baritone. Use for all male agents. |
| Lily | `0qt4ordtvpdlupmfsuwn` | Electrician Demo | Australian female, warm customer service tone. Use for female agents. |

**Default voice for new agents:** Damian (`L6n6lykkxcsgjmsqknme`)
- Use Damian for: Outbound Sales Agent, AI Intake Interview Agent
- Use Lily for: any female-presenting agent if needed in future

**ElevenLabs account:** ElevenCreative (already connected to Vapi via 11labs provider)

---

## Twilio Phone Number

| Number | Status | Regulatory Bundle |
|---|---|---|
| +61 480 844 608 | Pending bundle approval | AI Assistant Pro - Australian Mobile (Sent for review) |

Once the bundle is approved:
1. Go to Twilio Console → Phone Numbers → Active Numbers
2. Click the number → assign the regulatory bundle
3. Go to Vapi → Phone Numbers → Import Twilio number
4. Use this number for all outbound and inbound calls

---

## Voice Settings (apply to all agents)

| Setting | Value |
|---|---|
| Provider | 11labs |
| Voice Model | Eleven_multilingual_v2 |
| Stability | 0.5 |
| Clarity + Similarity | 0.8 |
| Speed | 1.0 |
| Style Exaggeration | 0.0 |
| Optimize Streaming Latency | 1 |
