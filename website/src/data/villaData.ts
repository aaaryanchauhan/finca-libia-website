export interface Suite {
  id: string;
  name: string;
  subtitle: string;
  capacity: string;
  size: string;
  bed: string;
  description: string;
  highlights: string[];
  image: string;
  gallery: string[];
}

export interface EstateFeature {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  description: string;
  image: string;
  specs: { label: string; value: string }[];
}

export interface Review {
  id: string;
  author: string;
  location: string;
  date: string;
  rating: number;
  comment: string;
  avatar: string;
}

export const villaInfo = {
  name: 'Finca Libia',
  tagline: 'Private Luxury Estate & Sanctuary',
  location: 'Medellín Valley, Antioquia, Colombia',
  airport: 'José María Córdova (MDE) — 45 min private transfer',
  capacity: 'Up to 14 guests across 6 private suites',
  propertySize: '12 Acres of Private Mountain Grounds',
  rating: 4.98,
  reviewCount: 42,
  heroImages: [
    '/photos/exterior/exterior_10.jpeg',
    '/photos/pool/pool_01.jpeg',
    '/photos/living_room/living_room_02.jpeg',
    '/photos/courtyard/courtyard_01.jpeg',
  ],
};

export const suites: Suite[] = [
  {
    id: 'master-suite-1',
    name: 'The Grand Master Suite',
    subtitle: 'Panoramic mountain view with private Jacuzzi & outdoor lounge terrace',
    capacity: '2 Guests',
    size: '110 m²',
    bed: 'King Bed',
    description: 'The crowning suite of Finca Libia. Features soaring ceilings, hand-finished cedar woodwork, private wrap-around terrace with sun loungers, and an open-air marble bathroom with jacuzzi tub overlooking the valley.',
    highlights: ['Private Jacuzzi', 'Wrap-around balcony', 'Walk-in dressing room', 'Rainfall shower'],
    image: '/photos/bedroom_1/bedroom_1_01.jpeg',
    gallery: ['/photos/bedroom_1/bedroom_1_01.jpeg', '/photos/bedroom_1/bedroom_1_02.jpeg', '/photos/full_bathroom_1/full_bathroom_1_01.jpeg'],
  },
  {
    id: 'suite-2',
    name: 'Garden Terrace Suite',
    subtitle: 'Direct access to lush tropical coffee gardens',
    capacity: '2 Guests',
    size: '75 m²',
    bed: 'King Bed',
    description: 'Opens directly onto the central courtyard garden. Floor-to-ceiling sliding glass doors let in the mountain breeze. Fitted with organic linen bedding, writing desk, and custom stone vanity.',
    highlights: ['Direct garden access', 'Private patio seating', 'Ensuite bathroom', 'Custom art pieces'],
    image: '/photos/bedroom_2/bedroom_2_01.jpeg',
    gallery: ['/photos/bedroom_2/bedroom_2_01.jpeg', '/photos/bedroom_2/bedroom_2_02.jpeg', '/photos/full_bathroom_2/full_bathroom_2_01.jpeg'],
  },
  {
    id: 'suite-3',
    name: 'Valley View Suite',
    subtitle: 'Elevated horizon views facing the sunset',
    capacity: '2 Guests',
    size: '65 m²',
    bed: 'King Bed',
    description: 'Situated on the upper wing with unobstructed sunset views over the Aburrá Valley. Includes private lounging nook, luxury bath amenities, and smart climate controls.',
    highlights: ['Sunset orientation', 'Custom cedar vanity', 'Smart ambient lighting', 'Silent ceiling fan'],
    image: '/photos/bedroom_3/bedroom_3_01.jpeg',
    gallery: ['/photos/bedroom_3/bedroom_3_01.jpeg', '/photos/bedroom_3/bedroom_3_02.jpeg', '/photos/full_bathroom_3/full_bathroom_3_01.jpeg'],
  },
  {
    id: 'suite-4',
    name: 'Courtyard Sanctuary Suite',
    subtitle: 'Quiet serenity adjacent to the internal water feature',
    capacity: '2 Guests',
    size: '60 m²',
    bed: 'Queen Bed',
    description: 'Tucked into the quieter east wing of the estate, surrounded by native flora and the sound of gently flowing water from the central fountain.',
    highlights: ['Courtyard view', 'Silent retreat atmosphere', 'Ensuite marble bath', 'Curated library'],
    image: '/photos/bedroom_4/bedroom_4_01.jpeg',
    gallery: ['/photos/bedroom_4/bedroom_4_01.jpeg', '/photos/full_bathroom_4/full_bathroom_4_01.jpeg'],
  },
  {
    id: 'suite-5-6',
    name: 'Family & Guest Suites (5 & 6)',
    subtitle: 'Flexible double suites for groups and families',
    capacity: '4-6 Guests',
    size: '120 m² total',
    bed: '2 King Beds or 4 Singles',
    description: 'Interconnecting luxury suites ideal for children or additional guests. Equipped with private ensuites, workspace desks, and individual garden access.',
    highlights: ['Interconnecting layout', 'Twin ensuite bathrooms', 'Smart TV entertainment', 'Garden view'],
    image: '/photos/bedroom_5/bedroom_5_01.jpeg',
    gallery: ['/photos/bedroom_5/bedroom_5_01.jpeg', '/photos/bedroom_6/bedroom_6_01.jpeg'],
  },
];

