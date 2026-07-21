import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">

      {/* Navbar */}

      <nav className="navbar">
        <h2 className="logo">VITALINK</h2>

        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/">Services</a>
          <a href="/">About</a>
        </div>
      </nav>


      {/* Hero Section */}

      <section className="hero-section">

        <h1>
          ORGAN & BLOOD DONATION
          <br />
          MANAGEMENT SYSTEM
        </h1>

        <p className="tagline">
          Connecting Hospitals. Saving Lives.
        </p>

        <p className="description">
          A secure healthcare platform that enables hospitals
          to manage organ donations, blood requirements,
          transplantation requests and emergency coordination
          in real time.
        </p>


        <div className="button-section">

          <Link to="/register">
            <button className="register-btn">
              Register Hospital
            </button>
          </Link>

          <Link to="/login">
            <button className="login-btn">
              Hospital Login
            </button>
          </Link>

        </div>

      </section>


      {/* Features Section */}

      <section className="features-section">

        <div className="card">
          <h3>Organ Management</h3>
          <p>Manage organ availability across hospitals.</p>
        </div>

        <div className="card">
          <h3>Blood Management</h3>
          <p>Track blood requirements instantly.</p>
        </div>

        <div className="card">
          <h3>Hospital Network</h3>
          <p>Connect verified hospitals securely.</p>
        </div>

        <div className="card">
          <h3>Emergency Requests</h3>
          <p>Send and receive emergency requests.</p>
        </div>

      </section>


      {/* Why Section */}

      <section className="why-section">

        <h2>Why Choose VITALINK ?</h2>

        <div className="points">

          <p>✓ Real Time Organ Tracking</p>
          <p>✓ Secure Hospital Verification</p>
          <p>✓ Organ Request Management</p>
          <p>✓ Blood Requirement Management</p>
          <p>✓ Emergency Notifications</p>

        </div>

      </section>


      {/* Footer */}

      <footer>

        <h3>
          "One Organ Can Save Eight Lives."
        </h3>

        <p>
          VITALINK © 2026
        </p>

      </footer>

    </div>
  );
};

export default Home;