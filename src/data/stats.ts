/** Headline metrics for the "region's leading agency" band. */

export interface Stat {
  id: string;
  value: number;
  suffix?: string;
  label: string;
}

export const stats: Stat[] = [
  { id: "years", value: 5, label: "Years in industry" },
  { id: "clients", value: 100, suffix: "+", label: "Clients" },
];
