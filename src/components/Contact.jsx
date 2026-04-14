import "./Contact.css";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { useState } from "react";
import { color } from "framer-motion";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data).toString(),
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();

        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Network error. Please try again.");
    }
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
              className="social-icon facebook"
              style={{
                background:
                  "linear-gradient(135deg, #f9ce34, #ee2a7b, #6228d7)",
              }}
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="contact-form">
          <h2>Join Us</h2>

          {submitted && (
            <p style={{ color: "#22c55e", marginBottom: "10px" }}>
              ✅ Thank you! Your message has been sent.
            </p>
          )}

          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            {/* Required for Netlify */}
            <input type="hidden" name="form-name" value="contact" />

            {/* Honeypot (spam protection) */}
            <input type="hidden" name="bot-field" />

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
              <input type="checkbox" id="terms" name="terms" required />
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
