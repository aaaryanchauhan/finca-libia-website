import { ShieldCheck, Briefcase, Heart, Star } from 'lucide-react';
import { villaInfo } from '../data/villaData';

export function HostSection() {
  return (
    <section id="host" className="relative bg-ink-900 px-6 py-20 lg:px-12 border-b border-ink-700/60">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-ivory-50 mb-10">
          Meet your host
        </h2>

        {/* Main Host Card Container */}
        <div className="border border-ink-700/80 bg-ink-800/50 p-8 sm:p-12 backdrop-blur-md shadow-2xl space-y-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-8 pb-8 border-b border-ink-700/60">
            {/* Host Avatar & Name */}
            <div className="flex flex-col items-center text-center sm:text-left sm:flex-row gap-6">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300"
                  alt="Meyer — Host"
                  className="h-28 w-28 sm:h-32 sm:w-32 object-cover border-2 border-champagne-400/60 shadow-xl"
                />
                {/* Verified Shield Badge */}
                <div className="absolute bottom-1 right-1 flex h-7 w-7 items-center justify-center bg-rose-600 text-white shadow-lg border border-ink-800">
                  <ShieldCheck className="h-4 w-4" />
                </div>
              </div>

              <div>
                <h3 className="font-serif text-3xl sm:text-4xl font-light text-ivory-50">
                  Meyer
                </h3>
                <p className="text-xs uppercase tracking-widest-2 text-champagne-400 font-medium mt-1">
                  Host & Property Manager
                </p>
              </div>
            </div>

            {/* Host Metrics Block */}
            <div className="grid grid-cols-3 gap-6 sm:gap-8 text-center bg-ink-900/80 border border-ink-700/60 px-6 py-4">
              <div>
                <span className="block font-serif text-2xl sm:text-3xl font-light text-ivory-50">
                  {villaInfo.reviewCount}
                </span>
                <span className="text-[10px] uppercase tracking-wider text-stone-400">Reviews</span>
              </div>
              <div className="border-x border-ink-700/60 px-4">
                <span className="flex items-center justify-center gap-1 font-serif text-2xl sm:text-3xl font-light text-ivory-50">
                  {villaInfo.rating.toFixed(1)} <Star className="h-4 w-4 fill-amber-400 text-amber-400 shrink-0 inline" />
                </span>
                <span className="text-[10px] uppercase tracking-wider text-stone-400">Rating</span>
              </div>
              <div>
                <span className="block font-serif text-2xl sm:text-3xl font-light text-ivory-50">13</span>
                <span className="text-[10px] uppercase tracking-wider text-stone-400">Years hosting</span>
              </div>
            </div>
          </div>

          {/* Host Bio Info List */}
          <div className="space-y-4 pt-2">
            <div className="flex items-start gap-4 text-stone-300 text-sm font-light">
              <div className="flex h-8 w-8 items-center justify-center bg-ink-700/50 text-champagne-400 shrink-0">
                <Heart className="h-4 w-4" />
              </div>
              <div>
                <span className="font-medium text-ivory-100">Born in the 70s</span>
              </div>
            </div>

            <div className="flex items-start gap-4 text-stone-300 text-sm font-light">
              <div className="flex h-8 w-8 items-center justify-center bg-ink-700/50 text-champagne-400 shrink-0">
                <Briefcase className="h-4 w-4" />
              </div>
              <div>
                <span className="font-medium text-ivory-100">My work: </span>
                <span className="text-stone-300">Playtech, Platinum Care Services, Metaskins</span>
              </div>
            </div>
          </div>

          {/* Personal Statement / Bio Quote */}
          <div className="pt-4 border-t border-ink-700/60">
            <p className="font-serif text-base sm:text-lg font-light italic text-ivory-100 leading-relaxed max-w-2xl">
              "Im from Montreal Canada i thrive on providing the perfect experience, availability to answer your questions or needs will not be a problem"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
