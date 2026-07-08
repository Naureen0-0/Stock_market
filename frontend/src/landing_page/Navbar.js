import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../api/config";

const navItems = [
  { label: "Login", to: "/login" },
  { label: "Signup", to: "/signup" },
  { label: "About", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Pricing", to: "/pricing" },
  { label: "Support", to: "/support" },
];

function Navbar() {
  const navigate = useNavigate();
  const [visitorCount, setVisitorCount] = useState(null);
  const [isVisitorCountLoading, setIsVisitorCountLoading] = useState(true);

  const handleNavClick = (event, to) => {
    event.preventDefault();
    navigate(to, {
      state: { scrollToTop: Date.now() },
    });
  };

  useEffect(() => {
    let isMounted = true;

    async function syncVisitorCount() {
      const hasVisited = localStorage.getItem("Stock_MarketVisited");
      const method = hasVisited ? "GET" : "POST";

      if (!hasVisited) {
        localStorage.setItem("Stock_MarketVisited", "true");
      }

      try {
        const response = await fetch(`${API_BASE_URL}/api/visitors`, {
          method,
        });

        if (!response.ok) {
          throw new Error("Visitor request failed.");
        }

        const data = await response.json();

        if (isMounted && typeof data.count === "number") {
          setVisitorCount(data.count);
        }
      } catch (error) {
        if (!hasVisited) {
          localStorage.removeItem("Stock_MarketVisited");
        }
        console.error("Unable to sync visitor count:", error.message);
      } finally {
        if (isMounted) {
          setIsVisitorCountLoading(false);
        }
      }
    }

    syncVisitorCount();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
        <nav
            className="navbar navbar-expand-lg bg-white border-bottom sticky-top site-navbar"
            style={{ zIndex: 1000 }}
        >
            <div className="container py-2">
                <Link className="navbar-brand" to="/" onClick={(event) => handleNavClick(event, "/")}>
                    <img
                        src="/Assets/logo.png"
                        alt="Stock_Market"
                        style={{ width: "130px", height: "auto", maxHeight: "40px", objectFit: "contain", display: "block" }}
                    />
                </Link>

                {(isVisitorCountLoading || visitorCount !== null) && (
                    <span
                        className={`visitor-count visitor-count--nav me-auto ms-3${
                            isVisitorCountLoading ? " visitor-count--loading" : ""
                        }`}
                        aria-live="polite"
                    >
                        {isVisitorCountLoading ? (
                            <>
                                <span className="visitor-count__spinner" aria-hidden="true"></span>
                                <span>Visitors</span>
                            </>
                        ) : (
                            <>Visitors: {visitorCount.toLocaleString("en-IN")}</>
                        )}
                    </span>
                )}

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#mainNavbar"
                    aria-controls="mainNavbar"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="mainNavbar">
                    <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-4">
                        {navItems.map((item) => (
                            <li className="nav-item" key={item.to}>
                                <NavLink
                                    className="nav-link text-muted"
                                    to={item.to}
                                    onClick={(event) => handleNavClick(event, item.to)}
                                >
                                    {item.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
  );
}

export default Navbar;
