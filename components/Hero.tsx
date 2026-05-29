"use client";

import { motion } from "motion/react";
import { portfolioData } from "@/lib/constants";

export default function Hero() {
    const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0C0C12] pt-24">
            {/* Grid background */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
            />

            {/* Top violet glow */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: "radial-gradient(ellipse 80% 50% at 50% -5%, rgba(124,58,237,0.28) 0%, transparent 60%)",
                }}
            />

            <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center text-center gap-8">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-white/[0.1] bg-white/[0.03]">
                        <svg className="w-3.5 h-3.5 text-violet-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-xs text-white/60 font-medium">Available for new opportunities</span>
                    </div>
                </motion.div>

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="flex flex-col gap-1"
                >
                    <div className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] text-white">
                        Frontend Developer
                    </div>
                    <div className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] text-white">
                        crafting{" "}
                        <span
                            style={{
                                background: "linear-gradient(90deg, #A78BFA 0%, #38BDF8 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            scalable and
                        </span>
                    </div>
                    <div className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05]">
                        <span
                            style={{
                                background: "linear-gradient(90deg, #A78BFA 0%, #38BDF8 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            performant
                        </span>
                        <span className="text-white"> web apps</span>
                    </div>
                </motion.div>

                {/* Bio */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-2xl text-white/50 text-lg leading-relaxed"
                >
                    Hi, I'm <span className="text-white font-bold">{portfolioData.personal.name}</span> — a frontend
                    engineer with {portfolioData.personal.experience} building production React apps with TypeScript,
                    Tailwind, Redux, and a sharp eye for UI/UX and performance.
                </motion.div>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <button
                        onClick={() => scrollTo("projects")}
                        className="flex items-center justify-center gap-2.5 px-8 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm transition-colors duration-200"
                    >
                        <span>View Projects</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </button>
                    <button
                        onClick={() => scrollTo("contact")}
                        className="px-8 py-1 rounded-xl border border-white/[0.12] bg-[#111118] text-white/80 font-semibold text-sm hover:text-white hover:border-white/20 transition-all duration-200"
                    >
                        Contact Me
                    </button>
                </motion.div>

                {/* Social links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex gap-4"
                >
                    <a
                        href={portfolioData.social.find((s) => s.icon === "github")?.url ?? "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="size-5 rounded-full bg-white/[0.03] flex items-center justify-center text-white/50 hover:text-white hover:border-violet-500/40 transition-all duration-200"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                    </a>
                    <a
                        href={portfolioData.social.find((s) => s.icon === "linkedin")?.url ?? "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="size-5 rounded-full bg-white/[0.03] flex items-center justify-center text-white/50 hover:text-white hover:border-violet-500/40 transition-all duration-200"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
