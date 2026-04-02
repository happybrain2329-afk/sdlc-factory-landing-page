"use client";

import { motion } from "framer-motion";

const techItems = [
  "LangGraph",
  "Claude + GPT-4o",
  "PostgreSQL",
  "ChromaDB",
  "GitHub API",
  "Jira REST v3",
  "BullMQ",
];

export default function TechStack() {
  return (
    <section id="tech" className="py-24 bg-surface-container-highest">
      <div className="max-w-7xl mx-auto px-6 md:px-16 text-center">
        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-outline mb-12 block">
          Built on Industrial Standards
        </span>

        <motion.div
          className="flex flex-wrap justify-center items-center gap-4 md:gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {techItems.map((item) => (
            <div
              key={item}
              className="font-mono text-sm text-on-surface-variant px-5 py-3 border border-outline-variant/30 hover:border-primary hover:text-primary hover:shadow-[0_0_15px_rgba(143,245,255,0.15)] transition-all duration-300 cursor-default"
            >
              {item}
            </div>
          ))}
        </motion.div>

        <p className="mt-12 text-on-surface-variant max-w-xl mx-auto text-sm italic">
          &ldquo;Leveraging state-of-the-art orchestration and vector memory to
          ensure code integrity and architectural consistency across millions of
          lines of code.&rdquo;
        </p>
      </div>
    </section>
  );
}
