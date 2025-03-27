import React, { Suspense } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import DOMPurify from "isomorphic-dompurify";
import { advantages, card, chooseBI, chooseBiSubhead, content, experienceCards, faqDetails, hireCards, jsonLdScript, keySkillsBrief, keySkillsPoints, subhead1, subhead2 } from "../data/hire-dedicated-remote-developer-data/hireAngularData.js";

const Header = dynamic(() => import("../components/header/Header.js"),{ssr:false});
const HireBanner = dynamic(() => import("../components/common/HireBanner.jsx"));
const Customer = dynamic(() => import("../components/common/customer.jsx"));
const Experienced = dynamic(() => import("../components/common/Hire.jsx"));
const Advantage = dynamic(() => import("../components/Hire/Advantage.jsx"));
const HireMarquee = dynamic(() => import("../components/common/HireMarquee"));
const KeySkill = dynamic(() => import("../components/Hire/KeySkills.jsx"));
const Hire = dynamic(() => import("../components/common/Hire.jsx"));
const ChooseBrainInventory = dynamic(() =>
  import("../components/common/CommonChooseBrainInventory.jsx")
);
const Engaged = dynamic(() => import("../components/Hire/Engaged.jsx"));
const HireSteps = dynamic(() => import("../components/Hire/HireSteps.jsx"));
const Clients = dynamic(() => import("../components/Hire/Clients.jsx"));
const Faq = dynamic(() => import("../components/mobilePages/faqs.js"),{ssr:false});
const BlogArticle = dynamic(() =>
  import("../components/common/BlogArticle.jsx"),{ssr:false}
);
const KeepInTouch = dynamic(() =>
  import("../components/common/keepInTouch.js")
);
import LocateUs from "../components/common/locateUs.js";
const LetsKick = dynamic(() => import("../components/common/LetsKick.js"));
const Footer = dynamic(() => import("../components/common/Footer.js"),{ssr:false});

function HireAngularJsDeveloper() {
  const sanitizedJsonLd = DOMPurify.sanitize(JSON.stringify(jsonLdScript));
  return (
    <>
      <Head>
        <title>
          Hire Dedicated Angular JS Developers - Angular JS Programmer
        </title>
        <meta
          name="description"
          content="Are you looking to hire an expert AngularJS developer? Look no further! We have the best certified Angular developers, ready to help you. Contact us today!"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://braininventory.in/hire-angularjs-developers"
        />
        <meta
          property="og:title"
          content="Hire Dedicated Angular JS Developers - Angular JS Programmer"
        />
        <meta
          property="og:description"
          content="Are you looking to hire an expert AngularJS developer? Look no further! We have the best certified Angular developers, ready to help you. Contact us today!"
        />
        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/preview/Braininventory_Hire+Angular+JS+Developers.jpg"
        />
        <link
          rel="canonical"
          href="https://braininventory.in/hire-angularjs-developers"
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
            <Header />
            <HireBanner
              heading="Get the Best"
              title="Hire Angular JS Developers with"
              subtitle="on Demand"
              content={content}
              card={card}
              unique={"brain inventory"}
              type="hire"
              alt="Hire AngularJS Developers"
            />
            <Customer />
            <Experienced
              title="Hire Experienced Angular JS Developers to Upscale Your Development"
              subhead1={subhead1}
              subhead2={subhead2}
              card={experienceCards}
            />
            <Advantage title="Angular JS Developers" advantages={advantages} />
            <HireMarquee title="Angular.JS" />
            <KeySkill brief={keySkillsBrief} points={keySkillsPoints} />
            <Hire
              title="Why Hire Angular JS Developers from %Brain Inventory"
              card={hireCards}
            />
            <ChooseBrainInventory
              reasons={chooseBI}
              subhead={chooseBiSubhead}
              alt="Hire AngularJS Developers"
            />
            <Engaged />
            <HireSteps type="AngularJS" />
            <section className="mb-[9rem]">
            <Clients tech="AngularJS" />
            </section>
            <Faq faq={faqDetails} />
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
export default HireAngularJsDeveloper;
