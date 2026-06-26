import "../css/navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top custom-navbar">
      <div className="container">

        <a className="navbar-brand logo" href="#">
          NeuroSync<span>AI</span>
        </a>

        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          ☰
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <a className="nav-link" href="#hero">Home</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#features">Features</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#pricing">Pricing</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#testimonials">Reviews</a>
            </li>

          </ul>

          <button className="btn start-btn ms-lg-4">
            Get Started
          </button>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;