import business from "../../config/business.js";

/**
 * Scrolling ticker marquee — shows store highlights, local SEO phrases, and
 * friendly Hinglish messages. Animates continuously with CSS, no JS overhead.
 */

const tickerItems = [
  "🛒 Sarvan Tiwari Kirana Store — Aswan Tiwari, Janghai",
  "🥬 Aaj ki taazi sabzi uplabdh hai — WhatsApp karein",
  "📍 Kirana Store in Janghai, Jaunpur, UP",
  "☎️ Call: 9452300979 | 7318228879",
  "🌾 Rice • Atta • Dal • Masale • Tel — Sab Milta Hai",
  "🏠 Ghar ki zaroorat ki har cheez — ek hi jagah",
  "🍪 Biscuit • Namkeen • Snacks • Packaged Food",
  "💚 Local Family Store — Serving Janghai Since Years",
  "📦 Daily Needs • Grocery • Household Items",
  "🌶️ Fresh Masale aur Kirana — Sab Uplabdh",
  "📲 WhatsApp pe order ki jaankari lein",
  "🧼 Soap • Detergent • Cleaning Supplies",
  "☕ Chai-Patti • Coffee • Beverages bhi milte hain",
  "🏡 Aswan Tiwari ka Apna Kirana Store",
];

export default function MarqueeTicker() {
  // Duplicate items to create seamless loop
  const items = [...tickerItems, ...tickerItems];

  return (
    <div
      className="bg-[#1a5c2a] overflow-hidden py-2.5 relative"
      aria-label="Store highlights ticker"
      role="marquee"
    >
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#1a5c2a] to-transparent z-10 pointer-events-none" aria-hidden="true" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#1a5c2a] to-transparent z-10 pointer-events-none" aria-hidden="true" />

      <div
        className="flex gap-0 whitespace-nowrap"
        style={{
          animation: "marquee 55s linear infinite",
        }}
      >
        {items.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-1 text-white text-xs sm:text-sm font-medium px-6 py-0.5"
          >
            {item}
            <span className="mx-4 text-white/30 font-bold" aria-hidden="true">|</span>
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .flex[style*="marquee"] {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
