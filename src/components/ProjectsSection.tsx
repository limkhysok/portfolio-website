"use client";

import { useEffect, useRef, useState } from "react";
import { Github, ArrowUpRight, CalendarDays } from "lucide-react";
import { projects, type Project } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";

const ALL = "All";
const CATEGORIES = Array.from(new Set(projects.map((p) => p.category)));

export default function ProjectsSection() {
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
        return () => mo.disconnect();
    }, []);

    return (
        <section id="projects" className="py-24 px-6 bg-background">
            <div className="max-w-6xl mx-auto">

                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <span className="text-primary font-mono text-[10px] uppercase tracking-[0.4em] font-bold">03 — Projects</span>
                    <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter mt-4 display-text">
                        MY <span className="text-primary">PROJECTS.</span>
                    </h2>
                </motion.div>

                {/* Advanced Filtering UI */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-10 mb-20 border-b border-primary/5 pb-10">
                    <p className="text-muted-foreground/60 text-sm max-w-sm font-medium leading-relaxed">
                        A curated selection of my work across various platforms and technologies.
                    </p>

                    <div className="flex flex-wrap gap-3">
                        {[ALL, ...CATEGORIES].map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActive(cat)}
                                className={`group relative px-6 py-3 rounded-xl text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-500 overflow-hidden ${active === cat ? "text-black" : "text-muted-foreground/40 hover:text-primary"
                                    }`}
                            >
                                <span className="relative z-10">{cat}</span>
                                {active === cat && (
                                    <motion.div
                                        layoutId="active-pill"
                                        className="absolute inset-0 bg-primary rounded-xl shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)]"
                                        transition={{ type: "spring", bounce: 0.25, duration: 0.6 }}
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* ── Card grid with Framer Motion ── */}
                <motion.div
                    layout
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[400px]"
                >
                    <AnimatePresence mode="popLayout">
                        {filtered.map((project, i) => (
                            <ProjectCard
                                key={project.title}
                                project={project}
                                isDark={isDark}
                                index={i}
                            />
                        ))}
                    </AnimatePresence>
                </motion.div>

            </div>
        </section>
    );
}

function ProjectCard({ project, isDark, index }: { project: Project; isDark: boolean; index: number }) {
    const cardBg = isDark ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.02)";

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{
                duration: 0.8,
                delay: index * 0.05,
                ease: [0.16, 1, 0.3, 1]
            }}
            className="group relative flex flex-col rounded-3xl overflow-hidden cursor-pointer hover:-translate-y-4 hover:shadow-[0_45px_100px_-20px_rgba(0,0,0,0.3)] transition-all duration-700 h-full"
            style={{ background: cardBg }}
            onClick={() => window.open(project.link, "_blank", "noopener,noreferrer")}
        >
            <div className="p-8 flex flex-col h-full border border-black/5 dark:border-white/5 group-hover:border-primary/40 group-hover:bg-primary/[0.04] transition-all duration-700 rounded-3xl">
                <div className="flex justify-between items-start mb-8">
                    <span className="text-[10px] font-bold text-primary/60 uppercase tracking-[0.2em] px-4 py-1.5 bg-primary/5 rounded-full border border-primary/10 group-hover:border-primary/40 group-hover:bg-primary/20 transition-all duration-500">
                        {project.category}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-foreground/5 flex items-center justify-center text-muted-foreground/30 group-hover:bg-primary group-hover:text-black group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
                        <ArrowUpRight className="w-6 h-6" />
                    </div>
                </div>

                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-500 tracking-tight">
                    {project.title}
                </h3>

                <p className="text-sm text-muted-foreground/60 leading-relaxed mb-10 flex-1 font-medium">
                    {project.description}
                </p>

                <div className="space-y-6">
                    <div className="flex flex-wrap gap-x-4 gap-y-2">
                        {project.techs.map((tech) => (
                            <span key={tech} className="text-[10px] font-mono font-bold text-muted-foreground/30 uppercase tracking-widest hover:text-primary transition-colors cursor-default">
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-muted-foreground/20 uppercase tracking-[0.2em] pt-6 border-t border-primary/5">
                        <CalendarDays className="w-3.5 h-3.5" />
                        {project.date}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
