import { values } from "@/lib/data/values";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export function WhyValleyVista() {
  return (
    <section className="relative bg-navy py-24 text-cream md:py-32">
      {/* Top gold rule */}
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gold-gradient opacity-60" />

      <div className="container-page grid gap-14 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="Why Valley Vista"
            tone="cream"
            title={
              <>
                A small crew with <span className="gold-text">large-scale standards.</span>
              </>
            }
            description="We're not the cheapest quote you'll get. We're the one you'll show off when you have people over."
          />
        </div>

        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:col-span-7">
          {values.map((value, i) => {
            const Icon = value.icon;
            return (
              <Reveal key={value.title} delay={i * 0.08}>
                <div className="flex items-start gap-5">
                  <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cream/5 text-gold ring-1 ring-cream/10">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-cream">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-base leading-relaxed text-cream/70">
                      {value.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
