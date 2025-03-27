import Head from "next/head";
import dynamic from 'next/dynamic';
import React, { Suspense } from "react";
import DOMPurify from "isomorphic-dompurify";
import { advantages, chooseBI, content, experienceCards, faqDetails, hireCards, jsonLdScript, keySkillsBrief, keySkillsPoints, subhead1, subhead2 } from "../data/hire-dedicated-remote-developer-data/hireIsoDeveloperData.js";

const Header = dynamic(() => import("../components/header/Header.js"),{ssr:false});
const HireBanner = dynamic(() => import("../components/common/HireBanner.jsx"));
const Customer = dynamic(() => import("../components/common/customer.jsx"));
const Experienced = dynamic(() => import("../components/common/Hire.jsx"));
const Advantage = dynamic(() => import("../components/Hire/Advantage.jsx"));
const HireMarquee = dynamic(() => import("../components/common/HireMarquee.jsx"));
const KeySkill = dynamic(() => import("../components/Hire/KeySkills.jsx"));
const Hire = dynamic(() => import("../components/common/Hire.jsx"));
const ChooseBrainInventory = dynamic(() => import("../components/common/CommonChooseBrainInventory.jsx"));
const Engaged = dynamic(() => import("../components/Hire/Engaged.jsx"));
const HireSteps = dynamic(() => import("../components/Hire/HireSteps.jsx"));
const Clients = dynamic(() => import("../components/Hire/Clients.jsx"));
const Faqs = dynamic(() => import("../components/mobilePages/faqs.js"),{ssr:false});
const BlogArticle = dynamic(() => import("../components/common/BlogArticle.jsx"),{ssr:false});
const KeepInTouch = dynamic(() => import("../components/common/keepInTouch.js"));
const LocateUs = dynamic(() => import("../components/common/locateUs.js"));
const LetsKick = dynamic(() => import("../components/common/LetsKick.js"));
const Footer = dynamic(() => import("../components/common/Footer.js"),{ssr:false});
function HireIsoAppDeveloper(props) {
 
  const sanitizedJsonLd = DOMPurify.sanitize(JSON.stringify(jsonLdScript));
  return (
    <>
      <Head>
        <title>
          Certified iOS App Developers Hire - iOS App Developers USA
        </title>
        <meta
          name="description"
          content="Hire top-rated iOS app developers. Our experienced iOS app developers are committed to providing innovative solutions for your apps. Contact today!"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Certified iOS App Developers Hire - iOS App Developers USA"
        />
        <meta
          property="og:description"
          content="Hire top-rated iOS app developers. Our experienced iOS app developers are committed to providing innovative solutions for your apps. Contact today!"
        />
        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/preview/Braininventory_Hire+iOS+Developers.jpg"
        />
        <meta
          property="og:url"
          content="https://braininventory.in/hire-ios-app-developers"
        />

        <link
          rel="canonical"
          href="https://braininventory.in/hire-ios-app-developers"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: sanitizedJsonLd }}
        />
      </Head>
      <Suspense
        fallback={
          {
            /*<Loader />*/
          }
        }
      >
        <div className="relative">
          <Header></Header>
          <HireBanner
            heading="Transform your ideas into stunning iOS apps"
            title="Hire Experienced iOS App developers with"
            content={content}
            btn="Contact Us!"
            unique={"brain inventory"}
            image="https://braininventory.s3.us-east-2.amazonaws.com/images/hire/Braininventory_Hire+iOS+Developers.png"
            alt="iOS app development services"
            type="hire"
          />
          <Customer />
          <Experienced
            title="Hire Experienced iOS Developers to Upscale Your Development"
            subhead1={subhead1}
            subhead2={subhead2}
            card={experienceCards}
          />
          <Advantage title="iOS Developers" advantages={advantages} />
          <HireMarquee title="iOS" />
          <KeySkill brief={keySkillsBrief} points={keySkillsPoints} />
          <Hire
            title="Why Hire iOS Developer from %Brain Inventory"
            card={hireCards}
          />
          <ChooseBrainInventory
            reasons={chooseBI}
            alt="iOS app development services"
          />
          <Engaged />
          <HireSteps type="iOS" />
          <Clients tech="iOS" />
          <Faqs faq={faqDetails} />
          <hr />
          <BlogArticle />
          <KeepInTouch />
          <LocateUs />
          <LetsKick />
          <Footer />
        </div>
      </Suspense>
    </>
  );
}
export default HireIsoAppDeveloper;
