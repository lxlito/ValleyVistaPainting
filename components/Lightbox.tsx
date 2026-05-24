"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";
import type { Project } from "@/lib/data/projects";

type Props = {
  project: Project | null;
  onClose: () => void;
};

export function Lightbox({ project, onClose }: Props) {
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (!project) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = original;
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key="lightbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: prefersReduced ? 0 : 0.3 }}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-navy/95 p-4 md:p-10 backdrop-blur"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={project.title}
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 inline-flex h-12 w-12 items-center justify-center rounded-full border border-cream/20 text-cream hover:bg-cream/10 md:right-8 md:top-8"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>

          <motion.div
            initial={{ scale: 0.96, y: 16, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ duration: prefersReduced ? 0 : 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative grid w-full max-w-5xl gap-6 overflow-hidden rounded-3xl bg-navy lg:grid-cols-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3] w-full lg:col-span-3 lg:aspect-auto">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-between p-8 text-cream lg:col-span-2">
              <div>
                <p className="text-eyebrow font-semibold uppercase tracking-[0.2em] text-gold">
                  {project.categories.join(" · ")}
                </p>
                <h3 className="mt-4 font-display text-3xl font-extrabold uppercase tracking-tight">
                  {project.title}
                </h3>
                <span className="mt-4 block h-[2px] w-10 bg-gold-gradient" />
                <p className="mt-5 text-base leading-relaxed text-cream/75">
                  {project.summary}
                </p>
              </div>
              <dl className="mt-10 grid grid-cols-2 gap-y-4 border-t border-cream/10 pt-6 text-sm">
                <dt className="text-cream/55">Location</dt>
                <dd className="text-right text-cream">{project.location}</dd>
                <dt className="text-cream/55">Year</dt>
                <dd className="text-right text-cream">{project.year}</dd>
              </dl>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
