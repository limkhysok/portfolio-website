"use client";

import { useEffect, useRef } from "react";
import { Github, Linkedin, Twitter, ArrowDown, Download, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/lib/data";

export default function HeroSection() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // Particle animation on canvas
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles: {
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;
            opacity: number;
        }[] = [];

        for (let i = 0; i < 60; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.4,
                vy: (Math.random() - 0.5) * 0.4,
                size: Math.random() * 2 + 0.5,
                opacity: Math.random() * 0.5 + 0.1,
            });
        }

        let animId: number;

        function draw() {
            if (!ctx || !canvas) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const isDark = document.documentElement.classList.contains("dark");
            const color = isDark ? "139, 92, 246" : "109, 40, 217";

            particles.forEach((p) => {
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${color}, ${p.opacity})`;
                ctx.fill();
            });

            // Draw connections
            particles.forEach((a, i) => {
                particles.slice(i + 1).forEach((b) => {
                    const dist = Math.hypot(a.x - b.x, a.y - b.y);
                    if (dist < 100) {
                        ctx.beginPath();
                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(b.x, b.y);
                        ctx.strokeStyle = `rgba(${color}, ${0.08 * (1 - dist / 100)})`;
                        ctx.lineWidth = 0.8;
                        ctx.stroke();
                    }
                });
            });

            animId = requestAnimationFrame(draw);
        }

        draw();

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener("resize", handleResize);

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const scrollToAbout = () => {
        document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Animated particle canvas */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 pointer-events-none"
                aria-hidden="true"
            />

            {/* Background gradients */}
            <div className="absolute inset-0 hero-gradient dot-grid" aria-hidden="true" />

            {/* Content */}
            <div className="relative z-10 text-center max-w-4xl mx-auto px-4 py-20">
                {/* Available badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 text-sm font-medium text-primary mb-8 shadow-sm">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                    </span>
                    Available for opportunities
                </div>

                {/* Name & Title */}
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-4 leading-[1.1]">
                    Hi, I&apos;m{" "}
                    <span className="gradient-text">{personalInfo.name}</span>
                </h1>

                {/* Terminal-style role */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-muted/60 border border-border font-mono text-sm text-muted-foreground mb-6">
                    <Terminal className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span>{personalInfo.title}</span>
                    <span className="cursor-blink text-primary">█</span>
                </div>

                {/* Tagline */}
                <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
                    {personalInfo.tagline}
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
                    <Button
                        id="hero-view-projects"
                        size="lg"
                        className="rounded-xl px-7 font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow"
                        onClick={() =>
                            document
                                .querySelector("#projects")
                                ?.scrollIntoView({ behavior: "smooth" })
                        }
                    >
                        View Projects
                    </Button>
                    <Button
                        id="hero-resume"
                        variant="outline"
                        size="lg"
                        className="rounded-xl px-7 font-semibold glass"
                        asChild
                    >
                        <a href={personalInfo.resume} download>
                            <Download className="mr-2 h-4 w-4" />
                            Download CV
                        </a>
                    </Button>
                </div>

                {/* Social links */}
                <div className="flex items-center justify-center gap-3">
                    <a
                        id="hero-github"
                        href={personalInfo.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-xl glass border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-200 hover:scale-110"
                        aria-label="GitHub"
                    >
                        <Github className="w-4 h-4" />
                    </a>
                    <a
                        id="hero-linkedin"
                        href={personalInfo.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-xl glass border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-200 hover:scale-110"
                        aria-label="LinkedIn"
                    >
                        <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                        id="hero-twitter"
                        href={personalInfo.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-xl glass border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-200 hover:scale-110"
                        aria-label="Twitter / X"
                    >
                        <Twitter className="w-4 h-4" />
                    </a>
                </div>
            </div>

            {/* Scroll indicator */}
            <button
                id="hero-scroll-down"
                onClick={scrollToAbout}
                aria-label="Scroll to about section"
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
            >
                <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
            </button>
        </section>
    );
}
