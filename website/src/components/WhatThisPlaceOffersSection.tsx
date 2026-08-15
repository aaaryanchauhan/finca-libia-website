import { useState, useEffect } from 'react';
import {
  Mountain,
  Sun,
  Sparkles,
  Waves,
  Flame,
  Thermometer,
  Wind,
  Droplets,
  Activity,
  ShieldCheck,
  X,
  Search,
  Check,
} from 'lucide-react';
import { featuredAmenities, allAmenitiesData } from '../data/amenitiesData';

export function WhatThisPlaceOffersSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  // Icon mapping helper
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Mountain': return <Mountain className="h-6 w-6 text-champagne-300 shrink-0" />;
      case 'Sun': return <Sun className="h-6 w-6 text-champagne-300 shrink-0" />;
      case 'Sparkles': return <Sparkles className="h-6 w-6 text-champagne-300 shrink-0" />;
      case 'Waves': return <Waves className="h-6 w-6 text-champagne-300 shrink-0" />;
      case 'Flame': return <Flame className="h-6 w-6 text-champagne-300 shrink-0" />;
      case 'Thermometer': return <Thermometer className="h-6 w-6 text-champagne-300 shrink-0" />;
      case 'Wind': return <Wind className="h-6 w-6 text-champagne-300 shrink-0" />;
      case 'Droplets': return <Droplets className="h-6 w-6 text-champagne-300 shrink-0" />;
      case 'Activity': return <Activity className="h-6 w-6 text-champagne-300 shrink-0" />;
      case 'ShieldCheck': return <ShieldCheck className="h-6 w-6 text-champagne-300 shrink-0" />;
      default: return <Check className="h-5 w-5 text-champagne-400 shrink-0" />;
    }
  };

  // Filter amenities based on search query
  const filteredCategories = allAmenitiesData
    .map((cat) => ({
      ...cat,
      items: cat.items.filter(
        (item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (item.detail && item.detail.toLowerCase().includes(searchQuery.toLowerCase()))
      ),
    }))
    .filter((cat) => cat.items.length > 0);

  // Calculate total count
  const totalCount = allAmenitiesData.reduce((acc, cat) => acc + cat.items.length, 0);

  return (
    <section id="amenities" className="relative bg-ink-900 px-6 py-20 lg:px-12 border-b border-ink-700/60">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="space-y-2">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-ivory-50">
            What this place offers
          </h2>
          <p className="text-sm sm:text-base font-light text-stone-300">
            Our Luxe Space is fully equipped to meet your needs, with ample space and privacy.
          </p>
        </div>

        {/* Featured 10 Amenities Grid (2 Columns matching reference) */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
          {featuredAmenities.map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 py-2 border-b border-ink-800/80">
              <div className="p-2 bg-ink-800/80 border border-ink-700/60">
                {getIcon(item.icon)}
              </div>
              <span className="font-serif text-base sm:text-lg font-light text-ivory-100">
                {item.name}
              </span>
            </div>
          ))}
        </div>

        {/* Modal Trigger Button */}
        <div className="mt-10">
          <button
            onClick={() => setIsModalOpen(true)}
            className="no-tap-highlight border border-ivory-200/30 bg-ivory-100 px-6 py-3.5 text-xs sm:text-sm font-medium uppercase tracking-wider text-ink-900 shadow-xl transition-all duration-300 hover:bg-champagne-300 hover:scale-105 active:scale-95"
          >
            Show all {totalCount} amenities
          </button>
        </div>
      </div>

      {/* All Amenities Full Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink-950/98 backdrop-blur-xl animate-fade-in text-ivory-100">
          <div className="relative flex flex-col h-[90vh] w-[92vw] max-w-4xl border border-ink-700/80 bg-ink-900 shadow-2xl overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-ink-700/80 bg-ink-950/80">
              <div>
                <h3 className="font-serif text-2xl font-light text-ivory-50">
                  What this place offers
                </h3>
                <p className="text-xs text-stone-400 font-light">
                  Complete list of {totalCount} luxury amenities & features
                </p>
              </div>

              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2.5 bg-ink-800 border border-ink-700 text-ivory-200 hover:bg-ink-700 hover:text-champagne-300 transition-colors"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Search Input */}
            <div className="p-4 px-6 border-b border-ink-800 bg-ink-900/60">
              <div className="relative">
                <Search className="absolute left-3.5 top-3 h-4 w-4 text-stone-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search amenities (e.g. pool, tennis, wifi, espresso...)"
                  className="w-full border border-ink-700 bg-ink-950/80 pl-10 pr-4 py-2.5 text-xs text-ivory-100 placeholder-stone-500 focus:border-champagne-400 focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Modal Body with Categorized List */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-10">
              {filteredCategories.length === 0 ? (
                <div className="text-center py-12 text-stone-400 font-light">
                  No amenities found matching "{searchQuery}".
                </div>
              ) : (
                filteredCategories.map((cat, idx) => (
                  <div key={idx} className="space-y-4">
                    <h4 className="font-serif text-xl sm:text-2xl font-light text-champagne-300 border-b border-ink-800 pb-2">
                      {cat.category}
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {cat.items.map((item, itemIdx) => (
                        <div key={itemIdx} className="flex items-start gap-3 py-1.5">
                          <Check className="h-4 w-4 text-champagne-400 shrink-0 mt-0.5" />
                          <div>
                            <span className="text-xs sm:text-sm font-light text-ivory-100 block">
                              {item.name}
                            </span>
                            {item.detail && (
                              <span className="text-[11px] text-stone-400 font-light block mt-0.5">
                                {item.detail}
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 border-t border-ink-800 bg-ink-950/80 flex items-center justify-between text-xs text-stone-400 font-light">
              <span>Finca Libia · 100% Exclusive Private Estate</span>
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-5 py-2 bg-champagne-500 text-ink-900 font-medium hover:bg-champagne-300 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
