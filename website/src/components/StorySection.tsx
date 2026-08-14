import { Clock, Compass, Palette, Users } from 'lucide-react';

export function StorySection() {
  const storyItems = [
    {
      icon: Clock,
      year: '1928',
      title: 'A Century in the Valley',
      text: 'Built in 1928 as a coffee plantation estate. The original hand-cut stone walls still stand today, harvested from the mountain slopes behind the villa.',
      image: '/photos/exterior/exterior_03.jpeg',
    },
    {
      icon: Compass,
      year: 'Architecture',
      title: 'Built Into the Landscape',
      text: 'Designed to blend seamlessly into the surrounding coffee mountain range. Native cedar, hand-burnt terracotta, and floor-to-ceiling glass dissolve boundaries between indoor luxury and nature.',
      image: '/photos/living_room/living_room_04.jpeg',
    },
    {
      icon: Palette,
      year: 'Interiors',
      title: 'Quiet Luxury & Colombian Art',
      text: 'Curated by top local interior architects using organic linen, natural travertine, and bronze accents. Features original paintings and sculptures by renowned Medellín artists.',
      image: '/photos/living_room/living_room_02.jpeg',
    },
    {
      icon: Users,
      year: 'Hospitality',
      title: 'Generations of Care',
      text: 'Managed by the original family and a dedicated estate team from the neighboring village. Authentic warmth, discretion, and intuitive hospitality.',
      image: '/photos/patio/patio_08.jpeg',
    },
  ];

  return (
    <section id="story" className="relative bg-ink-900 px-6 py-24 lg:px-12 border-b border-ink-700/60">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest-3 text-champagne-400 font-medium">
            Heritage & Design
          </p>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-ivory-50">
            The Story of Finca Libia
          </h2>
          <p className="mt-4 font-serif text-lg font-light italic text-stone-300">
            From a 1928 Antioquian coffee estate to a world-class private architectural retreat.
          </p>
        </div>

        {/* Timeline Story Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
          {storyItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group flex flex-col md:flex-row gap-6 items-center rounded-3xl border border-ink-700/60 bg-ink-800/30 p-6 backdrop-blur-sm transition-all duration-500 hover:border-champagne-500/40 hover:bg-ink-800/70"
              >
                <div className="relative h-48 w-full md:w-48 shrink-0 overflow-hidden rounded-2xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest-2 text-champagne-400 font-medium">
                    <Icon className="h-3.5 w-3.5" />
                    <span>{item.year}</span>
                  </div>
                  <h3 className="mt-2 font-serif text-2xl font-light text-ivory-50 group-hover:text-champagne-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-stone-300 font-light">
                    {item.text}
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
