import Head from "next/head";
import { Suspense } from "react";
import dynamic from "next/dynamic.js";
import DOMPurify from "isomorphic-dompurify";
import { advantages, chooseBI, chooseBiSubhead, content, experienceCards, faqDetails, hireCards, jsonLdScript, keySkillsBrief, keySkillsPoints, subhead1, subhead2 } from "../data/hire-dedicated-remote-developer-data/hireSalesforceDeveloperData.js";

const Header = dynamic(() => import("../components/header/Header"),{ssr:false});
const HireBanner = dynamic(() => import("../components/common/HireBanner"));
const Customer = dynamic(() => import("../components/common/customer"));
const Experienced = dynamic(() => import("../components/common/Hire"));
const Advantage = dynamic(() => import("../components/Hire/Advantage.jsx"));
const HireMarquee = dynamic(() => import("../components/common/HireMarquee"));
const KeySkill = dynamic(() => import("../components/Hire/KeySkills.jsx"));
const Hire = dynamic(() => import("../components/common/Hire"));
const ChooseBrainInventory = dynamic(() => import("../components/common/CommonChooseBraininventory.jsx"));
const Faqs = dynamic(() => import("../components/mobilePages/faqs.js"),{ssr:false});
const BlogArticle = dynamic(() => import("../components/common/BlogArticle"),{ssr:false});
const KeepInTouch = dynamic(() => import("../components/common/keepInTouch"));
const LocateUs = dynamic(() => import("../components/common/locateUs"));
const LetsKick = dynamic(() => import("../components/common/LetsKick"));
const Footer = dynamic(() => import("../components/common/Footer"),{ssr:false});

function HireSalesforceDeveloper(props) {
 
  const sanitizedJsonLd = DOMPurify.sanitize(JSON.stringify(jsonLdScript));
  return (
    <>
      <Head>
        <title>Hire Experienced Salesforce Developers | Brain Inventory</title>
        <meta
          name="description"
          content="Hire dedicated salesforce developers from Brain Inventory for your remote development solutions. Contact us today to hire our dedicated salesforce experts."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Hire Experienced Salesforce Developers | Brain Inventory"
        />
        <meta
          property="og:description"
          content="Hire dedicated salesforce developers from Brain Inventory for your remote development solutions. Contact us today to hire our dedicated salesforce experts."
        />
        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/preview/image.png"
        />
        <meta
          property="og:url"
          content="https://braininventory.in/hire-salesforce-developers"
        />
        <link
          rel="canonical"
          href="https://braininventory.in/hire-salesforce-developers"
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
          <>
            <Header />
            <HireBanner
              title="Hire Dedicated Salesforce Developers with"
              content={content}
              btn="Get a Quote"
              subhead="A Smarter Way to Build Customized Applications."
              enableBtn={true}
              image="https://braininventory.s3.us-east-2.amazonaws.com/images/hire/Braininventory_Hire+Android+Developers.png"
              alt="Hire Salesforce Developers"
              type="hire"
              unique={"brain inventory"}
            />{" "}
            <Customer />
            <Experienced
              title="Salesforce Developer"
              type="hire"
              card={experienceCards}
              image="https://braininventory.s3.us-east-2.amazonaws.com/images/Hire+salesforce+developers/Mask+Group+164.png"
              alt="Salesforce Development Company"
              para1={subhead1}
              para2={subhead2}
              //   para3={subhead3}
            />
            <Advantage
              title="Salesforce Developer"
              advantages={advantages}
              btn="Get a Quote"
            />
            <HireMarquee title="Android" />
            <KeySkill brief={keySkillsBrief} points={keySkillsPoints} />
            <Hire
              title="Why Hire a Salesforce Developer from % Brain Inventory%"
              card={hireCards}
            />{" "}
            <ChooseBrainInventory
              reasons={chooseBI}
              subhead={chooseBiSubhead}
              alt="Hire Salesforce Developers & Programmers"
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
      </Suspense>
    </>
  );
}

export default HireSalesforceDeveloper;
