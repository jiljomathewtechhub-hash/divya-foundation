import "./Home.css";
import heroImg from "../assets/hero.jpeg";
import shivSponsor from "../assets/shiv_sponsor.webp";
import goldSponsor from "../assets/thegold_sponsor.webp";

// MISSION IMAGES
import volunteerImg from "../assets/volunteer.webp";
import skillsImg from "../assets/skills.jpg";
import speakingImg from "../assets/speaking.webp";
import valuesImg from "../assets/values.webp";

// METHODS IMAGES ✅
import mentorshipImg from "../assets/mentorship.webp";
import workshopsImg from "../assets/workshops.webp";
import culturalImg from "../assets/cultural.webp";
import softskillsImg from "../assets/softskills.webp";

function Home() {
  return (
    <section className="home" id="home">
      {/* HERO */}
      <div className="home-hero" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="overlay">
          <div className="hero-content">
            <h1>
              Durham Intercultural Volunteer Youth Association (D.I.V.Y.A)
            </h1>
          </div>
        </div>
      </div>

      {/* CARDS */}
      <div className="home-cards">
        <div className="card">
          <h2>Volunteerism</h2>
          <p>
            DIVYA is a non-profit organization aiming to do work for the
            betterment of the community.
          </p>
        </div>

        <div className="card">
          <h2>Leadership</h2>
          <p>
            Being a Leader is what DIVYA is all about, whether it's a massive
            crowd or a small group, leadership is key with DIVYA.
          </p>
        </div>

        <div className="card">
          <h2>Inclusiveness</h2>
          <p>
            DIVYA establishes a safe and welcoming atmosphere where all can grow
            academically, socially, mentally and physically.
          </p>
        </div>
      </div>

      {/* MISSION */}
      <section className="mission" id="mission">
        <div className="mission-container">
          <h2 className="mission-title">Our Mission</h2>

          <div className="mission-grid">
            <div className="mission-card">
              <img src={volunteerImg} alt="Volunteerism" />
              <span className="mission-tag">Volunteerism</span>
              <h3>Volunteer Opportunities</h3>
              <p>
                DIVYA offers quality opportunities, when either you're looking
                for hours to finish your highschool requirement or wanting to
                lead, DIVYA has opportunities for everyone.
              </p>
            </div>

            <div className="mission-card">
              <img src={skillsImg} alt="Skills" />
              <span className="mission-tag">Skills</span>
              <h3>Personal Skills</h3>
              <p>
                As a family, DIVYA is committed to providing each and every
                person with Leadership, Management & Organizational Skills.
              </p>
            </div>

            <div className="mission-card">
              <img src={speakingImg} alt="Speaking" />
              <span className="mission-tag">Speaking</span>
              <h3>Speaking & Arts</h3>
              <p>
                Join us and improve your vocational skills, Public Speaking,
                Effective Communication, Singing, Dancing. Hone our skills for
                your art with DIVYA's performances.
              </p>
            </div>

            <div className="mission-card">
              <img src={valuesImg} alt="Values" />
              <span className="mission-tag">Values</span>
              <h3>Instilling Values</h3>
              <p>
                DIVYA's most focused aspect, moral, spiritual and cultural
                values. Holding these values is DIVYA's utmost priority in
                creating the leaders of the future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* METHODS */}
      <section className="methods">
        <div className="methods-header">
          <p className="methods-subtitle">METHODS</p>
          <h2>How They Learn</h2>
          <p className="methods-desc">
            DIVYA utilizes many methods to teach our volunteers the skills they
            need to become the leaders they are meant to be.
          </p>
        </div>

        <div className="methods-grid">
          <div className="method-item">
            <img src={mentorshipImg} alt="Mentorship" />
            <div>
              <h3>Mentorship</h3>
              <p>
                Our volunteers have a chance to have 1 on 1 with our mentors. We
                talk to them so we understand how to most effectively help them.
              </p>
            </div>
          </div>

          <div className="method-item">
            <img src={workshopsImg} alt="Workshops" />
            <div>
              <h3>Workshops</h3>
              <p>
                We hold days where volunteers learn the special skills they need
                to be leaders of the future, and the skills to succeed in life.
              </p>
            </div>
          </div>

          <div className="method-item">
            <img src={culturalImg} alt="Cultural Awareness Programs" />
            <div>
              <h3>Cultural Awareness Programs</h3>
              <p>
                We have programs dedicated to specific festivals or events of
                cultural importance, we learn about all cultures and their
                beliefs.
              </p>
            </div>
          </div>

          <div className="method-item">
            <img src={softskillsImg} alt="Soft Skills Training" />
            <div>
              <h3>Soft Skills Training</h3>
              <p>
                We find our volunteers weakness and work on improving them, we
                make sure that all our volunteers are proficient in all aspects
                of their lives.
              </p>
            </div>
          </div>
        </div>

        {/* ============================= */}
        {/* INSTAGRAM SECTION */}
        {/* ============================= */}

        <section className="instagram">
          <p className="insta-subtitle">FOLLOW US</p>
          <h2 className="insta-title">@divya.durham</h2>

          {/* Divider */}
          <div className="insta-line"></div>

          {/* Instagram Embed */}
          <div className="insta-wrapper">
            <iframe
              src="https://www.instagram.com/divya.durham/embed"
              title="Instagram Feed"
              frameBorder="0"
              scrolling="no"
            ></iframe>
          </div>

          {/* CTA Button */}
          <a
            href="https://www.instagram.com/divya.durham/"
            target="_blank"
            rel="noopener noreferrer"
            className="insta-btn"
          >
            Follow on Instagram →
          </a>
        </section>

        {/* ================= SPONSORS ================= */}
        <section className="home-sponsors">
          <div className="sponsors-header">
            <h2>Empowered by Our Sponsors</h2>
          </div>

          <div className="sponsors-grid">
            <div className="sponsor-card">
              <img src={shivSponsor} alt="Shiv Bansal Team" />
            </div>

            <div className="sponsor-card">
              <img src={goldSponsor} alt="Gold Standard Real Estate" />
            </div>
          </div>
        </section>
      </section>
    </section>
  );
}

export default Home;
