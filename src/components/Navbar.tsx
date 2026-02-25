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
            <nav
                className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "border-b backdrop-blur-md" : "bg-transparent"
                    }`}
                style={scrolled ? { background: "var(--tf-nav-scrolled)", borderColor: "var(--tf-border)" } : {}}
            >
                <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

                    {/* Logo */}
                    <a
                        id="nav-logo"
                        href="#"
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        className="font-bold text-[15px] tracking-tight text-foreground hover:text-primary transition-colors"
                    >
                        {personalInfo.name}
                        <span className="text-primary">.</span>
                    </a>

                    {/* Desktop links */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <button
                                key={link.href}
                                id={`nav-${link.label.toLowerCase()}`}
                                onClick={() => scrollTo(link.href)}
                                className="nav-link"
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>

                    {/* Right: theme toggle + hamburger */}
                    <div className="flex items-center gap-2">
                        <button
                            id="theme-toggle"
                            onClick={toggleTheme}
                            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
                            className="w-9 h-9 flex items-center justify-center rounded-md border text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-colors"
                            style={{ borderColor: "var(--tf-border)" }}
                        >
                            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                        </button>

                        {/* Hamburger — mobile */}
                        <button
                            id="mobile-menu-toggle"
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="md:hidden w-9 h-9 flex items-center justify-center rounded-md border text-muted-foreground hover:text-foreground transition-colors"
                            style={{ borderColor: "var(--tf-border)" }}
                        >
                            {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* ── Mobile menu ── */}
            <div
                className={`fixed inset-x-0 top-16 z-40 md:hidden transition-all duration-200 ${menuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
            >
                <div
                    className="mx-4 rounded-xl overflow-hidden border backdrop-blur-md"
                    style={{ background: "var(--tf-nav-scrolled)", borderColor: "var(--tf-border)" }}
                >
                    {navLinks.map((link) => (
                        <button
                            key={link.href}
                            onClick={() => scrollTo(link.href)}
                            className="w-full text-left px-5 py-3.5 text-sm text-muted-foreground hover:text-foreground transition-colors border-b last:border-b-0"
                            style={{ borderColor: "var(--tf-border)" }}
                        >
                            {link.label}
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
}
