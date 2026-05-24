// TODO: replace placeholder stats with real figures.
export type Stat = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
};

export const stats: Stat[] = [
  { value: 16, suffix: "+", label: "Years in business" },
  { value: 1200, suffix: "+", label: "Projects completed" },
  { value: 500, suffix: "+", label: "Five-star reviews" },
  { value: 100, suffix: "%", label: "Licensed & insured" },
];
