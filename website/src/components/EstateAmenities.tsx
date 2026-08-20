import { estateFeatures } from '../data/villaData';
import { ArrowRight } from 'lucide-react';

interface EstateAmenitiesProps {
  onOpenInquiry: () => void;
}

export function EstateAmenities({ onOpenInquiry }: EstateAmenitiesProps) {
  return (
    <section id="amenities" className="relative bg-ink-900 px-6 py-24 lg:px-12 border-b border-ink-700/60">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest-3 text-champagne-400 font-medium">
            Estate Experience
          </p>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-ivory-50">
            Unrivaled Resort-Grade Amenities
          </h2>
          <p className="mt-4 font-serif text-lg font-light italic text-stone-300">
            Designed to offer full luxury resort facilities strictly within your own private 100% exclusive estate.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {estateFeatures.map((feat) => (
            <div
              key={feat.id}
              className="group flex flex-col justify-between rounded-3xl border border-ink-700/60 bg-ink-800/40 p-6 backdrop-blur-sm transition-all duration-500 hover:border-champagne-500/40 hover:bg-ink-800/80 hover:shadow-2xl hover:-translate-y-1"
            >
              <div>
                {/* Image Header */}
                <div className="relative h-60 w-full overflow-hidden rounded-2xl">
                  <img
                    src={feat.image}
                    alt={feat.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900/90 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 rounded-full bg-ink-900/80 border border-ink-700/80 px-3.5 py-1 text-[10px] uppercase tracking-widest-2 text-champagne-300 font-medium backdrop-blur-md">
                    {feat.category}
                  </span>
                </div>

                {/* Content */}
                <div className="mt-6">
                  <h3 className="font-serif text-2xl font-light text-ivory-50 group-hover:text-champagne-300 transition-colors">
                    {feat.title}
                  </h3>
                  <p className="mt-1 font-serif text-sm italic text-stone-400">
                    {feat.subtitle}
                  </p>
                  <p className="mt-4 text-xs leading-relaxed text-stone-300 font-light">
                    {feat.description}
                  </p>
                </div>
              </div>

              {/* Specs pill footer */}
              <div className="mt-6 pt-4 border-t border-ink-700/60 space-y-2">
                {feat.specs.map((spec, i) => (
                  <div key={i} className="flex justify-between items-center text-xs">
                    <span className="text-stone-400 font-light">{spec.label}</span>
                    <span className="text-ivory-100 font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-ink-800/90 via-ink-800 to-ink-800/90 border border-champagne-500/30 p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="font-serif text-3xl sm:text-4xl font-light text-ivory-50">
              Experience Finca Libia in Complete Serenity
            </h3>
            <p className="mt-3 font-serif text-base font-light italic text-stone-300">
              Cleaning services, groundskeeping, estate manager, and dedicated concierge included with every stay.
            </p>
            <button
              onClick={onOpenInquiry}
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-champagne-500 px-8 py-3.5 text-xs font-medium uppercase tracking-widest-2 text-ink-900 shadow-xl transition-all hover:bg-champagne-300 hover:scale-105"
            >
              <span>Book Now</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
