import Head from "next/head";
import dynamic from "next/dynamic";
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
} from "../data/hire-dedicated-remote-developer-data/hireQaTestersData.js";

const Header = dynamic(() => import("../components/header/Header"),{ssr:false});
const HireBanner = dynamic(() => import("../components/common/HireBanner"));
const Customer = dynamic(() => import("../components/common/customer"));
const Experienced = dynamic(() => import("../components/common/Hire"));
const Advantage = dynamic(() => import("../components/Hire/Advantage.jsx"));
const HireMarquee = dynamic(() => import("../components/common/HireMarquee"));
const KeySkill = dynamic(() => import("../components/Hire/KeySkills.jsx"));
const Hire = dynamic(() => import("../components/common/Hire"));
const ChooseBrainInventory = dynamic(() => import("../components/common/CommonChooseBrainInventory"));
const Engaged = dynamic(() => import("../components/Hire/Engaged"));
const HireSteps = dynamic(() => import("../components/Hire/HireSteps"));
const Clients = dynamic(() => import("../components/Hire/Clients"));
const Faqs = dynamic(() => import("../components/mobilePages/faqs.js"),{ssr:false});
const BlogArticle = dynamic(() => import("../components/common/BlogArticle"),{ssr:false});
const KeepInTouch = dynamic(() => import("../components/common/keepInTouch"));
const LocateUs = dynamic(() => import("../components/common/locateUs"));
const LetsKick = dynamic(() => import("../components/common/LetsKick"));
const Footer = dynamic(() => import("../components/common/Footer"),{ssr:false});
function HireQaTesters(props) {
  const sanitizedJsonLd = DOMPurify.sanitize(JSON.stringify(jsonLdScript));
  return (
    <>
      <Head>
        <title>
          Hire Dedicated QA Tester - Testing Developers | Brain Inventory
        </title>
        <meta
          name="description"
          content="Are you looking to hire a QA tester? Look no further! We have the best-certified QA testing developers, ready to help you. Contact us today!"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Hire Dedicated QA Tester - Testing Developers | Brain Inventory"
        />
        <meta
          property="og:description"
          content="Are you looking to hire a QA tester? Look no further! We have the best-certified QA testing developers, ready to help you. Contact us today!"
        />

        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/preview/Braininventory_Hire+QA+Analyst.jpg"
        />

        <meta
          property="og:url"
          content="https://braininventory.in/hire-qa-testers"
        />

        <link
          rel="canonical"
          href="https://braininventory.in/hire-qa-testers"
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
            title="Hire QA Testing Developer with"
            content={content}
            btn="Get a Quote"
            image="https://braininventory.s3.us-east-2.amazonaws.com/images/campaign-creators-iEiUITs149M-unsplash.png"
            alt="QA and Testing Specialists"
            unique={"brain inventory"}
          />
          <Customer />
          <Experienced
            title="Hire an Experienced QA Analyst to Upscale Your Development"
            subhead1={subhead1}
            subhead2={subhead2}
            card={experienceCards}
          />
          <Advantage title="QA Analyst" advantages={advantages} />
          <HireMarquee title="QA Analyst" />
          <KeySkill brief={keySkillsBrief} points={keySkillsPoints} />
          <Hire
            title="Why Hire QA Analyst from %Brain Inventory"
            card={hireCards}
          />
          <ChooseBrainInventory
            reasons={chooseBI}
            subhead={chooseBiSubhead}
            alt="QA and Testing Specialists"
          />

          <Engaged />
          <HireSteps type="QA Analyst" />
          <Clients tech="QA Analyst" />
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

export default HireQaTesters;
