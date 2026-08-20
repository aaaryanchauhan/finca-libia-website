import { useState, useEffect } from 'react';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { BrandMonogram } from './BrandMonogram';

interface HeroProps {
  onOpenDigitalTour: () => void;
}

const heroImages = [
  '/photos/pool/pool_01.jpeg', // Pool frame one
  '/photos/exterior/exterior_10.jpeg',
  '/photos/living_room/living_room_02.jpeg',
  '/photos/courtyard/courtyard_01.jpeg',
  '/photos/bedroom_1/bedroom_1_01.jpeg',
];

export function Hero({ onOpenDigitalTour }: HeroProps) {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % heroImages.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const nextBg = () => {
    setCurrentBg((prev) => (prev + 1) % heroImages.length);
  };

  const prevBg = () => {
    setCurrentBg((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <section id="overview" className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-ink-950">
      {/* Background Image Carousel with 1.8s Filmic Crossfade */}
      {heroImages.map((img, index) => (
        <div
          key={img}
          className={`absolute inset-0 transition-opacity duration-[1800ms] ease-in-out ${
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

      {/* Multi-layered Vignette Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950/80 via-ink-950/40 to-ink-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(12,12,14,0.55)_0%,_rgba(12,12,14,0)_80%)] pointer-events-none" />

      {/* Hero Central Content */}
      <div className="relative z-20 mx-auto max-w-5xl px-6 text-center mt-12">
        {/* Brand Crest */}
        <div className="flex justify-center mb-6 text-[#E8E2D6]/80 animate-fade-up">
          <BrandMonogram size="lg" />
        </div>

        {/* Eyebrow */}
        <p className="text-xs uppercase tracking-[0.3em] text-[#E8E2D6] font-medium mb-3 animate-fade-up">
          Medellín · Private Luxury Estate
        </p>

        {/* Headline: 96px Scale Contrast */}
        <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-[96px] leading-none font-light tracking-tight text-ivory-50 hero-text-shadow drop-shadow-2xl animate-fade-up">
          Finca Libia
        </h1>

        {/* Roman Body (No Italics) */}
        <p className="mt-6 max-w-2xl mx-auto font-sans text-base sm:text-lg font-light leading-relaxed text-ivory-200/90 drop-shadow-md animate-fade-up animate-delay-100">
          A private 3.5-acre mountain sanctuary in the Medellín valley. Modernist architecture, 6 master suites, cleaning & grounds keeper services, and complete seclusion.
        </p>

        {/* Primary CTA: Solid Gold Fill */}
        <div className="mt-10 flex justify-center animate-fade-up animate-delay-200">
          <button
            onClick={onOpenDigitalTour}
            className="no-tap-highlight group inline-flex items-center justify-center gap-3 bg-champagne-500 hover:bg-champagne-400 px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-ink-900 shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <Play className="h-4 w-4 fill-ink-900 text-ink-900 transition-transform group-hover:scale-110" />
            <span>Digital Estate Tour</span>
          </button>
        </div>
      </div>

      {/* Carousel Indicators & Controls */}
      <div className="absolute bottom-8 left-6 right-6 z-20 flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentBg(idx)}
              className={`h-[2px] transition-all duration-500 ${
                idx === currentBg ? 'w-10 bg-[#E8E2D6]' : 'w-3 bg-ivory-200/30 hover:bg-ivory-200/60'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={prevBg}
            className="p-2.5 border border-ivory-200/15 bg-ink-950/60 text-ivory-100 backdrop-blur-md transition-all hover:bg-ink-900 hover:border-ivory-200/40 cursor-pointer"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={nextBg}
            className="p-2.5 border border-ivory-200/15 bg-ink-950/60 text-ivory-100 backdrop-blur-md transition-all hover:bg-ink-900 hover:border-ivory-200/40 cursor-pointer"
            aria-label="Next slide"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
