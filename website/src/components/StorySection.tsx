import { Sparkles, Home, Key, Heart } from 'lucide-react';

export function StorySection() {
  const sections = [
    {
      icon: Sparkles,
      tag: 'Overview',
      title: 'About this space',
      text: 'Escape to Finca Libia, a luxury estate unlike any other. Designed with exquisite attention to detail, this newly built farmhouse redefines countryside elegance. From sunrise over the mountains to evenings under the stars, every moment here feels magical. Just a short 25-minute drive from Medellín, Finca Libia offers the perfect balance of seclusion, sophistication, and indulgence — the ultimate getaway for those who expect nothing less than extraordinary.',
      image: '/photos/exterior/exterior_10.jpeg',
    },
    {
      icon: Home,
      tag: '3.5 Acres',
      title: 'The space',
      text: 'Spread across 3.5 acres of beautiful land, this home was built for making memories. Designed with social living in mind, it’s a place to gather, laugh, and celebrate life. With every amenity you could ask for — and even a charming guest house for friends and family — it’s the perfect setting for unforgettable moments.',
      image: '/photos/living_room/living_room_02.jpeg',
    },
    {
      icon: Key,
      tag: 'Full Access',
      title: 'Guest access',
      text: 'Your stay at Finca Libia includes full access to all its incredible amenities — everything you need for comfort, fun, and connection. Take a dip in the heated pool, relax in the hot tub, or enjoy the sauna and steam rooms. Challenge friends to a game of tennis, pickleball, or basketball, or spend the evening in the bowling alley, arcade, or around the bar — there’s something for everyone to enjoy.',
      image: '/photos/pool/pool_01.jpeg',
    },
    {
      icon: Heart,
      tag: 'Country Living',
      title: 'Other things to note',
      text: 'Part of Finca Libia’s magic lies in its authentic farmhouse experience. The property is home to several animals who roam freely, adding warmth and life to the landscape. Our dogs, always off-leash and irresistibly affectionate, may greet you with extra enthusiasm. It’s all part of the charm of staying at a place where luxury meets the natural rhythm of country living.',
      image: '/photos/patio/patio_08.jpeg',
    },
  ];

  return (
    <section id="story" className="relative bg-ink-900 px-6 py-24 lg:px-12 border-b border-ink-700/60">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest-3 text-champagne-400 font-medium">
            Countryside Elegance
          </p>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-ivory-50">
            About Finca Libia
          </h2>
          <p className="mt-4 font-serif text-lg font-light italic text-stone-300">
            A newly built luxury farmhouse redefining country living just 25 minutes from Medellín.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group flex flex-col sm:flex-row gap-6 items-start border border-ink-700/60 bg-ink-800/40 p-6 backdrop-blur-sm transition-all duration-500 hover:border-champagne-500/40 hover:bg-ink-800/80 shadow-xl"
              >
                <div className="relative h-48 w-full sm:w-44 shrink-0 overflow-hidden border border-ink-700/50">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest-2 text-champagne-400 font-medium">
                    <Icon className="h-3.5 w-3.5" />
                    <span>{item.tag}</span>
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
