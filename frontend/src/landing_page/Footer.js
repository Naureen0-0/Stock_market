import React from "react";
import { Link } from "react-router-dom";

const footerColumns = [
    {
        title: "Account",
        links: [
            { label: "Open demat account", path: "/signup" },
            { label: "Minor demat account" },
            { label: "NRI demat account" },
            { label: "HUF demat account" },
            { label: "Commodity" },
            { label: "Dematerialisation" },
            { label: "Fund transfer" },
            { label: "MTF" },
        ],
    },
    {
        title: "Support",
        links: [
            { label: "Contact us", path: "/support" },
            { label: "Support portal", path: "/support" },
            { label: "How to file a complaint?", path: "/support" },
            { label: "Status of your complaints" },
            { label: "Bulletin" },
            { label: "Circular" },
            { label: "Z-Connect blog" },
            { label: "Downloads" },
        ],
    },
    {
        title: "Company",
        links: [
            { label: "About", path: "/about" },
            { label: "Philosophy", path: "/about" },
            { label: "Press & media" },
            { label: "Careers" },
            { label: "Stock_Market Cares (CSR)" },
            { label: "Stock_Market.tech" },
            { label: "Open source" },
            { label: "Referral program" },
        ],
    },
    {
        title: "Quick links",
        links: [
            { label: "Upcoming IPOs" },
            { label: "Brokerage charges", path: "/pricing" },
            { label: "Market holidays" },
            { label: "Economic calendar" },
            { label: "Calculators", path: "/products" },
            { label: "Markets", path: "/products" },
            { label: "Sectors" },
            { label: "Gift Nifty" },
        ],
    },
];

const bottomLinks = [
    { label: "NSE" },
    { label: "BSE" },
    { label: "MCX" },
    { label: "Terms & conditions" },
    { label: "Policies & procedures" },
    { label: "Privacy policy" },
    { label: "Disclosure" },
    { label: "For investor's attention" },
    { label: "Investor charter" },
];

function FooterItem({ item, className, style }) {
    if (item.path) {
        return (
            <Link to={item.path} className={className} style={style}>
                {item.label}
            </Link>
        );
    }

    return (
        <span className={className} style={style}>
            {item.label}
        </span>
    );
}

