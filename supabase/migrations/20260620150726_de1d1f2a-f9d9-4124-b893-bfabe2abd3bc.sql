CREATE TABLE public.interest_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  nationality text NOT NULL,
  arrival_window text NOT NULL,
  referral_source text NOT NULL,
  stay_duration text,
  motivation text,
  preferred_room text,
  consent_given boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT INSERT ON public.interest_submissions TO anon;
GRANT INSERT ON public.interest_submissions TO authenticated;
GRANT ALL ON public.interest_submissions TO service_role;

ALTER TABLE public.interest_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit interest"
  ON public.interest_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);