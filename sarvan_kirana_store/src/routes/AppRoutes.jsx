import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Products from "../pages/Products.jsx";
import Vegetables from "../pages/Vegetables.jsx";
import Contact from "../pages/Contact.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/vegetables" element={<Vegetables />} />
      <Route path="/contact" element={<Contact />} />
      {/* 404 — redirect to home for static site */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
