import { ClientOnly, createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { ArrowDown, ArrowRight, BrainCircuit, Check, ChevronRight, CircleGauge, Cloud, Code2, Database, Sparkles } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { CourseCard } from "@/components/newera/CourseCard";
import { EnquiryForm } from "@/components/newera/EnquiryForm";
import { FloatingContact } from "@/components/newera/FloatingContact";
import { Footer } from "@/components/newera/Footer";
import { SiteHeader } from "@/components/newera/SiteHeader";
import { courses, faqs, features, journey, metrics, projects, technologies } from "@/data/site";

const TechCore = lazy(() => import("@/components/newera/TechCore").then((m) => ({ default: m.TechCore })));

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NewEra Solution | Build Skills. Build the Future." },
      { name: "description", content: "NewEra Solution helps learners build practical skills in Full Stack Web Development, AI Automation, and Data Science & Artificial Intelligence through modern, project-focused learning." },
      { property: "og:title", content: "NewEra Solution | Build Skills. Build the Future." },
      { property: "og:description", content: "Career-focused technology learning through practical projects in full stack, AI automation and data science." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "EducationalOrganization", name: "NewEra Solution", slogan: "Build Skills. Build the Future.", description: "Career-focused technology learning company offering programs in full stack development, AI automation, and data science and artificial intelligence." }) }],
  }),
  component: HomePage,
});

