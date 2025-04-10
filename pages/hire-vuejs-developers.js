import React, { Suspense } from "react";
import Head from "next/head";
import dynamic from 'next/dynamic';
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
} from "../data/hire-dedicated-remote-developer-data/hireVueJsData.js";

const Header = dynamic(() => import("../components/header/Header"),{ssr:false});
const HireBanner = dynamic(() => import("../components/common/HireBanner"));
const Customer = dynamic(() => import("../components/common/customer"));
const Experienced = dynamic(() => import("../components/common/Hire"));
const Advantage = dynamic(() => import("../components/Hire/Advantage.jsx"));
const HireMarquee = dynamic(() => import("../components/common/HireMarquee"));
const KeySkill = dynamic(() => import("../components/Hire/KeySkills.jsx"));
const Hire = dynamic(() => import("../components/common/Hire"));
const ChooseBrainInventory = dynamic(() => import("../components/common/CommonChooseBraininventory"));
const Engaged = dynamic(() => import("../components/Hire/Engaged"));
const HireSteps = dynamic(() => import("../components/Hire/HireSteps"));
const Clients = dynamic(() => import("../components/Hire/Clients"));
const Faqs = dynamic(() => import("../components/mobilePages/faqs.js"),{ssr:false});
const BlogArticle = dynamic(() => import("../components/common/BlogArticle"),{ssr:false});
const KeepInTouch = dynamic(() => import("../components/common/keepInTouch"));
const LocateUs = dynamic(() => import("../components/common/locateUs"));
const LetsKick = dynamic(() => import("../components/common/LetsKick"));
const Footer = dynamic(() => import("../components/common/Footer"),{ssr:false});

function HireVueJsDeveloper(props) {
  const sanitizedJsonLd = DOMPurify.sanitize(JSON.stringify(jsonLdScript));
  return (
    <>
      <Head>
        <title>Hire Dedicated VueJS Developers - Hire VueJS Programmer</title>
        <meta
          name="description"
          content="Hire a dedicated Vuejs developer from Brain Inventory for your custom web development solutions. Our experts are available on a full, part-time, or hourly basis. "
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Hire Dedicated VueJS Developers - Hire VueJS Programmer"
        />
        <meta
          property="og:description"
          content="Hire a dedicated Vuejs developer from Brain Inventory for your custom web development solutions. Our experts are available on a full, part-time, or hourly basis. "
        />
        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/preview/Braininventory_Hire+Vue+Js+Developers.jpg"
        />

        <meta
          property="og:url"
          content="https://braininventory.in/hire-vuejs-developers"
        />

        <link
          rel="canonical"
          href="https://braininventory.in/hire-vuejs-developers"
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
          <div>
            <Header></Header>
            <HireBanner
              heading="Upgrade Your Development Process With Our Expertise"
              title="Hire Vue.js Developer with"
              content={content}
              btn="Contact Us!"
              unique={"brain inventory"}
              image="https://braininventory.s3.us-east-2.amazonaws.com/images/hire/Braininventory_Hire+Vue+Js+Developers.png"
              alt="Vue JS Development Company"
              type="hire"
            />
            <Customer />{" "}
            <Experienced
              title="Hire an Experienced Vue js Developers to Upscale Your Development"
              subhead1={subhead1}
              subhead2={subhead2}
              card={experienceCards}
            />
            <Advantage title="Vue js Developers" advantages={advantages} />
            <HireMarquee title="Vue JS" />
            <KeySkill brief={keySkillsBrief} points={keySkillsPoints} />
            <Hire
              title="Why Hire Vue js Developers from %Brain Inventory"
              card={hireCards}
            />
            <ChooseBrainInventory
              reasons={chooseBI}
              subhead={chooseBiSubhead}
              alt="Vue JS Development Company"
            />
            <Engaged />
            <HireSteps type="Vue JS" />
            <Clients tech="Vue JS" />
            <Faqs faq={faqDetails} />
            <hr />
            <BlogArticle />
            <KeepInTouch />
            <LocateUs />
            <LetsKick />
            <Footer />
          </div>
        </div>
      </Suspense>
    </>
  );
}
export default HireVueJsDeveloper;
