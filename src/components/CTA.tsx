"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section
      id="cta"
      className="py-24 px-6 md:px-16 border-t border-outline-variant/10 bg-surface"
    >
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-[family-name:var(--font-space-grotesk)] text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-none">
          Start Your{" "}
          <span className="text-secondary">Synthetic</span> Factory Today.
        </h2>
        <p className="text-xl text-on-surface-variant mb-12">
          Join the waitlist for the SDLCFactory.ai private beta.
        </p>

        <form
          className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="work@company.ai"
            className="bg-surface-container-lowest border-0 border-b border-outline-variant text-on-surface focus:ring-0 focus:border-primary px-4 py-4 flex-1 font-mono text-sm outline-none transition-colors"
          />
          <button
            type="submit"
            className="bg-primary text-on-primary px-8 py-4 font-[family-name:var(--font-space-grotesk)] font-bold uppercase tracking-widest text-sm hover:shadow-[0_0_30px_rgba(143,245,255,0.3)] transition-all active:scale-95"
          >
            Join Waitlist
          </button>
        </form>

        <div className="mt-8 flex justify-center gap-6 text-[10px] font-bold uppercase tracking-widest text-outline">
          <span>SOC2 Ready</span>
          <span>GDPR Compliant</span>
          <span>Private Deployments</span>
        </div>
      </motion.div>
    </section>
  );
}
