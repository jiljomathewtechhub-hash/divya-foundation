import "./About.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";

// IMAGES
import aboutImg from "../assets/about.webp";

// STAFF IMAGES (exact names)
import anjaliAImg from "../assets/Dr. Anjali Agrawal.webp";
import anjaliJImg from "../assets/Anjali Jain.webp";
import shwetaImg from "../assets/Shweta Srivastava.webp";
import hariImg from "../assets/Hari_Raghavan.webp";

// FOUNDERS
import avniImg from "../assets/Avni.webp";
import astitvaImg from "../assets/Astitva.webp";

function About() {
  return (
    <section className="about-page">

      {/* ================= ABOUT INTRO ================= */}
      <section className="about">
        <div className="about-container">

          <div className="about-text">
            <p className="about-subtitle">ABOUT US</p>

            <h1>Who are we?</h1>

            <p>
              DIVYA is a non-profit organization led by a group of passionate high schoolers who want to make a change in their communities.
              Based in Durham, Ontario and over 40 volunteers strong. DIVYA promotes the phrase "BE THE CHANGE!".
              We create, build and connect with our community by events and volunteer opportunities.
              If you want be apart of the "BE THE CHANGE!" family, fill out the form below and a volunteer will get back to you.
            </p>
          </div>

          <div className="about-image">
            <img src={aboutImg} alt="DIVYA Team" />
          </div>

        </div>
      </section>


      {/* ================= MISSION ================= */}
      <section className="about-mission">

        <div className="about-mission-header">
          <p className="about-mission-subtitle">OUR MISSION</p>
          <h2>What We Focus On</h2>
        </div>

        <div className="about-mission-grid">

          <div className="about-mission-item">
            <h3>Volunteer Opportunities</h3>
            <p>
              DIVYA offers quality opportunities, whether you're looking for hours 
              to finish your highschool requirement or wanting to lead, DIVYA has 
              opportunities for everyone.
            </p>
          </div>

          <div className="about-mission-item">
            <h3>Personal Skills</h3>
            <p>
              As a family, DIVYA is committed to providing each and every person with 
              Leadership, Management & Organizational Skills.
            </p>
          </div>

          <div className="about-mission-item">
            <h3>Speaking & Arts</h3>
            <p>
              Join us and improve your vocational skills, Public Speaking, Effective 
              Communication, Singing, Dancing. Hone your skills with DIVYA's performances.
            </p>
          </div>

          <div className="about-mission-item">
            <h3>Instilling Values</h3>
            <p>
              DIVYA's most focused aspect: moral, spiritual and cultural values. 
              These values shape the leaders of the future.
            </p>
          </div>

        </div>

      </section>


      {/* ================= FOUNDERS ================= */}
      <section className="founders">

        <div className="founders-header">
          <p>CO-FOUNDERS</p>
          <h2>Our Founders</h2>
        </div>

        <div className="founders-grid">

          <div className="founder-card">
            <img src={avniImg} alt="Avni Jain" />
            <h3>Avni Jain</h3>
            <p>
              A Grade 10 Gifted and Performing Arts student at O’Neill Collegiate 
              and Vocational Institute and a Sea Cadet for 7 years.
            </p>
          </div>

          <div className="founder-card">
            <img src={astitvaImg} alt="Astitva Srivastava" />
            <h3>Astitva Srivastava</h3>
            <p>
              A grade 11 gifted student at Pickering High School and a DECA executive, 
              actively contributing to community development.
            </p>
          </div>

        </div>

      </section>


      {/* ================= STAFF ================= */}
      <section className="staff">

        <div className="staff-header">
          <p>STAFF</p>
          <h2>Board Of Directors</h2>
        </div>

        <div className="staff-grid">

          <div className="staff-card">
            <img src={anjaliAImg} alt="Dr. Anjali Agrawal" />
            <h3>Dr. Anjali Agrawal</h3>
            <p>
              Clinical IT consultant with 25+ years experience in healthcare and IT,
              dedicated to community service and volunteering.
            </p>
          </div>

          <div className="staff-card">
            <img src={anjaliJImg} alt="Anjali Jain" />
            <h3>Anjali Jain</h3>
            <p>
              Strong leadership presence driving DIVYA events forward with dedication 
              and passion for community growth.
            </p>
          </div>

          <div className="staff-card">
            <img src={shwetaImg} alt="Shweta Srivastava" />
            <h3>Shweta Srivastava</h3>
            <p>
              Known for problem-solving and ensuring smooth operations, helping DIVYA 
              grow its volunteer network.
            </p>
          </div>

        </div>

      </section>


      {/* ================= ADVISORS ================= */}
      <section className="advisors">

        <div className="advisors-header">
          <h2>Board Of Advisors</h2>
          <p>
            The people who devote countless time to ensure that our volunteers 
            have the tools and resources they need to become the leaders of the future.
          </p>
        </div>

        <div className="advisor-card">

          <img src={hariImg} alt="Hari Raghavan" />

          <div className="advisor-content">
            <h3>Hari Raghavan</h3>

            <p>
              Known for his "I don't give up" style of life, Hari is our resource advisor, 
              without him we wouldn't have had these amazing volunteers alongside us.
            </p>

            {/* FIXED SOCIAL LINKS */}
            <div className="advisor-socials">

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>

              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>

              <a href="mailto:example@email.com">
                <FaEnvelope />
              </a>

            </div>

          </div>

        </div>

      </section>

    </section>
  );
}

export default About;