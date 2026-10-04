import Typewriter from "../Typewriter";
import { FaHeart, FaCalendarAlt, FaMapMarkerAlt, FaShieldAlt, FaUserCheck, FaHandsHelping, FaComments, FaSearch, FaUsers, FaCheckCircle } from "react-icons/fa";
import Counter from "../Counter";
import heroCouple from "../assets/hero-couple.jpg";
import { Link } from "react-router-dom";
function Home() {
    return (
        <div className="home">
            <section className="hero">
                <div className="hero-text">
                    <h1>Where Compatible Hearts Meet</h1>
                    <p>
                        Trusted matchmaking rooted in family values, confidentiality,
                        and genuine human care connecting hearts across Pakistan
                        and beyond.
                    </p>
                   <Link to="/contact" className="cta-btn">Book a Consultation</Link>
                </div>
                <div className="hero-image">
                    <img src={heroCouple} alt="Happy couple" />
                </div>
            </section>

            <section className="why-choose">
                <h2>Why Choose The Marriage Circle</h2>
                <div className="why-grid">
                    <div className="why-card">
                        <FaShieldAlt className="why-icon" />
                        <h4>Complete Confidentiality</h4>
                        <p>Your information stays private, shared only with your consent.</p>
                    </div>
                    <div className="why-card">
                        <FaUserCheck className="why-icon" />
                        <h4>Verified Profiles</h4>
                        <p>Every match is verified through family and ID checks.</p>
                    </div>
                    <div className="why-card">
                        <FaHandsHelping className="why-icon" />
                        <h4>Personal Guidance</h4>
                        <p>Real people guide you — not an app, not an algorithm.</p>
                    </div>
                </div>
            </section>
            <section className="stats-bar">
                <div className="stat">
                    <FaHeart className="stat-icon" />
                    <div>
                        <h3><Counter target={300} /></h3>
                        <p>Successful Matches</p>
                    </div>
                </div>
                <div className="stat">
                    <FaCalendarAlt className="stat-icon" />
                    <div>
                        <h3><Counter target={8} /></h3>
                        <p>Years of Trust</p>
                    </div>
                </div>
                <div className="stat">
                    <FaMapMarkerAlt className="stat-icon" />
                    <div>
                        <h3><Counter target={5} /></h3>
                        <p>Cities Covered</p>
                    </div>
                </div>
            </section>

            <section className="how-preview">
                <h2>How It Works</h2>
                <div className="steps">
                    <div className="step">
                        <span className="step-number">1</span>
                        <FaComments className="step-icon" />
                        <h4>Consultation</h4>
                        <p>We meet you and understand your preferences.</p>
                    </div>
                    <div className="step">
                        <span className="step-number">2</span>
                        <FaSearch className="step-icon" />
                        <h4>Matching</h4>
                        <p>We shortlist compatible profiles carefully.</p>
                    </div>
                    <div className="step">
                        <span className="step-number">3</span>
                        <FaUsers className="step-icon" />
                        <h4>Introduction</h4>
                        <p>We arrange a respectful meeting between families.</p>
                    </div>
                    <div className="step">
                        <span className="step-number">4</span>
                        <FaCheckCircle className="step-icon" />
                        <h4>Follow-Up</h4>
                        <p>We support you until a decision is reached.</p>
                    </div>
                </div>
            </section>
            <section className="home-cta">
                <h2><Typewriter text="Ready to find your match?" /></h2>
                <p>Talk to us directly no forms, just a conversation.</p>
                <button className="cta-btn">Contact Us on WhatsApp</button>
            </section>
        </div>
    );
}

export default Home;