import React from "react";
import Navbar from "../Navbar";
import Hero from "./Hero";
import BrokerPage from "./BrokerPage";
import OpenAccount from "../OpenAccount";
import Footer from "../Footer";


function PricingPage() {
  return (
    <>
     <Navbar />
      <Hero />
      <OpenAccount />
      <BrokerPage />
      <Footer/>
    </>
  );
}

export default PricingPage;