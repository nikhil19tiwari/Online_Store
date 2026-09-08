import { useEffect, useRef } from "react";
import { Leaf, ShoppingBasket, Users, Phone } from "lucide-react";

const features = [
  {
    id: "fresh-vegetables",
    icon: Leaf,
    title: "Fresh Vegetables",
    description: "Fresh vegetables available for your daily needs.",
    color: "bg-[#f0faf3]",
    iconColor: "text-[#1a5c2a]",
    iconBg: "bg-[#d1f0da]",
    borderColor: "border-[#d1f0da]",
  },
  {
    id: "daily-groceries",
    icon: ShoppingBasket,
    title: "Daily Groceries",
    description: "Essential kirana products for your home.",
    color: "bg-[#fffbeb]",
    iconColor: "text-[#d97706]",
    iconBg: "bg-[#fef3c7]",
    borderColor: "border-[#fef3c7]",
  },
  {
    id: "local-trusted",
    icon: Users,
    title: "Local & Trusted",
    description: "Serving families in the local community.",
    color: "bg-[#f0faf3]",
    iconColor: "text-[#1a5c2a]",
    iconBg: "bg-[#d1f0da]",
    borderColor: "border-[#d1f0da]",
  },
  {
    id: "easy-contact",
    icon: Phone,
    title: "Easy Contact",
    description: "Call or WhatsApp us whenever you need assistance.",
    color: "bg-[#fffbeb]",
    iconColor: "text-[#d97706]",
    iconBg: "bg-[#fef3c7]",
    borderColor: "border-[#fef3c7]",
  },
];

export default function TrustFeatures() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("revealed"), i * 120);
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      aria-labelledby="trust-features-heading"
      className="py-14 md:py-18 bg-[#fdfaf5]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 id="trust-features-heading" className="sr-only">
          Why Shop at Sarvan Tiwari Kirana Store
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <article
                key={feature.id}
                className={`reveal card-hover rounded-2xl ${feature.color} border ${feature.borderColor} p-6 flex flex-col gap-4 shadow-sm`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`w-12 h-12 rounded-xl ${feature.iconBg} flex items-center justify-center flex-shrink-0`}
                  aria-hidden="true"
                >
                  <Icon size={22} className={feature.iconColor} />
                </div>
                <div>
                  <h3 className="font-bold text-[#1c1c1e] text-base mb-1.5">
                    {feature.title}
                  </h3>
                  <p className="text-[#6b7280] text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
