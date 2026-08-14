import type {
  Amenity,
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
  heroImage: '/photos/exterior/exterior_18.jpeg',
  heroImageDesktop: '/photos/exterior/exterior_10.jpeg',
  heroImageAlt: '/photos/exterior/exterior_18.jpeg',
  heroImageAltDesktop: '/photos/exterior/exterior_10.jpeg',
  location: 'Medellín, Colombia',
  weather: { temp: '24°', condition: 'Partly cloudy' },
  guestName: 'Aryan',
  arrivalDate: 'August 15',
  daysUntilArrival: 2,
  stayLength: 3,
};

export const amenities: Amenity[] = [
  {
    id: 'pool',
    name: 'The Pool',
    tagline: 'A quiet place to spend the afternoon.',
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
    name: 'The Sauna',
    tagline: 'Wooden warmth after a long day.',
    description:
      'A traditional Finnish sauna crafted from Canadian cedar. Seats up to six. The heat reaches 85°C with optional steam infusion using eucalyptus oil.',
    instructions:
      'Press the timer button inside to start the heater. Water for steam is in the wooden bucket — one ladle on the stones is enough. Please limit sessions to 15 minutes.',
    insiderTip: 'Follow with a cold plunge in the pool. The contrast is invigorating — guests swear by it before dinner.',
    bestTime: 'Evening, before dinner',
    location: 'Adjacent to the pool house',
    image: '/photos/patio/patio_02.jpeg',
  },
  {
    id: 'tennis',
    name: 'Tennis Court',
    tagline: 'A clay court beneath the mountains.',
    description:
      'A professional-grade clay court with mountain views. Rackets and balls are provided. The surface plays slow and high — ideal for long rallies.',
    instructions:
      'Equipment is in the cabinet beside the court. Court lights operate until 9 PM. Please sweep the court after play.',
    insiderTip: 'Morning play before 9 AM offers the coolest air and the best light. The court is usually empty until 11.',
    bestTime: 'Early morning or late afternoon',
    location: 'North garden, upper level',
    image: '/photos/courtyard/courtyard_01.jpeg',
  },
  {
    id: 'bar',
    name: 'The Bar',
    tagline: 'An evening ritual.',
    description:
      'A fully stocked bar with Colombian rum, local craft beer, and a curated selection of international spirits. The backlit shelves hold over 80 bottles. A coffee machine is available for morning espresso.',
    instructions:
      'The bar is self-service. Please log anything you finish in the ledger. Ice maker is built into the counter.',
    insiderTip: 'Try the local aguardiente with a splash of lime. It is the anise spirit of Colombia — smooth, cold, and meant to be shared.',
    bestTime: 'Sunset onward',
    location: 'Main house, ground floor',
    image: '/photos/dining_area/dining_area_01.jpeg',
  },
  {
    id: 'gym',
    name: 'The Gym',
    tagline: 'Movement with a view.',
    description:
      'A fully equipped gym with free weights, a cable machine, treadmill, and stationary bike. Floor-to-ceiling windows look out onto the garden.',
    instructions:
      'Open 24 hours. Please wipe down equipment after use. Water and towels are provided.',
    insiderTip: 'The best time is sunrise. The light through the windows is extraordinary, and you will likely have it to yourself.',
    bestTime: 'Sunrise or early morning',
    location: 'Main house, lower level',
    image: '/photos/gym/gym_01.jpeg',
  },
  {
    id: 'arcade',
    name: 'The Games Room',
    tagline: 'For late nights and laughter.',
    description:
      'A billiards table, foosball, and a vintage bowling lane. The room is soundproofed and has its own sound system. Comfortable seating for spectating.',
    instructions:
      'Cues and chalk are on the wall rack. The bowling lane requires the key by the door — please return it after use.',
    insiderTip: 'The acoustics are surprisingly good. Play music through the speaker system — it fills the room without being loud.',
    bestTime: 'After dinner',
    location: 'Main house, lower level',
    image: '/photos/games_room/games_room_01.jpeg',
  },
];

