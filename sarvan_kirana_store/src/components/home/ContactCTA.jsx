import { Phone, MessageCircle, MapPin } from "lucide-react";
import business from "../../config/business.js";
import { whatsappUrls } from "../../utils/whatsapp.js";
import { getMapsUrl } from "../../utils/maps.js";
import Button from "../common/Button.jsx";

export default function ContactCTA() {
  const { address } = business;

  return (
    <section
      aria-labelledby="contact-cta-heading"
      className="py-16 md:py-20 hero-gradient relative overflow-hidden"
    >
      {/* Decorative */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-white/5 -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 rounded-full bg-white/5 translate-y-1/3" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="inline-flex items-center gap-2 bg-white/12 border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium text-white/90 mb-6">
          <MapPin size={13} aria-hidden="true" />
          {address.locality}, {address.district}
        </div>

        <h2
          id="contact-cta-heading"
          className="text-3xl sm:text-4xl font-bold leading-tight mb-4"
        >
          Ready to Shop?{" "}
          <span className="text-[#fbbf24]">Contact Us Today</span>
        </h2>

        <p className="text-white/75 text-base sm:text-lg mb-4 max-w-xl mx-auto">
          Call, WhatsApp, or visit us at our store in Aswan Tiwari, Janghai.
          We are here to help with all your grocery and vegetable needs.
        </p>

        <address className="not-italic text-white/65 text-sm mb-10">
          {address.village}, {address.locality}, {address.district},{" "}
          {address.state} – {address.postalCode}
        </address>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-3">
          <Button
            href={`tel:${business.phoneNumbers[0]}`}
            variant="accent"
            size="lg"
            icon={Phone}
            ariaLabel={`Call Sarvan Tiwari Kirana Store at ${business.phoneNumbers[0]}`}
          >
            Call {business.phoneNumbers[0]}
          </Button>

          <Button
            href={whatsappUrls.general}
            external
            variant="white"
            size="lg"
            icon={MessageCircle}
            ariaLabel="Chat with us on WhatsApp"
          >
            WhatsApp Us
          </Button>

          <Button
            href={getMapsUrl()}
            external
            variant="outline-white"
            size="lg"
            icon={MapPin}
            ariaLabel="Get directions to Sarvan Tiwari Kirana Store"
          >
            Get Directions
          </Button>
        </div>

        <div className="mt-6">
          <a
            href={`tel:${business.phoneNumbers[1]}`}
            className="text-white/55 hover:text-white/80 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-[#f59e0b] rounded"
            aria-label={`Alternate phone number: ${business.phoneNumbers[1]}`}
          >
            Alternate: {business.phoneNumbers[1]}
          </a>
        </div>
      </div>
    </section>
  );
}
