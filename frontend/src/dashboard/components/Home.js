import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import { clearDashboardAuth, getStoredDashboardToken } from "../api";
import "../dashboard.css";

const Home = () => {
  const [isAuthReady, setIsAuthReady] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!getStoredDashboardToken()) {
      clearDashboardAuth();
      navigate("/login?logout=1", { replace: true });
      return;
    }

    setIsAuthReady(true);
  }, [navigate]);

  if (!isAuthReady) {
    return null;
  }

  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;
