"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "The Swarm", href: "#swarm" },
  { label: "Tech Stack", href: "#tech" },
  { label: "How It Works", href: "#factory" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-8 py-4 flex items-center justify-between bg-surface/85 backdrop-blur-xl border-b border-primary/15">
      <a
        href="#"
        className="text-2xl font-bold tracking-tighter text-primary uppercase font-[family-name:var(--font-space-grotesk)]"
      >
        SDLCFactory.ai
      </a>

      {/* Desktop links */}
      <div className="hidden md:flex gap-8 items-center">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="font-[family-name:var(--font-space-grotesk)] tracking-tight text-on-surface/70 hover:text-primary transition-colors duration-300 text-sm"
          >
            {link.label}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <a
          href="#cta"
          className="bg-primary text-on-primary px-6 py-2.5 font-[family-name:var(--font-space-grotesk)] font-bold uppercase tracking-widest text-xs hover:bg-primary-dim transition-all hover:shadow-[0_0_20px_rgba(143,245,255,0.25)] active:scale-95"
        >
          Get Early Access
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-primary"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {mobileOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 bg-surface-container border-b border-outline-variant/20 md:hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-[family-name:var(--font-space-grotesk)] text-on-surface/70 hover:text-primary transition-colors py-2"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
