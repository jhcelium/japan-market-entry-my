import { Link } from "react-router-dom";
import SEOHead from "../components/SEOHead";
import CTA from "../components/CTA";
import { siteConfig } from "../content/site.config";
import { faqPath, groupedFaqsForHub } from "../lib/faq";

export default function FAQ() {
  const title = "Japan Market Entry FAQ for Malaysian Companies & SMEs | NeoiDigital";
  const description =
    "Answer-first FAQ hub for Japan market entry from Malaysia: plans, entry risk, distributor selection, labels and compliance, trade shows, timelines, Osaka coordination, and qualification prep.";
  const groups = groupedFaqsForHub();

  return (
    <>
      <SEOHead
        path="/faq"
        title={title}
        description={description}
        isFaq
        leadText="Direct answers on Japan market entry for Malaysian companies and SMEs — strategy, risk, distributors, compliance, trade shows, and local execution."
      />

      <main className="max-w-5xl mx-auto px-6 py-16 space-y-14">
        <section className="max-w-2xl">
          <p className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-4">FAQ</p>
          <h1 className="text-3xl font-semibold text-neutral-900 leading-tight mb-4">
            Japan market entry — question hub
          </h1>
          <p className="text-base text-neutral-600 leading-relaxed mb-4" data-speakable>
            This page answers the most common questions Malaysian companies and SMEs ask before and during Japan B2B market entry.
            Each topic opens with a short preview; follow the link for the full answer, context, and related questions.
          </p>
          <p className="text-sm text-neutral-500 leading-relaxed">
            <Link to="/" className="underline underline-offset-2 hover:text-neutral-900">
              ← Back to overview
            </Link>
            {" · "}
            <a
              href={siteConfig.hubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-neutral-900"
            >
              NeoiDigital Japan Market Hub
            </a>
          </p>
        </section>

        {groups.map(({ group, label, items }) => (
          <section key={group} className="border-t border-neutral-200 pt-10">
            <h2 className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-6">{label}</h2>
            <ul className="space-y-8">
              {items.map((item) =>
                item.slug ? (
                  <li key={item.slug} className="max-w-2xl">
                    <h3 className="text-sm font-semibold text-neutral-900 mb-2">
                      <Link
                        to={faqPath(item.slug)}
                        className="hover:underline underline-offset-2 decoration-neutral-400"
                      >
                        {item.question}
                      </Link>
                    </h3>
                    <p className="text-sm text-neutral-600 leading-relaxed mb-2">
                      {item.preview ?? item.answer}
                    </p>
                    <Link
                      to={faqPath(item.slug)}
                      className="text-xs text-neutral-500 hover:text-neutral-900 underline underline-offset-2"
                    >
                      Full answer →
                    </Link>
                  </li>
                ) : null,
              )}
            </ul>
          </section>
        ))}

        <section className="border-t border-neutral-200 pt-10">
          <div className="max-w-xl">
            <h2 className="text-xl font-semibold text-neutral-900 mb-3">Next step</h2>
            <p className="text-sm text-neutral-500 mb-4 leading-relaxed">
              If your situation is not covered here, use the hub intake or request a qualification call — we route you to the right workflow.
            </p>
            <p className="text-sm text-neutral-500 mb-6">
              <Link to="/" className="underline underline-offset-2 hover:text-neutral-900">
                Japan market entry overview
              </Link>
              {" · "}
              <a
                href={siteConfig.hubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-neutral-900"
              >
                Visit Japan Market Hub →
              </a>
            </p>
            <CTA />
          </div>
        </section>
      </main>
    </>
  );
}
