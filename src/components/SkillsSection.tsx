"use client";

import { useEffect, useRef, useState } from "react";
import { skillCategories } from "@/lib/data";

export default function SkillsSection() {
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        const obs = new IntersectionObserver(
            (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
            { threshold: 0.08 }
        );
        ref.current?.querySelectorAll('[class*="tf-fade"]').forEach((el) => obs.observe(el));
        return () => obs.disconnect();
    }, []);

    return (
        <section id="skills" ref={ref} className="py-16 px-6 bg-background">
            <div className="max-w-6xl mx-auto">

                {/* Section Label - Clean & Simple */}
                <div className="tf-fade-left mb-16 px-1">
                    <span className="text-primary font-mono text-[10px] uppercase tracking-[0.4em] font-bold">02 — Tech Stack</span>
                </div>

                <div className="tf-fade-left mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
                        What <span className="text-primary opacity-80">I Use.</span>
                    </h2>
                </div>

                {/* Skills Grid - More Breathing Room */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((cat, ci) => (
                        <div
                            key={ci}
                            className="tf-fade-up flex flex-col gap-5 p-8 rounded-2xl border border-black/5 dark:border-white/5 hover:border-primary/20 transition-colors duration-500 bg-black/[0.01] dark:bg-white/[0.01]"
                            style={{ transitionDelay: `${ci * 80}ms` }}
                        >
                            {/* Category Header */}
                            <h3 className="text-[11px] font-bold tracking-[0.2em] text-foreground/40 uppercase font-mono">
                                {cat.title}
                            </h3>

                            {/* Items Container */}
                            <div className="space-y-4">
                                {cat.subCategories ? (
                                    cat.subCategories.map((sub, si) => (
                                        <div key={si} className="space-y-1.5">
                                            <p className="text-[10px] font-bold text-primary/40 uppercase tracking-widest">
                                                {sub.name}
                                            </p>
                                            <div className="flex flex-wrap gap-x-4 gap-y-2">
                                                {sub.items.map((item) => (
                                                    <span key={item} className="text-[14px] font-medium text-foreground/80 hover:text-primary transition-colors cursor-default">
                                                        {item}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="flex flex-wrap gap-x-5 gap-y-2.5">
                                        {cat.items?.map((item) => (
                                            <span key={item} className="text-[14px] font-medium text-foreground/80 hover:text-primary transition-colors cursor-default">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
