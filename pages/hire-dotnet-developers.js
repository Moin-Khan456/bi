import React, { Suspense } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
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
  subhead3,
} from "../data/hire-dedicated-remote-developer-data/hireDotnetDeveloperData.js";

const Header = dynamic(() => import("../components/header/Header"), {
  ssr: false,
});
import HireBanner from "../components/common/HireBanner";
const Customer = dynamic(() => import("../components/common/customer"));
const Experienced = dynamic(() =>
  import("../components/Web-Development/Experienced")
);
const HireMarquee = dynamic(() => import("../components/common/HireMarquee"));
const Advantage = dynamic(() =>
  import("../components/Hire/AdvantageBreif.jsx")
);
const KeySkill = dynamic(() => import("../components/Hire/KeySkillsCards.jsx"));
const Hire = dynamic(() => import("../components/common/Hire"));
const ChooseBrainInventory = dynamic(() => import("../components/common/CommonChooseBraininventory.jsx"));

const Faqs = dynamic(() => import("../components/mobilePages/faqs.js"), {
  ssr: false,
});
const BlogArticle = dynamic(() => import("../components/common/BlogArticle"), {
  ssr: false,
});
const KeepInTouch = dynamic(() => import("../components/common/keepInTouch"));
const LocateUs = dynamic(() => import("../components/common/locateUs"));
const LetsKick = dynamic(() => import("../components/common/LetsKick"));
const Footer = dynamic(() => import("../components/common/Footer"), {
  ssr: false,
});



function HireDotnetDeveloper(props) {
  const sanitizedJsonLd = DOMPurify.sanitize(JSON.stringify(jsonLdScript));
  return (
    <>
      <Head>
        <title>Hire Experienced Dot NET Developers | Brain Inventory</title>
        <meta
          name="description"
          content="Looking to hire a dedicated dot net developer? We are here to help you! Hire a talented .net developers team to give you the best solutions. Contact us."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Hire Experienced Dot NET Developers | Brain Inventory"
        />
        <meta
          property="og:description"
          content="Looking to hire a dedicated dot net developer? We are here to help you! Hire a talented .net developers team to give you the best solutions. Contact us."
        />
        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/preview/Braininventory_Hire+React+Native+Developers.jpg"
        />

        <meta
          property="og:url"
          content="https://braininventory.in/hire-dotnet-developers"
        />

        <link
          rel="canonical"
          href="https://braininventory.in/hire-dotnet-developers"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: sanitizedJsonLd }}
        />
      </Head>
      <Suspense fallback={null}>
        <div className="relative">
          <>
            <Header></Header>
            <HireBanner
              subhead="Upgrade Your Development Process With Our Expertise"
              title="Hire Dedicated Dot Net Developers from"
              content={content}
              unique={"brain inventory"}
              btn="Contact Us!"
              image="https://braininventory.s3.us-east-2.amazonaws.com/images/hire/dotnet/1.png"
              alt="Ionic development company"
              type="hire"
            />
            <Customer />
            <Experienced
              image="https://braininventory.s3.us-east-2.amazonaws.com/images/hire/dotnet/2.png"
              title=".NET Developers"
              para1={subhead1}
              para2={subhead2}
              para3={subhead3}
              card={experienceCards}
              changeText={"Hire Experienced"}
            />
            <HireMarquee title=".NET" />
            <Advantage title=".NET Developers" advantages={advantages} />
            <KeySkill brief={keySkillsBrief} points={keySkillsPoints} />
            <Hire
              title="Why Hire .NET Developers from %Brain Inventory"
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
      </Suspense>
    </>
  );
}

export default HireDotnetDeveloper;
