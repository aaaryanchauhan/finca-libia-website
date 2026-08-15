import { useState } from 'react';
import { Star, Award, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import { reviews, reviewSubcategories, guestMentionsTags } from '../data/villaData';

export function ReviewsSection() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [showAllReviews, setShowAllReviews] = useState(false);

  const filteredReviews = selectedTag
    ? reviews.filter((r) => r.comment.toLowerCase().includes(selectedTag.toLowerCase()))
    : reviews;

  const displayedReviews = showAllReviews ? filteredReviews : filteredReviews.slice(0, 6);

  return (
    <section id="reviews" className="relative bg-ink-900 px-6 py-24 lg:px-12 border-b border-ink-700/60">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          {/* Guest Favourite Badge */}
          <div className="inline-flex items-center gap-2 border border-amber-400/40 bg-amber-400/10 px-5 py-2 text-xs text-amber-300 font-medium backdrop-blur-md shadow-lg">
            <Award className="h-4 w-4 text-amber-400 shrink-0" />
            <span>Guest favourite · Top rated based on ratings, reviews & reliability</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-ivory-50">
            Rated 5.0 out of 5 from 12 reviews
          </h2>

          <p className="font-serif text-lg font-light italic text-stone-300">
            100% 5-star ratings from guests across the globe.
          </p>
        </div>

        {/* Rating Breakdown & Category Ratings */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-ink-800/40 border border-ink-700/60 p-8 sm:p-10 backdrop-blur-sm shadow-2xl">
          {/* Left Main Rating Spotlight */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center text-center p-6 border-b lg:border-b-0 lg:border-r border-ink-700/60">
            <span className="font-serif text-7xl font-light text-ivory-50">5.0</span>
            <div className="flex items-center gap-1 text-amber-400 my-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-xs uppercase tracking-widest-2 text-champagne-400 font-medium">Overall Rating</p>
            <p className="text-xs text-stone-400 font-light mt-1">100% of reviews gave 5 stars</p>
          </div>

          {/* Right Subcategories Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6">
            {reviewSubcategories.map((sub, idx) => (
              <div key={idx} className="space-y-1">
                <span className="text-xs uppercase tracking-wider text-stone-400 font-medium block">
                  {sub.label}
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-2xl font-light text-ivory-50">{sub.score.toFixed(1)}</span>
                  <div className="flex-1 h-1.5 bg-ink-700/80 overflow-hidden">
                    <div
                      className="h-full bg-champagne-400"
                      style={{ width: `${(sub.score / 5) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Guest Mention Filter Tags */}
        <div className="mt-12">
          <p className="text-center text-xs uppercase tracking-widest-2 text-stone-400 font-medium mb-4">
            Guest reviews mention
          </p>
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            <button
              onClick={() => setSelectedTag(null)}
              className={`no-tap-highlight px-4 py-1.5 text-xs font-medium uppercase tracking-wider transition-all ${
                selectedTag === null
                  ? 'bg-champagne-500 text-ink-900 shadow-md scale-105'
                  : 'bg-ink-800/60 text-ivory-200 hover:bg-ink-700/60'
              }`}
            >
              All Reviews ({reviews.length})
            </button>
            {guestMentionsTags.map((item) => {
              const isSelected = selectedTag === item.tag;
              return (
                <button
                  key={item.tag}
                  onClick={() => setSelectedTag(isSelected ? null : item.tag)}
                  className={`no-tap-highlight px-4 py-1.5 text-xs font-medium tracking-wide transition-all flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-champagne-500 text-ink-900 shadow-md scale-105 font-semibold'
                      : 'bg-ink-800/60 text-ivory-200 border border-ink-700/60 hover:border-champagne-400/40 hover:text-ivory-50'
                  }`}
                >
                  <span>{item.tag}</span>
                  <span className="text-[10px] opacity-70 font-mono">({item.count})</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Authentic Reviews Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedReviews.map((rev) => (
            <div
              key={rev.id}
              className="relative flex flex-col justify-between border border-ink-700/60 bg-ink-800/40 p-8 backdrop-blur-sm shadow-xl transition-all duration-300 hover:border-champagne-500/40 hover:bg-ink-800/70"
            >
              <div>
                {/* Author Header */}
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={rev.avatar}
                    alt={rev.author}
                    className="h-12 w-12 object-cover border border-champagne-400/40 shadow-md shrink-0"
                  />
                  <div>
                    <h4 className="font-serif text-lg font-light text-ivory-50">{rev.author}</h4>
                    <p className="text-[11px] text-stone-400 font-light">{rev.location}</p>
                    <div className="flex items-center gap-2 text-[10px] text-champagne-400 mt-0.5">
                      <div className="flex text-amber-400">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-amber-400" />
                        ))}
                      </div>
                      <span>• {rev.date}</span>
                      {rev.tripType && <span>• {rev.tripType}</span>}
                    </div>
                  </div>
                </div>

                {/* Comment Text */}
                <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed whitespace-pre-line">
                  "{rev.comment}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-ink-700/40 flex items-center justify-between text-[11px] text-stone-500 font-light">
                <span>Verified Airbnb Guest Stay</span>
                <Sparkles className="h-3.5 w-3.5 text-champagne-400/60" />
              </div>
            </div>
          ))}
        </div>

        {/* Expand / Collapse All 12 Reviews Toggle */}
        {filteredReviews.length > 6 && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setShowAllReviews(!showAllReviews)}
              className="no-tap-highlight inline-flex items-center gap-2 border border-champagne-400/50 bg-ink-800/80 px-8 py-3.5 text-xs font-medium uppercase tracking-widest-2 text-champagne-300 backdrop-blur-md shadow-xl transition-all hover:bg-champagne-500 hover:text-ink-900"
            >
              <span>{showAllReviews ? 'Collapse Reviews' : `Show all ${filteredReviews.length} reviews`}</span>
              {showAllReviews ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
