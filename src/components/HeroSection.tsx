"use client";

import { useEffect, useRef } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function HeroSection() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let W = (canvas.width = window.innerWidth);
        let H = (canvas.height = window.innerHeight);

        const pts = Array.from({ length: 70 }, () => ({
            x: Math.random() * W, y: Math.random() * H,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3,
            r: Math.random() * 1.3 + 0.4,
        }));

        let id: number;
        const draw = () => {
            ctx.clearRect(0, 0, W, H);
            const dark = document.documentElement.classList.contains("dark");
            const dotColor = dark ? "rgba(200,241,53,0.20)" : "rgba(92,130,0,0.18)";
            const lineBase = dark ? "200,241,53" : "92,130,0";

            pts.forEach((p) => {
                p.x += p.vx; p.y += p.vy;
                if (p.x < 0 || p.x > W) p.vx *= -1;
                if (p.y < 0 || p.y > H) p.vy *= -1;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = dotColor;
                ctx.fill();
            });
            pts.forEach((a, i) =>
                pts.slice(i + 1).forEach((b) => {
                    const d = Math.hypot(a.x - b.x, a.y - b.y);
                    if (d < 110) {
                        ctx.beginPath();
                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(b.x, b.y);
                        ctx.strokeStyle = `rgba(${lineBase},${0.06 * (1 - d / 110)})`;
                        ctx.lineWidth = 0.7;
                        ctx.stroke();
                    }
                })
            );
            id = requestAnimationFrame(draw);
        };
        draw();

        const onResize = () => { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; };
        window.addEventListener("resize", onResize);
        return () => { cancelAnimationFrame(id); window.removeEventListener("resize", onResize); };
    }, []);

    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-background grid-bg"
        >
            <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-60" aria-hidden="true" />

            {/* Radial glow */}
            <div
                className="absolute -top-32 -left-32 w-96 h-96 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, color-mix(in srgb, var(--primary) 12%, transparent) 0%, transparent 70%)" }}
                aria-hidden="true"
            />

            <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-20 w-full">

                {/* Available badge */}
                <div
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium text-muted-foreground mb-10 border"
                    style={{ borderColor: "var(--tf-border)", background: "var(--tf-subtle)" }}
                >
                    <span className="relative flex h-1.5 w-1.5">
                        <span className="tf-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-500" />
                    </span>
                    Available for opportunities
                </div>

                {/* Main heading */}
                <h1 className="display-text mb-6 max-w-4xl">
                    {personalInfo.tagline}
                </h1>

                {/* Sub */}
                <p className="text-muted-foreground text-base sm:text-lg max-w-xl leading-relaxed mb-12">
                    {personalInfo.title} based in{" "}
                    <span className="text-foreground/70">{personalInfo.location}</span>.
                    Building things for the web with clean code and great attention to detail.
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-3">
                    <a
                        id="hero-projects-cta"
                        href="#projects"
                        onClick={(e) => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }}
                        className="tf-btn tf-btn-accent"
                    >
                        View my work
                        <ArrowUpRight className="w-4 h-4" />
                    </a>
                    <a
                        id="hero-contact-cta"
                        href="#contact"
                        onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
                        className="tf-btn"
                    >
                        Get in touch
                    </a>
                </div>

                {/* Scroll hint */}
                <button
                    id="hero-scroll-down"
                    onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
                    className="absolute bottom-10 left-6 flex items-center gap-2 text-muted-foreground/40 hover:text-muted-foreground transition-colors text-xs tracking-widest uppercase"
                >
                    <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
                    Scroll
                </button>
            </div>
        </section>
    );
}
