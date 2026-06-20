-- Stage 4 migration — run in Supabase SQL editor before deploying stripe-webhook

-- 1. Add payment + onboarding tracking columns to leads
ALTER TABLE leads
  ADD COLUMN IF NOT EXISTS stripe_session_id TEXT,
  ADD COLUMN IF NOT EXISTS paid_at TIMESTAMPTZ,
  ADD COLUMN IF NOT EXISTS onboarding_sms_sid TEXT;

-- 2. Ensure lead_status enum includes paid and onboarding
DO $$
BEGIN
  ALTER TYPE lead_status ADD VALUE IF NOT EXISTS 'paid';
  ALTER TYPE lead_status ADD VALUE IF NOT EXISTS 'onboarding';
EXCEPTION WHEN others THEN NULL;
END$$;

-- 3. Create onboarding_responses table
CREATE TABLE IF NOT EXISTS onboarding_responses (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id       UUID REFERENCES leads(id) ON DELETE SET NULL,
  submitted_at  TIMESTAMPTZ DEFAULT NOW(),
  business_name TEXT, business_type TEXT, abn TEXT,
  owner_name TEXT, owner_mobile TEXT, business_email TEXT, website TEXT,
  suburb TEXT, state TEXT, postcode TEXT,
  service_area TEXT, business_hours TEXT, after_hours_handling TEXT, team_size TEXT,
  services_offered TEXT, average_job_value TEXT,
  booking_system TEXT, booking_system_login TEXT, crm_system TEXT, crm_login TEXT, payment_method TEXT,
  greeting_name TEXT, agent_persona_name TEXT, escalation_mobile TEXT, faqs TEXT,
  l4_calendar_type TEXT, l4_calendar_access TEXT, l4_crm_type TEXT, l4_crm_access TEXT,
  l4_service_cycle TEXT, l4_outreach_order TEXT, l4_email_domain TEXT, l4_email_sender_name TEXT,
  consent_ai_disclosure BOOLEAN DEFAULT FALSE,
  consent_recording BOOLEAN DEFAULT FALSE,
  consent_spam_act BOOLEAN DEFAULT FALSE,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE onboarding_responses ENABLE ROW LEVEL SECURITY;

CREATE POLICY "anon can insert onboarding_responses"
  ON onboarding_responses FOR INSERT TO anon WITH CHECK (true);

CREATE OR REPLACE FUNCTION update_onboarding_timestamp()
RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN NEW.updated_at = NOW(); RETURN NEW; END;
$$;

DROP TRIGGER IF EXISTS trg_onboarding_updated_at ON onboarding_responses;
CREATE TRIGGER trg_onboarding_updated_at
  BEFORE UPDATE ON onboarding_responses
  FOR EACH ROW EXECUTE FUNCTION update_onboarding_timestamp();
