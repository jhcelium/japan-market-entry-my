import { Link } from "react-router-dom";
import CTA from "./CTA";
import type { FAQ } from "../content/site.config";
import { siteConfig } from "../content/site.config";
import { faqPath, resolveRelatedFaqs } from "../lib/faq";

type Props = {
  item: FAQ & { slug: string };
};

export default function FaqAnswerLayout({ item }: Props) {
  const related = resolveRelatedFaqs(item.relatedSlugs);
  const factors = item.keyFactors ?? [];
  const mistakes = item.commonMistakes ?? [];
  const why = item.whyItMatters ?? "";

  return (
    <main className="max-w-3xl mx-auto px-6 py-16 space-y-10">
      <nav className="text-xs text-neutral-500">
        <Link to="/" className="hover:text-neutral-900">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link to="/faq" className="hover:text-neutral-900">
          FAQ
        </Link>
        <span className="mx-2">/</span>
        <span className="text-neutral-400">Answer</span>
      </nav>

      <header>
        <p className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-4">FAQ</p>
        <h1 className="text-2xl font-semibold text-neutral-900 leading-snug mb-4">{item.question}</h1>
        <p className="text-base text-neutral-700 leading-relaxed" data-speakable>
          {item.answer}
        </p>
      </header>

      {why ? (
        <section className="border-t border-neutral-200 pt-8">
          <h2 className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-3">
            Why this matters
          </h2>
          <p className="text-sm text-neutral-600 leading-relaxed">{why}</p>
        </section>
      ) : null}

      {factors.length > 0 ? (
        <section className="border-t border-neutral-200 pt-8">
          <h2 className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-3">
            Key factors
          </h2>
          <ul className="space-y-2">
            {factors.map((line) => (
              <li key={line} className="flex items-start gap-2 text-sm text-neutral-600">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-neutral-900" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {mistakes.length > 0 ? (
        <section className="border-t border-neutral-200 pt-8">
          <h2 className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-3">
            Common mistakes
          </h2>
          <ul className="space-y-2">
            {mistakes.map((line) => (
              <li key={line} className="flex items-start gap-2 text-sm text-neutral-600">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-neutral-400" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {related.length > 0 ? (
        <section className="border-t border-neutral-200 pt-8">
          <h2 className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-3">
            Related questions
          </h2>
          <ul className="space-y-2">
            {related.map((r) =>
              r.slug ? (
                <li key={r.slug}>
                  <Link
                    to={faqPath(r.slug)}
                    className="text-sm text-neutral-700 underline underline-offset-2 hover:text-neutral-900"
                  >
                    {r.question}
                  </Link>
                </li>
              ) : null,
            )}
          </ul>
        </section>
      ) : null}

      <section className="border-t border-neutral-200 pt-8 space-y-4">
        <p className="text-sm text-neutral-600">
          <Link to="/faq" className="underline underline-offset-2 hover:text-neutral-900">
            ← All Japan market entry questions
          </Link>
        </p>
        <p className="text-sm text-neutral-600">
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
            NeoiDigital Japan Market Hub
          </a>
        </p>
        <div className="pt-2">
          <CTA />
        </div>
      </section>
    </main>
  );
}
