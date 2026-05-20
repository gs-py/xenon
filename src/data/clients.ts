/**
 * Client wordmarks for the "Our Clients" marquee. Rendered as styled text
 * logos (grayscale → color on hover) rather than image assets, keeping the
 * section crisp at any resolution and free of external dependencies.
 */

export interface Client {
  id: string;
  name: string;
  /** Industry served — surfaced as a small caption under the wordmark. */
  sector: string;
}

export const clients: Client[] = [
  { id: "impress-build", name: "Impress Build", sector: "Renovation" },
  { id: "desiignarrator", name: "Desiignarrator", sector: "Interiors" },
  { id: "greenvista", name: "GreenVista", sector: "Landscaping" },
  { id: "lumen-cafe", name: "Lúmen Café", sector: "Hospitality" },
  { id: "atelier-noir", name: "Atelier Noir", sector: "Luxury Retail" },
  { id: "casa-verde", name: "Casa Verde", sector: "Lifestyle" },
  { id: "maison-25", name: "Maison 25", sector: "Boutique" },
  { id: "harbour-co", name: "Harbour & Co.", sector: "Real Estate" },
];
