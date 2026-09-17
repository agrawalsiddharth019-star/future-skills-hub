import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Course } from "@/data/site";
import { CourseVisual } from "./CourseVisual";

export function CourseCard({ course, index }: { course: Course; index: number }) {
  return <article className={`course-card course-card-${course.accent}`}>
    <div className="course-card-top"><span className="course-index">0{index + 1}</span><span className="course-badge">{course.badge}</span></div>
    <CourseVisual slug={course.slug} />
    <div className="course-card-content"><h3 className="font-display text-3xl font-semibold">{course.title}</h3><p className="mt-4 leading-7 text-muted-foreground">{course.description}</p><div className="tag-row mt-6">{course.technologies.slice(0, 6).map((tech) => <span key={tech}>{tech}</span>)}</div><Button asChild variant="course" className="mt-8"><Link to="/courses/$slug" params={{ slug: course.slug }}>Explore {course.shortTitle}<ArrowUpRight /></Link></Button></div>
  </article>;
}