export const propertyStory: PropertyStorySection[] = [
  {
    id: 'history',
    label: 'History',
    title: 'A century in the valley',
    body: 'Finca Libia was built in 1928 as a coffee plantation estate. The original stone walls still stand — hand-cut from the hillside behind the property. For three generations, the estate produced some of the finest coffee in Antioquia. In 2019, the family restored the property as a private retreat, preserving its character while adding the amenities of a modern luxury estate.',
    image: '/photos/exterior/exterior_03.jpeg',
  },
  {
    id: 'architecture',
    label: 'Architecture',
    title: 'Built into the land',
    body: 'The estate was designed to disappear into its surroundings. Local stone, cedar, and clay tiles form the primary materials. Every room opens to the outdoors — terraces extend living spaces into the garden. The infinity pool aligns perfectly with the valley, creating an uninterrupted line between water and sky.',
    image: '/photos/living_room/living_room_04.jpeg',
  },
  {
    id: 'design',
    label: 'Design',
    title: 'Quiet luxury',
    body: 'The interiors were curated by a local designer who believes luxury should be felt, not seen. Natural textures — linen, stone, wood — in tones of ivory, taupe, and charcoal. No excess. Every object has a purpose or a story. The art on the walls is by Colombian artists, many from the Medellín scene.',
    image: '/photos/living_room/living_room_02.jpeg',
  },
  {
    id: 'people',
    label: 'The People',
    title: 'A family estate',
    body: 'The estate is managed by the original family. María, the third generation, oversees hospitality. Carlos, the estate manager, has been here for twenty years and knows every stone. Our staff are from the surrounding village — many have been with us for over a decade.',
    image: '/photos/patio/patio_08.jpeg',
  },
];

export const residents: Resident[] = [
  {
    id: 'bruno',
    name: 'Bruno',
    species: 'Golden Retriever',
    description: 'Usually found somewhere between the pool and the kitchen. Bruno is nine years old, gentle, and loves a walk at sunset. He will greet you at the door — it is his job.',
    image: '/photos/additional_photos/dog.jpeg',
  },
  {
    id: 'luna',
    name: 'Luna',
    species: 'Tabby Cat',
    description: 'The estate\'s quiet observer. Luna can usually be found on the sunny terrace, napping in the warmest patch of light she can find. She is friendly but prefers to choose her moments.',
    image: '/photos/additional_photos/pets.jpeg',
  },
];

export const tourStops: TourStop[] = [
  {
    id: 'pool',
    number: '01',
    title: 'The Pool',
    description: 'A 25-meter infinity pool overlooking the valley. The west side catches the sunset perfectly.',
    image: '/photos/pool/pool_03.jpeg',
  },
  {
    id: 'bar',
    number: '02',
    title: 'The Bar',
    description: 'Over 80 bottles, local spirits, and a coffee machine for the morning. Self-service, please log what you finish.',
    image: '/photos/dining_area/dining_area_02.jpeg',
  },
  {
    id: 'garden',
    number: '03',
    title: 'The Garden',
    description: 'A sprawling tropical garden with stone paths, native flora, and quiet corners for reading.',
    image: '/photos/courtyard/courtyard_02.jpeg',
  },
  {
    id: 'games',
    number: '04',
    title: 'The Games Room',
    description: 'Billiards, foosball, and a vintage bowling lane. Soundproofed with its own sound system.',
    image: '/photos/games_room/games_room_03.jpeg',
  },
  {
    id: 'sauna',
    number: '05',
    title: 'The Sauna',
    description: 'A traditional Finnish cedar sauna. Follow with a cold plunge in the pool — guests swear by it.',
    image: '/photos/patio/patio_03.jpeg',
  },
];

