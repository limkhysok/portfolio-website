import { Github, Linkedin, Twitter, Heart, Code2 } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-border py-10 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    {/* Brand */}
                    <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center">
                            <Code2 className="w-3.5 h-3.5 text-primary" />
                        </div>
                        <span className="font-bold gradient-text">{personalInfo.name}</span>
                    </div>

                    {/* Made with love */}
                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                        © {year} — Built with{" "}
                        <Heart className="w-3 h-3 text-rose-500 fill-rose-500 inline mx-0.5" />{" "}
                        using Next.js & Shadcn UI
                    </p>

                    {/* Socials */}
                    <div className="flex items-center gap-2">
                        <a
                            id="footer-github"
                            href={personalInfo.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 rounded-lg glass border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
                            aria-label="GitHub"
                        >
                            <Github className="w-3.5 h-3.5" />
                        </a>
                        <a
                            id="footer-linkedin"
                            href={personalInfo.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 rounded-lg glass border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="w-3.5 h-3.5" />
                        </a>
                        <a
                            id="footer-twitter"
                            href={personalInfo.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 rounded-lg glass border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
                            aria-label="Twitter / X"
                        >
                            <Twitter className="w-3.5 h-3.5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
