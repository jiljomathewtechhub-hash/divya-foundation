import "./Contact.css";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted! (You can connect backend later)");
  };

  return (
    <section className="contact">

      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-info">
          <h2>Contact Us</h2>

          <p>
            If you have any questions, concerns and/or comments feel free to
            send us an email or call at the number below
          </p>

          <div className="info-item">
            <span>📍</span>
            <p>Durham, Ontario</p>
          </div>

          <div className="info-item">
            <span>📞</span>
            <a href="tel:4168717180">416-871-7180</a>
          </div>

          <div className="info-item">
            <span>✉️</span>
            <a href="mailto:divya.foundation.durham@gmail.com">
              divya.foundation.durham@gmail.com
            </a>
          </div>

          <h4>Visit Our Socials</h4>

          {/* SOCIAL ICONS */}
          <div className="socials">
            <a
              href="https://www.facebook.com/profile.php?id=61550231581386"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/divya.durham/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="contact-form">
          <h2>Join Us</h2>

          <form onSubmit={handleSubmit}>

            <input type="text" placeholder="Enter your name" required />

            <input type="email" placeholder="Enter your email" required />

            <textarea placeholder="Enter your message" required />

            <input type="text" placeholder="Enter your phone number" required />

            <div className="checkbox">
              <input type="checkbox" id="terms" required />
              <label htmlFor="terms">I agree to Terms & Conditions</label>
            </div>

            <button type="submit">Submit</button>

          </form>
        </div>

      </div>

    </section>
  );
}

export default Contact;