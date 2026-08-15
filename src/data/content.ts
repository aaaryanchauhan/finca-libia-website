import type {
  Amenity,
  Bedroom,
  ExploreCategory,
  ItineraryPace,
  ItineraryDay,
  Resident,
  PropertyStorySection,
  TourStop,
  MemoryEntry,
} from '@/types';

export const property = {
  name: 'Finca Libia',
  tagline: 'Your private guide to the estate & Medellín.',
  hostName: 'Meyer Ohayon',
  hostPhone: '+50 766748386',
  heroImage: '/photos/exterior/exterior_18.jpeg',
  heroImageDesktop: '/photos/exterior/exterior_10.jpeg',
  heroImageAlt: '/photos/exterior/exterior_18.jpeg',
  heroImageAltDesktop: '/photos/exterior/exterior_10.jpeg',
  location: 'Medellín / Rionegro, Colombia',
  airportDistance: '6 minutes from MDE Airport (Rionegro)',
  cityDistance: '25 minutes to El Poblado / Provenza (Medellín)',
  weather: { temp: '24°', condition: 'Partly cloudy' },
  guestName: 'Aryan',
  arrivalDate: 'August 15',
  daysUntilArrival: 2,
  stayLength: 3,
  wifi: {
    inside: { network: 'HENAO_SAND', password: '12345678' },
    grounds: { network: 'FINCA_LIBIA', password: '12345678' },
  },
  checkInTime: 'Flexible',
  checkOutTime: '12:00 PM',
  taxis: [
    { name: 'Jhovan', phone: '+57 (300) 594-9206' },
    { name: 'Esteban', phone: '+57 (312) 424-2132' },
  ],
  essentialsDeliveryWhatsApp: '+57 322 4937062',
  emergencyContacts: {
    guarnePolice: '6044950437',
    rionegroPolice: '3167430642',
    ambulanceFire: '3113814829 / 3108408678',
    hostDirect: '+50 766748386',
  },
  houseRules: [
    'No indoor smoking',
    'Pet-Friendly (friendly off-leash dogs & farm animals reside on grounds)',
    'No unregistered visitors or unapproved parties',
    'Lock windows and doors when departing',
  ],
};

