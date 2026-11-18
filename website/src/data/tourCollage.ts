/**
 * The Digital Tour: a photo collage of the whole estate, chapter by chapter.
 * Each chapter is a mosaic on a 12-column grid (desktop). `d` is the [column, row]
 * placement as "start / span n"; `m` is the phone layout: span 1 or 2 of a two-column
 * grid, with an optional aspect ratio. Tiles never overlap.
 */
export interface CollagePlacement {
  /** CSS grid-column value, e.g. "2 / span 6" */
  col: string;
  /** CSS grid-row value, e.g. "1 / span 4" */
  row: string;
}

export interface CollageMobile {
  /** Columns taken on the two-column phone grid. */
  span: 1 | 2;
  /** CSS aspect-ratio for photos on phones, e.g. "4 / 3". */
  ar?: string;
}

interface CollageItemBase {
  d: CollagePlacement;
  m: CollageMobile;
}

export interface CollagePhoto extends CollageItemBase {
  kind: 'photo';
  src: string;
  alt: string;
  caption?: string;
}

export interface CollageText extends CollageItemBase {
  kind: 'text';
  title: string;
  /** Second clause, set in champagne italics. */
  em?: string;
  body?: string;
  size?: 'md' | 'lg' | 'xl';
}

export type CollageItem = CollagePhoto | CollageText;

export interface CollageChapter {
  id: string;
  name: string;
  /** Amenity ids that belong to this chapter. */
  amenityIds?: string[];
  items: CollageItem[];
}

const at = (col: number, cols: number, row: number, rows: number): CollagePlacement => ({
  col: `${col} / span ${cols}`,
  row: `${row} / span ${rows}`,
});

