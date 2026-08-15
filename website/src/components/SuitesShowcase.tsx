import { useState } from 'react';
import { Bed, Users, Check, Eye, ChevronLeft, ChevronRight } from 'lucide-react';
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

  const currentDisplayedImage = activeSuite.gallery && activeSuite.gallery[activeImageIndex]
    ? activeSuite.gallery[activeImageIndex]
    : activeSuite.image;

  return (
    <section id="suites" className="relative bg-ink-900 px-6 py-24 lg:px-12 border-b border-ink-700/60">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest-3 text-champagne-400 font-medium">
            Accommodations
          </p>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-ivory-50">
            6 Private Master Suites
          </h2>
          <p className="mt-4 font-serif text-lg font-light italic text-stone-300">
            Designed for uncompromised privacy, rest, and panoramic mountain views. Every suite features organic linens, private ensuite bathroom, and direct outdoor access.
          </p>
        </div>

        {/* Suite Tabs Selector */}
        <div className="mt-12 flex flex-wrap justify-center gap-2 border-b border-ink-700 pb-4">
          {suites.map((suite) => {
            const isSelected = suite.id === selectedSuiteId;
            return (
              <button
                key={suite.id}
                onClick={() => handleSelectSuite(suite.id)}
                className={`no-tap-highlight px-5 py-2.5 text-xs font-medium uppercase tracking-wider transition-all duration-300 ${
                  isSelected
                    ? 'bg-champagne-500 text-ink-900 shadow-lg'
                    : 'bg-ink-800/60 text-ivory-200 hover:bg-ink-700/60 hover:text-ivory-50'
                }`}
              >
                {suite.name}
              </button>
            );
          })}
        </div>

        {/* Active Suite Display Card */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-ink-800/40 border border-ink-700/60 p-6 sm:p-10 backdrop-blur-sm shadow-2xl">
          {/* Image & Photo Gallery preview */}
          <div className="lg:col-span-7 space-y-4">
            <div
              onClick={() => onInspectSuite && onInspectSuite(activeSuite)}
              className="relative h-[380px] sm:h-[450px] w-full overflow-hidden group cursor-pointer border border-ink-700/60"
            >
              <img
                src={currentDisplayedImage}
                alt={activeSuite.name}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/90 via-transparent to-transparent pointer-events-none" />
              
              {/* Left Arrow Button */}
              <button
                onClick={handlePrevPhoto}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2.5 bg-ink-900/80 text-ivory-100 border border-ink-700 backdrop-blur-md transition-all hover:bg-champagne-500 hover:text-ink-900 hover:scale-110 active:scale-95 shadow-xl"
                aria-label="Previous photo"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              {/* Right Arrow Button */}
              <button
                onClick={handleNextPhoto}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2.5 bg-ink-900/80 text-ivory-100 border border-ink-700 backdrop-blur-md transition-all hover:bg-champagne-500 hover:text-ink-900 hover:scale-110 active:scale-95 shadow-xl"
                aria-label="Next photo"
              >
                <ChevronRight className="h-5 w-5" />
              </button>



              {/* Counter & Capacity Badge */}
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end pointer-events-none">
                <span className="bg-ink-900/80 px-4 py-1.5 text-xs text-champagne-300 border border-ink-700 backdrop-blur-md font-medium">
                  {activeSuite.capacity}
                </span>

                <span className="bg-ink-900/80 px-3 py-1 text-xs font-mono text-stone-300 border border-ink-700 backdrop-blur-md">
                  {activeImageIndex + 1} / {activeSuite.gallery.length}
                </span>
              </div>
            </div>

            {/* Thumbnail Strip */}
            <div className="grid grid-cols-3 gap-3">
              {activeSuite.gallery.slice(0, 3).map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`h-24 overflow-hidden border cursor-pointer group transition-all ${
                    idx === activeImageIndex
                      ? 'border-champagne-400 opacity-100'
                      : 'border-ink-700/50 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-300" />
                </div>
              ))}
            </div>
          </div>

          {/* Details & Specs */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
            <div>
              <p className="text-xs uppercase tracking-widest-3 text-champagne-400 font-medium">
                {activeSuite.bed}
              </p>
              <h3 className="mt-2 font-serif text-3xl sm:text-4xl font-light text-ivory-50">
                {activeSuite.name}
              </h3>
              <p className="mt-2 font-serif text-lg font-light italic text-champagne-300/90">
                {activeSuite.subtitle}
              </p>
              <p className="mt-5 text-sm sm:text-base leading-relaxed text-stone-300 font-light">
                {activeSuite.description}
              </p>
            </div>

            {/* Key Spec Badges */}
            <div className="grid grid-cols-2 gap-4 py-4 border-y border-ink-700/60">
              <div className="flex items-center gap-3 text-stone-300">
                <Bed className="h-4 w-4 text-champagne-400" />
                <span className="text-xs">{activeSuite.bed}</span>
              </div>
              <div className="flex items-center gap-3 text-stone-300">
                <Users className="h-4 w-4 text-champagne-400" />
                <span className="text-xs">{activeSuite.capacity}</span>
              </div>
            </div>

            {/* Highlights Checkmarks */}
            <div>
              <p className="text-xs uppercase tracking-widest-2 text-stone-400 font-medium mb-3">
                Suite Highlights
              </p>
              <div className="grid grid-cols-2 gap-2">
                {activeSuite.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-ivory-100">
                    <Check className="h-3.5 w-3.5 text-champagne-400 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onInspectSuite && onInspectSuite(activeSuite)}
                className="no-tap-highlight group inline-flex items-center gap-2 border border-champagne-400/50 bg-ink-900/60 px-5 py-3 text-xs font-medium uppercase tracking-wider text-ivory-100 backdrop-blur-md transition-all hover:border-champagne-400 hover:text-champagne-300"
              >
                <Eye className="h-4 w-4 text-champagne-400" />
                <span>Full Suite Specs</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
