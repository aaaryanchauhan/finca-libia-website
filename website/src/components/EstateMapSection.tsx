import { useState } from 'react';
import { Compass, Waves, Flame, Trophy, Sparkles, Wine, Gamepad2, HeartHandshake } from 'lucide-react';
import { ArrowRight, MapPin } from 'lucide-react';

interface Hotspot {
  id: string;
  name: string;
  category: string;
  icon: typeof MapPin;
  coords: { x: number; y: number };
  image: string;
  shortDesc: string;
  highlights: string[];
  specs: string;
}

const mapHotspots: Hotspot[] = [
  {
    id: 'suites-wing',
    name: 'Master Suites Wing',
    category: 'Accommodations',
    icon: Compass,
    coords: { x: 42, y: 35 },
    image: '/photos/bedroom_1/bedroom_1_01.jpeg',
    shortDesc: '6 private master suites featuring cathedral cedar ceilings, mountain view terraces, and marble ensuite bathrooms.',
    highlights: ['6 Private Master Suites', 'Accommodates up to 14 guests', 'Open-Air Jacuzzi in Grand Master'],
    specs: '1,200 m² Total Living Quarters',
  },
  {
    id: 'infinity-pool',
    name: '25m Saltwater Heated Infinity Pool',
    category: 'Wellness & Water',
    icon: Waves,
    coords: { x: 65, y: 50 },
    image: '/photos/pool/pool_01.jpeg',
    shortDesc: '25-meter saltwater infinity pool heated to a constant 28°C with submerged lounge chairs and panoramic valley views.',
    highlights: ['Natural Salt System (No Chlorine)', 'Heated 28°C Year-Round', 'Submerged Sun Loungers'],
    specs: '25m Length · 28°C Heated',
  },
  {
    id: 'tennis-court',
    name: 'Red Clay Tennis & Pickleball Court',
    category: 'Sports & Recreation',
    icon: Trophy,
    coords: { x: 22, y: 68 },
    image: '/photos/courtyard/courtyard_01.jpeg',
    shortDesc: 'Professional red clay court with LED night illumination, nestled between pine forests and tropical orchids.',
    highlights: ['Professional Red Clay', 'LED Floodlights for Evening Play', 'Rackets & Balls Provided'],
    specs: 'Regulation Red Clay Court',
  },
  {
    id: 'sauna-spa',
    name: 'Cedar Sauna & Eucalyptus Steam Spa',
    category: 'Wellness & Spa',
    icon: Flame,
    coords: { x: 75, y: 38 },
    image: '/photos/patio/patio_02.jpeg',
    shortDesc: 'Finnish aromatic Canadian cedar sauna and eucalyptus steam bath situated right beside the pool terrace.',
    highlights: ['Seats 6 Persons', 'Organic Eucalyptus Infusions', 'Immediate Cold Plunge Access'],
    specs: 'Canadian Cedar · 85°C Max',
  },
  {
    id: 'bar-dining',
    name: 'Speakeasy Bar & Dining Salon',
    category: 'Social & Dining',
    icon: Wine,
    coords: { x: 50, y: 58 },
    image: '/photos/dining_area/dining_area_01.jpeg',
    shortDesc: 'Grand teak dining table seating 16, accompanied by an illuminated 80-bottle bar with rare Colombian rums.',
    highlights: ['Seats 16 at Teak Table', '80+ Curated Spirits & Wine Cellar', 'In-Villa Chef Service'],
    specs: 'Full Bar & Gourmet Dining',
  },
  {
    id: 'games-room',
    name: 'Soundproof Games Lounge & Bowling',
    category: 'Entertainment',
    icon: Gamepad2,
    coords: { x: 35, y: 55 },
    image: '/photos/games_room/games_room_01.jpeg',
    shortDesc: 'Subterranean acoustic lounge featuring custom billiards, retro bowling lane, foosball, and Sonos high-fidelity audio.',
    highlights: ['Retro Bowling Lane', 'Billiards, Foosball & Ping Pong', '100% Acoustic Soundproofing'],
    specs: 'Soundproofed Entertainment Hub',
  },
  {
    id: 'helipad',
    name: 'Private On-Site Helipad',
    category: 'Aviation Access',
    icon: Sparkles,
    coords: { x: 85, y: 22 },
    image: '/photos/exterior/exterior_10.jpeg',
    shortDesc: 'Dedicated helipad on the estate grounds permitting direct flights from MDE airport or scenic Guatapé aerial tours.',
    highlights: ['6-Min Flight to MDE Airport', 'Guatapé Rock Helicopter Tours', '24/7 Helicopter Charter Coordination'],
    specs: 'On-Site Private Helipad',
  },
  {
    id: 'farm-animals',
    name: 'Organic Farm & Pet Sanctuary',
    category: 'Grounds & Nature',
    icon: HeartHandshake,
    coords: { x: 15, y: 30 },
    image: '/photos/additional_photos/alpaca.jpeg',
    shortDesc: '12 private acres of lush mountain pasture home to friendly alpacas, Swiss cows, golden retrievers, and native birds.',
    highlights: ['Friendly Alpacas & Swiss Cows', 'Organic Coffee & Citrus Trees', 'Walking Trails Across 12 Acres'],
    specs: '12 Private Mountain Acres',
  },
];

