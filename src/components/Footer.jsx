import "../css/footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="container">

        <div className="row">

          <div className="col-lg-4 mb-4">

            <h3 className="footer-logo">
              NeuroSync<span>AI</span>
            </h3>

            <p>
              Empowering businesses with AI-driven automation,
              analytics, and intelligent solutions.
            </p>

          </div>

          <div className="col-lg-4 mb-4">

            <h4>Quick Links</h4>

            <ul className="footer-links">
              <li><a href="#hero">Home</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
            </ul>

          </div>

          <div className="col-lg-4 mb-4">

            <h4>Contact</h4>

            <p>📧 support@neurosyncai.com</p>
            <p>📞 +91 98765 43210</p>
            <p>📍 Chennai, Tamil Nadu, India</p>

          </div>

        </div>

        <hr />

        <div className="text-center">

          <p>
            © 2026 NeuroSync AI. All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;