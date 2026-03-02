import { siteConfig } from "../content/site.config";

export default function KeywordBlock() {
  return (
    <section className="border-t border-neutral-200 pt-10">
      <h2 className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-1">
        Coverage Map
      </h2>
      <p className="text-xs text-neutral-400 mb-6">
        Common search topics this page addresses.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xs font-semibold tracking-wide text-neutral-500 uppercase mb-3">
            Primary Topics
          </h3>
          <ul className="space-y-2">
            {siteConfig.mainKeywords.map((kw) => (
              <li key={kw} className="text-sm text-neutral-800 font-medium">
                {kw}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold tracking-wide text-neutral-500 uppercase mb-3">
            Related Topics
          </h3>
          <ul className="space-y-1">
            {siteConfig.supportingKeywords.map((kw) => (
              <li key={kw} className="text-sm text-neutral-600">
                {kw}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold tracking-wide text-neutral-500 uppercase mb-3">
            Common Questions (Search)
          </h3>
          <ul className="space-y-1">
            {siteConfig.longTailKeywords.slice(0, 6).map((kw) => (
              <li key={kw} className="text-sm text-neutral-500">
                {kw}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
