"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/Button";
import { CrownIcon } from "@/components/CrownIcon";

export function Hero() {
  const ref = useRef<HTMLElement | null>(null);
  const prefersReduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", prefersReduced ? "0%" : "18%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.55, 0.85]);

  return (
    <section
      ref={ref}
      className="relative isolate flex min-h-screen items-end overflow-hidden bg-cream pt-32 pb-16 lg:pt-40 lg:pb-24"
    >
      <div className="container-page relative z-10 grid w-full gap-10 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="eyebrow"
          >
            <CrownIcon className="h-3.5 w-3.5" />
            The Crown Standard · Residential & Commercial
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="mt-6 font-display text-display-xl font-extrabold uppercase leading-[0.95] tracking-tight text-navy text-balance"
          >
            Painting <br />
            Worthy of <br />
            <span className="gold-text">a Crown.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-charcoal/80 md:text-xl text-pretty"
          >
            Valley Vista Painting transforms homes, offices, and storefronts with a
            craft-first approach — premium materials, hand-cut lines, and a finish
            we'd put our name on (we do).
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button href="/contact" variant="gold" size="lg" withArrow>
              Get a Free Estimate
            </Button>
            <Button href="/work" variant="outline" size="lg">
              View Our Work
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="relative lg:col-span-5"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-navy/10 shadow-editorial">
            <motion.div style={{ y: imageY }} className="absolute inset-0 -top-[10%] h-[120%]">
              <Image
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=80"
                alt="Painter applying a final coat to a sunlit modern interior"
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </motion.div>
            <motion.div
              aria-hidden
              style={{ opacity: overlayOpacity }}
              className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent"
            />

            {/* Floating badge */}
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-2xl border border-cream/15 bg-navy/85 px-5 py-4 text-cream backdrop-blur">
              <div>
                <p className="text-eyebrow font-semibold uppercase tracking-[0.2em] text-gold">
                  Workmanship Warranty
                </p>
                <p className="mt-1 font-display text-lg font-bold">2-Year Crown Standard</p>
              </div>
              <CrownIcon className="h-7 w-7" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative gold rule + scroll cue */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gold-gradient opacity-60"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="container-page pointer-events-none absolute inset-x-0 bottom-6 flex justify-center text-navy/60 lg:justify-end"
      >
        <span className="inline-flex items-center gap-2 text-eyebrow font-semibold uppercase">
          Scroll <ArrowDown className="h-3 w-3 animate-bounce" />
        </span>
      </motion.div>
    </section>
  );
}
