import { Braces, CircleDot, Code2, GitFork, Network, Sparkles } from "lucide-react";
import type { CourseSlug } from "@/data/site";

export function CourseVisual({ slug }: { slug: CourseSlug }) {
  if (slug === "full-stack-web-development") return <div className="course-visual visual-browser"><div className="window-bar"><i/><i/><i/></div><div className="code-lines"><span/><span/><span/><span/></div><Code2 className="visual-icon" /></div>;
  if (slug === "ai-automation") return <div className="course-visual visual-pipeline"><CircleDot/><span className="pipeline-line"/><GitFork/><span className="pipeline-line"/><Sparkles/></div>;
  return <div className="course-visual visual-network"><Network className="visual-network-main"/><Braces className="visual-float-a"/><CircleDot className="visual-float-b"/></div>;
}
