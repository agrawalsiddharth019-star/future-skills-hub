import { z } from "zod";

export const enquirySchema = z.object({
  fullName: z.string().trim().min(2, "Enter your full name").max(100),
  email: z.string().trim().email("Enter a valid email address").max(255),
  phone: z.string().trim().regex(/^[+\d][\d\s()-]{6,19}$/, "Enter a valid phone number"),
  profession: z.string().trim().min(2, "Tell us your current education or profession").max(120),
  course: z.enum(["full-stack-web-development", "ai-automation", "data-science-ai"]),
  learningMode: z.enum(["online", "classroom", "hybrid", "not-sure"]),
  message: z.string().trim().max(1000, "Keep your message under 1,000 characters"),
});
export type EnquiryValues = z.infer<typeof enquirySchema>;
