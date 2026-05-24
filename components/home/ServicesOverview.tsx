import { services } from "@/lib/data/services";
import { ServiceCard } from "@/components/ServiceCard";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export function ServicesOverview() {
  return (
    <section id="services" className="relative bg-cream py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="What we do"
          title={
            <>
              Six disciplines.
              <br />
              <span className="gold-text">One standard.</span>
            </>
          }
          description="From a single accent wall to a 50,000 sq ft commercial repaint — every project is run by the same craft-first crew."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.slug} delay={i * 0.06}>
                <ServiceCard
                  title={service.title}
                  short={service.short}
                  slug={service.slug}
                  category={service.category}
                  icon={<Icon className="h-5 w-5" />}
                />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
