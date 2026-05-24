import { Button } from "@/components/Button";
import { CrownIcon } from "@/components/CrownIcon";
import { Reveal } from "@/components/Reveal";

export function CTABand() {
  return (
    <section className="relative isolate overflow-hidden bg-navy py-24 text-cream md:py-32">
      {/* Decorative gold blur */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-gold/20 blur-3xl"
      />
      <div className="container-page relative flex flex-col items-center text-center">
        <Reveal>
          <CrownIcon className="h-8 w-8" />
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 max-w-3xl font-display text-display-lg font-extrabold uppercase tracking-tight text-cream text-balance">
            Ready to transform your space?
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-6 max-w-xl text-lg text-cream/75 text-pretty">
            Free on-site estimates, color guidance, and a detailed plan — usually within
            one business day.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" variant="gold" size="lg" withArrow>
              Get a Free Quote
            </Button>
            <Button href="/services" variant="ghost" size="lg" className="text-cream hover:text-gold">
              Explore services
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