export const bedrooms: Bedroom[] = [
  {
    id: 'bedroom-1',
    name: 'Gold Room',
    pdfName: 'GOLD ROOM',
    subtitle: 'Grand Master Suite with mountain sunset view & open-air Jacuzzi',
    capacity: '2 Guests',
    bedType: 'King Bed',
    description: 'The premier master suite at Finca Libia. Features warm gold accents, cathedral ceilings, private wrap-around terrace, and an ensuite bath with a private jacuzzi looking out over the mountain valley.',
    photos: [
      '/photos/bedroom_1/bedroom_1_01.jpeg',
      '/photos/bedroom_1/bedroom_1_02.jpeg',
      '/photos/bedroom_1/bedroom_1_03.jpeg',
      '/photos/bedroom_1/bedroom_1_04.jpeg',
      '/photos/bedroom_1/bedroom_1_05.jpeg',
      '/photos/bedroom_1/bedroom_1_06.jpeg',
    ],
    bathroomPhotos: [
      '/photos/full_bathroom_1/full_bathroom_1_01.jpeg',
      '/photos/full_bathroom_1/full_bathroom_1_02.jpeg',
      '/photos/full_bathroom_1/full_bathroom_1_03.jpeg',
      '/photos/full_bathroom_1/full_bathroom_1_04.jpeg',
    ],
    features: ['Private Jacuzzi', 'Wrap-around Balcony', 'Walk-in Dressing Room', 'Ensuite Full Bath'],
  },
  {
    id: 'bedroom-2',
    name: 'Grey Room',
    pdfName: 'GREY ROOM',
    subtitle: 'Garden Terrace Suite with direct courtyard access',
    capacity: '2 Guests',
    bedType: 'King Bed',
    description: 'Sleek architectural design in slate and stone. Floor-to-ceiling glass doors open directly onto the central tropical garden. Fitted with luxury organic linen and a double stone vanity ensuite.',
    photos: [
      '/photos/bedroom_2/bedroom_2_01.jpeg',
      '/photos/bedroom_2/bedroom_2_02.jpeg',
      '/photos/bedroom_2/bedroom_2_03.jpeg',
      '/photos/bedroom_2/bedroom_2_04.jpeg',
      '/photos/bedroom_2/bedroom_2_05.jpeg',
      '/photos/bedroom_2/bedroom_2_06.jpeg',
    ],
    bathroomPhotos: [
      '/photos/full_bathroom_2/full_bathroom_2_01.jpeg',
      '/photos/full_bathroom_2/full_bathroom_2_02.jpeg',
      '/photos/full_bathroom_2/full_bathroom_2_03.jpeg',
      '/photos/full_bathroom_2/full_bathroom_2_04.jpeg',
      '/photos/full_bathroom_2/full_bathroom_2_05.jpeg',
      '/photos/full_bathroom_2/full_bathroom_2_06.jpeg',
    ],
    features: ['Direct Garden Access', 'Private Patio Seating', 'Double Stone Vanity', 'Rain Shower'],
  },
  {
    id: 'bedroom-3',
    name: 'Valley View Suite',
    pdfName: '2-GUEST ROOMS',
    subtitle: 'Elevated suite with sunset orientation over Rionegro valley',
    capacity: '2 Guests',
    bedType: 'King Bed',
    description: 'Upper level suite offering wide panoramic views across the coffee valley. Features ambient wall lighting, custom cedar wardrobe, and private ensuite bath.',
    photos: [
      '/photos/bedroom_3/bedroom_3_01.jpeg',
      '/photos/bedroom_3/bedroom_3_02.jpeg',
      '/photos/bedroom_3/bedroom_3_03.jpeg',
      '/photos/bedroom_3/bedroom_3_04.jpeg',
      '/photos/bedroom_3/bedroom_3_05.jpeg',
    ],
    bathroomPhotos: [
      '/photos/full_bathroom_3/full_bathroom_3_01.jpeg',
      '/photos/full_bathroom_3/full_bathroom_3_02.jpeg',
      '/photos/full_bathroom_3/full_bathroom_3_03.jpeg',
      '/photos/full_bathroom_3/full_bathroom_3_04.jpeg',
      '/photos/full_bathroom_3/full_bathroom_3_05.jpeg',
    ],
    features: ['Panoramic Valley View', 'Sunset Orientation', 'Custom Cedar Work', 'Ensuite Bath'],
  },
  {
    id: 'bedroom-4',
    name: 'Courtyard Sanctuary Suite',
    pdfName: '2-GUEST ROOMS',
    subtitle: 'Quiet serenity adjacent to internal water feature',
    capacity: '2 Guests',
    bedType: 'Queen Bed',
    description: 'Located in the tranquil east wing of the main house. Surrounded by native flora and the soft trickle of water from the central garden courtyard fountain.',
    photos: [
      '/photos/bedroom_4/bedroom_4_01.jpeg',
      '/photos/bedroom_4/bedroom_4_02.jpeg',
      '/photos/bedroom_4/bedroom_4_03.jpeg',
      '/photos/bedroom_4/bedroom_4_04.jpeg',
      '/photos/bedroom_4/bedroom_4_05.jpeg',
    ],
    bathroomPhotos: [
      '/photos/full_bathroom_4/full_bathroom_4_01.jpeg',
    ],
    features: ['Courtyard View', 'Fountain Acoustics', 'Ensuite Bath', 'Silent Ceiling Fan'],
  },
  {
    id: 'bedroom-5',
    name: 'Black Room',
    pdfName: 'BLACK ROOM',
    subtitle: 'Modern luxury suite with obsidian stone & dark timber tones',
    capacity: '2 Guests',
    bedType: 'King Bed',
    description: 'A striking master suite featuring matte black wall accents, warm ambient backlighting, premium sound system, and immediate access to the pool deck.',
    photos: [
      '/photos/bedroom_5/bedroom_5_01.jpeg',
      '/photos/bedroom_5/bedroom_5_02.jpeg',
      '/photos/bedroom_5/bedroom_5_03.jpeg',
      '/photos/bedroom_5/bedroom_5_04.jpeg',
      '/photos/bedroom_5/bedroom_5_05.jpeg',
    ],
    features: ['Obsidian Interior Tone', 'Pool Terrace Access', 'Smart Ambient Lighting', 'Ensuite Bath'],
  },
  {
    id: 'bedroom-6',
    name: 'Guest Wing Suite',
    pdfName: '2-GUEST ROOMS',
    subtitle: 'Flexible double suite with serene forest garden views',
    capacity: '2 Guests',
    bedType: 'Double / Twin Beds',
    description: 'Comfortable guest suite designed for flexibility. Offers garden vistas, writing desk, and quiet privacy adjacent to the library lounge.',
    photos: [
      '/photos/bedroom_6/bedroom_6_01.jpeg',
      '/photos/bedroom_6/bedroom_6_02.jpeg',
      '/photos/bedroom_6/bedroom_6_03.jpeg',
      '/photos/bedroom_6/bedroom_6_04.jpeg',
    ],
    features: ['Garden Vistas', 'Writing Workspace', 'Organic Bedding', 'Dedicated Storage'],
  },
];

