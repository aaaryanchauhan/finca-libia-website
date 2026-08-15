import { useState } from 'react';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';

interface DigitalTourModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const websiteTourStops = [
  {
    number: '01',
    category: 'Architecture',
    title: 'Grand Entrance & Historic Facade',
    description: '100-year coffee estate architecture framed by geometric stone lattices and mountain views.',
    image: '/photos/exterior/exterior_10.jpeg',
    details: 'Hand-cut local stone walls dating back to 1928, restored into a modern luxury villa.',
  },
  {
    number: '02',
    category: 'Living Space',
    title: 'Main Living Salon & Fireplace',
    description: 'Cathedral wood ceilings, plush sofas, and a grand fireplace for cool mountain evenings.',
    image: '/photos/living_room/living_room_02.jpeg',
    details: 'Firewood is stocked underneath. Light the fire at dusk for cozy warmth.',
  },
  {
    number: '03',
    category: 'Dining & Kitchen',
    title: 'Gourmet Chef Kitchen',
    description: 'Full chef kitchen equipped for private dining, breakfast prep, and espresso service.',
    image: '/photos/full_kitchen/full_kitchen_01.jpeg',
    details: 'Equipped with commercial range and single-origin coffee bar.',
  },
  {
    number: '04',
    category: 'Dining & Social',
    title: 'Dining Salon & Speakeasy Bar',
    description: 'Grand teak dining table seating 16 guests, flanked by an 80-bottle backlit bar.',
    image: '/photos/dining_area/dining_area_01.jpeg',
    details: 'Stocked with rare Colombian rums, fine wines, and artisanal spirits.',
  },
  {
    number: '05',
    category: 'Master Suite 1',
    title: 'The Gold Room (Grand Master)',
    description: 'The master bedroom featuring gold tones, cathedral ceiling, wrap-around terrace & open-air Jacuzzi.',
    image: '/photos/bedroom_1/bedroom_1_01.jpeg',
    details: 'Includes an open-air jacuzzi tub overlooking the mountain valley.',
  },
  {
    number: '06',
    category: 'Master Suite 2',
    title: 'The Grey Room (Garden Suite)',
    description: 'Sleek stone bedroom with direct floor-to-ceiling access to the tropical courtyard garden.',
    image: '/photos/bedroom_2/bedroom_2_01.jpeg',
    details: 'Features a double stone vanity ensuite and private garden seating.',
  },
  {
    number: '07',
    category: 'Master Suite 3',
    title: 'Valley View Suite',
    description: 'Elevated suite with sunset orientation over Rionegro coffee valley.',
    image: '/photos/bedroom_3/bedroom_3_01.jpeg',
    details: 'Custom cedar vanity and smart ambient lighting.',
  },
  {
    number: '08',
    category: 'Master Suite 4',
    title: 'Courtyard Sanctuary Suite',
    description: 'Serene guest bedroom adjacent to the central fountain and native tropical plants.',
    image: '/photos/bedroom_4/bedroom_4_01.jpeg',
    details: 'Gentle water fountain sounds for peaceful sleep.',
  },
  {
    number: '09',
    category: 'Master Suite 5',
    title: 'The Black Room (Deluxe Suite)',
    description: 'Obsidian interior design suite with king bed and immediate pool terrace access.',
    image: '/photos/bedroom_5/bedroom_5_01.jpeg',
    details: 'Matte black architectural finishes & premium sound system.',
  },
  {
    number: '10',
    category: 'Master Suite 6',
    title: 'Guest Wing Suite',
    description: 'Flexible double suite with writing workspace and garden vistas.',
    image: '/photos/bedroom_6/bedroom_6_01.jpeg',
    details: 'Organic linens and dedicated guest storage.',
  },
  {
    number: '11',
    category: 'Wellness & Water',
    title: '25m Saltwater Infinity Pool',
    description: '25-meter infinity pool heated to 28°C with saltwater treatment and valley view.',
    image: '/photos/pool/pool_01.jpeg',
    details: 'West orientation catches golden hour sunset perfectly.',
  },
  {
    number: '12',
    category: 'Wellness Spa',
    title: 'Cedar Sauna & Eucalyptus Steam Bath',
    description: 'Finnish cedar sauna and eucalyptus steam bath adjacent to the pool deck.',
    image: '/photos/patio/patio_02.jpeg',
    details: 'Pair a 15-minute sauna session with a cold pool plunge.',
  },
  {
    number: '13',
    category: 'Recreation',
    title: 'Red Clay Tennis Court',
    description: 'Professional red clay tennis & pickleball court with LED floodlights.',
    image: '/photos/courtyard/courtyard_01.jpeg',
    details: 'Rackets and balls provided in the court cabinet.',
  },
  {
    number: '14',
    category: 'Entertainment',
    title: 'Soundproof Games Room & Bowling',
    description: 'Soundproof lounge featuring billiards, foosball, ping pong, and a vintage bowling lane.',
    image: '/photos/games_room/games_room_01.jpeg',
    details: 'High-fidelity audio system for late night music.',
  },
  {
    number: '15',
    category: 'Wellness & Farm',
    title: 'Gym & Farm Animal Grounds',
    description: '24-hour gym overlooking grounds where friendly llamas and Swiss-German cows roam.',
    image: '/photos/gym/gym_01.jpeg',
    details: 'Befriend Bruno the retriever, Luna the cat, and the farm animal crew.',
  },
];

