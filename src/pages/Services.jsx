import { FaHandshake, FaCrown, FaGlobe, FaUsers } from "react-icons/fa";

function Services() {
  return (
    <div className="services">
      <section className="services-intro">
        <h1>Our Services</h1>
        <p>
          We offer a range of matchmaking services designed around your
          family's needs — whether you're looking for a personal, guided
          experience or specialized support for overseas Pakistanis. Every
          package is built on trust, discretion, and genuine care.
        </p>
      </section>

      <section className="services-list">
        <div className="service-card">
          <FaHandshake className="service-icon" />
          <h3>Standard Matchmaking</h3>
          <p>
            A thoughtful, guided matchmaking experience — ideal for
            families looking for a straightforward, honest process.
          </p>
          <ul>
            <li>Personal consultation</li>
            <li>Verified profile creation</li>
            <li>Curated match suggestions</li>
          </ul>
          <p className="service-price">Contact us for pricing</p>
        </div>

        <div className="service-card">
          <FaCrown className="service-icon" />
          <h3>Premium Matchmaking</h3>
          <p>
            A faster, more personalized service with dedicated attention
            to your preferences and priority matching.
          </p>
          <ul>
            <li>Priority profile matching</li>
            <li>Dedicated matchmaking consultant</li>
            <li>Faster turnaround on introductions</li>
          </ul>
          <p className="service-price">Contact us for pricing</p>
        </div>

        <div className="service-card">
          <FaGlobe className="service-icon" />
          <h3>Overseas Matchmaking</h3>
          <p>
            Specialized support for Pakistanis living abroad, coordinating
            around time zones, travel schedules, and family involvement.
          </p>
          <ul>
            <li>Video call consultations</li>
            <li>Visit-timing coordination</li>
            <li>Support across UK, USA, Canada & Gulf</li>
          </ul>
          <p className="service-price">Contact us for pricing</p>
        </div>

        <div className="service-card">
          <FaUsers className="service-icon" />
          <h3>Family Consultation</h3>
          <p>
            Guidance for families navigating the matchmaking process
            together, ensuring everyone feels heard and comfortable.
          </p>
          <ul>
            <li>Joint family sessions</li>
            <li>Expectation-setting guidance</li>
            <li>Ongoing support throughout the process</li>
          </ul>
          <p className="service-price">Contact us for pricing</p>
        </div>
      </section>
    </div>
  );
}

export default Services;