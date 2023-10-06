import React, { useState, useEffect } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("../components/header/Header"));
const WorkBanner = dynamic(() => import("../components/work/workBanner.js"));
const Work = dynamic(() => import("../components/work/work.js"));
const HomeSectionSix = dynamic(() =>
  import("../components/home/HomeSection-6.js")
);
const ChooseApp = dynamic(() =>
  import("../components/mobilePages/chooseApp.js")
);
const LanguageTool = dynamic(() =>
  import("../components/work/languageTool.js")
);
const Newsletter = dynamic(() => import("../components/career/Newsletter"));
const Engagementmodal = dynamic(() =>
  import("../components/mobilePages/engagementModal.js")
);
const Faqs = dynamic(() => import("../components/mobilePages/faqs.js"));
const Footer = dynamic(() => import("../components/common/Footer"));
const KeepInTouch = dynamic(() => import("../components/common/keepInTouch"));
const LetsKick = dynamic(() => import("../components/common/LetsKick"));
const LocateUs = dynamic(() => import("../components/common/locateUs"));
const Loader = dynamic(() => import("../components/common/loader"));

export default function HowWeWork() {
  const [position, setPosition] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setPosition(true);
    });
  }, [position]);
  return (
    <>
      <Head>
        <title>Custom Web App And Software Development – How We Work</title>
        <meta
          name="description"
          content="Brain Inventory is a Culture rich custom Software Development Company that helps business turn their idea into reality. We create custom-tailored solutions to your needs."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content=" Custom Web App And Software Development – How We Work"
        />
        <meta
          property="og:description"
          content="Brain Inventory is a Culture rich custom Software Development Company that helps business turn their idea into reality. We create custom-tailored solutions to your needs. "
        />
        <meta
          property="og:image"
          content="https://d1u4arv5y5eda6.cloudfront.net/images/Braininventory_how+we+work.jpg"
        />

        
        <meta
          property="twitter:title"
          content=" Custom Web App & 
Software Development – How We Work"
        />
        <meta
          property="twitter:description"
          content=" 
Brain Inventory is a Culture rich custom Software Development 
Company that helps business turn their idea into reality. We create 
custom tailored solutions to your needs. 
"
        />

        <link rel="icon" href="/favicon.png" />
        <script
          async
          src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js"
          crossOrigin="anonymous"
        ></script>
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
        <link rel="canonical" href="https://braininventory.in/how-we-work" />
      </Head>
      <Loader />
      <main>
        <Header />
        <section className="relative second-component container">
          <WorkBanner />
          <Work />
        </section>
        <HomeSectionSix />
        {position && (
          <section className="container">
            <ChooseApp />
            <LanguageTool />
            <Newsletter />
            <Engagementmodal />
            <Faqs />
            <KeepInTouch />
            <LocateUs />
            <LetsKick />
          </section>
        )}
        <Footer />
      </main>
    </>
  );
}
