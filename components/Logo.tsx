import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  tone?: "navy" | "cream";
  withWordmark?: boolean;
};

// Inline SVG fallback of the V-monogram with gold crown + brush.
// Replace by dropping a real /public/logo.png and swapping to <Image src="/logo.png" />.
export function Logo({ className, tone = "navy", withWordmark = true }: Props) {
  const primary = tone === "navy" ? "#1B2A4A" : "#F5EBD8";
  const secondary = tone === "navy" ? "#13203B" : "#FBF6EC";

  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <svg
        viewBox="0 0 56 64"
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-auto"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="logoGold" x1="0" y1="0" x2="56" y2="56" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E5C97A" />
            <stop offset="0.45" stopColor="#C9A24B" />
            <stop offset="1" stopColor="#967530" />
          </linearGradient>
        </defs>

        {/* Crown */}
        <path
          d="M8 14L16 22L28 6L40 22L48 14V24H8Z"
          fill="url(#logoGold)"
          stroke="#735923"
          strokeWidth="0.6"
          strokeLinejoin="round"
        />
        <circle cx="8" cy="14" r="2" fill="#D4B05A" />
        <circle cx="28" cy="6" r="2" fill="#D4B05A" />
        <circle cx="48" cy="14" r="2" fill="#D4B05A" />

        {/* V-monogram body */}
        <path
          d="M10 28H18L28 50L38 28H46L30 60H26Z"
          fill={primary}
          stroke={secondary}
          strokeWidth="0.5"
          strokeLinejoin="round"
        />

        {/* Gold brush stroke through V */}
        <path
          d="M14 32 Q28 44 42 32"
          stroke="url(#logoGold)"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.95"
        />
      </svg>

      {withWordmark && (
        <span className="flex flex-col leading-none">
          <span
            className={cn(
              "font-display text-lg font-extrabold uppercase tracking-[0.18em]",
              tone === "navy" ? "text-navy" : "text-cream",
            )}
          >
            Valley Vista
          </span>
          <span className="mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.32em] text-gold">
            Painting
          </span>
        </span>
      )}
    </span>
  );
}