export const estateFeatures: EstateFeature[] = [
  {
    id: 'pool',
    title: '25m Saltwater Heated Infinity Pool',
    category: 'Wellness & Water',
    subtitle: 'Overlooking the rolling green mountains of Antioquia',
    description: 'Heated precisely to 28°C and treated with a gentle natural salt system. Includes shaded cabanas, submerged sun beds, and automated evening mood illumination.',
    image: '/photos/pool/pool_01.jpeg',
    specs: [
      { label: 'Length', value: '25 Meters' },
      { label: 'Temperature', value: 'Heated to 28°C' },
      { label: 'Water System', value: 'Natural Salt (No Chlorine)' },
    ],
  },
  {
    id: 'tennis',
    title: 'Professional Clay Tennis Court',
    category: 'Sports & Recreation',
    subtitle: 'Private court surrounded by native pine and palm trees',
    description: 'Engineered with professional-grade red clay for long rallies and smooth play. Night floodlighting permits evening matches up to 9 PM.',
    image: '/photos/courtyard/courtyard_01.jpeg',
    specs: [
      { label: 'Surface', value: 'Red Clay' },
      { label: 'Lighting', value: 'LED Night Lighting' },
      { label: 'Equipment', value: 'Rackets & Balls Included' },
    ],
  },
  {
    id: 'sauna',
    title: 'Finnish Cedar Sauna & Spa',
    category: 'Wellness & Spa',
    subtitle: 'Canadian cedar sauna with eucalyptus steam infusion',
    description: 'Crafted from aromatic Canadian cedar. Reaches up to 85°C with optional eucalyptus steam. Perfect before a cold plunge in the infinity pool.',
    image: '/photos/patio/patio_02.jpeg',
    specs: [
      { label: 'Capacity', value: 'Seats 6' },
      { label: 'Material', value: 'Canadian Cedar' },
      { label: 'Infusion', value: 'Organic Eucalyptus' },
    ],
  },
  {
    id: 'bar-dining',
    title: 'Speakeasy Bar & Open-Air Dining',
    category: 'Dining & Social',
    subtitle: 'Custom lit onyx bar with over 80 curated international & local spirits',
    description: 'Enjoy chef-prepared breakfast, lunch, and candlelit dinners on the grand teak dining table. The private bar is stocked with rare Colombian rums, wines, and craft beers.',
    image: '/photos/dining_area/dining_area_01.jpeg',
    specs: [
      { label: 'Dining Seating', value: '16 Persons' },
      { label: 'Bar Selection', value: '80+ Premium Spirits' },
      { label: 'Coffee', value: 'Artisanal Single-Origin Espresso' },
    ],
  },
  {
    id: 'games-room',
    title: 'Soundproof Games Room & Vintage Bowling',
    category: 'Entertainment',
    subtitle: 'Custom billiards, foosball, and private sound system',
    description: 'A subterranean lounge designed for late-night entertainment with acoustic treatment, retro bowling lane, billiards table, and plush leather seating.',
    image: '/photos/games_room/games_room_01.jpeg',
    specs: [
      { label: 'Sound System', value: 'Sonos High-Fidelity' },
      { label: 'Acoustics', value: '100% Soundproofed' },
      { label: 'Games', value: 'Billiards, Foosball & Bowling' },
    ],
  },
];

export const reviews: Review[] = [
  {
    id: 'r1',
    author: 'Alexander & Sophia Sterling',
    location: 'London, UK',
    date: 'February 2026',
    rating: 5,
    comment: 'Finca Libia surpassed every expectation. The infinity pool at sunset, the privacy, and the private chef made our family celebration unforgettable.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
  },
  {
    id: 'r2',
    author: 'Marcus Vance',
    location: 'New York, USA',
    date: 'January 2026',
    rating: 5,
    comment: 'Architectural masterpiece. The staff treated us like royalty and organized private helicopter tours over Guatapé. We will return every year.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
  },
  {
    id: 'r3',
    author: 'Elena & Mateo Rossi',
    location: 'Milan, Italy',
    date: 'December 2025',
    rating: 5,
    comment: 'The clay tennis court in the morning, followed by sauna and cold plunge in the pool. Absolute paradise 45 minutes from Medellín.',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200',
  },
];

export const photoGalleryCategories = [
  {
    name: 'Exterior & Architecture',
    photos: [
      '/photos/exterior/exterior_10.jpeg',
      '/photos/exterior/exterior_18.jpeg',
      '/photos/exterior/exterior_03.jpeg',
      '/photos/exterior/exterior_01.jpeg',
    ],
  },
  {
    name: 'Infinity Pool & Grounds',
    photos: [
      '/photos/pool/pool_01.jpeg',
      '/photos/pool/pool_02.jpeg',
      '/photos/pool/pool_03.jpeg',
      '/photos/patio/patio_01.jpeg',
    ],
  },
  {
    name: 'Suites & Bedrooms',
    photos: [
      '/photos/bedroom_1/bedroom_1_01.jpeg',
      '/photos/bedroom_2/bedroom_2_01.jpeg',
      '/photos/bedroom_3/bedroom_3_01.jpeg',
      '/photos/bedroom_4/bedroom_4_01.jpeg',
    ],
  },
  {
    name: 'Living & Dining',
    photos: [
      '/photos/living_room/living_room_02.jpeg',
      '/photos/living_room/living_room_04.jpeg',
      '/photos/dining_area/dining_area_01.jpeg',
      '/photos/dining_area/dining_area_02.jpeg',
    ],
  },
];
