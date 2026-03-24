import { Link } from "react-router-dom";
import type { FAQ } from "../content/site.config";
import { faqPath } from "../lib/faq";

type Props = {
  items: FAQ[];
  /** Show preview text and link to full answer when slug exists */
  showAnswerLinks?: boolean;
};

export default function FAQList({ items, showAnswerLinks = false }: Props) {
  return (
    <dl className="divide-y divide-neutral-200">
      {items.map((item) => (
        <div key={item.question} className="py-6">
          <dt className="text-sm font-semibold text-neutral-900 mb-2">
            {item.slug ? (
              <Link to={faqPath(item.slug)} className="hover:underline underline-offset-2 decoration-neutral-400">
                {item.question}
              </Link>
            ) : (
              item.question
            )}
          </dt>
          <dd className="text-sm text-neutral-600 leading-relaxed">
            {item.preview ?? item.answer}
          </dd>
          {showAnswerLinks && item.slug ? (
            <dd className="pt-2">
              <Link
                to={faqPath(item.slug)}
                className="text-xs text-neutral-500 hover:text-neutral-900 underline underline-offset-2"
              >
                Full answer →
              </Link>
            </dd>
          ) : null}
        </div>
      ))}
    </dl>
  );
}
