import { useState, useEffect } from 'react';
import { ChevronRight, ArrowRight, ArrowLeft, MapPin, Clock, Lightbulb, X, Bed, Users, Sparkles } from 'lucide-react';
import { amenities, bedrooms, propertyStory, residents, tourStops } from '@/data/content';
import { Reveal } from '@/components/Reveal';
import { FullScreenImage } from '@/components/FullScreenImage';
import { BackButton } from '@/components/BackButton';
import type { Amenity, Bedroom } from '@/types';

interface StayViewProps {
  onBack: () => void;
}

export function StayView({ onBack }: StayViewProps) {
  const [selectedAmenity, setSelectedAmenity] = useState<Amenity | null>(null);
  const [selectedBedroom, setSelectedBedroom] = useState<Bedroom | null>(null);
  const [activePhotoIdx, setActivePhotoIdx] = useState<number>(0);
  const [tourIndex, setTourIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [selectedAmenity, selectedBedroom, tourIndex]);

  // Digital Tour Overlay Mode
  if (tourIndex !== null) {
    const stop = tourStops[tourIndex];
    const isFirst = tourIndex === 0;
    const isLast = tourIndex === tourStops.length - 1;

    return (
      <div className="fixed inset-0 z-50 bg-ink-900 flex flex-col justify-between overflow-hidden animate-fade-in">
        {/* Full screen background image */}
        <FullScreenImage
          src={stop.image}
          className="absolute inset-0 h-full w-full"
          overlay
          overlayOpacity="bg-gradient-to-b from-ink-900/80 via-ink-900/40 to-ink-900/90"
          scale={false}
        />

        {/* Top left Exit button with back arrow matching all other pages */}
        <div className="absolute top-6 left-6 z-30">
          <BackButton onClick={() => setTourIndex(null)} label="Exit" />
        </div>

        {/* Center Content */}
        <div className="relative z-20 flex flex-col items-center justify-center px-6 text-center max-w-2xl mx-auto my-auto">
          <span className="text-xs uppercase tracking-widest-3 text-champagne-400 font-medium">{stop.category}</span>
          <p className="font-serif text-5xl sm:text-6xl font-light text-champagne-300/90 mt-1">
            Stop {stop.number}
          </p>
          <h2 className="mt-3 font-serif text-3xl sm:text-5xl font-light text-ivory-50 hero-text-shadow">
            {stop.title}
          </h2>
          <p className="mt-4 font-serif text-base sm:text-lg font-light italic text-ivory-200/90 hero-text-shadow leading-relaxed">
            {stop.description}
          </p>
          {stop.details && (
            <div className="mt-4 rounded-full border border-champagne-400/30 bg-ink-900/60 px-4 py-1.5 backdrop-blur-md">
              <p className="text-xs text-champagne-300">{stop.details}</p>
            </div>
          )}
        </div>

        {/* Bottom Navigation Bar */}
        <div className="relative z-20 flex items-center justify-between p-6 sm:p-8 border-t border-ivory-200/10 bg-ink-900/80 backdrop-blur-md">
          {/* Previous Stop */}
          <button
            onClick={() => setTourIndex(tourIndex - 1)}
            disabled={isFirst}
            className="no-tap-highlight inline-flex items-center gap-2 text-xs uppercase tracking-widest-2 text-ivory-200/80 transition-opacity hover:opacity-100 disabled:opacity-30 disabled:pointer-events-none"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
            <span>Previous</span>
          </button>

          {/* Stop indicator */}
          <div className="text-center">
            <p className="text-xs uppercase tracking-widest-2 text-stone-400">
              {tourIndex + 1} of {tourStops.length}
            </p>
          </div>

          {/* Next / Finish Stop */}
          {isLast ? (
            <button
              onClick={() => setTourIndex(null)}
              className="no-tap-highlight inline-flex items-center gap-2 text-xs uppercase tracking-widest-2 text-champagne-300 transition-colors hover:text-champagne-200"
            >
              <span>Finish Tour</span>
              <X className="h-4 w-4" strokeWidth={1.5} />
            </button>
          ) : (
            <button
              onClick={() => setTourIndex(tourIndex + 1)}
              className="no-tap-highlight inline-flex items-center gap-2 text-xs uppercase tracking-widest-2 text-ivory-100 transition-colors hover:text-champagne-300"
            >
              <span>Next Stop</span>
              <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </button>
          )}
        </div>
      </div>
    );
  }

  // Bedroom Modal Detail View
  if (selectedBedroom) {
    const allPhotos = [...selectedBedroom.photos, ...(selectedBedroom.bathroomPhotos || [])];
    const currentPhoto = allPhotos[activePhotoIdx] || allPhotos[0];

    return (
      <div className="min-h-screen bg-ink-900 text-ivory-100">
        <div className="relative h-[55vh] w-full overflow-hidden bg-ink-950">
          <img
            src={currentPhoto}
            alt={selectedBedroom.name}
            className="h-full w-full object-cover transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-900/50 via-transparent to-ink-900" />
          <div className="absolute top-6 left-6 z-10">
            <BackButton onClick={() => setSelectedBedroom(null)} />
          </div>

          {/* Photo Carousel Nav */}
          {allPhotos.length > 1 && (
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between z-10">
              <span className="text-xs font-mono text-champagne-300 bg-ink-900/80 px-3 py-1 rounded-full border border-ink-700">
                Photo {activePhotoIdx + 1} of {allPhotos.length}
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => setActivePhotoIdx((prev) => (prev > 0 ? prev - 1 : allPhotos.length - 1))}
                  className="rounded-full bg-ink-900/80 p-2 text-ivory-100 hover:text-champagne-300 border border-ink-700"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setActivePhotoIdx((prev) => (prev < allPhotos.length - 1 ? prev + 1 : 0))}
                  className="rounded-full bg-ink-900/80 p-2 text-ivory-100 hover:text-champagne-300 border border-ink-700"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Thumbnail Gallery */}
        <div className="px-6 py-4 bg-ink-950/80 border-b border-ink-700 flex gap-3 overflow-x-auto">
          {allPhotos.map((img, i) => (
            <button
              key={i}
              onClick={() => setActivePhotoIdx(i)}
              className={`relative h-16 w-24 shrink-0 rounded overflow-hidden border-2 transition-all ${
                activePhotoIdx === i ? 'border-champagne-400 scale-105' : 'border-transparent opacity-60'
              }`}
            >
              <img src={img} alt="" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>

        {/* Bedroom Details */}
        <div className="mx-auto max-w-2xl px-6 pt-10 pb-44 space-y-8">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase tracking-widest-2 text-champagne-400 font-medium">{selectedBedroom.pdfName}</span>
              <span className="text-stone-500">•</span>
              <span className="text-xs text-stone-400">{selectedBedroom.capacity}</span>
            </div>
            <h1 className="mt-2 font-serif text-4xl font-light text-ivory-50">{selectedBedroom.name}</h1>
            <p className="mt-2 font-serif text-lg font-light italic text-stone-300">{selectedBedroom.subtitle}</p>
          </Reveal>

          <Reveal delay={100}>
            <p className="text-sm leading-relaxed text-ivory-200">{selectedBedroom.description}</p>
          </Reveal>

          <Reveal delay={150}>
            <div className="grid grid-cols-2 gap-4 border-y border-ink-700 py-6">
              <div className="flex items-center gap-3">
                <Bed className="h-5 w-5 text-champagne-400" strokeWidth={1.5} />
                <div>
                  <p className="text-[10px] uppercase tracking-widest-2 text-stone-400">Bed Configuration</p>
                  <p className="text-xs font-serif text-ivory-100 mt-0.5">{selectedBedroom.bedType}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-champagne-400" strokeWidth={1.5} />
                <div>
                  <p className="text-[10px] uppercase tracking-widest-2 text-stone-400">Occupancy</p>
                  <p className="text-xs font-serif text-ivory-100 mt-0.5">{selectedBedroom.capacity}</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <h3 className="font-serif text-xl font-light text-ivory-50">Suite Features</h3>
            <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-stone-300">
              {selectedBedroom.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 rounded-lg bg-ink-800/60 p-3 border border-ink-700">
                  <Sparkles className="h-3.5 w-3.5 text-champagne-400 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    );
  }

  // Amenity Detail View
  if (selectedAmenity) {
    return (
      <div className="min-h-screen bg-ink-900">
        <div className="relative h-[50vh] w-full overflow-hidden">
          <img
            src={selectedAmenity.image}
            alt={selectedAmenity.name}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-900/40 to-ink-900" />
          <div className="absolute top-6 left-6 z-10">
            <BackButton onClick={() => setSelectedAmenity(null)} />
          </div>
        </div>

        <div className="mx-auto max-w-2xl px-6 pb-44 -mt-20 relative z-10">
          <Reveal>
            <h1 className="font-serif text-5xl font-light text-ivory-50">{selectedAmenity.name}</h1>
            <p className="mt-3 font-serif text-xl font-light italic text-stone-300">
              {selectedAmenity.tagline}
            </p>
          </Reveal>

          <Reveal delay={100}>
            <p className="mt-8 text-base leading-relaxed text-ivory-200">
              {selectedAmenity.description}
            </p>
          </Reveal>

          <Reveal delay={150}>
            <div className="mt-10 space-y-6">
              <div className="flex gap-4">
                <MapPin className="h-5 w-5 shrink-0 text-stone-500" strokeWidth={1.5} />
                <div>
                  <p className="text-xs uppercase tracking-widest-2 text-stone-500">Location</p>
                  <p className="mt-1 text-sm text-ivory-200">{selectedAmenity.location}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="h-5 w-5 shrink-0 text-stone-500" strokeWidth={1.5} />
                <div>
                  <p className="text-xs uppercase tracking-widest-2 text-stone-500">Best time</p>
                  <p className="mt-1 text-sm text-ivory-200">{selectedAmenity.bestTime}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Lightbulb className="h-5 w-5 shrink-0 text-champagne-400" strokeWidth={1.5} />
                <div>
                  <p className="text-xs uppercase tracking-widest-2 text-champagne-400/70">Insider tip</p>
                  <p className="mt-1 text-sm font-serif italic text-ivory-200">{selectedAmenity.insiderTip}</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-10 border-t border-ink-700 pt-8">
              <p className="text-xs uppercase tracking-widest-2 text-stone-500">Instructions</p>
              <p className="mt-3 text-sm leading-relaxed text-stone-300">{selectedAmenity.instructions}</p>
            </div>
          </Reveal>

          <Reveal delay={250}>
            <button
              onClick={() => {
                const tourStartIdx = tourStops.findIndex(
                  (s) => s.title.toLowerCase().includes(selectedAmenity.id) || s.id === selectedAmenity.id
                );
                setTourIndex(tourStartIdx >= 0 ? tourStartIdx : 0);
              }}
              className="no-tap-highlight group mt-10 inline-flex items-center gap-2 text-champagne-400 transition-colors hover:text-champagne-300"
            >
              <span className="text-sm tracking-wide">Start tour from here</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
            </button>
          </Reveal>
        </div>
      </div>
    );
  }

  // Main Stay Page
  return (
    <div className="min-h-screen bg-ink-900 pb-44">
      {/* Hero */}
      <section className="relative h-[55vh] w-full overflow-hidden">
        <img
          src={propertyStory[0].image}
          alt="Finca Libia Estate"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900/30 to-ink-900" />
        <div className="absolute top-6 left-6 z-10">
          <BackButton onClick={onBack} />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6 pb-10">
          <Reveal>
            <p className="text-xs uppercase tracking-widest-3 text-ivory-200/70">The Estate</p>
            <h1 className="mt-3 font-serif text-5xl font-light text-ivory-50 hero-text-shadow">Explore the Estate</h1>
          </Reveal>
        </div>
      </section>

      {/* Digital Tour Banner */}
      <section className="px-6 py-10 bg-ink-800/40 border-y border-ink-700">
        <div className="mx-auto max-w-3xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-widest-2 text-champagne-400 font-medium">Digital Estate Tour</p>
            <p className="font-serif text-xl font-light italic text-ivory-100 mt-1">Take an interactive tour of the property.</p>
          </div>
          <button
            onClick={() => setTourIndex(0)}
            className="no-tap-highlight flex items-center gap-2 rounded bg-champagne-500/90 px-6 py-3 text-xs uppercase tracking-widest-2 font-medium text-ink-900 transition-colors hover:bg-champagne-400 shadow-md shrink-0"
          >
            <span>Start the tour</span>
            <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
          </button>
        </div>
      </section>

      {/* Master Bedrooms Showcase */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="text-xs uppercase tracking-widest-3 text-stone-500">Acccommodations</p>
            <h2 className="mt-2 font-serif text-4xl font-light text-ivory-50">6 Master Bedroom Suites</h2>
            <p className="mt-2 text-sm text-stone-400">Click any suite to view all photos, specs, and ensuite bath details.</p>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {bedrooms.map((bedroom, idx) => (
              <Reveal key={bedroom.id} delay={idx * 60}>
                <button
                  onClick={() => {
                    setSelectedBedroom(bedroom);
                    setActivePhotoIdx(0);
                  }}
                  className="no-tap-highlight group flex flex-col text-left overflow-hidden rounded-xl border border-ink-700 bg-ink-800/50 transition-all duration-300 hover:border-champagne-400/50 hover:bg-ink-800"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={bedroom.photos[0]}
                      alt={bedroom.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 rounded-full bg-ink-900/80 px-3 py-1 text-[10px] font-mono text-champagne-300 border border-ink-700">
                      {bedroom.photos.length + (bedroom.bathroomPhotos?.length || 0)} Photos
                    </div>
                  </div>
                  <div className="p-5">
                    <span className="text-[10px] uppercase tracking-widest-2 text-champagne-400 font-medium">{bedroom.pdfName}</span>
                    <h3 className="mt-1 font-serif text-2xl font-light text-ivory-100 transition-colors group-hover:text-champagne-300">
                      {bedroom.name}
                    </h3>
                    <p className="mt-1 text-xs text-stone-400 line-clamp-2">{bedroom.subtitle}</p>
                    <div className="mt-4 flex items-center justify-between text-xs text-stone-400 border-t border-ink-700/60 pt-3">
                      <span>{bedroom.bedType}</span>
                      <span className="text-champagne-400 group-hover:translate-x-1 transition-transform">Explore →</span>
                    </div>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="px-6 py-16 bg-ink-800/20 border-t border-ink-700">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="text-xs uppercase tracking-widest-3 text-stone-500">Amenities & Grounds</p>
          </Reveal>
          <div className="mt-8 space-y-px">
            {amenities.map((amenity, i) => (
              <Reveal key={amenity.id} delay={i * 50}>
                <button
                  onClick={() => setSelectedAmenity(amenity)}
                  className="no-tap-highlight group flex w-full items-center justify-between border-b border-ink-700 py-6 text-left transition-colors hover:border-champagne-500/30"
                >
                  <div className="flex-1">
                    <h3 className="font-serif text-3xl font-light text-ivory-100 transition-colors group-hover:text-champagne-300">
                      {amenity.name}
                    </h3>
                    <p className="mt-1 font-serif text-base font-light italic text-stone-400">
                      {amenity.tagline}
                    </p>
                  </div>
                  <ChevronRight className="h-6 w-6 text-stone-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-champagne-400" strokeWidth={1.5} />
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Property Story */}
      <section className="px-6 py-16 bg-ink-800/40 border-t border-ink-700">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="text-xs uppercase tracking-widest-3 text-stone-500">The Property</p>
            <h2 className="mt-3 font-serif text-4xl font-light text-ivory-50">The Story of Finca Libia</h2>
          </Reveal>

          <div className="mt-12 space-y-16">
            {propertyStory.map((section, i) => (
              <Reveal key={section.id} delay={i * 80}>
                <div className="overflow-hidden rounded-sm">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full object-cover"
                    style={{ aspectRatio: '16/9' }}
                  />
                </div>
                <div className="mt-6">
                  <p className="text-xs uppercase tracking-widest-2 text-stone-500">{section.label}</p>
                  <h3 className="mt-2 font-serif text-3xl font-light text-ivory-100">{section.title}</h3>
                  <p className="mt-4 text-base leading-relaxed text-stone-300">{section.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Residents */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="text-xs uppercase tracking-widest-3 text-stone-500">Meet the Residents</p>
          </Reveal>
          <div className="mt-10 space-y-12">
            {residents.map((resident, i) => (
              <Reveal key={resident.id} delay={i * 100}>
                <div className="flex flex-col sm:flex-row gap-6 items-center">
                  <img
                    src={resident.image}
                    alt={resident.name}
                    className="h-48 w-48 rounded-sm object-cover shrink-0"
                  />
                  <div>
                    <h3 className="font-serif text-3xl font-light text-ivory-100">{resident.name}</h3>
                    <p className="text-xs uppercase tracking-widest-2 text-stone-500 mt-1">{resident.species}</p>
                    <p className="mt-3 text-sm leading-relaxed text-stone-300">{resident.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
