import React from "react";
import { Link } from "react-router-dom";

const quickLinks = [
    { label: "Track account opening", path: "/signup" },
    { label: "Track segment activation" },
    { label: "Intraday margins", path: "/pricing" },
    { label: "Kite user manual", path: "/products" },
];

const featuredItems = [
    "Quarterly Settlement of Funds - October 2025",
    "Exclusion of F&O contracts on 8 securities from August 29, 2025",
];

function HeroLink({ item, className }) {
    if (item.path) {
        return (
            <Link to={item.path} className={className}>
                {item.label}
            </Link>
        );
    }

    return <span className={className}>{item.label}</span>;
}

function Hero() {
    return (
        <section
            className="py-5 support-hero"
            style={{ backgroundColor: "#387ed1", color: "#fff" }}
        >
            <div className="container">
                <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-5">
                    <h1 className="fs-4 mb-0">Support Portal</h1>
                    <span className="text-white text-decoration-underline">
                        Track tickets
                    </span>
                </div>

                <div className="row gy-5">
                    <div className="col-12 col-lg-7">
                        <h2
                            className="mb-4"
                            style={{ fontSize: "1.75rem", lineHeight: 1.6 }}
                        >
                            Search for an answer or browse help topics to create
                            a ticket.
                        </h2>
                        <input
                            type="text"
                            className="form-control form-control-lg border-0 shadow-sm"
                            placeholder="Eg: how do I activate F&O, why is my order getting rejected ..."
                            aria-label="Search support articles"
                            style={{ minHeight: "60px" }}
                        />

                        <div className="d-flex flex-wrap gap-4 mt-4 support-hero__links">
                            {quickLinks.map((item) => (
                                <HeroLink
                                    key={item.label}
                                    item={item}
                                    className="text-white text-decoration-underline"
                                />
                            ))}
                        </div>
                    </div>

                    <div className="col-12 col-lg-5">
                        <h2 className="fs-4 mb-4">Featured</h2>
                        <ol className="ps-3 mb-0" style={{ lineHeight: 2.1 }}>
                            {featuredItems.map((item) => (
                                <li key={item}>
                                    <span className="text-white text-decoration-underline">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
