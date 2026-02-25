"use client";

import { useEffect, useRef } from "react";
import { experiences } from "@/lib/data";

export default function ExperienceSection() {
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
            id="experience"
            ref={ref}
            className="py-24 px-6 border-t bg-background"
            style={{ borderColor: "var(--tf-border)" }}
        >
            <div className="max-w-6xl mx-auto">

                {/* Divider + Label */}
                <div className="tf-fade flex items-center gap-4 mb-16">
                    <div className="tf-divider" />
                    <span className="section-label">Experience</span>
                    <div className="tf-divider" />
                </div>

                {/* Rows */}
                <div>
                    {experiences.map((exp, i) => (
                        <div
                            key={i}
                            id={`experience-${i}`}
                            className="tf-fade group border-t last:border-b"
                            style={{
                                borderColor: "var(--tf-border)",
                                transitionDelay: `${i * 80}ms`,
                            }}
                        >
                            <div
                                className="py-7 grid grid-cols-[3rem_1fr_auto] sm:grid-cols-[3rem_1fr_1fr_auto] gap-4 items-start -mx-6 px-6 cursor-default transition-colors hover-row"
                            >
                                {/* Number */}
                                <span className="project-number pt-0.5">
                                    {String(i + 1).padStart(2, "0")}
                                </span>

                                {/* Role + company */}
                                <div>
                                    <p className="text-sm font-semibold text-foreground mb-0.5 group-hover:text-primary transition-colors">
                                        {exp.role}
                                    </p>
                                    <p className="text-xs text-primary">{exp.company}</p>
                                </div>

                                {/* Description */}
                                <p className="hidden sm:block text-xs text-muted-foreground leading-relaxed max-w-sm">
                                    {exp.description}
                                </p>

                                {/* Period + tags */}
                                <div className="text-right">
                                    <p className="text-xs font-mono text-muted-foreground/40 mb-2 whitespace-nowrap">
                                        {exp.period}
                                    </p>
                                    <div className="flex flex-wrap gap-1 justify-end">
                                        {exp.tags.map((tag) => (
                                            <span key={tag} className="tag-pill">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
