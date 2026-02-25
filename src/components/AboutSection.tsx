"use client";

import { useEffect, useRef } from "react";
import { MapPin, Mail } from "lucide-react";
import { personalInfo, stats } from "@/lib/data";

export default function AboutSection() {
    const ref = useRef<HTMLElement>(null);
    useEffect(() => {
        const obs = new IntersectionObserver(
            (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
            { threshold: 0.1 }
        );
        ref.current?.querySelectorAll(".tf-fade").forEach((el) => obs.observe(el));
        return () => obs.disconnect();
    }, []);

    return (
        <section id="about" ref={ref} className="py-24 px-6 bg-background">
            <div className="max-w-6xl mx-auto">

                {/* Divider + Label */}
                <div className="tf-fade flex items-center gap-4 mb-16">
                    <div className="tf-divider" />
                    <span className="section-label">About</span>
                    <div className="tf-divider" />
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* Left */}
                    <div className="tf-fade">
                        <h2 className="section-heading mb-6">
                            I craft experiences<br />
                            <span className="text-primary">people love to use.</span>
                        </h2>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                            {personalInfo.bio}
                        </p>
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                                {personalInfo.location}
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Mail className="w-3.5 h-3.5 text-primary shrink-0" />
                                {personalInfo.email}
                            </div>
                        </div>
                    </div>

                    {/* Right — stats */}
                    <div
                        className="tf-fade grid grid-cols-2 gap-px overflow-hidden rounded-xl border"
                        style={{ background: "var(--tf-border)", borderColor: "var(--tf-border)" }}
                    >
                        {stats.map((s, i) => (
                            <div
                                key={i}
                                id={`stat-${i}`}
                                className="p-6 bg-background hover:bg-muted transition-colors"
                            >
                                <p className="text-4xl font-black mb-1 text-primary">{s.value}</p>
                                <p className="text-xs text-muted-foreground leading-snug">{s.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Traits */}
                <div className="tf-fade flex flex-wrap gap-2 mt-14">
                    {["Problem Solver", "Team Player", "Fast Learner", "Open Source Contributor", "Detail-Oriented"].map((t) => (
                        <span key={t} className="tag-pill">{t}</span>
                    ))}
                </div>
            </div>
        </section>
    );
}
