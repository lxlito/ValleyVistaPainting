"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";
import { navLinks } from "@/lib/data/nav";
import { business } from "@/lib/data/business";
import { Button } from "./Button";
import { Logo } from "./Logo";

type Props = { open: boolean; onClose: () => void };

export function MobileNav({ open, onClose }: Props) {
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="drawer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: prefersReduced ? 0 : 0.3 }}
          className="fixed inset-0 z-[80] bg-navy text-cream"
          role="dialog"
          aria-modal="true"
          aria-label="Main navigation"
        >
          <div className="container-page flex h-20 items-center justify-between">
            <Logo tone="cream" />
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="rounded-full border border-cream/20 px-4 py-2 text-sm uppercase tracking-[0.2em] hover:bg-cream/10"
            >
              Close
            </button>
          </div>

          <nav className="container-page mt-8 flex flex-col gap-2">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: prefersReduced ? 0 : -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: prefersReduced ? 0 : 0.45,
                  delay: prefersReduced ? 0 : 0.08 + i * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="block border-b border-cream/10 py-5 font-display text-3xl font-extrabold uppercase tracking-tight hover:text-gold"
                >
                  <span className="mr-3 text-sm font-medium text-gold/80">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="container-page mt-10 flex flex-col gap-6">
            <Button href="/contact" variant="gold" size="lg" withArrow>
              Get a Free Quote
            </Button>
            <div className="text-sm text-cream/70">
              <a href={business.phoneHref} className="link-underline">
                {business.phone}
              </a>
              <br />
              <a href={`mailto:${business.email}`} className="link-underline">
                {business.email}
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
