"use client";

import { motion } from "framer-motion";

export default function BentoGrid() {
  return (
    <section className="py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Rapid Prototyping */}
          <motion.div
            className="md:col-span-8 bg-surface-container-low p-12 border border-outline-variant/10 relative overflow-hidden group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative z-10">
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold mb-4">
                Rapid Prototyping
              </h3>
              <p className="text-on-surface-variant max-w-md">
                Go from conceptual wireframes to a fully functional
                React/Node.js MVP in hours. The swarm handles the boilerplate,
                so you can handle the vision.
              </p>
            </div>
            <div className="absolute bottom-0 right-0 w-64 h-64 opacity-10 group-hover:opacity-20 transition-opacity flex items-center justify-center">
              <svg className="w-48 h-48 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.58-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
              </svg>
            </div>
          </motion.div>

          {/* 24/7 Output */}
          <motion.div
            className="md:col-span-4 bg-primary p-12 border border-primary text-on-primary"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold mb-4">
              24/7 Output
            </h3>
            <p className="text-on-primary/80">
              Your factory never sleeps. Deploy critical patches and features
              while the sun is down.
            </p>
          </motion.div>

          {/* Zero Debt */}
          <motion.div
            className="md:col-span-4 bg-surface-container-high p-12 border border-outline-variant/10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold mb-4">
              Zero Debt
            </h3>
            <p className="text-on-surface-variant">
              Automated refactoring agents constantly scan for technical debt and
              documentation gaps.
            </p>
          </motion.div>

          {/* Human-in-the-loop */}
          <motion.div
            className="md:col-span-8 bg-surface p-12 border border-outline-variant/10 relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h3 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold mb-4">
                  Human-in-the-loop
                </h3>
                <p className="text-on-surface-variant mb-6">
                  Maintain total control. Toggle manual approval for every PR or
                  set strict architectural guardrails that agents cannot bypass.
                </p>
                <div className="w-full h-12 bg-surface-container border border-outline-variant/30 flex items-center px-4 justify-between">
                  <span className="text-xs uppercase font-bold tracking-widest text-primary">
                    Autonomous Mode
                  </span>
                  <div className="w-10 h-5 bg-primary relative cursor-pointer">
                    <div className="absolute right-1 top-1 bottom-1 w-3 bg-on-primary" />
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 aspect-video bg-surface-container-highest border border-outline-variant/20 flex items-center justify-center">
                <svg className="w-12 h-12 text-outline" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
