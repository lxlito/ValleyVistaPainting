import type { LucideIcon } from "lucide-react";
import { ShieldCheck, Sparkles, CalendarCheck, Crown } from "lucide-react";

export type Value = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const values: Value[] = [
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    description:
      "Fully bonded, insured, and background-checked crews you can trust in your home or business.",
  },
  {
    icon: Sparkles,
    title: "Premium Materials",
    description:
      "Top-tier Benjamin Moore, Sherwin-Williams, and specialty coatings — no contractor-grade shortcuts.",
  },
  {
    icon: CalendarCheck,
    title: "On Time, On Budget",
    description:
      "Detailed schedules, daily updates, and quotes that hold — even when the scope gets interesting.",
  },
  {
    icon: Crown,
    title: "Crown-Standard Finish",
    description:
      "Hand-cut lines, glass-smooth trim, and a final walkthrough we don't leave until you sign off on.",
  },
];
