import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";

// Pages
import Home from "./Pages/Home";
import Service from "./Pages/Service";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <BrowserRouter>

      <ScrollToTop />

      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
