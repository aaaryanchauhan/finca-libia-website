export interface Suite {
  id: string;
  name: string;
  pdfName: string;
  subtitle: string;
  capacity: string;
  size?: string;
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
  tripType?: string;
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
  category: 'Staff & Service' | 'Location & Airport' | 'Privacy & Security' | 'Booking & Amenities';
}

export const villaInfo = {
  name: 'Finca Libia',
  tagline: 'Private Luxury Estate & Sanctuary',
  location: 'Medellín Valley, Antioquia, Colombia',
  airport: 'José María Córdova (MDE) — 6 minutes away',
  capacity: 'Up to 14 guests across 6 private master suites',
  propertySize: '3.5 Acres of Private Mountain Grounds',
  rating: 5.0,
  reviewCount: 12,
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
    name: 'Grey Room',
    pdfName: 'GREY ROOM',
    subtitle: 'Panoramic mountain view with private balcony',
    capacity: '2 Guests',
    bed: 'King Bed',
    description: 'The crowning suite of Finca Libia. Features soaring ceilings, hand-finished cedar woodwork, private balcony terrace with mountain views, and an ensuite marble bathroom equipped with a steam room shower.',
    highlights: ['Private Balcony', 'Steam Room Shower', 'Walk-in Dressing Room', 'Ensuite Full Bath'],
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
    name: 'Gold Room',
    pdfName: 'GOLD ROOM',
    subtitle: 'Private balcony terrace with mountain views & soaking bathtub',
    capacity: '2 Guests',
    bed: 'King Bed',
    description: 'Elegant bedroom suite featuring private balcony access, floor-to-ceiling sliding glass doors letting in the mountain breeze, organic linen bedding, writing desk, and an ensuite bathroom equipped with a luxurious soaking bathtub.',
    highlights: ['Private Balcony', 'Soaking Bathtub', 'Organic Linen Bedding', 'Rainfall Shower'],
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
    name: 'Black Room',
    pdfName: 'BLACK ROOM',
    subtitle: 'Elevated sunset orientation with private steam shower',
    capacity: '2 Guests',
    bed: 'King Bed',
    description: 'Situated on the upper wing with unobstructed sunset views over the Rionegro coffee valley. Features a private steam shower, lounging nook, luxury bath amenities, and ambient lighting.',
    highlights: ['Sunset Orientation', 'Steam Shower', 'Smart Ambient Lighting', 'Private Lounging Nook'],
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
    name: 'Green Guest Room',
    pdfName: 'GREEN GUEST ROOM',
    subtitle: 'Quiet serenity adjacent to the internal water feature',
    capacity: '2 Guests',
    bed: 'Queen Bed with Trundle',
    description: 'Tucked into the tranquil east wing of the estate, surrounded by native flora and the soft trickle of water from the central garden courtyard fountain.',
    highlights: [],
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
    name: 'Black Guest Room',
    pdfName: 'BLACK GUEST ROOM',
    subtitle: 'Modern luxury suite with obsidian stone & dark timber tones',
    capacity: '2 Guests',
    bed: 'Queen Bed with Trundle',
    description: 'A striking guest suite featuring matte black wall accents, warm ambient backlighting, queen bed with pull-out trundle, premium audio system, and immediate pool terrace access.',
    highlights: [],
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
    name: 'Guest House',
    pdfName: 'GUEST HOUSE',
    subtitle: 'Independent private house with full kitchen, fireplace & garden views',
    capacity: '2 Guests',
    bed: 'King Bed',
    description: 'Independent guest house featuring a king-sized bed, cozy fireplace, fully equipped private kitchen, flat-screen TV, and a private bathroom with shower.',
    highlights: ['Fireplace', 'Full Kitchen', 'TV', 'Private bathroom with shower'],
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
    title: '25m Saltwater Heated Pool',
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
    description: 'Crafted from aromatic Canadian cedar. Reaches up to 85°C with optional eucalyptus steam. Perfect before a cold plunge in the pool.',
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

export const reviewSubcategories = [
  { label: 'Cleanliness', score: 5.0 },
  { label: 'Accuracy', score: 5.0 },
  { label: 'Check-in', score: 5.0 },
  { label: 'Communication', score: 5.0 },
  { label: 'Location', score: 5.0 },
  { label: 'Value', score: 4.9 },
];

export const guestMentionsTags = [
  { tag: 'Hospitality', count: 11 },
  { tag: 'Cleanliness', count: 4 },
  { tag: 'View', count: 3 },
  { tag: 'Indoor spaces', count: 3 },
  { tag: 'Location', count: 3 },
  { tag: 'Hot tub', count: 2 },
  { tag: 'Pool', count: 2 },
  { tag: 'Amenities', count: 2 },
  { tag: 'Family', count: 2 },
  { tag: 'Accuracy', count: 2 },
];

export const reviews: Review[] = [
  {
    id: 'r1',
    author: 'Patrick',
    location: 'Nassau, The Bahamas',
    date: '1 week ago',
    rating: 5,
    tripType: 'Stayed a few nights',
    comment: 'Amazing place, Amazing Host. Meyer, Nancy, Liliana and Rafa, thank you very much for making us feel at home. Your flexibility, availability and always ready to run the extra made our stay magical. We will come back.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
  },
  {
    id: 'r2',
    author: 'Irene',
    location: '13 years on Airbnb',
    date: '2 weeks ago',
    rating: 5,
    tripType: 'Stayed a few nights',
    comment: 'Very nice house, great furnishings and excellent options for families, with bowling and tennis. The children loved the animals, especially the dogs, but also the donkey. Nancy, Rafa and his wife were very supportive with everything. All in all highly recommended, we will be happy to come back!',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
  },
  {
    id: 'r3',
    author: 'Ellena',
    location: 'Monterey, California',
    date: 'June 2026',
    rating: 5,
    tripType: 'Stayed with kids',
    comment: 'Thank you for having us at your home. We have traveled all over the world and this is one of the best homes we have stayed in. Your staff was A+++ and you were so responsive and caring during our stay that we will be back for sure.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
  },
  {
    id: 'r4',
    author: 'Zach',
    location: 'Chapel Hill, North Carolina',
    date: 'December 2025',
    rating: 5,
    tripType: 'Group trip',
    comment: 'Meyer’s house is absolutely perfect. He was an excellent host and extremely responsive. Anything we needed, he took care of. I recommend this place to anyone looking for the perfect vacation in Colombia. The animals on the property were so fun to play with and perfect for kids. 10/10 experience and I will be back again!',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
  },
  {
    id: 'r5',
    author: 'Mark',
    location: '4 years on Airbnb',
    date: 'December 2025',
    rating: 5,
    tripType: 'Stayed a few nights',
    comment: 'What an amazing finca! So much fun and such a great location. The animals, amenities and the view are unmatched!',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
  },
  {
    id: 'r6',
    author: 'Ali',
    location: '11 years on Airbnb',
    date: 'April 2025',
    rating: 5,
    tripType: 'Stayed a few nights',
    comment: 'Hands down the best Airbnb experience I’ve ever had — and I’ve traveled all over the world. This place in Colombia is absolutely magical. Set out on beautiful land surrounded by nature and animals, it’s a true escape from the world, yet filled with every possible luxury. From the Jacuzzi and pool to the bowling alley and games room, there was never a dull moment. The staff at the house were incredible — always helpful, warm, and ready to make sure everything was perfect. The host went above and beyond. Whatever we asked for, he made it happen with no hesitation. That level of service is rare, and it made a huge difference. The property itself is stunning — spacious, peaceful, and designed with so much care. I’ve never stayed anywhere like it before. Everyone in our group had an amazing time, and there’s no doubt we’ll be returning. If you’re looking for an unforgettable experience in Colombia, don’t think twice. This is the place.',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200',
  },
  {
    id: 'r7',
    author: 'Jenny',
    location: 'Miami, Florida',
    date: 'February 2025',
    rating: 5,
    tripType: 'Group trip',
    comment: 'Our stay at Meyer\'s place was absolutely perfect! Finca Libia was spotless, beautifully decorated, modern, and exactly as pictured in the listing. Meyer was incredibly responsive and helpful throughout our stay, providing great local recommendations. We especially loved the great outdoors, balconies views, friendly animals, and the well stocked kitchen that made cooking meals a breeze, perfect layout for spending time with friends and family. We felt right at home and would definitely book again for our next trip to Medellin.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
  },
  {
    id: 'r8',
    author: 'Betty',
    location: 'Miami, Florida',
    date: 'December 2024',
    rating: 5,
    tripType: 'Stayed a few nights',
    comment: 'Hello, Meyer was an exceptional host. He responded promptly within five minutes to any questions or requests we had. He also provided a detailed PDF packed with helpful information, including restaurant recommendations, taxi services, emergency contacts, and must see attractions. The property features a stunning fireplace that kept us warm on chilly nights and offers breathtaking views from the backyard. Additionally, the house is equipped with plenty of fun activities, such as arcade games, ping pong, tennis/pickleball, basketball, and bowling, ensuring entertainment for everyone. As well as the most friendly farm animals.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200',
  },
  {
    id: 'r9',
    author: 'Brendan',
    location: 'San Diego, California',
    date: 'November 2024',
    rating: 5,
    tripType: 'Group trip',
    comment: 'I can’t recommend Meyer’s Farmhouse Villa in Guarne, Antioquia, enough! This stunning farmhouse is ideally located just a 30-40 minute drive from Medellín and close to the airport, making it super convenient yet peaceful. The property is surrounded by beautiful farm animals—alpacas, cows, donkeys, chickens, ducks, and two incredibly friendly dogs that add to the welcoming atmosphere. The villa itself is immaculate, with high-end finishes that showcase incredible attention to detail. Nancy, and the on-site staff, kept the entire place spotless and was always available to assist, going above and beyond to make our stay comfortable. Meyer, the host, was outstandingly responsive and communicative, even accommodating some last-minute requests with ease. I hosted a retreat for my business partners and clients, and they were all blown away by the property. The pool, hot tub, sauna, steam room, and gym were exceptional amenities, while the fireplace and thoughtfully curated accent lighting created the perfect ambiance.',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=200',
  },
  {
    id: 'r10',
    author: 'Simpson',
    location: '8 years on Airbnb',
    date: 'September 2024',
    rating: 5,
    tripType: 'Stayed a few nights',
    comment: 'I recently had the pleasure of staying at a wonderful farm property and I must say, it exceeded all my expectations. The maid was extremely friendly and attentive, ensuring that the house was spotless and comfortable throughout my stay. The animals on the farm added such a charming and picturesque touch to the surroundings, making me feel right at home. Not only was the house clean and accessible, but it was also exactly as advertised - no surprises or disappointments. The host was incredibly friendly and responsive, always available to address any questions or concerns I had. Their hospitality truly made my experience even more enjoyable. I can confidently say that I would return to this property in a heartbeat. Everything from the maid to the host to the farm animals contributed to a memorable and relaxing stay. If you\'re looking for a peaceful getaway with top-notch service, I highly recommend this property. Thank you for making my stay so delightful! Thank you Meyer!',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200',
  },
  {
    id: 'r11',
    author: 'Sandra',
    location: '4 years on Airbnb',
    date: 'January 2024',
    rating: 5,
    tripType: 'Group trip',
    comment: 'great experience, 100% recommended. Good service, good communication, clean and very nice place',
    avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=200',
  },
  {
    id: 'r12',
    author: 'Mauricio',
    location: 'United Kingdom',
    date: 'January 2024',
    rating: 5,
    tripType: 'Stayed a few nights',
    comment: 'It was an honer to be the first person to stay at the Airbnb for the first time eveything was amazing Nancy and the dogs where super friendly the experience was spectacular, wifi & everything was great. Host went above and beyond, this could be the best service & Airbnb I have ever had. I would 100% recommend this specific Airbnb to anyone & will definitely be coming back!',
    avatar: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&q=80&w=200',
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
    name: 'Pool & Grounds',
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
    id: 'entrance',
    number: '01',
    category: 'Architecture',
    title: 'Grand Entrance & Facade',
    description: 'Newly built luxury farmhouse architecture framed by geometric stone lattices and mountain views.',
    image: '/photos/exterior/exterior_10.jpeg',
    details: 'Architectural luxury entrance crafted with hand-cut stone and expansive glass.',
  },
  {
    id: 'living',
    number: '02',
    category: 'Living Space',
    title: 'Main Living Room',
    description: 'Cathedral wood ceilings, plush sofas, and a grand fireplace for cool mountain evenings.',
    image: '/photos/living_room/living_room_02.jpeg',
    details: 'Firewood is stocked underneath. Light the fire at dusk for cozy warmth.',
  },
  {
    id: 'kitchen',
    number: '03',
    category: 'Culinary',
    title: 'Gourmet Kitchen',
    description: 'Full chef kitchen equipped for private dining, breakfast prep, and espresso service.',
    image: '/photos/full_kitchen/full_kitchen_01.jpeg',
    details: 'Equipped with commercial range, center island, and artisanal coffee station.',
  },
  {
    id: 'bar-dining',
    number: '04',
    category: 'Dining & Social',
    title: 'Dining Salon & Speakeasy Bar',
    description: 'Grand teak dining table seating 16 guests, flanked by an 80-bottle backlit speakeasy bar.',
    image: '/photos/dining_area/dining_area_01.jpeg',
    details: 'Self-service bar stocked with Colombian rums, wines, and craft beverages.',
  },
  {
    id: 'grey-room',
    number: '05',
    category: 'Gold Room',
    title: 'Gold Room',
    description: 'Sleek stone bedroom suite featuring private balcony access and mountain valley views.',
    image: '/photos/bedroom_2/bedroom_2_01.jpeg',
    details: 'Features a private balcony and an ensuite bathroom equipped with a soaking bathtub.',
  },
  {
    id: 'black-room',
    number: '06',
    category: 'Black Guest Room',
    title: 'Black Guest Room',
    description: 'Obsidian interior design suite with king bed and immediate pool terrace access.',
    image: '/photos/bedroom_5/bedroom_5_01.jpeg',
    details: 'Matte black architectural finishes, smart ambient lighting & premium audio.',
  },
  {
    id: 'gold-room',
    number: '07',
    category: 'Grey Room',
    title: 'Grey Room',
    description: 'The master bedroom featuring cathedral ceiling, private balcony & steam room shower.',
    image: '/photos/bedroom_1/bedroom_1_01.jpeg',
    details: 'Includes a private balcony with mountain views and an ensuite steam room shower.',
  },
  {
    id: 'guest-room-1',
    number: '08',
    category: 'Black Room',
    title: 'Black Room',
    description: 'Elevated guest suite featuring a private steam shower and sunset orientation over the coffee valley.',
    image: '/photos/bedroom_3/bedroom_3_01.jpeg',
    details: 'Ambient wall lighting, lounging nook, and private steam shower.',
  },
  {
    id: 'guest-room-2',
    number: '09',
    category: 'Green Guest Room',
    title: 'Green Guest Room',
    description: 'Quiet serenity adjacent to central fountain and native tropical flora.',
    image: '/photos/bedroom_4/bedroom_4_01.jpeg',
    details: 'Gentle water fountain sounds and peaceful courtyard views for restful sleep.',
  },
  {
    id: 'cozy-corners',
    number: '10',
    category: 'Estate Lounges',
    title: 'Cozy corners all around the property',
    description: 'Thoughtfully positioned lounging nooks, outdoor hammocks, daybeds, and courtyard reading spots across 12 acres.',
    image: '/photos/patio/patio_01.jpeg',
    details: 'Quiet sanctuaries designed for reading, coffee, and relaxing in nature.',
  },
  {
    id: 'pool',
    number: '11',
    category: 'Water & Wellness',
    title: 'Pool',
    description: '25-meter pool heated to 28°C with saltwater treatment and valley views.',
    image: '/photos/pool/pool_01.jpeg',
    details: 'West orientation catches golden hour sunset perfectly.',
  },
  {
    id: 'sauna',
    number: '12',
    category: 'Wellness Spa',
    title: 'Sauna',
    description: 'Traditional Finnish cedar sauna crafted from Canadian wood, heating up to 85°C.',
    image: '/photos/patio/patio_02.jpeg',
    details: 'Pair a 15-minute sauna session with a cold pool plunge for thermal restoration.',
  },
  {
    id: 'steam-room',
    number: '13',
    category: 'Wellness Spa',
    title: 'Steam Room',
    description: 'Eucalyptus steam bath designed for muscle recovery and deep relaxation.',
    image: '/photos/patio/patio_04.jpeg',
    details: 'Touchpad controls activate dense eucalyptus-infused steam within minutes.',
  },
  {
    id: 'play-court',
    number: '14',
    category: 'Sports & Recreation',
    title: 'Play Court',
    description: 'Professional red clay tennis & pickleball court with basketball hoop and LED floodlights.',
    image: '/photos/courtyard/courtyard_01.jpeg',
    details: 'Rackets, balls, and equipment provided in the side pavilion cabinet.',
  },
  {
    id: 'poolside-fireplace',
    number: '15',
    category: 'Outdoor Living',
    title: 'Poolside fireplace',
    description: 'Sunken fire pit and open-air poolside fireplace for evening warmth and stargazing.',
    image: '/photos/patio/patio_03.jpeg',
    details: 'Light the poolside fire at dusk for ambiance by the water.',
  },
  {
    id: 'games',
    number: '16',
    category: 'Entertainment Hub',
    title: 'Games room with foosball table, table tennis, arcade and racing simulator',
    description: 'Soundproof entertainment lounge featuring foosball, table tennis, arcade games, racing simulator, billiards, and bowling.',
    image: '/photos/games_room/games_room_01.jpeg',
    details: 'High-fidelity audio system and multi-player arcade equipment.',
  },
  {
    id: 'gym',
    number: '17',
    category: 'Fitness & Health',
    title: 'Private Fitness Gym',
    description: '24-hour private gym with free weights, cable machine, treadmill, stationary bike, and garden vistas.',
    image: '/photos/gym/gym_01.jpeg',
    details: 'Floor-to-ceiling glass wall opening directly to lush garden views.',
  },
  {
    id: 'farm-animals',
    number: '18',
    category: 'Farm & Wildlife',
    title: 'Farm Animals',
    description: 'Friendly alpacas, Swiss cows, Bruno the golden retriever, Luna the cat, donkeys, and farm pets roaming 12 mountain acres.',
    image: '/photos/additional_photos/alpaca.jpeg',
    details: 'Guests can pet and feed animals under staff supervision during morning pasture walks.',
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
    id: 'sommelier-tasting',
    name: 'Private Sommelier Rum & Wine Tasting',
    pricePerStay: 600,
    description: 'Guided evening tasting of rare vintage Colombian rums & reserve South American wines.',
  },
  {
    id: 'wellness-spa',
    name: 'In-Villa Poolside Massage Spa Day',
    pricePerStay: 800,
    description: 'Full day of deep tissue massages & aromatic body scrubs poolside.',
  },
];

export const websiteFaqs: FaqItem[] = [
  {
    category: 'Staff & Service',
    question: 'What staffing and services are included with every reservation?',
    answer: 'Finca Libia includes cleaning services and groundskeeping during standard hours, along with dedicated concierge assistance to ensure a smooth stay.',
  },
  {
    category: 'Location & Airport',
    question: 'How far is Finca Libia from Medellín International Airport (MDE)?',
    answer: 'Finca Libia is located just 6 minutes away from José María Córdova International Airport (MDE) in Rionegro.',
  },
  {
    category: 'Privacy & Security',
    question: 'Is the property 100% private and gated?',
    answer: 'Absolutely. The entire 3.5-acre estate is strictly 100% exclusive to your group. There are no shared amenities, other guests, or public access. Gated security and discreet estate staff ensure absolute privacy.',
  },
  {
    category: 'Booking & Amenities',
    question: 'What is the maximum guest capacity across the 6 suites?',
    answer: 'Finca Libia features 6 master suites that accommodate up to 14 guests comfortably with plush organic linens, individual ensuite full bathrooms, and climate control.',
  },
  {
    category: 'Booking & Amenities',
    question: 'Is the 25m pool heated?',
    answer: 'Yes, our 25-meter saltwater pool is heated year-round to a precise 28°C (82°F) and treated with a gentle natural salt system (no harsh chlorine).',
  },
  {
    category: 'Staff & Service',
    question: 'What are the check-in and check-out times?',
    answer: 'Standard check-in is at 3:00 PM and check-out is at 11:00 AM. Flexible early arrival or late departure can be arranged based on availability.',
  },
];
