export interface AmenityItem {
  name: string;
  detail?: string;
  icon?: string;
}

export interface AmenityCategory {
  category: string;
  items: AmenityItem[];
}

export const featuredAmenities = [
  { name: 'Valley view', icon: 'Mountain' },
  { name: 'Mountain view', icon: 'Sun' },
  { name: 'Housekeeping available Monday to Saturday', icon: 'Sparkles' },
  { name: 'Private pool – open 24 hours, heated', icon: 'Waves' },
  { name: 'Private hot tub – available all year, open 24 hours', icon: 'Flame' },
  { name: 'Private sauna', icon: 'Thermometer' },
  { name: 'Steam room', icon: 'Wind' },
  { name: 'Whirlpool', icon: 'Droplets' },
  { name: 'Tennis court', icon: 'Activity' },
  { name: 'Exterior security cameras on property', icon: 'ShieldCheck' },
];

export const allAmenitiesData: AmenityCategory[] = [
  {
    category: 'Scenic views',
    items: [
      { name: 'Valley view' },
      { name: 'Mountain view' },
      { name: 'Pool view' },
    ],
  },
  {
    category: 'Bathroom',
    items: [
      { name: 'Bath' },
      { name: 'Hairdryer' },
      { name: 'Cleaning products' },
      { name: 'Shampoo' },
      { name: 'Conditioner' },
      { name: 'Johnson & Johnson body soap' },
      { name: 'Bidet' },
      { name: 'Outdoor shower' },
      { name: 'Hot water' },
      { name: 'Shower gel' },
    ],
  },
  {
    category: 'Bedroom and laundry',
    items: [
      { name: 'Free washing machine' },
      { name: 'Free dryer – In unit' },
      { name: 'Essentials', detail: 'Towels, bed sheets, soap and toilet paper' },
      { name: 'Hangers' },
      { name: 'Bed linen', detail: 'Cotton linen' },
      { name: 'Extra pillows and blankets' },
      { name: 'Room-darkening blinds' },
      { name: 'Clothes drying rack' },
      { name: 'Safe' },
      { name: 'Clothes storage', detail: 'Walk-in wardrobe, wardrobe and chest of drawers' },
    ],
  },
  {
    category: 'Entertainment',
    items: [
      { name: 'Tennis court' },
      { name: 'Cinema' },
      { name: 'Ethernet connection' },
      { name: 'TV' },
      { name: 'Record player' },
      { name: 'Denon sound system with Bluetooth and aux' },
      { name: 'Exercise equipment', detail: 'Free weights, stationary bike, treadmill, yoga mat, workout bench' },
      { name: 'Table tennis table' },
      { name: 'Pool table' },
      { name: 'Bar' },
      { name: 'Arcade games' },
      { name: 'Books and reading material' },
      { name: 'Card table' },
      { name: 'Table football table' },
      { name: 'Game room' },
      { name: 'Half basketball court' },
      { name: 'Bowling alley' },
      { name: 'Life-size games' },
    ],
  },
  {
    category: 'Family',
    items: [
      { name: 'Board games' },
      { name: 'Babysitter recommendations' },
      { name: 'Outdoor children activities', detail: 'An outdoor area equipped with play structures and activities for children' },
    ],
  },
  {
    category: 'Heating and cooling',
    items: [
      { name: 'Indoor fireplace: gas' },
      { name: 'Portable fans' },
    ],
  },
  {
    category: 'Home safety',
    items: [
      { name: 'Fire extinguisher' },
      { name: 'First aid kit' },
      { name: 'Exterior security cameras on property' },
    ],
  },
  {
    category: 'Internet and office',
    items: [
      { name: 'High-speed Wifi' },
    ],
  },
  {
    category: 'Kitchen and dining',
    items: [
      { name: 'Kitchen', detail: 'Space where guests can cook their own meals' },
      { name: 'Liebherr refrigerator' },
      { name: 'Microwave' },
      { name: 'Cooking basics', detail: 'Pots and pans, oil, salt and pepper' },
      { name: 'Crockery and cutlery', detail: 'Bowls, chopsticks, plates, cups, etc.' },
      { name: 'Mini fridge' },
      { name: 'Freezer' },
      { name: 'Dishwasher' },
      { name: 'KitchenAid stainless steel gas cooker' },
      { name: 'KitchenAid stainless steel single oven' },
      { name: 'Kettle' },
      { name: 'Coffee maker: espresso machine' },
      { name: 'Wine glasses' },
      { name: 'Toaster' },
      { name: 'Baking sheet' },
      { name: 'Blender' },
      { name: 'Barbecue utensils', detail: 'Grill, charcoal, bamboo skewers/iron skewers, etc.' },
      { name: 'Dining table' },
      { name: 'Ice machine' },
      { name: 'Artisanal Coffee' },
    ],
  },
  {
    category: 'Location features',
    items: [
      { name: 'Private entrance', detail: 'Separate street or building entrance' },
    ],
  },
  {
    category: 'Outdoor',
    items: [
      { name: 'Private back garden – Fully fenced', detail: 'An open space on the property usually covered in grass' },
      { name: 'Firepit' },
      { name: 'Outdoor furniture' },
      { name: 'Outdoor dining area' },
      { name: 'Private outdoor kitchen' },
      { name: 'BBQ grill' },
      { name: 'Sun loungers' },
      { name: 'Badminton court' },
      { name: 'Pizza oven' },
      { name: 'Gas fireplace' },
    ],
  },
  {
    category: 'Parking and facilities',
    items: [
      { name: 'Private pool – open 24 hours, heated' },
      { name: 'Private hot tub – available all year, open 24 hours' },
      { name: 'Private sauna' },
      { name: 'Steam room' },
      { name: 'Whirlpool' },
      { name: 'Free parking on premises' },
      { name: 'Private gym in building' },
      { name: 'Stables' },
      { name: 'Massage table' },
      { name: 'Pool house' },
      { name: 'Guest house' },
    ],
  },
];
