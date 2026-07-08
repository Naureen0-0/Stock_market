import React from "react";
import { Link } from "react-router-dom";

function Hero() {
    return (
        <section className="container py-5 product-hero">
            <div className="row justify-content-center text-center border-bottom pb-5">
                <div className="col-12 col-lg-8 product-hero__content">
                    <h1 className="fs-1 mb-3">Stock_Market Products</h1>
                    <p
                        className="text-muted mb-4 product-hero__description"
                        style={{ fontSize: "1.15rem", lineHeight: 1.7 }}
                    >
                        Sleek, modern, and intuitive trading platforms built for
                        investing, trading, and tracking your entire portfolio.
                    </p>
                    <p className="mb-0 product-hero__actions" style={{ fontSize: "1rem" }}>
                        <Link
                            to="/products"
                            className="text-decoration-none me-4"
                        >
                            Explore our products
                        </Link>
                        <Link
                            to="/signup"
                            className="text-decoration-none"
                        >
                            Try Kite demo
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Hero;
