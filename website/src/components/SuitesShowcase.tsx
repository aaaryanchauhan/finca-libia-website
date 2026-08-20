import { useState } from 'react';
import { ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { suites } from '../data/villaData';
import type { Suite } from '../data/villaData';

interface SuitesShowcaseProps {
  onInspectSuite?: (suite: Suite) => void;
}

export function SuitesShowcase({ onInspectSuite }: SuitesShowcaseProps) {
  const [selectedSuiteId, setSelectedSuiteId] = useState(suites[0].id);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const activeSuiteIndex = suites.findIndex((s) => s.id === selectedSuiteId);
  const activeSuite = suites[activeSuiteIndex] || suites[0];

  const handleSelectSuite = (id: string) => {
    setSelectedSuiteId(id);
    setActiveImageIndex(0);
  };

  const handlePrevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeSuite.gallery && activeSuite.gallery.length > 0) {
      setActiveImageIndex((prev) => (prev - 1 + activeSuite.gallery.length) % activeSuite.gallery.length);
    }
  };

  const handleNextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeSuite.gallery && activeSuite.gallery.length > 0) {
      setActiveImageIndex((prev) => (prev + 1) % activeSuite.gallery.length);
    }
  };

  const currentDisplayedImage =
    activeSuite.gallery && activeSuite.gallery[activeImageIndex]
      ? activeSuite.gallery[activeImageIndex]
      : activeSuite.image;

  return (
    <section id="suites" className="relative bg-ink-950 px-6 md:px-16 lg:px-24 py-28 border-b border-ivory-200/10">
      <div className="mx-auto max-w-7xl">
        {/* Asymmetric Section Header (Left Aligned) */}
        <div className="max-w-2xl mb-14">
          <p className="text-xs uppercase tracking-[0.25em] text-[#E8E2D6]/70 font-medium mb-3">
            Accommodations
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-ivory-50 leading-tight">
            6 Private Master Suites
          </h2>
          <p className="mt-4 font-sans text-sm sm:text-base font-light text-stone-300 leading-relaxed">
            Designed for uncompromised privacy, rest, and panoramic mountain views. Every suite features organic linens, private ensuite bathroom, and direct outdoor access.
          </p>
        </div>

        {/* Horizontal Filmstrip Suite Navigation */}
        <div className="mb-14 border-b border-ivory-200/10 pb-6">
          <div className="flex items-center gap-4 overflow-x-auto overflow-y-hidden no-scrollbar pb-2 snap-x">
            {suites.map((suite) => {
              const isSelected = suite.id === selectedSuiteId;
              return (
                <button
                  key={suite.id}
                  onClick={() => handleSelectSuite(suite.id)}
                  className="group relative flex-none w-36 sm:w-44 text-left transition-all cursor-pointer snap-start"
                >
                  {/* Thumbnail Image */}
                  <div className={`h-24 sm:h-28 w-full overflow-hidden border transition-all duration-300 ${
                    isSelected ? 'border-[#E8E2D6] opacity-100' : 'border-ivory-200/20 opacity-60 group-hover:opacity-100'
                  }`}>
                    <img
                      src={suite.image}
                      alt={suite.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Suite Short Title */}
                  <span className={`block mt-2 text-xs font-serif tracking-wide truncate transition-colors ${
                    isSelected ? 'text-ivory-50 font-medium' : 'text-stone-400 group-hover:text-ivory-200'
                  }`}>
                    {suite.pdfName || suite.name}
                  </span>

                  {/* Active State Hairline Underline */}
                  <span
                    className={`absolute -bottom-6 left-0 h-[2px] bg-champagne-400 transition-all duration-300 ${
                      isSelected ? 'w-full' : 'w-0 group-hover:w-1/2'
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Suite Display Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-ink-900/60 border border-ivory-200/10 p-6 sm:p-10 shadow-2xl">
          {/* Main Photo Carousel Preview */}
          <div className="lg:col-span-7 space-y-4">
            <div
              onClick={() => onInspectSuite && onInspectSuite(activeSuite)}
              className="relative h-[380px] sm:h-[460px] w-full overflow-hidden group cursor-pointer border border-ivory-200/10"
            >
              <img
                src={currentDisplayedImage}
                alt={activeSuite.name}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent pointer-events-none" />

              {/* Prev / Next Arrows */}
              <button
                onClick={handlePrevPhoto}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2.5 bg-ink-950/80 text-ivory-100 border border-ivory-200/20 backdrop-blur-md transition-all hover:bg-ink-800 hover:text-ivory-50 cursor-pointer"
                aria-label="Previous photo"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={handleNextPhoto}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2.5 bg-ink-950/80 text-ivory-100 border border-ivory-200/20 backdrop-blur-md transition-all hover:bg-ink-800 hover:text-ivory-50 cursor-pointer"
                aria-label="Next photo"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              {/* Specs Badge */}
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end pointer-events-none">
                <span className="bg-ink-950/80 px-4 py-1.5 text-xs text-[#E8E2D6] border border-ivory-200/20 font-medium">
                  {activeSuite.capacity}
                </span>

                <span className="bg-ink-950/80 px-3 py-1 text-xs font-mono text-stone-400 border border-ivory-200/20">
                  {activeImageIndex + 1} / {activeSuite.gallery?.length || 1}
                </span>
              </div>
            </div>
          </div>

          {/* Details & Specifications */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#E8E2D6]/70 font-medium">
                {activeSuite.bed}
              </p>
              <h3 className="mt-2 font-serif text-3xl sm:text-4xl font-light text-ivory-50">
                {activeSuite.name}
              </h3>
              <p className="mt-2 font-sans text-sm font-light text-[#E8E2D6]/90">
                {activeSuite.subtitle}
              </p>
              <p className="mt-5 text-sm leading-relaxed text-stone-300 font-light">
                {activeSuite.description}
              </p>
            </div>

            {/* Suite Highlights (Hairline Rules) */}
            {activeSuite.highlights && activeSuite.highlights.length > 0 && (
              <div className="py-4 border-y border-ivory-200/10 space-y-2">
                <p className="text-xs uppercase tracking-[0.2em] text-stone-400 font-medium mb-3">
                  Key Features
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs text-ivory-200">
                  {activeSuite.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="h-1 w-1 bg-[#E8E2D6] rounded-full" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Action CTA */}
            <div className="pt-2">
              <button
                onClick={() => onInspectSuite && onInspectSuite(activeSuite)}
                className="no-tap-highlight inline-flex items-center gap-2 border border-ivory-200/30 bg-ink-900 hover:bg-ink-800 px-6 py-3.5 text-xs font-medium uppercase tracking-[0.18em] text-ivory-100 transition-all cursor-pointer"
              >
                <Eye className="h-4 w-4 text-[#E8E2D6]" />
                <span>Full Suite Specs</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
