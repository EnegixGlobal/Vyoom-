import React, { useState } from "react";
import "./App.css";

// Components
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";

// Pages
import Home from "./Pages/Home";
import Service from "./Pages/Service";
import About from "./Pages/About";
import Contact from "./Pages/Contact";


function App() {
  const [page, setPage] = useState("home"); // default page

  return (
    <>
      {/* Navbar */}
      <Navbar setPage={setPage} />

      {/* Page Loader */}
      {page === "home" && <Home />}
      {page === "service" && <Service />}
      {page === "about" && <About />}
      {page === "contact" && <Contact />}

      {/* Footer */}
      <Footer setPage={setPage} />
    </>
  );
}

export default App;
