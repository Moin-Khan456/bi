import React, { useState, useEffect, Suspense } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Header from "../components/header/Header.js";
import HomeSectionOne from "../components/home/HomeSection-1.js";
import {
  FaqsSchema,
  LocalBusinessSchema,
  OrganizationSchema,
  ProductSchema,
  WebsiteSchema,
} from "../components/meta/home-schemas.js";
const HomeSectionThree = dynamic(() =>
  import("../components/home/HomeSection-3.js")
);
const HomeSectionFour = dynamic(() =>
  import("../components/home/HomeSection-4.js")
);
const HireDedicatedDeveloper = dynamic(() =>
  import("../components/common/HireDedicatedDeveloper.js")
);
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

function Home() {
  return (
    <>
      <Head>
        <title>
        Custom Software Development Service USA - Software Development Company
        </title>
        <meta
          name="google-site-verification"
          content="/google0f5d76b9c6c1d8b3.html"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Custom Software Development Service USA - Software Development Company"
        />
        <meta
          property="og:description"
          content="At brain inventory we provide custom software development services solutions for your new ideas. We are a trusted development company. Contact us today."
        />
        <meta property="og:url" content="https://braininventory.in" />
        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/home_preview.png"
        />
        <meta name="p:domain_verify" content="/pinterest-551ed.html" />
        <meta name="p:domain_verify" content="/googlec59025ad92b5fc4c.html" />
        <meta
          name="description"
          content="At brain inventory we provide custom software development services solutions for your new ideas. We are a trusted development company. Contact us today."
        />
        <meta property="twitter:creator" content=" Brain Inventory " />
        <meta property="twitter:site" content=" BrainInventory" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(WebsiteSchema),
          }}
        />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(OrganizationSchema),
          }}
        />

        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(LocalBusinessSchema),
          }}
        />

        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(FaqsSchema),
          }}
        />

        {/* Product Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(ProductSchema),
          }}
        />

        <link
          rel="icon"
          href="https://braininventory.s3.us-east-2.amazonaws.com/images/logo/Braininventory_logo.png"
        />
        <link rel="canonical" href="https://braininventory.in/" />
      </Head>
      <Suspense fallback={null}>
        <main className="relative">
          <Header />
          <section className="container">
            <HomeSectionOne />
            <HomeSectionThree />
            <HomeSectionFour />
            <HireDedicatedDeveloper />
          </section>
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
        </main>
      </Suspense>
    </>
  );
}
export default Home;
