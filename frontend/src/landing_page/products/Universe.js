import React from "react";
import { Link } from "react-router-dom";

const universeProducts = [
    {
        name: "Stock_Market Fund House",
        image: "/Assets/Stock_MarketFundhouse.png",
        description: "Our asset management venture offering simple index funds.",
    },
    {
        name: "Sensibull",
        image: "/Assets/sensibullLogo.png",
        description: "Options trading platform with strategy builder and analytics.",
    },
    {
        name: "Coin",
        image: "/Assets/coin.png",
        description: "Commission-free direct mutual fund investing platform.",
    },
    {
        name: "Streak",
        image: "/Assets/streakLogo.png",
        description: "Systematic trading platform to create and backtest strategies.",
    },
    {
        name: "smallcase",
        image: "/Assets/smallcaseLogo.png",
        description: "Thematic investment baskets to invest in diversified ideas.",
    },
    {
        name: "Ditto",
        image: "/Assets/dittoLogo.png",
        description: "Insurance advice platform to help you choose the right cover.",
    },
    {
        name: "GoldenPi",
        image: "/Assets/goldenpiLogo.png",
        description: "Platform for bonds and fixed income investing opportunities.",
    },
    {
        name: "Kite Connect",
        image: "/Assets/kiteconnect.png",
        description: "APIs and developer tools to build powerful investment apps.",
    },
];

function Universe() {
    return (
        <section className="container py-5 product-universe">
            <div className="row justify-content-center text-center mb-5">
                <div className="col-12 col-lg-8 product-universe__intro">
                    <h1 className="fs-2 mb-3">The Stock_Market Universe</h1>
                    <p
                        className="text-muted product-universe__description"
                        style={{ fontSize: "1rem", lineHeight: 1.8 }}
                    >
                        Extend your trading and investment experience with our
                        partner products and platforms built for research, analytics,
                        insurance, bonds, and more.
                    </p>
                </div>
            </div>

            <div className="row g-5 product-universe__grid">
                {universeProducts.map((product) => (
                    <div className="col-6 col-md-4 col-lg-3 product-universe__item-col" key={product.name}>
                        <div className="text-center h-100 product-universe__item">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="img-fluid mb-3 product-universe__logo"
                                style={{ height: "52px", objectFit: "contain" }}
                            />
                            <p
                                className="text-muted mb-0 mx-auto product-universe__copy"
                                style={{ fontSize: "0.9rem", maxWidth: "240px" }}
                            >
                                {product.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-5">
                <Link
                    to="/signup"
                    className="btn btn-primary px-4 py-2"
                    style={{
                        backgroundColor: "#387ed1",
                        borderColor: "#387ed1",
                        minWidth: "210px",
                    }}
                >
                    Sign up for free
                </Link>
            </div>
        </section>
    );
}

export default Universe;