function Footer() {
    return (
        <footer
            className="border-top mt-5 py-5"
            style={{ backgroundColor: "#fbfbfb", color: "#424242" }}
        >
            <div className="container">
                <div className="row gy-5">
                    <div className="col-12 col-lg-3">
                        <img
                            src="/Assets/logo.png"
                            alt="Stock_Market"
                            style={{ width: "130px", height: "auto" }}
                            className="mb-4"
                        />

                        <p className="text-muted mb-1" style={{ fontSize: "0.95rem" }}>
                            &copy; 2010 - 2026, Stock_Market Broking Ltd.
                        </p>
                        <p className="text-muted mb-4" style={{ fontSize: "0.95rem" }}>
                            All rights reserved.
                        </p>

                        <div className="d-flex gap-4 mb-3 footer-social" style={{ fontSize: "1.45rem" }}>
                            <span className="text-muted" aria-label="X">
                                <i className="fa fa-twitter" aria-hidden="true"></i>
                            </span>
                            <span className="text-muted" aria-label="Facebook">
                                <i className="fa fa-facebook-official" aria-hidden="true"></i>
                            </span>
                            <span className="text-muted" aria-label="Instagram">
                                <i className="fa fa-instagram" aria-hidden="true"></i>
                            </span>
                            <span className="text-muted" aria-label="LinkedIn">
                                <i className="fa fa-linkedin" aria-hidden="true"></i>
                            </span>
                        </div>

                        <hr className="my-3" style={{ maxWidth: "250px", opacity: 0.15 }} />

                        <div className="d-flex gap-4 mb-4 footer-social" style={{ fontSize: "1.45rem" }}>
                            <span className="text-muted" aria-label="YouTube">
                                <i className="fa fa-youtube-play" aria-hidden="true"></i>
                            </span>
                            <span className="text-muted" aria-label="WhatsApp">
                                <i className="fa fa-whatsapp" aria-hidden="true"></i>
                            </span>
                            <span className="text-muted" aria-label="Telegram">
                                <i className="fa fa-telegram" aria-hidden="true"></i>
                            </span>
                        </div>

                        <div className="d-flex flex-wrap gap-2 footer-store-badges">
                            <span aria-label="Get it on Google Play">
                                <img
                                    src="/Assets/googlePlayBadge.svg"
                                    alt="Get it on Google Play"
                                    style={{ height: "40px" }}
                                />
                            </span>
                            <span aria-label="Download on the App Store">
                                <img
                                    src="/Assets/appstoreBadge.svg"
                                    alt="Download on the App Store"
                                    style={{ height: "40px" }}
                                />
                            </span>
                        </div>
                    </div>

                    <div className="col-12 col-lg-9">
                        <div className="row g-4 footer-links-grid">
                            {footerColumns.map((column) => (
                                <div className="col-6 col-md-3 footer-link-column" key={column.title}>
                                    <h2 className="fs-3 mb-4" style={{ fontSize: "1.25rem" }}>
                                        {column.title}
                                    </h2>
                                    <div className="d-flex flex-column gap-3">
                                        {column.links.map((item) => (
                                            <FooterItem
                                                key={item.label}
                                                item={item}
                                                className="text-muted text-decoration-none"
                                                style={{ fontSize: "0.95rem" }}
                                            />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-5 pt-4">
                    <p className="text-muted mb-3" style={{ fontSize: "0.76rem", lineHeight: 1.8 }}>
                        Stock_Market Broking Ltd.: Member of NSE, BSE, MCX &amp; MSEI
                        SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository
                        services through Stock_Market Broking Ltd. SEBI Registration no.:
                        IN-DP-431-2019 Registered Address: Stock_Market Broking Ltd.,
                        #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public
                        School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka,
                        India. For any complaints pertaining to securities broking
                        please write to complaints@Stock_Market.com, for DP related to
                        dp@Stock_Market.com. Please ensure you carefully read the Risk
                        Disclosure Document as prescribed by SEBI | ICF
                    </p>

                    <p className="text-muted mb-3" style={{ fontSize: "0.76rem", lineHeight: 1.8 }}>
                        Procedure to file a complaint on SEBI SCORES: Register on
                        SCORES portal. Mandatory details for filing complaints on
                        SCORES: Name, PAN, Address, Mobile Number, E-mail ID.
                        Benefits: Effective Communication, Speedy redressal of the
                        grievances
                    </p>

                    <p className="mb-3" style={{ fontSize: "0.76rem", lineHeight: 1.8 }}>
                        <span className="text-decoration-none">
                            Smart Online Dispute Resolution
                        </span>{" "}
                        <span className="text-muted">|</span>{" "}
                        <span className="text-decoration-none">
                            Grievances Redressal Mechanism
                        </span>
                    </p>

                    <p className="text-muted mb-3" style={{ fontSize: "0.76rem", lineHeight: 1.8 }}>
                        Investments in securities market are subject to market risks;
                        read all the related documents carefully before investing.
                    </p>

                    <p className="text-muted mb-3" style={{ fontSize: "0.76rem", lineHeight: 1.8 }}>
                        Attention investors: 1) Stock brokers can accept securities as
                        margins from clients only by way of pledge in the depository
                        system w.e.f September 01, 2020. 2) Update your e-mail and
                        phone number with your stock broker / depository participant
                        and receive OTP directly from depository on your e-mail and/or
                        mobile number to create pledge. 3) Check your securities / MF /
                        bonds in the consolidated account statement issued by NSDL/CDSL
                        every month.
                    </p>

                    <p className="text-muted mb-3" style={{ fontSize: "0.76rem", lineHeight: 1.8 }}>
                        India&apos;s largest broker based on active clients per NSE.
                        <span className="text-decoration-none ms-1">
                            NSE broker factsheet
                        </span>
                    </p>

                    <p className="text-muted mb-3" style={{ fontSize: "0.76rem", lineHeight: 1.8 }}>
                        &quot;Prevent unauthorised transactions in your account. Update
                        your mobile numbers/email IDs with your stock brokers.
                        Receive information of your transactions directly from
                        Exchange on your mobile/email at the end of the day. Issued in
                        the interest of investors. KYC is one time exercise while
                        dealing in securities markets; once KYC is done through a SEBI
                        registered intermediary (broker, DP, Mutual Fund etc.), you
                        need not undergo the same process again when you approach
                        another intermediary.&quot; Dear Investor, if you are subscribing
                        to an IPO, there is no need to issue a cheque. Please write
                        the Bank account number and sign the IPO application form to
                        authorize your bank to make payment in case of allotment. In
                        case of no allotment the funds will remain in your bank
                        account. As a business we don&apos;t give stock tips, and have
                        not authorized anyone to trade on behalf of others. If you
                        find anyone claiming to be part of Stock_Market and offering such
                        services, please
                        <Link to="/support" className="text-decoration-none ms-1">
                            create a ticket here.
                        </Link>
                    </p>

                    <p className="text-muted mb-4" style={{ fontSize: "0.76rem", lineHeight: 1.8 }}>
                        *Customers availing insurance advisory services offered by
                        Ditto (Tactical Consulting Private Limited | IRDAI Registered
                        Corporate Agent (Composite) License No CA0738) will not have
                        access to the exchange investor grievance redressal forum,
                        SEBI SCORES/ODR, or arbitration mechanism for such products.
                    </p>
                </div>

                <div className="d-flex flex-wrap justify-content-center gap-4 pt-2 footer-bottom-links">
                    {bottomLinks.map((item) => (
                        <FooterItem
                            key={item.label}
                            item={item}
                            className="text-muted text-decoration-none"
                            style={{ fontSize: "0.9rem" }}
                        />
                    ))}
                </div>
            </div>
        </footer>
    );
}

export default Footer;
