/**
 * Package tiers shown on the /packages page, grouped into the five service
 * categories that drive the tabbed selector.
 *
 * Pricing is intentionally NOT stored or displayed here — every tier routes to
 * a "Request Package" enquiry instead. The Social Media copy is final; the
 * other four categories carry plausible placeholders.
 * TODO(client): replace the placeholder tiers below with final copy.
 */

export interface PackageTier {
  /** Tier name shown as the card heading, e.g. "Foundation". */
  name: string;
  /** One-line positioning beneath the tier name. */
  tagline: string;
  /** What's included — rendered as the ticked feature list. */
  features: string[];
  /** Highlights the middle/recommended card. */
  featured?: boolean;
}

export interface PackageCategory {
  id: string;
  /** Tab label. */
  label: string;
  tiers: PackageTier[];
}

export const packages: PackageCategory[] = [
  {
    id: "social-media",
    label: "Social Media",
    tiers: [
      {
        name: "Foundation",
        tagline: "Perfect for maintaining your online presence",
        features: [
          "10 Social Media Posts per Month",
          "Management for Up to 2 Platforms",
          "Content Planning",
          "Basic Competitor Research",
          "Monthly Report",
          "Basic Social Media Optimization",
          "3 Videos Per Month with Shoot",
          "Photography Services Included",
        ],
      },
      {
        name: "Growth",
        tagline: "Ideal for growing your brand and engagement",
        featured: true,
        features: [
          "15 Social Media Posts per Month",
          "Management for Up to 4 Platforms",
          "Content Strategy & Planning",
          "Competitor & Market Analysis",
          "Paid Ads Management (Meta & Google)",
          "Weekly Reporting & Optimization",
          "5 Videos Per Month with Shoot",
          "Photography Services Included",
        ],
      },
      {
        name: "Premium",
        tagline: "Built for brands ready to scale fast",
        features: [
          "20 Social Media Posts per Month",
          "Management for up to 4 Platforms",
          "Advanced Strategy & Analytics",
          "Full-funnel Advertising (Meta & Google)",
          "Google Business Management",
          "Priority Execution & Reporting",
          "7 Fully Edited Reel Videos per Month",
          "Photography Services Included",
        ],
      },
    ],
  },
  {
    id: "branding",
    label: "Branding",
    tiers: [
      {
        name: "Foundation",
        tagline: "Essentials to launch a consistent identity",
        features: [
          "Logo Design (2 Concepts)",
          "Primary Colour Palette",
          "Typography System",
          "Basic Brand Guidelines",
          "Social Media Profile Kit",
          "2 Rounds of Revisions",
        ],
      },
      {
        name: "Growth",
        tagline: "A complete identity for growing brands",
        featured: true,
        features: [
          "Logo Suite (Primary, Secondary, Mark)",
          "Full Colour & Typography System",
          "Brand Guidelines Document",
          "Business Card & Stationery",
          "Social Media Templates",
          "Brand Voice & Messaging",
          "Unlimited Revisions",
        ],
      },
      {
        name: "Premium",
        tagline: "A full brand system with launch assets",
        features: [
          "Complete Visual Identity System",
          "Brand Strategy & Positioning",
          "Comprehensive Brand Book",
          "Print & Packaging Design",
          "Brochures, Banners & Collateral",
          "3D Visualization",
          "Priority Delivery",
        ],
      },
    ],
  },
  {
    id: "website",
    label: "Website",
    tiers: [
      {
        name: "Foundation",
        tagline: "A clean landing page that converts",
        features: [
          "Single Landing Page",
          "Mobile-Responsive Design",
          "Contact Form Integration",
          "Basic SEO Setup",
          "1 Round of Revisions",
          "Hosting Setup Guidance",
        ],
      },
      {
        name: "Growth",
        tagline: "A multi-page site built to grow",
        featured: true,
        features: [
          "Up to 5 Pages",
          "Custom Responsive Design",
          "Lead Capture & Forms",
          "On-Page SEO Optimization",
          "Analytics Integration",
          "Blog / CMS Setup",
          "3 Rounds of Revisions",
        ],
      },
      {
        name: "Premium",
        tagline: "A full business site or online store",
        features: [
          "Business Website or E-Commerce",
          "Custom UI/UX Design",
          "Sales Funnels & Integrations",
          "Advanced SEO & Performance",
          "Payment Gateway Setup",
          "CMS Training",
          "Priority Support",
        ],
      },
    ],
  },
  {
    id: "ads",
    label: "Ads",
    tiers: [
      {
        name: "Foundation",
        tagline: "Get started with paid reach",
        features: [
          "1 Ad Platform (Meta or Google)",
          "Up to 2 Campaigns",
          "Audience Setup & Targeting",
          "Ad Creative (2 Variants)",
          "Monthly Performance Report",
        ],
      },
      {
        name: "Growth",
        tagline: "Scale across platforms with optimization",
        featured: true,
        features: [
          "Meta & Google Ads",
          "Up to 5 Campaigns",
          "Advanced Audience Targeting",
          "A/B Tested Creatives",
          "Weekly Optimization",
          "Bi-Weekly Reporting",
        ],
      },
      {
        name: "Premium",
        tagline: "Full-funnel advertising, managed end-to-end",
        features: [
          "Full-funnel Advertising",
          "Unlimited Campaigns",
          "Retargeting & Lookalikes",
          "Landing Page & Funnel Setup",
          "Conversion Tracking",
          "Dedicated Ads Manager",
          "Priority Reporting",
        ],
      },
    ],
  },
  {
    id: "photography-videography",
    label: "Photography & Videography",
    tiers: [
      {
        name: "Foundation",
        tagline: "Essential content for your brand",
        features: [
          "Half-Day Shoot (up to 4 hours)",
          "1 Location",
          "15 Edited Photos",
          "1 Short Reel (up to 30s)",
          "Basic Colour Grading",
        ],
      },
      {
        name: "Growth",
        tagline: "A full content day for growing brands",
        featured: true,
        features: [
          "Full-Day Shoot",
          "Up to 2 Locations",
          "30 Edited Photos",
          "3 Edited Reels",
          "Professional Colour Grading",
          "Raw Files Included",
        ],
      },
      {
        name: "Premium",
        tagline: "Cinematic production, fully managed",
        features: [
          "Multi-Day Production",
          "Multiple Locations",
          "50+ Edited Photos",
          "Cinematic Brand Film",
          "5 Edited Reels",
          "Drone & Motion Graphics",
          "Priority Editing",
        ],
      },
    ],
  },
];
