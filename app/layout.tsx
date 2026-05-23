import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Sandeep Yadav - Frontend Developer Portfolio",
  description:
    "Frontend Developer crafting scalable and performant web applications. Specializing in React, TypeScript, and Tailwind CSS. View my projects and experience.",
  keywords: [
    "Frontend Developer",
    "React Developer",
    "TypeScript",
    "Tailwind CSS",
    "Web Development",
    "Portfolio",
  ],
  authors: [{ name: "Sandeep Yadav" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sandeepyadav.dev",
    title: "Sandeep Yadav - Frontend Developer",
    description:
      "Frontend Developer crafting scalable and performant web applications.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Sandeep Yadav - Frontend Developer",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#0C0C12] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
