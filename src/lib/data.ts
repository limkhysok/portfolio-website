// ============================================================
// 🎨 PORTFOLIO DATA — Edit everything here to personalize!
// ============================================================

export const personalInfo = {
  name: "Your Name",
  title: "Full Stack Developer",
  tagline: "I build fast, scalable, and beautiful web applications.",
  location: "Kuala Lumpur, Malaysia",
  email: "hello@yourname.dev",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername",
  resume: "/resume.pdf",
  avatarInitials: "YN",
  bio: `Passionate Full Stack Developer with a knack for building clean, performant, and user-centric applications. 
  I love turning complex problems into elegant solutions, and I'm always exploring the cutting edge of web technology.`,
};

export const skills = [
  {
    category: "Frontend",
    icon: "🎨",
    items: [
      { name: "React / Next.js", level: 92 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Framer Motion", level: 75 },
    ],
  },
  {
    category: "Backend",
    icon: "⚙️",
    items: [
      { name: "Django / DRF", level: 85 },
      { name: "Node.js / Express", level: 78 },
      { name: "PostgreSQL", level: 82 },
      { name: "Redis", level: 70 },
    ],
  },
  {
    category: "DevOps & Tools",
    icon: "🚀",
    items: [
      { name: "Docker", level: 75 },
      { name: "Git / GitHub", level: 90 },
      { name: "Vercel / Railway", level: 85 },
      { name: "Linux / CLI", level: 80 },
    ],
  },
];

export const experiences = [
  {
    role: "Full Stack Developer",
    company: "Your Company",
    period: "2024 – Present",
    description:
      "Developed and maintained scalable web applications using React, Django, and PostgreSQL. Led the migration to a microservices architecture, reducing API response time by 40%.",
    tags: ["React", "Django", "PostgreSQL", "Docker"],
  },
  {
    role: "Frontend Developer",
    company: "Another Company",
    period: "2022 – 2024",
    description:
      "Built responsive UIs for high-traffic SaaS platforms serving 50k+ users. Implemented design systems from scratch and improved Core Web Vitals scores across the board.",
    tags: ["Next.js", "TypeScript", "GraphQL", "Figma"],
  },
  {
    role: "Junior Developer",
    company: "Startup / Freelance",
    period: "2021 – 2022",
    description:
      "Freelanced for multiple startups, building landing pages, admin dashboards, and REST APIs. Gained hands-on experience with full project lifecycles.",
    tags: ["React", "Node.js", "MongoDB", "CSS"],
  },
];

export const projects = [
  {
    title: "PyAnalypt",
    description:
      "A full-featured data analysis platform with authentication, dashboards, and data visualization powered by Apache ECharts and Django REST Framework.",
    tags: ["Next.js", "Django", "PostgreSQL", "ECharts"],
    github: "https://github.com/yourusername/pyanalypt",
    live: "https://pyanalypt.vercel.app",
    featured: true,
    gradient: "from-violet-500 to-indigo-500",
  },
  {
    title: "P2P Currency Exchange",
    description:
      "A university thesis project implementing a peer-to-peer currency exchange platform with race-condition-safe wallet transactions using Django atomic operations.",
    tags: ["Django", "React", "PostgreSQL", "JWT"],
    github: "https://github.com/yourusername/p2p-exchange",
    live: "",
    featured: true,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Task Automation Suite",
    description:
      "A PyQt6 desktop app for automating repetitive workflows—managing tasks, schedules, and video posting with a clean card-based UI.",
    tags: ["Python", "PyQt6", "SQLite", "Automation"],
    github: "https://github.com/yourusername/task-suite",
    live: "",
    featured: false,
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    title: "Portfolio Website",
    description:
      "This portfolio! Built with Next.js 15, Shadcn UI, Tailwind CSS, and Framer Motion. Deployed on Vercel with dark mode support.",
    tags: ["Next.js", "Shadcn UI", "Tailwind", "Vercel"],
    github: "https://github.com/yourusername/portfolio-website",
    live: "https://yourname.vercel.app",
    featured: false,
    gradient: "from-pink-500 to-rose-500",
  },
];

export const stats = [
  { label: "Years of Experience", value: "3+" },
  { label: "Projects Completed", value: "20+" },
  { label: "Technologies Mastered", value: "15+" },
  { label: "Coffee Consumed", value: "∞" },
];
