import { useState, useEffect } from 'react';
import { Calendar, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { villaInfo } from '../data/villaData';

interface HeroProps {
  onOpenInquiry: () => void;
  onOpenGallery: () => void;
  onOpenDigitalTour: () => void;
}

export function Hero({ onOpenInquiry, onOpenGallery, onOpenDigitalTour }: HeroProps) {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % villaInfo.heroImages.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const nextBg = () => {
    setCurrentBg((prev) => (prev + 1) % villaInfo.heroImages.length);
  };

  const prevBg = () => {
    setCurrentBg((prev) => (prev - 1 + villaInfo.heroImages.length) % villaInfo.heroImages.length);
  };

  return (
    <section id="overview" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image Carousel */}
      {villaInfo.heroImages.map((img, index) => (
        <div
          key={img}
          className={`absolute inset-0 transition-opacity duration-[2.5s] ease-in-out ${
            index === currentBg ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={img}
            alt="Finca Libia Estate"
            className="h-full w-full object-cover animate-slow-zoom"
          />
        </div>
      ))}

      {/* Multi-layered Contrast Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink-900/90 via-ink-900/50 to-ink-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(26,24,22,0.65)_0%,_rgba(26,24,22,0)_75%)] pointer-events-none" />

      {/* Hero Central Content */}
      <div className="relative z-20 mx-auto max-w-4xl px-6 text-center mt-12">
        <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-tight text-ivory-50 hero-text-shadow drop-shadow-2xl animate-fade-up">
          Finca Libia
        </h1>

        <p className="mt-6 max-w-2xl mx-auto font-serif text-xl sm:text-2xl font-light italic leading-relaxed text-ivory-100 hero-text-shadow drop-shadow-md animate-fade-up animate-delay-100">
          A historic coffee plantation reimagined as a private architectural sanctuary. 12 private mountain acres, heated 25m infinity pool, clay tennis court & full staff.
        </p>

        {/* Quick Highlights Pills */}
        <div className="mt-8 flex flex-wrap justify-center items-center gap-3 sm:gap-4 text-xs font-light tracking-wider text-ivory-200/90">
          <span className="rounded-full bg-ink-900/60 border border-ink-700/60 px-3.5 py-1.5 backdrop-blur-sm">6 Master Suites</span>
          <span className="text-champagne-500">•</span>
          <span className="rounded-full bg-ink-900/60 border border-ink-700/60 px-3.5 py-1.5 backdrop-blur-sm">Up to 14 Guests</span>
          <span className="text-champagne-500">•</span>
          <span className="rounded-full bg-ink-900/60 border border-ink-700/60 px-3.5 py-1.5 backdrop-blur-sm">25m Saltwater Infinity Pool</span>
          <span className="text-champagne-500">•</span>
          <span className="rounded-full bg-ink-900/60 border border-ink-700/60 px-3.5 py-1.5 backdrop-blur-sm">Full Private Staff</span>
        </div>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up animate-delay-200">
          <button
            onClick={onOpenInquiry}
            className="no-tap-highlight group w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full border border-champagne-400/50 bg-champagne-500/90 px-7 py-3.5 text-xs font-medium uppercase tracking-widest-2 text-ink-900 shadow-2xl backdrop-blur-md transition-all duration-300 hover:bg-champagne-300 hover:shadow-champagne-500/30 hover:scale-105 active:scale-95"
          >
            <Calendar className="h-4 w-4" />
            <span>Check Availability & Rates</span>
          </button>

          <button
            onClick={onOpenDigitalTour}
            className="no-tap-highlight group w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full border border-ivory-200/30 bg-ink-900/60 px-6 py-3.5 text-xs font-medium uppercase tracking-widest-2 text-ivory-100 backdrop-blur-md shadow-xl transition-all duration-300 hover:border-champagne-400 hover:bg-ink-900 hover:text-champagne-300 active:scale-95"
          >
            <Play className="h-4 w-4 text-champagne-400 group-hover:scale-110 transition-transform" />
            <span>Digital Tour</span>
          </button>

          <button
            onClick={onOpenGallery}
            className="no-tap-highlight group w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full border border-ivory-200/20 bg-ink-900/40 px-6 py-3.5 text-xs font-medium uppercase tracking-widest-2 text-ivory-200 backdrop-blur-md shadow-lg transition-all duration-300 hover:border-champagne-400/60 hover:text-ivory-50 active:scale-95"
          >
            <span>Photo Gallery</span>
          </button>
        </div>
      </div>

      {/* Carousel Controls & Indicators */}
      <div className="absolute bottom-8 left-6 right-6 z-20 flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          {villaInfo.heroImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentBg(idx)}
              className={`h-1.5 transition-all duration-500 rounded-full ${
                idx === currentBg ? 'w-8 bg-champagne-400' : 'w-2 bg-ivory-200/40 hover:bg-ivory-200/70'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={prevBg}
            className="p-2 rounded-full border border-ivory-200/20 bg-ink-900/50 text-ivory-100 backdrop-blur-md transition-all hover:bg-ink-900 hover:border-champagne-400"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={nextBg}
            className="p-2 rounded-full border border-ivory-200/20 bg-ink-900/50 text-ivory-100 backdrop-blur-md transition-all hover:bg-ink-900 hover:border-champagne-400"
            aria-label="Next slide"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
