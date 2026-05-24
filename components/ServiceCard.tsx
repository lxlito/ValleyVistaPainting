"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  title: string;
  short: string;
  slug: string;
  category: string;
  // Render the icon at the call site (server component) and pass the element in.
  // This avoids serializing a function across the server→client boundary.
  icon: ReactNode;
};

export function ServiceCard({ title, short, slug, category, icon }: Props) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-navy/10 bg-cream-light p-8 shadow-[0_1px_0_rgba(19,32,59,0.05)] transition-shadow duration-500 hover:shadow-editorial"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-px rounded-2xl bg-gold-gradient opacity-0 transition-opacity duration-500 group-hover:opacity-10"
      />

      <div className="relative">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-gold transition-colors duration-500 group-hover:bg-gold-gradient group-hover:text-navy">
          {icon}
        </div>
        <h3 className="mt-6 font-display text-2xl font-bold text-navy">{title}</h3>
        <p className="mt-3 text-base leading-relaxed text-charcoal/75">{short}</p>
      </div>

      <div className="relative mt-8 flex items-center justify-between">
        <span className="text-eyebrow font-semibold uppercase tracking-[0.2em] text-gold">
          {category}
        </span>
        <Link
          href={`/services#${slug}`}
          className="link-underline inline-flex items-center gap-1.5 text-sm font-semibold text-navy"
          aria-label={`Learn more about ${title}`}
        >
          Learn more
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </motion.article>
  );
}
