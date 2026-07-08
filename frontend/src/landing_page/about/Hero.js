import React from "react";

function Hero() {
    return (
        <section className="container py-5">
            <div className="row justify-content-center text-center border-bottom pb-5">
                <div className="col-12 col-lg-10">
                    <h1
                        className="fw-medium mb-4"
                        style={{ fontSize: "2.2rem", lineHeight: 1.45 }}
                    >
                        We pioneered the discount broking model in India.
                        <br />
                        Now, we are breaking ground with our technology.
                    </h1>
                </div>
            </div>

            <div className="row justify-content-center pt-5">
                <div className="col-12 col-lg-5 mb-4 mb-lg-0">
                    <p
                        className="text-muted lh-lg"
                        style={{ fontSize: "1rem" }}
                    >
                        We kick-started operations on the 15th of August, 2010 with
                        the goal of breaking all barriers that traders and investors
                        face in India in terms of cost, support, and technology.
                    </p>
                    <p
                        className="text-muted lh-lg"
                        style={{ fontSize: "1rem" }}
                    >
                        We named the company Stock_Market, a combination of Zero and
                        Rodha, the Sanskrit word for barrier.
                    </p>
                    <p
                        className="text-muted lh-lg mb-0"
                        style={{ fontSize: "1rem" }}
                    >
                        Today, our disruptive pricing models and in-house technology
                        have made us the largest stock broker in India.
                    </p>
                </div>

                <div className="col-12 col-lg-5">
                    <p
                        className="text-muted lh-lg"
                        style={{ fontSize: "1rem" }}
                    >
                        Over 1.6 crore clients place billions of orders every year
                        through our powerful ecosystem of investment platforms,
                        contributing to over 15% of all retail order volumes in India.
                    </p>
                    <p
                        className="text-muted lh-lg"
                        style={{ fontSize: "1rem" }}
                    >
                        In addition, we run a number of popular open online
                        educational and community initiatives to empower retail
                        traders and investors.
                    </p>
                    <p
                        className="text-muted lh-lg mb-0"
                        style={{ fontSize: "1rem" }}
                    >
                        Rainmatter, our fintech fund and incubator, has invested in
                        several startups that are building the future of finance in
                        India.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Hero;
