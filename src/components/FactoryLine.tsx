"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Ingest",
    description:
      "Connect GitHub or Jira. Our agents scan issues to understand intent, complexity, and dependencies.",
  },
  {
    num: "02",
    title: "Orchestrate",
    description:
      "Langgraph handles the logic flow, selecting the right LLM (GPT-4o, Claude 3.5) for specific technical tasks.",
  },
  {
    num: "03",
    title: "Execute",
    description:
      "Agents pair-program in a sandbox, writing code, running tests, and fixing linter errors autonomously.",
  },
  {
    num: "04",
    title: "Ship",
    description:
      "The swarm creates a detailed PR. Once approved (or auto-merged), it flows through your CI/CD to production.",
  },
];

export default function FactoryLine() {
  return (
    <section className="py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold tracking-tighter mb-2">
              The Factory Line
            </h2>
            <p className="text-on-surface-variant">
              4 Steps from intent to deployment.
            </p>
          </div>
          <div className="text-sm font-mono text-primary animate-pulse">
            SYSTEM_SCAN: CONTINUOUS
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-outline-variant/20 border border-outline-variant/20">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              className="bg-surface p-12 hover:bg-surface-container-high transition-colors duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="text-primary text-6xl font-[family-name:var(--font-space-grotesk)] font-bold mb-8 opacity-20 group-hover:opacity-40 transition-opacity">
                {step.num}
              </div>
              <h4 className="font-[family-name:var(--font-space-grotesk)] font-bold text-xl mb-4 uppercase">
                {step.title}
              </h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
