"use client";

import { useEffect, useRef, useState } from "react";
import { Github, ArrowUpRight, CalendarDays } from "lucide-react";
import { projects, type Project } from "@/lib/data";

const ALL = "All";
const CATEGORIES = Array.from(new Set(projects.map((p) => p.category)));
const CATEGORY_ICON: Record<Project["category"], string> = {
    Web: "🌐",
    Desktop: "🖥️",
    Mobile: "📱",
    Game: "🎮",
    System: "⚙️",
};

export default function ProjectsSection() {
    const ref = useRef<HTMLElement>(null);
    const [active, setActive] = useState(ALL);
    const [isDark, setIsDark] = useState(false);

    const filtered = active === ALL
        ? projects
        : projects.filter((p) => p.category === active);

    useEffect(() => {
        const syncTheme = () => setIsDark(document.documentElement.classList.contains("dark"));
        syncTheme();
        const mo = new MutationObserver(syncTheme);
        mo.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

        const io = new IntersectionObserver(
            (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
            { threshold: 0.04 }
        );
        ref.current?.querySelectorAll('[class*="tf-fade"]').forEach((el) => io.observe(el));

        return () => { io.disconnect(); mo.disconnect(); };
    }, []);

    return (
        <section id="projects" ref={ref} className="py-16 px-6 bg-background">
            <div className="max-w-6xl mx-auto">

                {/* Section Label - Clean & Simple */}
                <div className="tf-fade-left mb-16">
                    <span className="text-primary font-mono text-[10px] uppercase tracking-[0.4em] font-bold">03 — Projects</span>
                </div>

                {/* Heading + Filter Header */}
                <div className="tf-fade-left flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
                        My <span className="text-primary opacity-80">Projects.</span>
                    </h2>

                    <div className="flex flex-wrap gap-2">
                        {[ALL, ...CATEGORIES].map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActive(cat)}
                                className={`px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all duration-300 border ${active === cat
                                    ? "bg-primary border-primary text-black shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)]"
                                    : "border-white/10 text-muted-foreground hover:border-primary/50"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* ── Card grid ── */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filtered.map((project, i) => (
                        <ProjectCard
                            key={project.title}
                            project={project}
                            isDark={isDark}
                            delay={i * 55}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}

function ProjectCard({ project, isDark, delay }: { project: Project; isDark: boolean; delay: number }) {
    const cardBg = isDark ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.02)";

    return (
        <div
            className="tf-fade-up tf-card-slow group relative flex flex-col rounded-3xl overflow-hidden cursor-pointer hover:-translate-y-4 hover:shadow-[0_45px_100px_-20px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_45px_100px_-20px_rgba(0,0,0,0.7)]"
            style={{
                background: cardBg,
                transitionDelay: `${delay}ms`,
            }}
            onClick={() => window.open(project.link, "_blank", "noopener,noreferrer")}
        >
            <div className="p-8 flex flex-col h-full border border-black/5 dark:border-white/5 tf-card-slow group-hover:border-primary/40 group-hover:bg-primary/[0.03] rounded-3xl">
                <div className="flex justify-between items-start mb-6">
                    <span className="text-[10px] font-bold text-primary/60 uppercase tracking-widest px-3 py-1 bg-primary/5 rounded-full border border-primary/10 group-hover:border-primary/30 group-hover:bg-primary/10 tf-card-slow">
                        {project.category}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-muted-foreground/30 group-hover:bg-primary group-hover:text-black group-hover:scale-110 group-hover:rotate-12 tf-card-slow">
                        <ArrowUpRight className="w-5 h-5" />
                    </div>
                </div>

                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                </h3>

                <p className="text-sm text-muted-foreground/80 leading-relaxed mb-8 flex-1">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                    {project.techs.map((tech) => (
                        <span key={tech} className="text-[10px] font-mono text-muted-foreground/40 uppercase tracking-tighter">
                            #{tech}
                        </span>
                    ))}
                </div>

                <div className="flex items-center gap-2 text-[10px] font-mono text-muted-foreground/20">
                    <CalendarDays className="w-3 h-3" />
                    {project.date}
                </div>
            </div>
        </div>
    );
}
