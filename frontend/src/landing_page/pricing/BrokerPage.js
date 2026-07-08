import React from "react";

function Brokerage() {
    return (
        <section className="container py-5">
            <div className="row border-top pt-5 gy-4">
                <div className="col-12 col-lg-8">
                    <h2 className="fs-4 mb-4">Brokerage calculator</h2>
                    <ul
                        className="text-muted ps-3 mb-0"
                        style={{ lineHeight: 2, fontSize: "0.92rem" }}
                    >
                        <li>
                            Call &amp; Trade and RMS auto-squareoff: Additional
                            charges of ₹50 + GST per order.
                        </li>
                        <li>Digital contract notes will be sent via e-mail.</li>
                        <li>
                            Physical copies of contract notes, if required, will
                            be charged ₹20 per contract note. Courier charges
                            apply.
                        </li>
                        <li>
                            For NRI account (non-PIS), 0.5% or ₹100 per executed
                            order for equity, whichever is lower.
                        </li>
                        <li>
                            For NRI account (PIS), 0.5% or ₹200 per executed
                            order for equity, whichever is lower.
                        </li>
                        <li>
                            If the account is in debit balance, any order placed
                            will be charged ₹40 per executed order instead of ₹20
                            per executed order.
                        </li>
                    </ul>
                </div>

                <div className="col-12 col-lg-4">
                    <h2 className="fs-4 mb-4">List of charges</h2>
                    <ul
                        className="text-muted ps-3 mb-0"
                        style={{ lineHeight: 2, fontSize: "0.92rem" }}
                    >
                        <li>Equity delivery: ₹0 brokerage</li>
                        <li>Equity intraday: 0.03% or ₹20 per executed order</li>
                        <li>Equity futures: 0.03% or ₹20 per executed order</li>
                        <li>Equity options: Flat ₹20 per executed order</li>
                        <li>Direct mutual funds: ₹0 commissions</li>
                        <li>Account opening and maintenance: ₹0</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Brokerage;
