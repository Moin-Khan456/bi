import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("../components/header/Header"));
const BigHeadingScroll = dynamic(() =>
  import("../components/common/BigHeadingScroll")
);
const KeepInTouch = dynamic(() => import("../components/common/keepInTouch"));
const LocateUs = dynamic(() => import("../components/common/locateUs"));
const LetsKick = dynamic(() => import("../components/common/LetsKick"));
const Footer = dynamic(() => import("../components/common/Footer"));
const Video = dynamic(() => import("../components/company/video.js"));
const Summary = dynamic(() => import("../components/company/summary.js"));
const Mission = dynamic(() => import("../components/company/mission.js"));
const Ethos = dynamic(() => import("../components/company/ethos.js"));
const Experience = dynamic(() => import("../components/company/experience.js"));
const Choose = dynamic(() => import("../components/company/choose.js"));
const MeetCrew = dynamic(() => import("../components/company/meetCrew"));

function Company() {
  return (
    <>
      <Head>
        <title>
          Software And App Development | Web Development Company - Brain
          Inventory
        </title>
        <meta
          name="description"
          content="Brain Inventory is a top-level IT Software development company that started with a clear vision to build amazing products for clients worldwide."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Software App & Web Development Company | Brain Inventory"
        />
        <meta
          property="og:description"
          content="Brain Inventory is a top-level IT Software development company that started with a clear vision to build amazing products for clients worldwide."
        />
        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/Braininventory_company.jpg"
        />
        <link rel="canonical" href="https://braininventory.in/company" />
      </Head>
      <div className="relative">
        <Header />
        <Video />
        <Summary head={"Website and App Development Company Overview"}/>
        <div>
          <Mission />
          <Ethos />
          <Experience />
          <MeetCrew />
        </div>
        <Choose />
        <BigHeadingScroll
          text={"Perfectly balanced as all things should be."}
        />
        <KeepInTouch />
        <LocateUs />
        <LetsKick />
        <Footer />
      </div>
    </>
  );
}

export default Company;
