import type { FAQ, FaqGroup } from "../content/site.config";
import { siteConfig } from "../content/site.config";

export const FAQ_GROUP_LABELS: Record<FaqGroup, string> = {
  strategy: "Strategy & timeline",
  risk: "Risk & readiness",
  compliance: "Labels & compliance",
  distributors: "Distributors & trade shows",
  execution: "Local execution",
};

const GROUP_ORDER: FaqGroup[] = [
  "strategy",
  "risk",
  "compliance",
  "distributors",
  "execution",
];

export function faqPath(slug: string): string {
  return `/faq/${slug}`;
}

export function getFaqBySlug(slug: string | undefined): FAQ | undefined {
  if (!slug) return undefined;
  return siteConfig.faq.find((f) => f.slug === slug);
}

/** Entries that have a dedicated answer URL */
export function faqsWithAnswerPages(): FAQ[] {
  return siteConfig.faq.filter((f): f is FAQ & { slug: string } => Boolean(f.slug));
}

export function groupedFaqsForHub(): { group: FaqGroup; label: string; items: FAQ[] }[] {
  const withSlug = faqsWithAnswerPages();
  return GROUP_ORDER.map((group) => ({
    group,
    label: FAQ_GROUP_LABELS[group],
    items: withSlug.filter((f) => f.group === group),
  })).filter((g) => g.items.length > 0);
}

export function resolveRelatedFaqs(relatedSlugs: string[] | undefined): FAQ[] {
  if (!relatedSlugs?.length) return [];
  return relatedSlugs
    .map((s) => getFaqBySlug(s))
    .filter((f): f is FAQ => Boolean(f));
}
