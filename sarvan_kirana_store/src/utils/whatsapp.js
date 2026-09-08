import business from "../config/business.js";

/**
 * Returns a WhatsApp chat URL with an optional pre-filled message.
 * @param {string} [message] - Optional message to pre-fill
 * @returns {string} Full wa.me URL
 */
export function getWhatsAppUrl(message = "") {
  const base = `https://wa.me/${business.whatsapp}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

/** Pre-built WhatsApp URLs for common use cases */
export const whatsappUrls = {
  general: getWhatsAppUrl("Hello! I have a query about your store."),
  vegetables: getWhatsAppUrl(
    "Hello! I would like to know about today's fresh vegetable availability."
  ),
  inquiry: getWhatsAppUrl("Hello! I need help finding a product."),
};
