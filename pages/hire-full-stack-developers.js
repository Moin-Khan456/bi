import React, { Suspense } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import DOMPurify from "isomorphic-dompurify";
import {
  benefitsList,
  chooseBI,
  content,
  experienceCards,
  faqDetails,
  hireCards,
  jsonLdScript,
  keySkillsBrief,
  keySkillsPoints,
  subhead1,
  subhead2,
} from "../data/hire-dedicated-remote-developer-data/hireFullStackDeveloper.js";

const Header = dynamic(() => import("../components/header/Header"),{ssr:false});
import HireBanner from "../components/common/HireBanner";
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
  import("../components/common/CommonChooseBraininventory.jsx")
);
const Faqs = dynamic(() => import("../components/mobilePages/faqs.js"),{ssr:false});
const BlogArticle = dynamic(() => import("../components/common/BlogArticle"),{ssr:false});
const KeepInTouch = dynamic(() => import("../components/common/keepInTouch"));
const LocateUs = dynamic(() => import("../components/common/locateUs"));
const LetsKick = dynamic(() => import("../components/common/LetsKick"));
const Footer = dynamic(() => import("../components/common/Footer"),{ssr:false});


function HireFullStackDeveloper(props) {
  const sanitizedJsonLd = DOMPurify.sanitize(JSON.stringify(jsonLdScript));
  return (
    <>
      <Head>
        <title>
          Hire Certified Full Stack Developer - Hire Full Stack Programmer
        </title>
        <meta
          name="description"
          content="Are you looking to hire a full-stack developer? Look no further! We have the best dedicated full-stack developers, ready to work with you. Contact us today!"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Hire Certified Full Stack Developer - Hire Full Stack Programmer"
        />
        <meta
          property="og:description"
          content="Are you looking to hire a full-stack developer? Look no further! We have the best dedicated full-stack developers, ready to work with you. Contact us today!"
        />

        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/preview/Braininventory_Hire+Full+Stack+Developers.jpg"
        />
        <meta
          property="og:url"
          content="https://braininventory.in/hire-full-stack-developers"
        />
        <link
          rel="canonical"
          href="https://braininventory.in/hire-full-stack-developers"
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
              title="Dedicated Full Stack Developer Hire with"
              content={content}
              btn="Contact Us!"
              unique={"brain inventory"}
              image="https://braininventory.s3.us-east-2.amazonaws.com/images/niclas-illg-FJ5e_2f96h4-unsplash.png"
              alt="Hire Full stack developers and programmers"
            />
            <Customer />
            <Experienced
              title="Full Stack Developers"
              para1={subhead1}
              para2={subhead2}
              card={experienceCards}
              image="https://braininventory.s3.us-east-2.amazonaws.com/images/leio-mclaren-OzeOpF6kTyg-unsplash.png"
              alt="Hire Full Stack Developers"
            />
            <HireMarquee title="Full Stack" />
            <Advantage
              title="Full Stack Developer"
              subhead="Hiring a Full Stack Developer offers numerous advantages that can greatly benefit your development projects and overall business objectives. Here are some key advantages of bringing a Full Stack Developer into your team:"
              benefitsList={benefitsList}
            />
            <KeySkill brief={keySkillsBrief} points={keySkillsPoints} />
            <Hire
              title="Why Hire Full Stack Developers from %Brain Inventory"
              card={hireCards}
            />

            <ChooseBrainInventory
              reasons={chooseBI}
              alt="Hire Full stack developers and programmers"
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
export default HireFullStackDeveloper;
