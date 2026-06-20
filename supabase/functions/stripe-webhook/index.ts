// stripe-webhook — Supabase Edge Function
// Deploy: supabase functions deploy stripe-webhook --no-verify-jwt
// Stripe dashboard → Webhooks → endpoint: https://whpyqlfwqprnognsobsj.supabase.co/functions/v1/stripe-webhook
// Events: checkout.session.completed

import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import Stripe from "https://esm.sh/stripe@14?target=deno";

const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

Deno.serve(async (req: Request) => {
  if (req.method !== "POST") return new Response("Method not allowed", { status: 405 });

  const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

  const { data: configRows } = await supabase
    .from("private_config")
    .select("key, value")
    .in("key", ["STRIPE_WEBHOOK_SECRET","STRIPE_SECRET_KEY","TWILIO_ACCOUNT_SID","TWILIO_AUTH_TOKEN","TWILIO_FROM_NUMBER","ONBOARDING_BOOKING_URL","INTAKE_FORM_URL"]);

  const config: Record<string, string> = {};
  for (const row of configRows ?? []) config[row.key] = row.value;

  const stripeWebhookSecret = config["STRIPE_WEBHOOK_SECRET"] ?? "";
  const stripeSecretKey = config["STRIPE_SECRET_KEY"] ?? "";

  if (!stripeWebhookSecret || stripeWebhookSecret.startsWith("SET_ME")) return new Response("Webhook secret not configured", { status: 200 });
  if (!stripeSecretKey || stripeSecretKey.startsWith("SET_ME")) return new Response("Stripe key not configured", { status: 200 });

  const stripe = new Stripe(stripeSecretKey, { apiVersion: "2024-04-10" });
  const sig = req.headers.get("stripe-signature");
  const body = await req.text();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, sig ?? "", stripeWebhookSecret);
  } catch (err) {
    console.error("stripe-webhook: signature verification failed", err);
    return new Response(`Webhook signature error: ${err}`, { status: 400 });
  }

  if (event.type !== "checkout.session.completed") return new Response("Event ignored", { status: 200 });

  const session = event.data.object as Stripe.Checkout.Session;
  const sessionId = session.id;

  let lead: Record<string, string> | null = null;
  const leadId = session.metadata?.lead_id;
  if (leadId) {
    const { data } = await supabase.from("leads").select("*").eq("id", leadId).single();
    lead = data;
  }
  if (!lead && session.customer_email) {
    const { data } = await supabase.from("leads").select("*").eq("email", session.customer_email).order("created_at", { ascending: false }).limit(1).single();
    lead = data;
  }
  if (!lead) {
    console.warn(`stripe-webhook: no lead found for session ${sessionId}`);
    return new Response("Lead not found — logged", { status: 200 });
  }

  await supabase.from("leads").update({ lead_status: "paid", stripe_session_id: sessionId, paid_at: new Date().toISOString(), updated_at: new Date().toISOString() }).eq("id", lead.id);
  console.log(`stripe-webhook: lead ${lead.id} marked paid (session ${sessionId})`);

  const twilioSid = config["TWILIO_ACCOUNT_SID"] ?? "";
  const twilioToken = config["TWILIO_AUTH_TOKEN"] ?? "";
  const twilioFrom = config["TWILIO_FROM_NUMBER"] ?? "";
  const bookingUrl = config["ONBOARDING_BOOKING_URL"] ?? "https://tidycal.com/kindredsystems/aap-connor-intake";
  const intakeUrl = config["INTAKE_FORM_URL"] ?? "https://www.aiassistantpro.com.au/intake";

  if (!twilioSid||twilioSid.startsWith("SET_ME")||!twilioToken||twilioToken.startsWith("SET_ME")||!twilioFrom||twilioFrom.startsWith("SET_ME")) {
    console.warn("stripe-webhook: Twilio not configured — onboarding SMS skipped");
    return new Response("Paid. SMS skipped (Twilio not configured)", { status: 200 });
  }

  let mobile: string = lead.mobile ?? "";
  mobile = mobile.replace(/\s+/g, "").replace(/[^0-9+]/g, "");
  if (mobile.startsWith("04")) mobile = "+61" + mobile.slice(1);
  else if (mobile.startsWith("61") && !mobile.startsWith("+")) mobile = "+" + mobile;
  else if (mobile.startsWith("0061")) mobile = "+" + mobile.slice(2);

  const firstName = (lead.full_name ?? "").split(" ")[0] || "there";
  const smsBody = `Hi ${firstName}, payment confirmed — welcome to AI Assistant Pro!\n\nTwo quick steps to get your AI assistant live:\n\n1. Book your onboarding call: ${bookingUrl}\n\n2. Fill in your business details (5 min): ${intakeUrl}\n\nQuestions? Reply here or email hello@aiassistantpro.com.au`;

  const twilioRes = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${twilioSid}/Messages.json`, {
    method: "POST",
    headers: { "Authorization": "Basic " + btoa(`${twilioSid}:${twilioToken}`), "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ To: mobile, From: twilioFrom, Body: smsBody }).toString()
  });

  if (!twilioRes.ok) {
    console.error(`stripe-webhook: Twilio SMS failed for lead ${lead.id}:`, await twilioRes.text());
  } else {
    const smsData = await twilioRes.json();
    console.log(`stripe-webhook: onboarding SMS sent to ${mobile}, SID ${smsData.sid}`);
    await supabase.from("leads").update({ onboarding_sms_sid: smsData.sid, updated_at: new Date().toISOString() }).eq("id", lead.id);
  }

  return new Response(JSON.stringify({ ok: true, lead_id: lead.id }), { status: 200, headers: { "Content-Type": "application/json" } });
});
