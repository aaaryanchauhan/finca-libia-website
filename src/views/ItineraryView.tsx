import { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { itineraryPaces, itineraryDays } from '@/data/content';
import { Reveal } from '@/components/Reveal';
import { BackButton } from '@/components/BackButton';

interface ItineraryViewProps {
  onBack: () => void;
}

export function ItineraryView({ onBack }: ItineraryViewProps) {
  const [selectedPace, setSelectedPace] = useState<string | null>(null);
  const [showTimeline, setShowTimeline] = useState(false);

  if (showTimeline) {
    return (
      <div className="min-h-screen bg-ink-900">
        <div className="px-6 pt-8 pb-4">
          <BackButton onClick={() => setShowTimeline(false)} />
        </div>
        <div className="mx-auto max-w-2xl px-6 pb-44">
          <Reveal>
            <p className="text-xs uppercase tracking-widest-3 text-stone-500">Your 3-day stay</p>
            <h1 className="mt-4 font-serif text-5xl font-light text-ivory-50">
              A beautiful few days.
            </h1>
          </Reveal>

          <div className="mt-16 space-y-16">
            {itineraryDays.map((day, i) => (
              <Reveal key={day.day} delay={i * 100}>
                <div>
                  <p className="font-serif text-sm text-champagne-400/70 tracking-widest-2">{day.day}</p>
                  <h2 className="mt-1 font-serif text-3xl font-light text-ivory-100">{day.label}</h2>
                  <div className="mt-8 space-y-6">
                    {day.items.map((item, j) => (
                      <div key={j} className="flex gap-6">
                        <div className="shrink-0 w-20">
                          <p className="font-serif text-sm font-light text-stone-400">{item.time}</p>
                        </div>
                        <div className="flex-1 border-l border-ink-700 pl-6 pb-2">
                          <h3 className="font-serif text-xl font-light text-ivory-100">{item.title}</h3>
                          <p className="mt-1 text-sm text-stone-400">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ink-900">
      <div className="px-6 pt-8 pb-4">
        <BackButton onClick={onBack} />
      </div>
      <div className="mx-auto max-w-2xl px-6 pb-44">
        <Reveal>
          <p className="text-xs uppercase tracking-widest-3 text-stone-500">Your itinerary</p>
          <h1 className="mt-4 font-serif text-5xl font-light text-ivory-50 leading-tight">
            How do you want to spend your stay?
          </h1>
        </Reveal>

        <div className="mt-12 space-y-px">
          {itineraryPaces.map((pace, i) => (
            <Reveal key={pace.id} delay={i * 60}>
              <button
                onClick={() => setSelectedPace(pace.id)}
                className="no-tap-highlight group flex w-full items-center justify-between border-b border-ink-700 py-6 text-left transition-colors hover:border-champagne-500/30"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    {selectedPace === pace.id && (
                      <Check className="h-4 w-4 text-champagne-400" strokeWidth={1.5} />
                    )}
                    <h3 className={`font-serif text-3xl font-light transition-colors ${
                      selectedPace === pace.id ? 'text-champagne-300' : 'text-ivory-100 group-hover:text-champagne-300'
                    }`}>
                      {pace.label}
                    </h3>
                  </div>
                  <p className="mt-1 text-sm text-stone-400 pl-7">{pace.description}</p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>

        {selectedPace && (
          <div className="animate-fade-up mt-12">
            <button
              onClick={() => setShowTimeline(true)}
              className="no-tap-highlight group inline-flex items-center gap-2 text-champagne-400 transition-colors hover:text-champagne-300"
            >
              <span className="text-sm tracking-wide">View your timeline</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
