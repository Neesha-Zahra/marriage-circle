import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import logo from "./logo.png";

function Footer() {
  // Replace these placeholders with your real links.
  const facebookProfile = "https://www.facebook.com/share/1DxC5W1NaJ/";
  const facebookPage = "https://www.facebook.com/share/1DLwEFcK5b";
  const whatsappNumber1 = "https://wa.me/923159030278";
  const whatsappNumber2 = "https://wa.me/923204628336";
  const tiktokProfile = "https://www.tiktok.com/@themarriagecircle?_r=1&_t=ZS-9AiZZjGezBK";

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <img src={logo} alt="The Marriage Circle logo" className="footer-logo" />

          <p>
            Trusted matchmaking rooted in family values, confidentiality,
            and genuine care.
          </p>

          <div className="footer-socials">
            {/* One Facebook icon with two links */}
            <div className="social-item">
              <FaFacebook className="social-icon" />

              <div className="social-options">
                {facebookProfile && (
                  <a
                    href={"https://www.facebook.com/share/1DxC5W1NaJ/"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Profile
                  </a>
                )}

                {facebookPage && (
                  <a
                    href={"https://www.facebook.com/share/1DLwEFcK5b"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Official Page
                  </a>
                )}

                {!facebookProfile && !facebookPage && (
                  <span>Facebook</span>
                )}
              </div>
            </div>

            {/* One Instagram icon and link */}
            <a
              href="https://www.instagram.com/themarriagecircle_official/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-item"
              aria-label="Instagram"
            >
              <FaInstagram className="social-icon" />
              <span>Instagram</span>
            </a>

            {/* One WhatsApp icon with two links */}
            <div className="social-item">
              <FaWhatsapp className="social-icon" />

              <div className="social-options">
                {whatsappNumber1 && (
                  <a
                    href={`https://wa.me/${whatsappNumber1.replace("https://wa.me/923159030278", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Number 1
                  </a>
                )}

                {whatsappNumber2 && (
                  <a
                    href={`https://wa.me/${whatsappNumber2.replace("https://wa.me/923204628336", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Number 2
                  </a>
                )}

                {!whatsappNumber1 && !whatsappNumber2 && (
                  <span>WhatsApp</span>
                )}
              </div>
            </div>

            {/* One TikTok icon and link */}
            <a
              href={tiktokProfile || undefined}
              target="_blank"
              rel="noopener noreferrer"
              className="social-item"
              aria-label="TikTok"
              onClick={(event) => {
                if (!tiktokProfile) event.preventDefault();
              }}
            >
              <FaTiktok className="social-icon" />
              <span>TikTok</span>
            </a>
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

          <p>
            <FaPhoneAlt className="footer-icon" />
            {923159030278} | {923204628336}
          </p>

          <p>
            <FaEnvelope className="footer-icon" />
            info@themarriagecircle.com
          </p>

          <p>
            <FaClock className="footer-icon" />
            Mon - Sat, 10 AM - 10 PM
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 The Marriage Circle. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

