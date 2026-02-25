"use client";

import { useEffect, useRef } from "react";
import { MapPin, Mail } from "lucide-react";
import { personalInfo, stats } from "@/lib/data";

export default function AboutSection() {
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
        <section id="about" ref={sectionRef} className="py-24 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Section header */}
                <div className="section-animate text-center mb-16">
                    <p className="text-primary font-mono text-sm font-semibold tracking-widest uppercase mb-2">
                        Get to know me
                    </p>
                    <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
                        About Me
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Avatar / graphic */}
                    <div className="section-animate flex justify-center">
                        <div className="relative">
                            {/* Outer glow ring */}
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 to-purple-500/20 blur-2xl scale-110" />
                            {/* Main card */}
                            <div className="relative w-72 h-80 rounded-3xl glass border border-border overflow-hidden flex flex-col items-center justify-center gap-4 p-8">
                                {/* Avatar circle */}
                                <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center text-4xl font-black text-white shadow-xl float-anim">
                                    {personalInfo.avatarInitials}
                                </div>
                                {/* Name */}
                                <div className="text-center">
                                    <p className="font-bold text-xl text-foreground">{personalInfo.name}</p>
                                    <p className="text-sm text-muted-foreground mt-0.5">{personalInfo.title}</p>
                                </div>
                                {/* Location & email chips */}
                                <div className="flex flex-col gap-2 w-full">
                                    <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/60 text-xs text-muted-foreground">
                                        <MapPin className="w-3 h-3 text-primary shrink-0" />
                                        {personalInfo.location}
                                    </div>
                                    <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/60 text-xs text-muted-foreground">
                                        <Mail className="w-3 h-3 text-primary shrink-0" />
                                        {personalInfo.email}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Text content */}
                    <div className="section-animate space-y-6">
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            {personalInfo.bio}
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            {stats.map((stat, i) => (
                                <div
                                    key={i}
                                    id={`stat-${i}`}
                                    className="p-4 rounded-2xl glass border border-border card-hover"
                                >
                                    <p className="text-3xl font-black gradient-text">{stat.value}</p>
                                    <p className="text-xs text-muted-foreground mt-1 font-medium">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-2 pt-2">
                            {[
                                "Problem Solver",
                                "Team Player",
                                "Fast Learner",
                                "Open Source Fan",
                            ].map((trait) => (
                                <span
                                    key={trait}
                                    className="px-3 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20"
                                >
                                    {trait}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
