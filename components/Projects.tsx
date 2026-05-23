"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { portfolioData } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";

export default function Projects() {
    const featured = portfolioData.projects.find((p) => p.featured)!;
    const rest = portfolioData.projects.filter((p) => !p.featured);

    return (
        <section id="projects" className="py-28 px-6 bg-[#0C0C12]">
            <div className="max-w-6xl mx-auto flex flex-col gap-12">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col gap-5"
                >
                    <Badge>Selected Work</Badge>
                    <div className="text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white">
                        Projects with shipped <span className="text-violet-400">polish</span>
                    </div>
                    <div className="max-w-2xl text-white/45 text-base leading-relaxed">
                        A mix of production work and craft projects exploring interaction, performance, and visual design.
                    </div>
                </motion.div>

                {/* Featured project */}
                <motion.div
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="card card-hover overflow-hidden"
                    style={{ padding: 0 }}
                >
                    {/* Image */}
                    <div className="relative h-full overflow-hidden">
                        <img src="https://sandip-portfolio.lovable.app/assets/project-salon-BS4HfS_0.jpg" alt="Salon Appointment System" loading="lazy" width="1280" height="800"
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />

                        <div className="absolute inset-0 bg-gradient-to-t from-[#111118] via-[#111118]/20 to-transparent" />
                        {/* Featured badge */}
                        <div className="absolute top-4 left-4">
                            <div
                                className="px-3 py-1.5 rounded-full text-xs font-semibold flex gap-2 items-center"
                                style={{ background: "rgba(6, 6, 7, 0.85)", color: "#fff", backdropFilter: "blur(8px)" }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-star h-3 w-3 text-primary fill-primary" aria-hidden="true">
                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                                 Featured
                            </div>
                        </div>
                    </div>

                    {/* Info */}
                    <div className="p-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-1.5">
                                <div className="text-xl font-bold text-white">{featured.title}</div>
                                <div className="text-white/50 text-sm leading-relaxed max-w-xl">{featured.description}</div>
                            </div>
                            <div className="flex flex-col gap-4 flex-wrap gap-2">
                                <div>
                                    {featured.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 rounded-lg text-white/55 text-xs font-medium border border-white/[0.08] bg-white/[0.03]"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-3 shrink-0">
                                    <ProjectLinks liveUrl={featured.liveUrl} githubUrl={featured.githubUrl} />
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Grid of remaining projects */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {rest.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 32 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="card card-hover overflow-hidden flex flex-col"
                            style={{ padding: 0 }}
                        >
                            {/* Image */}
                            <div className="relative h-52 overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#111118]/60 to-transparent" />
                            </div>

                            {/* Info */}
                            <div className="p-6 flex flex-col gap-4 flex-1">
                                <div className="flex flex-col gap-1.5">
                                    <div className="text-base font-bold text-white">{project.title}</div>
                                    <div className="text-white/45 text-sm leading-relaxed">{project.description}</div>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2.5 py-1 rounded-lg text-white/55 text-xs font-medium border border-white/[0.08] bg-white/[0.03]"
                                        >
                                            {tech}
                                        </span>
                                    ))}

                                    <div className="flex gap-3 mt-auto pt-2">
                                        <ProjectLinks liveUrl={project.liveUrl} githubUrl={project.githubUrl} />
                                    </div>
                                </div>

                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProjectLinks({ liveUrl, githubUrl }: { liveUrl: string; githubUrl: string }) {
    return (
        <>
            <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-black text-xs font-semibold transition-colors duration-200"
            >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                <span>Live demo</span>
            </a>
            <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/[0.1] bg-white/[0.03] text-white/70 text-xs font-semibold hover:bg-white/[0.07] hover:text-white transition-all duration-200"
            >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.014 12.014 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span>Code</span>
            </a>
        </>
    );
}
