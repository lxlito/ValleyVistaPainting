"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import type { Project } from "@/lib/data/projects";
import { cn } from "@/lib/utils";

type Props = {
  project: Project;
  onClick?: (project: Project) => void;
  className?: string;
  priority?: boolean;
};

const spanClass: Record<NonNullable<Project["span"]> | "default", string> = {
  default: "md:col-span-4 md:row-span-1",
  tall: "md:col-span-4 md:row-span-2",
  wide: "md:col-span-8 md:row-span-1",
  square: "md:col-span-4 md:row-span-1",
};

export function ProjectCard({ project, onClick, className, priority }: Props) {
  const span = spanClass[project.span ?? "default"];

  return (
    <motion.button
      type="button"
      onClick={() => onClick?.(project)}
      whileHover={{ scale: 1.005 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "group relative isolate flex w-full overflow-hidden rounded-2xl bg-navy text-left",
        "min-h-[320px]",
        span,
        className,
      )}
    >
      <Image
        src={project.image}
        alt={project.title}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover transition-transform duration-[1200ms] ease-editorial group-hover:scale-105"
      />

      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100"
      />

      <div className="relative z-10 mt-auto flex w-full items-end justify-between p-6 md:p-8">
        <div>
          <p className="text-eyebrow font-semibold uppercase tracking-[0.2em] text-gold">
            {project.categories.join(" · ")}
          </p>
          <h3 className="mt-3 font-display text-2xl font-bold text-cream md:text-3xl">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-cream/70">
            {project.location} · {project.year}
          </p>
        </div>
        <span
          aria-hidden
          className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold-gradient text-navy transition-transform duration-500 ease-editorial group-hover:rotate-45"
        >
          <Plus className="h-5 w-5" />
        </span>
      </div>
    </motion.button>
  );
}
