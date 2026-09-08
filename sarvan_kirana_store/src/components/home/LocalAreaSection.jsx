import { useEffect, useRef } from "react";
import { MapPin, ShoppingBag, Heart } from "lucide-react";
import Container from "../common/Container.jsx";
import SectionHeading from "../common/SectionHeading.jsx";
import business from "../../config/business.js";

const reasons = [
  {
    icon: MapPin,
    title: "Right in Your Neighbourhood",
    text: "Located in Aswan Tiwari, Janghai — no need to travel far for your daily grocery needs.",
  },
  {
    icon: ShoppingBag,
    title: "Everything Under One Roof",
    text: "From atta and rice to fresh vegetables and household essentials — a complete local kirana store.",
  },
  {
    icon: Heart,
    title: "Family-Owned & Community-Focused",
    text: "We are a family-run store that understands the needs of local families in our community.",
  },
];

export default function LocalAreaSection() {
  const ref = useRef(null);
  const { address } = business;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("revealed"), i * 100);
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
    <section
      ref={ref}
      aria-labelledby="local-area-heading"
      className="py-16 md:py-20 bg-[#fdfaf5]"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Text side */}
          <div>
            <div className="reveal">
              <SectionHeading
                badge="Our Community"
                title={`Serving ${address.village}, ${address.locality} & Nearby Areas`}
                align="left"
              />
            </div>

            <div className="reveal mt-5 space-y-4 text-[#4b5563] leading-relaxed">
              <p>
                <strong className="text-[#1c1c1e]">{business.name}</strong> is
                a local grocery and fresh vegetable store serving families in{" "}
                <strong className="text-[#1c1c1e]">
                  {address.village}
                </strong>
                ,{" "}
                <strong className="text-[#1c1c1e]">{address.locality}</strong>
                ,{" "}
                <strong className="text-[#1c1c1e]">{address.district}</strong>,{" "}
                {address.state} and nearby areas.
              </p>
              <p>
                Visit the store for everyday kirana essentials — rice, wheat
                flour, pulses, spices, oil, sugar, tea, snacks and household
                goods — along with fresh vegetables for your daily cooking. We
                are your neighbourhood store, making it easy for local families
                to find what they need without travelling far.
              </p>
              <p>
                Whether you are in{" "}
                <strong className="text-[#1c1c1e]">{address.village}</strong>,{" "}
                <strong className="text-[#1c1c1e]">{address.locality}</strong>,
                or the surrounding villages of{" "}
                <strong className="text-[#1c1c1e]">{address.district}</strong>{" "}
                district, {address.state} — we are here to serve you.
              </p>
            </div>

            {/* Address block */}
            <div className="reveal mt-6 inline-flex items-start gap-3 bg-[#f0faf3] border border-[#d1f0da] rounded-xl px-5 py-4">
              <MapPin size={18} className="text-[#1a5c2a] flex-shrink-0 mt-0.5" aria-hidden="true" />
              <address className="not-italic text-sm text-[#374151] leading-relaxed">
                <strong className="text-[#1a5c2a] font-semibold block mb-0.5">
                  {business.name}
                </strong>
                {address.village}, {address.locality},
                <br />
                {address.district}, {address.state}
                <br />
                India – {address.postalCode}
              </address>
            </div>
          </div>

          {/* Reasons cards */}
          <div className="space-y-4">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div
                  key={reason.title}
                  className="reveal card-hover bg-white rounded-2xl p-5 shadow-sm border border-[#d1f0da] flex items-start gap-4"
                  style={{ transitionDelay: `${index * 0.12}s` }}
                >
                  <div className="w-11 h-11 rounded-xl bg-[#f0faf3] flex items-center justify-center flex-shrink-0" aria-hidden="true">
                    <Icon size={20} className="text-[#1a5c2a]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1c1c1e] text-base mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-[#6b7280] text-sm leading-relaxed">
                      {reason.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
