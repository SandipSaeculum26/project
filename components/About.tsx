"use client";

import { motion } from "motion/react";
import { Badge } from "@/components/ui/Badge";

const highlights = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "Real-world projects",
    desc: "Shipped production features across booking, dashboards, and complex UIs in agile teams.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    title: "UI/UX focused",
    desc: "Pixel-precise interfaces with thoughtful interactions, spacing, and accessible design.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Performance mindset",
    desc: "Optimize bundle size, render paths, and memoization to keep apps fast at scale.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6 bg-[#0C0C12]">
      <div className="max-w-6xl mx-auto flex flex-col gap-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          <Badge>About</Badge>
          <div className="text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white">
            <div>Building interfaces that feel</div>
            <div>inevitable</div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {highlights.map(({ icon, title, desc }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card card-hover p-8 flex flex-col gap-6"
            >
              <div
                className="size-12 rounded-xl flex items-center justify-center text-violet-400 shrink-0"
                style={{ background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.2)" }}
              >
                {icon}
              </div>
              <div className="flex flex-col gap-2.5">
                <div className="text-white font-bold text-base">{title}</div>
                <div className="text-white/50 text-sm leading-relaxed">{desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
