import { Sparkles, Utensils, Plane, Coffee, MapPin, ArrowRight } from 'lucide-react';

interface ConciergeSectionProps {
  onOpenInquiry: () => void;
}

export function ConciergeSection({ onOpenInquiry }: ConciergeSectionProps) {
  const experiences = [
    {
      icon: Utensils,
      title: 'In-Villa Private Chef & Mixology',
      description: 'Custom multi-course dining prepared daily in the villa kitchen using fresh local ingredients, paired with fine wines and artisanal cocktails.',
    },
    {
      icon: Plane,
      title: 'Private Helicopter Charter',
      description: 'Direct helipad transfers or scenic aerial flights over Guatapé rock and the coffee mountains of Antioquia.',
    },
    {
      icon: Coffee,
      title: 'Exclusive Coffee Plantation Tour',
      description: 'Private visit to a working coffee finca in the mountains with master roasters and single-origin tastings.',
    },
    {
      icon: MapPin,
      title: 'Medellín Curated City Exploration',
      description: 'Private guided tours of Comuna 13 street art, Botero Plaza, top fine dining spots (El Cielo, Oci.Mde), and VIP nightlife.',
    },
  ];

  return (
    <section id="concierge" className="relative bg-ink-900 px-6 py-24 lg:px-12 border-b border-ink-700/60">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left copy */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-champagne-400/40 bg-champagne-500/10 px-4 py-1.5 text-xs text-champagne-300 font-medium">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Tailored Bespoke Experiences</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl font-light text-ivory-50">
              Private Concierge & Butler Services
            </h2>

            <p className="font-serif text-lg font-light italic text-stone-300">
              Your stay at Finca Libia is backed by an attentive team dedicated to fulfilling every wish, from arrival to departure.
            </p>

            <p className="text-sm leading-relaxed text-stone-400 font-light">
              Whether arranging airport fast-track arrival, scheduling private masseuses by the pool, or curating bespoke itineraries across Medellín, our private concierge handles every detail seamlessly.
            </p>

            <button
              onClick={onOpenInquiry}
              className="no-tap-highlight group inline-flex items-center gap-3 rounded-full bg-champagne-500/90 px-7 py-3.5 text-xs font-medium uppercase tracking-widest-2 text-ink-900 shadow-xl transition-all duration-300 hover:bg-champagne-300 hover:scale-105"
            >
              <span>Request Custom Itinerary</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Right experiences cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {experiences.map((exp, idx) => {
              const Icon = exp.icon;
              return (
                <div
                  key={idx}
                  className="group rounded-3xl border border-ink-700/60 bg-ink-800/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-champagne-500/40 hover:bg-ink-800/80"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-champagne-500/10 text-champagne-400 border border-champagne-500/20 group-hover:bg-champagne-500 group-hover:text-ink-900 transition-colors">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-4 font-serif text-xl font-light text-ivory-100 group-hover:text-champagne-300 transition-colors">
                    {exp.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-stone-300 font-light">
                    {exp.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
