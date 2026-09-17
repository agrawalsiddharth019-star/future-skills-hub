import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Brand } from "./Brand";

const nav = [
  ["Home", "#top"], ["Courses", "#courses"], ["Why NewEra", "#why"], ["Learning Journey", "#journey"],
  ["Careers", "#careers"], ["About Us", "#about"], ["Contact", "#contact"],
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`site-header ${scrolled ? "site-header-scrolled" : ""}`}>
      <div className="page-shell grid h-18 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 lg:grid-cols-[auto_minmax(0,1fr)_auto]">
        <Brand />
        <nav className="hidden items-center justify-center gap-5 lg:flex" aria-label="Primary navigation">
          {nav.map(([label, href]) => <a key={label} href={href} className="nav-link">{label}</a>)}
        </nav>
        <div className="hidden lg:block"><Button asChild variant="premium" size="lg"><a href="#enquire">Book Free Counselling</a></Button></div>
        <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setOpen((v) => !v)} aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open && <div className="mobile-menu lg:hidden"><nav className="page-shell flex flex-col py-4" aria-label="Mobile navigation">{nav.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)} className="mobile-nav-link">{label}</a>)}<Button asChild variant="premium" className="mt-4"><a href="#enquire" onClick={() => setOpen(false)}>Book Free Counselling</a></Button></nav></div>}
    </header>
  );
}
