"use client";

import { motion } from "framer-motion";
import HexagonalHiveSwarm from "./HexagonalHiveSwarm";

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

        {/* Right: Hexagonal Hive Swarm */}
        <motion.div
          className="relative aspect-square lg:aspect-auto h-[500px] lg:h-[600px] flex items-center justify-center w-full"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <HexagonalHiveSwarm />
        </motion.div>
      </div>
    </section>
  );
}
