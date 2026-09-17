import {
  Blocks, Bot, BrainCircuit, BriefcaseBusiness, Code2, Cpu, GitBranch,
  GraduationCap, Layers3, Rocket, Sparkles, TerminalSquare, Waypoints,
} from "lucide-react";

export const siteConfig = {
  name: "NewEra Solution",
  tagline: "Build Skills. Build the Future.",
  supportingLine: "Master the technologies shaping the next era of careers.",
  contact: { phone: "" as string, email: "" as string, whatsapp: "" as string, location: "" as string },
  socials: { instagram: "#", linkedin: "#", youtube: "#" },
} as const;

export type CourseSlug = "full-stack-web-development" | "ai-automation" | "data-science-ai";

export type Course = {
  slug: CourseSlug;
  badge: string;
  title: string;
  shortTitle: string;
  description: string;
  overview: string;
  audience: string[];
  prerequisites: string;
  technologies: string[];
  curriculum: { title: string; topics: string }[];
  projects: string[];
  duration: string;
  mode: string;
  fees: string;
  accent: "blue" | "violet" | "cyan";
};

export const courses: Course[] = [
  {
    slug: "full-stack-web-development", badge: "FULL STACK", title: "Full Stack Web Development", shortTitle: "Full Stack",
    description: "Learn how to design, build, deploy and scale modern web applications from frontend to backend.",
    overview: "A practical path through the complete modern web stack—from browser fundamentals to production APIs, databases and deployment.",
    audience: ["Beginners entering technology", "Students and fresh graduates", "Developers strengthening full-stack skills", "Career switchers"],
    prerequisites: "No prior coding experience is required. Curiosity and consistent practice are enough to begin.",
    technologies: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Node.js", "Express", "Databases", "APIs", "Git & GitHub", "Deployment"],
    curriculum: [
      { title: "Web Foundations", topics: "HTML, CSS, responsive interfaces and browser fundamentals" },
      { title: "Modern JavaScript", topics: "Core language, asynchronous programming and TypeScript" },
      { title: "Frontend Engineering", topics: "React, application state, routing and accessible interfaces" },
      { title: "Backend Systems", topics: "Node.js, Express, APIs, authentication and databases" },
      { title: "Production Delivery", topics: "Git workflows, testing, performance and deployment" },
    ],
    projects: ["Responsive portfolio", "SaaS dashboard", "Full-stack commerce application"], duration: "To be announced", mode: "To be announced", fees: "Speak with a counsellor", accent: "blue",
  },
  {
    slug: "ai-automation", badge: "AI + AUTOMATION", title: "AI Automation", shortTitle: "AI Automation",
    description: "Learn how to use AI, APIs and automation tools to build intelligent workflows and automate real-world business processes.",
    overview: "Learn to connect modern AI capabilities with useful business workflows, reliable APIs and thoughtful human oversight.",
    audience: ["Professionals improving workflows", "Developers adding AI capabilities", "Founders and operators", "Technology beginners"],
    prerequisites: "No advanced programming background is required. Basic computer literacy and logical thinking are helpful.",
    technologies: ["Generative AI", "LLMs", "Prompt Engineering", "AI Agents", "APIs", "Workflow Automation", "No-Code / Low-Code", "AI Tools", "Integrations"],
    curriculum: [
      { title: "AI Foundations", topics: "Generative AI, LLMs, capabilities, limits and responsible use" },
      { title: "Prompt Systems", topics: "Prompt design, structured outputs and repeatable workflows" },
      { title: "APIs & Integrations", topics: "Data exchange, webhooks and connecting business tools" },
      { title: "Automation Design", topics: "Triggers, actions, branching, validation and observability" },
      { title: "AI Agents", topics: "Tools, memory, guardrails and practical agent patterns" },
    ],
    projects: ["AI research assistant", "Lead qualification workflow", "Business operations automation"], duration: "To be announced", mode: "To be announced", fees: "Speak with a counsellor", accent: "violet",
  },
  {
    slug: "data-science-ai", badge: "DATA + AI", title: "Data Science & Artificial Intelligence", shortTitle: "DSAI",
    description: "Build a strong foundation in data analysis, machine learning and artificial intelligence through practical projects.",
    overview: "Turn raw data into decisions and intelligent systems through a structured, project-led journey across analysis and machine learning.",
    audience: ["Students exploring data careers", "Analysts expanding technical skills", "Developers entering machine learning", "Career switchers"],
    prerequisites: "Designed to begin with foundations. Comfort with basic mathematics is useful, but concepts are introduced progressively.",
    technologies: ["Python", "Statistics", "Data Analysis", "NumPy", "Pandas", "Visualization", "Machine Learning", "Deep Learning", "AI", "Model Development"],
    curriculum: [
      { title: "Python for Data", topics: "Programming foundations, NumPy and practical data handling" },
      { title: "Analysis", topics: "Pandas, data cleaning, exploration and visualization" },
      { title: "Statistics", topics: "Probability, inference and interpreting evidence" },
      { title: "Machine Learning", topics: "Supervised and unsupervised models, evaluation and iteration" },
      { title: "Applied AI", topics: "Deep learning foundations, model development and deployment" },
    ],
    projects: ["Exploratory analytics dashboard", "Predictive machine learning model", "Applied AI capstone"], duration: "To be announced", mode: "To be announced", fees: "Speak with a counsellor", accent: "cyan",
  },
];

