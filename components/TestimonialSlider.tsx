"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import type { Testimonial } from "@/lib/data/testimonials";

type Props = { testimonials: Testimonial[] };

export function TestimonialSlider({ testimonials }: Props) {
  const [index, setIndex] = useState(0);
  const prefersReduced = useReducedMotion();
  const t = testimonials[index];

  useEffect(() => {
    if (prefersReduced) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(id);
  }, [prefersReduced, testimonials.length]);

  const go = (dir: 1 | -1) =>
    setIndex((i) => (i + dir + testimonials.length) % testimonials.length);

  return (
    <div className="relative overflow-hidden rounded-3xl border border-cream/10 bg-navy/40 p-8 md:p-14">
      <Quote
        aria-hidden
        className="absolute right-8 top-8 h-20 w-20 text-gold/20 md:right-14 md:top-14 md:h-28 md:w-28"
      />

      <div className="relative min-h-[260px] md:min-h-[200px]">
        <AnimatePresence mode="wait">
          <motion.figure
            key={index}
            initial={{ opacity: 0, y: prefersReduced ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: prefersReduced ? 0 : -20 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10"
          >
            <div className="flex items-center gap-1 text-gold" aria-label={`${t.rating} out of 5 stars`}>
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-gold" />
              ))}
            </div>

            <blockquote className="mt-6 max-w-3xl font-display text-2xl font-medium leading-snug text-cream text-balance md:text-3xl">
              “{t.quote}”
            </blockquote>

            <figcaption className="mt-8 flex flex-wrap items-baseline gap-x-4 gap-y-1 text-sm">
              <span className="font-semibold text-cream">{t.name}</span>
              <span className="text-cream/60">{t.role}</span>
              <span className="text-gold">·</span>
              <span className="text-cream/60">{t.projectType}</span>
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>

      <div className="relative z-10 mt-10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === index ? "w-10 bg-gold" : "w-5 bg-cream/20"
              }`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous testimonial"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream/15 text-cream/80 transition hover:border-gold hover:text-gold"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next testimonial"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream/15 text-cream/80 transition hover:border-gold hover:text-gold"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
