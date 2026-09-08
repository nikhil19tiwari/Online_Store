import { useEffect, useRef } from "react";
import { CheckCircle2, Heart, ShoppingBasket } from "lucide-react";
import Container from "../components/common/Container.jsx";
import SectionHeading from "../components/common/SectionHeading.jsx";
import Button from "../components/common/Button.jsx";
import business from "../config/business.js";
import { whatsappUrls } from "../utils/whatsapp.js";
import { picture1, picture2, image3, image5 } from "../data/storeImages.js";

const values = [
  {
    icon: Heart,
    title: "Family-Owned & Local",
    text: "We are a family-run local store and understand what local families need every day.",
  },
  {
    icon: ShoppingBasket,
    title: "Everyday Essentials",
    text: "From rice and atta to spices and household items — daily essentials available at your neighbourhood store.",
  },
  {
    icon: CheckCircle2,
    title: "Fresh Vegetables",
    text: "Fresh vegetables available alongside our kirana goods, making shopping convenient for local families.",
  },
];

const whyChooseUs = [
  "Convenient neighbourhood shopping",
  "Everyday kirana essentials",
  "Fresh vegetables available",
  "Friendly, approachable service",
  "Easy contact — call or WhatsApp",
  "Serving the local Janghai community",
];

export default function About() {
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
            ✦ Our Story
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
            About Sarvan Tiwari Kirana Store
          </h1>
          <p className="text-white/75 text-base sm:text-lg">
            A local family-owned kirana and fresh vegetable store in Aswan
            Tiwari, Janghai, Jaunpur.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section aria-labelledby="about-story-heading" className="py-16 md:py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="reveal relative">
              <div className="rounded-2xl overflow-hidden shadow-lg img-zoom">
                <img
                  src={picture2}
                  alt="Sarvan Tiwari at his Kirana Store — store collage with signboard in Janghai"
                  width={600}
                  height={440}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-72 sm:h-80 lg:h-96 object-cover object-top"
                />
              </div>
              <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-2xl bg-[#d1f0da]/30" aria-hidden="true" />
            </div>

            {/* Text */}
            <div>
              <div className="reveal">
                <h2 id="about-story-heading" className="text-2xl sm:text-3xl font-bold text-[#1a5c2a] mb-5">
                  Your Neighbourhood Kirana Store
                </h2>
              </div>

              <div className="reveal space-y-4 text-[#4b5563] leading-relaxed">
                <p>
                  <strong className="text-[#1c1c1e]">{business.name}</strong>{" "}
                  is a locally-owned kirana and fresh vegetable store located in{" "}
                  <strong className="text-[#1c1c1e]">{address.village}</strong>,{" "}
                  <strong className="text-[#1c1c1e]">{address.locality}</strong>,{" "}
                  {address.district}, {address.state}.
                </p>
                <p>
                  The store is run by{" "}
                  <strong className="text-[#1c1c1e]">{business.owner}</strong> and
                  is a neighbourhood destination for families in the Janghai area
                  looking for everyday grocery essentials and fresh vegetables.
                </p>
                <p>
                  At our store, you will find a wide selection of kirana products
                  — rice, wheat flour, pulses, spices, cooking oil, sugar, salt,
                  tea, biscuits, snacks, packaged food and household essentials.
                  We also stock fresh vegetables, so your daily cooking needs are
                  taken care of under one roof.
                </p>
                <p>
                  We believe in making local shopping easy and convenient. If you
                  need something, just call us or send a WhatsApp message — we are
                  always happy to help.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section aria-labelledby="values-heading" className="py-16 bg-[#fdfaf5]">
        <Container>
          <div className="reveal text-center mb-10">
            <SectionHeading
              badge="Our Values"
              title="What We Stand For"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="reveal card-hover bg-white rounded-2xl p-6 shadow-sm border border-[#d1f0da] text-center flex flex-col items-center gap-4"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-[#f0faf3] flex items-center justify-center">
                    <Icon size={22} className="text-[#1a5c2a]" aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-[#1c1c1e] text-base">{v.title}</h3>
                  <p className="text-[#6b7280] text-sm leading-relaxed">{v.text}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section aria-labelledby="why-choose-heading" className="py-16 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="reveal text-center mb-10">
              <SectionHeading
                badge="Why Shop Local"
                title="Why Local Customers Choose Us"
              />
            </div>
            <ul className="reveal grid grid-cols-1 sm:grid-cols-2 gap-3" role="list">
              {whyChooseUs.map((item) => (
                <li key={item} className="flex items-center gap-3 bg-[#f0faf3] border border-[#d1f0da] rounded-xl px-4 py-3 text-sm font-medium text-[#1c1c1e]">
                  <CheckCircle2 size={17} className="text-[#2d8a4e] flex-shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Contact CTA */}
      <section className="py-14 bg-[#f0faf3] border-t border-[#d1f0da]">
        <Container>
          <div className="reveal text-center">
            <h2 className="text-2xl font-bold text-[#1a5c2a] mb-2">
              Come Visit Us
            </h2>
            <p className="text-[#6b7280] text-sm mb-6">
              {address.village}, {address.locality}, {address.district},{" "}
              {address.state} – {address.postalCode}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button
                href={`tel:${business.phoneNumbers[0]}`}
                variant="primary"
                size="md"
                ariaLabel={`Call us at ${business.phoneNumbers[0]}`}
              >
                Call {business.phoneNumbers[0]}
              </Button>
              <Button
                href={whatsappUrls.general}
                external
                variant="secondary"
                size="md"
                ariaLabel="WhatsApp us"
              >
                WhatsApp Us
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
