import Link from "next/link";
import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";
import { business } from "@/lib/data/business";
import { navLinks } from "@/lib/data/nav";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-navy text-cream/80">
      <div className="container-page grid gap-14 py-20 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Logo tone="cream" />
          <p className="mt-6 max-w-md text-base leading-relaxed text-cream/70">
            {business.shortDescription}
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a
              href={business.social.instagram}
              aria-label="Instagram"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 transition hover:border-gold hover:text-gold"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={business.social.facebook}
              aria-label="Facebook"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 transition hover:border-gold hover:text-gold"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="lg:col-span-3">
          <p className="eyebrow">Navigate</p>
          <ul className="mt-6 space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="link-underline font-medium text-cream/85 hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-4">
          <p className="eyebrow">Contact</p>
          <ul className="mt-6 space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href={business.phoneHref} className="link-underline">
                {business.phone}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href={`mailto:${business.email}`} className="link-underline">
                {business.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>{business.serviceArea}</span>
            </li>
          </ul>
          <p className="mt-8 text-xs uppercase tracking-[0.2em] text-cream/50">
            {business.licenseNumber} · {business.insurance}
          </p>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-page flex flex-col items-start justify-between gap-3 py-6 text-xs uppercase tracking-[0.2em] text-cream/50 md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} {business.legalName}. All rights reserved.
          </p>
          <p>Designed in-house · The Crown Standard</p>
        </div>
      </div>

      {/* Decorative gold rule */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gold-gradient opacity-70"
      />
    </footer>
  );
}