export const amenities: Amenity[] = [
  {
    id: 'pool',
    name: 'The Pool & Sun Deck',
    tagline: 'A 25-meter heated infinity pool.',
    description:
      'A 25-meter infinity pool overlooking the valley. Heated to a perfect 28°C, surrounded by loungers and shaded cabanas. The water is treated with a salt system — gentle on the skin, no chlorine smell.',
    instructions:
      'Towels are in the cabinet by the cabana. The pool lights activate automatically at dusk. Please shower before entering.',
    insiderTip: 'The west side gets the best light from 3 PM until sunset. The pool reflects the sky beautifully at golden hour.',
    bestTime: 'Afternoon to sunset',
    location: 'West terrace, ground level',
    image: '/photos/pool/pool_01.jpeg',
  },
  {
    id: 'sauna',
    name: 'The Sauna & Steam Room',
    tagline: 'Wooden warmth & eucalyptus steam infusion.',
    description:
      'A traditional Finnish sauna crafted from Canadian cedar, accompanied by an adjacent eucalyptus steam bath. Seats up to six. The sauna heat reaches 85°C.',
    instructions:
      'Press the timer button inside to start the heater. Water for steam is in the wooden bucket — one ladle on the stones is enough. Limit sessions to 15 minutes.',
    insiderTip: 'Follow with a cold plunge in the pool. The contrast is invigorating — guests swear by it before dinner.',
    bestTime: 'Evening, before dinner',
    location: 'Adjacent to the pool house',
    image: '/photos/patio/patio_02.jpeg',
  },
  {
    id: 'tennis',
    name: 'Tennis & Pickleball Court',
    tagline: 'A professional clay court beneath the mountains.',
    description:
      'A professional-grade red clay court with basketball hoop and pickleball lines. Rackets and balls are provided. Night floodlighting runs until 9 PM.',
    instructions:
      'Equipment is in the cabinet beside the court. Court lights operate until 9 PM. Please sweep the court after play.',
    insiderTip: 'Morning play before 9 AM offers the coolest air and the best light.',
    bestTime: 'Early morning or late afternoon',
    location: 'North garden, upper level',
    image: '/photos/courtyard/courtyard_01.jpeg',
  },
  {
    id: 'bar',
    name: 'The Speakeasy Bar',
    tagline: 'An evening ritual with over 80 spirits.',
    description:
      'A fully stocked bar with Colombian rum, local craft beer, fine wines, and single-origin coffee machine for morning espresso.',
    instructions:
      'The bar is self-service. Please log anything you finish in the ledger. Ice maker is built into the counter.',
    insiderTip: 'Try local Colombian rum or aguardiente with fresh lime.',
    bestTime: 'Sunset onward',
    location: 'Main house, ground floor',
    image: '/photos/dining_area/dining_area_01.jpeg',
  },
  {
    id: 'gym',
    name: 'Fitness Gym',
    tagline: 'Movement with a view of the gardens.',
    description:
      'A fully equipped gym with free weights, cable machine, treadmill, and stationary bike. Floor-to-ceiling windows look out onto the garden.',
    instructions:
      'Open 24 hours. Please wipe down equipment after use. Water and towels are provided.',
    insiderTip: 'Sunrise workouts offer extraordinary light through the glass windows.',
    bestTime: 'Sunrise or early morning',
    location: 'Main house, lower level',
    image: '/photos/gym/gym_01.jpeg',
  },
  {
    id: 'arcade',
    name: 'Games Room & Vintage Bowling',
    tagline: 'Billiards, foosball & private bowling lane.',
    description:
      'A billiards table, foosball, and a vintage bowling lane. The room is soundproofed and equipped with a high-fidelity sound system.',
    instructions:
      'Cues and chalk are on the wall rack. The bowling lane requires the key by the door.',
    insiderTip: 'Great acoustics — play your favorite music through the speaker system.',
    bestTime: 'After dinner',
    location: 'Main house, lower level',
    image: '/photos/games_room/games_room_01.jpeg',
  },
];

