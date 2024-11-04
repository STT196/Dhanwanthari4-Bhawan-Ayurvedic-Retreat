import React, { useEffect, useRef } from 'react';
import Group6 from '../../assets/Group 2.svg'; // Import the image
import './about.css';

const About = () => {
  const containerRef = useRef(null); // Reference to the main div

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate'); // Add animation class on scroll
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the div is visible
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => observer.disconnect(); // Cleanup on unmount
  }, []);

  return (
    <div className="custom-container" ref={containerRef}>
      {/* Left Column: Image */}
      <div className="left-column">
        <img src={Group6} alt="Group6" />
      </div>

      {/* Right Column: Text Content */}
      <div className="right-column">
        <h2>About Us</h2>
        <p className='about-text2'>
          Ayurveda, originating over 5,000 years ago, is a holistic system promoting
          balance in body, mind, and spirit. It emphasizes interconnected aspects of
          life such as diet, yoga, meditation, and herbal remedies to maintain well-being.
        </p>

        <h3>Vision</h3>
        <p className='about-text2'>
          To be a holistic retreat that rejuvenates the mind, body, and spirit through
          ancient Ayurvedic principles, offering personalized therapies and serene surroundings.
        </p>

        <h3>Mission</h3>
        <p className='about-text2'>
          Our mission is to provide a transformative experience promoting wellness through Ayurveda.
          We aim to create a sanctuary where guests reconnect with themselves and nature.
        </p>
      </div>
    </div>
  );
};

export default About;
