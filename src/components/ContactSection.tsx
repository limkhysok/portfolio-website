"use client";

import { useEffect, useRef, useState } from "react";
import { Mail, Github, Linkedin, Send, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/lib/data";

export default function ContactSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");
        // TODO: Connect to your preferred email service (e.g., Resend, EmailJS, Formspree)
        // Simulating a delay for demo purposes
        setTimeout(() => {
            setStatus("sent");
            setFormState({ name: "", email: "", message: "" });
            setTimeout(() => setStatus("idle"), 4000);
        }, 1500);
    };

    return (
        <section id="contact" ref={sectionRef} className="py-24 px-4">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="section-animate text-center mb-16">
                    <p className="text-primary font-mono text-sm font-semibold tracking-widest uppercase mb-2">
                        Let&apos;s connect
                    </p>
                    <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
                        Get In Touch
                    </h2>
                    <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
                        Have a project in mind or want to say hi? My inbox is always open!
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Left panel */}
                    <div className="section-animate space-y-6">
                        {/* Glow card */}
                        <div className="relative rounded-2xl p-6 glass border border-border overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-500/5 pointer-events-none" />
                            <h3 className="font-bold text-xl mb-4 relative z-10">
                                Let&apos;s work together
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-6 relative z-10">
                                Whether you need a full-stack web app, a landing page, or
                                technical consulting — I&apos;d love to hear about your project.
                            </p>

                            <div className="space-y-3 relative z-10">
                                <a
                                    id="contact-email-link"
                                    href={`mailto:${personalInfo.email}`}
                                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-muted/60 hover:bg-muted transition-colors group"
                                >
                                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                        <Mail className="w-4 h-4 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted-foreground">Email</p>
                                        <p className="text-sm font-medium text-foreground">{personalInfo.email}</p>
                                    </div>
                                </a>

                                <a
                                    id="contact-location"
                                    href="#"
                                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-muted/60 hover:bg-muted transition-colors group"
                                >
                                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                        <MapPin className="w-4 h-4 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted-foreground">Location</p>
                                        <p className="text-sm font-medium text-foreground">{personalInfo.location}</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Social links */}
                        <div className="flex gap-3">
                            <a
                                id="contact-github"
                                href={personalInfo.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl glass border border-border hover:border-primary/40 text-sm font-medium text-muted-foreground hover:text-primary transition-all"
                            >
                                <Github className="w-4 h-4" />
                                GitHub
                            </a>
                            <a
                                id="contact-linkedin"
                                href={personalInfo.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl glass border border-border hover:border-primary/40 text-sm font-medium text-muted-foreground hover:text-primary transition-all"
                            >
                                <Linkedin className="w-4 h-4" />
                                LinkedIn
                            </a>
                        </div>
                    </div>

                    {/* Contact form */}
                    <div className="section-animate">
                        <form
                            onSubmit={handleSubmit}
                            className="rounded-2xl glass border border-border p-6 space-y-4"
                            id="contact-form"
                        >
                            <div>
                                <label
                                    htmlFor="contact-name"
                                    className="block text-sm font-medium text-foreground mb-1.5"
                                >
                                    Your Name
                                </label>
                                <input
                                    id="contact-name"
                                    type="text"
                                    required
                                    value={formState.name}
                                    onChange={(e) =>
                                        setFormState((p) => ({ ...p, name: e.target.value }))
                                    }
                                    placeholder="John Doe"
                                    className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="contact-email-input"
                                    className="block text-sm font-medium text-foreground mb-1.5"
                                >
                                    Email Address
                                </label>
                                <input
                                    id="contact-email-input"
                                    type="email"
                                    required
                                    value={formState.email}
                                    onChange={(e) =>
                                        setFormState((p) => ({ ...p, email: e.target.value }))
                                    }
                                    placeholder="hello@example.com"
                                    className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="contact-message"
                                    className="block text-sm font-medium text-foreground mb-1.5"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="contact-message"
                                    required
                                    rows={5}
                                    value={formState.message}
                                    onChange={(e) =>
                                        setFormState((p) => ({ ...p, message: e.target.value }))
                                    }
                                    placeholder="Tell me about your project..."
                                    className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all resize-none"
                                />
                            </div>

                            <Button
                                id="contact-submit"
                                type="submit"
                                disabled={status !== "idle"}
                                className="w-full rounded-xl font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-shadow"
                                size="lg"
                            >
                                {status === "idle" && (
                                    <>
                                        <Send className="mr-2 h-4 w-4" />
                                        Send Message
                                    </>
                                )}
                                {status === "sending" && (
                                    <span className="flex items-center gap-2">
                                        <span className="w-4 h-4 border-2 border-primary-foreground/50 border-t-primary-foreground rounded-full animate-spin" />
                                        Sending...
                                    </span>
                                )}
                                {status === "sent" && "✅ Message Sent!"}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
