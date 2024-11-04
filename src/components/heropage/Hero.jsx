// Hero.js
import React from 'react';
import './hero.css'; // Import custom CSS
import heroImage from '../../assets/Group 5.svg'; // Adjust path if necessary

function Hero() {
  return (
    <section className="hero" id="hero-section">
      {/* Left-side content */}
      <div className="hero-content">
        <h1>Welcome to Dhanwanthari Bhawan Ayurvedic Retreat</h1>
        <p>
          The heaven on the earth. Lord Dhanvantari is a deity in Hinduism
          associated with Ayurveda, the traditional Indian system of medicine.
        </p>
        <button
          className="read-more-button"
          onClick={() => alert('Read more clicked!')}
        >
          Read More
        </button>
      </div>

      {/* Right-side image */}
      <div className="hero-image">
        <img src={heroImage} alt="Hero" />
      </div>
    </section>
  );
}

export default Hero;
