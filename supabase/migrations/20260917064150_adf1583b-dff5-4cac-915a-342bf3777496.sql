CREATE TABLE public.enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL CHECK (char_length(full_name) BETWEEN 2 AND 100),
  email text NOT NULL CHECK (char_length(email) <= 255),
  phone text NOT NULL CHECK (char_length(phone) BETWEEN 7 AND 20),
  profession text NOT NULL CHECK (char_length(profession) BETWEEN 2 AND 120),
  course text NOT NULL CHECK (course IN ('full-stack-web-development', 'ai-automation', 'data-science-ai')),
  learning_mode text NOT NULL CHECK (learning_mode IN ('online', 'classroom', 'hybrid', 'not-sure')),
  message text NOT NULL DEFAULT '' CHECK (char_length(message) <= 1000),
  status text NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'qualified', 'closed')),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.enquiries TO anon, authenticated;
GRANT ALL ON public.enquiries TO service_role;
ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit an enquiry"
ON public.enquiries FOR INSERT
TO anon, authenticated
WITH CHECK (
  status = 'new'
  AND char_length(full_name) BETWEEN 2 AND 100
  AND char_length(email) <= 255
  AND char_length(phone) BETWEEN 7 AND 20
  AND char_length(profession) BETWEEN 2 AND 120
  AND course IN ('full-stack-web-development', 'ai-automation', 'data-science-ai')
  AND learning_mode IN ('online', 'classroom', 'hybrid', 'not-sure')
  AND char_length(message) <= 1000
);
CREATE OR REPLACE FUNCTION public.set_enquiries_updated_at()
RETURNS trigger
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;
CREATE TRIGGER enquiries_updated_at
BEFORE UPDATE ON public.enquiries
FOR EACH ROW EXECUTE FUNCTION public.set_enquiries_updated_at();