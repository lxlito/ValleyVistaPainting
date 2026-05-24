export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We walk the space, listen to your goals, and document every surface — no high-pressure quotes.",
  },
  {
    number: "02",
    title: "Color & Quote",
    description:
      "A detailed, line-itemed estimate plus expert color guidance and on-site sample boards.",
  },
  {
    number: "03",
    title: "Prep & Paint",
    description:
      "Meticulous masking, surface repair, premium materials, and clean job-site discipline daily.",
  },
  {
    number: "04",
    title: "Final Walkthrough",
    description:
      "A punch-list walkthrough with you — backed by our 2-year Crown Standard workmanship warranty.",
  },
];
