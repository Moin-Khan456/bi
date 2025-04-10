import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic.js";
import DOMPurify from "isomorphic-dompurify";
import { advantages, chooseBI, chooseBiSubhead, content, experienceCards, faqDetails, hireCards, jsonLdScript, keySkillsBrief, keySkillsPoints, subhead1, subhead2 } from "../data/hire-dedicated-remote-developer-data/hireNextJsData.js";

import Loader from "../components/common/loader";
const Header = dynamic(() => import("../components/header/Header"),{ssr:false});
const HireBanner = dynamic(() => import("../components/common/HireBanner"));
const Customer = dynamic(() => import("../components/common/customer"));
const Experienced = dynamic(() => import("../components/common/Hire"));
const Advantage = dynamic(() => import("../components/Hire/Advantage.jsx"));
const HireMarquee = dynamic(() => import("../components/common/HireMarquee"));
const KeySkill = dynamic(() => import("../components/Hire/KeySkills.jsx"));
const Hire = dynamic(() => import("../components/common/Hire"));
const ChooseBrainInventory = dynamic(() => import("../components/common/CommonChooseBraininventory.jsx"));
const Engaged = dynamic(() => import("../components/Hire/Engaged"));
const HireSteps = dynamic(() => import("../components/Hire/HireSteps"));
const Clients = dynamic(() => import("../components/Hire/Clients"));
const Faqs = dynamic(() => import("../components/mobilePages/faqs.js"),{ssr:false});
const BlogArticle = dynamic(() => import("../components/common/BlogArticle"),{ssr:false});
const KeepInTouch = dynamic(() => import("../components/common/keepInTouch"));
const LocateUs = dynamic(() => import("../components/common/locateUs"));
const LetsKick = dynamic(() => import("../components/common/LetsKick"));
const Footer = dynamic(() => import("../components/common/Footer"),{ssr:false});

function HireNextJsDeveloper() {

  const sanitizedJsonLd = DOMPurify.sanitize(JSON.stringify(jsonLdScript));
  return (
    <>
      <Head>
        <title>
          Hire Experienced Next.js Developer - Next.js Developers USA
        </title>
        <meta
          name="description"
          content=" Are you looking for a next js developer for your next project? Brain Inventory is here to help you create fast and powerful apps according to your needs."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Hire Experienced Next.js Developer - Next.js Developers USA"
        />
        <meta
          property="og:description"
          content=" Are you looking for a next js developer for your next project? Brain Inventory is here to help you create fast and powerful apps according to your needs."
        />

        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/preview/Braininventory_Hire+NextJS+Developers.jpg"
        />
        <meta
          property="og:url"
          content="https://braininventory.in/hire-next-js-developers"
        />

        <link
          rel="canonical"
          href="https://braininventory.in/hire-next-js-developers"
        />
        <link
          rel="preload"
          href="https://braininventory.s3.us-east-2.amazonaws.com/images/hire/Braininventory_Hire+NextJS+Developers.png"
          as="image"
          type="image/png"
          crossorigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: sanitizedJsonLd }}
        />
      </Head>
      <Loader />

      <div className="relative">
        <Header></Header>
        <HireBanner
          heading="Upgrade Your Development Process With Our Expertise"
          title="Hire Dedicated Next js Developers with"
          content={content}
          btn="Contact Us!"
          unique={"brain inventory"}
          image="https://braininventory.s3.us-east-2.amazonaws.com/images/hire/Braininventory_Hire+NextJS+Developers.png"
          alt="Remote Next.js Developers"
          type="hire"
        />
        <Customer />
        <Experienced
          title="Hire an Experienced Next.js Developers to Upscale Your Development"
          subhead1={subhead1}
          subhead2={subhead2}
          card={experienceCards}
        />
        <Advantage title="Hiring Next.js Developers" advantages={advantages} />
        <HireMarquee title="Next Js" />
        <KeySkill brief={keySkillsBrief} points={keySkillsPoints} />
        <Hire
          title="Why Hire Next.js Developers from %Brain Inventory"
          card={hireCards}
        />
        <ChooseBrainInventory
          reasons={chooseBI}
          subhead={chooseBiSubhead}
          alt="Remote Next.js Developers"
        />
        <Engaged />
        <HireSteps type="Next Js" />
        <Clients tech="Next Js" />
        <Faqs faq={faqDetails} />
        <hr />
        <BlogArticle  />
        <KeepInTouch />
        <LocateUs />
        <LetsKick />
        <Footer />
      </div>
    </>
  );
}
export default HireNextJsDeveloper;
