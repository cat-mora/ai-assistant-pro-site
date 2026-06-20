# Session 2D — Social Listening Agent (Hermes)

## What this session is for
Set up an automated social listening agent (Hermes) that runs every 20 minutes, 24/7, across Reddit, X, and Facebook Groups. It monitors for posts where people are asking for help or venting about problems that AI Assistant Pro solves. It drafts reply suggestions for Cathryn's approval. It never posts automatically.

## Context
Read COWORK-HANDOVER.md in this folder first.
See also: `hermes-social-listening-agent.md` in this folder for the full agent spec.

## Platforms to monitor

| Platform | Locations |
|---|---|
| Reddit | r/aussmallbusiness, r/tradies, r/smallbusiness, r/australia (business threads) |
| X (Twitter) | General search — Australian context where possible |
| Facebook Groups | Tradies in Business Australia, Electricians Australia, HVAC & Refrigeration Trade Talk, Plumbers Australia, Pest Control Professionals Australia (add more as identified) |

Note: X is retained as a channel for broader Kindred Systems brand purposes and $100M exit strategy, even if tradie engagement is lower than Facebook.

## Keywords — all four pain points

**Interruption / missed calls (L1/L2):**
- "can't answer my phone"
- "miss calls on the tools"
- "phone rings while I'm working"
- "missed call lost job"
- "can't stop to answer"
- "went to voicemail lost customer"

**Slow lead follow-up (L3):**
- "paid for ads but leads go cold"
- "form submissions not converting"
- "calling back too late"
- "leads not answering when I call back"
- "wasted ad spend"
- "leads going cold"
- "response time too slow"

**Booking / empty diary (L2/L3):**
- "hard to fill the calendar"
- "clients don't show"
- "empty slots"
- "diary not full"
- "can't fill my schedule"
- "not enough bookings"

**Rebooking / reactivation (L4):**
- "past customers not coming back"
- "how do I get repeat business"
- "customer database sitting there"
- "overdue for service"
- "customers who haven't rebooked"
- "annual service reminders"
- "pest control rebooking"

**AI / receptionist generally:**
- "AI receptionist"
- "AI phone agent"
- "virtual receptionist Australia"
- "answering service for tradies"
- "phone answering service small business"
- "AI for small business"
- "automate my phone calls"
- "need a receptionist"

## What the agent does

1. Runs every 20 minutes via Claude scheduled task (cron job)
2. Searches each platform for recent posts matching keyword sets
3. Filters using allow/block rules (remove: spam, irrelevant, non-AU, already-replied threads)
4. For each relevant post, drafts a helpful reply — specific to the problem raised, not promotional
5. Presents drafts to Cathryn for review in a digest format
6. Cathryn approves, edits, or skips each reply
7. Cathryn posts manually (or Claude posts via connected MCP where available)

**Never posts automatically. Always human-approved.**

## Reply guidelines for the agent

- Lead with genuinely useful information — answer their actual question
- Don't mention AI Assistant Pro unless it's directly relevant and the person has expressed interest in solutions
- If AAP is relevant, mention it naturally and briefly — not as a pitch
- Tone: plain English, practical, tradie-aware, not corporate
- Australian English always
- One reply per thread maximum — no follow-up unless directly asked

## Secondary use: research

Weekly digest of recurring pain point language. Used to inform:
- Copy and headlines on the website and landing pages
- Content angles for the repurposing engine (2E)
- Keywords and questions for SEO pages (2B) and AEO content (2A)
- New keyword additions to this agent

## Outputs expected
- Claude scheduled task created (every 20 minutes)
- Platform connections confirmed (Reddit via API, X via API, Facebook Groups via Claude in Chrome or manual review)
- Keyword list finalised and loaded
- Reply draft format agreed and tested
- First batch of real posts surfaced and reviewed
- Weekly research digest format set up
