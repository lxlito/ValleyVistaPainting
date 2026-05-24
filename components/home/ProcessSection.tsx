import { SectionHeading } from "@/components/SectionHeading";
import { ProcessTimeline } from "@/components/ProcessTimeline";

export function ProcessSection() {
  return (
    <section className="relative bg-cream py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Our Process"
          title={
            <>
              Four steps from <span className="gold-text">first call</span> to final coat.
            </>
          }
          description="Painting is the easy part. Communication, prep, and follow-through are where most contractors fall apart — and where we shine."
          className="max-w-3xl"
        />
        <div className="mt-16">
          <ProcessTimeline />
        </div>
      </div>
    </section>
  );
}
