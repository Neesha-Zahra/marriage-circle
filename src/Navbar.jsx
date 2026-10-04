import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    /* Navbar-index css*/
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <div className={`nav-links ${isOpen ? "active" : ""}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
        <Link to="/how-it-works" onClick={() => setIsOpen(false)}>How It Works</Link>
        <Link to="/services" onClick={() => setIsOpen(false)}>Our Services</Link>
        <Link to="/profiles" onClick={() => setIsOpen(false)}>Profiles</Link>
        <Link to="/overseas" onClick={() => setIsOpen(false)}>Overseas Pakistanis</Link>
        <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        {/* <Link to="/contact" className="consultation-btn mobile-btn" onClick={() => setIsOpen(false)}>Book a Consultation</Link> */}
      </div>
      {/* <Link to="/contact" className="consultation-btn desktop-btn">Book a Consultation</Link> */}

      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Navbar;
// import { Link } from "react-router-dom";
// import logo from "./logo.png";

// function Navbar() {
//   return (
//     <nav className="navbar">
//       <div className="logo">
//         <img src={logo} alt="logo" />
//       </div>
//       <div className="nav-links">
//         <Link to="/">Home</Link>
//         <Link to="/about">About</Link>
//         <Link to="/how-it-works">How It Works</Link>
//         <Link to="/services">Our Services</Link>
//         <Link to="/profiles">Profiles</Link>
//         <Link to="/overseas">Overseas Pakistanis</Link>
//         <Link to="/contact">Contact</Link>
//       </div>
//       <button className="consultation-btn">Book a Consultation</button>
//     </nav>
//   );
// }

// export default Navbar;
