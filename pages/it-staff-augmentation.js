import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import HomeSectionEight from "../components/home/HomeSection-8.js";

import KeepInTouch from "../components/common/keepInTouch.js";
import {
  heroItStuff,
  itStaffAugmentationFaq,
  itStaffRoles,
  itStuffCategories,
  itStuffInfo,
  whyWorkDataItStuff,
} from "../components/it-stuff/dataItStuff.js";
import RolesSkillSets from "../components/it-stuff/Role&SkillSet.jsx";
import Faq from "../components/mobilePages/faqs.js";
const Header = dynamic(() => import("../components/header/Header"));
const Banner = dynamic(() => import("../components/career/banner.js"));
const WhyWork = dynamic(() => import("../components/contacts/whyWork.js"));
const LetsKick = dynamic(() => import("../components/common/LetsKick.js"));

const Footer = dynamic(() => import("../components/common/Footer"));

const LocateUs = dynamic(() => import("../components/common/locateUs"));
const Culture = dynamic(() => import("../components/career/culture.js"));

function itStaffAugmentation(props) {
  return (
    <>
      <Head>
        <title>
          It Staff Augmentation at Brain Inventory | Best Software Development
          Company
        </title>
        <meta
          name="description"
          content="Enhance your team with IT Staff Augmentation services from Brain Inventory, the leading software development company. Boost efficiency and scale projects with our top-tier talent and expertise."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content=" It Staff Augmentation at Brain 
Inventory | Best Software Development Company "
        />
        <meta
          property="og:description"
          content="Enhance your team with IT Staff Augmentation services from Brain Inventory, the leading software development company. Boost efficiency and scale projects with our top-tier talent and expertise"
        />

        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/hr-1.jpg"
        />
        <meta property="og:url" content="https://braininventory.in/career" />
        <link rel="canonical" href="https://braininventory.in/career" />
      </Head>
      {/*<Loader />*/}
      <div className="relative  ">
        <Header />
        <section className="container">
          <Banner info={heroItStuff} />
          <WhyWork info={whyWorkDataItStuff} />
        </section>
        <main>
          <section className="container">
            <Culture categories={itStuffCategories} />
          </section>
          <HomeSectionEight info={itStuffInfo} />
          <section className="container">
            <RolesSkillSets roles={itStaffRoles} />
            <Faq faq={itStaffAugmentationFaq} />
            <KeepInTouch />
            <LocateUs />
            <LetsKick />
            <Footer />
          </section>
        </main>
      </div>
    </>
  );
}

export default itStaffAugmentation;
