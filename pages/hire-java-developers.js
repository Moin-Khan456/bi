import Head from "next/head";
import { Suspense } from "react";
import dynamic from 'next/dynamic';
import DOMPurify from "isomorphic-dompurify";
import { advantages, chooseBiSubhead, content, experienceCards, faqDetails, hireCards, jsonLdScript, keySkillsBrief, keySkillsPoints, subhead1, subhead2 } from "../data/hire-dedicated-remote-developer-data/hireJavaDeveloperData.js";

const Header = dynamic(() => import("../components/header/Header.js"),{ssr:false});
const HireBanner = dynamic(() => import("../components/common/HireBanner.jsx"));
const Customer = dynamic(() => import("../components/common/customer.jsx"));
const Experienced = dynamic(() => import("../components/Web-Development/Experienced.jsx"));
const Advantage = dynamic(() => import("../components/Hire/Advantage.jsx"));
const HireMarquee = dynamic(() => import("../components/common/HireMarquee.jsx"));
const KeySkill = dynamic(() => import("../components/Hire/KeySkills.jsx"));
const Hire = dynamic(() => import("../components/common/Hire.jsx"));
const ChooseBrainInventory = dynamic(() => import("../components/common/CommonChooseBrainInventory.jsx"));
const Faqs = dynamic(() => import("../components/mobilePages/faqs.js"),{ssr:false});
const BlogArticle = dynamic(() => import("../components/common/BlogArticle.jsx"),{ssr:false});
const KeepInTouch = dynamic(() => import("../components/common/keepInTouch.js"));
const LocateUs = dynamic(() => import("../components/common/locateUs.js"));
const LetsKick = dynamic(() => import("../components/common/LetsKick.js"));
const Footer = dynamic(() => import("../components/common/Footer.js"),{ssr:false});

function HireJavaDeveloper(props) {
  
  const sanitizedJsonLd = DOMPurify.sanitize(JSON.stringify(jsonLdScript));
  const chooseBI = [];

  return (
    <>
      <Head>
        <title>Hire Experienced Java Developers - Java Developers USA</title>
        <meta
          name="description"
          content="Hire dedicated Java developers from Brain Inventory for your remote development solutions. Contact us today to hire our dedicated Java experts."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Hire Experienced Java Developers - Java Developers USA"
        />
        <meta
          property="og:description"
          content="Hire dedicated Java developers from Brain Inventory for your remote development solutions. Contact us today to hire our dedicated Java experts."
        />
        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/preview/Braininventory_java.png"
        />
        <meta
          property="og:url"
          content="https://braininventory.in/hire-java-developers"
        />
        <link
          rel="canonical"
          href="https://braininventory.in/hire-java-developers"
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
              title="Hire Dedicated Remote Java Developers with"
              content={content}
              btn="Get a Quote"
              subhead="A Smarter Way to Build Customized Applications."
              enableBtn={false}
              image="https://braininventory.s3.us-east-2.amazonaws.com/images/hire/Braininventory_Hire+Android+Developers.png"
              alt="Hire Java Developers"
              type="hire"
              unique={"brain inventory"}
            />{" "}
            <Customer />
            <Experienced
              title="Java Developer"
              type="hire"
              card={experienceCards}
              image="https://braininventory.s3.us-east-2.amazonaws.com/images/Hire+salesforce+developers/Mask+Group+164.png"
              alt="TypeScript Development Company"
              para1={subhead1}
              para2={subhead2}
            />
            <Advantage
              title="Java Developer"
              advantages={advantages}
              btn="Get a Quote"
            />
            <HireMarquee title="Android" />
            <KeySkill
              brief={keySkillsBrief}
              gridCol={3}
              points={keySkillsPoints}
            />
            <Hire
              title="Why Hire a Java Developer from %Brain Inventory"
              card={hireCards}
            />{" "}
            <ChooseBrainInventory
              reasons={chooseBI}
              subhead={chooseBiSubhead}
              alt="Hire Android App Developers & Programmers"
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

export default HireJavaDeveloper;
