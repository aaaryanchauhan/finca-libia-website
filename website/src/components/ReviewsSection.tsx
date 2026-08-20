import { ExternalLink } from 'lucide-react';

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
      quote: "The view of the mountains from the master suite balcony at sunrise is unforgettable. World-class luxury in Colombia.",
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

        {/* Check Real Reviews on Airbnb Button */}
        <div className="mt-16 flex justify-center pt-8 border-t border-stone-300/50">
          <a
            href="https://www.airbnb.co.in/rooms/1023470890334383414/reviews?locale=en&source_impression_id=p3_1786777674_P3i8I1bGKt_w99PD&review_page_entrypoint=show_all"
            target="_blank"
            rel="noopener noreferrer"
            className="no-tap-highlight group inline-flex items-center gap-3 bg-[#121212] hover:bg-stone-800 text-ivory-50 px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>Check real reviews on Airbnb</span>
            <ExternalLink className="h-4 w-4 text-[#E8E2D6] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
