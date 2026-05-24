// TODO: replace placeholder service copy with real Valley Vista offerings.
import type { LucideIcon } from "lucide-react";
import {
  Home,
  Building2,
  PaintBucket,
  Sun,
  Palette,
  Wrench,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  icon: LucideIcon;
  short: string;
  bullets: string[];
  category: "residential" | "commercial" | "specialty";
  image: string;
};

export const services: Service[] = [
  {
    slug: "residential",
    title: "Residential Painting",
    icon: Home,
    short:
      "Whole-home transformations, accent walls, and color consults — handled with the care your home deserves.",
    bullets: [
      "Whole-home repaints",
      "Color consultations",
      "Drywall & surface repair",
      "Trim, doors & ceilings",
    ],
    category: "residential",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "commercial",
    title: "Commercial Painting",
    icon: Building2,
    short:
      "Offices, retail, hospitality, and multi-family — completed on schedule with minimal disruption.",
    bullets: [
      "Offices & retail buildouts",
      "Multi-family & HOA",
      "After-hours scheduling",
      "Code-compliant coatings",
    ],
    category: "commercial",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "interior",
    title: "Interior Finishes",
    icon: PaintBucket,
    short:
      "Hand-cut lines, flawless walls, and finishes that catch the light just right.",
    bullets: [
      "Walls, ceilings & trim",
      "Premium low-VOC paints",
      "Wallpaper removal",
      "Detailed prep & masking",
    ],
    category: "residential",
    image:
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "exterior",
    title: "Exterior Painting",
    icon: Sun,
    short:
      "Weather-tough coatings on siding, stucco, brick, and trim that look great for years to come.",
    bullets: [
      "Power washing & prep",
      "Siding, stucco & brick",
      "Decks, fences & railings",
      "Caulking & wood repair",
    ],
    category: "residential",
    image:
      "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "cabinet-specialty",
    title: "Cabinet & Specialty Finishes",
    icon: Palette,
    short:
      "Sprayed cabinet refinishing, faux finishes, and statement pieces with a furniture-grade finish.",
    bullets: [
      "Cabinet refinishing",
      "Sprayed lacquer & enamel",
      "Faux & accent finishes",
      "Built-ins & millwork",
    ],
    category: "specialty",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "commercial-maintenance",
    title: "Commercial Maintenance",
    icon: Wrench,
    short:
      "Ongoing touch-ups, recoats, and scheduled maintenance to keep your property camera-ready.",
    bullets: [
      "Quarterly touch-up plans",
      "Storefront refreshes",
      "Tenant turnover packages",
      "Emergency response",
    ],
    category: "commercial",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80",
  },
];
