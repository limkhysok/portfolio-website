import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Limkhy Sok — Full Stack Developer",
  description:
    "Portfolio of Limkhy Sok, a Full Stack Developer based in Phnom Penh, Cambodia.",
  keywords: ["Full Stack Developer", "React", "Next.js", "Django", "TypeScript", "Portfolio", "Cambodia"],
  authors: [{ name: "Limkhy Sok" }],
  openGraph: {
    title: "Limkhy Sok — Full Stack Developer",
    description: "Portfolio of Limkhy Sok, a Full Stack Developer based in Phnom Penh, Cambodia.",
    url: "https://limkhysok.vercel.app",
    siteName: "Limkhy Sok Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Limkhy Sok — Full Stack Developer",
    description: "Portfolio of Limkhy Sok, a Full Stack Developer based in Phnom Penh, Cambodia.",
    creator: "@limkhysok",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/*
          Anti-flash script: runs before React hydrates.
          Checks localStorage and applies .dark class if needed.
          Default = light (no class).
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('theme');
                  if (stored === 'dark') {
                    document.documentElement.classList.add('dark');
                  }
                  // default is light — no class needed
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
