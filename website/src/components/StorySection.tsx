export function StorySection() {
  return (
    <section id="story" className="relative bg-[#F4F0E9] text-[#121212] py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-16 lg:px-24">
        {/* Asymmetric Section Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-stone-600 font-medium mb-3">
            Countryside Architecture
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#121212] leading-[1.1]">
            About Finca Libia
          </h2>
        </div>

        {/* 60/40 Asymmetric Split: Image bleeding off left edge / Text on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left 60% Image Bleed */}
          <div className="lg:col-span-7 relative -ml-6 md:-ml-16 lg:-ml-24">
            <div className="relative h-[450px] sm:h-[550px] lg:h-[620px] w-full overflow-hidden shadow-2xl">
              <img
                src="/photos/exterior/exterior_01.jpeg"
                alt="Finca Libia Architecture & Grounds"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Right 40% Text Copy & Pull Quote */}
          <div className="lg:col-span-5 space-y-8 pr-2">
            {/* Single Elegant Italic Pull Quote per Section */}
            <blockquote className="font-serif text-2xl sm:text-3xl font-light italic text-[#2c2a26] leading-snug border-l-2 border-stone-400 pl-6 my-2">
              "Designed with exquisite attention to detail, this newly built farmhouse redefines countryside elegance."
            </blockquote>

            {/* Roman Body Text */}
            <div className="space-y-5 text-sm sm:text-base leading-relaxed text-stone-700 font-sans font-light">
              <p>
                Spread across 3.5 acres of private mountain grounds, Finca Libia was built for social living and complete seclusion. Just a 25-minute drive from Medellín, the estate offers the perfect balance of countryside privacy, architectural sophistication, and 5-star service.
              </p>
              <p>
                From the heated pool overlooking the valley to the private Finnish cedar sauna, cold plunge, and cleaning and groundskeeping services—every space is curated to provide an effortless luxury retreat.
              </p>
            </div>

            {/* Feature Bullet Summary */}
            <div className="pt-4 border-t border-stone-300/80 grid grid-cols-2 gap-4 text-xs font-mono text-stone-600">
              <div>
                <span className="block text-stone-900 font-bold uppercase tracking-wider">Property</span>
                <span>3.5 Private Acres</span>
              </div>
              <div>
                <span className="block text-stone-900 font-bold uppercase tracking-wider">Transfer</span>
                <span>25 Min to Medellín</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
