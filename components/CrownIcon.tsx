type Props = { className?: string };

// Compact crown mark echoing the logo — used as a bullet/section accent.
export function CrownIcon({ className }: Props) {
  return (
    <svg
      viewBox="0 0 24 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M2 4l4 6 6-8 6 8 4-6v12H2z"
        fill="url(#crownGradient)"
        stroke="#967530"
        strokeWidth="0.5"
        strokeLinejoin="round"
      />
      <circle cx="2" cy="4" r="1.4" fill="#D4B05A" />
      <circle cx="12" cy="2" r="1.4" fill="#D4B05A" />
      <circle cx="22" cy="4" r="1.4" fill="#D4B05A" />
      <defs>
        <linearGradient id="crownGradient" x1="0" y1="0" x2="24" y2="18" gradientUnits="userSpaceOnUse">
          <stop stopColor="#E5C97A" />
          <stop offset="0.5" stopColor="#C9A24B" />
          <stop offset="1" stopColor="#967530" />
        </linearGradient>
      </defs>
    </svg>
  );
}
