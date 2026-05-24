import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import { services } from "@/lib/data/services";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { CrownIcon } from "@/components/CrownIcon";
import { CTABand } from "@/components/home/CTABand";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Residential and commercial painting services — interior, exterior, cabinet refinishing, specialty finishes, and ongoing maintenance.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Page header */}
      <section className="relative isolate overflow-hidden bg-cream pt-40 pb-20">
        <div className="container-page grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <span className="eyebrow">
              <CrownIcon className="h-3.5 w-3.5" />
              Services
            </span>
            <h1 className="mt-6 font-display text-display-lg font-extrabold uppercase tracking-tight text-navy text-balance">
              From a single accent wall to a <span className="gold-text">million-square-foot facility.</span>
            </h1>
          </div>
          <p className="text-lg leading-relaxed text-charcoal/75 lg:col-span-4 text-pretty">
            Every service below is delivered by our own W-2 crew — no rotating subs, no
            surprise faces in your home or business.
          </p>
        </div>
        <div aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-gold-gradient opacity-60" />
      </section>

      {/* Capability matrix */}
      <section className="bg-cream-light py-20">
        <div className="container-page grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <Reveal>
            <div className="rounded-2xl border border-navy/10 bg-cream p-8">
              <p className="eyebrow">Residential</p>
              <h3 className="mt-3 font-display text-2xl font-bold text-navy">
                For homeowners
              </h3>
              <ul className="mt-5 space-y-2 text-charcoal/75">
                <Capability>Whole-home interior repaints</Capability>
                <Capability>Exterior siding, stucco & trim</Capability>
                <Capability>Cabinet & millwork refinishing</Capability>
                <Capability>Decks, fences & garage floors</Capability>
                <Capability>Color consultations</Capability>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rounded-2xl border border-navy/10 bg-cream p-8">
              <p className="eyebrow">Commercial</p>
              <h3 className="mt-3 font-display text-2xl font-bold text-navy">
                For property teams
              </h3>
              <ul className="mt-5 space-y-2 text-charcoal/75">
                <Capability>Office, retail & hospitality buildouts</Capability>
                <Capability>Multi-family & HOA repaints</Capability>
                <Capability>After-hours & phased scheduling</Capability>
                <Capability>Tenant turnover packages</Capability>
                <Capability>Code-compliant coatings</Capability>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="rounded-2xl border border-navy/10 bg-navy p-8 text-cream">
              <p className="eyebrow">Specialty</p>
              <h3 className="mt-3 font-display text-2xl font-bold">
                Going further
              </h3>
              <ul className="mt-5 space-y-2 text-cream/75">
                <Capability tone="cream">Sprayed lacquer & enamel</Capability>
                <Capability tone="cream">Faux & accent finishes</Capability>
                <Capability tone="cream">Wallpaper removal & install</Capability>
                <Capability tone="cream">Epoxy & garage flooring</Capability>
                <Capability tone="cream">Drywall & plaster repair</Capability>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Each service in detail */}
      <section className="bg-cream py-24">
        <div className="container-page space-y-24 md:space-y-32">
          {services.map((service, i) => {
            const reverse = i % 2 === 1;
            return (
              <article
                key={service.slug}
                id={service.slug}
                className="grid gap-10 lg:grid-cols-12 lg:items-center"
              >
                <Reveal
                  className={`relative aspect-[4/3] overflow-hidden rounded-3xl shadow-editorial lg:col-span-6 ${
                    reverse ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover transition-transform duration-[1200ms] hover:scale-105"
                  />
                </Reveal>
                <div className={`lg:col-span-6 ${reverse ? "lg:order-1 lg:pr-12" : "lg:pl-12"}`}>
                  <span className="eyebrow">
                    <CrownIcon className="h-3.5 w-3.5" />
                    {service.category}
                  </span>
                  <h2 className="mt-5 font-display text-display-sm font-extrabold text-navy text-balance">
                    {service.title}
                  </h2>
                  <span className="mt-5 block h-[2px] w-12 bg-gold-gradient" />
                  <p className="mt-6 text-lg leading-relaxed text-charcoal/75 text-pretty">
                    {service.short}
                  </p>
                  <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                    {service.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-charcoal/80">
                        <Check className="mt-1 h-4 w-4 shrink-0 text-gold" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-10">
                    <Button href="/contact" variant="navy" withArrow>
                      Get a quote for {service.title.toLowerCase()}
                    </Button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <CTABand />
    </>
  );
}

function Capability({
  children,
}: {
  children: React.ReactNode;
  tone?: "navy" | "cream";
}) {
  return (
    <li className="flex items-start gap-2">
      <Check className="mt-1 h-4 w-4 shrink-0 text-gold" />
      <span>{children}</span>
    </li>
  );
}
