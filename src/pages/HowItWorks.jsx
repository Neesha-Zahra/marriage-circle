import nikkahSigning from "../assets/nikkah-signing.jpg";
function HowItWorks() {
    return (
        <div className="how-it-works">
            <section className="how-intro">
                <h1>How It Works</h1>
                <p>
                    Finding the right match takes care, patience, and trust. Here's
                    a closer look at how we guide you through every step of the
                    journey from your first consultation to a successful match.
                </p>
            </section>
            <section className="how-story">
                <div className="how-story-text">
                    <h2>A Process Rooted in Respect</h2>
                    <p>
                        From the very first conversation to the final signing, every
                        step is handled with care, patience, and complete respect for
                        your family's traditions and comfort.
                    </p>
                </div>
                <div className="how-story-image">
                    <img src={nikkahSigning} alt="Nikkah signing" />
                </div>
            </section>
            <section className="how-steps">
                <div className="how-step">
                    <span className="step-number">1</span>
                    <h3>Initial Consultation</h3>
                    <p>
                        We start with a friendly conversation either in person or over
                        a call to understand your preferences, values, and what
                        you're looking for in a life partner. This helps us personalize
                        the entire matching process around your family's needs.
                    </p>
                </div>

                <div className="how-step">
                    <span className="step-number">2</span>
                    <h3>Profile Creation & Verification</h3>
                    <p>
                        Our team creates a detailed, verified profile based on the
                        information you share. We confirm key details with families
                        directly, ensuring every profile in our network is genuine and
                        trustworthy.
                    </p>
                </div>

                <div className="how-step">
                    <span className="step-number">3</span>
                    <h3>Careful Matching</h3>
                    <p>
                        We personally review potential matches based on your criteria
                        background, values, location, and family expectations and
                        shortlist only those we believe are a strong fit, rather than
                        overwhelming you with options.
                    </p>
                </div>

                <div className="how-step">
                    <span className="step-number">4</span>
                    <h3>Introduction & Follow-Up</h3>
                    <p>
                        Once both families agree, we arrange a respectful introduction.
                        We stay in touch throughout the process, offering guidance and
                        support until families are comfortable moving forward.
                    </p>
                </div>
            </section>
            <section className="how-expect">
                <h2>What to Expect Along the Way</h2>
                <p>
                    Every family's journey is different, and there's no fixed
                    timeline. Some matches come together within weeks, others take
                    a few months of careful consideration. Throughout the process,
                    we remain available to answer questions, address concerns, and
                    ensure both families feel comfortable at every stage.
                </p>
            </section>
        </div>


    );
}
export default HowItWorks;