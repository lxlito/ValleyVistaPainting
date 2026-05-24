"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects, projectFilters, type Project, type ProjectCategory } from "@/lib/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { CrownIcon } from "@/components/CrownIcon";
import { Lightbox } from "@/components/Lightbox";
import { BeforeAfter } from "@/components/BeforeAfter";
import { CTABand } from "@/components/home/CTABand";
import { Reveal } from "@/components/Reveal";

export default function WorkPage() {
  const [filter, setFilter] = useState<(typeof projectFilters)[number]>("All");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filtered = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((p) => p.categories.includes(filter as ProjectCategory)),
    [filter],
  );

  const beforeAfter = projects.find((p) => p.beforeImage);

  return (
    <>
      <section className="relative bg-cream pt-40 pb-16">
        <div className="container-page">
          <span className="eyebrow">
            <CrownIcon className="h-3.5 w-3.5" />
            Selected Work
          </span>
          <h1 className="mt-6 max-w-4xl font-display text-display-lg font-extrabold uppercase tracking-tight text-navy text-balance">
            A portfolio built one <span className="gold-text">clean line</span> at a time.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-charcoal/75 text-pretty">
            Filter by category to explore residential and commercial projects from the
            last few years. Tap any project for more detail.
          </p>
        </div>
        <div aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-gold-gradient opacity-60" />
      </section>

      {/* Filter chips */}
      <section className="sticky top-20 z-30 border-b border-navy/10 bg-cream/90 py-4 backdrop-blur">
        <div className="container-page flex flex-wrap items-center gap-2">
          {projectFilters.map((f) => {
            const active = filter === f;
            return (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full px-5 py-2 text-sm font-semibold uppercase tracking-[0.16em] transition-colors ${
                  active
                    ? "bg-navy text-cream"
                    : "border border-navy/20 text-navy hover:bg-navy hover:text-cream"
                }`}
                aria-pressed={active}
              >
                {f}
              </button>
            );
          })}
          <span className="ml-auto text-xs uppercase tracking-[0.2em] text-charcoal/60">
            {filtered.length} {filtered.length === 1 ? "project" : "projects"}
          </span>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-cream py-16 md:py-20">
        <div className="container-page">
          <motion.div
            layout
            className="grid gap-6 md:auto-rows-[260px] md:grid-cols-12"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.04 }}
                  className={
                    project.span === "wide"
                      ? "md:col-span-8 md:row-span-1"
                      : project.span === "tall"
                      ? "md:col-span-4 md:row-span-2"
                      : "md:col-span-4 md:row-span-1"
                  }
                >
                  <ProjectCard project={project} onClick={setActiveProject} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <p className="py-20 text-center text-charcoal/60">
              No projects match this filter yet — check back soon.
            </p>
          )}
        </div>
      </section>

      {/* Before/After section */}
      {beforeAfter && beforeAfter.beforeImage && (
        <section className="bg-cream-light py-24">
          <div className="container-page">
            <Reveal>
              <span className="eyebrow">
                <CrownIcon className="h-3.5 w-3.5" />
                Before & After
              </span>
              <h2 className="mt-5 max-w-3xl font-display text-display-md font-extrabold text-navy text-balance">
                Drag to see the <span className="gold-text">transformation.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.15} className="mt-10">
              <BeforeAfter
                before={beforeAfter.beforeImage}
                after={beforeAfter.image}
                alt={beforeAfter.title}
              />
              <p className="mt-4 text-sm text-charcoal/60">
                {beforeAfter.title} — {beforeAfter.location}, {beforeAfter.year}
              </p>
            </Reveal>
          </div>
        </section>
      )}

      <CTABand />

      <Lightbox project={activeProject} onClose={() => setActiveProject(null)} />
    </>
  );
}
