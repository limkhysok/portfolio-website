"use client";

import { useEffect, useRef } from "react";
import { skills } from "@/lib/data";

export default function SkillsSection() {
    const ref = useRef<HTMLElement>(null);
    useEffect(() => {
        const obs = new IntersectionObserver(
            (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
            { threshold: 0.08 }
        );
        ref.current?.querySelectorAll(".tf-fade").forEach((el) => obs.observe(el));
        return () => obs.disconnect();
    }, []);

    return (
        <section
            id="skills"
            ref={ref}
            className="py-24 px-6 border-t bg-muted/30"
            style={{ borderColor: "var(--tf-border)" }}
        >
            <div className="max-w-6xl mx-auto">

                {/* Divider + Label */}
                <div className="tf-fade flex items-center gap-4 mb-16">
                    <div className="tf-divider" />
                    <span className="section-label">Tech Stack</span>
                    <div className="tf-divider" />
                </div>

                {/* Skill groups */}
                <div className="grid md:grid-cols-3 gap-6">
                    {skills.map((group, gi) => (
                        <div
                            key={gi}
                            id={`skill-group-${gi}`}
                            className="tf-fade tf-card p-6"
                            style={{ transitionDelay: `${gi * 80}ms` }}
                        >
                            <div className="flex items-center gap-2.5 mb-6">
                                <span className="text-xl">{group.icon}</span>
                                <h3 className="text-sm font-semibold text-foreground">{group.category}</h3>
                            </div>

                            <div className="space-y-5">
                                {group.items.map((skill, si) => (
                                    <div key={si} id={`skill-${gi}-${si}`}>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-xs text-muted-foreground font-medium">{skill.name}</span>
                                            <span className="text-xs font-mono text-primary">{skill.level}%</span>
                                        </div>
                                        {/* Track */}
                                        <div
                                            className="h-px w-full rounded-full overflow-visible relative"
                                            style={{ background: "var(--tf-border)" }}
                                        >
                                            <div
                                                className="skill-bar absolute top-0 left-0 h-px rounded-full"
                                                style={{
                                                    width: `${skill.level}%`,
                                                    background: "var(--primary)",
                                                    boxShadow: "0 0 6px color-mix(in srgb, var(--primary) 60%, transparent)",
                                                    animationDelay: `${gi * 200 + si * 80}ms`,
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional tags */}
                <div className="tf-fade mt-12">
                    <p className="text-xs text-muted-foreground/50 mb-5 font-mono tracking-wider uppercase">
                        Also familiar with
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {[
                            "Python", "REST APIs", "JWT Auth", "Google OAuth",
                            "Celery", "Nginx", "AWS S3", "Figma",
                            "Apache ECharts", "Pandas", "SQLAlchemy", "WebSockets",
                            "PyQt6", "Spring Boot", "Kotlin", "C#",
                        ].map((tech) => (
                            <span key={tech} className="tag-pill">{tech}</span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
