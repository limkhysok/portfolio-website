"use client";

import { useEffect, useRef } from "react";
import { Briefcase, CalendarDays } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { experiences } from "@/lib/data";

export default function ExperienceSection() {
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
        <section id="experience" ref={sectionRef} className="py-24 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Section header */}
                <div className="section-animate text-center mb-16">
                    <p className="text-primary font-mono text-sm font-semibold tracking-widest uppercase mb-2">
                        Where I&apos;ve worked
                    </p>
                    <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
                        Experience
                    </h2>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent hidden sm:block" />

                    <div className="space-y-8">
                        {experiences.map((exp, i) => (
                            <div
                                key={i}
                                id={`experience-${i}`}
                                className="section-animate relative"
                                style={{ transitionDelay: `${i * 120}ms` }}
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-4 top-6 w-4 h-4 rounded-full bg-primary border-2 border-background shadow-md hidden sm:block z-10" />

                                {/* Card */}
                                <div className="sm:ml-16 rounded-2xl glass border border-border p-6 card-hover">
                                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                                        <div className="flex items-start gap-3">
                                            <div className="mt-0.5 w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                                                <Briefcase className="w-4 h-4 text-primary" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-lg text-foreground leading-tight">
                                                    {exp.role}
                                                </h3>
                                                <p className="text-primary font-semibold text-sm">
                                                    {exp.company}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono whitespace-nowrap">
                                            <CalendarDays className="w-3.5 h-3.5 shrink-0" />
                                            {exp.period}
                                        </div>
                                    </div>

                                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                        {exp.description}
                                    </p>

                                    <div className="flex flex-wrap gap-1.5">
                                        {exp.tags.map((tag) => (
                                            <Badge
                                                key={tag}
                                                variant="secondary"
                                                className="text-xs font-medium rounded-lg bg-primary/10 text-primary border-0 hover:bg-primary/20"
                                            >
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
