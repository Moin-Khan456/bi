import React, { Suspense } from "react";
import Head from "next/head";
import Script from 'next/script';
import dynamic from "next/dynamic";

import {
  faq,
  listEngagement,
  technologies,
} from "../data/about-us-data/howWeWorkData.js";
const Header = dynamic(() => import("../components/header/Header"),{ssr:false});
const WorkBanner = dynamic(() => import("../components/work/workBanner.js"));
const Work = dynamic(() => import("../components/work/work.js"));
const ChooseApp = dynamic(() =>
  import("../components/mobilePages/chooseApp.js")
);
const LanguageTool = dynamic(() =>
  import("../components/work/languageTool.js")
);
const EngagementModal = dynamic(() =>
  import("../components/mobilePages/engagementModal.js")
);
const Faqs = dynamic(() => import("../components/mobilePages/faqs.js"),{ssr:false});
const Footer = dynamic(() => import("../components/common/Footer"),{ssr:false});
const KeepInTouch = dynamic(() => import("../components/common/keepInTouch"));
const LetsKick = dynamic(() => import("../components/common/LetsKick"));
const LocateUs = dynamic(() => import("../components/common/locateUs"));

export default function HowWeWork() {
  return (
    <>
      <Head>
        <title>How Brain Inventory Work for Clients - Learn More</title>
        <meta
          name="description"
          content="Brain Inventory is a Culture rich software development service provider that helps businesses turn their idea into reality. Learn more about work here!"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content=" How Brain Inventory Work for Clients - Learn More"
        />
        <meta
          property="og:description"
          content="Brain Inventory is a Culture rich software development service provider that helps businesses turn their idea into reality. Learn more about work here! "
        />
        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/Braininventory_how+we+work.jpg"
        />

        <meta
          property="og:url"
          content="https://braininventory.in/how-we-work"
        />
        <link
          rel="icon"
          href="https://braininventory.s3.us-east-2.amazonaws.com/images/logo/Braininventory_logo.png"
        />
         <link rel="canonical" href="https://braininventory.in/how-we-work" />
        <screenTopcript
          async
          src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js"
          crossOrigin="anonymous"
        ></screenTopcript>
        <script
          async
          src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/debug.addIndicators.min.js"
          crossOrigin="anonymous"
        ></script>
        <script
          async
          src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/animation.gsap.min.js"
          crossOrigin="anonymous"
        ></script>
       
      </Head>
      <Suspense
        fallback={
          {
            /*<Loader />*/
          }
        }
      >
        <main>
          <Header />
          <section className="relative container">
            <WorkBanner />
            <Work />
          </section>
          <section className="container">
            <ChooseApp />
            <LanguageTool technologies={technologies} />
            <EngagementModal listEngagement={listEngagement} />
            <Faqs faq={faq} />
            <KeepInTouch />
            <LocateUs />
            <LetsKick />
          </section>
          <Footer />
        </main>
      </Suspense>
    </>
  );
}
