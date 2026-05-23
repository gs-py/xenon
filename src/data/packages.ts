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
  /** Optional fine-print shown beneath the tiers (e.g. exclusions, add-ons). */
  notes?: string[];
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
        name: "Landing Page Website",
        tagline: "A high-converting landing page that drives leads",
        features: [
          "1 High-Converting Landing Page",
          "Premium Custom UI/UX Design",
          "Mobile Responsive Design",
          "WhatsApp Integration",
          "Lead Generation Contact Form",
          "Gallery / Testimonials Section",
          "Call-To-Action Focused Layout",
          "Basic SEO Setup",
          "Google Analytics Integration",
          "Speed Optimization",
          "Social Media Integration",
          "Google Maps Integration",
          "Basic Security Setup",
          "Admin Panel Access",
        ],
      },
      {
        name: "Business Website",
        tagline: "A complete multi-page site built to grow",
        featured: true,
        features: [
          "Up to 8 Custom Pages",
          "Custom Website Design",
          "Responsive Across All Devices",
          "SEO-Friendly Website Structure",
          "Service & Portfolio Pages",
          "Blog Setup",
          "Gallery & Testimonials",
          "Dynamic Inquiry Forms",
          "WhatsApp Chat Integration",
          "Google Analytics & Search Console Setup",
          "Technical On-Page SEO",
          "Speed Optimization",
          "CMS / Admin Dashboard",
          "Security & Backup Setup",
        ],
      },
      {
        name: "E-Commerce Website",
        tagline: "A full online store, ready to sell",
        features: [
          "Custom E-Commerce Website",
          "Product Catalog Setup",
          "Product Categories & Filters",
          "Conversion-Focused Product Pages",
          "Shopping Cart & Checkout",
          "Payment Gateway Integration",
          "Inventory Management",
          "Order Management Dashboard",
          "Customer Login System",
          "WhatsApp Chat Integration",
          "SEO-Friendly Product Structure",
          "Shopify / WooCommerce / Custom Build",
          "Analytics & Tracking Setup",
          "Security & Backup Setup",
        ],
      },
    ],
    notes: [
      "Domain & Hosting Charges – Separate",
      "Content Writing – Optional",
      "Website Maintenance Packages Available",
      "Additional Custom Features Available on Request",
      "Delivery Timeline Depends on Project Scope",
    ],
  },
  {
    id: "ads",
    label: "Ads",
    tiers: [
      {
        name: "Meta Ads Management",
        tagline: "Lead-focused campaigns across Facebook & Instagram",
        features: [
          "Campaign Setup & Management",
          "Audience Targeting Setup",
          "Ad Creative Design (Visual + Copy)",
          "Lead Generation Campaigns",
          "Pixel & Conversion Tracking",
          "Retargeting Campaign Setup",
          "A/B Testing",
          "Weekly Optimization",
          "Monthly Performance Reports",
          "WhatsApp Lead Integration",
        ],
      },
      {
        name: "Google Ads Management",
        tagline: "Capture high-intent searches on Google",
        features: [
          "Google Ads Campaign Setup",
          "Keyword Research & Targeting",
          "Search & Display Ads",
          "Ad Copy & Banner Design",
          "Conversion Tracking Setup",
          "Google Analytics Integration",
          "Remarketing Campaigns",
          "Bid & Budget Optimization",
          "Weekly Monitoring",
          "Monthly Performance Reports",
        ],
      },
    ],
    notes: [
      "Ad Spend Budget – Separate",
      "Creative Production – Optional",
      "Landing Page / Website – Separate",
      "Monthly Optimization Included",
      "Custom Strategies Available Based on Industry",
    ],
  },
  {
    id: "photography-videography",
    label: "Photography & Videography",
    tiers: [
      {
        name: "Photography Package",
        tagline: "Polished stills that showcase your work",
        features: [
          "Professional Photography Session",
          "Interior & Fit-Out / Product / Lifestyle Photography",
          "Before & After Project Photography",
          "Edited & Color-Graded Images",
          "High-Resolution Delivery",
          "Social Media Optimized Images",
          "Project & Portfolio Coverage",
          "Brand-Focused Visual Styling",
          "Fast Delivery Turnaround",
        ],
      },
      {
        name: "Videography Package",
        tagline: "Cinematic video built for social",
        features: [
          "Cinematic Video Production",
          "Reel & Short-Form Video Creation",
          "Brand / Product / Interior & Fit-Out / Podcast Videos",
          "Before & After Project Photography",
          "Professional Editing & Color Grading",
          "Social Media Optimized Videos",
          "Motion Graphics & Transitions",
          "Background Music & Sound Design",
          "Raw Footage Delivery (Optional)",
        ],
      },
    ],
  },
];
