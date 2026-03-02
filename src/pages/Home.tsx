import { Link } from "react-router-dom";
import SEOHead from "../components/SEOHead";
import CTA from "../components/CTA";
import KeywordBlock from "../components/KeywordBlock";
import FAQList from "../components/FAQList";
import { siteConfig } from "../content/site.config";
import { pageTitle } from "../lib/seo";

const HOW_WE_WORK = [
  {
    step: "1",
    title: "Initial Assessment",
    body: "We review your product, pricing, certifications, and target channel to determine Japan market fit before any commitment.",
  },
  {
    step: "2",
    title: "Market Mapping",
    body: "We identify the relevant distributor categories, regulatory requirements, and trade channels specific to your product.",
  },
  {
    step: "3",
    title: "Distributor Identification",
    body: "We shortlist and approach qualified Japan-side partners using our established network and direct outreach.",
  },
  {
    step: "4",
    title: "Introduction & Meeting Support",
    body: "We facilitate introductory meetings, prepare briefing materials, and provide bilingual support during discussions.",
  },
  {
    step: "5",
    title: "Follow-up Coordination",
    body: "We maintain contact with distributors after initial meetings and coordinate next steps on your behalf.",
  },
];

export default function Home() {
  const title = pageTitle();
  const description = `${siteConfig.brandLine} ${siteConfig.primaryIntent}`;
  const faqPreview = siteConfig.faq.slice(0, 3);

  return (
    <>
      <SEOHead path="/" title={title} description={description} />

      <main className="max-w-5xl mx-auto px-6 py-16 space-y-20">

        {/* Hero */}
        <section className="max-w-2xl">
          <p className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-4">
            {siteConfig.domain}
          </p>
          <h1 className="text-3xl font-semibold text-neutral-900 leading-tight mb-4">
            {siteConfig.siteName}
          </h1>
          <p className="text-lg text-neutral-600 mb-3 leading-relaxed">
            {siteConfig.brandLine}
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
                {siteConfig.primaryIntent}
              </p>
            </div>
            <div className="border-l-2 border-neutral-300 pl-4">
              <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-1">
                Who We Serve
              </p>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Malaysian and ASEAN-based SMEs and exporters looking to enter the Japan B2B market.
              </p>
            </div>
            {siteConfig.localPresence && (
              <div className="border-l-2 border-neutral-300 pl-4">
                <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-1">
                  Where We Operate
                </p>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Japan-based coordinator in Kasugai, Aichi — supporting meetings, distributor visits, and on-the-ground follow-up.
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

        {/* Bottom CTA */}
        <section className="border-t border-neutral-200 pt-10">
          <div className="max-w-xl">
            <h2 className="text-xl font-semibold text-neutral-900 mb-3">
              Ready to evaluate your Japan market options?
            </h2>
            <p className="text-sm text-neutral-500 mb-6 leading-relaxed">
              We work with Malaysian SMEs at different stages of Japan market readiness. The first step is a direct conversation about your product, pricing, and target channel.
            </p>
            <CTA />
          </div>
        </section>

      </main>
    </>
  );
}
