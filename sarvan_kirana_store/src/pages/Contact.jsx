import { useEffect, useRef, useState } from "react";
import { Phone, MessageCircle, MapPin, Copy, Check } from "lucide-react";
import Container from "../components/common/Container.jsx";
import business from "../config/business.js";
import { whatsappUrls } from "../utils/whatsapp.js";
import { getMapsUrl } from "../utils/maps.js";

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    <button
      type="button"
      onClick={copy}
      className="p-1.5 rounded-lg text-[#9ca3af] hover:text-[#1a5c2a] hover:bg-[#f0faf3] transition-colors focus-visible:outline-2 focus-visible:outline-[#f59e0b]"
      aria-label={copied ? "Copied!" : `Copy ${text}`}
    >
      {copied ? (
        <Check size={14} className="text-[#2d8a4e]" />
      ) : (
        <Copy size={14} />
      )}
    </button>
  );
}

export default function Contact() {
  const ref = useRef(null);
  const { address } = business;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("revealed"), i * 90);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <main id="main-content" ref={ref}>
      {/* Page Hero */}
      <section className="hero-gradient py-16 md:py-20 text-white text-center">
        <div className="mx-auto max-w-2xl px-4">
          <div className="inline-flex items-center gap-2 bg-white/12 border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-5 text-white/90">
            ✦ Get In Touch
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
            Contact Us
          </h1>
          <p className="text-white/75 text-base sm:text-lg">
            Call, WhatsApp, or visit us at our store in Aswan Tiwari, Janghai,
            Jaunpur, Uttar Pradesh.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section aria-labelledby="contact-info-heading" className="py-16 md:py-20 bg-[#fdfaf5]">
        <Container>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Store Info Card */}
            <div className="reveal bg-white rounded-2xl shadow-sm border border-[#d1f0da] p-7">
              <h2 id="contact-info-heading" className="text-xl font-bold text-[#1a5c2a] mb-5 flex items-center gap-2">
                <MapPin size={20} aria-hidden="true" />
                Store Information
              </h2>

              <address className="not-italic">
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-[#9ca3af] font-semibold uppercase tracking-wider mb-1.5">
                      Business Name
                    </p>
                    <p className="font-bold text-[#1c1c1e] text-base">
                      {business.name}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-[#9ca3af] font-semibold uppercase tracking-wider mb-1.5">
                      Address
                    </p>
                    <p className="text-[#374151] text-sm leading-relaxed">
                      {address.village}, {address.locality},
                      <br />
                      {address.district}, {address.state}
                      <br />
                      India – {address.postalCode}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-[#9ca3af] font-semibold uppercase tracking-wider mb-2">
                      Phone Numbers
                    </p>
                    <div className="space-y-2">
                      {business.phoneNumbers.map((num) => (
                        <div key={num} className="flex items-center justify-between bg-[#f0faf3] border border-[#d1f0da] rounded-xl px-3.5 py-2.5">
                          <a
                            href={`tel:${num}`}
                            className="flex items-center gap-2.5 text-[#1a5c2a] font-semibold text-sm hover:text-[#258541] transition-colors focus-visible:outline-2 focus-visible:outline-[#f59e0b] rounded"
                            aria-label={`Call ${num}`}
                          >
                            <Phone size={15} aria-hidden="true" />
                            {num}
                          </a>
                          <CopyButton text={num} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </address>
            </div>

            {/* Action Buttons Card */}
            <div className="reveal flex flex-col gap-4" style={{ transitionDelay: "0.1s" }}>
              <h2 className="text-xl font-bold text-[#1a5c2a]">
                Reach Us Directly
              </h2>

              <div className="space-y-3">
                {/* Call primary */}
                <a
                  href={`tel:${business.phoneNumbers[0]}`}
                  className="flex items-center gap-4 bg-[#1a5c2a] hover:bg-[#1f7033] text-white rounded-2xl px-5 py-4 shadow-sm hover:shadow-md transition-all duration-200 group min-h-[72px]"
                  aria-label={`Call Sarvan Tiwari Kirana Store at ${business.phoneNumbers[0]}`}
                >
                  <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
                    <Phone size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-bold text-base">Call Us</p>
                    <p className="text-white/75 text-sm">{business.phoneNumbers[0]}</p>
                  </div>
                </a>

                {/* Call alternate */}
                <a
                  href={`tel:${business.phoneNumbers[1]}`}
                  className="flex items-center gap-4 bg-white hover:bg-[#f0faf3] border border-[#d1f0da] text-[#1c1c1e] rounded-2xl px-5 py-4 shadow-sm hover:shadow-md transition-all duration-200 min-h-[72px]"
                  aria-label={`Call alternate number ${business.phoneNumbers[1]}`}
                >
                  <div className="w-11 h-11 rounded-xl bg-[#f0faf3] flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-[#1a5c2a]" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-semibold text-base">Alternate Number</p>
                    <p className="text-[#6b7280] text-sm">{business.phoneNumbers[1]}</p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={whatsappUrls.general}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-[#25d366] hover:bg-[#20bd5a] text-white rounded-2xl px-5 py-4 shadow-sm hover:shadow-md transition-all duration-200 min-h-[72px]"
                  aria-label="Chat with Sarvan Tiwari Kirana Store on WhatsApp"
                >
                  <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                    <MessageCircle size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-bold text-base">WhatsApp</p>
                    <p className="text-white/80 text-sm">Chat with us on WhatsApp</p>
                  </div>
                </a>

                {/* Directions */}
                <a
                  href={getMapsUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-white hover:bg-[#f0faf3] border border-[#d1f0da] text-[#1c1c1e] rounded-2xl px-5 py-4 shadow-sm hover:shadow-md transition-all duration-200 min-h-[72px]"
                  aria-label="Get directions to Sarvan Tiwari Kirana Store on Google Maps"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#f0faf3] flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-[#1a5c2a]" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-semibold text-base">Get Directions</p>
                    <p className="text-[#6b7280] text-sm">Open in Google Maps</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Location note */}
          <div className="reveal mt-12 max-w-4xl mx-auto bg-[#f0faf3] border border-[#d1f0da] rounded-2xl p-6 text-center">
            <MapPin size={22} className="text-[#1a5c2a] mx-auto mb-3" aria-hidden="true" />
            <h3 className="font-bold text-[#1a5c2a] text-lg mb-2">
              Find Us
            </h3>
            <p className="text-[#4b5563] text-sm leading-relaxed max-w-md mx-auto">
              We are located at <strong>{address.village}</strong>,{" "}
              <strong>{address.locality}</strong>, {address.district},{" "}
              {address.state} — {address.postalCode}. Use the "Get Directions"
              button above to open Google Maps.
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}
