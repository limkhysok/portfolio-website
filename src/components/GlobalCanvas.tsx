"use client";

import { useEffect, useRef, useState } from "react";

export default function GlobalCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const syncTheme = () => setIsDark(document.documentElement.classList.contains("dark"));
        syncTheme();
        const mo = new MutationObserver(syncTheme);
        mo.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let w = (canvas.width = window.innerWidth);
        let h = (canvas.height = window.innerHeight);

        // Reduced density for performance
        const dotCount = Math.floor((w * h) / 45000) + 20;
        const dots: { x: number; y: number; vx: number; vy: number }[] = [];

        for (let i = 0; i < dotCount; i++) {
            dots.push({
                x: Math.random() * w,
                y: Math.random() * h,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3,
            });
        }

        let animationFrameId: number;

        const draw = () => {
            ctx.clearRect(0, 0, w, h);

            // INCREASED OPACITY as requested
            const color = isDark ? "255, 255, 255" : "0, 0, 0";
            ctx.fillStyle = `rgba(${color}, 0.25)`;
            ctx.strokeStyle = `rgba(${color}, 0.12)`;

            dots.forEach((d, i) => {
                d.x += d.vx;
                d.y += d.vy;

                if (d.x < 0) d.x = w;
                if (d.x > w) d.x = 0;
                if (d.y < 0) d.y = h;
                if (d.y > h) d.y = 0;

                ctx.beginPath();
                ctx.arc(d.x, d.y, 1.2, 0, Math.PI * 2);
                ctx.fill();

                for (let j = i + 1; j < dots.length; j++) {
                    const d2 = dots[j];
                    const dist = Math.hypot(d.x - d2.x, d.y - d2.y);
                    if (dist < 180) {
                        ctx.lineWidth = 1 - dist / 180;
                        ctx.beginPath();
                        ctx.moveTo(d.x, d.y);
                        ctx.lineTo(d2.x, d2.y);
                        ctx.stroke();
                    }
                }
            });
            animationFrameId = requestAnimationFrame(draw);
        };
        draw();

        const handleResize = () => {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
            // Re-populate if resizing significantly to avoid empty spaces
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(animationFrameId);
            mo.disconnect();
        };
    }, [isDark]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-[-1] pointer-events-none opacity-50 transition-opacity duration-1000"
        />
    );
}
