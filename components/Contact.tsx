"use client";

import { useState } from "react";
import { useInView } from "@/hooks/useInView";
import { portfolioData } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";

const contactItems = [
  {
    label: "EMAIL",
    value: portfolioData.personal.email,
    href: `mailto:${portfolioData.personal.email}`,
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "GITHUB",
    value: "github.com/SandipSaeculum26",
    href: "https://github.com/SandipSaeculum26",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.014 12.014 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LINKEDIN",
    value: "linkedin.com/in/sandeep-yadav",
    href: "https://linkedin.com",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.424-.103.249-.129.597-.129.945v5.436h-3.555V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const { ref, inView } = useInView();
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: { preventDefault(): void }) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });
      if (response.ok) {
        setSubmitMessage("Message sent successfully! I'll get back to you soon.");
        setFormState({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitMessage(""), 5000);
      } else {
        setSubmitMessage("Failed to send. Please try again.");
      }
    } catch {
      setSubmitMessage("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="sm:py-28 px-6 bg-[#0C0C12]" ref={ref}>
      <div className="max-w-6xl mx-auto flex flex-col gap-14">
        <div className="flex flex-col gap-6">
          <Badge>Get In Touch</Badge>
          <div className="text-4xl lg:text-6xl font-black tracking-tight leading-tight text-white">
            <div>Let's build something</div>
            <div>amazing <span className="text-violet-400">together</span></div>
          </div>
          <div className="max-w-xl text-white/50 text-base leading-relaxed">
            Have a project in mind or just want to chat about web development? I'd love to hear from you.
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact info */}
          <div
            className={`flex flex-col gap-4 transition-all duration-700 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            {contactItems.map(({ icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="card card-hover flex items-center gap-5 p-6 group"
              >
                <div
                  className="size-11 rounded-full shrink-0 flex items-center justify-center text-violet-400"
                  style={{ background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.25)" }}
                >
                  {icon}
                </div>
                <div className="flex flex-col gap-1">
                  <div className="text-white/35 text-[10px] font-semibold tracking-[0.2em] uppercase">{label}</div>
                  <div className="text-white text-sm font-medium group-hover:text-violet-300 transition-colors duration-200">
                    {value}
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Form */}
          <div
            className={`transition-all duration-700 delay-200 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="card p-8">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2.5">
                    <label className="text-white/45 text-[10px] font-semibold tracking-[0.2em] uppercase">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="field px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none transition-all duration-200"
                    />
                  </div>
                  <div className="flex flex-col gap-2.5">
                    <label className="text-white/45 text-[10px] font-semibold tracking-[0.2em] uppercase">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="field px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2.5">
                  <label className="text-white/45 text-[10px] font-semibold tracking-[0.2em] uppercase">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tell me about your project..."
                    className="field px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none transition-all duration-200 resize-none"
                  />
                </div>

                {submitMessage && (
                  <div
                    className={`px-5 py-4 rounded-xl text-sm font-medium ${
                      submitMessage.includes("successfully")
                        ? "bg-emerald-500/10 border border-emerald-500/30 text-emerald-300"
                        : "bg-red-500/10 border border-red-500/30 text-red-300"
                    }`}
                  >
                    {submitMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>{isSubmitting ? "Sending..." : "Send message"}</span>
                  {!isSubmitting && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
