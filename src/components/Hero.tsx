"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-16 overflow-hidden dot-matrix pt-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-7xl mx-auto items-center">
        {/* Left: Copy */}
        <motion.div
          className="z-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
            System Status: Operational
          </div>

          <h1 className="font-[family-name:var(--font-space-grotesk)] text-5xl md:text-7xl font-bold tracking-tighter text-on-surface leading-[0.95] mb-6">
            The Autonomous{" "}
            <span className="text-primary">Factory</span> for
            Software Engineering.
          </h1>

          <p className="text-on-surface-variant text-lg md:text-xl max-w-lg mb-10 font-light leading-relaxed">
            Orchestrate an entire swarm of AI agents to take your tickets from
            &apos;To Do&apos; to &apos;Production&apos; with zero manual intervention.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#cta"
              className="bg-primary text-on-primary px-8 py-4 font-[family-name:var(--font-space-grotesk)] font-bold uppercase tracking-widest text-sm shadow-[0_0_20px_rgba(143,245,255,0.15)] hover:shadow-[0_0_30px_rgba(143,245,255,0.3)] transition-all active:scale-95"
            >
              Get Early Access
            </a>
            <a
              href="#factory"
              className="border border-outline-variant px-8 py-4 font-[family-name:var(--font-space-grotesk)] font-bold uppercase tracking-widest text-sm text-primary hover:bg-primary/5 transition-all"
            >
              Watch the Swarm
            </a>
          </div>
        </motion.div>

        {/* Right: Pipeline Terminal */}
        <motion.div
          className="relative aspect-square lg:aspect-auto h-[500px] lg:h-[600px] flex items-center justify-center"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-secondary/5 blur-3xl rounded-full" />

          <div className="relative w-full h-full border border-outline-variant/30 glass-panel p-8 flex flex-col justify-between overflow-hidden">
            {/* Header */}
            <div className="flex justify-between items-start">
              <div className="font-mono text-[10px] text-primary-dim/60 uppercase tracking-widest">
                Pipeline: Main_Branch_01
              </div>
              <div className="flex gap-2">
                <div className="w-2 h-2 bg-primary animate-pulse" />
                <div className="w-2 h-2 bg-primary/30" />
                <div className="w-2 h-2 bg-primary/30" />
              </div>
            </div>

            {/* Pipeline Steps */}
            <div className="flex-1 flex flex-col justify-center gap-6 py-12">
              {/* Ingesting */}
              <div className="h-16 border-l-2 border-primary/20 flex items-center px-6 relative group overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 -translate-x-full group-hover:translate-x-0 transition-transform duration-1000" />
                <svg className="w-6 h-6 text-primary mr-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase text-outline tracking-widest">
                    Ingesting Ticket
                  </span>
                  <span className="font-mono text-sm">
                    GH-882: Auth Refactor
                  </span>
                </div>
              </div>

              {/* Orchestration */}
              <div className="h-16 border-l-2 border-secondary/20 flex items-center px-6 relative">
                <svg className="w-6 h-6 text-secondary mr-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
                <div className="flex flex-col flex-1">
                  <span className="text-[10px] uppercase text-outline tracking-widest">
                    Swarm Orchestration
                  </span>
                  <span className="font-mono text-sm">
                    Agent Node Alpha assigned...
                  </span>
                </div>
                <div className="w-12 h-1 bg-surface-container-highest overflow-hidden">
                  <div className="h-full bg-secondary w-2/3" />
                </div>
              </div>

              {/* Validation */}
              <div className="h-16 border-l-2 border-primary/20 flex items-center px-6 opacity-40">
                <svg className="w-6 h-6 text-primary mr-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase text-outline tracking-widest">
                    Validation
                  </span>
                  <span className="font-mono text-sm">
                    Awaiting Unit Test Suite
                  </span>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-outline-variant/20 pt-4 flex justify-between items-center">
              <span className="text-[10px] text-outline uppercase font-bold tracking-widest">
                Production Ready
              </span>
              <span className="font-mono text-xs text-primary">v2.4.12-rc</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
