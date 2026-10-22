
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaClock } from "react-icons/fa";
function Contact() {
  return (
    <div className="contact">
      <section className="contact-intro">
        <h1>Contact Us</h1>
        <p>
          We believe the best conversations happen directly not through
          forms. Reach out to us via phone or on WhatsApp and we'll
          personally guide you through the next steps.
        </p>
      </section>

      <section className="contact-details">
        <div className="contact-card">
          <div className="contact-icon-circle"><FaPhoneAlt /></div>
          <h3>Call Us</h3>
          <p>Speak with us directly for any questions.</p>
          <a href="tel:+923159030278" className="contact-link">
            +92 315 903 0278
          </a>
          <a href="tel:+923204628336" className="contact-link">
            +92 320 462 8336
          </a>
        </div>

        <div className="contact-card">
          <div className="contact-icon-circle"><FaWhatsapp /></div>
          <h3>WhatsApp</h3>
          <p>Send us a message anytime quick and easy.</p>
          <a className="contact-links" href="https://wa.me/923159030278" target="_blank" rel="noopener noreferrer">
                    Contact Us on WhatsApp-1
                </a>
                <a className="contact-links" href="https://wa.me/923204628336" target="_blank" rel="noopener noreferrer">
                    Contact Us on WhatsApp-2
                </a>
        </div>

        {/* <div className="contact-card">
          <div className="contact-icon-circle"><FaEnvelope /></div>
          <h3>Email</h3>
          <p>Prefer email? Write to us anytime.</p>
          <a href="mailto:info@themarriagecircle.com" className="contact-link">
            info@themarriagecircle.com
          </a>
        </div> */}

        <div className="contact-card">
          <div className="contact-icon-circle"><FaClock /></div>
          <h3>Office Hours</h3>
          <p>We're available:</p>
          <p className="contact-link">Mon - Sat, 10 AM - 10 PM</p>
        </div>
      </section>
    </div>
  );
}

export default Contact;