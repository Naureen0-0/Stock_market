import React, { useEffect, useState } from "react";

import { Link, useLocation } from "react-router-dom";
import {
  clearDashboardAuth,
  getFrontendLoginUrl,
  getStoredDashboardUserName,
} from "../api";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [userName, setUserName] = useState("USERID");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const storedName = getStoredDashboardUserName();
    const routeIndexMap = {
      "/dashboard": 0,
      "/dashboard/orders": 1,
      "/dashboard/holdings": 2,
      "/dashboard/positions": 3,
      "/dashboard/funds": 4,
      "/dashboard/apps": 6,
    };

    if (storedName) {
      setUserName(storedName);
    }

    setSelectedMenu(routeIndexMap[location.pathname] ?? 0);
  }, [location.pathname]);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
    setIsMobileMenuOpen(false);
  };

  const handleLogout = () => {
    clearDashboardAuth();
    window.location.assign(getFrontendLoginUrl());
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((current) => !current);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";
  const avatarLabel = userName.slice(0, 2).toUpperCase();

  return (
    <div className="menu-container">
      <img src="/Assets/logo.png" alt="Stock_Market" className="logo" />
      <button
        type="button"
        className={`dashboard-menu-toggle${isMobileMenuOpen ? " is-open" : ""}`}
        onClick={toggleMobileMenu}
        aria-label="Toggle dashboard navigation"
        aria-expanded={isMobileMenuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div className={`menus${isMobileMenuOpen ? " menus--open" : ""}`}>
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/dashboard"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/dashboard/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/dashboard/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/dashboard/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/dashboard/funds"
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/dashboard/apps"
              onClick={() => handleMenuClick(6)}
            >
              <p className={selectedMenu === 6 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile">
          <div className="avatar">{avatarLabel}</div>
          <div className="profile-details">
            <p className="username">{userName}</p>
            <button type="button" className="logout-button" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
