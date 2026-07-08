import React from "react";
import { Link } from "react-router-dom";

function Pricing() {
  return (
    <section className="container py-5 home-pricing">
      <div className="row align-items-center">
        <div className="col-12 col-lg-5 mb-5 mb-lg-0 home-pricing__intro">
          <h1 className="fs-2 mb-4">Unbeatable pricing</h1>
          <p className="text-muted lh-lg mb-4" style={{ fontSize: "0.95rem" }}>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <Link
            to="/pricing"
            style={{ textDecoration: "none", fontSize: "1rem" }}
          >
            See pricing →
          </Link>
        </div>

        <div className="col-12 col-lg-7">
          <div className="row text-center g-4 home-pricing__cards">
            <div className="col-12 col-sm-4 home-pricing__card">
              <img
                src="/Assets/pricing0.svg"
                alt="Free equity delivery and direct mutual funds"
                className="img-fluid mb-3"
                style={{ maxWidth: "220px" }}
              />
              <p
                className="text-muted mb-0 mx-auto"
                style={{ fontSize: "0.9rem", maxWidth: "220px" }}
              >
                Free account opening and maintenance.
              </p>
            </div>

            <div className="col-12 col-sm-4 home-pricing__card">
              <img
                src="/Assets/pricingEquity.svg"
                alt="Flat brokerage for intraday and F&O trades"
                className="img-fluid mb-3"
                style={{ maxWidth: "220px" }}
              />
              <p
                className="text-muted mb-0 mx-auto"
                style={{ fontSize: "0.9rem", maxWidth: "220px" }}
              >
                Free equity delivery and direct mutual funds.
              </p>
            </div>

            <div className="col-12 col-sm-4 home-pricing__card">
              <img
                src="/Assets/intradayTrades.svg"
                alt="Zero commission direct mutual funds"
                className="img-fluid mb-3"
                style={{ maxWidth: "220px" }}
              />
              <p
                className="text-muted mb-0 mx-auto"
                style={{ fontSize: "0.9rem", maxWidth: "220px" }}
              >
                Intraday and F&amp;O trades at flat ₹20 or 0.03% per executed
                order.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
