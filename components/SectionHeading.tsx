import type { ReactNode } from "react";
import { CrownIcon } from "./CrownIcon";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
  rule?: boolean;
  tone?: "navy" | "cream";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  rule = true,
  tone = "navy",
}: Props) {
  const isCenter = align === "center";
  const titleColor = tone === "cream" ? "text-cream" : "text-navy";
  const descColor = tone === "cream" ? "text-cream/70" : "text-charcoal/75";

  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        isCenter && "items-center text-center",
        className,
      )}
    >
      {eyebrow && (
        <Reveal>
          <span className="eyebrow">
            <CrownIcon className="h-3.5 w-3.5" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={cn(
            "max-w-4xl font-display text-display-md font-extrabold text-balance",
            titleColor,
          )}
        >
          {title}
        </h2>
      </Reveal>
      {rule && (
        <Reveal delay={0.1}>
          <span className="gold-rule" aria-hidden />
        </Reveal>
      )}
      {description && (
        <Reveal delay={0.15}>
          <p className={cn("max-w-2xl text-lg leading-relaxed text-pretty", descColor)}>
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
