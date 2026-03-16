import { siteConfig } from "../content/site.config";

const BASE_URL = `https://${siteConfig.domain}`;
const TODAY = new Date().toISOString().split("T")[0];

/** Build canonical URL for a given path */
export function canonicalUrl(path: string): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_URL}${cleanPath}`;
}

/** Build full page title */
export function pageTitle(subtitle?: string): string {
  if (!subtitle) return siteConfig.siteName;
  return `${subtitle} | ${siteConfig.siteName}`;
}

function speakable(cssSelectors: string[]) {
  return {
    "@type": "SpeakableSpecification",
    cssSelector: cssSelectors,
  };
}

/** JSON-LD: Organization — with knowsAbout, areaServed, inLanguage */
export function orgJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    name: siteConfig.company,
    url: BASE_URL,
    description: siteConfig.primaryIntent,
    sameAs: [siteConfig.hubLink],
    inLanguage: "en-MY",
    areaServed: [
      { "@type": "Country", name: "Japan" },
      { "@type": "Country", name: "Malaysia" },
    ],
    knowsAbout: [
      "Japan market entry",
      "Japan B2B distribution",
      "Malaysia-Japan trade",
      "Japan import compliance",
      "Distributor selection in Japan",
      "Japan trade show preparation",
    ],
    ...(siteConfig.localPresence && {
      address: {
        "@type": "PostalAddress",
        addressLocality: "Osaka",
        addressRegion: "Osaka",
        addressCountry: "JP",
      },
    }),
  };
}

/** JSON-LD: WebSite — with about, publisher, description */
export function webSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    name: siteConfig.siteName,
    url: BASE_URL,
    description: siteConfig.primaryIntent,
    inLanguage: "en-MY",
    publisher: { "@id": `${BASE_URL}/#organization` },
    about: {
      "@type": "Thing",
      name: "Japan market entry consulting for Malaysian companies",
    },
    speakableSpecification: speakable(["h1", "[data-speakable]"]),
  };
}

/** JSON-LD: WebPage — with speakable, datePublished, inLanguage */
export function webPageJsonLd(
  path: string,
  name: string,
  description: string,
  leadText?: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": canonicalUrl(path),
    name,
    description,
    url: canonicalUrl(path),
    inLanguage: "en-MY",
    datePublished: "2026-03-02",
    dateModified: TODAY,
    isPartOf: { "@id": `${BASE_URL}/#website` },
    publisher: { "@id": `${BASE_URL}/#organization` },
    speakableSpecification: speakable(["h1", "[data-speakable]"]),
    ...(leadText && { abstract: leadText }),
  };
}

/** JSON-LD: FAQPage — all items, with speakable */
export function faqPageJsonLd(leadText?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${BASE_URL}/faq#faqpage`,
    mainEntity: siteConfig.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
    speakableSpecification: speakable(["h1", "[data-speakable]"]),
    ...(leadText && { description: leadText }),
  };
}

/** JSON-LD: HowTo — from the 5-step process on Home */
export function howToJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `${BASE_URL}/#howto`,
    name: "How to enter the Japan B2B market from Malaysia",
    description:
      "A five-step process for Malaysian SMEs to assess market fit, identify distributors, and begin commercial engagement in Japan.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Initial Assessment",
        text: "Assess product-market fit for Japan — certifications, labeling readiness, pricing structure, and channel positioning.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Market Mapping",
        text: "Map distributor categories and compliance requirements for your sector before any outreach.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Distributor Identification",
        text: "Shortlist and approach qualified Japan-side distributors based on category fit and geographic coverage.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Introduction & Meeting Support",
        text: "Coordinate introductions, prepare briefing materials, and provide bilingual facilitation during discussions.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Follow-up Coordination",
        text: "Maintain contact with shortlisted distributors, align expectations, and support commercial conversion.",
      },
    ],
  };
}

/** JSON-LD: DefinedTermSet — key terminology used across the site */
export function definedTermSetJsonLd() {
  const terms = [
    {
      name: "Japan market entry",
      description: "The process of establishing commercial operations in Japan, including regulatory compliance, distributor engagement, and channel selection.",
    },
    {
      name: "Distributor selection",
      description: "Identifying and qualifying Japan-side distribution partners based on category fit, geographic coverage, and commercial readiness.",
    },
    {
      name: "Entry risk check",
      description: "A pre-commitment assessment of regulatory fit, buyer expectations, pricing gaps, and channel readiness for Japan market entry.",
    },
    {
      name: "Importer of record",
      description: "A licensed entity in Japan required by customs to handle the importation of goods on behalf of a foreign exporter.",
    },
    {
      name: "Malaysia-Japan EPA",
      description: "The Malaysia-Japan Economic Partnership Agreement, providing preferential tariff rates for qualifying goods with Malaysian origin.",
    },
  ];

  return {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "@id": `${BASE_URL}/#glossary`,
    name: "Japan Market Entry Terminology",
    hasDefinedTerm: terms.map((t) => ({
      "@type": "DefinedTerm",
      name: t.name,
      description: t.description,
    })),
  };
}
