import type {
  Organization,
  LocalBusiness,
  WebSite,
  BreadcrumbList,
  Service,
  FAQPage,
  Article,
  WithContext,
} from "schema-dts";

const BASE_URL = "https://www.xone13.com";
const LOGO_URL = `${BASE_URL}/logo.png`;
const ORGANIZATION_NAME = "Xenon Marketing Agency";

export function generateOrganizationSchema(): WithContext<Organization> {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: ORGANIZATION_NAME,
    url: BASE_URL,
    logo: LOGO_URL,
    sameAs: [
      "https://www.linkedin.com/company/xenon-agency",
      "https://twitter.com/xenonagency",
      "https://www.instagram.com/xenonagency",
    ],
  };
}

export function generateLocalBusinessSchema(): WithContext<LocalBusiness> {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: ORGANIZATION_NAME,
    image: LOGO_URL,
    "@id": BASE_URL,
    url: BASE_URL,
    telephone: "+1-800-555-0199",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Innovation Drive",
      addressLocality: "San Francisco",
      addressRegion: "CA",
      postalCode: "94105",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 37.7749,
      longitude: -122.4194,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "09:00",
      closes: "18:00",
    },
  };
}

export function generateWebSiteSchema(): WithContext<WebSite> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: ORGANIZATION_NAME,
    url: BASE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: `${BASE_URL}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    } as any,
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
): WithContext<BreadcrumbList> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${BASE_URL}${item.url}`,
    })),
  };
}

export function generateServiceSchema(
  serviceName: string,
  description: string
): WithContext<Service> {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description: description,
    provider: {
      "@type": "Organization",
      name: ORGANIZATION_NAME,
      url: BASE_URL,
    },
  };
}

export function generateArticleSchema(
  title: string,
  description: string,
  url: string,
  imageUrl: string,
  datePublished: string,
  authorName: string
): WithContext<Article> {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    image: [imageUrl],
    datePublished: datePublished,
    author: {
      "@type": "Person",
      name: authorName,
    },
    publisher: {
      "@type": "Organization",
      name: ORGANIZATION_NAME,
      logo: {
        "@type": "ImageObject",
        url: LOGO_URL,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };
}

export function generateFAQSchema(
  faqs: { question: string; answer: string }[]
): WithContext<FAQPage> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
