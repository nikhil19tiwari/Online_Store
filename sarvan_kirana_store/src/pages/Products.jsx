import { useEffect, useRef } from "react";
import Container from "../components/common/Container.jsx";
import SectionHeading from "../components/common/SectionHeading.jsx";
import Button from "../components/common/Button.jsx";
import { kiranaCategories } from "../data/categories.js";
import { whatsappUrls } from "../utils/whatsapp.js";
import { MessageCircle } from "lucide-react";

function CategoryCard({ category, index }) {
  return (
    <article
      className="reveal card-hover bg-white rounded-2xl overflow-hidden shadow-sm border border-[#d1f0da] flex flex-col group"
      style={{ transitionDelay: `${(index % 3) * 0.09}s` }}
    >
      <div className="relative h-44 overflow-hidden bg-[#f0faf3] img-zoom">
        <img
          src={category.image}
          alt={category.imageAlt}
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
        <div className="absolute top-3 left-3 w-9 h-9 bg-white/90 backdrop-blur rounded-lg flex items-center justify-center text-lg shadow-sm" aria-hidden="true">
          {category.emoji}
        </div>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-bold text-[#1c1c1e] text-base mb-2 group-hover:text-[#1a5c2a] transition-colors">
          {category.name}
        </h3>
        <p className="text-[#6b7280] text-sm leading-relaxed">
          {category.description}
        </p>
      </div>
    </article>
  );
}

export default function Products() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("revealed"), i * 80);
            });
          }
        });
      },
      { threshold: 0.08 }
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
            ✦ Kirana & Grocery
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
            Our Grocery Products
          </h1>
          <p className="text-white/75 text-base sm:text-lg">
            Everyday essentials and kirana products available at Sarvan Tiwari
            Kirana Store, Janghai.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section aria-labelledby="categories-heading" className="py-16 md:py-20 bg-[#fdfaf5]">
        <Container>
          <div className="reveal text-center mb-12">
            <SectionHeading
              badge="Product Categories"
              title="Kirana & Grocery Categories"
              subtitle="These are representative product categories. Everyday essentials and grocery items may include the following — stock may vary. Call or WhatsApp to confirm availability."
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {kiranaCategories.map((category, index) => (
              <CategoryCard key={category.id} category={category} index={index} />
            ))}
          </div>

          <p className="reveal text-center text-[#9ca3af] text-xs mt-8 max-w-xl mx-auto">
            * Stock may vary. Contact us to confirm availability of specific products.
          </p>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-14 bg-[#f0faf3] border-t border-[#d1f0da]">
        <Container>
          <div className="reveal text-center max-w-lg mx-auto">
            <h2 className="text-2xl font-bold text-[#1a5c2a] mb-2">
              Can't find what you need?
            </h2>
            <p className="text-[#6b7280] text-sm mb-6">
              WhatsApp or call us to ask about a specific product or to check
              today's availability.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button
                href={whatsappUrls.inquiry}
                external
                variant="secondary"
                size="md"
                icon={MessageCircle}
                ariaLabel="WhatsApp us about product availability"
              >
                WhatsApp Product Inquiry
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
