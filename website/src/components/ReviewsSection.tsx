import { Star, Quote } from 'lucide-react';
import { reviews, villaInfo } from '../data/villaData';

export function ReviewsSection() {
  return (
    <section className="relative bg-ink-900 px-6 py-24 lg:px-12 border-b border-ink-700/60">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 text-amber-400 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-amber-400" />
            ))}
            <span className="ml-2 text-xs font-semibold text-ivory-100">{villaInfo.rating} Rating</span>
            <span className="text-xs text-stone-400">({villaInfo.reviewCount} Reviews)</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl font-light text-ivory-50">
            Guest Testimonials
          </h2>
          <p className="mt-3 font-serif text-lg font-light italic text-stone-300">
            Stories from distinguished guests who have experienced Finca Libia.
          </p>
        </div>

        {/* Reviews Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="relative flex flex-col justify-between rounded-3xl border border-ink-700/60 bg-ink-800/40 p-8 backdrop-blur-sm shadow-xl transition-all duration-300 hover:border-champagne-500/40 hover:bg-ink-800/80"
            >
              <div>
                <Quote className="h-8 w-8 text-champagne-500/30 mb-4" />
                <p className="font-serif text-base font-light italic text-ivory-100 leading-relaxed">
                  "{rev.comment}"
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-ink-700/60 flex items-center gap-4">
                <img
                  src={rev.avatar}
                  alt={rev.author}
                  className="h-12 w-12 rounded-full object-cover border border-champagne-500/30"
                />
                <div>
                  <h4 className="font-serif text-lg font-light text-ivory-50">{rev.author}</h4>
                  <p className="text-xs text-stone-400 font-light">{rev.location} · {rev.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
