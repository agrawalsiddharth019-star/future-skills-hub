import { ClientOnly, createFileRoute, notFound } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { ArrowLeft, ArrowRight, Check, Clock3, GraduationCap, Laptop, Layers3 } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { EnquiryForm } from "@/components/newera/EnquiryForm";
import { FloatingContact } from "@/components/newera/FloatingContact";
import { Footer } from "@/components/newera/Footer";
import { SiteHeader } from "@/components/newera/SiteHeader";
import { CourseVisual } from "@/components/newera/CourseVisual";
import { courses, faqs, type CourseSlug } from "@/data/site";

const TechCore = lazy(() => import("@/components/newera/TechCore").then((m) => ({ default: m.TechCore })));

export const Route = createFileRoute("/courses/$slug")({
  loader: ({ params }) => {
    const course = courses.find((item) => item.slug === params.slug);
    if (!course) throw notFound();
    return course;
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Course not found | NewEra Solution" }, { name: "robots", content: "noindex" }] };
    const title = `${loaderData.title} Course | NewEra Solution`;
    const description = `${loaderData.description} Explore curriculum, projects, prerequisites and request free counselling.`;
    return { meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { property: "og:url", content: `/courses/${params.slug}` }, { name: "twitter:card", content: "summary_large_image" }], links: [{ rel: "canonical", href: `/courses/${params.slug}` }], scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "Course", name: loaderData.title, description: loaderData.description, provider: { "@type": "EducationalOrganization", name: "NewEra Solution" }, educationalLevel: "Beginner to applied" }) }] };
  },
  component: CoursePage,
  notFoundComponent: () => <div className="grid min-h-screen place-items-center bg-background px-6 text-center"><div><p className="eyebrow justify-center">Course unavailable</p><h1 className="mt-5 font-display text-5xl font-semibold">That program isn’t here.</h1><Button asChild variant="premium" className="mt-8"><a href="/#courses">Explore courses</a></Button></div></div>,
});

function CoursePage() {
  const course = Route.useLoaderData();
  return <div className="bg-background text-foreground"><SiteHeader/><main>
    <section className="course-detail-hero"><div className="hero-grid"/><div className="page-shell relative z-10 grid min-h-[750px] items-center gap-12 pb-16 pt-28 lg:grid-cols-[1.05fr_.95fr]"><div><a href="/#courses" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"><ArrowLeft className="h-4 w-4"/>All programs</a><p className="eyebrow mt-10">{course.badge}</p><h1 className="mt-6 font-display text-[clamp(3rem,6vw,6.2rem)] font-semibold leading-[.94]">{course.title}</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">{course.overview}</p><div className="mt-9 flex flex-col gap-3 sm:flex-row"><Button asChild size="xl" variant="premium"><a href="#enquire">Book Free Counselling<ArrowRight/></a></Button><Button asChild size="xl" variant="glass"><a href="#curriculum">View Curriculum</a></Button></div></div><div className="course-detail-visual"><CourseVisual slug={course.slug}/><ClientOnly fallback={null}>{<Suspense fallback={null}><TechCore compact/></Suspense>}</ClientOnly></div></div></section>
    <section className="border-y border-border bg-surface"><div className="page-shell grid grid-cols-2 lg:grid-cols-4">{[[Clock3,"Duration",course.duration],[Laptop,"Mode",course.mode],[GraduationCap,"Level","Foundation to applied"],[Layers3,"Fees",course.fees]].map(([Icon,label,value]) => { const I = Icon as typeof Clock3; return <div className="detail-stat" key={label as string}><I/><span>{label as string}</span><strong>{value as string}</strong></div>})}</div></section>
    <section className="section-pad"><div className="page-shell grid gap-12 lg:grid-cols-2"><div><p className="eyebrow">Who this is for</p><h2 className="section-title mt-5">Built for ambitious beginners and builders.</h2><div className="mt-8 grid gap-3">{course.audience.map(x=><div className="check-row" key={x}><Check/>{x}</div>)}</div></div><div className="info-panel"><h3 className="font-display text-2xl font-semibold">Prerequisites</h3><p className="mt-4 leading-7 text-muted-foreground">{course.prerequisites}</p><h3 className="mt-9 font-display text-2xl font-semibold">Learning methodology</h3><p className="mt-4 leading-7 text-muted-foreground">Structured concepts, guided practice, mentor-led support, applied projects, deployment and portfolio-ready documentation.</p></div></div></section>
    <section id="curriculum" className="section-pad bg-surface"><div className="page-shell"><div className="grid gap-10 lg:grid-cols-[.68fr_1.32fr]"><div><p className="eyebrow">Curriculum</p><h2 className="section-title mt-5">A clear path from fundamentals to applied work.</h2></div><div className="curriculum-list">{course.curriculum.map((module,i)=><div key={module.title}><span>0{i+1}</span><div><h3>{module.title}</h3><p>{module.topics}</p></div></div>)}</div></div></div></section>
    <section className="section-pad"><div className="page-shell"><div className="grid gap-10 lg:grid-cols-2"><div><p className="eyebrow">Technology stack</p><h2 className="section-title mt-5">Tools you’ll learn to use with purpose.</h2><div className="tag-row mt-8">{course.technologies.map(x=><span key={x}>{x}</span>)}</div></div><div><p className="eyebrow">Projects</p><div className="mt-7 space-y-4">{course.projects.map((x,i)=><div className="project-line" key={x}><span>0{i+1}</span><h3>{x}</h3></div>)}</div></div></div></div></section>
    <section className="section-pad border-y border-border bg-surface"><div className="page-shell grid gap-12 lg:grid-cols-[.7fr_1.3fr]"><div><p className="eyebrow">Course questions</p><h2 className="section-title mt-5">Details, made clear.</h2></div><Accordion type="single" collapsible>{faqs.slice(0,7).map(([q,a],i)=><AccordionItem value={`q-${i}`} key={q}><AccordionTrigger>{q}</AccordionTrigger><AccordionContent>{a}</AccordionContent></AccordionItem>)}</Accordion></div></section>
    <section id="enquire" className="section-pad"><div className="page-shell grid gap-12 lg:grid-cols-[.75fr_1.25fr]"><div><p className="eyebrow">Take the next step</p><h2 className="section-title mt-5">Talk through the program with us.</h2><p className="section-copy mt-5">Ask about curriculum, learning mode, fees and upcoming batches in a free counselling conversation.</p></div><div className="form-panel"><EnquiryForm defaultCourse={course.slug as CourseSlug}/></div></div></section>
  </main><Footer/><FloatingContact/></div>;
}
