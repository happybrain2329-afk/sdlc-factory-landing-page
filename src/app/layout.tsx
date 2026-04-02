import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "SDLCFactory.ai | The Synthetic Architect",
  description:
    "Orchestrate an entire swarm of AI agents to take your tickets from 'To Do' to 'Production' with zero manual intervention.",
  keywords: [
    "AI",
    "SDLC",
    "automation",
    "software engineering",
    "autonomous agents",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} dark`}
    >
      <body className="bg-surface text-on-surface font-[family-name:var(--font-inter)] antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
