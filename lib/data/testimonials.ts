// TODO: replace placeholder quotes with real client testimonials.
export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  projectType: string;
  rating: 1 | 2 | 3 | 4 | 5;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "The crew treated our home like their own. Every line is razor sharp, the trim is glass-smooth, and they finished a day ahead of schedule.",
    name: "Megan R.",
    role: "Homeowner",
    projectType: "Whole-home interior · Northridge",
    rating: 5,
  },
  {
    quote:
      "We needed three floors repainted between Friday and Monday. Valley Vista showed up with a plan, hit every milestone, and we opened on time.",
    name: "Daniel K.",
    role: "Property Manager",
    projectType: "Office building · Downtown",
    rating: 5,
  },
  {
    quote:
      "The cabinet finish looks like it came out of a furniture shop. I keep stopping in the kitchen just to look at it.",
    name: "Priya S.",
    role: "Homeowner",
    projectType: "Cabinet refinishing · Maple Heights",
    rating: 5,
  },
  {
    quote:
      "Professional from the estimate to the final walkthrough. Clean trucks, clean drop cloths, clean lines. I'd hire them again in a heartbeat.",
    name: "James L.",
    role: "General Contractor",
    projectType: "New construction · Lake Vista",
    rating: 5,
  },
];
