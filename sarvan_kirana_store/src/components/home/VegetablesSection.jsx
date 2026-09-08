import { useEffect, useRef } from "react";
import { MessageCircle } from "lucide-react";
import Container from "../common/Container.jsx";
import SectionHeading from "../common/SectionHeading.jsx";
import Button from "../common/Button.jsx";
import { vegetableCategories } from "../../data/categories.js";
import { whatsappUrls } from "../../utils/whatsapp.js";

function VegetableCard({ category, index }) {
  return (
    <article
      className="reveal card-hover bg-white rounded-2xl overflow-hidden shadow-sm border border-[#d1f0da] group"
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="relative h-48 overflow-hidden img-zoom">
        <img
          src={category.image}
          alt={category.imageAlt}
          width={400}
          height={192}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = "none";
            e.target.parentElement.classList.add("img-placeholder");
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <span
            className="text-2xl mb-1 block"
            role="img"
            aria-hidden="true"
          >
            {category.emoji}
          </span>
          <h3 className="text-white font-bold text-base group-hover:text-[#86efac] transition-colors">
            {category.name}
          </h3>
        </div>
      </div>
      <div className="p-4">
        <p className="text-[#6b7280] text-sm leading-relaxed">
          {category.description}
        </p>
      </div>
    </article>
  );
}

export default function VegetablesSection() {
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
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      aria-labelledby="vegetables-heading"
      className="py-16 md:py-20 bg-white"
    >
      <Container>
        <div className="reveal text-center mb-12">
          <SectionHeading
            badge="Fresh Produce"
            title="Fresh Vegetables for Your Daily Needs"
            subtitle="We stock fresh vegetables alongside our kirana goods. Availability changes with the season — ask us about what's fresh today."
          />
        </div>

        {/* Hero veggie image */}
        <div className="reveal mb-10 rounded-2xl overflow-hidden shadow-md img-zoom relative">
          <img
            src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=1200&q=75&auto=format"
            alt="A colourful display of fresh vegetables at the market"
            width={1200}
            height={400}
            loading="lazy"
            decoding="async"
            className="w-full h-52 sm:h-64 md:h-72 object-cover"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.parentElement.classList.add("img-placeholder", "h-52");
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a5c2a]/70 to-transparent flex items-center">
            <div className="px-8 py-6 text-white max-w-md">
              <p className="text-sm font-semibold text-[#86efac] mb-1 uppercase tracking-wide">
                Fresh Daily
              </p>
              <p className="text-xl sm:text-2xl font-bold leading-snug">
                Vegetables straight from the market to your kitchen
              </p>
            </div>
          </div>
        </div>

        {/* Category cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {vegetableCategories.map((category, index) => (
            <VegetableCard key={category.id} category={category} index={index} />
          ))}
        </div>

        {/* CTA */}
        <div className="reveal text-center mt-12 bg-[#f0faf3] border border-[#d1f0da] rounded-2xl p-8">
          <p className="text-[#1a5c2a] font-semibold text-lg mb-2">
            Want to know what's available today?
          </p>
          <p className="text-[#6b7280] text-sm mb-5">
            Fresh vegetable stock changes daily. WhatsApp us to ask about
            today's availability.
          </p>
          <Button
            href={whatsappUrls.vegetables}
            external
            variant="secondary"
            size="md"
            icon={MessageCircle}
            ariaLabel="WhatsApp Sarvan Tiwari Kirana Store to ask about vegetable availability"
          >
            Ask About Today's Availability
          </Button>
        </div>
      </Container>
    </section>
  );
}
