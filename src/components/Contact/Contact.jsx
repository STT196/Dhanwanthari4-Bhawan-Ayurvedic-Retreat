import './Footer.css';
import logo from '../../assets/loading.jpg'; // Replace with the correct path
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        
        {/* Logo Section */}
        <div className="footer-column logo-column">
          <img src={logo} alt="Company Logo" className="footer-logo" />
          <p>The heaven on the earth. Lord Dhanvantari is a deity in Hinduism associated with Ayurveda, the traditional Indian system of medicine.</p>
        </div>

        {/* Contact Information Section */}
        <div className="footer-column contact-column">
          <p>Email: <a href="mailto:echoayur@gmail.com">echoayur@gmail.com</a></p>
          <p>Phone: <a href="tel:+94716098613">+94 716098613</a> | <a href="tel:+94778488287">+94 778488287</a></p>
          <p>Moragaswewa Polonnaruva road Habarana</p>

          {/* Social Media Links */}
          <div className="social-icons">
            <a
              href="https://wa.me/94716098613"
              aria-label="WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100087582174996&mibextid=ZbWKwL"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.youtube.com/@dhanwantharibhawan"
              aria-label="YouTube"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Map Section */}
        <div className="footer-column map-column">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1986.5541979906587!2d80.7644132!3d8.0382486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOC4wMzgyNDg2LCA4MC43NjQ0MTMy!5e0!3m2!1sen!2slk!4v1633071234567!5m2!1sen!2slk"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Map Location with Pin"
          ></iframe>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
