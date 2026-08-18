export function StatsBar() {
  const stats = [
    { value: '3.5 Acres', label: 'Private Mountain Grounds' },
    { value: '6 Suites', label: 'Master Suites' },
    { value: '14 Guests', label: 'Maximum Capacity' },
    { value: '25 Min', label: 'From Medellín (MDE)' },
  ];

  return (
    <section id="estate" className="relative z-30 border-y border-ivory-200/10 bg-ink-950 py-12">
      <div className="mx-auto max-w-7xl px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-ivory-200/10">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col ${idx !== 0 ? 'pt-6 md:pt-0' : ''} ${
                idx !== 0 ? 'md:pl-8 lg:pl-12' : ''
              } ${idx !== stats.length - 1 ? 'pb-6 md:pb-0 md:pr-8 lg:pr-12' : ''}`}
            >
              <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-ivory-50 tracking-tight">
                {stat.value}
              </span>
              <span className="mt-2 text-xs uppercase tracking-[0.2em] text-[#E8E2D6]/70 font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
