import { useState } from "react";
import pricingData from "../js/pricingData";
import "../css/pricing.css";

function Pricing() {

  const [billing, setBilling] = useState("monthly");
  const [currency, setCurrency] = useState("INR");

  const rates = {
    INR: 1,
    USD: 0.012,
    EUR: 0.011
  };

  const symbols = {
    INR: "₹",
    USD: "$",
    EUR: "€"
  };

  return (
    <section id="pricing" className="pricing-section">
      <div className="container">

        <h2 className="text-center mb-3">
          Pricing Plans
        </h2>

        <p className="text-center mb-5">
          Flexible pricing for every business.
        </p>

        <div className="pricing-controls">

          <button
            className={billing === "monthly" ? "active" : ""}
            onClick={() => setBilling("monthly")}
          >
            Monthly
          </button>

          <button
            className={billing === "yearly" ? "active" : ""}
            onClick={() => setBilling("yearly")}
          >
            Yearly (20% OFF)
          </button>

          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option>INR</option>
            <option>USD</option>
            <option>EUR</option>
          </select>

        </div>

        <div className="row">

          {pricingData.map((plan) => {

            let amount = plan.monthly;

            if (billing === "yearly") {
              amount = plan.monthly * 12 * 0.8;
            }

            amount = (amount * rates[currency]).toFixed(0);

            return (

              <div className="col-lg-4 mb-4" key={plan.id}>

                <div className={`price-card ${plan.popular ? "popular" : ""}`}>

                  {plan.popular && (
                    <span className="badge bg-warning text-dark mb-3">
                      Most Popular
                    </span>
                  )}

                  <h3>{plan.plan}</h3>

                  <h1>
                    {symbols[currency]}
                    {amount}
                  </h1>

                  <ul className="list-unstyled my-4">
                    {plan.features.map((item, index) => (
                      <li key={index}>✅ {item}</li>
                    ))}
                  </ul>

                  <button className="btn btn-info w-100">
                    Choose Plan
                  </button>

                </div>

              </div>

            );

          })}

        </div>

      </div>
    </section>
  );
}

export default Pricing;