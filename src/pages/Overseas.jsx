import { FaVideo, FaPlaneDeparture, FaUsers, FaGlobeAmericas } from "react-icons/fa";
function Overseas() {
    return (
        <div className="overseas">
            <section className="overseas-intro">
                <h1>Matchmaking for Overseas Pakistanis</h1>
                <p>
                    Living abroad shouldn't make finding the right match harder. We
                    specialize in helping overseas Pakistanis connect with compatible
                    partners back home working around time zones, travel schedules,
                    and family involvement, every step of the way.
                </p>
            </section>
            <section className="overseas-handle">
                <h2>How We Make It Work</h2>
                <div className="handle-points">
                    <div className="handle-point">
                        <FaVideo className="handle-icon" />
                        <h4>Video Call Consultations</h4>
                        <p>Meet and discuss preferences over video call, at a time that suits your schedule abroad.</p>
                    </div>
                    <div className="handle-point">
                        <FaPlaneDeparture className="handle-icon" />
                        <h4>Visit-Timing Coordination</h4>
                        <p>We help plan introductions and meetings around your visits back home.</p>
                    </div>
                    <div className="handle-point">
                        <FaUsers className="handle-icon" />
                        <h4>Family Involvement</h4>
                        <p>We keep families in the loop throughout, even when you're miles away.</p>
                    </div>
                </div>
            </section>
            <section className="overseas-countries">
                <h2>Countries We Serve</h2>
                <div className="countries-list">
                    <span className="country-tag">🇬🇧 United Kingdom</span>
                    <span className="country-tag">🇺🇸 United States</span>
                    <span className="country-tag">🇨🇦 Canada</span>
                    <span className="country-tag">🇸🇦 Saudi Arabia</span>
                    <span className="country-tag">🇦🇪 UAE</span>
                    <span className="country-tag">🇦🇺 Australia</span>
                </div>
            </section>
            <section className="overseas-cta">
                <h2>Ready to Start Your Search From Abroad?</h2>
                <p>
                    Reach out to us directly we'll walk you through the entire
                    process, no matter where in the world you're based.
                </p>
                <button className="cta-btn">Contact Us on WhatsApp</button>
            </section>
        </div>
    )
};
export default Overseas;