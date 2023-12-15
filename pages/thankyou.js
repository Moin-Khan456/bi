import React, { useState } from "react";
import Head from "next/head";
import Header from "../components/header/Header";
import dynamic from "next/dynamic";
const Loader = dynamic(() => import("../components/common/loader"));
const Timeline = dynamic(() => import("../components/portfolio/timeline.jsx"));

function ThankYou(props) {
  return (
    <>
      <Head>
        <title>Thank You For Visiting Us | Brain Inventory</title>
      </Head>
      {/*<Loader />*/}
      <div className="relative  ">
        <div className="hidden">
          <Header />
        </div>
        <div>
          <div className="2xl:py-32 xl:py-28 py-24 2xl:px-10 lg:px-8 mobile-padding">
            <div className="container padding-left-all-section">
              <h1 className="text-center text-6xl text-white Gilroy-Bold">
                Thank You
              </h1>
              <p className="text-center pt-6 text-lg pb-1">
                Just a short while.
              </p>
              <p className="text-center text-lg">
                As we make sure the right person{" "}
                <span className="color-light">get back to you ASAP</span>
              </p>
            </div>
          </div>
          <Timeline />
        </div>
      </div>
    </>
  );
}
export default ThankYou;