import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductPage() {
    return (
        <>
            <Navbar />
            <Hero />
            <LeftSection
                imageURL="/Assets/kite.png"
                productName="Kite"
                productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and tools built for both active traders and long-term investors."
                tryDemo="/"
                learnMore="/"
                googlePlay="/"
                appStore="/"
            />
            <RightSection
                imageURL="/Assets/console.png"
                productName="Console"
                productDescription="The central dashboard for your Stock_Market account. Track portfolio performance, view holdings and P&L, inspect tax reports, and analyze every investment decision in one place."
                learnMore="/"
            />
            <LeftSection
                imageURL="/Assets/coin.png"
                productName="Coin"
                productDescription="Invest in commission-free direct mutual funds online and grow your long-term wealth with a smooth, minimal investing experience directly from your Stock_Market account."
                learnMore="/"
            />
            <RightSection
                imageURL="/Assets/kiteconnect.png"
                productName="Kite Connect API"
                productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
                learnMore="/"
            />
            <LeftSection
                imageURL="/Assets/varsity.png"
                productName="Varsity mobile"
                productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
                googlePlay="/"
                appStore="/"
            />
            <Universe />
            
            <Footer />
        </>
    );
}

export default ProductPage;
