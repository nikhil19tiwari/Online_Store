import { useEffect, useRef } from "react";
import { MessageCircle } from "lucide-react";
import Container from "../components/common/Container.jsx";
import SectionHeading from "../components/common/SectionHeading.jsx";
import Button from "../components/common/Button.jsx";
import { vegetableCategories } from "../data/categories.js";
import { whatsappUrls } from "../utils/whatsapp.js";
import { image5, image3 } from "../data/storeImages.js";

function VegetableCard({ category, index }) {
  return (
    <article
      className="reveal card-hover bg-white rounded-2xl overflow-hidden shadow-sm border border-[#d1f0da] group"
      style={{ transitionDelay: `${(index % 2) * 0.1}s` }}
    >
      <div className="relative h-52 overflow-hidden img-zoom">
        <img
          src={category.image}
          alt={category.imageAlt}
          width={400}
          height={208}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = "none";
            e.target.parentElement.classList.add("img-placeholder");
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <span className="text-2xl mb-1.5 block" role="img" aria-hidden="true">
            {category.emoji}
          </span>
          <h3 className="text-white font-bold text-lg group-hover:text-[#86efac] transition-colors">
            {category.name}
          </h3>
        </div>
      </div>
      <div className="p-5">
        <p className="text-[#6b7280] text-sm leading-relaxed">
          {category.description}
        </p>
      </div>
    </article>
  );
}

export default function Vegetables() {
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
    <main id="main-content" ref={ref}>
      {/* Page Hero */}
      <section className="hero-gradient py-0 relative overflow-hidden">
        <div className="relative">
          <div className="relative h-56 sm:h-64 md:h-72">
            <img
              src={image5}
              alt="Sarvan Tiwari standing outside his store with fresh vegetables — tomatoes, leafy greens, brinjal"
              width={800}
              height={400}
              loading="eager"
              fetchpriority="high"
              decoding="async"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0d3318]/70 via-[#1a5c2a]/60 to-[#0d3318]/80" />
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
            <div className="inline-flex items-center gap-2 bg-white/12 border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-4 text-white/90">
              ✦ Fresh Produce
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-3">
              Fresh Vegetables for Your Daily Needs
            </h1>
            <p className="text-white/75 text-base max-w-xl">
              Fresh vegetables available alongside our kirana goods at Sarvan
              Tiwari Kirana Store, Janghai.
            </p>
          </div>
        </div>
      </section>

      {/* Info Banner */}
      <div className="bg-[#f0faf3] border-b border-[#d1f0da] py-4">
        <Container>
          <p className="text-center text-[#1a5c2a] text-sm font-medium">
            🌿 Fresh vegetable availability changes daily. WhatsApp or call us
            to ask what's in stock today.
          </p>
        </Container>
      </div>

      {/* Categories */}
      <section aria-labelledby="veg-categories-heading" className="py-16 md:py-20 bg-[#fdfaf5]">
        <Container>
          <div className="reveal text-center mb-12">
            <SectionHeading
              badge="Vegetable Categories"
              title="What We Typically Stock"
              subtitle="The following categories represent the types of vegetables we generally carry. Seasonal availability may vary — contact us for today's fresh stock."
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {vegetableCategories.map((category, index) => (
              <VegetableCard key={category.id} category={category} index={index} />
            ))}
          </div>

          <p className="reveal text-center text-[#9ca3af] text-xs mt-8 max-w-lg mx-auto">
            * Vegetable availability varies by season and day. Contact us for
            current availability.
          </p>
        </Container>
      </section>

      {/* Gallery / Visual section */}
      <section aria-label="Vegetable gallery" className="py-4 bg-white">
        <Container>
          <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                src: image5,
                alt: "Sarvan Tiwari with fresh vegetables — tomatoes, leafy greens, brinjal outside his store",
              },
              {
                src: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&q=70&auto=format",
                alt: "Fresh leafy green vegetables",
              },
              {
                src: image3,
                alt: "Sarvan Tiwari Kirana Store fully stocked with grocery items and snacks",
              },
              {
                src: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&q=70&auto=format",
                alt: "Root vegetables including potatoes and onions",
              },
            ].map((img, i) => (
              <div key={i} className="rounded-xl overflow-hidden shadow-sm img-zoom h-36 md:h-44">
                <img
                  src={img.src}
                  alt={img.alt}
                  width={400}
                  height={176}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentElement.classList.add("img-placeholder");
                  }}
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-14 bg-[#f0faf3] border-t border-[#d1f0da]">
        <Container>
          <div className="reveal text-center max-w-lg mx-auto">
            <h2 className="text-2xl font-bold text-[#1a5c2a] mb-2">
              Ask About Today's Fresh Stock
            </h2>
            <p className="text-[#6b7280] text-sm mb-6">
              Fresh vegetable stock changes daily. WhatsApp us to know what's
              available right now.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button
                href={whatsappUrls.vegetables}
                external
                variant="secondary"
                size="md"
                icon={MessageCircle}
                ariaLabel="WhatsApp us to ask about today's vegetable availability"
              >
                Ask About Today's Availability
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
