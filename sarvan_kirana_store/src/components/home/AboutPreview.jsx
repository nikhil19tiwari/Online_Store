import { useEffect, useRef } from "react";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../common/Container.jsx";
import SectionHeading from "../common/SectionHeading.jsx";
import Button from "../common/Button.jsx";
import { picture1, image5 } from "../../data/storeImages.js";

const whyChooseUs = [
  "Convenient local shopping — no need to travel far",
  "Everyday grocery essentials always within reach",
  "Fresh vegetables for daily cooking needs",
  "Friendly, helpful service from a local family",
  "Easy communication — just call or WhatsApp",
  "A store that understands your everyday needs",
];

export default function AboutPreview() {
  const ref = useRef(null);

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
      { threshold: 0.12 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      aria-labelledby="about-heading"
      className="py-16 md:py-20 bg-white"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Image column — real photo of Sarvan Tiwari */}
          <div className="reveal relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-xl img-zoom">
              <img
                src={picture1}
                alt="Sarvan Tiwari — owner of Sarvan Tiwari Kirana Store in Janghai, smiling at his counter"
                width={600}
                height={440}
                loading="lazy"
                decoding="async"
                className="w-full h-72 sm:h-80 lg:h-96 object-cover object-top"
              />
              {/* Overlay name badge */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/96 backdrop-blur rounded-xl px-4 py-3 shadow-lg border border-[#d1f0da]">
                  <p className="text-[#1a5c2a] font-bold text-sm leading-tight">
                    Sarvan Tiwari
                  </p>
                  <p className="text-[#6b7280] text-xs mt-0.5">
                    Owner — Sarvan Tiwari Kirana Store, Janghai
                  </p>
                </div>
              </div>
            </div>

            {/* Small vegetable inset photo */}
            <div className="absolute -bottom-6 -right-4 w-28 h-28 sm:w-36 sm:h-36 rounded-xl overflow-hidden shadow-xl border-4 border-white img-zoom hidden sm:block">
              <img
                src={image5}
                alt="Fresh vegetables at Sarvan Tiwari Kirana Store"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Decorative bg */}
            <div className="absolute -z-10 -bottom-4 -left-4 w-full h-full rounded-2xl bg-[#d1f0da]/40" aria-hidden="true" />
          </div>

          {/* Text column */}
          <div className="order-1 lg:order-2 sm:pb-6 lg:pb-0">
            <div className="reveal">
              <SectionHeading
                badge="About Us"
                title="About Sarvan Tiwari Kirana Store"
                align="left"
              />
            </div>

            <div className="reveal mt-5 space-y-3.5 text-[#4b5563] leading-relaxed text-sm sm:text-base">
              <p>
                <strong className="text-[#1c1c1e]">Sarvan Tiwari Kirana Store</strong> is
                a local family-owned grocery and fresh vegetable store serving the
                families of{" "}
                <strong className="text-[#1c1c1e]">Aswan Tiwari</strong> and the{" "}
                <strong className="text-[#1c1c1e]">Janghai area</strong> in Jaunpur,
                Uttar Pradesh.
              </p>
              <p>
                We are a neighbourhood kirana store where you can find your everyday
                groceries — from rice, atta and dals to spices, oil, tea and household
                essentials — all under one roof, right in your local community.
              </p>
              <p>
                We also sell{" "}
                <strong className="text-[#1c1c1e]">fresh vegetables</strong> so
                local families get everything they need without travelling far.
              </p>
            </div>

            {/* Why choose us */}
            <div className="reveal mt-7">
              <h3 className="text-[#1a5c2a] font-bold text-base sm:text-lg mb-4">
                Why Local Customers Choose Us
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2" role="list">
                {whyChooseUs.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#4b5563]">
                    <CheckCircle2
                      size={16}
                      className="text-[#2d8a4e] flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="reveal mt-7">
              <Button href="/about" variant="outline" size="md" className="inline-flex">
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