export function DigitalTourModal({ isOpen, onClose }: DigitalTourModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!isOpen) return null;

  const currentStop = websiteTourStops[currentIndex];
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === websiteTourStops.length - 1;

  return (
    <div className="fixed inset-0 z-50 bg-ink-950 flex flex-col justify-between overflow-hidden animate-fade-in text-ivory-100">
      {/* Full screen background image */}
      <div className="absolute inset-0 h-full w-full">
        <img
          src={currentStop.image}
          alt={currentStop.title}
          className="h-full w-full object-cover transition-opacity duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900/80 via-ink-900/40 to-ink-950/95" />
      </div>

      {/* Top Left Exit Button */}
      <div className="absolute top-6 left-6 z-30">
        <button
          onClick={onClose}
          className="no-tap-highlight flex items-center gap-2 rounded-full border border-ivory-200/30 bg-ink-900/70 px-4 py-2 text-xs font-medium uppercase tracking-widest-2 text-ivory-100 backdrop-blur-md transition-all duration-300 hover:border-champagne-400 hover:bg-champagne-500 hover:text-ink-900 shadow-xl"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Exit Tour</span>
        </button>
      </div>

      {/* Center Content */}
      <div className="relative z-20 flex flex-col items-center justify-center px-6 text-center max-w-2xl mx-auto my-auto pt-16">
        <span className="text-xs uppercase tracking-widest-3 text-champagne-400 font-medium">
          {currentStop.category}
        </span>
        <p className="font-serif text-5xl sm:text-6xl font-light text-champagne-300/90 mt-1">
          Stop {currentStop.number}
        </p>
        <h2 className="mt-3 font-serif text-3xl sm:text-5xl font-light text-ivory-50 hero-text-shadow">
          {currentStop.title}
        </h2>
        <p className="mt-4 font-serif text-base sm:text-lg font-light italic text-ivory-200/90 hero-text-shadow leading-relaxed">
          {currentStop.description}
        </p>
        {currentStop.details && (
          <div className="mt-4 rounded-full border border-champagne-400/30 bg-ink-900/70 px-5 py-2 backdrop-blur-md">
            <p className="text-xs text-champagne-300 font-light">{currentStop.details}</p>
          </div>
        )}
      </div>

      {/* Bottom Bar Controls */}
      <div className="relative z-20 flex items-center justify-between p-6 sm:p-8 border-t border-ivory-200/10 bg-ink-950/80 backdrop-blur-md">
        <button
          onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
          disabled={isFirst}
          className="no-tap-highlight inline-flex items-center gap-2 text-xs uppercase tracking-widest-2 text-ivory-200/80 transition-opacity hover:text-champagne-300 disabled:opacity-30 disabled:pointer-events-none"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Previous</span>
        </button>

        <div className="text-center">
          <p className="text-xs uppercase tracking-widest-2 text-stone-400 font-mono">
            {currentIndex + 1} / {websiteTourStops.length}
          </p>
        </div>

        {isLast ? (
          <button
            onClick={onClose}
            className="no-tap-highlight inline-flex items-center gap-2 text-xs uppercase tracking-widest-2 text-champagne-300 transition-colors hover:text-champagne-200"
          >
            <span>Finish Tour</span>
            <X className="h-4 w-4" />
          </button>
        ) : (
          <button
            onClick={() => setCurrentIndex((prev) => Math.min(websiteTourStops.length - 1, prev + 1))}
            className="no-tap-highlight inline-flex items-center gap-2 text-xs uppercase tracking-widest-2 text-ivory-100 transition-colors hover:text-champagne-300"
          >
            <span>Next Stop</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
}
