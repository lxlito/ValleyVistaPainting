"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef, type MouseEvent, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "gold" | "navy" | "outline" | "ghost";

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  withArrow?: boolean;
  size?: "md" | "lg";
};

type AsLink = CommonProps & {
  href: string;
  onClick?: never;
  type?: never;
  disabled?: never;
};

type AsButton = CommonProps & {
  href?: undefined;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-wide transition-all duration-300 ease-editorial select-none";

const sizes = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

const variants: Record<Variant, string> = {
  gold:
    "bg-gold-gradient text-navy shadow-gold hover:shadow-[0_18px_40px_-12px_rgba(201,162,75,0.6)] hover:-translate-y-0.5",
  navy:
    "bg-navy text-cream hover:bg-navy-600 hover:-translate-y-0.5 shadow-editorial",
  outline:
    "border border-navy/30 text-navy hover:border-navy hover:bg-navy hover:text-cream",
  ghost:
    "text-navy hover:text-gold",
};

// Magnetic micro-interaction: button drifts slightly toward the cursor.
function useMagnetic(disabled?: boolean) {
  const ref = useRef<HTMLElement | null>(null);
  const prefersReduced = useReducedMotion();

  function onMove(e: MouseEvent) {
    if (disabled || prefersReduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    ref.current.style.transform = `translate(${x * 0.12}px, ${y * 0.18}px)`;
  }

  function onLeave() {
    if (!ref.current) return;
    ref.current.style.transform = "";
  }

  return { ref, onMove, onLeave };
}

export function Button(props: AsLink | AsButton) {
  const {
    children,
    variant = "gold",
    className,
    withArrow,
    size = "md",
  } = props;
  const magnetic = useMagnetic("disabled" in props ? props.disabled : false);

  const content = (
    <motion.span
      className="relative z-10 inline-flex items-center gap-2"
      whileTap={{ scale: 0.97 }}
    >
      {children}
      {withArrow && (
        <ArrowUpRight
          className="h-4 w-4 transition-transform duration-300 ease-editorial group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden
        />
      )}
    </motion.span>
  );

  const classes = cn(base, sizes[size], variants[variant], className);

  if ("href" in props && props.href) {
    return (
      <Link
        href={props.href}
        ref={magnetic.ref as React.Ref<HTMLAnchorElement>}
        onMouseMove={magnetic.onMove}
        onMouseLeave={magnetic.onLeave}
        className={classes}
        style={{ transition: "transform 350ms cubic-bezier(0.22,1,0.36,1), background-color 300ms, color 300ms, box-shadow 300ms" }}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      onClick={props.onClick}
      disabled={props.disabled}
      ref={magnetic.ref as React.Ref<HTMLButtonElement>}
      onMouseMove={magnetic.onMove}
      onMouseLeave={magnetic.onLeave}
      className={cn(classes, props.disabled && "cursor-not-allowed opacity-60")}
      style={{ transition: "transform 350ms cubic-bezier(0.22,1,0.36,1), background-color 300ms, color 300ms, box-shadow 300ms" }}
    >
      {content}
    </button>
  );
}
