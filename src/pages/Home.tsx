import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import SEOHead from "../components/SEOHead";
import CTA from "../components/CTA";
import KeywordBlock from "../components/KeywordBlock";
import FAQList from "../components/FAQList";
import { siteConfig } from "../content/site.config";
import { definedTermSetJsonLd } from "../lib/seo";

const HOW_WE_WORK = [
  {
    step: "1",
    title: "Initial Assessment",
    body: "Before committing resources, we assess product-market fit for Japan. This includes reviewing certifications, labeling readiness, pricing structure, and channel positioning within the Japan B2B market.",
  },
  {
    step: "2",
    title: "Market Mapping",
    body: "We map distributor categories and compliance requirements for your sector. Japan B2B market entry often stalls at channel selection—we structure this decision before any outreach begins.",
  },
  {
    step: "3",
    title: "Distributor Identification",
    body: "As part of our japan market entry consulting for Malaysian companies, we shortlist and approach qualified Japan-side distributors based on category fit and geographic coverage.",
  },
  {
    step: "4",
    title: "Introduction & Meeting Support",
    body: "We coordinate introductions, prepare structured briefing materials, and provide bilingual facilitation during distributor discussions.",
  },
  {
    step: "5",
    title: "Follow-up Coordination",
    body: "Follow-up determines whether introductory meetings convert to commercial discussions. We maintain contact with shortlisted distributors and keep next-step expectations aligned on both sides.",
  },
];

const LEAD_TEXT =
  "We provide structured Japan market entry support for Malaysian SMEs—covering strategy, risk checks, and distributor selection for Japan B2B expansion.";

