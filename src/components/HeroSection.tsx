"use client";

import { useEffect, useRef, useState } from "react";
import { Github, ArrowUpRight } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function HeroSection() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const obs = new IntersectionObserver(
            (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
            { threshold: 0.01 }
        );
        sectionRef.current?.querySelectorAll('[class*="tf-fade"]').forEach((el) => obs.observe(el));
        return () => obs.disconnect();
    }, []);

    const name = "Limkhy Sok.";

    return (
        <section ref={sectionRef} className="relative flex items-start pt-32 pb-16 md:pt-48 md:pb-32 px-6 overflow-hidden bg-transparent">
            <div className="max-w-6xl mx-auto w-full z-10 relative">
                <div className="flex flex-col justify-center">
                    <div className="space-y-10 max-w-4xl">
                        <div>
                            <div className="tf-fade-left mb-6">
                                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-mono text-primary uppercase tracking-widest">
                                    Available for New Projects
                                </span>
                            </div>

                            <h1 className="display-text text-6xl md:text-[120px] font-bold leading-[0.85] tracking-tighter mb-8 flex flex-wrap gap-x-[0.05em]">
                                {"Limkhy Sok".split("").map((char, i) => (
                                    <span
                                        key={i}
                                        className="tf-fade-up inline-block text-mask-shimmer"
                                        style={{ transitionDelay: `${i * 45}ms` }}
                                    >
                                        {char === " " ? "\u00A0" : char}
                                    </span>
                                ))}
                                <span
                                    className="tf-fade-up inline-block text-primary"
                                    style={{ transitionDelay: `${"Limkhy Sok".length * 45}ms` }}
                                >
                                    .
                                </span>
                            </h1>

                            <div className="tf-fade-up" style={{ transitionDelay: '600ms' }}>
                                <p className="max-w-xl text-lg md:text-2xl text-muted-foreground/80 leading-relaxed font-medium">
                                    {personalInfo.tagline} Building innovative solutions at{" "}
                                    <span className="text-foreground border-b border-primary/30">
                                        {(personalInfo as any).school}
                                    </span>.
                                </p>
                            </div>
                        </div>

                        <div className="tf-fade-up flex flex-wrap gap-6 items-center" style={{ transitionDelay: '800ms' }}>
                            <button
                                onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
                                className="tf-btn tf-btn-accent px-8 py-4 text-sm font-bold uppercase tracking-widest"
                            >
                                View my work
                                <ArrowUpRight className="w-5 h-5 ml-2" />
                            </button>
                            <a
                                href={personalInfo.github}
                                target="_blank"
                                rel="noopener"
                                className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors group"
                            >
                                <Github className="w-5 h-5 opacity-40 group-hover:opacity-100" />
                                <span>GitHub Profile</span>
                            </a>
                        </div>

                        <div className="tf-fade-up mt-24" style={{ transitionDelay: '1000ms' }}>
                            <button
                                onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
                                className="flex items-center gap-4 text-[10px] font-mono text-muted-foreground/30 hover:text-primary transition-all uppercase tracking-[0.2em] group"
                            >
                                <span className="opacity-50">Scroll to discover</span>
                                <div className="w-12 h-[1px] bg-primary/20 relative overflow-hidden">
                                    <div className="absolute top-0 left-0 h-full bg-primary -translate-x-full group-hover:translate-x-full transition-transform duration-[1.5s] ease-in-out infinite"
                                        style={{ animation: 'grow-bar 2s ease-in-out infinite' }}
                                    />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
