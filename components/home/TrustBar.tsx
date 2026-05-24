import { stats } from "@/lib/data/stats";
import { StatCounter } from "@/components/StatCounter";
import { Reveal } from "@/components/Reveal";

export function TrustBar() {
  return (
    <section className="relative border-y border-navy/10 bg-cream-light py-14">
      <div className="container-page grid grid-cols-2 gap-y-10 md:grid-cols-4">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.08} className="flex flex-col items-start">
            <span className="text-display-sm font-extrabold leading-none text-navy">
              <StatCounter stat={stat} />
            </span>
            <span className="mt-2 h-[2px] w-8 bg-gold-gradient" aria-hidden />
            <span className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-charcoal/70">
              {stat.label}
            </span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
