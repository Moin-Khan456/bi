import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import {
  itStaffAugmentationFaq,
  itStaffRoles,
} from "../components/it-stuff/dataItStuff.js";
import { heroMobileDevelopmentServices, MobileAppCategories, mobileAppDevelopmentInfo, mobileAppIndustries } from "../components/mobile-app-development-services/mobileAppData.js";

const Header = dynamic(() => import("../components/header/Header"),{ssr:false});
const Banner = dynamic(() => import("../components/career/banner.js"));
const AppIntegration = dynamic(() => import("../components/mobile-app-development-services/AppIntegration.jsx"));
const Culture = dynamic(() => import("../components/career/culture.js"));
const MobileAppIndustry = dynamic(() => import("../components/mobile-app-development-services/MobileAppIndustry.jsx"));
const RolesSkillSets = dynamic(() => import("../components/it-stuff/Role&SkillSet.jsx"));
const HomeSectionEight = dynamic(() => import("../components/home/HomeSection-8.js"),{ssr:false});
const Faq = dynamic(() => import("../components/mobilePages/faqs.js"),{ssr:false});
const BlogArticle = dynamic(() => import("../components/common/BlogArticle.jsx"),{ssr:false});
const KeepInTouch = dynamic(() => import("../components/common/keepInTouch.js"));
const LocateUs = dynamic(() => import("../components/common/locateUs"));
const LetsKick = dynamic(() => import("../components/common/LetsKick.js"));
const Footer = dynamic(() => import("../components/common/Footer"),{ssr:false});

function mobileAppDevelopmentServices(props) {
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
          <Banner info={heroMobileDevelopmentServices} />
          <AppIntegration/>
        </section>
        <main>
          <section className="container">
            <Culture categories={MobileAppCategories} />
            <MobileAppIndustry industry={mobileAppIndustries}/>
          </section>
          <section className="container">
            <RolesSkillSets roles={itStaffRoles} />
          <HomeSectionEight info={mobileAppDevelopmentInfo} />
            <Faq faq={itStaffAugmentationFaq} />
            <BlogArticle/>
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

export default mobileAppDevelopmentServices;
