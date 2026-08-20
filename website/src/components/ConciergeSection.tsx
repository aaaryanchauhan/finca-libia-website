import { Sparkles, Utensils, Plane, Coffee, MapPin, ArrowRight, Check } from 'lucide-react';

interface ConciergeSectionProps {
  onOpenInquiry: () => void;
  onOpenInquiryWithExperience?: (expTitle: string) => void;
}

export function ConciergeSection({ onOpenInquiry, onOpenInquiryWithExperience }: ConciergeSectionProps) {
  const experiences = [
    {
      id: 'chef',
      icon: Utensils,
      title: 'In-Villa Master Chef & Mixology',
      subtitle: 'Artisanal dining tailored to your palate',
      description: 'Custom multi-course dining prepared daily in the villa kitchen using fresh local ingredients, paired with fine wines and artisanal cocktails.',
      highlights: ['Custom Multi-Course Dinners', 'Artisanal Cocktail Bar', 'Organic Antioquian Ingredients'],
    },
    {
      id: 'helicopter',
      icon: Plane,
      title: 'Private Helicopter Charters',
      subtitle: 'VIP transfers & Guatapé aerial flights',
      description: 'Direct helipad transfers from MDE airport or scenic aerial flights over El Peñol rock and the coffee mountains of Antioquia.',
      highlights: ['6-Min Airport Transfers', 'Guatapé Rock Overflight', '24/7 VIP Aviation Handling'],
    },
    {
      id: 'coffee',
      icon: Coffee,
      title: 'Coffee Plantation Masterclass',
      subtitle: 'Single-origin tasting with master roasters',
      description: 'Private visit to a working coffee finca in the surrounding mountains with master roasters and single-origin tastings.',
      highlights: ['Private Finca Tour', 'Master Roaster Tasting', 'Take-Home Custom Roast'],
    },
    {
      id: 'city',
      icon: MapPin,
      title: 'Medellín Curated VIP City Exploration',
      subtitle: 'Comuna 13 street art, fine dining & VIP nightlife',
      description: 'Private guided tours of Comuna 13 street art, Botero Plaza, top fine dining spots (El Cielo, Oci.Mde), and VIP nightlife.',
      highlights: ['Private SUV & Security Detail', 'Reservation at Top Restaurants', 'Comuna 13 VIP Tour'],
    },
  ];

  const handleSelectExp = (expTitle: string) => {
    if (onOpenInquiryWithExperience) {
      onOpenInquiryWithExperience(expTitle);
    } else {
      onOpenInquiry();
    }
  };

  return (
    <section id="concierge" className="relative bg-ink-900 px-6 py-24 lg:px-12 border-b border-ink-700/60">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left copy */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-champagne-400/40 bg-champagne-500/10 px-4 py-1.5 text-xs text-champagne-300 font-medium">
              <Sparkles className="h-3.5 w-3.5 text-champagne-400" />
              <span>Tailored Bespoke Experiences</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl font-light text-ivory-50">
              Private Concierge Services
            </h2>

            <p className="font-serif text-lg font-light italic text-stone-300">
              Your stay at Finca Libia is backed by an attentive team dedicated to fulfilling every wish, from arrival to departure.
            </p>

            <p className="text-sm leading-relaxed text-stone-400 font-light">
              Whether arranging airport fast-track arrival, scheduling private masseuses by the pool, or curating bespoke itineraries across Medellín, our private concierge handles every detail seamlessly.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenInquiry}
                className="no-tap-highlight group inline-flex items-center gap-3 rounded-full bg-champagne-500/90 px-7 py-3.5 text-xs font-medium uppercase tracking-widest-2 text-ink-900 shadow-xl transition-all duration-300 hover:bg-champagne-300 hover:scale-105"
              >
                <span>Request Custom Itinerary</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right interactive experience cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {experiences.map((exp) => {
              const Icon = exp.icon;
              return (
                <div
                  key={exp.id}
                  className="group flex flex-col justify-between rounded-3xl border border-ink-700/60 bg-ink-800/40 p-6 backdrop-blur-sm transition-all duration-500 hover:border-champagne-500/40 hover:bg-ink-800/80 hover:shadow-2xl hover:-translate-y-1"
                >
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-champagne-500/10 text-champagne-400 border border-champagne-500/20 group-hover:bg-champagne-500 group-hover:text-ink-900 transition-colors">
                      <Icon className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                    <h3 className="mt-4 font-serif text-xl font-light text-ivory-100 group-hover:text-champagne-300 transition-colors">
                      {exp.title}
                    </h3>
                    <p className="mt-1 text-[11px] font-serif italic text-stone-400">
                      {exp.subtitle}
                    </p>
                    <p className="mt-3 text-xs leading-relaxed text-stone-300 font-light">
                      {exp.description}
                    </p>

                    <div className="mt-4 space-y-1.5 pt-3 border-t border-ink-700/60">
                      {exp.highlights.map((h, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-[11px] text-stone-300 font-light">
                          <Check className="h-3 w-3 text-champagne-400 shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-ink-700/60">
                    <button
                      onClick={() => handleSelectExp(exp.title)}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-champagne-400/40 bg-ink-900/60 py-2.5 text-[11px] uppercase tracking-wider text-champagne-300 hover:bg-champagne-500 hover:text-ink-900 transition-all font-medium"
                    >
                      <span>Add to Inquiry</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
