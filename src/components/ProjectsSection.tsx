"use client";

import { useEffect, useRef } from "react";
import { Github, ExternalLink, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data";

export default function ProjectsSection() {
    const sectionRef = useRef<HTMLElement>(null);

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

    const featured = projects.filter((p) => p.featured);
    const others = projects.filter((p) => !p.featured);

    return (
        <section id="projects" ref={sectionRef} className="py-24 px-4 bg-muted/30">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="section-animate text-center mb-16">
                    <p className="text-primary font-mono text-sm font-semibold tracking-widest uppercase mb-2">
                        What I&apos;ve built
                    </p>
                    <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
                        Projects
                    </h2>
                </div>

                {/* Featured projects */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {featured.map((project, i) => (
                        <div
                            key={i}
                            id={`project-featured-${i}`}
                            className="section-animate group relative rounded-2xl glass border border-border overflow-hidden card-hover"
                            style={{ transitionDelay: `${i * 100}ms` }}
                        >
                            {/* Gradient header */}
                            <div
                                className={`h-2 w-full bg-gradient-to-r ${project.gradient}`}
                                aria-hidden="true"
                            />

                            {/* Shine sweep on hover */}
                            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
                                <div className="absolute top-0 -left-24 w-16 h-full bg-white/5 rotate-12 group-hover:translate-x-[500px] transition-transform duration-700 ease-in-out" />
                            </div>

                            <div className="p-6">
                                <div className="flex items-start justify-between gap-3 mb-3">
                                    <div className="flex items-center gap-2">
                                        <h3 className="font-bold text-xl text-foreground group-hover:text-primary transition-colors">
                                            {project.title}
                                        </h3>
                                        <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                                    </div>
                                </div>

                                <p className="text-muted-foreground text-sm leading-relaxed mb-4 min-h-[3.5rem]">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-1.5 mb-5">
                                    {project.tags.map((tag) => (
                                        <Badge
                                            key={tag}
                                            variant="secondary"
                                            className="text-xs rounded-lg bg-primary/10 text-primary border-0"
                                        >
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>

                                <div className="flex items-center gap-3">
                                    {project.github && (
                                        <Button
                                            id={`project-github-featured-${i}`}
                                            variant="outline"
                                            size="sm"
                                            className="rounded-xl text-xs h-8 glass"
                                            asChild
                                        >
                                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                                                <Github className="w-3.5 h-3.5 mr-1.5" />
                                                Source
                                            </a>
                                        </Button>
                                    )}
                                    {project.live && (
                                        <Button
                                            id={`project-live-featured-${i}`}
                                            size="sm"
                                            className="rounded-xl text-xs h-8"
                                            asChild
                                        >
                                            <a href={project.live} target="_blank" rel="noopener noreferrer">
                                                <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                                                Live Demo
                                            </a>
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Other projects */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {others.map((project, i) => (
                        <div
                            key={i}
                            id={`project-other-${i}`}
                            className="section-animate group rounded-2xl glass border border-border p-5 card-hover"
                            style={{ transitionDelay: `${(i + featured.length) * 100}ms` }}
                        >
                            {/* Color indicator */}
                            <div
                                className={`w-10 h-1 rounded-full bg-gradient-to-r ${project.gradient} mb-4`}
                                aria-hidden="true"
                            />

                            <h3 className="font-bold text-base text-foreground group-hover:text-primary transition-colors mb-2">
                                {project.title}
                            </h3>
                            <p className="text-muted-foreground text-xs leading-relaxed mb-4">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-1 mb-4">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-2 py-0.5 rounded-md text-xs font-medium bg-muted text-muted-foreground"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center gap-2">
                                {project.github && (
                                    <a
                                        id={`project-github-other-${i}`}
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                        aria-label={`${project.title} source code`}
                                    >
                                        <Github className="w-4 h-4" />
                                    </a>
                                )}
                                {project.live && (
                                    <a
                                        id={`project-live-other-${i}`}
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                        aria-label={`${project.title} live demo`}
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* GitHub CTA */}
                <div className="section-animate text-center mt-12">
                    <p className="text-muted-foreground text-sm mb-4">
                        See more of my work on GitHub
                    </p>
                    <Button
                        id="projects-github-cta"
                        variant="outline"
                        className="rounded-xl glass"
                        asChild
                    >
                        <a
                            href="https://github.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Github className="mr-2 h-4 w-4" />
                            View GitHub Profile
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
}
