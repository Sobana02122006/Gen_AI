import "../css/stats.css";

function Stats() {
  const stats = [
    {
      number: "10K+",
      title: "Active Users"
    },
    {
      number: "500+",
      title: "Companies"
    },
    {
      number: "99.9%",
      title: "Uptime"
    },
    {
      number: "24/7",
      title: "Support"
    }
  ];

  return (
    <section className="stats-section">

      <div className="container">

        <div className="row">

          {stats.map((item, index) => (

            <div
              className="col-lg-3 col-md-6 col-6 mb-4"
              key={index}
            >

              <div className="stats-card">

                <h2>{item.number}</h2>

                <p>{item.title}</p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Stats;