function HomePage() {
  return <div id="top" className="overflow-clip bg-background text-foreground">
    <SiteHeader />
    <main>
      <section className="hero-section">
        <div className="hero-grid" aria-hidden="true" />
        <div className="page-shell relative z-10 grid min-h-[min(860px,92vh)] items-center gap-8 pb-12 pt-28 lg:grid-cols-[1.08fr_.92fr] lg:pb-16">
          <div className="max-w-3xl animate-fade-in-up">
            <div className="eyebrow"><span className="status-dot"/>Career systems for the next era</div>
            <h1 className="mt-7 font-display text-[clamp(3.1rem,7vw,7.25rem)] font-semibold leading-[.91] tracking-normal">Build Skills.<br/><span className="text-gradient">Build the Future.</span></h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg md:leading-8">Master Full Stack Development, AI Automation and Data Science & AI with industry-focused learning designed for the careers of tomorrow.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row"><Button asChild variant="premium" size="xl"><a href="#courses">Explore Courses<ArrowRight/></a></Button><Button asChild variant="glass" size="xl"><a href="#enquire">Book a Free Counselling Session</a></Button></div>
            <div className="mt-9 flex items-center gap-3 text-xs font-semibold uppercase text-subtle"><span className="h-px w-8 bg-primary"/>Learn. Build. Deploy. Get Career Ready.</div>
          </div>
          <div className="relative min-h-[390px] lg:min-h-[620px]" role="img" aria-label="Interactive abstract neural technology core with connected nodes and data orbits">
            <div className="hero-core-ring"/><ClientOnly fallback={<div className="tech-core-fallback"><span/><span/><span/></div>}>{<Suspense fallback={<div className="tech-core-fallback"><span/><span/><span/></div>}><TechCore /></Suspense>}</ClientOnly>
            <div className="float-label left-[4%] top-[25%]"><Code2/>CODE</div><div className="float-label right-[2%] top-[35%]"><BrainCircuit/>AI</div><div className="float-label bottom-[19%] left-[13%]"><Database/>DATA</div>
          </div>
        </div>
        <a href="#courses" className="scroll-cue" aria-label="Scroll to courses"><ArrowDown/></a>
      </section>

      <section className="trust-strip" aria-label="Program highlights"><div className="page-shell grid grid-cols-2 lg:grid-cols-4">{metrics.map((item) => <div className="metric" key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>)}</div></section>

      <section id="courses" className="section-pad"><div className="page-shell"><SectionHeading index="01" eyebrow="Programs" title="Choose Your Future." text="Learn the technologies that are transforming modern careers."/><div className="mt-12 grid gap-5 lg:grid-cols-3">{courses.map((course,i) => <CourseCard key={course.slug} course={course} index={i}/>)}</div></div></section>

      <section id="why" className="section-pad border-y border-border bg-surface"><div className="page-shell"><SectionHeading index="02" eyebrow="The NewEra method" title="More Than a Course. A Career-Building Journey." text="A practical learning system designed around what modern technology work actually demands."/><div className="mt-12 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2 lg:grid-cols-3">{features.map(({icon:Icon,title,text},i) => <article className="feature-cell" key={title}><div className="feature-icon"><Icon/></div><span className="feature-num">0{i+1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section id="journey" className="section-pad"><div className="page-shell"><SectionHeading index="03" eyebrow="Learning journey" title="From Learner to Builder." text="Six deliberate stages. One clear direction: demonstrable ability."/><div className="journey-grid mt-14">{journey.map(([num,title,text],i) => <div className="journey-step" key={num}><div className="journey-node"><span>{num}</span></div>{i < journey.length - 1 && <div className="journey-path"/>}<h3>{title}</h3><p>{text}</p></div>)}</div></div></section>

      <section className="section-pad bg-surface" aria-labelledby="technology-title"><div className="page-shell grid items-center gap-12 lg:grid-cols-[.75fr_1.25fr]"><div><p className="eyebrow">Technology ecosystem</p><h2 id="technology-title" className="section-title mt-5">Learn the Technology Stack of the New Era.</h2><p className="section-copy mt-5">Build fluency across the tools that power modern products, data systems and intelligent workflows.</p></div><div className="tech-cloud">{technologies.map((tech,i) => <span key={tech} style={{ animationDelay: `${(i%5)*.25}s` }}>{tech}</span>)}</div></div></section>

      <section id="projects" className="section-pad"><div className="page-shell"><SectionHeading index="04" eyebrow="Applied work" title="Don’t Just Learn. Build." text="Project briefs shaped around practical products, systems and decisions."/><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{projects.map(({icon:Icon,...project},i) => <article className="project-card" key={project.title}><div className="project-visual"><span>0{i+1}</span><Icon/></div><div className="p-6"><div className="flex items-center justify-between gap-3"><span className="course-badge">{project.level}</span><span className="text-xs text-subtle">{project.stack}</span></div><h3 className="mt-5 font-display text-xl font-semibold">{project.title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{project.description}</p><Button variant="course" className="mt-5" onClick={() => document.querySelector("#enquire")?.scrollIntoView({ behavior: "smooth" })}>View Project<ChevronRight/></Button></div></article>)}</div></div></section>

      <section className="ai-era-section"><div className="page-shell grid min-h-[650px] items-center gap-8 py-20 lg:grid-cols-2"><div className="relative min-h-[360px] order-2 lg:order-1" role="img" aria-label="Abstract AI core surrounded by future technology concepts"><ClientOnly fallback={<div className="tech-core-fallback"><span/><span/><span/></div>}>{<Suspense fallback={null}><TechCore compact /></Suspense>}</ClientOnly>{["AI","Automation","Data","Code","Agents","Cloud"].map((x,i)=><span key={x} className={`orbit-label orbit-${i}`}>{x}</span>)}</div><div className="order-1 lg:order-2"><p className="eyebrow">NewEra AI Lab</p><h2 className="section-title mt-5">Welcome to the AI Era.</h2><p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">AI is changing how software is built, businesses operate, and people work. NewEra Solution helps learners understand and use these technologies through practical, project-based learning.</p><div className="mt-8 grid grid-cols-3 gap-3"><MiniSignal icon={Sparkles} label="Intelligence"/><MiniSignal icon={CircleGauge} label="Automation"/><MiniSignal icon={Cloud} label="Scale"/></div></div></div></section>

      <section id="careers" className="section-pad"><div className="page-shell grid gap-12 lg:grid-cols-[1fr_1fr]"><div><p className="eyebrow">Career direction</p><h2 className="section-title mt-5">Skills That Move Careers Forward.</h2><p className="section-copy mt-5">Programs are structured to develop capability you can explain, apply and show—not unsupported promises.</p><Button asChild variant="premium" size="xl" className="mt-8"><a href="#enquire">Start Your Learning Journey<ArrowRight/></a></Button></div><div className="career-list">{["Technical foundations","Problem-solving ability","Project experience","Portfolio development","Communication","Interview readiness","Practical technology skills"].map((x,i)=><div key={x}><span>{String(i+1).padStart(2,"0")}</span><p>{x}</p><Check/></div>)}</div></div></section>

      <section className="section-pad border-y border-border bg-surface"><div className="page-shell"><SectionHeading index="05" eyebrow="Learner voice" title="What Learners Say" text="This area is prepared for verified learner stories."/><div className="mt-10 grid gap-5 md:grid-cols-3">{["Learning experience","Project journey","Career confidence"].map((title)=><article className="testimonial-card" key={title}><span className="sample-label">Sample content — replace before publishing</span><p className="mt-8 text-lg leading-8">“A verified learner testimonial about {title.toLowerCase()} will appear here.”</p><div className="mt-8 border-t border-border pt-5 text-sm text-muted-foreground">Learner name · Program</div></article>)}</div></div></section>

      <section id="faq" className="section-pad"><div className="page-shell grid gap-12 lg:grid-cols-[.7fr_1.3fr]"><div><p className="eyebrow">Questions, answered</p><h2 className="section-title mt-5">What to Know Before You Begin.</h2></div><Accordion type="single" collapsible className="faq-list">{faqs.map(([question,answer],i)=><AccordionItem value={`item-${i}`} key={question}><AccordionTrigger>{question}</AccordionTrigger><AccordionContent>{answer}</AccordionContent></AccordionItem>)}</Accordion></div></section>

      <section id="enquire" className="section-pad bg-surface"><div className="page-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr]"><div><p className="eyebrow">Free counselling</p><h2 className="section-title mt-5">Find the Right Path Forward.</h2><p className="section-copy mt-5">Tell us where you are and where you want to go. We’ll help you understand the most relevant program and next steps.</p><div className="mt-9 space-y-4 text-sm text-muted-foreground"><p className="flex gap-3"><Check className="text-cyan"/>No pressure or payment required</p><p className="flex gap-3"><Check className="text-cyan"/>Course and learning-mode guidance</p><p className="flex gap-3"><Check className="text-cyan"/>Latest fee and batch information</p></div></div><div className="form-panel"><EnquiryForm/></div></div></section>

      <section id="about" className="final-cta"><div className="final-grid"/><div className="page-shell relative z-10 py-24 text-center md:py-32"><p className="eyebrow justify-center">The next era is built, not watched.</p><h2 className="mx-auto mt-6 max-w-4xl font-display text-[clamp(2.8rem,6vw,6rem)] font-semibold leading-[.96]">Your Next Chapter Starts Here.</h2><p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">Choose a skill. Build something real. Step into the new era of technology.</p><div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"><Button asChild size="xl" variant="premium"><a href="#courses">Explore Courses</a></Button><Button asChild size="xl" variant="glass"><a href="#enquire">Book Free Counselling</a></Button></div></div></section>
    </main><Footer/><FloatingContact/>
  </div>;
}

function SectionHeading({ index, eyebrow, title, text }: { index: string; eyebrow: string; title: string; text: string }) { return <div className="section-heading"><div className="flex items-center gap-3"><span className="section-index">{index}</span><p className="eyebrow">{eyebrow}</p></div><div className="mt-5 grid items-end gap-5 md:grid-cols-[1fr_.7fr]"><h2 className="section-title">{title}</h2><p className="section-copy md:text-right">{text}</p></div></div>; }
function MiniSignal({ icon:Icon,label }:{icon:typeof Sparkles;label:string}) { return <div className="mini-signal"><Icon/><span>{label}</span></div>; }
