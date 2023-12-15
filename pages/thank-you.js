import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("../components/header/Header"));
const LocateUs = dynamic(() => import("../components/common/locateUs"));
const LetsKick = dynamic(() => import("../components/common/LetsKick"));
const Footer = dynamic(() => import("../components/common/Footer"));
const Loader = dynamic(() => import("../components/common/loader"));
const Timeline = dynamic(() => import("../components/portfolio/timeline"));

function ThankYou(props) {
  return (
    <>
      <Head>
        <title>Thank You For Visiting Us | Brain Inventory</title>
      </Head>
      {/* <Loader /> */}
      <div className="relative  ">
        <div>
          <Header></Header>
          <div className="2xl:py-32 xl:py-28 py-24 2xl:px-10 lg:px-8 mobile-padding">
            <div className="container padding-left-all-section">
              <h1 className="text-center text-6xl text-white Gilroy-Bold">
                Thank You
              </h1>
              <p className="text-center pt-6 text-lg pb-1">
                Just A Short While.
              </p>
              <p className="text-center text-lg">
                As we Make Sure The Right Person{" "}
                <span className="color-light">Get Back to you ASAP</span>
              </p>
            </div>
          </div>
          <Timeline />
          <LocateUs />
          <LetsKick />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default ThankYou;
