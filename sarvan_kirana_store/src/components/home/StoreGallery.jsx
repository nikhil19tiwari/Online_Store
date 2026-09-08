import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import Container from "../common/Container.jsx";
import SectionHeading from "../common/SectionHeading.jsx";
import { heroSlides } from "../../data/storeImages.js";

/** Lightbox modal to view a full image */
function Lightbox({ slide, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onNext, onPrev]);

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={slide.alt}
      onClick={onClose}
    >
      <button
        type="button"
        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors focus-visible:outline-2 focus-visible:outline-[#f59e0b]"
        onClick={onClose}
        aria-label="Close photo"
      >
        <X size={20} />
      </button>

      <button
        type="button"
        className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors focus-visible:outline-2 focus-visible:outline-[#f59e0b]"
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        aria-label="Previous photo"
      >
        <ChevronLeft size={24} />
      </button>

      <div
        className="relative max-w-3xl w-full max-h-[85vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={slide.image}
          alt={slide.alt}
          className="max-w-full max-h-[80vh] rounded-xl object-contain shadow-2xl"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-center py-3 rounded-b-xl px-4">
          <p className="font-bold text-sm">{slide.caption}</p>
          <p className="text-white/70 text-xs mt-0.5">{slide.sub}</p>
        </div>
      </div>

      <button
        type="button"
        className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors focus-visible:outline-2 focus-visible:outline-[#f59e0b]"
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        aria-label="Next photo"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}

export default function StoreGallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const ref = useRef(null);

  const openLightbox = (i) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prevSlide = () => setLightboxIndex((i) => (i - 1 + heroSlides.length) % heroSlides.length);
  const nextSlide = () => setLightboxIndex((i) => (i + 1) % heroSlides.length);

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

  // Grid layout: first image large, others smaller
  const layouts = [
    "col-span-2 row-span-2 sm:col-span-1 sm:row-span-2",
    "col-span-2 sm:col-span-1",
    "col-span-2 sm:col-span-1",
    "col-span-2 sm:col-span-1",
    "col-span-2 sm:col-span-1",
  ];

  return (
    <section
      ref={ref}
      aria-labelledby="gallery-heading"
      className="py-16 md:py-20 bg-[#0d3318]"
    >
      <Container>
        {/* Heading */}
        <div className="reveal text-center mb-10">
          <SectionHeading
            badge="Our Store"
            title="Meet Sarvan Ji & His Kirana Store"
            subtitle="A glimpse into your trusted neighbourhood store in Aswan Tiwari, Janghai."
            light
          />
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 auto-rows-[180px] sm:auto-rows-[200px]">
          {heroSlides.map((slide, i) => (
            <button
              key={slide.id}
              type="button"
              className={`reveal relative overflow-hidden rounded-xl sm:rounded-2xl group cursor-pointer focus-visible:outline-2 focus-visible:outline-[#f59e0b] focus-visible:outline-offset-2 ${layouts[i] || ""}`}
              style={{ transitionDelay: `${i * 0.07}s` }}
              onClick={() => openLightbox(i)}
              aria-label={`View photo: ${slide.alt}`}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                loading={i <= 1 ? "eager" : "lazy"}
                decoding="async"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 sm:p-4">
                <div className="text-white text-left">
                  <p className="font-bold text-xs sm:text-sm leading-snug line-clamp-2">
                    {slide.caption}
                  </p>
                </div>
                <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                  <ZoomIn size={14} className="text-white" />
                </div>
              </div>

              {/* "Store Front" badge on picture2 which shows the signboard */}
              {i === 1 && (
                <div className="absolute top-2 left-2 bg-[#f59e0b] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                  Store Front
                </div>
              )}
              {i === 4 && (
                <div className="absolute top-2 left-2 bg-[#2d8a4e] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                  Fresh Vegetables
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Caption */}
        <p className="reveal text-center text-white/50 text-xs mt-6">
          📍 Sarvan Tiwari Kirana Store — Aswan Tiwari, Janghai, Jaunpur, UP – 212401
        </p>
      </Container>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          slide={heroSlides[lightboxIndex]}
          onClose={closeLightbox}
          onPrev={prevSlide}
          onNext={nextSlide}
        />
      )}
    </section>
  );
}
