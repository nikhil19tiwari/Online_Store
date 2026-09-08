/**
 * Central business configuration for Sarvan Tiwari Kirana Store.
 * Edit this file to update contact information, address, etc.
 * This is the single source of truth — do NOT duplicate these values elsewhere.
 */

const business = {
  name: "Sarvan Tiwari Kirana Store",
  shortName: "ST Kirana Store",
  tagline: "Your Trusted Local Kirana & Fresh Vegetable Store",
  description:
    "Quality groceries, daily essentials and fresh vegetables for families in Aswan Tiwari, Janghai and nearby areas.",

  owner: "Sarvan Tiwari",

  phoneNumbers: ["9452300979", "7318228879"],
  // WhatsApp number in international format (no +, no spaces)
  whatsapp: "7318228879",

  address: {
    village: "Aswan Tiwari",
    locality: "Janghai",
    district: "Jaunpur",
    state: "Uttar Pradesh",
    postalCode: "212401",
    country: "India",
    countryCode: "IN",
  },

  // Google Maps directions URL — update if exact pin is placed later
  mapsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Aswan+Tiwari,+Janghai,+Jaunpur,+Uttar+Pradesh+212401",

  // Canonical site URL — update when domain is live
  siteUrl: "https://sarvantiwarikirana.in",

  // Future-placeholder fields — fill in when info is confirmed
  openingHours: null,      // e.g. "Mon–Sun: 7 AM – 9 PM"
  email: null,             // e.g. "contact@sarvantiwarikirana.in"
  socialMedia: null,       // no verified accounts yet
};

export default business;
