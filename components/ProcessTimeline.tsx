"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/lib/data/process";
import { Reveal } from "./Reveal";

export function ProcessTimeline() {
  return (
    <ol className="relative grid gap-10 lg:grid-cols-4 lg:gap-8">
      {/* Connecting line — horizontal on lg+, vertical on mobile */}
      <div
        aria-hidden
        className="absolute left-6 top-12 hidden h-[calc(100%-3rem)] w-px bg-gold/30 sm:block lg:left-0 lg:top-12 lg:h-px lg:w-full"
      />

      {processSteps.map((step, i) => (
        <Reveal key={step.number} delay={i * 0.08} as="li" className="relative">
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
            className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-gold-gradient font-display text-base font-bold text-navy shadow-gold"
          >
            {step.number}
          </motion.div>
          <h3 className="mt-6 font-display text-xl font-bold text-navy">
            {step.title}
          </h3>
          <p className="mt-3 text-base leading-relaxed text-charcoal/70">
            {step.description}
          </p>
        </Reveal>
      ))}
    </ol>
  );
}
