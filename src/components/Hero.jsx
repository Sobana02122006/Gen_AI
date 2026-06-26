import "../css/hero.css";

function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="row align-items-center">

          {/* Left Content */}
          <div className="col-lg-6">

            <span className="badge bg-info text-dark mb-3">
              AI Powered Platform
            </span>

            <h1 className="hero-title">
              Transform Your Business with
              <span> NeuroSync AI</span>
            </h1>

            <p className="hero-description">
              NeuroSync AI helps organizations automate workflows,
              analyze business data, and improve productivity using
              Artificial Intelligence.
            </p>

            <div className="mt-4">

              <button className="btn btn-primary btn-lg me-3">
                Get Started
              </button>

              <button className="btn btn-outline-light btn-lg">
                Learn More
              </button>

            </div>

          </div>

          {/* Right Content */}
          <div className="col-lg-6">

            <div className="hero-card">

              <h3>AI Dashboard</h3>

              <div className="progress mb-3">
                <div
                  className="progress-bar bg-success"
                  style={{ width: "92%" }}
                >
                  92%
                </div>
              </div>

              <div className="card-box">
                <h5>Tasks Automated</h5>
                <h2>12,450+</h2>
              </div>

              <div className="card-box">
                <h5>Daily Predictions</h5>
                <h2>98.7%</h2>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;