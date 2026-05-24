import { SectionHeading } from "@/components/SectionHeading";
import { TestimonialSlider } from "@/components/TestimonialSlider";
import { testimonials } from "@/lib/data/testimonials";

export function TestimonialsSection() {
  return (
    <section className="relative bg-navy py-24 text-cream md:py-32">
      <div className="container-page grid gap-14 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-4">
          <SectionHeading
            eyebrow="Kind Words"
            tone="cream"
            title={
              <>
                Five stars,
                <br />
                <span className="gold-text">five hundred times.</span>
              </>
            }
            description="The reputation we've built isn't from marketing — it's from clients who love telling their friends who painted their house."
          />
        </div>
        <div className="lg:col-span-8">
          <TestimonialSlider testimonials={testimonials} />
        </div>
      </div>
    </section>
  );
}
