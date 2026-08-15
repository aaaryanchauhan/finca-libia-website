import { ShieldCheck, Bed, Waves, Flame, Award, Plane } from 'lucide-react';

export function StatsBar() {
  const stats = [
    { icon: ShieldCheck, label: '100% Exclusive', detail: '12 Private Mountain Acres' },
    { icon: Bed, label: '6 Master Suites', detail: 'Accommodates Up to 14 Guests' },
    { icon: Waves, label: '25m Infinity Pool', detail: 'Heated 28°C Saltwater System' },
    { icon: Flame, label: 'Wellness Spa', detail: 'Finnish Cedar Sauna & Plunge' },
    { icon: Award, label: 'Private Staff', detail: '24/7 Butler, Chef & Concierge' },
    { icon: Plane, label: '45 Min to MDE', detail: 'Helipad & Private Airport SUV' },
  ];

  return (
    <section id="estate" className="relative z-30 border-y border-ink-700/80 bg-ink-800/80 py-10 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center text-center group p-3 rounded-xl transition-all duration-300 hover:bg-ink-700/40"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-champagne-500/10 text-champagne-400 border border-champagne-500/20 group-hover:bg-champagne-500 group-hover:text-ink-900 transition-all duration-300">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <h3 className="mt-3 font-serif text-lg font-medium text-ivory-100 group-hover:text-champagne-300 transition-colors">
                  {stat.label}
                </h3>
                <p className="mt-1 text-[11px] text-stone-400 font-light">
                  {stat.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