export const collageChapters: CollageChapter[] = [
  {
    id: 'intro',
    name: 'Finca Libia',
    items: [
      {
        kind: 'text',
        size: 'xl',
        title: 'Finca Libia',
        body: 'Stone, timber, and a long view of the valley.',
        d: at(1, 6, 1, 3),
        m: { span: 2 },
      },
      {
        kind: 'photo',
        src: '/photos/exterior/exterior_01.jpeg',
        alt: 'Finca Libia seen from the lawn, with the pool and grazing cattle',
        caption: 'From the lawn',
        d: at(1, 6, 4, 4),
        m: { span: 2, ar: '3 / 2' },
      },
      {
        kind: 'photo',
        src: '/photos/exterior/exterior_12.jpeg',
        alt: 'The house and pool under a dramatic evening sky',
        d: at(7, 6, 1, 4),
        m: { span: 1, ar: '4 / 3' },
      },
      {
        kind: 'photo',
        src: '/photos/pool/pool_05.jpeg',
        alt: 'The pool deck framed by palms and agave',
        d: at(7, 3, 5, 3),
        m: { span: 1, ar: '4 / 3' },
      },
      {
        kind: 'photo',
        src: '/photos/exterior/exterior_04.jpeg',
        alt: 'The house glowing at dusk above the pool and lawn',
        d: at(10, 3, 5, 3),
        m: { span: 2, ar: '16 / 9' },
      },
    ],
  },
  {
    id: 'arrival',
    name: 'Arrival',
    items: [
      {
        kind: 'text',
        title: 'Hand-cut stone, wide glass,',
        em: 'and the mountains behind.',
        d: at(1, 4, 1, 3),
        m: { span: 2 },
      },
      {
        kind: 'photo',
        src: '/photos/exterior/exterior_10.jpeg',
        alt: 'The stone-lattice facade of the main house',
        caption: 'The facade',
        d: at(5, 8, 1, 5),
        m: { span: 2, ar: '3 / 2' },
      },
      {
        kind: 'photo',
        src: '/photos/exterior/exterior_03.jpeg',
        alt: 'The main house at dusk from the driveway',
        caption: 'Dusk, from the drive',
        d: at(1, 4, 4, 3),
        m: { span: 1, ar: '4 / 3' },
      },
      {
        kind: 'photo',
        src: '/photos/exterior/exterior_20.jpeg',
        alt: 'The cantilevered concrete entrance with an angled glass wall',
        caption: 'The entrance',
        d: at(1, 4, 7, 3),
        m: { span: 1, ar: '4 / 3' },
      },
      {
        kind: 'photo',
        src: '/photos/exterior/exterior_18.jpeg',
        alt: 'The lattice facade above the covered entry',
        caption: 'The entry court',
        d: at(5, 4, 6, 4),
        m: { span: 1, ar: '4 / 3' },
      },
      {
        kind: 'photo',
        src: '/photos/exterior/exterior_13.jpeg',
        alt: 'The facade lit up at night, with stone seats on the lawn',
        caption: 'After dark',
        d: at(9, 4, 6, 4),
        m: { span: 1, ar: '4 / 3' },
      },
    ],
  },
  {
    id: 'grounds',
    name: 'The Grounds',
    items: [
      {
        kind: 'photo',
        src: '/photos/exterior/exterior_02.jpeg',
        alt: 'The estate from above at night, with the pool and fire pit lit',
        caption: 'The estate by night',
        d: at(1, 7, 1, 5),
        m: { span: 2, ar: '3 / 2' },
      },
      {
        kind: 'photo',
        src: '/photos/exterior/exterior_06.jpeg',
        alt: 'The courts and rooftops from directly above',
        caption: 'From above',
        d: at(8, 5, 1, 3),
        m: { span: 2, ar: '16 / 9' },
      },
      {
        kind: 'text',
        title: 'Three and a half acres,',
        em: 'of lawn, garden, and pasture.',
        d: at(8, 5, 4, 2),
        m: { span: 2 },
      },
      {
        kind: 'photo',
        src: '/photos/exterior/exterior_11.jpeg',
        alt: 'The lawn and garden pavilions seen from above',
        caption: 'The lawn',
        d: at(1, 4, 6, 3),
        m: { span: 1, ar: '4 / 3' },
      },
      {
        kind: 'photo',
        src: '/photos/exterior/exterior_07.jpeg',
        alt: 'A garden pavilion among palms and tropical planting',
        caption: 'The pavilion',
        d: at(5, 4, 6, 3),
        m: { span: 1, ar: '4 / 3' },
      },
      {
        kind: 'photo',
        src: '/photos/exterior/exterior_15.jpeg',
        alt: 'Raised beds in the vegetable garden',
        caption: 'The vegetable garden',
        d: at(9, 4, 6, 3),
        m: { span: 2, ar: '16 / 9' },
      },
    ],
  },
  {
    id: 'inside',
    name: 'Inside',
    items: [
      {
        kind: 'photo',
        src: '/photos/living_room/living_room_02.jpeg',
        alt: 'The main living room with a deep sectional sofa and timber details',
        caption: 'Living room',
        d: at(1, 7, 1, 5),
        m: { span: 2, ar: '3 / 2' },
      },
      {
        kind: 'text',
        title: 'Warm timber and deep sofas,',
        em: 'room for everyone to gather.',
        d: at(8, 5, 1, 2),
        m: { span: 2 },
      },
      {
        kind: 'photo',
        src: '/photos/dining_area/dining_area_01.jpeg',
        alt: 'The dining salon with a long table and green velvet chairs',
        caption: 'The dining salon',
        d: at(8, 5, 3, 3),
        m: { span: 1, ar: '4 / 3' },
      },
      {
        kind: 'photo',
        src: '/photos/full_kitchen/full_kitchen_01.jpeg',
        alt: 'The kitchen with its long bar counter and dark cabinetry',
        caption: 'The kitchen',
        d: at(1, 4, 6, 3),
        m: { span: 1, ar: '4 / 3' },
      },
      {
        kind: 'photo',
        src: '/photos/living_room/living_room_03.jpeg',
        alt: 'The living room shelving wall and lounge area',
        d: at(5, 4, 6, 3),
        m: { span: 1, ar: '4 / 3' },
      },
      {
        kind: 'photo',
        src: '/photos/dining_area/dining_area_04.jpeg',
        alt: 'The outdoor dining table and grill under a glass roof',
        caption: 'The outdoor kitchen',
        d: at(9, 4, 6, 3),
        m: { span: 1, ar: '4 / 3' },
      },
      {
        kind: 'photo',
        src: '/photos/additional_photos/additional_photos_18.jpeg',
        alt: 'The floating staircase beside the courtyard garden',
        caption: 'The stair',
        d: at(1, 4, 9, 3),
        m: { span: 1, ar: '4 / 3' },
      },
      {
        kind: 'photo',
        src: '/photos/additional_photos/additional_photos_15.jpeg',
        alt: 'A living green wall beside a patterned stone wall',
        caption: 'The green wall',
        d: at(5, 4, 9, 3),
        m: { span: 1, ar: '4 / 3' },
      },
      {
        kind: 'photo',
        src: '/photos/additional_photos/additional_photos_21.jpeg',
        alt: 'Stone-tread stairs rising through the house',
        caption: 'Stone treads',
        d: at(9, 4, 9, 3),
        m: { span: 2, ar: '16 / 9' },
      },
    ],
  },
  {
    id: 'rooms',
    name: 'Rooms',
    items: [
      {
        kind: 'photo',
        src: '/photos/bedroom_1/bedroom_1_01.jpeg',
        alt: 'The Grey Room, a master suite with a stone feature wall',
        caption: 'Grey Room',
        d: at(1, 8, 1, 5),
        m: { span: 2, ar: '3 / 2' },
      },
      {
        kind: 'text',
        title: 'Six rooms,',
        em: 'each with its own character.',
        d: at(9, 4, 1, 2),
        m: { span: 2 },
      },
      {
        kind: 'photo',
        src: '/photos/bedroom_2/bedroom_2_01.jpeg',
        alt: 'The Gold Room, a stone suite with a private balcony',
        caption: 'Gold Room',
        d: at(9, 4, 3, 3),
        m: { span: 1, ar: '4 / 3' },
      },
      {
        kind: 'photo',
        src: '/photos/bedroom_3/bedroom_3_01.jpeg',
        alt: 'The Black Room, an elevated suite facing the sunset',
        caption: 'Black Room',
        d: at(1, 4, 6, 3),
        m: { span: 1, ar: '4 / 3' },
      },
      {
        kind: 'photo',
        src: '/photos/bedroom_4/bedroom_4_01.jpeg',
        alt: 'The Green Guest Room beside the central courtyard fountain',
        caption: 'Green Guest Room',
        d: at(5, 4, 6, 3),
        m: { span: 1, ar: '4 / 3' },
      },
      {
        kind: 'photo',
        src: '/photos/bedroom_5/bedroom_5_01.jpeg',
        alt: 'The Black Guest Room with direct access to the pool terrace',
        caption: 'Black Guest Room',
        d: at(9, 4, 6, 3),
        m: { span: 1, ar: '4 / 3' },
      },
      {
        kind: 'photo',
        src: '/photos/bedroom_6/bedroom_6_01.jpeg',
        alt: 'The Guest House bedroom with a fireplace and glass walls',
        caption: 'Guest House',
        d: at(5, 8, 9, 5),
        m: { span: 2, ar: '3 / 2' },
      },
      {
        kind: 'photo',
        src: '/photos/bedroom_6/bedroom_6_02.jpeg',
        alt: 'The Guest House deck with an outdoor sofa',
        d: at(1, 4, 9, 3),
        m: { span: 2, ar: '16 / 9' },
      },
      {
        kind: 'text',
        title: 'A standalone retreat,',
        em: 'with its own fireplace and kitchen.',
        d: at(1, 4, 12, 2),
        m: { span: 2 },
      },
    ],
  },
  {
    id: 'baths',
    name: 'Baths',
    items: [
      {
        kind: 'text',
        title: 'Stone baths, steam showers,',
        em: 'and a robe waiting.',
        d: at(1, 4, 1, 3),
        m: { span: 2 },
      },
      {
        kind: 'photo',
        src: '/photos/full_bathroom_2/full_bathroom_2_05.jpeg',
        alt: 'A freestanding tub with a brass tap, in the Gold Room bath',
        caption: 'Gold Room bath',
        d: at(5, 8, 1, 5),
        m: { span: 2, ar: '3 / 2' },
      },
      {
        kind: 'photo',
        src: '/photos/laundry_area/laundry_area_09.jpeg',
        alt: 'A robe embroidered with the Finca Libia crest',
        d: at(1, 4, 4, 2),
        m: { span: 1, ar: '4 / 3' },
      },
      {
        kind: 'photo',
        src: '/photos/full_bathroom_1/full_bathroom_1_01.jpeg',
        alt: 'A black stone basin in the Grey Room bath',
        caption: 'Grey Room bath',
        d: at(1, 4, 6, 3),
        m: { span: 1, ar: '4 / 3' },
      },
      {
        kind: 'photo',
        src: '/photos/full_bathroom_3/full_bathroom_3_01.jpeg',
        alt: 'A dark vanity and sculpted toilet in the Black Room bath',
        caption: 'Black Room bath',
        d: at(5, 4, 6, 3),
        m: { span: 1, ar: '4 / 3' },
      },
      {
        kind: 'photo',
        src: '/photos/full_bathroom_4/full_bathroom_4_01.jpeg',
        alt: 'A round lit mirror above a timber vanity',
        caption: 'Green Guest Room bath',
        d: at(9, 4, 6, 3),
        m: { span: 1, ar: '4 / 3' },
      },
      {
        kind: 'photo',
        src: '/photos/laundry_area/laundry_area_01.jpeg',
        alt: 'A walk-in wardrobe with glass-fronted shelving',
        caption: 'Dressing room',
        d: at(1, 4, 9, 3),
        m: { span: 1, ar: '4 / 3' },
      },
      {
        kind: 'photo',
        src: '/photos/laundry_area/laundry_area_05.jpeg',
        alt: 'A round mirror and green wall in the dressing hall',
        d: at(5, 4, 9, 3),
        m: { span: 1, ar: '4 / 3' },
      },
      {
        kind: 'photo',
        src: '/photos/wc_1/wc_1_01.jpeg',
        alt: 'A powder room with bold patterned wallpaper',
        caption: 'Powder room',
        d: at(9, 4, 9, 3),
        m: { span: 2, ar: '16 / 9' },
      },
    ],
  },
  {
    id: 'outside',
    name: 'Outside',
    amenityIds: ['pool', 'scenic-views'],
    items: [
      {
        kind: 'photo',
        src: '/photos/pool/pool_01.jpeg',
        alt: 'The pool and sun deck on a bright day',
        caption: 'The pool',
        d: at(1, 8, 1, 5),
        m: { span: 2, ar: '3 / 2' },
      },
      {
        kind: 'text',
        title: 'Water by day.',
        em: 'Fire by night.',
        d: at(9, 4, 1, 2),
        m: { span: 2 },
      },
      {
        kind: 'photo',
        src: '/photos/pool/pool_02.jpeg',
        alt: 'The pool seen from above, with loungers and a spa',
        caption: 'From above',
        d: at(9, 4, 3, 3),
        m: { span: 1, ar: '4 / 3' },
      },
      {
        kind: 'photo',
        src: '/photos/patio/patio_03.jpeg',
        alt: 'A fire table and deep sofas on the terrace',
        caption: 'The terrace',
        d: at(1, 4, 6, 3),
        m: { span: 1, ar: '4 / 3' },
      },
      {
        kind: 'photo',
        src: '/photos/patio/patio_11.jpeg',
        alt: 'The sunken fire pit glowing at night',
        caption: 'The fire pit, after dark',
        d: at(5, 4, 6, 3),
        m: { span: 1, ar: '4 / 3' },
      },
      {
        kind: 'photo',
        src: '/photos/patio/patio_07.jpeg',
        alt: 'The sunken fire pit and stone seating by day',
        caption: 'The fire pit, by day',
        d: at(9, 4, 6, 3),
        m: { span: 1, ar: '4 / 3' },
      },
      {
        kind: 'photo',
        src: '/photos/pool/pool_04.jpeg',
        alt: 'The pool edge meeting the valley horizon',
        caption: 'The valley view',
        d: at(1, 4, 9, 3),
        m: { span: 1, ar: '4 / 3' },
      },
      {
        kind: 'photo',
        src: '/photos/patio/patio_01.jpeg',
        alt: 'A covered terrace with sofas facing the mountains',
        caption: 'Covered terrace',
        d: at(5, 4, 9, 3),
        m: { span: 1, ar: '4 / 3' },
      },
      {
        kind: 'photo',
        src: '/photos/exterior/exterior_05.jpeg',
        alt: 'The house and pool lit up at night',
        caption: 'The pool at night',
        d: at(9, 4, 9, 3),
        m: { span: 2, ar: '16 / 9' },
      },
    ],
  },
  {
    id: 'play',
    name: 'Play',
    amenityIds: ['arcade', 'tennis', 'gym', 'sauna', 'bar'],
    items: [
      {
        kind: 'photo',
        src: '/photos/games_room/games_room_08.jpeg',
        alt: 'The games room with a vintage bowling lane and arcade cabinets',
        caption: 'Vintage bowling',
        d: at(1, 7, 1, 5),
        m: { span: 2, ar: '3 / 2' },
      },
      {
        kind: 'text',
        title: 'Bowling, billiards, arcade, courts.',
        em: 'And a sauna for afterward.',
        d: at(8, 5, 1, 2),
        m: { span: 2 },
      },
      {
        kind: 'photo',
        src: '/photos/games_room/games_room_07.jpeg',
        alt: 'A billiards table in the games room',
        caption: 'Billiards',
        d: at(8, 5, 3, 3),
        m: { span: 1, ar: '4 / 3' },
      },
      {
        kind: 'photo',
        src: '/photos/games_room/games_room_03.jpeg',
        alt: 'Arcade cabinets and a gaming desk',
        caption: 'Arcade',
        d: at(1, 4, 6, 3),
        m: { span: 1, ar: '4 / 3' },
      },
      {
        kind: 'photo',
        src: '/photos/games_room/games_room_06.jpeg',
        alt: 'A poker table beside the games room lane',
        caption: 'Poker',
        d: at(5, 4, 6, 3),
        m: { span: 1, ar: '4 / 3' },
      },
      {
        kind: 'photo',
        src: '/photos/games_room/games_room_12.jpeg',
        alt: 'The bar with lit alcoves and high stools',
        caption: 'The bar',
        d: at(9, 4, 6, 3),
        m: { span: 1, ar: '4 / 3' },
      },
      {
        kind: 'photo',
        src: '/photos/courtyard/courtyard_05.jpeg',
        alt: 'The tennis and pickleball courts from above at dusk',
        caption: 'Tennis & pickleball',
        d: at(1, 6, 9, 4),
        m: { span: 2, ar: '3 / 2' },
      },
      {
        kind: 'photo',
        src: '/photos/courtyard/courtyard_02.jpeg',
        alt: 'The courts and main house at dusk',
        caption: 'The courts at dusk',
        d: at(7, 6, 9, 4),
        m: { span: 1, ar: '4 / 3' },
      },
      {
        kind: 'photo',
        src: '/photos/gym/gym_01.jpeg',
        alt: 'The fitness gym with a round window onto the garden',
        caption: 'The gym',
        d: at(1, 4, 13, 3),
        m: { span: 1, ar: '4 / 3' },
      },
      {
        kind: 'photo',
        src: '/photos/additional_photos/additional_photos_19.jpeg',
        alt: 'The wood-panelled sauna',
        caption: 'The sauna',
        d: at(5, 4, 13, 3),
        m: { span: 1, ar: '4 / 3' },
      },
      {
        kind: 'photo',
        src: '/photos/gym/gym_02.jpeg',
        alt: 'Treadmill, bike, and weights in the gym',
        d: at(9, 4, 13, 3),
        m: { span: 1, ar: '4 / 3' },
      },
    ],
  },
  {
    id: 'company',
    name: 'Company',
    items: [
      {
        kind: 'text',
        title: 'Bruno, Luna, and the animals of the pasture',
        em: 'will say hello.',
        d: at(5, 8, 1, 2),
        m: { span: 2 },
      },
      {
        kind: 'photo',
        src: '/photos/additional_photos/alpaca.jpeg',
        alt: 'Two alpacas standing on the lawn',
        d: at(1, 4, 1, 6),
        m: { span: 1, ar: '3 / 4' },
      },
      {
        kind: 'photo',
        src: '/photos/additional_photos/dog.jpeg',
        alt: 'One of the estate dogs wearing a red bandana',
        d: at(5, 4, 3, 6),
        m: { span: 1, ar: '3 / 4' },
      },
      {
        kind: 'photo',
        src: '/photos/additional_photos/cow.jpeg',
        alt: 'A cow with a blue halter, resting on the grass',
        d: at(9, 4, 3, 6),
        m: { span: 1, ar: '3 / 4' },
      },
      {
        kind: 'photo',
        src: '/photos/additional_photos/additional_photos_13.jpeg',
        alt: 'Two alpacas side by side',
        d: at(1, 4, 7, 2),
        m: { span: 1, ar: '4 / 3' },
      },
    ],
  },
  {
    id: 'close',
    name: 'Cozy corners',
    items: [
      {
        kind: 'text',
        size: 'lg',
        title: 'Cozy corners',
        em: 'all around the property.',
        body: 'Quiet places for reading, coffee, and doing very little, across 3.5 acres.',
        d: at(1, 4, 1, 5),
        m: { span: 2 },
      },
      {
        kind: 'photo',
        src: '/photos/patio/patio_14.jpeg',
        alt: 'A swing hanging in the courtyard beside the stair',
        caption: 'A swing in the courtyard',
        d: at(5, 8, 1, 5),
        m: { span: 2, ar: '3 / 2' },
      },
    ],
  },
];