export const tourStops: TourStop[] = [
  {
    id: 'entrance',
    number: '01',
    title: 'Grand Entrance & Estate Facade',
    category: 'Architecture',
    description: '100-year coffee estate architecture framed by geometric stone lattices and mountain views.',
    image: '/photos/exterior/exterior_10.jpeg',
    details: 'Hand-cut local stone walls dating back to 1928, restored into a modern luxury villa.',
  },
  {
    id: 'living',
    number: '02',
    title: 'Main Living Salon & Fireplace',
    category: 'Living Space',
    description: 'Cathedral wood ceilings, plush sofas, and a grand fireplace for cool mountain evenings.',
    image: '/photos/living_room/living_room_02.jpeg',
    details: 'Firewood is stocked underneath. Light the fire at dusk for cozy warmth.',
  },
  {
    id: 'kitchen',
    number: '03',
    title: 'Gourmet Chef Kitchen',
    category: 'Dining',
    description: 'Full chef kitchen equipped for private dining, breakfast prep, and espresso service.',
    image: '/photos/full_kitchen/full_kitchen_01.jpeg',
    details: 'Feel free to use anything in the pantry or fridge.',
  },
  {
    id: 'bar-dining',
    number: '04',
    title: 'Dining Salon & Speakeasy Bar',
    category: 'Dining & Social',
    description: 'Grand teak dining table seating 16 guests, flanked by an 80-bottle backlit bar.',
    image: '/photos/dining_area/dining_area_01.jpeg',
    details: 'Self-service bar stocked with Colombian rums, wines, and craft beer.',
  },
  {
    id: 'suite-1',
    number: '05',
    title: 'Gold Room (Grand Master Suite)',
    category: 'Bedroom Suite',
    description: 'The master bedroom featuring gold tones, cathedral ceiling, wrap-around terrace & Jacuzzi.',
    image: '/photos/bedroom_1/bedroom_1_01.jpeg',
    details: 'Includes an open-air jacuzzi tub overlooking the valley.',
  },
  {
    id: 'suite-2',
    number: '06',
    title: 'Grey Room (Garden Suite)',
    category: 'Bedroom Suite',
    description: 'Sleek stone bedroom with direct floor-to-ceiling access to the tropical courtyard garden.',
    image: '/photos/bedroom_2/bedroom_2_01.jpeg',
    details: 'Features a double stone vanity ensuite and private garden seating.',
  },
  {
    id: 'suite-3',
    number: '07',
    title: 'Valley View Suite',
    category: 'Bedroom Suite',
    description: 'Elevated suite with sunset orientation over Rionegro coffee valley.',
    image: '/photos/bedroom_3/bedroom_3_01.jpeg',
    details: 'Custom cedar vanity and smart ambient lighting.',
  },
  {
    id: 'suite-4',
    number: '08',
    title: 'Courtyard Sanctuary Suite',
    category: 'Bedroom Suite',
    description: 'Serene guest bedroom adjacent to the central fountain and native tropical plants.',
    image: '/photos/bedroom_4/bedroom_4_01.jpeg',
    details: 'Gentle water fountain sounds for peaceful sleep.',
  },
  {
    id: 'suite-5',
    number: '09',
    title: 'Black Room (Deluxe Suite)',
    category: 'Bedroom Suite',
    description: 'Obsidian interior design suite with king bed and immediate pool terrace access.',
    image: '/photos/bedroom_5/bedroom_5_01.jpeg',
    details: 'Matte black architectural finishes & premium sound system.',
  },
  {
    id: 'suite-6',
    number: '10',
    title: 'Guest Wing Suite',
    category: 'Bedroom Suite',
    description: 'Flexible double suite with writing workspace and garden vistas.',
    image: '/photos/bedroom_6/bedroom_6_01.jpeg',
    details: 'Organic linens and dedicated guest storage.',
  },
  {
    id: 'pool',
    number: '11',
    title: '25m Saltwater Infinity Pool',
    category: 'Wellness & Water',
    description: '25-meter infinity pool heated to 28°C with saltwater treatment and valley view.',
    image: '/photos/pool/pool_01.jpeg',
    details: 'West orientation catches golden hour sunset perfectly.',
  },
  {
    id: 'sauna',
    number: '12',
    title: 'Cedar Sauna & Steam Bath',
    category: 'Wellness Spa',
    description: 'Finnish cedar sauna and eucalyptus steam bath adjacent to the pool deck.',
    image: '/photos/patio/patio_02.jpeg',
    details: 'Pair a 15-minute sauna session with a cold pool plunge.',
  },
  {
    id: 'tennis',
    number: '13',
    title: 'Red Clay Tennis Court',
    category: 'Recreation',
    description: 'Professional red clay tennis & pickleball court with LED floodlights.',
    image: '/photos/courtyard/courtyard_01.jpeg',
    details: 'Rackets and balls provided in the side cabinet.',
  },
  {
    id: 'games',
    number: '14',
    title: 'Games Room & Bowling Lane',
    category: 'Entertainment',
    description: 'Soundproof lounge featuring billiards, foosball, and a vintage bowling lane.',
    image: '/photos/games_room/games_room_01.jpeg',
    details: 'High-fidelity audio system for late night music.',
  },
  {
    id: 'gym-animals',
    number: '15',
    title: 'Gym & Farm Animal Grounds',
    category: 'Wellness & Farm',
    description: '24-hour gym overlooking the grounds where friendly llamas and Swiss-German cows roam.',
    image: '/photos/gym/gym_01.jpeg',
    details: 'Befriend Bruno the retriever, Luna the cat, and the farm animal crew.',
  },
];

