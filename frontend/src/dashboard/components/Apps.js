import React from "react";

const productStats = [
  { value: "6", label: "Products" },
  { value: "2", label: "Active integrations" },
  { value: "1", label: "Learning hub" },
];

const apps = [
  {
    name: "Kite",
    category: "Trading",
    status: "Most used",
    tone: "blue",
    description: "Fast trading terminal for stocks, F&O, commodity, and market watch.",
    action: "Open trading",
  },
  {
    name: "Console",
    category: "Analytics",
    status: "Insights",
    tone: "teal",
    description: "Portfolio analytics, tax-ready reports, holdings breakdown, and performance views.",
    action: "View reports",
  },
  {
    name: "Coin",
    category: "Investing",
    status: "Direct plans",
    tone: "gold",
    description: "Mutual fund investing with direct plans, SIP tracking, and long-term allocation.",
    action: "Explore funds",
  },
  {
    name: "Varsity",
    category: "Learning",
    status: "Recommended",
    tone: "orange",
    description: "Structured modules for market basics, technicals, options, risk, and psychology.",
    action: "Start learning",
  },
  {
    name: "Pulse",
    category: "Research",
    status: "Live updates",
    tone: "slate",
    description: "Curated market news, alerts, earnings coverage, and fast-moving stories in one feed.",
    action: "Read news",
  },
  {
    name: "Partner tools",
    category: "Ecosystem",
    status: "Coming soon",
    tone: "purple",
    description: "External apps and themed investing tools connected through the Stock_Market ecosystem.",
    action: "See integrations",
  },
];

const Apps = () => {
  return (
    <section className="apps-page">
      <div className="apps-hero">
        <div>
          <p className="apps-eyebrow">Apps</p>
          <h1>Your investing ecosystem</h1>
          <p className="apps-subtitle">
            Access Stock_Market products, insights, research, and learning tools from one
            place. This section shows product thinking beyond charts and tables.
          </p>
        </div>
        <div className="apps-stats">
          {productStats.map((stat) => (
            <div key={stat.label} className="apps-stat-card">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="apps-grid">
        {apps.map((app) => (
          <article key={app.name} className={`app-card app-card--${app.tone}`}>
            <div className="app-card__top">
              <div>
                <p className="app-card__category">{app.category}</p>
                <h2>{app.name}</h2>
              </div>
              <span className="app-card__badge">{app.status}</span>
            </div>

            <p className="app-card__description">{app.description}</p>

            <div className="app-card__footer">
              <button type="button" className="app-card__button">
                {app.action}
              </button>
            </div>
          </article>
        ))}
      </div>

      <div className="apps-feature-strip">
        <div className="apps-feature">
          <p className="apps-feature__label">Why this works</p>
          <h3>Better project storytelling for recruiters</h3>
          <p>
            A richer apps section makes the dashboard feel complete and shows product
            design decisions, not only API wiring.
          </p>
        </div>
        <div className="apps-feature">
          <p className="apps-feature__label">Future scope</p>
          <h3>Easy to connect with real modules later</h3>
          <p>
            Each card can become an actual page, onboarding flow, integration, or
            live service without redesigning this surface.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Apps;
