import { UtensilsCrossed, Sparkles, Sun, Headphones, PartyPopper, Dumbbell } from 'lucide-react';

export function ServicesOnRequestSection() {
  const services = [
    {
      number: '01',
      title: 'Personal Chef',
      tagline: 'Gourmet Dining & Tailored Menus',
      description: 'Private executive chefs preparing farm-to-table breakfast, al-fresco lunches, and multi-course candlelit dinners on the estate.',
      icon: UtensilsCrossed,
    },
    {
      number: '02',
      title: 'Massage & Spa',
      tagline: 'Poolside & Suite Spa Therapy',
      description: 'Licensed massage therapists offering deep tissue, aromatherapy, and hot stone treatments in your suite or poolside deck.',
      icon: Sparkles,
    },
    {
      number: '03',
      title: 'Yoga Instructor',
      tagline: 'Sunrise & Mountain Flow',
      description: 'Private yoga and mindfulness sessions tailored to all levels on the outdoor deck overlooking the Medellín valley.',
      icon: Sun,
    },
    {
      number: '04',
      title: 'Private DJ',
      tagline: 'Bespoke Sound & Curation',
      description: 'Top Medellín event DJs and high-fidelity outdoor audio setups for private terrace celebrations and sunset cocktails.',
      icon: Headphones,
    },
    {
      number: '05',
      title: 'Party Planner',
      tagline: 'Event & Celebration Styling',
      description: 'Full event design, floral styling, lighting, and coordination for birthdays, anniversaries, and private corporate retreats.',
      icon: PartyPopper,
    },
    {
      number: '06',
      title: 'Personal Trainer',
      tagline: 'Fitness & Athletic Coaching',
      description: 'One-on-one fitness training, HIIT sessions, and athletic coaching utilizing the fully equipped estate fitness gym.',
      icon: Dumbbell,
    },
  ];

  return (
    <section id="services" className="relative bg-[#F4F0E9] text-[#121212] px-6 md:px-16 lg:px-24 py-28 border-b border-stone-300/40">
      <div className="mx-auto max-w-7xl">
        {/* Header Stack */}
        <div className="max-w-2xl mb-16 pb-8 border-b border-stone-300/60">
          <p className="text-xs uppercase tracking-[0.25em] text-stone-600 font-medium mb-3">
            Curated Experiences
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#121212] leading-tight">
            Available Services
          </h2>
          <p className="mt-4 font-sans text-xs sm:text-sm font-light text-stone-600 leading-relaxed">
            Custom services available to elevate your stay. Arranged prior to arrival or via your dedicated estate manager.
          </p>
        </div>

        {/* Chic Light Hairline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.number}
                className="group relative flex flex-col justify-between border border-stone-300/70 bg-white/70 p-8 sm:p-10 transition-all duration-500 hover:border-stone-400 hover:bg-white hover:shadow-2xl"
              >
                <div>
                  {/* Top Bar: Number & Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-serif text-3xl sm:text-4xl font-light text-stone-400 group-hover:text-stone-800 transition-colors">
                      {service.number}
                    </span>
                    <div className="p-3 border border-stone-300 bg-white text-[#121212] shadow-sm transition-all">
                      <Icon className="h-4 w-4 text-[#121212]" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-serif text-2xl font-light text-[#121212] transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-1.5 font-mono text-[11px] uppercase tracking-wider text-stone-500">
                    {service.tagline}
                  </p>

                  {/* Description */}
                  <p className="mt-4 text-xs font-light text-stone-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
