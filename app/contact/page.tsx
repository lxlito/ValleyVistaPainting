import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { business } from "@/lib/data/business";
import { QuoteForm } from "@/components/QuoteForm";
import { SectionHeading } from "@/components/SectionHeading";
import { CrownIcon } from "@/components/CrownIcon";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Get a Free Quote",
  description:
    "Request a free on-site painting estimate from Valley Vista. Most quotes returned within one business day.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative bg-cream pt-40 pb-16">
        <div className="container-page grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <span className="eyebrow">
              <CrownIcon className="h-3.5 w-3.5" />
              Get a Free Quote
            </span>
            <h1 className="mt-6 font-display text-display-lg font-extrabold uppercase tracking-tight text-navy text-balance">
              Tell us about your project — we'll take it from <span className="gold-text">there.</span>
            </h1>
          </div>
          <p className="text-lg leading-relaxed text-charcoal/75 lg:col-span-4 text-pretty">
            Free on-site estimates. Detailed, line-itemed quotes. Usually back to you
            within one business day.
          </p>
        </div>
        <div aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-gold-gradient opacity-60" />
      </section>

      <section className="bg-cream py-16 md:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <QuoteForm />
          </div>

          <aside className="lg:col-span-5 lg:pl-8">
            <Reveal>
              <SectionHeading
                eyebrow="Or reach us directly"
                title={
                  <>
                    Real humans,
                    <br />
                    <span className="gold-text">no phone trees.</span>
                  </>
                }
                rule={false}
              />
            </Reveal>

            <ul className="mt-10 space-y-6">
              <ContactRow icon={Phone} label="Phone">
                <a href={business.phoneHref} className="link-underline text-navy">
                  {business.phone}
                </a>
              </ContactRow>
              <ContactRow icon={Mail} label="Email">
                <a href={`mailto:${business.email}`} className="link-underline text-navy">
                  {business.email}
                </a>
              </ContactRow>
              <ContactRow icon={MapPin} label="Service area">
                <span className="text-navy">{business.serviceArea}</span>
              </ContactRow>
              <ContactRow icon={Clock} label="Hours">
                <span className="text-navy">{business.hours}</span>
              </ContactRow>
            </ul>

            {/* Map placeholder */}
            <Reveal delay={0.1} className="mt-10">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-navy/10 bg-cream-light">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(201,162,75,0.15),transparent_50%),radial-gradient(circle_at_70%_70%,rgba(27,42,74,0.15),transparent_45%)]" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-navy/60">
                  <MapPin className="h-10 w-10 text-gold" />
                  <p className="mt-3 text-sm uppercase tracking-[0.2em]">
                    Map placeholder
                  </p>
                  <p className="mt-2 max-w-xs text-xs text-charcoal/60">
                    Swap in an embedded Google Map for {business.address.city} once the
                    listing is set up.
                  </p>
                </div>
              </div>
            </Reveal>

            <p className="mt-8 text-xs uppercase tracking-[0.2em] text-charcoal/60">
              {business.licenseNumber} · {business.insurance}
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}

function ContactRow({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof Phone;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-4">
      <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-navy/15 bg-cream-light text-gold">
        <Icon className="h-4 w-4" />
      </span>
      <div>
        <p className="text-eyebrow font-semibold uppercase tracking-[0.2em] text-gold">
          {label}
        </p>
        <p className="mt-1 text-base">{children}</p>
      </div>
    </li>
  );
}
