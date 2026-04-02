/**
 * Navigation link type
 */
export type NavLinkType = "hash" | "route";

export interface NavLink {
  label: string;
  href: string;
  type: NavLinkType;
}

/**
 * Event location information
 */
export interface Location {
  name: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
}

/**
 * Team member information
 */
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio?: string;
  image?: string;
  linkedin?: string;
  twitter?: string;
}

/**
 * Jury member information
 */
export interface JuryMember {
  id: string;
  name: string;
  title: string;
  company: string;
  bio: string;
  image?: string;
  linkedin?: string;
  twitter?: string;
}

/**
 * FAQ item
 */
export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

/**
 * Track/Division information
 */
export interface Track {
  id: string;
  name: string;
  description: string;
  icon?: string;
}

/**
 * Schedule phase
 */
export interface SchedulePhase {
  day: string;
  title: string;
  date: string;
  description: string;
  highlights: string[];
}

/**
 * Showcase card (Pre Summit, Workshops, Divisions)
 */
export interface ShowcaseCard {
  title: string;
  accentWord: string;
  subtitle: string;
  description: string;
  ctaLabel: string;
  reverseOnDesktop?: boolean;
  accentFirst?: boolean;
  imagePlaceholders: string[];
}
