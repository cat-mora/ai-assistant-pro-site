# Session 2D — Social Listening Agent

## What this session is for
Set up a Claude scheduled task that searches Reddit and X (Twitter) regularly for people asking about missed calls, AI receptionists, and phone answering solutions — and drafts reply suggestions for Cathryn to review and post.

## Context
Read COWORK-HANDOVER.md in this folder first.
See also: `hermes-social-listening-agent.md` in this folder for the full agent spec.

## What it does
- Runs every 20–60 minutes (configurable)
- Searches Reddit (r/smallbusiness, r/aussmallbusiness, r/tradies etc) and X for target keywords
- Filters out irrelevant posts using allow/block rules
- Drafts a helpful, non-spammy reply for each relevant post
- Presents drafts to Cathryn for approval before posting
- Never posts automatically — always human-approved

## Keywords to monitor
- "missed calls"
- "can't answer my phone"
- "AI receptionist"
- "phone answering service"
- "lost a job because of missed call"
- "need someone to answer my phone"
- "tradie receptionist"

## Outputs expected
- Scheduled task created in Claude Cowork
- Reply draft format agreed and tested
- First batch of real posts surfaced and replied to
