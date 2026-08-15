import { Waves, Dumbbell, Key } from 'lucide-react';

export function PropertyHighlightsSection() {
  const highlights = [
    {
      icon: Waves,
      title: 'Enjoy the pool and hot tub',
      description: 'Swim or soak at this home.',
    },
    {
      icon: Dumbbell,
      title: 'Home gym',
      description: 'The treadmill, stationary bike, yoga mat and free weights are ready for workouts.',
    },
    {
      icon: Key,
      title: 'Exceptional check-in experience',
      description: 'Recent guests gave the check-in process a 5-star rating.',
    },
  ];

  return (
    <section id="highlights" className="relative bg-ink-900 px-6 py-16 lg:px-12 border-b border-ink-700/60">
      <div className="mx-auto max-w-4xl">
        <div className="border border-ink-700/80 bg-ink-800/40 p-8 sm:p-10 backdrop-blur-sm shadow-xl space-y-8">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-start gap-5">
                <div className="flex h-12 w-12 items-center justify-center bg-champagne-500/10 text-champagne-400 border border-champagne-500/20 shrink-0">
                  <Icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-light text-ivory-50">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
                    {item.description}
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