export const exploreCategories: ExploreCategory[] = [
  {
    id: 'eat',
    label: 'Eat',
    recommendations: [
      {
        id: 'e1',
        name: 'El Ranchero',
        note: 'Our favorite for Sunday lunch.',
        distance: '25 min from the estate',
        quote: 'Go hungry. Order the bandeja paisa — it is the most generous plate of food you will ever see.',
        image: '/photos/dining_area/dining_area_03.jpeg',
      },
      {
        id: 'e2',
        name: 'Carmen',
        note: 'Fine dining with a Colombian soul.',
        distance: '20 min from the estate',
        quote: 'The tasting menu changes with the market. Ask for the wine pairing — they champion local vineyards.',
        image: '/photos/dining_area/dining_area_04.jpeg',
      },
      {
        id: 'e3',
        name: 'Mercado del Río',
        note: 'A food hall that feels like a neighborhood.',
        distance: '22 min from the estate',
        quote: 'Do not pick one stall. Walk through, graze, share. The arepas at the corner stand are the best in the city.',
        image: '/photos/full_kitchen/full_kitchen_01.jpeg',
      },
    ],
  },
  {
    id: 'drink',
    label: 'Drink',
    recommendations: [
      {
        id: 'd1',
        name: 'Envy Roofbar',
        note: 'Sunset cocktails above the city.',
        distance: '25 min from the estate',
        quote: 'Arrive by 5:30 to get a terrace seat. The views over the valley are staggering at golden hour.',
        image: '/photos/patio/patio_05.jpeg',
      },
      {
        id: 'd2',
        name: 'Pergamino Café',
        note: 'The best coffee in Medellín.',
        distance: '20 min from the estate',
        quote: 'Order a pour-over with single-origin beans from the Antioquia region. This is what coffee is supposed to taste like.',
        image: '/photos/full_kitchen/full_kitchen_02.jpeg',
      },
    ],
  },
  {
    id: 'adventure',
    label: 'Adventure',
    recommendations: [
      {
        id: 'a1',
        name: 'Piedra del Peñol',
        note: 'Climb the rock, see the world.',
        distance: '90 min from the estate',
        quote: '740 steps to the top. The view over the Guatapé reservoir is worth every one. Go early — before the heat and the crowds.',
        image: '/photos/exterior/exterior_05.jpeg',
      },
      {
        id: 'a2',
        name: 'Waterfall Trek',
        note: 'A hidden cascade in the jungle.',
        distance: '45 min from the estate',
        quote: 'Ask Carlos for the trailhead. It is not on any map. A 40-minute walk through jungle to a private waterfall with a swimming hole.',
        image: '/photos/exterior/exterior_07.jpeg',
      },
    ],
  },
  {
    id: 'culture',
    label: 'Culture',
    recommendations: [
      {
        id: 'c1',
        name: 'Museo de Antioquia',
        note: 'Botero\'s home museum.',
        distance: '22 min from the estate',
        quote: 'Fernando Botero donated his personal collection here. His voluptuous sculptures fill the plaza outside. Start there.',
        image: '/photos/living_room/living_room_05.jpeg',
      },
      {
        id: 'c2',
        name: 'Comuna 13',
        note: 'A neighborhood reborn through art.',
        distance: '30 min from the estate',
        quote: 'Take the guided tour. The street art tells the story of a community that transformed itself. The outdoor escalators are an engineering marvel.',
        image: '/photos/exterior/exterior_09.jpeg',
      },
    ],
  },
  {
    id: 'family',
    label: 'Family',
    recommendations: [
      {
        id: 'f1',
        name: 'Parque Explora',
        note: 'An aquarium and science museum the kids will love.',
        distance: '25 min from the estate',
        quote: 'The aquarium alone is worth the trip. Plan for three hours minimum. The outdoor botanical garden is next door — combine them.',
        image: '/photos/additional_photos/alpaca.jpeg',
      },
    ],
  },
  {
    id: 'secrets',
    label: 'Our Secrets',
    recommendations: [
      {
        id: 's1',
        name: 'The Coffee Farm',
        note: 'A private tour at a working finca.',
        distance: '60 min from the estate',
        quote: 'We will arrange this for you. A small family farm in the mountains — you will pick cherries, roast beans, and leave with your own bag of coffee.',
        image: '/photos/additional_photos/cow.jpeg',
      },
      {
        id: 's2',
        name: 'Plaza Minorista',
        note: 'The local market where chefs shop.',
        distance: '20 min from the estate',
        quote: 'Go Saturday morning. The produce is extraordinary — exotic fruits you have never seen. Try a fresh juice from one of the stalls.',
        image: '/photos/full_kitchen/full_kitchen_05.jpeg',
      },
    ],
  },
];

