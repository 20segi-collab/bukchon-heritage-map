export type Language = 'ko' | 'en' | 'ja' | 'zh';

export type Category = 'all' | 'architecture' | 'craft' | 'tea' | 'history' | 'museum' | 'commercial';

export type AuthenticityGrade = 'must-see' | 'high' | 'moderate' | 'commercial';

export interface LocalizedString {
  ko: string;
  en: string;
  ja: string;
  zh: string;
}

export interface Review {
  id: string;
  user: string;
  date: string;
  authenticityRating: number;   // 1-5 star
  culturalValueRating: number;  // 1-5 star
  commercialityRating: number;  // 1-5 (1 = pure traditional, 5 = extreme commercial factory)
  comment: string;
  tags: string[];
  verifiedVisit: boolean;
  photoUrl?: string;
  language: Language;
}

export interface HeritagePlace {
  id: string;
  name: LocalizedString;
  category: Category;
  grade: AuthenticityGrade;
  authenticityScore: number;     // 1.0 to 5.0 (Calculated normalized index)
  culturalValueScore: number;    // 1.0 to 5.0
  commercialityRatio: number;    // 0% to 100% (Lower is better/more authentic)
  lat: number;
  lng: number;
  address: LocalizedString;
  hours: LocalizedString;
  image: string;
  docentSummary: LocalizedString;
  docentAudioScript: LocalizedString;
  positiveTags: string[];
  commercialWarningTags?: string[];
  certifiedBy?: string;           // e.g. "Seoul Heritage Foundation", "National Intangible Heritage"
  reviewsCount: number;
  reviews: Review[];
}

export interface FilterOptions {
  category: Category;
  mustSeeOnly: boolean;
  minAuthenticityScore: number;
  searchQuery: string;
}
