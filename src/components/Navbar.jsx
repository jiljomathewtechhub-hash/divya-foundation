import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* BRAND */}
      <Link to="/" className="navbar-brand">
        <img src={logo} alt="Divya Logo" className="logo" />
        <span>DIVYA</span>
      </Link>

      {/* 🔥 HAMBURGER BUTTON (ONLY MOBILE) */}
      <div
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      {/* NAV LINKS */}
      <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        </li>

        <li>
          <Link to="/events" onClick={() => setMenuOpen(false)}>Events</Link>
        </li>

        {/* 🔥 FIX: wrap this in li */}
        <li>
          <Link to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link>
        </li>

        <li>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
        </li>

        <li>
          <Link to="/contact" className="cta" onClick={() => setMenuOpen(false)}>
            Join Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;