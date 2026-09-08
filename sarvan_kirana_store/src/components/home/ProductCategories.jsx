import { useEffect, useRef } from "react";
import Container from "../common/Container.jsx";
import SectionHeading from "../common/SectionHeading.jsx";
import Button from "../common/Button.jsx";
import { kiranaCategories } from "../../data/categories.js";

function CategoryCard({ category, index }) {
  return (
    <article
      className="reveal card-hover bg-white rounded-2xl overflow-hidden shadow-sm border border-[#d1f0da] flex flex-col group"
      style={{ transitionDelay: `${(index % 4) * 0.08}s` }}
    >
      {/* Image */}
      <div className="relative h-40 overflow-hidden bg-[#f0faf3] img-zoom">
        <img
          src={category.image}
          alt={category.imageAlt}
          width={400}
          height={160}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = "none";
            e.target.parentElement.classList.add("img-placeholder");
          }}
        />
        {/* Emoji overlay */}
        <div
          className="absolute top-3 left-3 w-9 h-9 bg-white/90 backdrop-blur rounded-lg flex items-center justify-center text-lg shadow-sm"
          aria-hidden="true"
        >
          {category.emoji}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-bold text-[#1c1c1e] text-base mb-1.5 group-hover:text-[#1a5c2a] transition-colors">
          {category.name}
        </h3>
        <p className="text-[#6b7280] text-sm leading-relaxed flex-1">
          {category.description}
        </p>
      </div>
    </article>
  );
}

export default function ProductCategories() {
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
    <section
      ref={ref}
      aria-labelledby="products-heading"
      className="py-16 md:py-20 bg-[#fdfaf5]"
    >
      <Container>
        <div className="reveal text-center mb-12">
          <SectionHeading
            badge="Kirana & Grocery"
            title="Daily Grocery Essentials"
            subtitle="Everyday essentials and grocery items commonly available at our store. Stock may vary — call or WhatsApp to confirm availability."
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
          {kiranaCategories.map((category, index) => (
            <CategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>

        {/* Disclaimer */}
        <p className="reveal text-center text-[#9ca3af] text-xs mt-8 max-w-xl mx-auto">
          * Product availability may vary. For specific item inquiries, please
          call or WhatsApp us.
        </p>

        <div className="reveal text-center mt-8">
          <Button href="/products" variant="outline" size="md" className="inline-flex">
            View All Categories
          </Button>
        </div>
      </Container>
    </section>
  );
}
