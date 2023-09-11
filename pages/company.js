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
const Loader = dynamic(() => import("../components/common/loader"));

function Company() {
  return (
    <>
      <Head>
        <title>
          Custom Software & App Development | Web Development Company - Brain
          Inventory
        </title>
        <meta
          name="description"
          content="Brain Inventory is a top-notch 
          IT Software & Staff 
          Augmentation company that 
          started with a clear vision to 
          build amazing products for 
          clients worldwide."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content=" Custom Software & 
App Development | Web Development Company - Brain 
Inventory "
        />
        <meta
          property="og:description"
          content=" Brain 
Inventory is a top-notch IT Software & Staff Augmentation 
company that started with a clear vision to build amazing 
products for clients worldwide."
        />
        <meta
          property="og:url"
          content=" 
https://braininventory.in/"
        />
        <meta
          property="og:image"
          content="https://d1u4arv5y5eda6.cloudfront.net/images/Braininventory_company.jpg"
        />
        <meta property="twitter:domain" content="https://braininventory.in/ " />
        <meta
          property="twitter:image"
          content="https://d1u4arv5y5eda6.cloudfront.net/images/Sufiyan1.png"
        />
        <meta
          property="twitter:title"
          content=" Custom Software & App 
Development | Web Development Company - Brain Inventory "
        />
        <meta
          property="twitter:description"
          content=" Brain Inventory is 
a top-notch IT Software & Staff Augmentation company that started
with a clear vision to build amazing products for clients 
worldwide."
        />
        <meta property="twitter:creator" content=" BrainInventory " />
        <meta property="twitter:site" content="BrainInventory" />
        <meta
          property="twitter:card"
          content="https://d1u4arv5y5eda6.cloudfront.net/images/Logobg.png"
        />
        <link rel="canonical" href="https://braininventory.in/company" />
      </Head>
      <Loader />
      <div className="relative second-component">
        <div>
          <Header />
          <Video></Video>
          <Summary></Summary>
          <Mission></Mission>
          <Ethos></Ethos>
          <Experience></Experience>
          <MeetCrew></MeetCrew>
        </div>
        <Choose></Choose>
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