export const propertyStory: PropertyStorySection[] = [
  {
    id: 'history',
    label: 'History',
    title: 'A century in the valley',
    body: 'Finca Libia was built in 1928 as a coffee plantation estate. The original stone walls still stand — hand-cut from the hillside behind the property. For three generations, the estate produced some of the finest coffee in Antioquia. In 2019, host Meyer Ohayon restored the property as a private retreat, preserving its character while adding modern luxury amenities.',
    image: '/photos/exterior/exterior_03.jpeg',
  },
  {
    id: 'architecture',
    label: 'Architecture',
    title: 'Built into the land',
    body: 'The estate was designed to disappear into its surroundings. Local stone, cedar, and clay tiles form the primary materials. Every room opens to the outdoors — terraces extend living spaces into the garden.',
    image: '/photos/living_room/living_room_04.jpeg',
  },
  {
    id: 'design',
    label: 'Design',
    title: 'Quiet luxury',
    body: 'The interiors feature organic textures — linen, stone, wood — in tones of ivory, taupe, and charcoal. Natural light pours through floor-to-ceiling windows. The art on the walls is by renowned Colombian artists.',
    image: '/photos/living_room/living_room_02.jpeg',
  },
];

export const residents: Resident[] = [
  {
    id: 'bruno',
    name: 'Bruno',
    species: 'Golden Retriever',
    description: 'Usually found between the pool and kitchen. Bruno is 9 years old, friendly, off-leash, and loves a walk at sunset. He will greet you at the door!',
    image: '/photos/additional_photos/dog.jpeg',
  },
  {
    id: 'luna',
    name: 'Luna',
    species: 'Tabby Cat',
    description: 'The estate\'s quiet observer. Luna can usually be found on the sunny terrace, napping in the warmest patch of light she can find.',
    image: '/photos/additional_photos/pets.jpeg',
  },
  {
    id: 'farm-animals',
    name: 'Swiss-German Cows & Llamas',
    species: 'Farm Animals',
    description: 'Friendly farm animals that graze in the green pastures surrounding the estate.',
    image: '/photos/additional_photos/alpaca.jpeg',
  },
];

