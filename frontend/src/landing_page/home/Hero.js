import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container px-3 px-md-5 py-4 py-md-5 mb-5 home-hero">
      <div className="row text-center home-hero__content">
        <img src="Assets/homeHero.png" alt="Stock_Market home" className="mb-5 home-hero__image" />

        <h1 className="mt-4 mt-md-5 home-hero__title">Invest in everything</h1>
        <p className="mt-2">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <Link
          to="/signup"
          className="btn btn-primary home-hero__cta"
        >
          Sign up for free
        </Link>
      </div>
    </div>
  );
}

export default Hero;
