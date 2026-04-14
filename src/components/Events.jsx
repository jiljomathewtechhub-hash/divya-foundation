import { useState } from "react";
import "./Events.css";

/* ============================= */
/* UPCOMING EVENT IMAGES */
/* ============================= */
import garbaImg from "../assets/rushi_garba_night_event.webp";
import independenceImg from "../assets/independence_event.jpeg";

/* ============================= */
/* FUTURE EVENT IMAGES */
/* ============================= */
import danceImg from "../assets/DIVYA_Dance.webp";
import foodImg from "../assets/Food_Drive.webp";
import parkImg from "../assets/Adopt_A_Park.webp";

function Events() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (img) => setSelectedImage(img);
  const closeImage = () => setSelectedImage(null);

  return (
    <section className="events">
      {/* ============================= */}
      {/* UPCOMING EVENTS */}
      {/* ============================= */}
      <div className="events-header">
        <p className="events-subtitle">EVENTS</p>
        <h1 className="events-title">Upcoming Events</h1>
        <p className="events-desc">
          Join Divya Foundation’s events and bring positive change together.
        </p>
      </div>

      <div className="events-container">
        {/* EVENT 1 */}
        <div className="event-card">
          <img
            src={garbaImg}
            alt="Garba Night Event Poster"
            onClick={() => openImage(garbaImg)}
          />

          <div className="event-overlay">
            <button className="event-btn" onClick={() => openImage(garbaImg)}>
              View Details
            </button>
          </div>
        </div>

        {/* EVENT 2 */}
        <div className="event-card">
          <img
            src={independenceImg}
            alt="Independence Day Event Poster"
            onClick={() => openImage(independenceImg)}
          />

          <div className="event-overlay">
            <button
              className="event-btn"
              onClick={() => openImage(independenceImg)}
            >
              View Details
            </button>
          </div>
        </div>
      </div>

      {/* ============================= */}
      {/* FUTURE EVENTS */}
      {/* ============================= */}
      <div className="future-section">
        <h1 className="future-title">Future Events</h1>

        <div className="future-container">
          {/* FUTURE EVENT 1 */}
          <div className="future-card">
            <img src={danceImg} alt="DIVYA Dance Event" />

            <h2>DIVYA's Dance</h2>
            <p>
              A night for highschoolers to dance, party and connect together. We
              are inviting all highschoolers to join us in this event.
              Registration Info will be sent out soon.
            </p>
          </div>

          {/* FUTURE EVENT 2 */}
          <div className="future-card">
            <img src={foodImg} alt="Food Drive Event" />

            <h2>Food Drive</h2>
            <p>
              In partnership with our local firefighters, DIVYA will be hosting
              a food drive to support our local food shelters and various other
              locations.
            </p>
          </div>

          {/* FUTURE EVENT 3 */}
          <div className="future-card">
            <img src={parkImg} alt="Adopt A Park Event" />

            <h2>Adopt A Park</h2>
            <p>
              We are excited to announce that in partnership with City of Ajax.
              DIVYA has adopted Galea Pond & Miles Park and is in works with the
              city to create a date to clean the park.
            </p>
          </div>
        </div>
      </div>

      {/* ============================= */}
      {/* FULL SCREEN MODAL */}
      {/* ============================= */}
      {selectedImage && (
        <div className="modal" onClick={closeImage}>
          <img src={selectedImage} alt="Event Full View" />
        </div>
      )}
    </section>
  );
}

export default Events;
