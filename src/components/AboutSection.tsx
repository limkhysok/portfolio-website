"use client";

import { useEffect, useRef } from "react";
import { MapPin, Mail, School, Sparkles, Brain } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function AboutSection() {
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        const obs = new IntersectionObserver(
            (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
            { threshold: 0.1 }
        );
        ref.current?.querySelectorAll('[class*="tf-fade"]').forEach((el) => obs.observe(el));
        return () => obs.disconnect();
    }, []);

    return (
        <section id="about" ref={ref} className="pt-4 pb-24 px-6 bg-background">
            <div className="max-w-6xl mx-auto">

                {/* Header Label - Clean & Simple */}
                <div className="tf-fade mb-12">
                    <span className="text-primary font-mono text-[10px] uppercase tracking-[0.4em] font-bold">01 — About Me</span>
                </div>

                <div className="space-y-16">
                    {/* Main Content */}
                    <div className="tf-fade-left">
                        <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                            I am a Junior Developer<br />
                            <span className="text-primary opacity-80">exploring AI/ML & modern web.</span>
                        </h2>

                        <div className="grid md:grid-cols-3 gap-8 items-start">
                            <div className="md:col-span-2">
                                <p className="text-muted-foreground text-base leading-relaxed mb-6 italic">
                                    &quot;{personalInfo.bio}&quot;
                                </p>
                            </div>

                            {/* Quick Info - Clean Sidebar Style */}
                            <div className="space-y-4 pt-1">
                                <div className="flex items-center gap-3 text-sm text-muted-foreground/80">
                                    <School className="w-4 h-4 text-primary/60 shrink-0" />
                                    <span>{(personalInfo as any).school}</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-muted-foreground/80">
                                    <MapPin className="w-4 h-4 text-primary/60 shrink-0" />
                                    {personalInfo.location}
                                </div>
                                <div className="flex items-center gap-3 text-sm text-muted-foreground/80">
                                    <Mail className="w-4 h-4 text-primary/60 shrink-0" />
                                    {personalInfo.email}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* AI/ML & Focus Area - Minimalistic Card */}
                    <div className="tf-fade-right grid md:grid-cols-2 gap-6">
                        <div className="p-8 rounded-2xl bg-muted/30 border border-white/[0.05] flex flex-col gap-4">
                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                <Brain className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-foreground mb-2">AI & Machine Learning</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Passionate about Large Language Models and Computer Vision. I focus on building intelligent interfaces that bridge the gap between AI and users.
                                </p>
                            </div>
                        </div>

                        <div className="p-8 rounded-2xl bg-muted/30 border border-white/[0.05] flex flex-col gap-4">
                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                <Sparkles className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-foreground mb-2">Clean Code & Exploration</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    I believe in writing maintainable, architecture-first code. I spend my time exploring new tech stacks to find the most efficient tools for the job.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Traits - Minimal Pills */}
                    <div className="tf-fade-up flex flex-wrap gap-x-6 gap-y-3 pt-4 opacity-50">
                        {["Problem Solver", "AI/ML Explorer", "Fast Learner", "Continuous Learner", "Detail-Oriented"].map((t) => (
                            <span key={t} className="text-[11px] font-mono uppercase tracking-widest flex items-center gap-2">
                                <span className="w-1 h-1 rounded-full bg-primary" />
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
