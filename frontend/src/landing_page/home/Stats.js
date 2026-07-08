import React from "react";
import { Link } from "react-router-dom";

function Stats() {
    return (
        <section className="container py-5 home-stats">
            <div className="row align-items-start">
                <div className="col-12 col-lg-5 px-lg-5 mb-5 mb-lg-0 pt-lg-5 home-stats__copy">
                    <h1 className="fs-2 mb-5">Trust with confidence</h1>

                    <div className="mb-5">
                        <h2 className="fs-4">Customer-first always</h2>
                        <p
                            className="text-muted lh-lg"
                            style={{ fontSize: "0.95rem" }}
                        >
                            That&apos;s why 1.6+ crore customers trust Stock_Market with ~ ₹6
                            lakh crores of equity investments, making us India&apos;s
                            largest broker; contributing to 15% of daily retail exchange
                            volumes in India.
                        </p>
                    </div>

                    <div className="mb-5">
                        <h2 className="fs-4">No spam or gimmicks</h2>
                        <p
                            className="text-muted lh-lg"
                            style={{ fontSize: "0.95rem" }}
                        >
                            No gimmicks, spam, &quot;gamification&quot;, or annoying push
                            notifications. High quality apps that you use at your pace, the
                            way you like.{" "}
                            <Link to="/about" style={{ textDecoration: "none" }}>
                                Our philosophies.
                            </Link>
                        </p>
                    </div>

                    <div className="mb-5">
                        <h2 className="fs-4">The Stock_Market universe</h2>
                        <p
                            className="text-muted lh-lg"
                            style={{ fontSize: "0.95rem" }}
                        >
                            Not just an app, but a whole ecosystem. Our investments in 30+
                            fintech startups offer you tailored services specific to your
                            needs.
                        </p>
                    </div>

                    <div>
                        <h2 className="fs-4">Do better with money</h2>
                        <p
                            className="text-muted lh-lg"
                            style={{ fontSize: "0.95rem" }}
                        >
                            With initiatives like{" "}
                            <span>Nudge</span>{" "}
                            and{" "}
                            <span>Kill Switch</span>
                            , we don&apos;t just facilitate transactions, but actively help
                            you do better with your money.
                        </p>
                    </div>
                </div>
                <div className="col-12 col-lg-7 text-center">
                    <img
                        src="/Assets/ecosystem.png"
                        alt="Stock_Market ecosystem"
                        className="img-fluid home-stats__image"
                        style={{ width: "90%", maxWidth: "700px" }}
                    />
                    <div className="d-flex justify-content-center gap-5 mt-4 flex-wrap home-stats__actions">
                        <Link
                            to="/products"
                            style={{ textDecoration: "none", fontSize: "1rem" }}
                        >
                            Explore our products →
                        </Link>
                        <Link
                            to="/signup"
                            style={{ textDecoration: "none", fontSize: "1rem" }}
                        >
                            Try Kite demo →
                        </Link>
                    </div>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-12 text-center">
                    <img
                        src="/Assets/pressLogos.png"
                        alt="Press logos"
                        className="img-fluid home-stats__press"
                        style={{ width: "100%", maxWidth: "700px", opacity: 0.7 }}
                    />
                </div>
            </div>
        </section>
    );
}

export default Stats;
