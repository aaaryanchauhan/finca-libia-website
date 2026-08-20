import { villaInfo } from '../data/villaData';

export function HostSection() {
  return (
    <section id="host" className="relative bg-ink-950 px-6 md:px-16 lg:px-24 py-28 border-b border-ivory-200/10">
      <div className="mx-auto max-w-7xl">
        {/* Asymmetric Section Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-xs uppercase tracking-[0.25em] text-[#E8E2D6]/70 font-medium mb-3">
            Personal Concierge & Ownership
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-ivory-50 leading-tight">
            Meet Your Host
          </h2>
        </div>

        {/* Host Profile Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-ink-900/60 border border-ivory-200/10 p-8 sm:p-12 shadow-2xl">
          {/* Host Avatar & Details */}
          <div className="lg:col-span-5 flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-6 lg:pb-0 lg:border-r border-ivory-200/10 lg:pr-8">
            <img
              src="/photos/host_photo.jpeg"
              alt="Meyer — Host"
              className="h-28 w-28 sm:h-36 sm:w-36 rounded-full object-cover border border-ivory-200/30 shadow-xl shrink-0"
            />
            <div className="space-y-2 text-center sm:text-left">
              <h3 className="font-serif text-3xl font-light text-ivory-50">
                Meyer
              </h3>
              <p className="text-xs uppercase tracking-[0.2em] text-[#E8E2D6]/80 font-mono">
                Host & Estate Director
              </p>
              <div className="pt-2 text-xs text-stone-400 space-y-1 font-sans">
                <p>Montreal, Canada & Medellín</p>
                <p className="font-mono text-ivory-200">13 Years Hospitality Hosting</p>
              </div>
            </div>
          </div>

          {/* Host Bio Statement & Metrics */}
          <div className="lg:col-span-7 space-y-6">
            <blockquote className="font-serif text-xl sm:text-2xl font-light italic text-ivory-100 leading-relaxed border-l-2 border-[#E8E2D6]/40 pl-6">
              "I thrive on providing the perfect experience. Immediate availability for your requests, private staffing, and bespoke itineraries is our baseline."
            </blockquote>

            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-ivory-200/10 text-center font-mono">
              <div>
                <span className="block font-serif text-2xl font-light text-ivory-50">{villaInfo.rating.toFixed(1)}</span>
                <span className="text-[10px] uppercase tracking-wider text-stone-400">Rating</span>
              </div>
              <div className="border-x border-ivory-200/10">
                <span className="block font-serif text-2xl font-light text-ivory-50">{villaInfo.reviewCount}</span>
                <span className="text-[10px] uppercase tracking-wider text-stone-400">Reviews</span>
              </div>
              <div>
                <span className="block font-serif text-2xl font-light text-ivory-50">100%</span>
                <span className="text-[10px] uppercase tracking-wider text-stone-400">Response Rate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
