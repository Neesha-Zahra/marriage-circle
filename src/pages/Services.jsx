import { FaHandshake, FaCrown, FaGlobe, FaUsers } from "react-icons/fa";

function Services() {
  return (
    <div className="services">
      <section className="services-intro">
        <h1>Our Services</h1>
        <p>
          We offer a range of matchmaking services designed around your
          family's needs whether you're looking for a personal, guided
          experience or specialized support for overseas Pakistanis. Every
          package is built on trust, discretion, and genuine care.
        </p>
      </section>

      <section className="services-list">
        <div className="service-card">
          <FaHandshake className="service-icon" />
          <h3>Standard Matchmaking</h3>
          <p>
            A thoughtful and personalized approach to finding compatible matches, with guidance throughout the initial matchmaking process.
          </p>
          <ul>
            <li>Personal consultation to understand your preferences</li>
            <li>Profile creation highlighting your key details and expectations</li>
            <li>Suitable match suggestions based on your preferences</li>
            {/* <li>Guidance on the matchmaking process</li> */}
          </ul>
          {/* <p className="service-price">Contact us for pricing</p> */}
          <div className="service-contact-buttons">
  <a
    href={`https://wa.me/923159030278?text=${encodeURIComponent(
      "Assalamu Alaikum! I'm interested in The Marriage Circle's matchmaking services. Could you please guide me about the registration process and fee structure? Thank you!"
    )}`}
    target="_blank"
    rel="noopener noreferrer"
    className="service-contact-link"
  >
    Contact Option 1
  </a>

  <a
    href={`https://wa.me/923204628336?text=${encodeURIComponent(
      "Assalamu Alaikum! I'm interested in The Marriage Circle's matchmaking services. Could you please guide me about the registration process and fee structure? Thank you!"
    )}`}
    target="_blank"
    rel="noopener noreferrer"
    className="service-contact-link"
  >
    Contact Option 2
  </a>
</div>
        </div>

        <div className="service-card">
          <FaCrown className="service-icon" />
          <h3>Premium Matchmaking</h3>
          <p>
            A more personalized matchmaking service with additional attention to your preferences.
          </p>
          <ul>
            <li>Personalized match suggestions</li>
            <li>Additional assistance with the matchmaking service</li>
            <li>Priority consideration of suitable profiles</li>
          </ul>
          {/* <p className="service-price">Contact us for pricing</p> */}
        <div className="service-contact-buttons">
  <a
    href={`https://wa.me/923159030278?text=${encodeURIComponent(
      "Assalamu Alaikum! I'm interested in The Marriage Circle's matchmaking services. Could you please guide me about the registration process and fee structure? Thank you!"
    )}`}
    target="_blank"
    rel="noopener noreferrer"
    className="service-contact-link"
  >
    Contact Option 1
  </a>

  <a
    href={`https://wa.me/923204628336?text=${encodeURIComponent(
      "Assalamu Alaikum! I'm interested in The Marriage Circle's matchmaking services. Could you please guide me about the registration process and fee structure? Thank you!"
    )}`}
    target="_blank"
    rel="noopener noreferrer"
    className="service-contact-link"
  >
    Contact Option 2
  </a>
</div>
        </div>

        <div className="service-card">
          <FaGlobe className="service-icon" />
          <h3>Overseas Matchmaking</h3>
          <p> Helping Pakistanis living abroad find compatible matches while considering their preferences and family values. </p>
          <ul>
            <li>Match suggestions for overseas Pakistanis</li>
            <li>Consideration of preferences and time zones</li>
            <li>Connections across the UK, USA, Canada & Gulf</li>
          </ul>
          {/* <p className="service-price">Contact us for pricing</p> */}
          <div className="service-contact-buttons">
  <a
    href={`https://wa.me/923159030278?text=${encodeURIComponent(
      "Assalamu Alaikum! I'm interested in The Marriage Circle's matchmaking services. Could you please guide me about the registration process and fee structure? Thank you!"
    )}`}
    target="_blank"
    rel="noopener noreferrer"
    className="service-contact-link"
  >
    Contact Option 1
  </a>

  <a
    href={`https://wa.me/923204628336?text=${encodeURIComponent(
      "Assalamu Alaikum! I'm interested in The Marriage Circle's matchmaking services. Could you please guide me about the registration process and fee structure? Thank you!"
    )}`}
    target="_blank"
    rel="noopener noreferrer"
    className="service-contact-link"
  >
    Contact Option 2
  </a>
</div>
        </div> 
<div className="service-card">
  <FaUsers className="service-icon" />

  <h3>Family Consultation</h3>

  <p>
    Helping families understand the matchmaking process and discuss
    their preferences before moving forward.
  </p>

  <ul>
    <li>Discussion of family preferences</li>
    <li>Understanding expectations</li>
    <li>Guidance on the matchmaking process</li>
  </ul>

  <div className="service-contact-buttons">
  <a
    href={`https://wa.me/923159030278?text=${encodeURIComponent(
      "Assalamu Alaikum! I'm interested in The Marriage Circle's matchmaking services. Could you please guide me about the registration process and fee structure? Thank you!"
    )}`}
    target="_blank"
    rel="noopener noreferrer"
    className="service-contact-link"
  >
    Contact Option 1
  </a>

  <a
    href={`https://wa.me/923204628336?text=${encodeURIComponent(
      "Assalamu Alaikum! I'm interested in The Marriage Circle's matchmaking services. Could you please guide me about the registration process and fee structure? Thank you!"
    )}`}
    target="_blank"
    rel="noopener noreferrer"
    className="service-contact-link"
  >
    Contact Option 2
  </a>
</div>
</div>

      </section>
    </div>
  );
}

export default Services;