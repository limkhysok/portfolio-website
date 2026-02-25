import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Your Name — Full Stack Developer",
  description:
    "Portfolio of Your Name, a Full Stack Developer specializing in React, Next.js, Django, and modern web technologies. Based in Kuala Lumpur, Malaysia.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "Django",
    "TypeScript",
    "Portfolio",
    "Web Developer",
    "Malaysia",
  ],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Your Name — Full Stack Developer",
    description:
      "Portfolio of Your Name, a Full Stack Developer specializing in React, Next.js, Django, and modern web technologies.",
    url: "https://yourname.vercel.app",
    siteName: "Your Name Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Name — Full Stack Developer",
    description:
      "Portfolio of Your Name, a Full Stack Developer specializing in React, Next.js, Django, and modern web technologies.",
    creator: "@yourusername",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
