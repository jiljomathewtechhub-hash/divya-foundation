import { useState, useEffect } from "react";
import "./Gallery.css";

/* ============================= */
/* IMPORT IMAGES */
/* ============================= */
import g1 from "../assets/gallery1.webp";
import g2 from "../assets/gallery2.webp";
import g3 from "../assets/gallery3.webp";
import g4 from "../assets/gallery4.webp";
import g5 from "../assets/gallery5.webp";
import g6 from "../assets/gallery6.webp";
import g7 from "../assets/gallery7.webp";
import g8 from "../assets/gallery8.webp";
import g9 from "../assets/gallery9.webp";
import g10 from "../assets/gallery10.webp";

function Gallery() {
  const images = [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10];

  const [currentIndex, setCurrentIndex] = useState(null);

  const openImage = (index) => setCurrentIndex(index);
  const closeImage = () => setCurrentIndex(null);

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  /* KEYBOARD SUPPORT */
  useEffect(() => {
    const handleKey = (e) => {
      if (currentIndex === null) return;

      if (e.key === "ArrowRight") nextImage(e);
      if (e.key === "ArrowLeft") prevImage(e);
      if (e.key === "Escape") closeImage();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [currentIndex]);

  return (
    <section className="gallery">

      {/* HEADER */}
      <div className="gallery-header">
        <h1>
          "Flashback to the Fun – Memories from Divya Foundation’s Garba Night!"
        </h1>
      </div>

      {/* GRID */}
      <div className="gallery-container">
        {images.map((img, index) => (
          <div
            key={index}
            className="gallery-card"
            onClick={() => openImage(index)}
          >
            <img src={img} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* MODAL */}
      {currentIndex !== null && (
        <div className="gallery-modal" onClick={closeImage}>

          {/* CLOSE */}
          <span className="close-btn" onClick={closeImage}>✕</span>

          {/* PREVIOUS */}
          <button className="nav-btn prev" onClick={prevImage}>
            ❮
          </button>

          {/* IMAGE */}
          <img
            src={images[currentIndex]}
            alt="Full View"
            className="modal-img"
          />

          {/* NEXT */}
          <button className="nav-btn next" onClick={nextImage}>
            ❯
          </button>

        </div>
      )}
    </section>
  );
}

export default Gallery;