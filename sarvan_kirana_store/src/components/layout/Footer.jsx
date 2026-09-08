import { Link } from "react-router-dom";
import { Phone, MapPin, ShoppingBasket, MessageCircle } from "lucide-react";
import business from "../../config/business.js";
import { whatsappUrls } from "../../utils/whatsapp.js";
import { getMapsUrl } from "../../utils/maps.js";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Vegetables", to: "/vegetables" },
  { label: "Contact", to: "/contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { address } = business;

  return (
    <footer
      role="contentinfo"
      className="bg-[#0d3318] text-white"
    >
      {/* Main footer content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              to="/"
              className="inline-flex items-center gap-3 mb-5 group focus-visible:outline-2 focus-visible:outline-[#f59e0b] rounded-lg"
              aria-label="Sarvan Tiwari Kirana Store home"
            >
              <div className="w-12 h-12 rounded-xl bg-[#1a5c2a] flex items-center justify-center shadow border border-white/10 group-hover:bg-[#258541] transition-colors">
                <ShoppingBasket size={24} className="text-white" />
              </div>
              <div>
                <p className="font-bold text-white text-base leading-tight">
                  {business.name}
                </p>
                <p className="text-[#86efac] text-xs mt-0.5">
                  Kirana & Fresh Vegetables
                </p>
              </div>
            </Link>

            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              Your local destination for everyday groceries and fresh
              vegetables in Aswan Tiwari, Janghai and nearby areas of Jaunpur,
              Uttar Pradesh.
            </p>

            {/* Contact info */}
            <div className="mt-6 space-y-3">
              <a
                href={`tel:${business.phoneNumbers[0]}`}
                className="flex items-center gap-2.5 text-white/80 hover:text-white text-sm transition-colors group"
                aria-label={`Call us at ${business.phoneNumbers[0]}`}
              >
                <Phone size={15} className="text-[#86efac] flex-shrink-0" aria-hidden="true" />
                <span>{business.phoneNumbers[0]}</span>
              </a>
              <a
                href={`tel:${business.phoneNumbers[1]}`}
                className="flex items-center gap-2.5 text-white/80 hover:text-white text-sm transition-colors"
                aria-label={`Call us at ${business.phoneNumbers[1]}`}
              >
                <Phone size={15} className="text-[#86efac] flex-shrink-0" aria-hidden="true" />
                <span>{business.phoneNumbers[1]}</span>
              </a>
              <address
                className="flex items-start gap-2.5 text-white/70 text-sm not-italic"
              >
                <MapPin size={15} className="text-[#86efac] flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  {address.village}, {address.locality},{" "}
                  {address.district}, {address.state} –{" "}
                  {address.postalCode}
                </span>
              </address>
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer navigation">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Quick Links
            </h3>
            <ul role="list" className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-white/70 hover:text-white text-sm transition-colors focus-visible:outline-2 focus-visible:outline-[#f59e0b] rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact / Actions */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Get In Touch
            </h3>
            <div className="space-y-3">
              <a
                href={`tel:${business.phoneNumbers[0]}`}
                className="flex items-center gap-3 w-full bg-white/8 hover:bg-white/15 border border-white/10 rounded-xl px-4 py-3 text-sm text-white/85 hover:text-white transition-all duration-200 min-h-[44px]"
                aria-label={`Call ${business.name} at ${business.phoneNumbers[0]}`}
              >
                <Phone size={16} className="text-[#86efac]" aria-hidden="true" />
                Call {business.phoneNumbers[0]}
              </a>
              <a
                href={whatsappUrls.general}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 w-full bg-[#25d366]/15 hover:bg-[#25d366]/25 border border-[#25d366]/25 rounded-xl px-4 py-3 text-sm text-white/85 hover:text-white transition-all duration-200 min-h-[44px]"
                aria-label="Chat with us on WhatsApp"
              >
                <MessageCircle size={16} className="text-[#25d366]" aria-hidden="true" />
                WhatsApp Us
              </a>
              <a
                href={getMapsUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 w-full bg-white/8 hover:bg-white/15 border border-white/10 rounded-xl px-4 py-3 text-sm text-white/85 hover:text-white transition-all duration-200 min-h-[44px]"
                aria-label="Get directions to Sarvan Tiwari Kirana Store on Google Maps"
              >
                <MapPin size={16} className="text-[#86efac]" aria-hidden="true" />
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-white/50 text-xs">
          <p>
            © {currentYear} {business.name}. All rights reserved.
          </p>
          <p>
            {address.village}, {address.locality}, {address.district},{" "}
            {address.state} – {address.postalCode}
          </p>
        </div>
      </div>
    </footer>
  );
}
