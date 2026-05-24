// TODO: replace placeholder business details with real Valley Vista info.
export const business = {
  name: "Valley Vista Painting",
  legalName: "Valley Vista Painting LLC",
  // Tagline alternates to consider:
  //  - "Painting Worthy of a Crown"
  //  - "Brushed With Excellence"
  //  - "Color, Craft, and Crown-Standard Finish"
  tagline: "The Crown Standard in Painting",
  shortDescription:
    "Residential and commercial painting that treats every wall, ceiling, and trim line like the final brushstroke on a masterpiece.",
  phone: "(555) 123-4567",
  phoneHref: "tel:+15551234567",
  email: "hello@valleyvistapainting.com",
  serviceArea: "Serving the Valley & surrounding counties",
  address: {
    street: "123 Main Street",
    city: "Your City",
    region: "ST",
    postal: "00000",
    country: "US",
  },
  licenseNumber: "LIC #000000",
  insurance: "Fully insured & bonded",
  warranty: "2-Year Crown Standard Workmanship Warranty",
  hours: "Mon–Fri 8a–6p · Sat by appointment",
  founded: 2009,
  url: "https://www.valleyvistapainting.com",
  social: {
    instagram: "https://instagram.com/valleyvistapainting",
    facebook: "https://facebook.com/valleyvistapainting",
    google: "https://g.page/valleyvistapainting",
  },
} as const;

export type Business = typeof business;
