"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import type { Stat } from "@/lib/data/stats";

type Props = { stat: Stat; duration?: number };

export function StatCounter({ stat, duration = 1800 }: Props) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const prefersReduced = useReducedMotion();
  const [display, setDisplay] = useState(prefersReduced ? stat.value : 0);

  useEffect(() => {
    if (!inView || prefersReduced) {
      setDisplay(stat.value);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const from = 0;
    const to = stat.value;

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(from + (to - from) * eased));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, prefersReduced, stat.value, duration]);

  const formatted = display.toLocaleString();

  return (
    <span ref={ref} className="inline-flex items-baseline font-display tabular-nums">
      {stat.prefix}
      {formatted}
      {stat.suffix}
    </span>
  );
}
