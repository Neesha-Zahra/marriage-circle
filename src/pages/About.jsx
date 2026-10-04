import { FaLock, FaUserCheck, FaUsers } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import aboutHands from "../assets/about-hands.jpg";
function About() {
    return (
        <div className="about">
            <section className="about-intro">
                <h1>About The Marriage Circle</h1>
                <p>
                    The Marriage Circle was founded with one simple belief that
                    finding a life partner should be a respectful, personal, and
                    trustworthy experience. We work closely with families to
                    understand their values and preferences, and guide them through
                    every step of the matchmaking journey with honesty and care.
                </p>
            </section>
            <section className="about-story">
                <div className="about-story-image">
                    <img src={aboutHands} alt="Hands with henna" />
                </div>
                <div className="about-story-text">
                    <h2>A Journey Built on Trust</h2>
                    <p>
                        Every match we make begins with genuine care for the families
                        involved. We take the time to understand not just preferences,
                        but values because a lasting marriage is built on far more
                        than a checklist.
                    </p>
                </div>
            </section>
            <section className="about-different">
                <h2>What Makes Us Different</h2>
                <div className="different-points">
                    <div className="point">
                        <FaLock className="point-icon" />
                        <h4>Complete Confidentiality</h4>
                        <p>No profile or photo is shared without your permission.</p>
                    </div>
                    <div className="point">
                        <FaUserCheck className="point-icon" />
                        <h4>Verified Profiles</h4>
                        <p>Every profile is verified through family and ID checks.</p>
                    </div>
                    <div className="point">
                        <FaUsers className="point-icon" />
                        <h4>Human-Led Matching</h4>
                        <p>Real people match you — not an algorithm or an app.</p>
                    </div>
                </div>
            </section>
            <section className="about-trust">
                <h2>Your Trust, Our Responsibility</h2>
                <p>
                    We understand that sharing personal and family information requires
                    trust. That's why we handle every detail with the utmost discretion,
                    and never disclose information without your consent. Our goal is to
                    make your journey toward marriage comfortable, respectful, and
                    completely confidential.
                </p>
            </section>
        </div>

    );
}
export default About;