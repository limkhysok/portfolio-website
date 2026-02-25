import { Github, Linkedin, Send } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="relative border-t py-16 px-6 bg-background/50 backdrop-blur-sm overflow-hidden" style={{ borderColor: 'var(--tf-border)' }}>
            {/* Subtle Gradient Background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">

                {/* Brand Section */}
                <div className="flex flex-col items-center md:items-start gap-4">
                    <div className="display-text text-2xl md:text-3xl font-bold">
                        {personalInfo.name}<span className="text-primary">.</span>
                    </div>
                    <p className="text-xs text-muted-foreground font-mono tracking-widest uppercase opacity-60">
                        {personalInfo.title} — from {personalInfo.location}
                    </p>
                </div>

                {/* Social & Contact */}
                <div className="flex flex-col items-center md:items-end gap-6">
                    <div className="flex items-center gap-3">
                        {[
                            { id: 'footer-github', href: personalInfo.github, icon: <Github className="w-5 h-5" />, label: 'GitHub' },
                            { id: 'footer-linkedin', href: personalInfo.linkedin, icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn' },
                            {
                                id: 'footer-telegram', href: personalInfo.telegram, icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                                    </svg>
                                ), label: 'Telegram'
                            },
                        ].map((link) => (
                            <a
                                key={link.id}
                                id={link.id}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={link.label}
                                className="w-10 h-10 flex items-center justify-center rounded-xl bg-foreground/5 text-foreground/50 hover:bg-primary hover:text-black transition-all duration-300 transform hover:scale-110"
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div>

                    <p className="text-[10px] text-muted-foreground font-mono opacity-50 text-center md:text-right">
                        © {year} {personalInfo.name} — ALL RIGHTS RESERVED<br />
                        DESIGNED & DEVELOPED WITH NEXT.JS
                    </p>
                </div>

            </div>
        </footer>
    );
}
