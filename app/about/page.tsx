import type { Metadata } from "next";
import Image from "next/image";
import { ShieldCheck, Award, BadgeCheck, HardHat } from "lucide-react";
import { business } from "@/lib/data/business";
import { values } from "@/lib/data/values";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { CrownIcon } from "@/components/CrownIcon";
import { CTABand } from "@/components/home/CTABand";

export const metadata: Metadata = {
  title: "About",
  description:
    "Valley Vista Painting is a craft-first painting contractor serving residential and commercial clients with the Crown Standard finish.",
};

const credentials = [
  { icon: ShieldCheck, label: "Licensed & Insured", detail: business.licenseNumber },
  { icon: BadgeCheck, label: "Workmanship Warranty", detail: business.warranty },
  { icon: Award, label: "Top-Rated Locally", detail: "5★ across Google & Yelp" },
  { icon: HardHat, label: "Background-Checked Crew", detail: "Same crew, every visit" },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative bg-cream pt-40 pb-20">
        <div className="container-page grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <span className="eyebrow">
              <CrownIcon className="h-3.5 w-3.5" />
              About Valley Vista
            </span>
            <h1 className="mt-6 font-display text-display-lg font-extrabold uppercase tracking-tight text-navy text-balance">
              A family-run crew with a <span className="gold-text">furniture-grade</span> standard.
            </h1>
          </div>
          <p className="text-lg leading-relaxed text-charcoal/75 lg:col-span-4 text-pretty">
            Founded {new Date().getFullYear() - business.founded} years ago to bring genuine
            craft back to a trade that often races to the bottom.
          </p>
        </div>
        <div aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-gold-gradient opacity-60" />
      </section>

      {/* Story */}
      <section className="bg-cream-light py-24">
        <div className="container-page grid gap-14 lg:grid-cols-12 lg:items-center">
          <Reveal className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-editorial lg:col-span-5">
            <Image
              src="https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1400&q=80"
              alt="Valley Vista crew prepping a high-ceiling residential interior"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </Reveal>
          <div className="lg:col-span-7 lg:pl-8">
            <SectionHeading
              eyebrow="Our Story"
              title={
                <>
                  Built on word-of-mouth, <span className="gold-text">held to a higher bar.</span>
                </>
              }
            />
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-charcoal/80 text-pretty">
              <p>
                Valley Vista started with a single brush, a single ladder, and a stubborn
                refusal to cut corners. Years later, we still answer our own phones, still
                walk every job site, and still treat your home or property like it has our
                name on it.
              </p>
              <p>
                Our crew is W-2 and trained in-house — there are no rotating subcontractors,
                no surprise faces, and no excuses about who was supposed to clean up. We
                show up, we do the work, and we earn the next job from the one we just
                finished.
              </p>
              <p>
                The Crown Standard isn't marketing. It's the punch-list walkthrough we do
                with every client, and the warranty that backs it for two full years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-navy py-24 text-cream">
        <div className="container-page">
          <SectionHeading
            eyebrow="What We Stand For"
            tone="cream"
            title={
              <>
                Four <span className="gold-text">non-negotiables.</span>
              </>
            }
            description="If a project ever runs sideways, these are the values we fall back on to make it right."
            className="max-w-3xl"
          />

          <div className="mt-16 grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <Reveal key={value.title} delay={i * 0.07}>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cream/5 text-gold ring-1 ring-cream/10">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-bold text-cream">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-cream/70">
                    {value.description}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-cream py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Credentials"
            title={
              <>
                Receipts, not just <span className="gold-text">promises.</span>
              </>
            }
            className="max-w-3xl"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {credentials.map((c, i) => {
              const Icon = c.icon;
              return (
                <Reveal
                  key={c.label}
                  delay={i * 0.06}
                  className="rounded-2xl border border-navy/10 bg-cream-light p-7"
                >
                  <Icon className="h-6 w-6 text-gold" />
                  <p className="mt-5 font-display text-lg font-bold text-navy">
                    {c.label}
                  </p>
                  <p className="mt-2 text-sm text-charcoal/70">{c.detail}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
