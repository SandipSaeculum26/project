"use client";

import { motion } from "motion/react";
import { portfolioData } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";

export default function Experience() {
  return (
    <section id="experience" className="sm:py-28 py-10 px-6 bg-[#0C0C12]">
      <div className="max-w-5xl mx-auto flex flex-col gap-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          <Badge>Experience</Badge>
          <div className="text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white">
            <div>1+ year shipping production</div>
            <div>frontends</div>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="flex flex-col">
          {portfolioData.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="grid grid-cols-1 lg:grid-cols-[1fr_72px_1fr] gap-6 lg:gap-0"
            >
              {/* Left — date + phase */}
              <div className="hidden lg:flex flex-col items-end justify-start pt-5 pr-8 gap-1">
                <div className="text-white/35 text-xs tracking-[0.18em] uppercase">
                  {(exp as typeof exp & { period?: string }).period ?? exp.duration}
                </div>
                <div className="text-white font-bold text-sm text-right">
                  {(exp as typeof exp & { phase?: string }).phase ?? exp.company}
                </div>
              </div>

              {/* Center — icon + vertical line */}
              <div className="hidden lg:flex flex-col items-center">
                {/* Glowing circle */}
                <div className="relative shrink-0 z-10">
                  <div
                    className="absolute inset-0 rounded-full blur-md"
                    style={{ background: "rgba(124,58,237,0.4)" }}
                  />
                  <div
                    className="relative size-9 rounded-full flex items-center justify-center"
                    style={{
                      background: "#111118",
                      border: "1px solid rgba(139,92,246,0.45)",
                      boxShadow: "0 0 12px rgba(124,58,237,0.35)",
                    }}
                  >
                    <svg className="w-4 h-4 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                </div>

                {/* Gradient line */}
                <div
                  className="w-px flex-1 mt-1"
                  style={{
                    background: "linear-gradient(to bottom, rgba(124,58,237,0.5) 0%, rgba(124,58,237,0.15) 50%, transparent 100%)",
                    boxShadow: "0 0 6px rgba(124,58,237,0.2)",
                  }}
                />
              </div>

              {/* Right — detail card */}
              <div className="lg:pl-8 pb-12">
                {/* Mobile: show date above card */}
                <div className="flex lg:hidden items-center gap-3 mb-4">
                  <div
                    className="size-9 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: "#111118", border: "1px solid rgba(255,255,255,0.1)" }}
                  >
                    <svg className="w-3.5 h-3.5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <div className="text-white/35 text-xs font-semibold tracking-[0.15em] uppercase">
                      {(exp as typeof exp & { period?: string }).period ?? exp.duration}
                    </div>
                    <div className="text-white font-bold text-sm">
                      {(exp as typeof exp & { phase?: string }).phase ?? exp.company}
                    </div>
                  </div>
                </div>

                <div className="card p-7 flex flex-col gap-5">
                  <div className="text-white font-bold text-lg">{exp.title}</div>
                  <div className="flex flex-col gap-3">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex gap-3 items-start">
                        <div className="size-1.5 rounded-full bg-violet-500 mt-2 shrink-0" />
                        <div className="text-white/60 text-sm leading-relaxed">{achievement}</div>
                      </div>
                    ))}
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
