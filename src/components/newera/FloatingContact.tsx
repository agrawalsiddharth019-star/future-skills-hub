import { Mail, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/button";

export function FloatingContact() {
  const available = Boolean(siteConfig.contact.whatsapp || siteConfig.contact.phone || siteConfig.contact.email);
  const href = siteConfig.contact.whatsapp ? `https://wa.me/${siteConfig.contact.whatsapp.replace(/\D/g, "")}` : siteConfig.contact.phone ? `tel:${siteConfig.contact.phone}` : siteConfig.contact.email ? `mailto:${siteConfig.contact.email}` : "#enquire";
  const Icon = siteConfig.contact.whatsapp ? MessageCircle : siteConfig.contact.phone ? Phone : Mail;
  return <Button asChild size="iconLg" variant="premium" className="fixed bottom-5 right-5 z-40 shadow-glow" title={available ? "Contact NewEra Solution" : "Open enquiry form"}><a href={href} aria-label={available ? "Contact NewEra Solution" : "Open enquiry form"}><Icon/></a></Button>;
}
