import React, { useState, useEffect } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Header from "../components/header/Header.js";
const HomeSectionOne = dynamic(() =>
  import("../components/home/HomeSection-1.js")
);
const HomeSectionThree = dynamic(() =>
  import("../components/home/HomeSection-3.js")
);
const HomeSectionFour = dynamic(() =>
  import("../components/home/HomeSection-4.js")
);
const HireDedicatedDeveloper = dynamic(() =>
  import("../components/common/HireDedicatedDeveloper.js")
);
// const HomeSectionFive = dynamic(() =>import("../components/home/HomeSection-5")); don't use

const HomeSectionSix = dynamic(() =>
  import("../components/home/HomeSection-6.js")
);
const HomeSectionEight = dynamic(() =>
  import("../components/home/HomeSection-8.js")
);
const HomeSectionNine = dynamic(() =>
  import("../components/home/HomeSection-9.js")
);
const HomeSectionTen = dynamic(() =>
  import("../components/home/HomeSection-10.js")
);
const HomeSectionEleven = dynamic(() =>
  import("../components/home/HomeSection-11.js")
);
const KeepInTouch = dynamic(() =>
  import("../components/common/keepInTouch.js")
);
const LocateUs = dynamic(() => import("../components/common/locateUs.js"));
const LetsKick = dynamic(() => import("../components/common/LetsKick.js"));

const Footer = dynamic(() => import("../components/common/Footer.js"));

import "aos/dist/aos.css"; // You can also use <link> for styles// ..

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [position, setPostion] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset >= 3000) {
        setPostion(true);
      }
    });
  });

  return (
    <>
      <Head>
        <title>
          Custom Software Development Company | Staff Augmentation - Brain
          Inventory
        </title>
        <meta
          name="google-site-verification"
          content="/google0f5d76b9c6c1d8b3.html"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Custom Software Development Company | Staff Augmentation - Brain Inventory"
        />
        <meta
          property="og:description"
          content="Brain Inventory is a leading custom Software Development Company offering Staff Augmentation, IT Consulting, Software, Web, and App Development Services across the globe."
        />
        <meta property="og:url" content="https://braininventory.in/" />
        <meta
          property="og:image"
          content="https://d1u4arv5y5eda6.cloudfront.net/images/home_preview.png"
        />
        <meta property="twitter:domain" content="https://braininventory.in/ " />
        <meta
          property="twitter:image"
          content="https://d1u4arv5y5eda6.cloudfront.net/images/Logobg.png"
        />
        <meta
          property="twitter:title"
          content="Custom Software Development Company | Staff Augmentation - Brain Inventory"
        />
        <meta
          property="twitter:description"
          content="Brain Inventory is a leading custom Software Development Company offering Staff Augmentation, IT Consulting, Software, Web, and App Development Services across the globe."
        />
        <meta name="p:domain_verify" content="/pinterest-551ed.html" />
        <meta name="p:domain_verify" content="/googlec59025ad92b5fc4c.html" />
        <meta
          name="description"
          content="Brain Inventory is a leading custom Software Development Company offering Staff Augmentation, IT Consulting, Software, Web, and App Development Services across the globe."
        />
        <meta property="twitter:creator" content=" Brain Inventory " />
        <meta property="twitter:site" content=" BrainInventory" />
        <meta
          property="twitter:card"
          content="https://d1u4arv5y5eda6.cloudfront.net/images/Logobg.png"
        />
        <link rel="icon" href="/favicon.png" />
        <link rel="canonical" href="https://braininventory.in" />
      </Head>
      <main className="relative">
        <Header />
        <section className="container">
          <HomeSectionOne />
          <HomeSectionThree />
          <HomeSectionFour />
          <HireDedicatedDeveloper />
        </section>
        {position && (
          <>
            <HomeSectionSix />
            <section className="container flex justify-center">
              <HomeSectionEight />
            </section>
            <HomeSectionNine />
            <section className="container">
              <HomeSectionTen />
              <HomeSectionEleven />
              <KeepInTouch />
              <LocateUs />
              <LetsKick />
              <Footer />
            </section>
          </>
        )}
      </main>
    </>
  );
}
