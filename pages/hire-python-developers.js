import Head from "next/head";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import DOMPurify from "isomorphic-dompurify";
import { advantages, chooseBI, content, faqDetails, hireCards, jsonLdScript, keySkillsBrief, keySkillsPoints, ourDevelopersPromo, subhead1, subhead2 } from "../data/hire-dedicated-remote-developer-data/hirePythonDeveloperData.js";

const Header = dynamic(() => import("../components/header/Header"),{ssr:false});
const HireBanner = dynamic(() => import("../components/common/HireBanner"));
const Customer = dynamic(() => import("../components/common/customer"));
const Experienced = dynamic(() =>
  import("../components/Web-Development/Experienced")
);
const Advantage = dynamic(() =>
  import("../components/Hire/AdvantageCards.jsx")
);
const HireMarquee = dynamic(() => import("../components/common/HireMarquee"));
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

function HirePythonDeveloper(props) {
 
  const sanitizedJsonLd = DOMPurify.sanitize(JSON.stringify(jsonLdScript));
  return (
    <>
      <Head>
        <title>
          Hire Experienced Python Developer - Hire Python Programmers
        </title>
        <meta
          name="description"
          content="Hire remote Python developers from Brain Inventory India. Our certified experts deliver web apps on time. Contact us with our experienced Python developers."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Hire Experienced Python Developer - Hire Python Programmers"
        />
        <meta
          property="og:description"
          content="Hire remote Python developers from Brain Inventory India. Our certified experts deliver web apps on time. Contact us with our experienced Python developers."
        />
        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/preview/Braininventory_Hire+Python+Developers.jpg"
        />

        <meta
          property="og:url"
          content="https://braininventory.in/hire-python-developers"
        />

        <link
          rel="canonical"
          href="https://braininventory.in/hire-python-developers"
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
            <Header></Header>
            <HireBanner
              heading="A Smarter Way to Build Customized Applications."
              title="Dedicated Python Developers Hire with"
              content={content}
              unique={"brain inventory"}
              btn="Contact Us!"
              image="https://braininventory.s3.us-east-2.amazonaws.com/images/Hire/niclas-illg-FJ5e_2f96h4-unsplash.png"
              alt="Dedicated Python Programmers"
              type="hire"
            />
            <Customer />
            <Experienced
              title="Python Developer"
              para1={subhead1}
              para2={subhead2}
              card={ourDevelopersPromo}
              image="https://braininventory.s3.us-east-2.amazonaws.com/images/hire/leio-mclaren-OzeOpF6kTyg-unsplash.png"
              alt="Hire Python Developers"
            />
            <Advantage
              title="Python Developer"
              subhead="Hiring a Python developer can provide numerous advantages for your organization, making it a valuable investment for your development projects and technical initiatives."
              benefitsList={advantages}
            />
            <HireMarquee title="Python" />
            <KeySkill brief={keySkillsBrief} points={keySkillsPoints} />
            <Hire
              title="Why hire Python developers from %Brain Inventory"
              card={hireCards}
            />
            <ChooseBrainInventory
              reasons={chooseBI}
              alt="Dedicated Python Programmers"
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

export default HirePythonDeveloper;
