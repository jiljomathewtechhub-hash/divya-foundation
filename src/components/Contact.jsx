import "./Contact.css";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

function Contact() {
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

          {/* 🔥 NETLIFY FORM */}
          <form
            name="contact"
            method="POST"
            data-netlify="true"
          >
            {/* REQUIRED */}
            <input type="hidden" name="form-name" value="contact" />

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />

            <textarea
              name="message"
              placeholder="Enter your message"
              required
            />

            <input
              type="text"
              name="phone"
              placeholder="Enter your phone number"
            />

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