export const itineraryPaces: ItineraryPace[] = [
  {
    id: 'slow',
    label: 'Slow & Easy',
    description: 'Pool, sauna, food, sunsets.',
  },
  {
    id: 'adventure',
    label: 'Adventure',
    description: 'Explore, hike, discover.',
  },
  {
    id: 'culture',
    label: 'Food & Culture',
    description: 'Restaurants, markets, museums.',
  },
  {
    id: 'family',
    label: 'Family',
    description: 'Activities everyone can enjoy.',
  },
  {
    id: 'mixed',
    label: 'A little bit of everything',
    description: 'The best of all worlds.',
  },
];

export const itineraryDays: ItineraryDay[] = [
  {
    day: 'DAY 01',
    label: 'Arrival',
    items: [
      { time: '4:00 PM', title: 'Arrive', description: 'Welcome to Finca Libia. Settle in, unpack, take a breath.' },
      { time: '5:00 PM', title: 'Explore the estate', description: 'Take the digital tour or wander at your own pace.' },
      { time: '6:30 PM', title: 'Sunset', description: 'The west terrace. Bring a drink from the bar.' },
      { time: '8:00 PM', title: 'Dinner', description: 'We will have something prepared. Let us know any preferences.' },
    ],
  },
  {
    day: 'DAY 02',
    label: 'The Valley',
    items: [
      { time: '8:00 AM', title: 'Breakfast', description: 'Served on the terrace. Fresh fruit, arepas, coffee from the farm.' },
      { time: '10:00 AM', title: 'Coffee farm tour', description: 'A private visit to a working finca in the mountains.' },
      { time: '2:00 PM', title: 'Lunch at El Ranchero', description: 'The bandeja paisa. Go hungry.' },
      { time: '5:00 PM', title: 'Pool & sauna', description: 'Afternoon at the estate. The water is perfect.' },
      { time: '7:30 PM', title: 'Sunset cocktails', description: 'Envy Roofbar. Reserve a terrace seat.' },
    ],
  },
  {
    day: 'DAY 03',
    label: 'Departure',
    items: [
      { time: '8:00 AM', title: 'Final breakfast', description: 'Take your time. The morning light is the best light.' },
      { time: '10:00 AM', title: 'Comuna 13', description: 'A guided tour of the street art and the neighborhood\'s story.' },
      { time: '1:00 PM', title: 'Lunch at Mercado del Río', description: 'One last meal. Share everything.' },
      { time: '3:00 PM', title: 'Return to the estate', description: 'Pack, relax, say goodbye to Bruno.' },
      { time: '5:00 PM', title: 'Checkout', description: 'Leave something for the next guest before you go.' },
    ],
  },
];

export const seedMemories: MemoryEntry[] = [
  {
    id: 'm1',
    quote: 'The sunset from the west terrace was unforgettable. We sat there for three hours and did not say a word.',
    author: 'Elena & Marco, Milan',
    image: '/photos/patio/patio_06.jpeg',
  },
  {
    id: 'm2',
    quote: 'Bruno waited at our door every morning. By day three we felt like we lived here.',
    author: 'The Tanaka Family, Tokyo',
    image: '/photos/additional_photos/dogs.jpeg',
  },
  {
    id: 'm3',
    quote: 'The coffee farm tour changed how I think about coffee. I still brew those beans every morning.',
    author: 'Sarah, London',
    image: '/photos/additional_photos/additional_photos_25.jpeg',
  },
];

export const checkoutSteps = [
  'Check your belongings',
  'Return keys',
  'Leave towels in the bathroom',
  'Switch off all appliances',
  'Close all windows and doors',
];

export const quickActions = [
  { id: 'towels', label: 'Request towels', icon: 'Layers' },
  { id: 'housekeeping', label: 'Housekeeping', icon: 'Sparkles' },
  { id: 'ride', label: 'Book a ride', icon: 'Car' },
  { id: 'restaurant', label: 'Restaurant reservation', icon: 'UtensilsCrossed' },
  { id: 'grocery', label: 'Grocery request', icon: 'ShoppingBag' },
  { id: 'maintenance', label: 'Something isn\'t working', icon: 'Wrench' },
];
