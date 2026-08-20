export function LocationSection() {
  return (
    <section id="location" className="relative bg-ink-950 px-6 md:px-16 lg:px-24 py-28 border-b border-ivory-200/10">
      <div className="mx-auto max-w-7xl">
        {/* Asymmetric Section Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs uppercase tracking-[0.25em] text-[#E8E2D6]/70 font-medium mb-3">
            Location & Access
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-ivory-50 leading-tight">
            Where You'll Be
          </h2>
          <p className="mt-4 font-sans text-sm sm:text-base text-stone-300 font-light leading-relaxed">
            Guarne, Antioquia, Colombia · 6 Minutes from MDE Airport · 25 Minutes from Medellín
          </p>
        </div>

        {/* Estate Photo Collage Container */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-4 border border-ivory-200/15 bg-ink-950 p-2 shadow-2xl">
          {/* Main Large Photo (Left 7 Cols) */}
          <div className="lg:col-span-7 relative h-[340px] sm:h-[480px] overflow-hidden group">
            <img
              src="/photos/exterior/exterior_16.jpeg"
              alt="Finca Libia Estate Architecture"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/40 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Right Column Stack (5 Cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {/* Top Right Photo */}
            <div className="relative h-[220px] sm:h-[232px] overflow-hidden group">
              <img
                src="/photos/pool/pool_01.jpeg"
                alt="25m Heated Pool & Mountain View"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Bottom Right Photo */}
            <div className="relative h-[220px] sm:h-[232px] overflow-hidden group">
              <img
                src="/photos/courtyard/courtyard_01.jpeg"
                alt="Courtyard Sanctuary"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Location Badge Overlay */}
          <div className="absolute top-4 left-4 bg-ink-950/90 border border-ivory-200/20 p-2.5 px-4 backdrop-blur-md shadow-xl text-xs text-stone-300 z-10">
            <span>Location: <strong className="text-ivory-100">Guarne, Antioquia, Colombia</strong></span>
          </div>
        </div>

        {/* Key Proximities Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="border border-ivory-200/10 bg-ink-900/60 p-6">
            <span className="text-xs uppercase tracking-[0.2em] text-stone-400 font-mono">Airport Access</span>
            <h3 className="mt-2 font-serif text-xl font-light text-ivory-50">MDE International</h3>
            <p className="mt-1 text-xs text-stone-300 font-light">6 Mins from MDE Airport</p>
          </div>

          <div className="border border-ivory-200/10 bg-ink-900/60 p-6">
            <span className="text-xs uppercase tracking-[0.2em] text-stone-400 font-mono">Metropolis</span>
            <h3 className="mt-2 font-serif text-xl font-light text-ivory-50">Medellín City</h3>
            <p className="mt-1 text-xs text-stone-300 font-light">25–30 Mins to El Poblado & Provenza</p>
          </div>

          <div className="border border-ivory-200/10 bg-ink-900/60 p-6">
            <span className="text-xs uppercase tracking-[0.2em] text-stone-400 font-mono">Excursions</span>
            <h3 className="mt-2 font-serif text-xl font-light text-ivory-50">Guatapé & El Peñol</h3>
            <p className="mt-1 text-xs text-stone-300 font-light">45 Mins Scenic Country Drive</p>
          </div>
        </div>
      </div>
    </section>
  );
}
