import React from "react";
import { Link } from "react-router-dom";

const ticketSections = [
    {
        title: "Account Opening",
        items: [
            { label: "Online account opening", path: "/signup" },
            { label: "Offline account opening" },
            { label: "Company, partnership and HUF accounts" },
            { label: "Opening" },
            { label: "Charges at Stock_Market", path: "/pricing" },
            { label: "Stock_Market IDFC FIRST Bank 3-in-1 account" },
            { label: "Getting started", path: "/signup" },
        ],
    },
    {
        title: "Your Stock_Market Account",
        items: [
            { label: "Login credentials", path: "/login" },
            { label: "Your Profile" },
            { label: "Account modification" },
            { label: "Client Master Report (CMR) and Depository Participant (DP)" },
            { label: "Nomination" },
            { label: "Transfer and conversion of securities" },
        ],
    },
    {
        title: "Kite",
        items: [
            { label: "IPO" },
            { label: "Trading FAQs", path: "/products" },
            { label: "Margin Trading Facility (MTF) and Margins", path: "/pricing" },
            { label: "Charts and orders", path: "/products" },
            { label: "Alerts and Nudges" },
            { label: "General" },
        ],
    },
    {
        title: "Funds",
        items: [
            { label: "Add money" },
            { label: "Withdraw money" },
            { label: "Add bank accounts" },
            { label: "eMandates" },
        ],
    },
    {
        title: "Console",
        items: [
            { label: "Portfolio" },
            { label: "Corporate actions" },
            { label: "Funds statement" },
            { label: "Reports" },
            { label: "Profile" },
            { label: "Segments" },
        ],
    },
    {
        title: "Coin",
        items: [
            { label: "Mutual funds" },
            { label: "National Pension Scheme (NPS)" },
            { label: "Fixed Deposit (FD)" },
            { label: "Features on Coin" },
            { label: "Payments and Orders" },
            { label: "General" },
        ],
    },
];

function SupportItem({ item }) {
    if (item.path) {
        return (
            <Link to={item.path} className="text-muted text-decoration-none">
                {item.label}
            </Link>
        );
    }

    return <span>{item.label}</span>;
}

function CreateTicket() {
    return (
        <section className="container py-5">
            <div className="row mb-4">
                <div className="col-12">
                    <h1 className="fs-2">To create a ticket, select a relevant topic</h1>
                </div>
            </div>

            <div className="row g-4">
                {ticketSections.map((section) => (
                    <div className="col-12 col-md-6 col-lg-4" key={section.title}>
                        <div className="h-100">
                            <h2 className="fs-4 mb-3">{section.title}</h2>
                            <ul
                                className="list-unstyled text-muted mb-0"
                                style={{ lineHeight: 2 }}
                            >
                                {section.items.map((item) => (
                                    <li key={item.label}>
                                        <SupportItem item={item} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default CreateTicket;
