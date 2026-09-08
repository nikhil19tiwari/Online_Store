import business from "../config/business.js";

/**
 * Returns the Google Maps directions URL for the store.
 * @returns {string}
 */
export function getMapsUrl() {
  return business.mapsUrl;
}

/**
 * Returns a Google Maps search URL for the store name + address.
 * @returns {string}
 */
export function getMapsSearchUrl() {
  const query = encodeURIComponent(
    `${business.name}, ${business.address.village}, ${business.address.locality}, ${business.address.district}, ${business.address.state} ${business.address.postalCode}`
  );
  return `https://www.google.com/maps/search/?api=1&query=${query}`;
}
