import { Phone, MessageCircle, MapPin } from "lucide-react";
import business from "../../config/business.js";
import { whatsappUrls } from "../../utils/whatsapp.js";
import { getMapsUrl } from "../../utils/maps.js";

/**
 * MobileActionBar — fixed bottom action bar for mobile.
 * Hidden on md+ screens where a floating widget / navbar CTA is shown instead.
 * Respects safe-area-inset-bottom for modern mobile devices.
 */
export default function MobileActionBar() {
  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 mobile-action-bar"
      role="navigation"
      aria-label="Quick contact actions"
    >
      <div className="bg-white border-t border-[#d1f0da] shadow-[0_-4px_24px_rgba(26,92,42,0.15)]">
        <div className="grid grid-cols-3 gap-0">
          {/* Call */}
          <a
            href={`tel:${business.phoneNumbers[0]}`}
            className="flex flex-col items-center justify-center gap-1 py-3 px-2 text-[#1a5c2a] hover:bg-[#f0faf3] active:bg-[#d1f0da] transition-colors min-h-[60px] focus-visible:outline-2 focus-visible:outline-[#f59e0b]"
            aria-label={`Call ${business.name} at ${business.phoneNumbers[0]}`}
          >
            <div className="w-9 h-9 rounded-full bg-[#f0faf3] flex items-center justify-center">
              <Phone size={18} className="text-[#1a5c2a]" aria-hidden="true" />
            </div>
            <span className="text-xs font-semibold text-[#1a5c2a]">Call</span>
          </a>

          {/* WhatsApp — highlighted centre button */}
          <a
            href={whatsappUrls.general}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-1 py-3 px-2 relative focus-visible:outline-2 focus-visible:outline-[#f59e0b]"
            aria-label="Chat with Sarvan Tiwari Kirana Store on WhatsApp"
          >
            {/* Elevated centre button */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-[#25d366] flex items-center justify-center shadow-[0_4px_16px_rgba(37,211,102,0.4)] border-4 border-white">
              <MessageCircle size={22} className="text-white" aria-hidden="true" />
            </div>
            <span className="text-xs font-semibold text-[#25d366] mt-9">WhatsApp</span>
          </a>

          {/* Directions */}
          <a
            href={getMapsUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-1 py-3 px-2 text-[#1a5c2a] hover:bg-[#f0faf3] active:bg-[#d1f0da] transition-colors min-h-[60px] focus-visible:outline-2 focus-visible:outline-[#f59e0b]"
            aria-label="Get directions to Sarvan Tiwari Kirana Store on Google Maps"
          >
            <div className="w-9 h-9 rounded-full bg-[#f0faf3] flex items-center justify-center">
              <MapPin size={18} className="text-[#1a5c2a]" aria-hidden="true" />
            </div>
            <span className="text-xs font-semibold text-[#1a5c2a]">Directions</span>
          </a>
        </div>
      </div>
    </div>
  );
}
