export type PageId = 'home' | 'guides' | 'heritage' | 'wildlife' | 'adventure';

export type Region = 'all' | 'coastal' | 'malnad' | 'south' | 'north' | 'central';

export interface ImageItem {
  url: string;
  title: string;
  location?: string;
  caption?: string;
  category?: string;
}

export interface Destination {
  id: string;
  name: string;
  tagline: string;
  region: 'coastal' | 'malnad' | 'south' | 'north' | 'central';
  category: 'heritage' | 'nature' | 'wildlife' | 'adventure' | 'coastal' | 'pilgrimage';
  image: string;
  gallery?: string[];
  district: string;
  description: string;
  highlights: string[];
  bestTimeToVisit: string;
  howToReach: {
    nearestAirport: string;
    nearestRailway: string;
    roadways: string;
  };
  entryFee?: string;
  timings?: string;
  rating: number;
  popularFor: string;
  coordinates?: { lat: number; lng: number };
}

export interface HeritageSite {
  id: string;
  name: string;
  dynasty: string;
  era: string;
  unesco: boolean;
  image: string;
  description: string;
  architecturalStyle: string;
  location: string;
  highlights: string[];
  historicalSignificance: string;
  visitorTips: string;
}

export interface Festival {
  id: string;
  name: string;
  kannadaName?: string;
  month: string;
  seasonPeriod: string;
  location: string;
  image: string;
  description: string;
  keyRituals: string[];
  duration: string;
  culturalSignificance: string;
}

export interface Craft {
  id: string;
  name: string;
  origin: string;
  giTag: boolean;
  image: string;
  category: string;
  description: string;
  artisanStory: string;
}

export interface CulinaryItem {
  id: string;
  name: string;
  region: string;
  image: string;
  description: string;
  flavorProfile: string;
  mustTryPlaces: string;
}

export interface WildlifeSanctuary {
  id: string;
  name: string;
  type: 'National Park' | 'Tiger Reserve' | 'Bird Sanctuary' | 'Wildlife Sanctuary';
  district: string;
  area: string;
  image: string;
  keyAnimals: string[];
  safariTypes: string[];
  bestSeason: string;
  description: string;
  floraFauna: string;
  conservationStory: string;
  safariTimings: string;
}

export interface WildlifeSpecies {
  id: string;
  name: string;
  scientificName: string;
  status: 'Endangered' | 'Vulnerable' | 'Near Threatened' | 'Least Concern';
  image: string;
  bestSanctuaries: string[];
  funFact: string;
  description: string;
}

export interface AdventureActivity {
  id: string;
  title: string;
  category: 'trekking' | 'water-sports' | 'rock-climbing' | 'caving' | 'aerial';
  location: string;
  district: string;
  difficulty: 'Easy' | 'Moderate' | 'Challenging' | 'Extreme';
  altitudeOrDistance?: string;
  bestSeason: string;
  image: string;
  description: string;
  highlights: string[];
  requiredPermits: string;
  safetyTips: string[];
}

export interface Itinerary {
  id: string;
  title: string;
  duration: string;
  theme: string;
  route: string;
  image: string;
  highlights: string[];
  days: {
    day: number;
    title: string;
    description: string;
    places: string[];
  }[];
}