export const exploreCategories: ExploreCategory[] = [
  {
    id: 'eat',
    label: 'Eat',
    recommendations: [
      {
        id: 'e1',
        name: 'Capítulo',
        note: 'Fine dining near airport',
        distance: '8 min drive · Santa Elena - Sajonia',
        quote: 'Exquisite modern dining setting with mountain valley vistas.',
        image: '/photos/dining_area/dining_area_03.jpeg',
      },
      {
        id: 'e2',
        name: 'Asados Doña Rosa Sajonia',
        note: 'Traditional Colombian Grill',
        distance: '5 min drive · Sajonia Roundabout',
        quote: 'Famous local steakhouse with authentic steak, bandeja paisa, and hot arepas.',
        image: '/photos/dining_area/dining_area_04.jpeg',
      },
      {
        id: 'e3',
        name: 'El Rancherito Rionegro',
        note: 'Classic Antioquian Food',
        distance: '6 min drive · Texaco Sajonia',
        quote: 'Generous portions of traditional Colombian dishes, hot coffee, and local desserts.',
        image: '/photos/dining_area/dining_area_05.jpeg',
      },
      {
        id: 'e4',
        name: 'Mamba Negra',
        note: 'Rooftop Dining & Drinks',
        distance: '25 min drive · El Poblado, Medellín',
        quote: 'Stunning city views, high-end cocktail mixology, and Asian fusion.',
        image: '/photos/dining_area/dining_area_06.jpeg',
      },
    ],
  },
  {
    id: 'do',
    label: 'Activities',
    recommendations: [
      {
        id: 'd1',
        name: 'Horseback Riding at Asdesilla',
        note: 'Premier Equestrian Riding Club',
        distance: '12 min drive · Rionegro',
        quote: 'Saddle up for guided trail rides through green pine forests and coffee hills.',
        image: '/photos/additional_photos/additional_photos_09.jpeg',
      },
      {
        id: 'd2',
        name: 'Cuatri Tours ATVs & Motocross',
        note: 'Off-Road ATV & Motocross Track',
        distance: '15 min drive · Guarne Track',
        quote: 'Adrenaline-packed off-road ATV rides through muddy mountain trails.',
        image: '/photos/additional_photos/additional_photos_11.jpeg',
      },
      {
        id: 'd3',
        name: 'El Tequendamita Waterfalls',
        note: 'Natural Waterfall Escape',
        distance: '20 min drive · El Retiro',
        quote: 'Scenic natural waterfall surrounded by lush rainforest trails and outdoor cafes.',
        image: '/photos/additional_photos/additional_photos_12.jpeg',
      },
    ],
  },
  {
    id: 'see',
    label: 'Places to See',
    recommendations: [
      {
        id: 's1',
        name: 'La Piedra del Peñol & Guatapé',
        note: '740-Step Monolith Rock & Colorful Town',
        distance: '50 min drive · Guatapé',
        quote: 'Climb the colossal rock monolith for panoramic lake views, then explore colorful zócalos.',
        image: '/photos/discover_medellin.jpg',
      },
      {
        id: 's2',
        name: 'Nightlife in Provenza',
        note: 'Medellín’s Premier Entertainment District',
        distance: '25 min drive · El Poblado',
        quote: 'Lively streets pulsing with music, rooftop lounges, and world-class dining.',
        image: '/photos/dining_area/dining_area_07.jpeg',
      },
      {
        id: 's3',
        name: 'Plaza Botero & Cultural Center',
        note: 'Sculpture Plaza by Fernando Botero',
        distance: '30 min drive · Downtown Medellín',
        quote: 'Open-air museum showcasing 23 oversized bronze sculptures by Botero.',
        image: '/photos/discover_medellin.jpg',
      },
    ],
  },
];

export const quickActions = [
  { id: 'chef', label: 'Book In-Villa Chef' },
  { id: 'massage', label: 'Book Massage & Spa' },
  { id: 'yoga', label: 'Book Yoga Instructor' },
  { id: 'transport', label: 'Arrange Airport Transfer' },
  { id: 'housekeeping', label: 'Request Extra Housekeeping' },
  { id: 'firewood', label: 'Restock Fireplace Wood' },
];

