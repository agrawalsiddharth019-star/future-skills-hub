import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, LoaderCircle } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { courses, type CourseSlug } from "@/data/site";
import { enquirySchema, type EnquiryValues } from "@/lib/enquiry";

export function EnquiryForm({ defaultCourse }: { defaultCourse?: CourseSlug }) {
  const [submitted, setSubmitted] = useState<EnquiryValues | null>(null);
  const [serverError, setServerError] = useState("");
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<EnquiryValues>({
    resolver: zodResolver(enquirySchema), defaultValues: { course: defaultCourse ?? "full-stack-web-development", learningMode: "not-sure", message: "" },
  });
  async function onSubmit(values: EnquiryValues) {
    setServerError("");
    const parsed = enquirySchema.safeParse(values);
    if (!parsed.success) return;
    const { error } = await supabase.from("enquiries").insert({
      full_name: parsed.data.fullName, email: parsed.data.email, phone: parsed.data.phone,
      profession: parsed.data.profession, course: parsed.data.course, learning_mode: parsed.data.learningMode, message: parsed.data.message,
    });
    if (error) { setServerError("We couldn’t send your request. Please try again shortly."); return; }
    setSubmitted(parsed.data);
  }
  if (submitted) {
    const course = courses.find((item) => item.slug === submitted.course);
    return <div className="confirmation-panel" role="status"><CheckCircle2 className="h-10 w-10 text-cyan" /><p className="eyebrow mt-5">Enquiry received</p><h3 className="mt-3 font-display text-3xl font-semibold">Thank you for your enquiry.</h3><p className="mt-4 text-muted-foreground">Your request has been received. Our team will get in touch with you shortly and share more details about the course.</p><div className="mt-6 border-l-2 border-primary pl-4"><span className="text-xs uppercase text-muted-foreground">Selected program</span><p className="mt-1 font-medium">{course?.title}</p></div></div>;
  }
  return <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5" noValidate>
    <div className="grid gap-5 sm:grid-cols-2">
      <Field label="Full Name" error={errors.fullName?.message}><Input autoComplete="name" maxLength={100} {...register("fullName")} /></Field>
      <Field label="Email" error={errors.email?.message}><Input type="email" autoComplete="email" maxLength={255} {...register("email")} /></Field>
      <Field label="Phone Number" error={errors.phone?.message}><Input type="tel" autoComplete="tel" maxLength={20} {...register("phone")} /></Field>
      <Field label="Current Education / Profession" error={errors.profession?.message}><Input maxLength={120} {...register("profession")} /></Field>
      <Field label="Course Interested In" error={errors.course?.message}><select className="form-select" {...register("course")}>{courses.map((course) => <option key={course.slug} value={course.slug}>{course.title}</option>)}</select></Field>
      <Field label="Preferred Learning Mode" error={errors.learningMode?.message}><select className="form-select" {...register("learningMode")}><option value="not-sure">Not sure yet</option><option value="online">Online</option><option value="classroom">Classroom</option><option value="hybrid">Hybrid</option></select></Field>
    </div>
    <Field label="Message" error={errors.message?.message}><Textarea rows={4} maxLength={1000} placeholder="Tell us about your goals (optional)" {...register("message")} /></Field>
    {serverError && <p className="text-sm text-destructive" role="alert">{serverError}</p>}
    <Button type="submit" size="xl" variant="premium" disabled={isSubmitting}>{isSubmitting ? <LoaderCircle className="animate-spin" /> : null}Request a Free Counselling Call</Button>
    <p className="text-xs leading-5 text-muted-foreground">By submitting, you agree to be contacted about NewEra Solution programs. No payment is required.</p>
  </form>;
}
function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return <div className="grid gap-2"><Label>{label}</Label>{children}{error && <p className="text-xs text-destructive" role="alert">{error}</p>}</div>;
}
