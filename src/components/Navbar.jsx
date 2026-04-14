import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      {/* BRAND (CLICKABLE) */}
      <Link to="/" className="navbar-brand">
        <img src={logo} alt="Divya Logo" className="logo" />
        <span>DIVYA</span>
      </Link>

      {/* NAV LINKS */}
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/events">Events</Link>
        </li>
        <Link to="/gallery">Gallery</Link>

        <li>
          <Link to="/about">About Us</Link>
        </li>

        {/* CTA */}
        <li>
          <Link to="/contact" className="cta">
            Join Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
