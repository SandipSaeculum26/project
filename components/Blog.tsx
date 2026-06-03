"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/Badge";
import { blogPosts, formatPostDate } from "@/lib/blog";

export default function Blog() {
  return (
    <section id="blog" className="sm:py-28 py-10 px-6 bg-[#0C0C12]">
      <div className="max-w-6xl mx-auto flex flex-col gap-14">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-5"
        >
          <Badge>Writing</Badge>
          <div className="text-4xl lg:text-6xl font-black tracking-tight leading-tight text-white">
            Notes on what I <span className="text-violet-400">build</span>
          </div>
          <div className="max-w-2xl text-white/45 text-base leading-relaxed">
            Deep dives into the architecture, performance, and state patterns I reach for when shipping production frontends.
          </div>
        </motion.div>

        {/* Post grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="card card-hover group p-7 flex flex-col gap-5 h-full"
              >
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-lg text-violet-300 text-xs font-semibold border border-violet-500/25 bg-violet-500/10">
                    {post.category}
                  </span>
                  <span className="text-white/35 text-xs">
                    {formatPostDate(post.date)} · {post.readTime}
                  </span>
                </div>

                <div className="flex flex-col gap-2.5">
                  <h3 className="text-white font-bold text-lg leading-snug group-hover:text-violet-300 transition-colors duration-200">
                    {post.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-auto pt-1 flex items-center gap-2 text-sm font-semibold text-white/70 group-hover:text-white transition-colors duration-200">
                  <span>Read article</span>
                  <svg
                    className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