export const metrics = [
  { value: "3+", label: "Career-Focused Programs" },
  { value: "100+", label: "Projects & Practical Exercises" },
  { value: "Industry", label: "Relevant Curriculum" },
  { value: "Hands-On", label: "Learning Approach" },
];

export const features = [
  { icon: Layers3, title: "Industry-Relevant Curriculum", text: "Learn technologies and concepts aligned with modern technology careers." },
  { icon: Blocks, title: "Hands-On Projects", text: "Build practical projects instead of learning only through theory." },
  { icon: GraduationCap, title: "Mentor-Led Learning", text: "Learn with structured guidance and support." },
  { icon: BrainCircuit, title: "AI-First Approach", text: "Understand how AI is changing software development and business." },
  { icon: BriefcaseBusiness, title: "Career-Oriented Skills", text: "Focus on practical skills you can demonstrate through projects and portfolios." },
  { icon: Rocket, title: "Build Your Portfolio", text: "Create real projects that showcase your capabilities." },
];

export const journey = [
  ["01", "Learn", "Understand the fundamentals."], ["02", "Practice", "Solve problems and complete guided exercises."],
  ["03", "Build", "Create real-world projects."], ["04", "Deploy", "Take projects from development to deployment."],
  ["05", "Showcase", "Build a portfolio and demonstrate your skills."], ["06", "Grow", "Continue learning and advance your career."],
] as const;

export const technologies = ["React", "JavaScript", "TypeScript", "Node.js", "Python", "Git", "GitHub", "MongoDB", "SQL", "Docker", "AWS", "OpenAI", "APIs", "Pandas", "NumPy", "TensorFlow / PyTorch"];

export const projects = [
  { icon: Bot, title: "AI-powered application", stack: "LLMs · APIs · React", level: "Advanced", description: "A contextual AI product built around a useful end-to-end workflow." },
  { icon: Code2, title: "Full-stack commerce platform", stack: "React · Node.js · SQL", level: "Intermediate", description: "A complete customer journey with catalogue, cart and order flows." },
  { icon: TerminalSquare, title: "SaaS operations dashboard", stack: "TypeScript · APIs · Data", level: "Intermediate", description: "A decision-ready interface for monitoring product and business metrics." },
  { icon: Waypoints, title: "AI automation workflow", stack: "Agents · Webhooks · APIs", level: "Advanced", description: "A reliable multi-step workflow connecting AI with business systems." },
  { icon: Cpu, title: "Machine learning project", stack: "Python · Pandas · ML", level: "Advanced", description: "A documented model pipeline from data preparation to evaluation." },
  { icon: GitBranch, title: "Developer portfolio", stack: "React · Git · Deployment", level: "Foundation", description: "A fast, accessible portfolio that communicates real technical ability." },
];

export const faqs = [
  ["Who can join these courses?", "College students, fresh graduates, working professionals, career switchers and developers looking to upgrade their skills."],
  ["Do I need prior coding experience?", "No. Each program starts with the required foundations and progresses through guided practice."],
  ["What is Full Stack Web Development?", "It is the practice of building both the interface people use and the server, APIs and databases behind it."],
  ["What will I learn in AI Automation?", "You will learn to combine AI models, prompts, APIs and automation tools into practical workflows."],
  ["What is DSAI?", "DSAI is Data Science & Artificial Intelligence: analysing data, developing models and understanding modern AI systems."],
  ["Are projects included?", "Yes. Practical exercises and projects are central to the learning approach."],
  ["Is the course beginner friendly?", "Yes. Beginners can start with structured fundamentals before moving into applied work."],
  ["How does the counselling process work?", "Share your goals through the enquiry form. A counsellor will discuss the most relevant program, learning mode and next steps."],
  ["What learning modes are available?", "Current learning modes will be confirmed during counselling as schedules and batches are finalised."],
  ["How can I enquire about fees and batches?", "Submit the counselling form with your preferred course. The team will share the latest details directly."],
] as const;

export const iconSet = { Sparkles };
