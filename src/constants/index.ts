/**
 * Navigation links for the application
 */
export const NAV_LINKS = [
  { label: "About", href: "#about", type: "hash" as const },
  { label: "Schedule", href: "#schedule", type: "hash" as const },
  { label: "Tracks", href: "#tracks", type: "hash" as const },
  { label: "FAQs", href: "/faqs", type: "route" as const },
  { label: "Jury", href: "/jury", type: "route" as const },
  { label: "Team", href: "/team", type: "route" as const },
  { label: "Contact", href: "#contact", type: "hash" as const },
] as const;

/**
 * Event information
 */
export const EVENT_INFO = {
  name: "REVA RIFT 2026",
  tagline: "India's Premier Tech Hackathon",
  startDate: "March 8, 2026",
  endDate: "March 11, 2026",
  location: {
    name: "REVA University",
    address: "Rukmini Knowledge Park, Yelahanka, Kattiganahalli, Sathanur",
    city: "Bengaluru",
    state: "Karnataka",
    pincode: "560064",
    country: "India",
  },
  registrationUrl: "#register",
} as const;

/**
 * Social media links
 */
export const SOCIAL_LINKS = {
  linkedin: "#",
  whatsapp: "#",
  twitter: "#",
  instagram: "#",
} as const;

/**
 * API endpoints (if needed)
 */
export const API_ENDPOINTS = {
  register: "/api/register",
  faqs: "/api/faqs",
  jury: "/api/jury",
  team: "/api/team",
} as const;
