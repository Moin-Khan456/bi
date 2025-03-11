import React, { Suspense } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import DOMPurify from "isomorphic-dompurify";
import { advantages, chooseBI, chooseBiSubhead, content, experienceCards, faqDetails, hireCards, jsonLdScript, keySkillsBrief, keySkillsPoints, subhead1, subhead2 } from "../data/hire-dedicated-remote-developer-data/hireNodeJsData";

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

function HireNodeJsDeveloper(props) {
  
  const sanitizedJsonLd = DOMPurify.sanitize(JSON.stringify(jsonLdScript));
  return (
    <>
      <Head>
        <title>Hire Certified NodeJS Developer - NodeJS Developers USA</title>
        <meta
          name="description"
          content=" Looking to hire skilled Node.js developers from India? Hire an experienced and dedicated node js developer with the brain inventory. Contact us today!"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Hire Certified NodeJS Developer - NodeJS Developers USA"
        />
        <meta
          property="og:description"
          content=" Looking to hire skilled Node.js developers from India? Hire an experienced and dedicated node js developer with the brain inventory. Contact us today!"
        />

        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/preview/Braininventory_Hire+Node+JS+Developers.jpg"
        />

        <meta
          property="og:url"
          content="https://braininventory.in/hire-nodejs-developers"
        />
        <link
          rel="canonical"
          href="https://braininventory.in/hire-nodejs-developers"
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
        <main className="relative">
          <section>
            <Header></Header>
            <HireBanner
              heading="Upgrade Your Development Process With Our Expertise"
              title="Hire NodeJS Developer with"
              content={content}
              btn="Contact Us!"
              unique={"brain inventory"}
              image="https://braininventory.s3.us-east-2.amazonaws.com/images/hire/Braininventory_Hire+Node+JS+Developers.png"
              alt="Remote Node.js Developers"
              type="hire"
            />
            <Customer />
            <Experienced
              title="Hire an Experienced Node JS Developers to Upscale Your Development"
              subhead1={subhead1}
              subhead2={subhead2}
              card={experienceCards}
            />
            <Advantage title="Node JS Developers" advantages={advantages} />
            <HireMarquee title="Node.JS" />
            <KeySkill brief={keySkillsBrief} points={keySkillsPoints} />
            <Hire
              title="Why Hire Node JS Developers from %Brain Inventory"
              card={hireCards}
            />
            <ChooseBrainInventory
              reasons={chooseBI}
              subhead={chooseBiSubhead}
              alt="Remote Node.js Developers"
            />

            <Engaged />
            <HireSteps type="NodeJS" />
            <Clients tech="NodeJS" />
            <Faqs faq={faqDetails} />
            <hr />
            <BlogArticle />
            <KeepInTouch />
            <LocateUs />
            <LetsKick />
            <Footer />
          </section>
        </main>
      </Suspense>
    </>
  );
}
export default HireNodeJsDeveloper;
