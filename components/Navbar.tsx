"use client";

import { useState, useEffect } from "react";
import { portfolioData } from "@/lib/constants";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
        });

        setIsMobileMenuOpen(false);
    };

    return (
        <nav className="fixed top-0 inset-x-0 z-50 transition-all duration-500 py-5">
            <div className="max-w-6xl mx-auto px-4">
                <div
                    className={`flex items-center justify-between px-5 py-3 rounded-2xl transition-all duration-300 ${isScrolled
                        ? "shadow-xl shadow-black/40 bg-[#0C0C12]/50 backdrop-blur-xl"
                        : "backdrop-blur-xl bg-[#0C0C12]/10"
                        }`}
                >
                    {/* Left Section */}
                    <div className="flex items-center gap-3">
                        {/* Profile Image */}
                        <div className="flex items-center text-xl font-black text-violet-400">
                            SY
                        </div>

                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-7">
                        {portfolioData.navigation
                            .filter((i) => i.id !== "home")
                            .map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className="text-white/55 hover:text-white transition-colors duration-200 text-sm"
                                >
                                    {item.name}
                                </button>
                            ))}
                    </div>

                    {/* Right Section */}
                    <div className="flex items-center gap-3">
                        {/* Desktop CTA */}
                        <div className="hidden md:flex">
                            <button
                                onClick={() => scrollToSection("contact")}
                                className="px-5 py-2 rounded-xl bg-white text-[#0C0C12] font-semibold text-sm hover:bg-white/90 transition-colors duration-200"
                            >
                                Let's talk
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-white/60 hover:text-white transition-colors"
                            onClick={() =>
                                setIsMobileMenuOpen(!isMobileMenuOpen)
                            }
                            aria-label="Toggle menu"
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {isMobileMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden mt-3 rounded-2xl overflow-hidden backdrop-blur-xl bg-[#0C0C12]/90 border border-white/10">
                        {portfolioData.navigation
                            .filter((i) => i.id !== "home")
                            .map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className="w-full text-left px-5 py-4 text-white/60 hover:text-white hover:bg-white/[0.04] transition-colors text-sm font-medium"
                                >
                                    {item.name}
                                </button>
                            ))}

                        <div className="px-5 py-4 border-t border-white/[0.07]">
                            <button
                                onClick={() => scrollToSection("contact")}
                                className="w-full py-2.5 rounded-xl bg-white text-[#0C0C12] font-semibold text-sm"
                            >
                                Let's talk
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}