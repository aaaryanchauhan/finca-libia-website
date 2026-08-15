export interface Suite {
  id: string;
  name: string;
  pdfName: string;
  subtitle: string;
  capacity: string;
  size: string;
  bed: string;
  description: string;
  highlights: string[];
  image: string;
  gallery: string[];
  bathroomGallery?: string[];
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
  airport: 'José María Córdova (MDE) — 6 minutes private transfer',
  capacity: 'Up to 14 guests across 6 private master suites',
  propertySize: '12 Acres of Private Mountain Grounds',
  rating: 4.98,
  reviewCount: 42,
  heroImages: [
    '/photos/exterior/exterior_10.jpeg',
    '/photos/pool/pool_01.jpeg',
    '/photos/living_room/living_room_02.jpeg',
    '/photos/courtyard/courtyard_01.jpeg',
    '/photos/bedroom_1/bedroom_1_01.jpeg',
  ],
};

export const suites: Suite[] = [
  {
    id: 'gold-room',
    name: 'The Gold Room (Grand Master)',
    pdfName: 'GOLD ROOM',
    subtitle: 'Panoramic mountain view with private open-air Jacuzzi',
    capacity: '2 Guests',
    size: '110 m²',
    bed: 'King Bed',
    description: 'The crowning suite of Finca Libia. Features soaring ceilings, hand-finished cedar woodwork, private wrap-around terrace with sun loungers, and an open-air marble bathroom with jacuzzi tub overlooking the valley.',
    highlights: ['Private Open-Air Jacuzzi', 'Wrap-Around Balcony', 'Walk-in Dressing Room', 'Ensuite Full Bath'],
    image: '/photos/bedroom_1/bedroom_1_01.jpeg',
    gallery: [
      '/photos/bedroom_1/bedroom_1_01.jpeg',
      '/photos/bedroom_1/bedroom_1_02.jpeg',
      '/photos/bedroom_1/bedroom_1_03.jpeg',
      '/photos/bedroom_1/bedroom_1_04.jpeg',
      '/photos/bedroom_1/bedroom_1_05.jpeg',
      '/photos/bedroom_1/bedroom_1_06.jpeg',
    ],
    bathroomGallery: [
      '/photos/full_bathroom_1/full_bathroom_1_01.jpeg',
      '/photos/full_bathroom_1/full_bathroom_1_02.jpeg',
      '/photos/full_bathroom_1/full_bathroom_1_03.jpeg',
      '/photos/full_bathroom_1/full_bathroom_1_04.jpeg',
    ],
  },
  {
    id: 'grey-room',
    name: 'The Grey Room (Garden Suite)',
    pdfName: 'GREY ROOM',
    subtitle: 'Direct access to lush tropical courtyard gardens',
    capacity: '2 Guests',
    size: '75 m²',
    bed: 'King Bed',
    description: 'Opens directly onto the central courtyard garden. Floor-to-ceiling sliding glass doors let in the mountain breeze. Fitted with organic linen bedding, writing desk, and custom stone vanity ensuite.',
    highlights: ['Direct Garden Access', 'Private Patio Seating', 'Double Stone Vanity', 'Rainfall Shower'],
    image: '/photos/bedroom_2/bedroom_2_01.jpeg',
    gallery: [
      '/photos/bedroom_2/bedroom_2_01.jpeg',
      '/photos/bedroom_2/bedroom_2_02.jpeg',
      '/photos/bedroom_2/bedroom_2_03.jpeg',
      '/photos/bedroom_2/bedroom_2_04.jpeg',
      '/photos/bedroom_2/bedroom_2_05.jpeg',
      '/photos/bedroom_2/bedroom_2_06.jpeg',
    ],
    bathroomGallery: [
      '/photos/full_bathroom_2/full_bathroom_2_01.jpeg',
      '/photos/full_bathroom_2/full_bathroom_2_02.jpeg',
      '/photos/full_bathroom_2/full_bathroom_2_03.jpeg',
      '/photos/full_bathroom_2/full_bathroom_2_04.jpeg',
      '/photos/full_bathroom_2/full_bathroom_2_05.jpeg',
      '/photos/full_bathroom_2/full_bathroom_2_06.jpeg',
    ],
  },
  {
    id: 'valley-view',
    name: 'Valley View Master Suite',
    pdfName: '2-GUEST ROOMS',
    subtitle: 'Elevated horizon views facing the sunset over coffee hills',
    capacity: '2 Guests',
    size: '65 m²',
    bed: 'King Bed',
    description: 'Situated on the upper wing with unobstructed sunset views over the Rionegro coffee valley. Includes private lounging nook, luxury bath amenities, and custom cedar wardrobe.',
    highlights: ['Sunset Orientation', 'Custom Cedar Vanity', 'Smart Ambient Lighting', 'Ensuite Bath'],
    image: '/photos/bedroom_3/bedroom_3_01.jpeg',
    gallery: [
      '/photos/bedroom_3/bedroom_3_01.jpeg',
      '/photos/bedroom_3/bedroom_3_02.jpeg',
      '/photos/bedroom_3/bedroom_3_03.jpeg',
      '/photos/bedroom_3/bedroom_3_04.jpeg',
      '/photos/bedroom_3/bedroom_3_05.jpeg',
    ],
    bathroomGallery: [
      '/photos/full_bathroom_3/full_bathroom_3_01.jpeg',
      '/photos/full_bathroom_3/full_bathroom_3_02.jpeg',
      '/photos/full_bathroom_3/full_bathroom_3_03.jpeg',
      '/photos/full_bathroom_3/full_bathroom_3_04.jpeg',
      '/photos/full_bathroom_3/full_bathroom_3_05.jpeg',
    ],
  },
  {
    id: 'courtyard-sanctuary',
    name: 'Courtyard Sanctuary Suite',
    pdfName: '2-GUEST ROOMS',
    subtitle: 'Quiet serenity adjacent to the internal water feature',
    capacity: '2 Guests',
    size: '60 m²',
    bed: 'Queen Bed',
    description: 'Tucked into the tranquil east wing of the estate, surrounded by native flora and the soft trickle of water from the central garden courtyard fountain.',
    highlights: ['Courtyard View', 'Silent Retreat Acoustics', 'Ensuite Full Bath', 'Organic Linens'],
    image: '/photos/bedroom_4/bedroom_4_01.jpeg',
    gallery: [
      '/photos/bedroom_4/bedroom_4_01.jpeg',
      '/photos/bedroom_4/bedroom_4_02.jpeg',
      '/photos/bedroom_4/bedroom_4_03.jpeg',
      '/photos/bedroom_4/bedroom_4_04.jpeg',
      '/photos/bedroom_4/bedroom_4_05.jpeg',
    ],
    bathroomGallery: [
      '/photos/full_bathroom_4/full_bathroom_4_01.jpeg',
    ],
  },
  {
    id: 'black-room',
    name: 'The Black Room (Deluxe Suite)',
    pdfName: 'BLACK ROOM',
    subtitle: 'Modern luxury suite with obsidian stone & dark timber tones',
    capacity: '2 Guests',
    size: '70 m²',
    bed: 'King Bed',
    description: 'A striking master suite featuring matte black wall accents, warm ambient backlighting, premium audio system, and immediate pool deck access.',
    highlights: ['Obsidian Aesthetic', 'Pool Terrace Access', 'Smart Ambient Lighting', 'Ensuite Full Bath'],
    image: '/photos/bedroom_5/bedroom_5_01.jpeg',
    gallery: [
      '/photos/bedroom_5/bedroom_5_01.jpeg',
      '/photos/bedroom_5/bedroom_5_02.jpeg',
      '/photos/bedroom_5/bedroom_5_03.jpeg',
      '/photos/bedroom_5/bedroom_5_04.jpeg',
      '/photos/bedroom_5/bedroom_5_05.jpeg',
    ],
  },
  {
    id: 'guest-wing',
    name: 'Guest Wing Suite',
    pdfName: '2-GUEST ROOMS',
    subtitle: 'Flexible double suite with serene forest garden views',
    capacity: '2 Guests',
    size: '55 m²',
    bed: 'Double / Twin Beds',
    description: 'Comfortable guest suite designed for flexibility. Offers garden vistas, writing desk, and quiet privacy adjacent to the library lounge.',
    highlights: ['Garden Vistas', 'Writing Desk', 'Organic Bedding', 'Dedicated Storage'],
    image: '/photos/bedroom_6/bedroom_6_01.jpeg',
    gallery: [
      '/photos/bedroom_6/bedroom_6_01.jpeg',
      '/photos/bedroom_6/bedroom_6_02.jpeg',
      '/photos/bedroom_6/bedroom_6_03.jpeg',
      '/photos/bedroom_6/bedroom_6_04.jpeg',
    ],
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
    title: 'Professional Red Clay Tennis Court',
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
    title: 'Finnish Cedar Sauna & Steam Spa',
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
    title: 'Speakeasy Bar & Gourmet Dining Salon',
    category: 'Dining & Social',
    subtitle: 'Custom lit bar with over 80 curated international & local spirits',
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
    subtitle: 'Custom billiards, foosball, ping pong & retro bowling lane',
    description: 'A subterranean lounge designed for late-night entertainment with acoustic treatment, retro bowling lane, ping pong, billiards, and high-fidelity sound.',
    image: '/photos/games_room/games_room_01.jpeg',
    specs: [
      { label: 'Sound System', value: 'Sonos High-Fidelity' },
      { label: 'Acoustics', value: '100% Soundproofed' },
      { label: 'Games', value: 'Bowling, Billiards, Foosball & Ping Pong' },
    ],
  },
  {
    id: 'fitness-gym',
    title: 'Fitness Gym & Movement Studio',
    category: 'Fitness & Health',
    subtitle: '24-hour gym with floor-to-ceiling garden views',
    description: 'Equipped with free weights, cable strength machine, treadmill, stationary bike, and yoga mats. Glass walls look directly onto the tropical gardens.',
    image: '/photos/gym/gym_01.jpeg',
    specs: [
      { label: 'Access', value: '24 Hours' },
      { label: 'Equipment', value: 'Free Weights, Cardio & Cable Machine' },
      { label: 'View', value: 'Garden Landscape' },
    ],
  },
  {
    id: 'farm-animals',
    title: '12-Acre Farm & Resident Animals',
    category: 'Farm & Nature',
    subtitle: 'Friendly Swiss-German cows, llamas, Bruno & Luna',
    description: 'Pastures surrounding the villa are home to friendly llamas and Swiss cows, alongside Bruno the golden retriever and Luna the tabby cat.',
    image: '/photos/additional_photos/alpaca.jpeg',
    specs: [
      { label: 'Pastures', value: '12 Mountain Acres' },
      { label: 'Animals', value: 'Llamas, Swiss Cows, Dogs & Cats' },
      { label: 'Policy', value: 'Pet-Friendly & Gentle Off-Leash' },
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
    comment: 'Architectural masterpiece. Meyer and the staff treated us like royalty and organized private helicopter tours over Guatapé. We will return every year.',
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
      '/photos/exterior/exterior_05.jpeg',
      '/photos/exterior/exterior_08.jpeg',
      '/photos/exterior/exterior_12.jpeg',
      '/photos/exterior/exterior_15.jpeg',
    ],
  },
  {
    name: 'Infinity Pool & Grounds',
    photos: [
      '/photos/pool/pool_01.jpeg',
      '/photos/pool/pool_02.jpeg',
      '/photos/pool/pool_03.jpeg',
      '/photos/pool/pool_04.jpeg',
      '/photos/patio/patio_01.jpeg',
      '/photos/patio/patio_02.jpeg',
      '/photos/patio/patio_05.jpeg',
      '/photos/patio/patio_08.jpeg',
    ],
  },
  {
    name: 'Master Suites & Bedrooms',
    photos: [
      '/photos/bedroom_1/bedroom_1_01.jpeg',
      '/photos/bedroom_2/bedroom_2_01.jpeg',
      '/photos/bedroom_3/bedroom_3_01.jpeg',
      '/photos/bedroom_4/bedroom_4_01.jpeg',
      '/photos/bedroom_5/bedroom_5_01.jpeg',
      '/photos/bedroom_6/bedroom_6_01.jpeg',
      '/photos/full_bathroom_1/full_bathroom_1_01.jpeg',
      '/photos/full_bathroom_2/full_bathroom_2_01.jpeg',
    ],
  },
  {
    name: 'Living & Dining',
    photos: [
      '/photos/living_room/living_room_02.jpeg',
      '/photos/living_room/living_room_04.jpeg',
      '/photos/living_room/living_room_06.jpeg',
      '/photos/dining_area/dining_area_01.jpeg',
      '/photos/dining_area/dining_area_03.jpeg',
      '/photos/full_kitchen/full_kitchen_01.jpeg',
      '/photos/full_kitchen/full_kitchen_04.jpeg',
    ],
  },
  {
    name: 'Recreation & Spa',
    photos: [
      '/photos/games_room/games_room_01.jpeg',
      '/photos/games_room/games_room_03.jpeg',
      '/photos/games_room/games_room_06.jpeg',
      '/photos/courtyard/courtyard_01.jpeg',
      '/photos/gym/gym_01.jpeg',
      '/photos/patio/patio_03.jpeg',
    ],
  },
  {
    name: 'Farm Animals & Pets',
    photos: [
      '/photos/additional_photos/dog.jpeg',
      '/photos/additional_photos/alpaca.jpeg',
      '/photos/additional_photos/cow.jpeg',
      '/photos/additional_photos/dogs.jpeg',
      '/photos/additional_photos/pets.jpeg',
    ],
  },
];
