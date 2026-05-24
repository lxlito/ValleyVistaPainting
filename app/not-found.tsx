import { Button } from "@/components/Button";
import { CrownIcon } from "@/components/CrownIcon";

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center bg-cream pt-32">
      <div className="container-page text-center">
        <CrownIcon className="mx-auto h-10 w-10" />
        <p className="mt-6 eyebrow justify-center">404 — Page not found</p>
        <h1 className="mt-4 font-display text-display-lg font-extrabold uppercase tracking-tight text-navy">
          This wall is <span className="gold-text">blank.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-md text-lg text-charcoal/75 text-pretty">
          The page you were looking for doesn't exist. Let's get you back to something
          painted.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Button href="/" variant="gold" withArrow>
            Back to home
          </Button>
          <Button href="/work" variant="outline">
            See our work
          </Button>
        </div>
      </div>
    </section>
  );
}
