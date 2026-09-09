import { useState, useEffect, useCallback, useRef } from "react";
import { Phone, MessageCircle, MapPin, ChevronLeft, ChevronRight, Star } from "lucide-react";
import business from "../../config/business.js";
import { whatsappUrls } from "../../utils/whatsapp.js";
import { getMapsUrl } from "../../utils/maps.js";
import { heroSlides } from "../../data/storeImages.js";
import Button from "../common/Button.jsx";

/** Auto-advancing image carousel with dot and arrow navigation */
function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timerRef = useRef(null);

  const goTo = useCallback(
    (index) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrent(index);
      setTimeout(() => setIsTransitioning(false), 600);
    },
    [isTransitioning]
  );

  const next = useCallback(
    () => goTo((current + 1) % heroSlides.length),
    [current, goTo]
  );

  const prev = useCallback(
    () => goTo((current - 1 + heroSlides.length) % heroSlides.length),
    [current, goTo]
  );

  // Auto-advance every 4.5 seconds
  useEffect(() => {
    timerRef.current = setInterval(next, 4500);
    return () => clearInterval(timerRef.current);
  }, [next]);

  // Pause on hover
  const pauseAuto = () => clearInterval(timerRef.current);
  const resumeAuto = () => {
    timerRef.current = setInterval(next, 4500);
  };

  const slide = heroSlides[current];

  return (
    <div
      className="relative w-full h-full overflow-hidden rounded-2xl shadow-[0_24px_64px_rgba(0,0,0,0.4)] border border-white/10"
      onMouseEnter={pauseAuto}
      onMouseLeave={resumeAuto}
      role="region"
      aria-label="Store photo carousel"
      aria-roledescription="carousel"
    >
      {/* Slides */}
      {heroSlides.map((s, i) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            i === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          aria-hidden={i !== current}
        >
          <img
            src={s.image}
            alt={s.alt}
            className="w-full h-full object-cover object-center"
            loading={i === 0 ? "eager" : "lazy"}
            decoding="async"
          />
          {/* Gradient overlay so caption is readable */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

          {/* Caption */}
          <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
            <p className="text-white font-bold text-base sm:text-lg leading-snug drop-shadow-lg">
              {s.caption}
            </p>
            <p className="text-white/80 text-xs sm:text-sm mt-0.5 drop-shadow">
              {s.sub}
            </p>
          </div>
        </div>
      ))}

      {/* Left / Right Arrows */}
      <button
        type="button"
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-30 w-9 h-9 rounded-full bg-black/35 hover:bg-black/60 backdrop-blur text-white flex items-center justify-center transition-all focus-visible:outline-2 focus-visible:outline-[#f59e0b]"
        aria-label="Previous photo"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        type="button"
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-30 w-9 h-9 rounded-full bg-black/35 hover:bg-black/60 backdrop-blur text-white flex items-center justify-center transition-all focus-visible:outline-2 focus-visible:outline-[#f59e0b]"
        aria-label="Next photo"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dot Indicators */}
      <div
        className="absolute bottom-16 left-1/2 -translate-x-1/2 z-30 flex gap-2"
        role="tablist"
        aria-label="Slide indicators"
      >
        {heroSlides.map((s, i) => (
          <button
            key={s.id}
            type="button"
            role="tab"
            aria-selected={i === current}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goTo(i)}
            className={`rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-[#f59e0b] ${
              i === current
                ? "w-6 h-2.5 bg-[#f59e0b]"
                : "w-2.5 h-2.5 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute top-3 right-3 z-30 bg-black/40 backdrop-blur text-white text-xs font-semibold px-2.5 py-1 rounded-full">
        {current + 1} / {heroSlides.length}
      </div>
    </div>
  );
}

export default function Hero() {
  const { address } = business;

  return (
    <section
      className="relative overflow-hidden hero-gradient"
      aria-label="Welcome to Sarvan Tiwari Kirana Store"
    >
      {/* Decorative dots */}
      <div className="absolute inset-0 pointer-events-none opacity-5" aria-hidden="true"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-white/5 -translate-y-1/3 translate-x-1/3 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-white/5 translate-y-1/3 -translate-x-1/3 pointer-events-none" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* ── Left — Text Content ───────────────────────── */}
          <div className="text-white pb-10">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 bg-white/12 border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium text-white/90 mb-5 animate-fade-in">
              <Star size={13} fill="currentColor" className="text-[#fbbf24]" aria-hidden="true" />
              <span>Trusted Local Kirana Store — Janghai, Jaunpur</span>
            </div>

            {/* H1 */}
            <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-tight tracking-tight mb-4 animate-fade-in-up">
              आपका भरोसेमंद{" "}
              <span className="text-[#fbbf24]">किराना</span> और{" "}
              <span className="text-[#86efac]">ताज़ी सब्ज़ी</span> की दुकान
            </h1>

            <p className="text-white font-bold text-lg sm:text-xl mb-2 animate-fade-in-up delay-100">
              Your Trusted Local Kirana & Fresh Vegetable Store
            </p>

            <p className="text-white/75 text-sm sm:text-base leading-relaxed mb-7 max-w-md animate-fade-in-up delay-200">
              Quality groceries, daily essentials and fresh vegetables for
              families in Aswan Tiwaran, Janghai and nearby areas.
            </p>

            {/* Address */}
            <div className="flex items-start gap-2.5 mb-7 text-white/75 text-sm animate-fade-in-up delay-300">
              <MapPin size={16} className="flex-shrink-0 mt-0.5 text-[#86efac]" aria-hidden="true" />
              <address className="not-italic leading-relaxed">
                <strong className="text-white font-semibold block">{business.name}</strong>
                {address.village}, {address.locality}, {address.district},{" "}
                {address.state} – {address.postalCode}
              </address>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 animate-fade-in-up delay-400">
              <Button
                href={`tel:${business.phoneNumbers[0]}`}
                variant="accent"
                size="lg"
                icon={Phone}
                ariaLabel={`Call Sarvan Tiwari Kirana Store at ${business.phoneNumbers[0]}`}
              >
                Call Now
              </Button>
              <Button
                href={getMapsUrl()}
                external
                variant="outline-white"
                size="lg"
                icon={MapPin}
                ariaLabel="Get directions to Sarvan Tiwari Kirana Store"
              >
                Directions
              </Button>
            </div>

            {/* WhatsApp */}
            <div className="mt-4 flex flex-col gap-1.5 animate-fade-in-up delay-500">
              <a
                href={whatsappUrls.general}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-[#f59e0b] rounded-lg w-fit"
                aria-label="Chat with Sarvan Tiwari Kirana Store on WhatsApp"
              >
                <MessageCircle size={16} className="text-[#25d366]" aria-hidden="true" />
                WhatsApp — {business.phoneNumbers[1]}
              </a>
              <a
                href={`tel:${business.phoneNumbers[1]}`}
                className="inline-flex items-center gap-2 text-white/55 hover:text-white/80 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-[#f59e0b] rounded w-fit"
                aria-label={`Alternate number: ${business.phoneNumbers[0]}`}
              >
                <Phone size={13} aria-hidden="true" />
                Alt: {business.phoneNumbers[1]}
              </a>
            </div>

            {/* Quick feature pills */}
            <div className="mt-7 flex flex-wrap gap-2 animate-fade-in-up delay-600">
              {["🛒 Daily Groceries", "🥬 Fresh Vegetables", "🏡 Local & Trusted", "📞 Call / WhatsApp"].map(
                (pill) => (
                  <span
                    key={pill}
                    className="bg-white/10 border border-white/15 text-white/85 text-xs font-medium px-3 py-1.5 rounded-full"
                  >
                    {pill}
                  </span>
                )
              )}
            </div>
          </div>

          {/* ── Right — Photo Carousel ─────────────────────── */}
          <div className="hidden lg:block pb-10 animate-fade-in delay-200">
            <div className="relative w-full" style={{ height: "460px" }}>
              <HeroCarousel />

              {/* Floating "Fresh Today" badge */}
              <div className="absolute -bottom-3 -left-5 bg-white rounded-2xl shadow-xl px-4 py-3 border border-[#d1f0da] animate-float z-20">
                <div className="flex items-center gap-2.5">
                  <span className="text-2xl" role="img" aria-label="vegetable">🥬</span>
                  <div>
                    <p className="text-[#1a5c2a] font-bold text-sm leading-none">Sarvan Ji</p>
                    <p className="text-[#6b7280] text-xs mt-0.5">Your Kirana Wala</p>
                  </div>
                </div>
              </div>

              {/* Floating trust badge */}
              <div className="absolute -top-3 -right-3 bg-[#f59e0b] text-white rounded-2xl shadow-lg px-4 py-2.5 z-20">
                <p className="font-bold text-sm leading-none">Local &</p>
                <p className="text-xs font-medium opacity-90 mt-0.5">Trusted ✓</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile carousel (below text) */}
        <div className="lg:hidden pb-8 animate-fade-in delay-300">
          <div className="relative w-full" style={{ height: "300px" }}>
            <HeroCarousel />
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="relative" aria-hidden="true">
        <svg viewBox="0 0 1440 60" className="w-full block" preserveAspectRatio="none" height="60">
          <path d="M0,60 L0,20 Q360,60 720,20 Q1080,-20 1440,20 L1440,60 Z" fill="#fdfaf5" />
        </svg>
      </div>
    </section>
  );
}
