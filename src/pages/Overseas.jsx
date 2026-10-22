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
                        <h4>Family Discussions</h4>
                        <p>Families connect to discuss their preferences, share their perspectives, and arrange calls at a mutually convenient time.</p>
                    </div>
                    <div className="handle-point">
                        <FaPlaneDeparture className="handle-icon" />
                        <h4>Meetings & Introductions</h4>
                        <p>Once both families are comfortable, they coordinate visits and arrange in-person meetings according to their own schedules.</p>
                    </div>
                    <div className="handle-point">
                        <FaUsers className="handle-icon" />
                        <h4>Family-Led Decisions</h4>
                        <p>We bring compatible individuals and families together. From the initial conversations to personal meetings, families take the lead in building a connection at their own pace.</p>
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
                    <span className="country-tag">🇨🇳 China</span>
                    <span className="country-tag">🇰🇷 South Korea</span>
                    <span className="country-tag">🇩🇪 Germany</span>
                    <span className="country-tag">🇶🇦 Qatar</span>
                    <span className="country-tag">🇴🇲 Oman</span>
                </div>
            </section>
            <section className="overseas-cta">
                <h2>Ready to Start Your Search From Abroad?</h2>
                <p>
                    Reach out to us directly and we'll walk you through the entire
                    process, no matter where in the world you're based.
                </p>
                <a className="cta-btn" href="https://wa.me/923159030278" target="_blank" rel="noopener noreferrer">
                    Contact Us on WhatsApp-1
                </a>
                <a className="cta-btn" href="https://wa.me/923204628336" target="_blank" rel="noopener noreferrer">
                    Contact Us on WhatsApp-2
                </a>
            </section>
        </div>
    )
};
export default Overseas;