"use client";

import { useEffect, useRef } from "react";
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

    return (
        <section ref={sectionRef} className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden bg-transparent pt-32 pb-20">
            {/* Full-Screen Floating Tech Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-transparent" />

                {[
                    { icon: "python", label: "Python", top: "15%", left: "10%", delay: "0s", dur: "22s" },
                    { icon: "typescript", label: "TypeScript", top: "25%", left: "80%", delay: "2s", dur: "18s" },
                    { icon: "react", label: "React", top: "75%", left: "15%", delay: "4s", dur: "25s" },
                    { icon: "nextdotjs", label: "Next.js", top: "10%", left: "70%", delay: "1s", dur: "20s" },
                    { icon: "django", label: "Django", top: "60%", left: "85%", delay: "5s", dur: "30s" },
                    { icon: "kotlin", label: "Kotlin", top: "35%", left: "5%", delay: "3s", dur: "24s" },
                    { icon: "dotnet", label: "C#", top: "85%", left: "50%", delay: "6s", dur: "28s" },
                    { icon: "javascript", label: "JS", top: "5%", left: "40%", delay: "2.5s", dur: "21s" },
                    { icon: "postgresql", label: "PostgreSQL", top: "80%", left: "80%", delay: "5s", dur: "23s" },
                    { icon: "mysql", label: "MySQL", top: "45%", left: "10%", delay: "3.5s", dur: "20s" },
                    { icon: "mongodb", label: "MongoDB", top: "65%", left: "70%", delay: "4.5s", dur: "18s" },
                    { icon: "redis", label: "Redis", top: "20%", left: "90%", delay: "1.2s", dur: "24s" },
                    { icon: "postman", label: "Postman", top: "90%", left: "30%", delay: "6s", dur: "16s" },
                    { icon: "pandas", label: "Pandas", top: "30%", left: "75%", delay: "5.5s", dur: "27s" },
                    { icon: "selenium", label: "Selenium", top: "12%", left: "48%", delay: "4s", dur: "22s" },
                    { icon: "appium", label: "Appium", top: "70%", left: "8%", delay: "2.8s", dur: "26s" },
                    { icon: "docker", label: "Docker", top: "82%", left: "75%", delay: "1.8s", dur: "20s" },
                ].map((tech, i) => (
                    <div
                        key={i}
                        className="absolute flex items-center justify-center transition-opacity duration-1000"
                        style={{
                            top: tech.top,
                            left: tech.left,
                            animation: `float-random ${tech.dur} ease-in-out infinite`,
                            animationDelay: tech.delay,
                        }}
                    >
                        <div className="group relative pointer-events-auto">
                            <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-foreground/[0.03] border border-primary/5 backdrop-blur-[2px] flex items-center justify-center text-primary/20 group-hover:bg-primary/10 group-hover:text-primary group-hover:border-primary/20 transition-all duration-700">
                                <img
                                    src={`https://cdn.simpleicons.org/${tech.icon}/currentColor`}
                                    alt={tech.label}
                                    className="w-6 h-6 md:w-8 md:h-8 opacity-20 group-hover:opacity-100 transition-all duration-700"
                                />
                                <span className="absolute -bottom-8 text-[8px] font-mono uppercase tracking-[0.3em] text-primary/0 group-hover:text-primary/60 transition-all duration-700 whitespace-nowrap">
                                    {tech.label}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="max-w-4xl mx-auto w-full z-10 relative text-center">
                <div className="flex flex-col items-center">
                    <div className="space-y-10">

                        {/* Status Badge */}
                        <div className="tf-fade-up flex items-center justify-center">
                            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                </span>
                                <span className="text-[10px] font-mono font-bold text-primary uppercase tracking-widest">
                                    Available for New Projects
                                </span>
                            </div>
                        </div>

                        {/* Name - Centered */}
                        <h1 className="display-text text-6xl md:text-[120px] font-extrabold leading-[0.9] tracking-tighter">
                            <div className="tf-fade-up">
                                {"IT'S ME".split("").map((char, i) => (
                                    <span
                                        key={i}
                                        className="inline-block text-mask-shimmer"
                                        style={{ transitionDelay: `${i * 30}ms` }}
                                    >
                                        {char === " " ? "\u00A0" : char}
                                    </span>
                                ))}
                            </div>
                            <div className="tf-fade-up">
                                {"LIMKHY SOK".split("").map((char, i) => (
                                    <span
                                        key={i}
                                        className="inline-block text-primary"
                                        style={{ transitionDelay: `${(i + 6) * 35}ms` }}
                                    >
                                        {char === " " ? "\u00A0" : char}
                                    </span>
                                ))}
                                <span className="inline-block text-foreground">.</span>
                            </div>
                        </h1>

                        <div className="tf-fade-up space-y-10" style={{ transitionDelay: '600ms' }}>
                            <p className="text-xl md:text-2xl text-muted-foreground/80 leading-relaxed font-medium max-w-2xl mx-auto">
                                {personalInfo.tagline} Building from Phnom Penh at{" "}
                                <span className="text-foreground border-b border-primary/30">
                                    STEP Academy
                                </span>
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                <button
                                    onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
                                    className="tf-btn tf-btn-accent px-12 py-5 text-xs font-bold uppercase tracking-[0.2em] w-full sm:w-auto"
                                >
                                    Explore Work
                                    <ArrowUpRight className="w-5 h-5 ml-2" />
                                </button>
                                <a
                                    href={personalInfo.github}
                                    target="_blank"
                                    rel="noopener"
                                    className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] hover:text-primary transition-all group px-8 py-5 rounded-xl border border-transparent"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-foreground/5 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-all">
                                        <Github className="w-5 h-5" />
                                    </div>
                                    <span>GitHub Profile</span>
                                </a>
                            </div>
                        </div>

                        {/* Centered Scroll Indicator */}
                        <div className="tf-fade-up pt-20" style={{ transitionDelay: '900ms' }}>
                            <button
                                onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
                                className="flex flex-col items-center gap-4 group"
                            >
                                <span className="text-[10px] font-mono text-muted-foreground/30 uppercase tracking-[0.4em]">
                                    Scroll to discover
                                </span>
                                <div className="w-[1px] h-12 bg-primary/20 relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-full bg-primary h-full -translate-y-full group-hover:translate-y-full transition-transform duration-[2s] ease-in-out infinite"
                                        style={{ animation: 'scroll-indicator 2.5s ease-in-out infinite' }}
                                    />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes scroll-indicator {
                    0% { transform: translateY(-100%); }
                    50% { transform: translateY(100%); }
                    100% { transform: translateY(-100%); }
                }
                @keyframes float-random {
                    0%, 100% { transform: translate(0, 0) rotate(0deg); }
                    25% { transform: translate(15px, -25px) rotate(3deg); }
                    50% { transform: translate(-10px, -45px) rotate(-2deg); }
                    75% { transform: translate(-25px, -15px) rotate(4deg); }
                }
            `}</style>
        </section>
    );
}
