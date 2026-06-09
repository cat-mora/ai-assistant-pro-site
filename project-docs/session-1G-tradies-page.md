# Session 1G — /tradies Landing Page

## What this session is for
Build the complete /tradies landing page as a single HTML file. This is where Facebook/Instagram ads will point. It needs to convert cold tradie traffic into form submissions that trigger the AI sales call.

## Context
Read COWORK-HANDOVER.md in this folder first.

## Requirements

### Design
- Match the existing homepage design system exactly:
  - Navy: `#17283f`, Cream: `#f7f0e5`, Gold: `#bd985c`
  - Font: Inter (sans-serif), Georgia (headings)
  - Border radius: 30px large, 22px medium, 15px small
- Mobile-first — most ad traffic will be on phones
- Single-purpose page — no nav links to other pages, no distractions
- One goal: get the form submitted

### Page sections
1. **Hero** — tradie-specific headline, lead copy, form above the fold on mobile
2. **Pain points** — missed calls cost real money (specific dollar examples)
3. **How it works** — 3 steps: submit form → AI calls you → you decide
4. **Proof/trust** — what the agent does, Australian, not a phone menu
5. **Pricing** — simplified ("from $295/mo") with link to main site for details
6. **Lead capture form** (embedded, not a separate page)
7. **Confirmation screen** (shown after submit, no page reload)
8. **FAQ** — 3–4 objection-handling questions

### Lead capture form fields
- First name (text)
- Mobile number (tel)
- Business type (select: Plumber, Electrician, Builder, Carpenter, HVAC, Roofer, Landscaper, Other)
- Biggest frustration with missed calls (textarea — short)
- Suburb (text)
- Consent checkbox: "I agree to be contacted by AI Assistant Pro by phone and SMS"
- Submit button: "Get My Free Demo Call"

### Confirmation screen (shown after submit)
"Thanks [first name] — our AI agent is about to call you from an international number. Please answer it — this is the same type of agent we'd set up for your business."

### Form behaviour
- On submit: POST to Supabase (Session 1D config), show confirmation screen
- Do not redirect — swap the form div for the confirmation div
- Disable submit button after click to prevent double submissions

## Deployment
- Save as `tradies.html` in the GitHub repo root
- Add a route in `vercel.json` so `/tradies` serves `tradies.html`
- Push to main → auto-deploys to Vercel
- Confirm live at www.aiassistantpro.com.au/tradies

## Copy tone
- Australian English
- Direct and specific — "While you're on the tools, your phone is ringing out"
- Avoid: corporate speak, American spelling, em dashes
- Use: "tradie", "arvo", "mate" sparingly and naturally

## Outputs expected
- Complete `tradies.html` file committed to GitHub
- `vercel.json` updated with /tradies route
- Page live and confirmed at /tradies
- Form submits without errors (Supabase wiring done in Session 1H)
