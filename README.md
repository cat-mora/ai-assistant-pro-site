# AI Assistant Pro site

Static one-page website for AI Assistant Pro, a Kindred Systems product.

## Purpose

This is the first money page for natural-sounding AI voice agents for service businesses. The page sells the real-world problem first, then lets prospects try a demo receptionist, review package options and talk to Kai, the AI advisor.

## Current structure

- `index.html` contains the full page, embedded CSS and JavaScript
- `assets/` contains logo, favicon and social-share assets
- The site is static and ready for GitHub + Vercel deployment

## Demo links

In `index.html`, update these two constants when the agents are live:

```js
const RECEPTIONIST_DEMO_LINK = "";
const KAI_ADVISOR_LINK = "";
```

Use a `tel:` link for a phone number or a web-call URL if the voice platform provides one.

## Positioning

Hero headline:

`Turn more calls and leads into booked jobs.`

Core offer:

- Answer calls
- Call new leads back fast
- Book appointments
- Follow up with customers who are due to rebook
- Escalate urgent or complex calls when a person needs to step in

## Pricing shown

- Level 1: Answer & Message, A$295/month (approx US$210/month) + A$495 setup
- Level 2: Answer & Book, A$395/month (approx US$280/month) + A$695 setup
- Level 3: Lead Callback, A$595/month (approx US$425/month) + A$995 setup
- Level 4: Rebook & Reactivate, A$995/month (approx US$705/month) + A$1,495 setup

## Deployment notes

Create a GitHub repo such as `ai-assistant-pro-site`, upload the files, then create a Vercel project under the Kindred Systems Group team.

Keep the repo clean. Do not upload ZIP files or unused logo experiments to the root.


## Booking and rebooking note

Level 2 should be described as working with Google Calendar, Calendly or similar booking tools where available. The exact connection is checked during setup. Level 4 requires access to customer records or service history where available, then creates a due-to-rebook list for owner review before calling approved customers.


## Pricing copy rule

Do not use “from” before package prices. Prices are exact public prices, with setup fees listed separately.

## Public-name rule

Do not mention the founder by name in public copy. Use “a real person” or “our team” for escalation language.
