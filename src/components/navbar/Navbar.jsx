import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css';
import loadingImage from '../../assets/loading.jpg';

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => setIsMobile(!isMobile);

  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();
    setIsMobile(false); // Close menu on mobile
    navigate('/');
    setTimeout(() => {
      document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }, 100);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white fixed-top shadow-sm">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={loadingImage} alt="Logo" className="logo" />
        </Link>

        <button
          className={`navbar-toggler ${isMobile ? 'collapsed' : ''}`} // Adjusted class for toggler
          type="button"
          onClick={handleToggle}
          aria-controls="navbarNav"
          aria-expanded={isMobile}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isMobile ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto text-center">
            <li className="nav-item">
              <a href="#hero-section" className="nav-link" onClick={(e) => handleLinkClick(e, 'hero-section')}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/procedure" onClick={() => setIsMobile(false)}>Procedure</Link>
            </li>
            <li className="nav-item">
              <a href="#package-section" className="nav-link" onClick={(e) => handleLinkClick(e, 'package-section')}>
                Packages
              </a>
            </li>
            <li className="nav-item">
              <a href="#wel-toure-section" className="nav-link" onClick={(e) => handleLinkClick(e, 'wel-toure-section')}>
                Wellness Tours
              </a>
            </li>
            <li className="nav-item">
              <button
                className="nav-link contact-button"
                onClick={() => window.open('https://wa.me/94716098613', '_blank')}
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
