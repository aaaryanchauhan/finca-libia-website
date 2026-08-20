import { ChefHat, Sparkles, Sun, Music, PartyPopper, Dumbbell, ArrowRight } from 'lucide-react';

interface ServicesOnRequestSectionProps {
  onOpenInquiry?: () => void;
}

export function ServicesOnRequestSection({ onOpenInquiry }: ServicesOnRequestSectionProps) {
  const services = [
    {
      id: 'personal-chef',
      title: 'Personal Chef',
      icon: ChefHat,
      description: 'Private in-villa culinary dining, multi-course tasting menus, and custom dietary preparation.',
      tag: 'Gourmet Dining',
      number: '01',
    },
    {
      id: 'massage',
      title: 'Massage & Spa',
      icon: Sparkles,
      description: 'Poolside deep-tissue massages, restorative bodywork, and aromatherapy spa treatments.',
      tag: 'Wellness & Spa',
      number: '02',
    },
    {
      id: 'yoga-instructor',
      title: 'Yoga Instructor',
      icon: Sun,
      description: 'Private sunrise yoga, breathwork, and guided meditation sessions on the outdoor deck.',
      tag: 'Mind & Body',
      number: '03',
    },
    {
      id: 'private-dj',
      title: 'Private DJ',
      icon: Music,
      description: 'Live DJ performances and curated soundscapes for sunset poolside gatherings and lounge evenings.',
      tag: 'Entertainment',
      number: '04',
    },
    {
      id: 'party-planner',
      title: 'Party Planner',
      icon: PartyPopper,
      description: 'Complete event coordination, bespoke decor, milestone celebrations, and private styling.',
      tag: 'Event Styling',
      number: '05',
    },
    {
      id: 'personal-trainer',
      title: 'Personal Trainer',
      icon: Dumbbell,
      description: 'One-on-one fitness training, athletic conditioning, and HIIT sessions in the estate gym.',
      tag: 'Fitness',
      number: '06',
    },
  ];

  return (
    <section id="available-services" className="relative bg-ink-950 px-6 md:px-16 lg:px-24 py-28 border-b border-ivory-200/10 overflow-hidden">
      {/* Subtle ambient lighting accent */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-champagne-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-champagne-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 pb-8 border-b border-ivory-200/10">
          <div className="max-w-2xl">
            <span className="text-[11px] uppercase tracking-[0.3em] text-champagne-400 font-mono font-medium mb-3 block">
              Bespoke Experiences
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-ivory-50 leading-tight">
              Available Services
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base font-light text-stone-300 max-w-md leading-relaxed">
            Elevate your stay at Finca Libia. These private professional services are available upon request to tailor your retreat.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative flex flex-col justify-between border border-ivory-200/10 bg-[#1c1a17]/60 hover:bg-[#23201c] p-8 lg:p-9 transition-all duration-500 hover:border-champagne-400/40 shadow-2xl overflow-hidden"
              >
                {/* Top Glowing Accent Line on Hover */}
                <div className="absolute top-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-champagne-400/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div>
                  {/* Top Row: Index Number & Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-serif text-3xl font-extralight text-champagne-400/40 group-hover:text-champagne-400/80 transition-colors duration-500">
                      {service.number}
                    </span>
                    <div className="w-11 h-11 flex items-center justify-center border border-ivory-200/15 bg-ink-950/80 text-champagne-300 group-hover:border-champagne-400/50 group-hover:bg-champagne-500/10 transition-all duration-500">
                      <Icon className="h-5 w-5 stroke-[1.5]" />
                    </div>
                  </div>

                  {/* Service Tag */}
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-stone-400 group-hover:text-champagne-300 font-sans transition-colors block font-medium mb-2">
                    {service.tag}
                  </span>

                  {/* Title */}
                  <h3 className="font-serif text-2xl sm:text-3xl font-light text-ivory-50 group-hover:text-ivory-100 transition-colors mb-4">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed font-sans mb-8">
                    {service.description}
                  </p>
                </div>

                {/* Footer Tag line (No Inquire Button) */}
                <div className="pt-4 border-t border-ivory-200/10 flex items-center justify-between text-xs text-stone-400 font-mono text-[11px] tracking-wider">
                  <span>ON REQUEST</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-champagne-400/40 group-hover:bg-champagne-400 transition-colors" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        {onOpenInquiry && (
          <div className="mt-16 flex justify-center">
            <button
              onClick={onOpenInquiry}
              className="group relative inline-flex items-center gap-3 border border-champagne-500/30 bg-ink-900 hover:bg-ink-800 hover:border-champagne-400 px-9 py-4 text-xs font-medium uppercase tracking-[0.25em] text-ivory-50 transition-all duration-300 cursor-pointer shadow-2xl"
            >
              <span>Book Now</span>
              <ArrowRight className="h-4 w-4 text-champagne-400 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

