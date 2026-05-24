"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";

type Props = {
  before: string;
  after: string;
  alt: string;
};

// Drag handle to reveal a before/after slider — works with mouse, touch, and keyboard.
export function BeforeAfter({ before, after, alt }: Props) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement | null>(null);

  function handleMove(clientX: number) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const next = Math.min(100, Math.max(0, (x / rect.width) * 100));
    setPos(next);
  }

  function onPointer(e: React.PointerEvent) {
    if (e.buttons !== 1 && e.type !== "pointerdown") return;
    handleMove(e.clientX);
  }

  return (
    <div
      ref={ref}
      onPointerMove={onPointer}
      onPointerDown={onPointer}
      className="relative aspect-[16/10] w-full select-none overflow-hidden rounded-2xl bg-navy"
    >
      <Image src={after} alt={`${alt} — after`} fill className="object-cover" sizes="100vw" />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <Image src={before} alt={`${alt} — before`} fill className="object-cover" sizes="100vw" />
      </div>

      <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-navy/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
        Before
      </span>
      <span className="pointer-events-none absolute right-4 top-4 rounded-full bg-gold-gradient px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-navy">
        After
      </span>

      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Reveal before/after"
        className="absolute inset-y-0 left-0 w-full cursor-ew-resize appearance-none bg-transparent opacity-0"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 w-1 bg-gold-gradient"
        style={{ left: `calc(${pos}% - 2px)` }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 inline-flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gold bg-navy text-gold shadow-gold"
        style={{ left: `${pos}%` }}
      >
        <MoveHorizontal className="h-4 w-4" />
      </div>
    </div>
  );
}
