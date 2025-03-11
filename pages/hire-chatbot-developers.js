import Head from "next/head";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import DOMPurify from "isomorphic-dompurify";
import { chooseBI, content, experienceCards, faqDetails, hireCards, jsonLdScript, keySkillsBrief, keySkillsPoints, reasons, subhead1, subhead2, subhead3 } from "../data/hire-dedicated-remote-developer-data/hireChatbotDeveloperData.js";

const Header = dynamic(() => import("../components/header/Header"),{ssr:false});
const HireBanner = dynamic(() => import("../components/common/HireBanner"));
const Customer = dynamic(() => import("../components/common/customer"));
const Experienced = dynamic(() =>
  import("../components/Web-Development/Experienced")
);
const HireMarquee = dynamic(() => import("../components/common/HireMarquee"));
const Advantage = dynamic(() =>
  import("../components/Hire/AdvantageCards.jsx")
);
const KeySkill = dynamic(() => import("../components/Hire/KeySkillsCards.jsx"));
const Hire = dynamic(() => import("../components/common/Hire"));
const ChooseBrainInventory = dynamic(() =>
  import("../components/common/CommonChooseBrainInventory")
);
const Faqs = dynamic(() => import("../components/mobilePages/faqs.js"),{ssr:false});
const BlogArticle = dynamic(() => import("../components/common/BlogArticle"),{ssr:false});
const KeepInTouch = dynamic(() => import("../components/common/keepInTouch"));
const LocateUs = dynamic(() => import("../components/common/locateUs"));
const LetsKick = dynamic(() => import("../components/common/LetsKick"));
const Footer = dynamic(() => import("../components/common/Footer"),{ssr:false});
function HireChatbotDeveloper(props) {
  const sanitizedJsonLd = DOMPurify.sanitize(JSON.stringify(jsonLdScript));
  return (
    <>
      <Head>
        <title>Dedicated Chatbot Developer Hire - Chatbot Programmers</title>
        <meta
          name="description"
          content="Are you looking to hire expert chatbot developers? Look no further! We have the best-certified chatbot developers, ready to help you. Contact us today!"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Dedicated Chatbot Developer Hire - Chatbot Programmers"
        />
        <meta
          property="og:description"
          content="Are you looking to hire expert chatbot developers? Look no further! We have the best-certified chatbot developers, ready to help you. Contact us today!"
        />
        <meta
          property="og:image"
          content="https://plus.unsplash.com/premium_photo-1681380410006-221742c723bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
        />{" "}
        <meta
          property="og:url"
          content=" 
https://braininventory.in/hire-chatbot-developers"
        />
        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/preview/Braininventory_Hire+Chatbot+Developers.jpg"
        />
        <meta
          property="og:url"
          content="https://braininventory.in/hire-chatbot-developers"
        />
        <link
          rel="canonical"
          href="https://braininventory.in/hire-chatbot-developers"
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
              heading="A Smarter Way to Build Customized Applications."
              title="Hire Experienced Chatbot Developer with"
              content={content}
              btn="Contact Us!"
              unique={"brain inventory"}
              image="https://braininventory.s3.us-east-2.amazonaws.com/images/Braininventory_hire+chatbot+developers+1.png"
              alt="Hire Dedicated Chatbot Developers"
            />
            <Customer />
            <Experienced
              title="Chatbot Developer"
              image="https://braininventory.s3.us-east-2.amazonaws.com/images/Braininventory_hire+chatbot+developers+2.png"
              alt="Hire Chatbot Developers"
              para1={subhead1}
              para2={subhead2}
              para3={subhead3}
              card={experienceCards}
            />
            <HireMarquee title="Chatbot Developers" />
            <Advantage title="Chatbot Developer" benefitsList={reasons} />
            <KeySkill brief={keySkillsBrief} points={keySkillsPoints} />
            <Hire
              title="Why Hire Chatbot Developers from %Brain Inventory"
              card={hireCards}
            />

            <ChooseBrainInventory
              reasons={chooseBI}
              alt="Hire Dedicated Chatbot Developers"
            />
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

export default HireChatbotDeveloper;
