"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { personalInfo } from "@/lib/data";

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [isDark, setIsDark] = useState(false);

    /* Read saved theme on mount */
    useEffect(() => {
        const saved = localStorage.getItem("theme");
        if (saved === "dark") {
            setIsDark(true);
            document.documentElement.classList.add("dark");
        }
    }, []);

    /* Scroll detection */
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    /* Toggle theme */
    const toggleTheme = () => {
        const next = !isDark;
        setIsDark(next);
        if (next) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    };

    const scrollTo = (href: string) => {
        setMenuOpen(false);
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            {/* ── Navbar ── */}
            {/* ── Navbar ── */}
            <nav
                className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1) ${scrolled ? "py-4 border-b bg-background/70 backdrop-blur-md" : "py-6 bg-transparent"
                    }`}
                style={{ borderColor: scrolled ? "var(--tf-border)" : "transparent" }}
            >
                <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">

                    {/* Logo / Brand */}
                    <a
                        id="nav-logo"
                        href="#"
                        onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        className="display-text text-xl md:text-2xl font-bold tracking-tight text-foreground hover:scale-105 transition-all duration-500"
                    >
                        {personalInfo.name}<span className="text-primary">.</span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <button
                                key={link.href}
                                id={`nav-${link.label.toLowerCase()}`}
                                onClick={() => scrollTo(link.href)}
                                className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground/60 hover:text-primary transition-all duration-500 relative group"
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-500 group-hover:w-full"></span>
                            </button>
                        ))}
                    </div>

                    {/* Right Side: Theme + Mobile Toggle */}
                    <div className="flex items-center gap-3">
                        <button
                            id="theme-toggle"
                            onClick={toggleTheme}
                            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
                            className="w-10 h-10 flex items-center justify-center rounded-xl bg-foreground/5 text-foreground/50 hover:bg-primary hover:text-black transition-all duration-500 transform hover:scale-110"
                        >
                            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                        </button>

                        {/* Hamburger — mobile */}
                        <button
                            id="mobile-menu-toggle"
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-foreground/5 text-foreground/50 hover:bg-primary hover:text-black transition-all duration-500"
                        >
                            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* ── Mobile menu ── */}
            <div
                className={`fixed inset-0 z-40 md:hidden bg-background/95 backdrop-blur-xl transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1) ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none translate-y-10"
                    }`}
            >
                <div className="h-full flex flex-col items-center justify-center gap-8 p-6">
                    {navLinks.map((link) => (
                        <button
                            key={link.href}
                            onClick={() => scrollTo(link.href)}
                            className="display-text text-4xl font-bold text-foreground hover:text-primary transition-colors duration-500"
                        >
                            {link.label}
                        </button>
                    ))}
                    <div className="mt-12 w-full max-w-[200px] h-[1px] bg-primary/10"></div>
                    <p className="text-[10px] font-mono text-muted-foreground/40 uppercase tracking-[0.3em]">
                        {personalInfo.name} — Portfolio
                    </p>
                </div>
            </div>
        </>
    );
}
