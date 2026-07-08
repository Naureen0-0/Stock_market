import React from "react";
import { Link } from "react-router-dom";

function OpenAccount() {
    return (
        <section className="container py-5 home-open-account">
            <div className="row justify-content-center text-center">
                <div className="col-12 col-lg-8">
                    <h1 className="fs-2 mb-4">Open a Stock_Market account</h1>
                    <p
                        className="text-muted lh-lg mb-4"
                        style={{ fontSize: "0.95rem" }}
                    >
                        Modern platforms and apps, ₹0 investments, and flat ₹20
                        intraday and F&amp;O trades.
                    </p>
                    <Link
                        to="/signup"
                        className="btn btn-primary px-4 py-2"
                        style={{
                            backgroundColor: "#387ed1",
                            borderColor: "#387ed1",
                            minWidth: "200px",
                        }}
                    >
                        Sign up for free
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default OpenAccount;
