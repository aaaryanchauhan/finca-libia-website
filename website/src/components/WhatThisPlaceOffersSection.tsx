import { useState, useEffect } from 'react';
import { X, Search, Check } from 'lucide-react';
import { allAmenitiesData } from '../data/amenitiesData';

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

  // 6 Named Categories Directive: Wellness · Recreation · Culinary · Grounds · Service · Technology
  const categories = [
    {
      name: 'Wellness',
      items: [
        'Finnish Cedar Sauna (85°C)',
        'Cold Plunge Pool (8°C)',
        'Heated Hydrotherapy Jacuzzi',
        '25m Heated Saltwater Pool',
        'Outdoor Yoga & Massage Deck',
      ],
    },
    {
      name: 'Recreation',
      items: [
        'Private 2-Lane Bowling Alley',
        'Vintage Arcade & Games Lounge',
        'Full Tennis & Pickleball Court',
        'Fully Equipped Fitness Gym',
        'Cinema & Sports Media Suite',
      ],
    },
    {
      name: 'Culinary',
      items: [
        'Commercial Chef Kitchen',
        'Wood-Fired Artisanal Oven',
        'Temperature Controlled Wine Cellar',
        'Outdoor Asado & Grill Station',
        'Espresso & Espresso Bar',
      ],
    },
    {
      name: 'Grounds',
      items: [
        '3.5 Private Mountain Acres',
        'Organic Herb & Fruit Gardens',
        'Resident Alpaca & Farm Animals',
        'Mountain View Fire Pits',
        'Private Hiking Trails & Orchards',
      ],
    },
    {
      name: 'Service',
      items: [
        '24/7 Butler & Steward Service',
        'Executive Private Chef Team',
        'Daily Housekeeping & Turndown',
        'Private SUV Airport Transfers',
        '24/7 Armed Gated Security',
      ],
    },
    {
      name: 'Technology',
      items: [
        'Starlink High-Speed Satellite WiFi',
        'Sonos Multi-Zone Outdoor Audio',
        'Smart Room Temperature Control',
        'EV SUV Charging Station',
        'Keyless Smart Entry System',
      ],
    },
  ];

  // Filter amenities for full search modal
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

  const totalCount = allAmenitiesData.reduce((acc, cat) => acc + cat.items.length, 0);

  return (
    <section id="amenities" className="relative bg-ink-950 px-6 md:px-16 lg:px-24 py-28 border-b border-ivory-200/10">
      <div className="mx-auto max-w-7xl">
        {/* Asymmetric Section Intro Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-[#E8E2D6]/70 font-medium mb-3">
            Estate Features
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-ivory-50 leading-tight">
            Curated Amenities
          </h2>
          <p className="mt-4 font-sans text-sm sm:text-base font-light text-stone-300 leading-relaxed">
            Every amenity is integrated seamlessly across the 3.5-acre grounds to deliver total luxury, wellness, and recreation.
          </p>
        </div>

        {/* 6 Category Grid (Clean Hairline Rules, No Stock Icon Boxes) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {categories.map((cat, idx) => (
            <div key={idx} className="space-y-4">
              <h3 className="font-serif text-2xl font-light text-ivory-50 border-b border-ivory-200/15 pb-3">
                {cat.name}
              </h3>
              <ul className="space-y-3 pt-1">
                {cat.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-center gap-3 text-xs sm:text-sm font-light text-stone-300">
                    <span className="h-1 w-1 bg-[#E8E2D6] rounded-full shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Quiet "View Full List" Modal Trigger */}
        <div className="mt-16 pt-8 border-t border-ivory-200/10 flex justify-start">
          <button
            onClick={() => setIsModalOpen(true)}
            className="no-tap-highlight text-xs uppercase tracking-[0.2em] text-[#E8E2D6] hover:text-ivory-50 border-b border-[#E8E2D6]/50 hover:border-ivory-50 pb-1 transition-all cursor-pointer"
          >
            View Full List ({totalCount} items) →
          </button>
        </div>
      </div>

      {/* All Amenities Full Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink-950/98 backdrop-blur-xl animate-fade-in text-ivory-100">
          <div className="relative flex flex-col h-[90vh] w-[92vw] max-w-4xl border border-ivory-200/20 bg-ink-950 shadow-2xl overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-ivory-200/15 bg-ink-900">
              <div>
                <h3 className="font-serif text-2xl font-light text-ivory-50">
                  Estate Amenities & Specs
                </h3>
                <p className="text-xs text-stone-400 font-light">
                  Complete directory of {totalCount} estate features
                </p>
              </div>

              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2.5 bg-ink-800 border border-ivory-200/20 text-ivory-200 hover:bg-ink-700 hover:text-ivory-50 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Search Input */}
            <div className="p-4 px-6 border-b border-ivory-200/10 bg-ink-900/60">
              <div className="relative">
                <Search className="absolute left-3.5 top-3 h-4 w-4 text-stone-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search amenities (sauna, bowling, pool, wifi...)"
                  className="w-full border border-ivory-200/20 bg-ink-950 pl-10 pr-4 py-2.5 text-xs text-ivory-100 placeholder-stone-500 focus:border-[#E8E2D6] focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-10">
              {filteredCategories.length === 0 ? (
                <div className="text-center py-12 text-stone-400 font-light">
                  No amenities found matching "{searchQuery}".
                </div>
              ) : (
                filteredCategories.map((cat, idx) => (
                  <div key={idx} className="space-y-4">
                    <h4 className="font-serif text-xl sm:text-2xl font-light text-[#E8E2D6] border-b border-ivory-200/10 pb-2">
                      {cat.category}
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {cat.items.map((item, itemIdx) => (
                        <div key={itemIdx} className="flex items-start gap-3 py-1.5">
                          <Check className="h-4 w-4 text-[#E8E2D6] shrink-0 mt-0.5" />
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
            <div className="px-6 py-4 border-t border-ivory-200/10 bg-ink-900 flex items-center justify-between text-xs text-stone-400 font-light">
              <span>Finca Libia · 100% Exclusive Private Estate</span>
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-5 py-2 bg-ivory-200/20 text-ivory-50 font-medium hover:bg-ivory-200/30 transition-colors cursor-pointer"
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
