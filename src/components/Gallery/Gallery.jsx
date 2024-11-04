import React, { useEffect, useRef } from 'react';
import './gallery.css';

// Dynamically import all images from the assets folder
const images = import.meta.glob('../../assets/Gallery/*.jpg', { eager: true });

// Convert the imported object to an array of image URLs
const allImages = Object.values(images).map((img) => img.default);

const Gallery = () => {
  const galleryRef = useRef(null); // Store reference to the gallery container

  // Intersection Observer to trigger animation when gallery is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show'); // Add animation class
          observer.unobserve(entry.target); // Stop observing after animation
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the gallery is in view
    );

    if (galleryRef.current) observer.observe(galleryRef.current);

    return () => observer.disconnect(); // Cleanup observer
  }, []);

  // Group images into pairs for larger screens, single image per slide for small screens
  const imagePairs = [];
  const isMobile = window.innerWidth < 768; // Determine if the screen is mobile

  for (let i = 0; i < allImages.length; i += isMobile ? 1 : 2) {
    imagePairs.push(allImages.slice(i, i + (isMobile ? 1 : 2)));
  }

  return (
    <div className="gallery-container" ref={galleryRef}>
      <section className="gallery-section">
        {/* Top: Title and description */}
        <div className="gallery-header">
          <h2 className="gallery-title">Dhanwanthari Bhawan Ayurvedic Retreat Gallery</h2>
          <p className="gallery-description">
            Explore the serene atmosphere of our Ayurvedic retreat, where each moment is a step towards rejuvenation and wellness.
          </p>
        </div>

        {/* Image slider with one image per slide in mobile view */}
        <div className="gallery-slider">
          <div
            id="galleryCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="3000"
            data-bs-pause="false"
          >
            <div className="carousel-inner">
              {imagePairs.map((pair, index) => (
                <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                  <div className="image-pair">
                    {pair.map((img, idx) => (
                      <img
                        src={img}
                        className="gallery-img"
                        alt={`Slide ${index + 1} - Image ${idx + 1}`}
                        key={idx}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#galleryCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>

            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#galleryCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
