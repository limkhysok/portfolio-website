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
        ref.current?.querySelectorAll(".tf-fade").forEach((el) => io.observe(el));

        return () => { io.disconnect(); mo.disconnect(); };
    }, []);

    return (
        <section
            id="projects"
            ref={ref}
            className="py-24 px-6 border-t"
            style={{ borderColor: "var(--tf-border)", background: "var(--muted)" }}
        >
            <div className="max-w-6xl mx-auto">

                {/* Divider + Label */}
                <div className="tf-fade flex items-center gap-4 mb-16">
                    <div className="tf-divider" />
                    <span className="section-label">Projects</span>
                    <div className="tf-divider" />
                </div>

                {/* Heading + category filter */}
                <div className="tf-fade flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-10">
                    <h2 className="section-heading">
                        Recent work<span className="text-primary">.</span>
                    </h2>

                    <div className="flex flex-wrap gap-1.5">
                        {[ALL, ...CATEGORIES].map((cat) => (
                            <button
                                key={cat}
                                id={`filter-${cat.toLowerCase()}`}
                                onClick={() => setActive(cat)}
                                className="px-3 py-1.5 rounded-md text-xs font-medium border transition-all duration-200"
                                style={
                                    active === cat
                                        ? {
                                            background: "var(--primary)",
                                            borderColor: "var(--primary)",
                                            color: "var(--primary-foreground)",
                                            fontWeight: 700,
                                        }
                                        : {
                                            borderColor: "var(--tf-border)",
                                            color: "var(--muted-foreground)",
                                            background: "transparent",
                                        }
                                }
                            >
                                {cat === ALL ? "All" : `${CATEGORY_ICON[cat as Project["category"]]} ${cat}`}
                            </button>
                        ))}
                    </div>
                </div>

                {/* ── Card grid ── */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {filtered.map((project, i) => (
                        <ProjectCard
                            key={project.title}
                            project={project}
                            isDark={isDark}
                            delay={i * 55}
                        />
                    ))}
                </div>

                {/* GitHub CTA */}
                <div className="tf-fade mt-10 flex justify-end">
                    <a
                        id="projects-github-cta"
                        href="https://github.com/limkhysok"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tf-btn"
                    >
                        <Github className="w-3.5 h-3.5" />
                        View all on GitHub
                        <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                </div>
            </div>
        </section>
    );
}

/* ═══════════════════════════════════════════════════
   PROJECT CARD
   — borderless, site-palette only (black/white/lime)
   — lime accent bar slides in from left on hover
   — card lifts with neutral shadow, no color glow
   ═══════════════════════════════════════════════════ */
function ProjectCard({
    project,
    isDark,
    delay,
}: {
    project: Project;
    isDark: boolean;
    delay: number;
}) {
    const cardBg = isDark ? "#111111" : "#ffffff";
    const borderColor = isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.07)";
    const gridLine = isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)";
    const textMain = isDark ? "#e0e0e0" : "#0a0a0a";
    const textMuted = isDark ? "#555555" : "#9ca3af";
    const tagBorder = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)";
    const tagColor = isDark ? "#444444" : "#b0b0b0";
    const dateMono = isDark ? "#2e2e2e" : "#d1d5db";
    const linkColor = isDark ? "#383838" : "#c0c0c0";
    const shadow = isDark
        ? "0 4px 24px rgba(0,0,0,0.50)"
        : "0 4px 24px rgba(0,0,0,0.08)";

    return (
        <div
            id={`project-${project.title.toLowerCase().replace(/\s+/g, "-")}`}
            className="tf-fade group relative flex flex-col rounded-xl overflow-hidden cursor-pointer"
            style={{
                background: cardBg,
                border: "none",
                transitionDelay: `${delay}ms`,
                transition: "transform 0.28s ease, box-shadow 0.28s ease",
            }}
            onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-5px)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = shadow;
            }}
            onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
            }}
            onClick={() => window.open(project.link, "_blank", "noopener,noreferrer")}
        >
            {/* ── Lime accent bar — full width, slides in on hover ── */}
            <div
                className="absolute top-0 left-0 h-[2px] w-0 group-hover:w-full"
                style={{
                    background: "var(--primary)",
                    transition: "width 0.35s cubic-bezier(0.4,0,0.2,1)",
                }}
                aria-hidden="true"
            />

            {/* ── Inner dot-grid texture ── */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: `radial-gradient(circle, ${gridLine} 1px, transparent 1px)`,
                    backgroundSize: "20px 20px",
                    opacity: 0.8,
                }}
                aria-hidden="true"
            />

            {/* ── Content ── */}
            <div className="relative z-10 flex flex-col flex-1 p-5">

                {/* Category tag + status */}
                <div className="flex items-center justify-between gap-2 mb-4">
                    <span
                        className="inline-flex items-center gap-1.5 text-[11px] font-semibold"
                        style={{ color: textMuted }}
                    >
                        <span>{CATEGORY_ICON[project.category]}</span>
                        {project.category}
                    </span>

                    {project.status && (
                        <span
                            className="flex items-center gap-1.5 text-[10px] font-semibold px-2 py-0.5 rounded-full"
                            style={
                                project.status === "Active"
                                    ? { color: "#22c55e", background: "rgba(34,197,94,0.08)" }
                                    : { color: "#f59e0b", background: "rgba(245,158,11,0.08)" }
                            }
                        >
                            <span
                                className="w-1.5 h-1.5 rounded-full"
                                style={{
                                    background: project.status === "Active" ? "#22c55e" : "#f59e0b",
                                }}
                            />
                            {project.status}
                        </span>
                    )}
                </div>

                {/* Title */}
                <h3
                    className="font-bold text-[15px] leading-snug mb-2"
                    style={{ color: textMain }}
                >
                    <span
                        className="group-hover:text-primary transition-colors duration-200"
                        style={{ transition: "color 0.2s" }}
                    >
                        {project.title}
                    </span>
                </h3>

                {/* Description */}
                <p
                    className="text-[12px] leading-relaxed mb-5 flex-1"
                    style={{ color: textMuted }}
                >
                    {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.techs.map((tech) => (
                        <span
                            key={tech}
                            className="px-2 py-0.5 rounded text-[11px] font-mono"
                            style={{
                                border: `1px solid ${tagBorder}`,
                                color: tagColor,
                                background: "transparent",
                            }}
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Footer: date + source link */}
                <div
                    className="flex items-center justify-between pt-4"
                    style={{ borderTop: `1px solid ${borderColor}` }}
                >
                    <div
                        className="flex items-center gap-1.5 text-[11px] font-mono"
                        style={{ color: dateMono }}
                    >
                        <CalendarDays className="w-3 h-3" />
                        {project.date}
                    </div>

                    <a
                        id={`project-link-${project.title.toLowerCase().replace(/\s+/g, "-")}`}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1 text-[11px] font-medium"
                        style={{ color: linkColor, transition: "color 0.2s" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--primary)")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = linkColor)}
                    >
                        <Github className="w-3.5 h-3.5" />
                        Source
                        <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    </a>
                </div>
            </div>
        </div>
    );
}
