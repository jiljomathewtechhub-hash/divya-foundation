import "./Footer.css";
import logo from "../assets/logo.png";

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
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/events">Events</a>
          <a href="/team">Team</a>
          <a href="/contact">Contact</a>
        </div>

        {/* RIGHT */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>Email: divyafoundation@gmail.com</p>
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