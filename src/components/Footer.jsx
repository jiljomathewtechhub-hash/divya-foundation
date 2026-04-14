import "./Footer.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-brand">
          <img src={logo} alt="DIVYA Logo" />
          <h3>DIVYA Foundation Durham</h3>
          <p>
            Empowering youth through leadership, volunteerism, 
            and cultural engagement.
          </p>
        </div>

        {/* MIDDLE */}
        <div className="footer-links">
          <h4>Quick Links</h4>

          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/events">Events</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>

        </div>

        {/* RIGHT */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>Email: divya.foundation.durham@gmail.com</p>
          <p>Durham, Ontario</p>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} DIVYA Foundation Durham
      </div>

    </footer>
  );
}

export default Footer;