"use client";

import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isDark, setIsDark] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        // Default to dark mode
        document.documentElement.classList.add("dark");
        setIsDark(true);

        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleTheme = () => {
        setIsDark((prev) => {
            const next = !prev;
            if (next) {
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
            }
            return next;
        });
    };

    const handleNavClick = (href: string) => {
        setIsMenuOpen(false);
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                        ? "glass shadow-lg shadow-black/5 dark:shadow-black/20"
                        : "bg-transparent"
                    }`}
            >
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <a
                            href="#"
                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                            className="flex items-center gap-2 group"
                            id="nav-logo"
                        >
                            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                <Code2 className="w-4 h-4 text-primary" />
                            </div>
                            <span className="font-bold text-lg gradient-text">
                                YourName
                            </span>
                        </a>

                        {/* Desktop Links */}
                        <div className="hidden md:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <button
                                    key={link.href}
                                    id={`nav-${link.label.toLowerCase()}`}
                                    onClick={() => handleNavClick(link.href)}
                                    className="px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-all duration-200"
                                >
                                    {link.label}
                                </button>
                            ))}
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-2">
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={toggleTheme}
                                id="theme-toggle"
                                className="rounded-xl h-9 w-9"
                            >
                                {isDark ? (
                                    <Sun className="h-4 w-4" />
                                ) : (
                                    <Moon className="h-4 w-4" />
                                )}
                            </Button>

                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                id="mobile-menu-toggle"
                                className="md:hidden rounded-xl h-9 w-9"
                            >
                                {isMenuOpen ? (
                                    <X className="h-4 w-4" />
                                ) : (
                                    <Menu className="h-4 w-4" />
                                )}
                            </Button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div
                className={`fixed inset-x-0 top-16 z-40 md:hidden transition-all duration-300 ${isMenuOpen
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-4 pointer-events-none"
                    }`}
            >
                <div className="mx-4 glass rounded-2xl p-4 shadow-xl shadow-black/10 dark:shadow-black/30">
                    {navLinks.map((link) => (
                        <button
                            key={link.href}
                            onClick={() => handleNavClick(link.href)}
                            className="w-full text-left px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-xl transition-all duration-200 block"
                        >
                            {link.label}
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
}