export default function Home() {
  const title = "Japan Market Entry Consulting for Malaysian Companies | NeoiDigital";
  const description =
    "Structured Japan market entry support for Malaysian SMEs — strategy, entry risk checks, distributor selection, and on-the-ground coordination from Osaka, Japan.";
  const faqPreview = siteConfig.faq.slice(0, 3);

  return (
    <>
      <SEOHead path="/" title={title} description={description} isHowTo leadText={LEAD_TEXT} />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(definedTermSetJsonLd())}
        </script>
      </Helmet>

      <main className="max-w-5xl mx-auto px-6 py-16 space-y-20">

        {/* Hero */}
        <section className="max-w-2xl">
          <p className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-4">
            {siteConfig.domain}
          </p>
          <h1 className="text-3xl font-semibold text-neutral-900 leading-tight mb-4">
            {siteConfig.brandLine}
          </h1>
          <p className="text-lg text-neutral-600 mb-3 leading-relaxed" data-speakable>
            We provide structured Japan market entry support for Malaysian SMEs—covering strategy, risk checks, and distributor selection for Japan B2B expansion.
          </p>
          <p className="text-sm text-neutral-500 leading-relaxed mb-8">
            {siteConfig.primaryIntent}
          </p>

          <div className="flex flex-wrap gap-3">
            <CTA />
            <a
              href={siteConfig.hubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-neutral-300 text-neutral-700 text-sm font-medium px-6 py-3 hover:border-neutral-600 hover:text-neutral-900"
            >
              Japan Market Hub →
            </a>
          </div>
        </section>

        {/* Site Identity / Positioning */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-6">
            Site Focus
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border-l-2 border-neutral-900 pl-4">
              <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-1">
                Primary Intent
              </p>
              <p className="text-sm text-neutral-800 leading-relaxed">
                Our work focuses on practical japan market entry strategy and execution. This includes evaluating distributor structure, identifying regulatory exposure, and planning phased expansion into Japan.
              </p>
            </div>
            <div className="border-l-2 border-neutral-300 pl-4">
              <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-1">
                Who We Serve
              </p>
              <p className="text-sm text-neutral-600 leading-relaxed">
                We work with Malaysian exporters and ASEAN-based SMEs looking to enter the Japan market through B2B channels, distributor partnerships, or trade exhibitions.
              </p>
            </div>
            {siteConfig.localPresence && (
              <div className="border-l-2 border-neutral-300 pl-4">
                <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-1">
                  Where We Operate
                </p>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Japan-based coordination in Osaka, Japan — supporting distributor meetings, trade-show follow-up, and on-the-ground relationship continuity.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* How We Work */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-6">
            How We Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {HOW_WE_WORK.map((item) => (
              <div key={item.step}>
                <p className="text-xs font-semibold text-neutral-400 mb-2">
                  Step {item.step}
                </p>
                <p className="text-sm font-semibold text-neutral-900 mb-1">
                  {item.title}
                </p>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Social Proof */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-6">
            What We Bring
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {siteConfig.socialProofBullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 bg-neutral-900" />
                <span className="text-sm text-neutral-700">{bullet}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* What this page covers */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-4">
            What This Page Covers
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-2xl">
            {[
              "Japan market entry process for Malaysian B2B companies",
              "Distributor identification and channel structure",
              "Entry risk checks: regulatory, labeling, and pricing",
              "Trade show preparation and structured follow-up",
              "On-the-ground coordination from Osaka, Japan",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-neutral-400" />
                <span className="text-sm text-neutral-600">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Keyword Cluster */}
        <KeywordBlock />

        {/* Mini FAQ Preview */}
        <section className="border-t border-neutral-200 pt-10">
          <div className="flex items-baseline justify-between mb-6">
            <h2 className="text-xs font-semibold tracking-widest text-neutral-400 uppercase">
              Common Questions
            </h2>
            <Link
              to="/faq"
              className="text-xs text-neutral-500 hover:text-neutral-900 underline underline-offset-2"
            >
              All FAQs →
            </Link>
          </div>
          <FAQList items={faqPreview} />
          <div className="mt-6">
            <Link
              to="/faq"
              className="text-sm text-neutral-700 border border-neutral-300 px-4 py-2 hover:border-neutral-700 hover:text-neutral-900"
            >
              View All {siteConfig.faq.length} Questions →
            </Link>
          </div>
        </section>

        {/* Regulatory framework */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-4">
            Regulatory Context
          </h2>
          <div className="max-w-2xl space-y-3 text-sm text-neutral-600 leading-relaxed">
            <p>
              Product entry into Japan is governed by sector-specific regulations.
              The <strong className="text-neutral-800">Ministry of Health, Labour and Welfare (MHLW)</strong> oversees food safety, cosmetics, and pharmaceutical imports under the Food Sanitation Act and the Pharmaceutical and Medical Device Act.
            </p>
            <p>
              The <strong className="text-neutral-800">Consumer Affairs Agency (CAA)</strong> enforces Japan's Food Labelling Standards, which require ingredient lists, allergen declarations, and nutritional information — all in Japanese.
            </p>
            <p>
              For tariff-related matters, the <strong className="text-neutral-800">Japan Customs (Ministry of Finance)</strong> administers import duties and the Malaysia–Japan EPA preferential tariff framework.
              A licensed importer of record in Japan is required for all commercial imports.
            </p>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="border-t border-neutral-200 pt-10">
          <div className="max-w-xl">
            <h2 className="text-xl font-semibold text-neutral-900 mb-3">
              Ready to evaluate your Japan market options?
            </h2>
            <p className="text-sm text-neutral-500 mb-3 leading-relaxed">
              We work with Malaysian SMEs at different stages of Japan market readiness. The first step is a direct conversation about your product, pricing, and target channel.
            </p>
            <p className="text-sm text-neutral-500 mb-6">
              Have specific questions first?{" "}
              <Link to="/faq" className="underline underline-offset-2 hover:text-neutral-900">
                See common questions from Malaysian exporters →
              </Link>
            </p>
            <CTA />
          </div>
        </section>

      </main>
    </>
  );
}
