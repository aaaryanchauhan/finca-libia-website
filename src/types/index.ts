export interface Amenity {
  id: string;
  name: string;
  tagline: string;
  description: string;
  instructions: string;
  insiderTip: string;
  bestTime: string;
  location: string;
  image: string;
}

export interface ExploreCategory {
  id: string;
  label: string;
  recommendations: Recommendation[];
}

export interface Recommendation {
  id: string;
  name: string;
  note: string;
  distance: string;
  quote: string;
  image: string;
}

export interface ItineraryDay {
  day: string;
  label: string;
  items: ItineraryItem[];
}

export interface ItineraryItem {
  time: string;
  title: string;
  description: string;
}

export interface ItineraryPace {
  id: string;
  label: string;
  description: string;
}

export interface Resident {
  id: string;
  name: string;
  species: string;
  description: string;
  image: string;
}

export interface PropertyStorySection {
  id: string;
  label: string;
  title: string;
  body: string;
  image: string;
}

export interface TourStop {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
}

export interface MemoryEntry {
  id: string;
  quote: string;
  author: string;
  image: string;
}

export interface ConciergeRequest {
  id: string;
  type: string;
  message: string;
  status: string;
  created_at: string;
}

export interface GuestbookEntry {
  id: string;
  best_meal: string | null;
  best_experience: string | null;
  discovered: string | null;
  must_do: string | null;
  quote: string | null;
  author_name: string | null;
  created_at: string;
}
