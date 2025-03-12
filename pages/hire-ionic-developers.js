import React from "react";
import Head from "next/head";
import dynamic from 'next/dynamic';
import { advantages, chooseBI, chooseBiSubhead, experienceCards, faqDetails, hireCards, keySkillsBrief,content ,keySkillsPoints, subhead1, subhead2, subhead3 } from "../data/hire-dedicated-remote-developer-data/hireIconicDevelopersData.js";

const Header = dynamic(() => import("../components/header/Header"),{ssr:false});
const HireBanner = dynamic(() => import("../components/common/HireBanner"));
const Customer = dynamic(() => import("../components/common/customer"));
const Experienced = dynamic(() => import("../components/Web-Development/Experienced"));
const HireMarquee = dynamic(() => import("../components/common/HireMarquee"));
const Advantage = dynamic(() => import("../components/Hire/Advantage.jsx"));
const KeySkill = dynamic(() => import("../components/Hire/KeySkillsCards.jsx"));
const Hire = dynamic(() => import("../components/common/Hire"));
const ChooseBrainInventory = dynamic(() => import("../components/common/CommonChooseBraininventory.jsx"));
const Faqs = dynamic(() => import("../components/mobilePages/faqs.js"),{ssr:false});
const BlogArticle = dynamic(() => import("../components/common/BlogArticle"),{ssr:false});
const KeepInTouch = dynamic(() => import("../components/common/keepInTouch"));
const LocateUs = dynamic(() => import("../components/common/locateUs"));
const LetsKick = dynamic(() => import("../components/common/LetsKick"));
const Footer = dynamic(() => import("../components/common/Footer"),{ssr:false});

function HireIconicDeveloper(props) {
 
  return (
    <>
      <Head>
        <title>Hire Experienced Ionic Developers | Brain Inventory</title>
        <meta
          name="description"
          content="Are you looking to hire ionic developers? Look no further! We have the best-certified ionic developers, ready to help you. Contact us today!"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Hire Experienced Ionic Developers | Brain Inventory"
        />
        <meta
          property="og:description"
          content="Are you looking to hire ionic developers? Look no further! We have the best-certified ionic developers, ready to help you. Contact us today!"
        />
        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/preview/Braininventory_Hire+React+Native+Developers.jpg"
        />

        <meta
          property="og:url"
          content="https://braininventory.in/hire-ionic-developers"
        />

        <link
          rel="canonical"
          href="https://braininventory.in/hire-ionic-developers"
        />
      </Head>
      <div className="relative">
        <>
          <Header></Header>
          <HireBanner
            subhead="Upgrade Your Development Process With Our Expertise"
            title="Hire Dedicated Ionic Developers with"
            content={content}
            btn="Contact Us!"
            unique={"brain inventory"}
            image="https://braininventory.s3.us-east-2.amazonaws.com/images/hire/ionic/Mask+Group+162.png"
            alt="Ionic development company"
            type="hire"
          />
          <Customer />
          <Experienced
            image="https://braininventory.s3.us-east-2.amazonaws.com/images/hire/ionic/Mask+Group+163.png"
            title="Ionic Developer"
            para1={subhead1}
            para2={subhead2}
            para3={subhead3}
            card={experienceCards}
          />
          <HireMarquee title="Ionic" />
          <Advantage title="Ionic Developer" advantages={advantages} />
          <KeySkill
            brief={keySkillsBrief}
            points={keySkillsPoints}
          />
          <Hire
            title="Why Hire Ionic Developers from %Brain Inventory"
            card={hireCards}
          />
          <ChooseBrainInventory
            reasons={chooseBI}
            subhead={chooseBiSubhead}
            alt="Ionic development company"
          />

          <Faqs faq={faqDetails} />
          <hr />
          <BlogArticle />
          <KeepInTouch />
          <LocateUs />
          <LetsKick />
          <Footer />
        </>
      </div>
    </>
  );
}

export default HireIconicDeveloper;
