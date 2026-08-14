import { useState, useEffect } from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { property } from '@/data/content';
import { FullScreenImage } from '@/components/FullScreenImage';
import { Reveal } from '@/components/Reveal';

interface HomeViewProps {
  onNavigate: (view: string) => void;
}

export function HomeView({ onNavigate }: HomeViewProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const heroImagePairs = [
    { mobile: property.heroImage, desktop: property.heroImageDesktop },
    { mobile: property.heroImageAlt, desktop: property.heroImageAltDesktop },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImagePairs.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [heroImagePairs.length]);

  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
  });

  return (
    <div className="min-h-screen">
      {/* Cinematic Hero */}
      <section className="relative h-screen w-full overflow-hidden">
        {heroImagePairs.map((pair, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-[2s] ${
              i === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <picture className="block h-full w-full">
              <source media="(min-width: 768px)" srcSet={pair.desktop} />
              <img
                src={pair.mobile}
                alt="Finca Libia"
                className="h-full w-full object-cover"
                style={{
                  transform: i === currentImage ? 'scale(1)' : 'scale(1.05)',
                  transition: 'transform 7s ease-out',
                }}
              />
            </picture>
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900/30 via-ink-900/20 to-ink-900/80" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <p className="animate-fade-in text-xs uppercase tracking-widest-3 text-ivory-200/80">
            Welcome to
          </p>
          <h1 className="animate-fade-up animate-delay-100 mt-4 font-serif text-5xl font-light text-ivory-50 hero-text-shadow sm:text-6xl md:text-7xl">
            {property.name}
          </h1>
          <p className="animate-fade-up animate-delay-200 mt-5 max-w-md font-serif text-lg font-light italic text-ivory-200 hero-text-shadow">
            {property.tagline}
          </p>
          <button
            onClick={() => onNavigate('stay')}
            className="animate-fade-up animate-delay-400 no-tap-highlight mt-10 group inline-flex items-center gap-2 text-ivory-200/90 transition-colors hover:text-ivory-50"
          >
            <span className="text-xs uppercase tracking-widest-2">Explore your stay</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-2" strokeWidth={1.5} />
          </button>
        </div>

        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
          <div className="h-12 w-px bg-ivory-200/30 animate-shimmer" />
        </div>
      </section>

      {/* Your Stay */}
      <section className="relative bg-ink-900 px-6 py-20">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <p className="text-xs uppercase tracking-widest-3 text-stone-400">
              Your stay
            </p>
            <p className="mt-3 font-serif text-2xl font-light text-ivory-100">
              Today · {today}
            </p>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="mt-8 font-serif text-4xl font-light text-ivory-50">
              Good morning, {property.guestName}.
            </h2>
            <p className="mt-3 text-sm text-stone-300">
              {property.weather.temp} · {property.weather.condition}
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-12 border-t border-ink-700 pt-10">
              <p className="font-serif text-xl font-light italic text-ivory-200">
                You have no plans yet.
              </p>
              <p className="mt-2 text-sm text-stone-400">
                Let us help you make the most of today.
              </p>
              <button
                onClick={() => onNavigate('itinerary')}
                className="no-tap-highlight group mt-6 inline-flex items-center gap-2 text-champagne-400 transition-colors hover:text-champagne-300"
              >
                <span className="text-sm tracking-wide">Create my itinerary</span>
                <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
              </button>
            </div>
          </Reveal>

          {/* Quick section links */}
          <Reveal delay={300}>
            <div className="mt-16 space-y-px">
              {[
                { label: 'Explore the estate', view: 'stay', desc: 'Pool, sauna, tennis, bar & more' },
                { label: 'Discover Medellín', view: 'explore', desc: 'Curated recommendations from the family' },
                { label: 'Speak to the concierge', view: 'concierge', desc: 'Requests, assistance, anything you need' },
                { label: 'Guest memories', view: 'memories', desc: 'Stories from those who stayed before' },
              ].map((item) => (
                <button
                  key={item.view}
                  onClick={() => onNavigate(item.view)}
                  className="no-tap-highlight group flex w-full items-center justify-between border-b border-ink-700 py-5 text-left transition-colors hover:border-champagne-500/30"
                >
                  <div>
                    <p className="font-serif text-xl font-light text-ivory-100 transition-colors group-hover:text-champagne-300">
                      {item.label}
                    </p>
                    <p className="mt-1 text-xs text-stone-500">{item.desc}</p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-stone-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-champagne-400" strokeWidth={1.5} />
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
