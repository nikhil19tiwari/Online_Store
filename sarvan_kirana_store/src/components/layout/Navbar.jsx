import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Phone, Menu, X, ShoppingBasket } from "lucide-react";
import business from "../../config/business.js";
import Button from "../common/Button.jsx";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Vegetables", to: "/vegetables" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change / resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header
        role="banner"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "navbar-scrolled" : "bg-[#fdfaf5]/95"
        }`}
      >
        <nav
          aria-label="Main navigation"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo */}
            <Link
              to="/"
              onClick={closeMenu}
              className="flex items-center gap-2.5 group focus-visible:outline-2 focus-visible:outline-[#f59e0b] focus-visible:rounded-lg"
              aria-label="Sarvan Tiwari Kirana Store — Home"
            >
              <div
                className="w-10 h-10 rounded-xl bg-[#1a5c2a] flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow duration-200 flex-shrink-0"
                aria-hidden="true"
              >
                <ShoppingBasket size={20} className="text-white" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-[#1a5c2a] text-sm sm:text-base leading-none">
                  Sarvan Tiwari
                </span>
                <span className="text-[#2d8a4e] text-xs font-medium">
                  Kirana Store
                </span>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <ul className="hidden md:flex items-center gap-1" role="list">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.to === "/"}
                    className={({ isActive }) =>
                      [
                        "px-3.5 py-2 rounded-lg text-sm font-medium transition-colors duration-150",
                        "focus-visible:outline-2 focus-visible:outline-[#f59e0b] focus-visible:outline-offset-1",
                        isActive
                          ? "bg-[#f0faf3] text-[#1a5c2a] font-semibold"
                          : "text-[#374151] hover:bg-[#f0faf3] hover:text-[#1a5c2a]",
                      ].join(" ")
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Button
                href={`tel:${business.phoneNumbers[0]}`}
                variant="primary"
                size="sm"
                icon={Phone}
                ariaLabel={`Call ${business.name} at ${business.phoneNumbers[0]}`}
              >
                Call Now
              </Button>
            </div>

            {/* Mobile Hamburger */}
            <button
              type="button"
              className="md:hidden p-2 rounded-lg text-[#1a5c2a] hover:bg-[#f0faf3] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-[#f59e0b]"
              onClick={toggleMenu}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
          aria-hidden={!isOpen}
        >
          <div className="bg-white border-t border-[#d1f0da] shadow-lg">
            <nav aria-label="Mobile navigation" className="px-4 pt-3 pb-5">
              <ul role="list" className="space-y-1">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <NavLink
                      to={link.to}
                      end={link.to === "/"}
                      onClick={closeMenu}
                      className={({ isActive }) =>
                        [
                          "flex items-center w-full px-4 py-3 rounded-xl text-base font-medium transition-colors",
                          isActive
                            ? "bg-[#f0faf3] text-[#1a5c2a] font-semibold"
                            : "text-[#374151] hover:bg-[#f0faf3] hover:text-[#1a5c2a]",
                        ].join(" ")
                      }
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-col gap-2.5">
                <Button
                  href={`tel:${business.phoneNumbers[0]}`}
                  variant="primary"
                  size="md"
                  icon={Phone}
                  className="w-full justify-center"
                  ariaLabel={`Call ${business.name}`}
                  onClick={closeMenu}
                >
                  Call {business.phoneNumbers[0]}
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Spacer so content isn't hidden behind fixed navbar */}
      <div className="h-16 md:h-18" aria-hidden="true" />
    </>
  );
}
