// TODO: replace placeholder projects with real Valley Vista photography.
export type ProjectCategory =
  | "Residential"
  | "Commercial"
  | "Interior"
  | "Exterior";

export type Project = {
  slug: string;
  title: string;
  location: string;
  year: number;
  categories: ProjectCategory[];
  summary: string;
  image: string;
  beforeImage?: string;
  featured?: boolean;
  span?: "tall" | "wide" | "square";
};

export const projects: Project[] = [
  {
    slug: "hillside-modern",
    title: "Hillside Modern Repaint",
    location: "Northridge",
    year: 2025,
    categories: ["Residential", "Exterior"],
    summary:
      "A sun-bleached 1970s exterior brought back to life with a fog-grey body and ink-black trim.",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1600&q=80",
    beforeImage:
      "https://images.unsplash.com/photo-1592595896616-c37162298647?auto=format&fit=crop&w=1600&q=80",
    featured: true,
    span: "wide",
  },
  {
    slug: "library-suite",
    title: "Library & Study Suite",
    location: "Old Town",
    year: 2025,
    categories: ["Residential", "Interior"],
    summary:
      "Custom-mixed deep teal walls with hand-painted bookshelves and crown molding accent.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    featured: true,
    span: "tall",
  },
  {
    slug: "boutique-hotel",
    title: "Boutique Hotel Lobby",
    location: "Downtown",
    year: 2024,
    categories: ["Commercial", "Interior"],
    summary:
      "A 14-day overnight refresh of a 4,200 sq ft lobby and corridor without a single closed room.",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80",
    featured: true,
  },
  {
    slug: "craftsman-kitchen",
    title: "Craftsman Kitchen Cabinets",
    location: "Maple Heights",
    year: 2025,
    categories: ["Residential", "Interior"],
    summary:
      "Sprayed cabinet refinish with a furniture-grade enamel — completed in three working days.",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "medical-office",
    title: "Medical Office Repaint",
    location: "Westview",
    year: 2024,
    categories: ["Commercial", "Interior"],
    summary:
      "Low-VOC, healthcare-grade coatings throughout 12 exam rooms — done between patient hours.",
    image:
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "lakeside-exterior",
    title: "Lakeside Estate",
    location: "Lake Vista",
    year: 2024,
    categories: ["Residential", "Exterior"],
    summary:
      "Cedar siding stripped, primed, and finished with a marine-grade stain system.",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80",
    span: "wide",
  },
  {
    slug: "retail-flagship",
    title: "Retail Flagship Refresh",
    location: "The District",
    year: 2025,
    categories: ["Commercial", "Interior"],
    summary:
      "Brand-true color matching across 6,800 sq ft of sales floor and back-of-house.",
    image:
      "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "garden-cottage",
    title: "Garden Cottage Trim",
    location: "Bridgewater",
    year: 2024,
    categories: ["Residential", "Exterior"],
    summary:
      "Hand-brushed double-hung windows and porch trim — restoring period-correct color.",
    image:
      "https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?auto=format&fit=crop&w=1600&q=80",
    span: "tall",
  },
];

export const projectFilters: (ProjectCategory | "All")[] = [
  "All",
  "Residential",
  "Commercial",
  "Interior",
  "Exterior",
];
