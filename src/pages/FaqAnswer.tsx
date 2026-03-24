import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import SEOHead from "../components/SEOHead";
import FaqAnswerLayout from "../components/FaqAnswerLayout";
import type { FAQ } from "../content/site.config";
import { siteConfig } from "../content/site.config";
import { getFaqBySlug } from "../lib/faq";
import { faqSinglePageJsonLd, pageTitle } from "../lib/seo";

export default function FaqAnswer() {
  const { slug } = useParams<{ slug: string }>();
  const item = getFaqBySlug(slug);

  if (!item?.slug) {
    return (
      <>
        <SEOHead
          path={`/faq/${slug ?? ""}`}
          title={pageTitle("Question not found")}
          description="The requested FAQ could not be found. Browse all Japan market entry questions."
        />
        <main className="max-w-3xl mx-auto px-6 py-16 space-y-6">
          <h1 className="text-2xl font-semibold text-neutral-900">Question not found</h1>
          <p className="text-sm text-neutral-600">
            <Link to="/faq" className="underline underline-offset-2 hover:text-neutral-900">
              Return to the FAQ hub
            </Link>
            {" or "}
            <Link to="/" className="underline underline-offset-2 hover:text-neutral-900">
              go to Home
            </Link>
            .
          </p>
        </main>
      </>
    );
  }

  const path = `/faq/${item.slug}`;
  const title = `${item.question} | ${siteConfig.siteName}`;
  const metaDescription =
    item.preview && item.preview.length <= 160 ? item.preview : item.answer.slice(0, 155).trim() + (item.answer.length > 155 ? "…" : "");

  return (
    <>
      <SEOHead path={path} title={title} description={metaDescription} leadText={item.answer.slice(0, 240)} />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSinglePageJsonLd(item.question, item.answer, path))}
        </script>
      </Helmet>
      <FaqAnswerLayout item={item as FAQ & { slug: string }} />
    </>
  );
}
