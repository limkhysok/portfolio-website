"use client";

import { useEffect, useRef } from "react";
import { skills } from "@/lib/data";

export default function SkillsSection() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("in-view");
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = sectionRef.current?.querySelectorAll(".section-animate");
        elements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section id="skills" ref={sectionRef} className="py-24 px-4 bg-muted/30">
            <div className="max-w-6xl mx-auto">
                {/* Section header */}
                <div className="section-animate text-center mb-16">
                    <p className="text-primary font-mono text-sm font-semibold tracking-widest uppercase mb-2">
                        What I work with
                    </p>
                    <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
                        Skills & Tech Stack
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {skills.map((group, gi) => (
                        <div
                            key={gi}
                            id={`skill-group-${gi}`}
                            className="section-animate p-6 rounded-2xl glass border border-border card-hover"
                            style={{ transitionDelay: `${gi * 100}ms` }}
                        >
                            {/* Category header */}
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-2xl">{group.icon}</span>
                                <h3 className="font-bold text-lg text-foreground">
                                    {group.category}
                                </h3>
                            </div>

                            {/* Skill bars */}
                            <div className="space-y-5">
                                {group.items.map((skill, si) => (
                                    <div key={si} id={`skill-${gi}-${si}`}>
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-sm font-medium text-foreground">
                                                {skill.name}
                                            </span>
                                            <span className="text-xs font-mono text-primary font-semibold">
                                                {skill.level}%
                                            </span>
                                        </div>
                                        {/* Bar track */}
                                        <div className="h-1.5 w-full bg-border rounded-full overflow-hidden">
                                            <div
                                                className="h-full rounded-full skill-bar"
                                                style={{
                                                    width: `${skill.level}%`,
                                                    background: `linear-gradient(90deg, 
                            oklch(0.55 0.22 265), 
                            oklch(0.65 0.18 220)
                          )`,
                                                    animationDelay: `${gi * 200 + si * 100}ms`,
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Tech badges cloud */}
                <div className="section-animate mt-12 text-center">
                    <p className="text-sm text-muted-foreground mb-6 font-medium">
                        Also familiar with
                    </p>
                    <div className="flex flex-wrap justify-center gap-2">
                        {[
                            "Python", "REST APIs", "JWT Auth", "Google OAuth",
                            "Celery", "Nginx", "AWS S3", "Figma",
                            "Apache ECharts", "Pandas", "SQLAlchemy", "WebSockets",
                        ].map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-background border border-border text-muted-foreground hover:border-primary/40 hover:text-primary transition-colors cursor-default"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