interface EstateMapSectionProps {
  onOpenInquiry: () => void;
}

export function EstateMapSection({ onOpenInquiry }: EstateMapSectionProps) {
  const [activeHotspotId, setActiveHotspotId] = useState<string>(mapHotspots[0].id);

  const activeHotspot = mapHotspots.find((h) => h.id === activeHotspotId) || mapHotspots[0];

  return (
    <section id="map" className="relative bg-ink-900 px-6 py-24 lg:px-12 border-b border-ink-700/60">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest-3 text-champagne-400 font-medium">
            Spatial Grounds Layout
          </p>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-ivory-50">
            Explore the 12-Acre Estate Map
          </h2>
          <p className="mt-4 font-serif text-lg font-light italic text-stone-300">
            Click any hotspot location pin on the map below to discover the private facilities across Finca Libia.
          </p>
        </div>

        {/* Map & Detail Cards Container */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Interactive Map Layout Graphic */}
          <div className="lg:col-span-7 relative bg-ink-800/80 rounded-3xl border border-ink-700/80 p-4 sm:p-6 overflow-hidden shadow-2xl min-h-[420px] flex flex-col justify-between">
            {/* Background Graphic Illustration */}
            <div className="absolute inset-0 bg-gradient-to-tr from-ink-950 via-ink-900/90 to-ink-800 opacity-95" />
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#c4b088_1px,transparent_1px)] [background-size:24px_24px]" />

            {/* Stylized Top Compass Header */}
            <div className="relative z-10 flex justify-between items-center px-2 pt-2">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest-2 text-champagne-400 font-medium bg-ink-900/80 border border-ink-700/80 rounded-full px-4 py-1.5 backdrop-blur-md">
                <Compass className="h-4 w-4 text-champagne-400" />
                <span>Finca Libia Grounds Blueprint</span>
              </div>
              <span className="text-[11px] text-stone-400 font-mono hidden sm:inline">6°09'N · 75°22'W</span>
            </div>

            {/* Map Visual Pins Grid */}
            <div className="relative z-10 my-8 h-80 sm:h-96 w-full rounded-2xl border border-ink-700/40 bg-ink-950/60 overflow-hidden shadow-inner">
              <img
                src="/photos/exterior/exterior_10.jpeg"
                alt="Finca Libia Map Backdrop"
                className="absolute inset-0 h-full w-full object-cover opacity-25 filter blur-[1px] scale-105"
              />

              {/* Hotspot Pins */}
              {mapHotspots.map((spot) => {
                const isActive = spot.id === activeHotspotId;
                const Icon = spot.icon;
                return (
                  <button
                    key={spot.id}
                    onClick={() => setActiveHotspotId(spot.id)}
                    style={{ left: `${spot.coords.x}%`, top: `${spot.coords.y}%` }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 group transition-all duration-300 z-20 focus:outline-none`}
                    aria-label={spot.name}
                  >
                    <div
                      className={`relative flex items-center justify-center rounded-full p-2.5 transition-all duration-300 ${
                        isActive
                          ? 'bg-champagne-500 text-ink-900 scale-125 shadow-2xl ring-4 ring-champagne-400/40 animate-hotspot'
                          : 'bg-ink-900/90 text-champagne-300 border border-champagne-400/50 hover:bg-champagne-500 hover:text-ink-900 hover:scale-110'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      {/* Tooltip Label */}
                      <span className="absolute left-1/2 -bottom-8 -translate-x-1/2 whitespace-nowrap rounded-md bg-ink-950 px-2.5 py-1 text-[10px] font-medium tracking-wider text-ivory-100 border border-ink-700 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
                        {spot.name}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Quick Hotspot Select Pills */}
            <div className="relative z-10 flex flex-wrap gap-2 pt-2">
              {mapHotspots.map((spot) => (
                <button
                  key={spot.id}
                  onClick={() => setActiveHotspotId(spot.id)}
                  className={`no-tap-highlight text-[11px] font-medium uppercase tracking-wider rounded-full px-3.5 py-1.5 transition-all ${
                    spot.id === activeHotspotId
                      ? 'bg-champagne-500 text-ink-900 shadow-md font-semibold'
                      : 'bg-ink-900/70 text-stone-300 border border-ink-700/60 hover:text-ivory-50 hover:border-champagne-400/40'
                  }`}
                >
                  {spot.name.split(' ')[0]} {spot.name.split(' ')[1] || ''}
                </button>
              ))}
            </div>
          </div>

          {/* Active Hotspot Spotlight Detail Card */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl border border-ink-700/80 bg-ink-800/50 p-6 sm:p-8 backdrop-blur-md shadow-2xl">
            <div>
              {/* Photo Banner */}
              <div className="relative h-56 w-full overflow-hidden rounded-2xl border border-ink-700/60">
                <img
                  src={activeHotspot.image}
                  alt={activeHotspot.name}
                  className="h-full w-full object-cover transition-all duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 rounded-full bg-ink-900/80 px-3.5 py-1 text-[10px] uppercase tracking-widest-2 text-champagne-300 border border-ink-700 backdrop-blur-md font-medium">
                  {activeHotspot.category}
                </span>
                <span className="absolute bottom-3 right-3 text-[11px] font-mono text-ivory-200 bg-ink-900/80 px-3 py-1 rounded-full border border-ink-700">
                  {activeHotspot.specs}
                </span>
              </div>

              {/* Title & Description */}
              <div className="mt-6">
                <h3 className="font-serif text-3xl font-light text-ivory-50">
                  {activeHotspot.name}
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-stone-300 font-light">
                  {activeHotspot.shortDesc}
                </p>
              </div>

              {/* Highlights List */}
              <div className="mt-6 space-y-2.5 pt-4 border-t border-ink-700/60">
                <p className="text-[11px] uppercase tracking-widest-2 text-champagne-400 font-medium">
                  Key Location Features
                </p>
                {activeHotspot.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-ivory-100">
                    <div className="h-1.5 w-1.5 rounded-full bg-champagne-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 pt-4 border-t border-ink-700/60 flex items-center justify-between">
              <span className="text-xs text-stone-400 font-light">100% Exclusive Grounds Access</span>
              <button
                onClick={onOpenInquiry}
                className="no-tap-highlight inline-flex items-center gap-2 rounded-full bg-champagne-500 px-5 py-2.5 text-xs font-medium uppercase tracking-widest-2 text-ink-900 shadow-xl transition-all hover:bg-champagne-300 hover:scale-105"
              >
                <span>Inquire Location</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
