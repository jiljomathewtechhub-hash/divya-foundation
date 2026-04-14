import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop"; // 🔥 ADD THIS

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Events from "./components/Events";
import Gallery from "./components/Gallery";

import "./App.css";

function App() {
  return (
    <Router>

      {/* 🔥 THIS FIXES YOUR PROBLEM */}
      <ScrollToTop />

      <Navbar />

      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </div>

      <Footer />

    </Router>
  );
}

export default App;