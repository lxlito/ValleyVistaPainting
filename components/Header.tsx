"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { navLinks } from "@/lib/data/nav";
import { Button } from "./Button";
import { MobileNav } from "./MobileNav";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[60] transition-all duration-500 ease-editorial",
          scrolled
            ? "bg-navy/95 text-cream backdrop-blur-md shadow-[0_8px_28px_-12px_rgba(0,0,0,0.35)]"
            : "bg-transparent text-navy",
        )}
      >
        <div className="container-page flex h-20 items-center justify-between">
          <Link href="/" aria-label="Valley Vista Painting home">
            <Logo tone={scrolled ? "cream" : "navy"} />
          </Link>

          <nav className="hidden items-center gap-10 lg:flex" aria-label="Primary">
            {navLinks.slice(1).map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "link-underline relative text-sm font-semibold uppercase tracking-[0.18em] transition-colors",
                    scrolled ? "text-cream hover:text-gold" : "text-navy hover:text-gold",
                    active && "text-gold",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Button href="/contact" variant="gold" withArrow>
              Get a Free Quote
            </Button>
          </div>

          <button
            type="button"
            className={cn(
              "inline-flex items-center justify-center rounded-full border p-3 lg:hidden",
              scrolled
                ? "border-cream/20 text-cream hover:bg-cream/10"
                : "border-navy/20 text-navy hover:bg-navy/5",
            )}
            aria-label="Open menu"
            onClick={() => setOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      <MobileNav open={open} onClose={() => setOpen(false)} />
    </>
  );
}
