import Head from "next/head";
import dynamic from "next/dynamic.js";
import React, { Suspense } from "react";
import DOMPurify from "isomorphic-dompurify";
import {
  advantages,
  chooseBI,
  chooseBiSubhead,
  content,
  experienceCards,
  faqDetails,
  hireCards,
  jsonLdScript,
  keySkillsBrief,
  keySkillsPoints,
  subhead1,
  subhead2,
} from "../data/hire-dedicated-remote-developer-data/hireMernStackData.js";

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

function HireMernStackDeveloper(props) {
  const sanitizedJsonLd = DOMPurify.sanitize(JSON.stringify(jsonLdScript));
  return (
    <>
      <Head>
        <title>
          Hire Experienced MERN Stack Developers - Hire MERN Stack Developer
        </title>
        <meta
          name="description"
          content="Hire an expert of MERN stack developers full-time and part-time for your web app solutions. Contact us for the certified MERN stack developers for you."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Hire Experienced MERN Stack Developers - Hire MERN Stack Developer"
        />
        <meta
          property="og:description"
          content="Hire an expert of MERN stack developers full-time and part-time for your web app solutions. Contact us for the certified MERN stack developers for you."
        />

        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/preview/Braininventory_Hire+MERN+Developers.jpg"
        />
        <meta
          property="og:url"
          content="https://braininventory.in/hire-mern-stack-developers"
        />

        <link
          rel="canonical"
          href="https://braininventory.in/hire-mern-stack-developers"
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
            heading="Upgrade Your Development Process With Our Expertise"
            title="Hire Dedicated MERN Stack Developers with"
            content={content}
            btn="Contact Us!"
            unique={"brain inventory"}
            image="https://braininventory.s3.us-east-2.amazonaws.com/images/hire/Braininventory_Hire+MERN+Developers.png"
            alt="MERN stack development company"
            type="hire"
          />
          <Customer />
          <Experienced
            title="Hire an Experienced MERN Stack Developers to Upscale Your Development"
            subhead1={subhead1}
            subhead2={subhead2}
            card={experienceCards}
          />
          <Advantage title="MERN Stack Developers" advantages={advantages} />
          <HireMarquee title="MERN Stack" />
          <KeySkill brief={keySkillsBrief} points={keySkillsPoints} />
          <Hire
            title="Why Hire MERN Stack Developers from %Brain Inventory"
            card={hireCards}
          />
          <ChooseBrainInventory
            reasons={chooseBI}
            subhead={chooseBiSubhead}
            alt="MERN stack development company"
          />

          <Engaged />
          <HireSteps type="MERN Stack" />
          <Clients tech="MERN Stack" />
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

export default HireMernStackDeveloper;
