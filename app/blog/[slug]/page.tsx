import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  blogPosts,
  getPostBySlug,
  formatPostDate,
  type BlogBlock,
} from "@/lib/blog";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) return { title: "Article not found" };

  return {
    title: `${post.title} — Sandeep Yadav`,
    description: post.excerpt,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
    },
  };
}

function Block({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case "heading":
      return (
        <h2 className="text-white font-bold text-2xl tracking-tight mt-12 mb-2">
          {block.text}
        </h2>
      );
    case "paragraph":
      return (
        <p className="text-white/60 text-base leading-relaxed">{block.text}</p>
      );
    case "list":
      return (
        <ul className="flex flex-col gap-3">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 items-start">
              <span className="size-1.5 rounded-full bg-violet-500 mt-2.5 shrink-0" />
              <span className="text-white/60 text-base leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      );
    case "code":
      return (
        <pre className="card overflow-x-auto p-5 text-sm leading-relaxed">
          <code className="text-violet-200/90 whitespace-pre">{block.code}</code>
        </pre>
      );
    default:
      return null;
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <main className="min-h-screen bg-[#0C0C12]">
      <div className="max-w-3xl mx-auto px-6 py-16 sm:py-24">
        {/* Back to Portfolio */}
        <Link
          href="/#blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-white/55 hover:text-white transition-colors duration-200 mb-12"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
          </svg>
          <span>Back to Portfolio</span>
        </Link>

        {/* Header */}
        <header className="flex flex-col gap-5 mb-12">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-lg text-violet-300 text-xs font-semibold border border-violet-500/25 bg-violet-500/10">
              {post.category}
            </span>
            <span className="text-white/35 text-xs">
              {formatPostDate(post.date)} · {post.readTime}
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-[1.1] text-white">
            {post.title}
          </h1>
          <p className="text-white/50 text-lg leading-relaxed">{post.excerpt}</p>
        </header>

        <div className="h-px w-full bg-white/[0.07] mb-10" />

        {/* Body */}
        <article className="flex flex-col gap-5">
          {post.content.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </article>

        <div className="h-px w-full bg-white/[0.07] mt-16 mb-8" />

        {/* Footer nav */}
        <Link
          href="/#blog"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm transition-colors duration-200"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
          </svg>
          <span>Back to Portfolio</span>
        </Link>
      </div>
    </main>
  );
}
