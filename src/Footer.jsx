import { Link } from "react-router-dom";
// import { FaPhone, FaEnvelope, FaClock, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaPhoneAlt, FaEnvelope, FaClock, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import logo from "./logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <img src={logo} alt="logo" className="footer-logo" />
          <p>
            Trusted matchmaking rooted in family values, confidentiality,
            and genuine care.
          </p>
          <div className="footer-socials">
            <a href="#" aria-label="Facebook"><FaFacebook /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="WhatsApp"><FaWhatsapp /></a>
          </div>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Our Services</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-contact">
          <h4>Get in Touch</h4>
          <p><FaPhoneAlt className="footer-icon" /> +92 300 1234567</p>
          <p><FaEnvelope className="footer-icon" /> info@themarriagecircle.com</p>
          <p><FaClock className="footer-icon" /> Mon - Sat, 10 AM - 7 PM</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 The Marriage Circle. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;