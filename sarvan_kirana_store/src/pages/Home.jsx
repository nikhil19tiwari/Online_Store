import Hero from "../components/home/Hero.jsx";
import MarqueeTicker from "../components/common/MarqueeTicker.jsx";
import TrustFeatures from "../components/home/TrustFeatures.jsx";
import AboutPreview from "../components/home/AboutPreview.jsx";
import ProductCategories from "../components/home/ProductCategories.jsx";
import VegetablesSection from "../components/home/VegetablesSection.jsx";
import StoreGallery from "../components/home/StoreGallery.jsx";
import LocalAreaSection from "../components/home/LocalAreaSection.jsx";
import ContactCTA from "../components/home/ContactCTA.jsx";

export default function Home() {
  return (
    <main id="main-content" aria-label="Sarvan Tiwari Kirana Store — Home">
      {/* Hero with full carousel of real store photos */}
      <Hero />

      {/* Scrolling store highlights ticker */}
      <MarqueeTicker />

      {/* Trust feature cards */}
      <TrustFeatures />

      <hr className="section-divider" aria-hidden="true" />

      {/* About section with real owner photo */}
      <AboutPreview />

      <hr className="section-divider" aria-hidden="true" />

      {/* Kirana product categories */}
      <ProductCategories />

      <hr className="section-divider" aria-hidden="true" />

      {/* Fresh vegetables */}
      <VegetablesSection />

      {/* Photo gallery — all 5 real store photos with lightbox */}
      <StoreGallery />

      {/* Local area SEO + Why shop local */}
      <LocalAreaSection />

      {/* Contact CTA */}
      <ContactCTA />
    </main>
  );
}
