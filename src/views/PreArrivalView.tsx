import { ArrowRight } from 'lucide-react';
import { property } from '@/data/content';
import { Reveal } from '@/components/Reveal';
import { BackButton } from '@/components/BackButton';

interface PreArrivalViewProps {
  onBack: () => void;
  onNavigate: (view: string) => void;
}

export function PreArrivalView({ onBack, onNavigate }: PreArrivalViewProps) {
  const sections = [
    {
      label: 'Your arrival',
      title: 'August 15, afternoon',
      body: 'Your driver will meet you at the airport. The journey to the estate takes approximately 45 minutes through the valley. Arrive with nothing to carry — we will handle your luggage.',
    },
    {
      label: 'Getting here',
      title: 'José María Córdova Airport',
      body: 'The closest airport is MDE (Rionegro), 45 minutes from the estate. If you are arriving from Bogotá, the flight is 35 minutes. We can arrange a private car — just let the concierge know your flight details.',
    },
    {
      label: 'What to expect',
      title: 'A warm welcome',
      body: 'Upon arrival, you will be greeted by name, shown to your room, and offered a cold drink. The estate is yours — every amenity, every space, every corner. There is no reception desk, no check-in form. You are home.',
    },
    {
      label: 'Prepare your stay',
      title: 'Tell us your preferences',
      body: 'Dietary restrictions, favorite drinks, special occasions — share anything that will help us prepare. The more we know, the more personal your stay will be.',
      action: { label: 'Speak to the concierge', view: 'concierge' },
    },
    {
      label: 'Explore the property',
      title: 'See the estate before you arrive',
      body: 'Take a virtual tour of the property. Explore the pool, the bar, the gardens, the games room. Know what awaits you.',
      action: { label: 'Take the tour', view: 'stay' },
    },
  ];

  return (
    <div className="min-h-screen bg-ink-900">
      {/* Hero */}
      <section className="relative h-[55vh] w-full overflow-hidden">
        <img
          src={property.heroImageAlt}
          alt="Finca Libia"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900/30 to-ink-900" />
        <div className="absolute top-6 left-6 z-10">
          <BackButton onClick={onBack} />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6 pb-10 text-center">
          <Reveal>
            <p className="font-serif text-lg font-light italic text-ivory-200 hero-text-shadow">
              Your stay begins soon.
            </p>
            <p className="mt-4 font-serif text-6xl font-light text-champagne-300 hero-text-shadow">
              {property.daysUntilArrival} days to go
            </p>
          </Reveal>
        </div>
      </section>

      {/* Sections */}
      <div className="mx-auto max-w-2xl px-6 py-16 pb-32">
        <div className="space-y-16">
          {sections.map((section, i) => (
            <Reveal key={section.label} delay={i * 80}>
              <div className="border-t border-ink-700 pt-8">
                <p className="text-xs uppercase tracking-widest-3 text-champagne-400/70">{section.label}</p>
                <h2 className="mt-2 font-serif text-3xl font-light text-ivory-50">{section.title}</h2>
                <p className="mt-4 text-base leading-relaxed text-stone-300">{section.body}</p>
                {section.action && (
                  <button
                    onClick={() => onNavigate(section.action.view)}
                    className="no-tap-highlight group mt-6 inline-flex items-center gap-2 text-champagne-400 transition-colors hover:text-champagne-300"
                  >
                    <span className="text-sm tracking-wide">{section.action.label}</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
                  </button>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
