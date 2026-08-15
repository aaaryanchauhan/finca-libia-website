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

export interface RateAddon {
  id: string;
  name: string;
  pricePerStay: number;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'Staff & Service' | 'Location & Helipad' | 'Privacy & Security' | 'Booking & Amenities';
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
    description: 'A striking master suite featuring matte black wall accents, warm ambient backlighting, premium audio system, and immediate pool terrace access.',
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
];

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
    category: 'Wellness & Fitness',
    title: 'Private Fitness Gym',
    description: 'Fully equipped 24-hour fitness gym with mountain valley vistas.',
    image: '/photos/gym/gym_01.jpeg',
    details: 'Equipped with cardio machines, free weights, and stretching mats.',
  },
];

export const luxuryAddonsList: RateAddon[] = [
  {
    id: 'private-chef',
    name: 'In-Villa Master Chef Service',
    pricePerStay: 1200,
    description: '3 meals prepared daily by top Medellín executive chef with custom dietary menus.',
  },
  {
    id: 'helipad-charter',
    name: 'Guatapé Helicopter Excursion',
    pricePerStay: 1800,
    description: 'Direct VIP helipad charter flight over El Peñol rock & Guatapé reservoir.',
  },
  {
    id: 'sommelier-tasting',
    name: 'Private Sommelier Rum & Wine Tasting',
    pricePerStay: 600,
    description: 'Guided evening tasting of rare vintage Colombian rums & reserve South American wines.',
  },
  {
    id: 'wellness-spa',
    name: 'In-Villa Poolside Massage Spa Day',
    pricePerStay: 800,
    description: 'Full day of deep tissue massages & aromatic body scrubs by the infinity pool.',
  },
];

export const websiteFaqs: FaqItem[] = [
  {
    category: 'Staff & Service',
    question: 'Is full private staff included with every reservation?',
    answer: 'Yes. Finca Libia includes daily housekeeping, private butler service, groundskeeping, and dedicated concierge management with every booking. In-villa private chef service can be added for seamless dining.',
  },
  {
    category: 'Location & Helipad',
    question: 'How far is Finca Libia from Medellín International Airport (MDE)?',
    answer: 'Finca Libia is located just 45 minutes by private SUV from José María Córdova International Airport (MDE) in Rionegro. Alternatively, guests can land directly on our private on-site helipad in just 6 minutes.',
  },
  {
    category: 'Privacy & Security',
    question: 'Is the property 100% private and gated?',
    answer: 'Absolutely. The entire 12-acre estate is strictly 100% exclusive to your group. There are no shared amenities, other guests, or public access. Gated security and discreet estate staff ensure absolute privacy.',
  },
  {
    category: 'Booking & Amenities',
    question: 'What is the maximum guest capacity across the 6 suites?',
    answer: 'Finca Libia features 6 master suites that accommodate up to 14 guests comfortably with plush organic linens, individual ensuite full bathrooms, and climate control.',
  },
  {
    category: 'Booking & Amenities',
    question: 'Is the 25m infinity pool heated?',
    answer: 'Yes, our 25-meter saltwater infinity pool is heated year-round to a precise 28°C (82°F) and treated with a gentle natural salt system (no harsh chlorine).',
  },
  {
    category: 'Location & Helipad',
    question: 'Can you arrange custom helicopter tours over Guatapé?',
    answer: 'Yes! Our private concierge team arranges direct helipad pickups from Finca Libia for scenic flights over El Peñol Rock, the lakes of Guatapé, or the coffee mountains of Antioquia.',
  },
  {
    category: 'Staff & Service',
    question: 'What are the check-in and check-out times?',
    answer: 'Standard check-in is at 3:00 PM and check-out is at 11:00 AM. Flexible early arrival or late departure can be arranged based on availability.',
  },
];
