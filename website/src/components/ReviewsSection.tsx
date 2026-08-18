export function ReviewsSection() {
  const pullQuote = {
    quote: "We have traveled all over the world and this is one of the best homes we have stayed in. The staff was A+++ and the estate is extraordinary.",
    author: "Ellena S.",
    detail: "Stayed with family · Monterey, California",
  };

  const shortReviews = [
    {
      quote: "Meyer, Nancy, Liliana and Rafa, thank you for making us feel at home. Your flexibility and 24/7 availability made our stay magical.",
      author: "Patrick M.",
      detail: "Nassau, The Bahamas",
    },
    {
      quote: "Very nice house, great furnishings and excellent options for families with bowling, tennis, and heated pool. Highly recommended!",
      author: "Irene K.",
      detail: "Verified Guest",
    },
    {
      quote: "The view of the mountains from the master suite jacuzzi at sunrise is unforgettable. World-class luxury in Colombia.",
      author: "David R.",
      detail: "Miami, Florida",
    },
  ];

  return (
    <section id="reviews" className="relative bg-[#F4F0E9] text-[#121212] py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-16 lg:px-24">
        {/* Asymmetric Section Intro Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-stone-600 font-medium mb-3">
            Guest Experiences
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#121212] leading-tight">
            Endorsed by Travelers
          </h2>
        </div>

        {/* Typographic Pull Quote Spotlight (36–48px) */}
        <div className="max-w-4xl mb-20">
          <blockquote className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[44px] font-light leading-[1.25] text-[#1a1816] tracking-tight">
            “{pullQuote.quote}”
          </blockquote>
          <div className="mt-6 flex items-center gap-3">
            <span className="h-px w-8 bg-stone-400" />
            <div>
              <span className="font-serif text-lg font-medium text-[#121212] block">
                {pullQuote.author}
              </span>
              <span className="text-xs uppercase tracking-[0.15em] text-stone-600 font-mono block mt-0.5">
                {pullQuote.detail}
              </span>
            </div>
          </div>
        </div>

        {/* Restrained 3-Column Row of Short Reviews */}
        <div className="pt-12 border-t border-stone-300/80 grid grid-cols-1 md:grid-cols-3 gap-10">
          {shortReviews.map((rev, idx) => (
            <div key={idx} className="space-y-4">
              <p className="font-sans text-sm font-light leading-relaxed text-stone-700">
                "{rev.quote}"
              </p>
              <div>
                <span className="font-serif text-base font-medium text-[#121212] block">
                  {rev.author}
                </span>
                <span className="text-[11px] uppercase tracking-wider text-stone-500 font-mono">
                  {rev.detail}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
