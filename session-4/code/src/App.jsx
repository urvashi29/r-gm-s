import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Dashboard from "./pages/Dashboard";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";
const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:pid" element={<ProductDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;

// Task
// user and user detail page
// about -> carousel, out team section
// contact-> contact, address, email, location, form
// dashbaord -> recharts
