import "../css/testimonials.css";

function Testimonials() {

  const reviews = [
    {
      name: "Rahul Sharma",
      role: "Startup Founder",
      review:
        "NeuroSync AI completely transformed our workflow. Productivity increased by 45%.",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      name: "Priya Nair",
      role: "Project Manager",
      review:
        "The AI analytics dashboard helped us make better business decisions.",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      name: "Arjun Kumar",
      role: "Software Engineer",
      review:
        "Modern interface, easy to use, and excellent customer support.",
      rating: "⭐⭐⭐⭐⭐"
    }
  ];

  return (
    <section id="testimonials" className="testimonials-section">

      <div className="container">

        <div className="text-center mb-5">

          <h2 className="section-title">
            What Our Clients Say
          </h2>

          <p className="section-subtitle">
            Trusted by businesses around the world.
          </p>

        </div>

        <div className="row">

          {reviews.map((item, index) => (

            <div className="col-lg-4 col-md-6 mb-4" key={index}>

              <div className="review-card">

                <div className="avatar">
                  {item.name.charAt(0)}
                </div>

                <h4>{item.name}</h4>

                <small>{item.role}</small>

                <p className="mt-3">
                  "{item.review}"
                </p>

                <div className="rating">
                  {item.rating}
                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Testimonials;