import { projects } from "@/lib/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="relative bg-cream-light py-24 md:py-32">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Selected Work"
            title={
              <>
                Recent projects we're <span className="gold-text">proud of.</span>
              </>
            }
            description="A handful of recent residential and commercial transformations — the kind of work that earns word-of-mouth."
            className="max-w-2xl"
          />
          <Reveal delay={0.2}>
            <Button href="/work" variant="outline" withArrow>
              See full portfolio
            </Button>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:auto-rows-[260px] md:grid-cols-12">
          {featured.map((project, i) => (
            <Reveal
              key={project.slug}
              delay={i * 0.08}
              className={
                i === 0
                  ? "md:col-span-8 md:row-span-2"
                  : i === 1
                  ? "md:col-span-4 md:row-span-1"
                  : "md:col-span-4 md:row-span-1"
              }
            >
              <ProjectCard project={project} priority={i === 0} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