export const seedMemories: MemoryEntry[] = [
  {
    id: 'm1',
    quote: 'The sunset over the 25m infinity pool while drinking fresh coffee is an unforgettable core memory.',
    author: 'Alexander S., London',
    image: '/photos/pool/pool_01.jpeg',
  },
  {
    id: 'm2',
    quote: 'Waking up in the Gold Room with the mountain mist rolling through the valley. Truly paradise.',
    author: 'Elena R., Zurich',
    image: '/photos/bedroom_1/bedroom_1_01.jpeg',
  },
  {
    id: 'm3',
    quote: 'Playing late night bowling and ping pong after an incredible private chef dinner under the stars.',
    author: 'Marcus & Family, Miami',
    image: '/photos/games_room/games_room_01.jpeg',
  },
];

export const itineraryPaces: ItineraryPace[] = [
  { id: 'relaxed', label: 'Relaxed', description: 'Unhurried mornings, pool lounging, and leisurely evening dinners.' },
  { id: 'balanced', label: 'Balanced', description: 'A blend of morning activities, estate wellness, and local dining.' },
  { id: 'adventurous', label: 'Adventurous', description: 'ATVs, horseback riding, Guatapé day trips, and vibrant Provenza nightlife.' },
];

export const itineraryDays: ItineraryDay[] = [
  {
    day: 'Day 1',
    label: 'Arrival & Estate Sanctuary',
    items: [
      { time: '3:00 PM', title: 'Private Check-in & Estate Welcome', description: 'Welcome drinks on the pool terrace & villa orientation.' },
      { time: '5:30 PM', title: 'Sunset Pool & Sauna Session', description: 'Warm heated 25m pool dip followed by Finnish cedar sauna.' },
      { time: '8:00 PM', title: 'In-Villa Welcome Dinner', description: 'Private chef multi-course dinner paired with fine wines.' },
    ],
  },
  {
    day: 'Day 2',
    label: 'Mountain Adventure & Speakeasy Evening',
    items: [
      { time: '9:00 AM', title: 'Artisanal Breakfast & Single-Origin Espresso', description: 'Fresh local fruit, organic eggs, hot arepas, and fresh juice.' },
      { time: '11:00 AM', title: 'Horseback Riding or ATV Motocross', description: 'Explore scenic pine forests and mountain trails.' },
      { time: '2:30 PM', title: 'Red Clay Tennis Match', description: 'Rally on the private tennis court under mountain skies.' },
      { time: '8:30 PM', title: 'Provenza Nightlife Experience', description: 'Private transfer to Medellín’s premier dining & cocktail district.' },
    ],
  },
  {
    day: 'Day 3',
    label: 'Guatapé Day Trip & Farewell Fireside',
    items: [
      { time: '8:30 AM', title: 'Departure for La Piedra del Peñol', description: 'Scenic drive to Guatapé, monolith climb, and private boat tour.' },
      { time: '4:00 PM', title: 'Return to Villa & Spa Recovery', description: 'In-villa massage session followed by eucalyptus steam bath.' },
      { time: '8:00 PM', title: 'Fireside Spirits & Vintage Bowling', description: 'Gather around the living salon fireplace, speakeasy drinks & bowling.' },
    ],
  },
];

export const checkoutSteps = [
  { id: '1', title: 'Check-out Time', description: 'Standard check-out is 12:00 PM (noon). Late check-out available upon request.' },
  { id: '2', title: 'Power & Lights', description: 'Turn off all indoor/outdoor lights, heaters, and electronic devices.' },
  { id: '3', title: 'Windows & Doors', description: 'Ensure all windows and exterior glass sliding doors are locked.' },
  { id: '4', title: 'Power Sockets', description: 'Check all bedroom and lounge power outlets to ensure no personal chargers were left.' },
  { id: '5', title: 'Water Taps', description: 'Confirm all indoor and outdoor water taps are completely shut.' },
  { id: '6', title: 'Original Placement', description: 'Return any poolside or lounge items to their original positions.' },
];




