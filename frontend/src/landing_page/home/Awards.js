import React from "react";

function Awards() {
    return (
        <section className="container py-5 home-awards">
            <div className="row align-items-center">
                <div className="col-12 col-lg-6 mb-5 mb-lg-0 text-center">
                    <img
                        src="/Assets/largestBroker.svg"
                        alt="Largest stock broker in India"
                        className="img-fluid home-awards__illustration"
                        style={{ width: "100%", maxWidth: "430px" }}
                    />
                </div>

                <div className="col-12 col-lg-6 px-lg-5">
                    <h1 className="fs-2 mb-4">Largest stock broker in India</h1>
                    <p
                        className="text-muted lh-lg mb-4"
                        style={{ fontSize: "0.95rem" }}
                    >
                        2+ million Stock_Market clients contribute to over 15% of all
                        retail order volumes in India daily by trading and investing
                        in:
                    </p>

                    <div className="row">
                        <div className="col-12 col-md-6">
                            <ul className="text-muted lh-lg ps-3">
                                <li>Futures and Options</li>
                                <li>Commodity derivatives</li>
                                <li>Currency derivatives</li>
                            </ul>
                        </div>

                        <div className="col-12 col-md-6">
                            <ul className="text-muted lh-lg ps-3">
                                <li>Stocks and IPOs</li>
                                <li>Direct mutual funds</li>
                                <li>Bonds and Government Securities</li>
                            </ul>
                        </div>
                    </div>

                    <img
                        src="/Assets/pressLogos.png"
                        alt="Featured in major press outlets"
                        className="img-fluid mt-4 home-awards__press"
                        style={{ width: "100%", maxWidth: "420px", opacity: 0.85 }}
                    />
                </div>
            </div>
        </section>
    );
}

export default Awards;
