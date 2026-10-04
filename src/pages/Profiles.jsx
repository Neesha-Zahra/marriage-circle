import { FaMapMarkerAlt, FaGraduationCap, FaBriefcase, FaMars, FaVenus, FaUserTie, FaFemale } from "react-icons/fa";

function Profiles() {
  return (
    <div className="profiles">
      <section className="profiles-intro">
        <h1>Profiles</h1>
        <p>
          For the privacy and security of our clients, we don't publish full
          profiles or photos publicly. Below are a few sample profiles
          showing the kind of information we work with. Full profiles are
          shared only after a consultation and registration with us.
        </p>
      </section>

      <section className="profiles-list">
        <div className="profile-card">
          <div className="profile-avatar male-avatar"><FaUserTie /></div>
          <h3>Profile 001</h3>
          <p className="profile-gender"><FaMars className="gender-icon male" /> Male</p>
          <p className="profile-age">26-28 years · 5'6"</p>
          <p><FaGraduationCap className="profile-icon" /> MBA</p>
          <p><FaBriefcase className="profile-icon" /> Bank Officer</p>
          <p><FaMapMarkerAlt className="profile-icon" /> Lahore</p>
          <span className="profile-tag">Sunni</span>
        </div>

        <div className="profile-card">
          <div className="profile-avatar male-avatar"><FaUserTie /></div>
          <h3>Profile 002</h3>
          <p className="profile-gender"><FaMars className="gender-icon male" /> Male</p>
          <p className="profile-age">29-31 years · 5'9"</p>
          <p><FaGraduationCap className="profile-icon" /> BSc Engineering</p>
          <p><FaBriefcase className="profile-icon" /> Software Engineer</p>
          <p><FaMapMarkerAlt className="profile-icon" /> Karachi</p>
          <span className="profile-tag">Sunni</span>
        </div>

        <div className="profile-card">
          <div className="profile-avatar female-avatar"><FaFemale /></div>
          <h3>Profile 003</h3>
          <p className="profile-gender"><FaVenus className="gender-icon female" /> Female</p>
          <p className="profile-age">24-26 years · 5'4"</p>
          <p><FaGraduationCap className="profile-icon" /> BS Psychology</p>
          <p><FaBriefcase className="profile-icon" /> Teacher</p>
          <p><FaMapMarkerAlt className="profile-icon" /> Islamabad</p>
          <span className="profile-tag">Shia</span>
        </div>

        <div className="profile-card">
          <div className="profile-avatar male-avatar"><FaUserTie /></div>
          <h3>Profile 004</h3>
          <p className="profile-gender"><FaMars className="gender-icon male" /> Male</p>
          <p className="profile-age">30-32 years · 5'10"</p>
          <p><FaGraduationCap className="profile-icon" /> MBBS</p>
          <p><FaBriefcase className="profile-icon" /> Doctor</p>
          <p><FaMapMarkerAlt className="profile-icon" /> Faisalabad</p>
          <span className="profile-tag">Sunni</span>
        </div>

        <div className="profile-card">
          <div className="profile-avatar male-avatar"><FaUserTie /></div>
          <h3>Profile 005</h3>
          <p className="profile-gender"><FaMars className="gender-icon male" /> Male</p>
          <p className="profile-age">27-29 years · 5'7"</p>
          <p><FaGraduationCap className="profile-icon" /> BBA</p>
          <p><FaBriefcase className="profile-icon" /> Business Owner</p>
          <p><FaMapMarkerAlt className="profile-icon" /> Multan</p>
          <span className="profile-tag">Shia</span>
        </div>

        <div className="profile-card">
          <div className="profile-avatar female-avatar"><FaFemale /></div>
          <h3>Profile 006</h3>
          <p className="profile-gender"><FaVenus className="gender-icon female" /> Female</p>
          <p className="profile-age">25-27 years · 5'5"</p>
          <p><FaGraduationCap className="profile-icon" /> MA English</p>
          <p><FaBriefcase className="profile-icon" /> Content Writer</p>
          <p><FaMapMarkerAlt className="profile-icon" /> Rawalpindi</p>
          <span className="profile-tag">Sunni</span>
        </div>

        <div className="profile-card">
          <div className="profile-avatar male-avatar"><FaUserTie /></div>
          <h3>Profile 007</h3>
          <p className="profile-gender"><FaMars className="gender-icon male" /> Male</p>
          <p className="profile-age">28-30 years · 5'11"</p>
          <p><FaGraduationCap className="profile-icon" /> PMA Graduate</p>
          <p><FaBriefcase className="profile-icon" /> Army Officer (Major)</p>
          <p><FaMapMarkerAlt className="profile-icon" /> Rawalpindi</p>
          <span className="profile-tag">Sunni</span>
        </div>

        <div className="profile-card">
          <div className="profile-avatar female-avatar"><FaFemale /></div>
          <h3>Profile 008</h3>
          <p className="profile-gender"><FaVenus className="gender-icon female" /> Female</p>
          <p className="profile-age">26-28 years · 5'4"</p>
          <p><FaGraduationCap className="profile-icon" /> LLB, LLM</p>
          <p><FaBriefcase className="profile-icon" /> Civil Judge</p>
          <p><FaMapMarkerAlt className="profile-icon" /> Lahore</p>
          <span className="profile-tag">Sunni</span>
        </div>

        <div className="profile-card">
          <div className="profile-avatar male-avatar"><FaUserTie /></div>
          <h3>Profile 009</h3>
          <p className="profile-gender"><FaMars className="gender-icon male" /> Male</p>
          <p className="profile-age">29-31 years · 5'8"</p>
          <p><FaGraduationCap className="profile-icon" /> CA Finalist</p>
          <p><FaBriefcase className="profile-icon" /> Chartered Accountant</p>
          <p><FaMapMarkerAlt className="profile-icon" /> Karachi</p>
          <span className="profile-tag">Shia</span>
        </div>
      </section>

      <section className="profiles-note">
        <h2>Interested in Full Profiles?</h2>
        <p>
          To view complete profiles and receive personalized matches based
          on your preferences, please contact us directly for a
          consultation. We'll guide you through registration and the next
          steps.
        </p>
      </section>
    </div>
  );
}

export default Profiles;