"use client";

import { useEffect, useRef, useState } from "react";
import { Mail, Github, Linkedin, ArrowUpRight, Send } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function ContactSection() {
    const ref = useRef<HTMLElement>(null);
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

    useEffect(() => {
        const obs = new IntersectionObserver(
            (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
            { threshold: 0.08 }
        );
        ref.current?.querySelectorAll('[class*="tf-fade"]').forEach((el) => obs.observe(el));
        return () => obs.disconnect();
    }, []);

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");
        // TODO: wire to Resend / Formspree / EmailJS
        setTimeout(() => {
            setStatus("sent");
            setForm({ name: "", email: "", message: "" });
            setTimeout(() => setStatus("idle"), 4000);
        }, 1500);
    };

    const inputClass =
        "w-full rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none transition-all";

    return (
        <section
            id="contact"
            ref={ref}
            className="py-24 px-6 border-t bg-background"
            style={{ borderColor: "var(--tf-border)" }}
        >
            <div className="max-w-6xl mx-auto">

                {/* Section Label - Clean & Simple */}
                <div className="tf-fade-left mb-16">
                    <span className="text-primary font-mono text-[10px] uppercase tracking-[0.4em] font-bold">04 — Contact</span>
                </div>

                <div className="grid lg:grid-cols-2 gap-16">

                    {/* Left */}
                    <div className="tf-fade-left">
                        <h2 className="section-heading mb-4 text-4xl md:text-6xl">
                            Have a project<br />
                            in mind<span className="text-primary">?</span>
                        </h2>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-10 max-w-sm">
                            I&apos;m available for freelance projects and full-time roles.
                            Let&apos;s talk about what you need.
                        </p>

                        {/* Links */}
                        {[
                            { id: "contact-email-link", href: `mailto:${personalInfo.email}`, Icon: Mail, label: personalInfo.email },
                            { id: "contact-github", href: personalInfo.github, Icon: Github, label: "GitHub", target: "_blank" },
                            { id: "contact-linkedin", href: personalInfo.linkedin, Icon: Linkedin, label: "LinkedIn", target: "_blank" },
                        ].map(({ id, href, Icon, label, target }) => (
                            <a
                                key={id}
                                id={id}
                                href={href}
                                target={target}
                                rel={target ? "noopener noreferrer" : undefined}
                                className="flex items-center justify-between group py-4 border-b transition-colors hover-row -mx-1 px-1"
                                style={{ borderColor: "var(--tf-border)" }}
                            >
                                <div className="flex items-center gap-3">
                                    <Icon className="w-4 h-4 text-muted-foreground/30" />
                                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                                        {label}
                                    </span>
                                </div>
                                <ArrowUpRight className="w-4 h-4 text-muted-foreground/20 group-hover:text-primary transition-colors" />
                            </a>
                        ))}
                    </div>

                    {/* Right — form */}
                    <div className="tf-fade-right">
                        <form onSubmit={onSubmit} id="contact-form" className="space-y-5">
                            {[
                                { id: "contact-name", type: "text", label: "Name", value: form.name, key: "name", placeholder: "Your name" },
                                { id: "contact-email-input", type: "email", label: "Email", value: form.email, key: "email", placeholder: "hello@example.com" },
                            ].map(({ id, type, label, value, key, placeholder }) => (
                                <div key={id}>
                                    <label htmlFor={id} className="block text-xs text-muted-foreground/50 mb-2 font-mono uppercase tracking-wider">
                                        {label}
                                    </label>
                                    <input
                                        id={id}
                                        type={type}
                                        required
                                        value={value}
                                        onChange={(e) => setForm((p) => ({ ...p, [key]: e.target.value }))}
                                        placeholder={placeholder}
                                        className={inputClass}
                                        style={{
                                            background: "var(--tf-input)",
                                            border: "1px solid var(--tf-input-border)",
                                        }}
                                        onFocus={(e) => (e.target.style.borderColor = "color-mix(in srgb, var(--primary) 50%, transparent)")}
                                        onBlur={(e) => (e.target.style.borderColor = "var(--tf-input-border)")}
                                    />
                                </div>
                            ))}

                            <div>
                                <label htmlFor="contact-message" className="block text-xs text-muted-foreground/50 mb-2 font-mono uppercase tracking-wider">
                                    Message
                                </label>
                                <textarea
                                    id="contact-message"
                                    required
                                    rows={5}
                                    value={form.message}
                                    onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                                    placeholder="Tell me about your project..."
                                    className={`${inputClass} resize-none`}
                                    style={{
                                        background: "var(--tf-input)",
                                        border: "1px solid var(--tf-input-border)",
                                    }}
                                    onFocus={(e) => (e.target.style.borderColor = "color-mix(in srgb, var(--primary) 50%, transparent)")}
                                    onBlur={(e) => (e.target.style.borderColor = "var(--tf-input-border)")}
                                />
                            </div>

                            <button
                                id="contact-submit"
                                type="submit"
                                disabled={status !== "idle"}
                                className="tf-btn tf-btn-accent w-full justify-center py-3 rounded-lg"
                            >
                                {status === "idle" && <><Send className="w-4 h-4" /> Send message</>}
                                {status === "sending" && (
                                    <span className="flex items-center gap-2">
                                        <span className="w-4 h-4 border-2 rounded-full animate-spin"
                                            style={{ borderColor: "var(--primary-foreground)", borderTopColor: "transparent" }}
                                        />
                                        Sending...
                                    </span>
                                )}
                                {status === "sent" && "✅ Message sent!"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
