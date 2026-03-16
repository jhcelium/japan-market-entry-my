import { Link } from "react-router-dom";
import SEOHead from "../components/SEOHead";
import FAQList from "../components/FAQList";
import CTA from "../components/CTA";
import { siteConfig } from "../content/site.config";

export default function FAQ() {
  const title = "Japan Market Entry FAQ | Questions from Malaysian SMEs";
  const description =
    "Common questions about Japan market entry for Malaysian companies — covering strategy, distributor selection, compliance, trade shows, timeline, and on-the-ground support.";

  return (
    <>
      <SEOHead
        path="/faq"
        title={title}
        description={description}
        isFaq
        leadText="Questions from Malaysian exporters and SMEs about entering the Japan B2B market — answered directly, without padding."
      />

      <main className="max-w-5xl mx-auto px-6 py-16 space-y-12">

        {/* Page header */}
        <section className="max-w-2xl">
          <p className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-4">
            FAQ
          </p>
          <h1 className="text-3xl font-semibold text-neutral-900 leading-tight mb-4">
            Japan Market Entry — Common Questions
          </h1>
          <p className="text-base text-neutral-600 leading-relaxed" data-speakable>
            Questions from Malaysian exporters and SMEs about entering the Japan B2B market — answered directly, without padding.
          </p>
        </section>

        {/* All FAQs */}
        <section className="border-t border-neutral-200 pt-2">
          <FAQList items={siteConfig.faq} />
        </section>

        {/* CTA */}
        <section className="border-t border-neutral-200 pt-10">
          <div className="max-w-xl">
            <h2 className="text-xl font-semibold text-neutral-900 mb-3">
              Have a question not answered here?
            </h2>
            <p className="text-sm text-neutral-500 mb-3 leading-relaxed">
              Reach out directly. We respond to all enquiries within one business day.
            </p>
            <p className="text-sm text-neutral-500 mb-6">
              Or return to the{" "}
              <Link to="/" className="underline underline-offset-2 hover:text-neutral-900">
                Japan market entry overview
              </Link>{" "}
              to see how we work.
            </p>
            <CTA />
          </div>
        </section>

      </main>
    </>
  );
}
