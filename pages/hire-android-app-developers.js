import Head from "next/head";
import { Suspense } from "react";
import dynamic from 'next/dynamic';
import DOMPurify from "isomorphic-dompurify";
import { advantages, chooseBI, chooseBiSubhead, content, experienceCards, faqDetails, hireCards, jsonLdScript, keySkillsBrief, keySkillsPoints, subhead1, subhead2 } from "../data/hire-dedicated-remote-developer-data/hireAndroidDeveloperData.js";

const Header = dynamic(() => import("../components/header/Header.js"),{ssr:false});
const HireBanner = dynamic(() => import("../components/common/HireBanner.jsx"));
const Customer = dynamic(() => import("../components/common/customer.jsx"));
const Experienced = dynamic(() => import("../components/common/Hire.jsx"));
const Advantage = dynamic(() => import("../components/Hire/Advantage.jsx"));
const HireMarquee = dynamic(() => import("../components/common/HireMarquee.jsx"));
const KeySkill = dynamic(() => import("../components/Hire/KeySkills.jsx"));
const Hire = dynamic(() => import("../components/common/Hire.jsx"));
const ChooseBrainInventory = dynamic(() => import("../components/common/CommonChooseBrainInventory.jsx"));
const Engaged = dynamic(() => import("../components/Hire/Engaged.jsx"));
const HireSteps = dynamic(() => import("../components/Hire/HireSteps.jsx"));
const Clients = dynamic(() => import("../components/Hire/Clients.jsx"));
const Faqs = dynamic(() => import("../components/mobilePages/faqs.js"),{ssr:false});
const BlogArticle = dynamic(() => import("../components/common/BlogArticle.jsx"),{ssr:false});
const KeepInTouch = dynamic(() => import("../components/common/keepInTouch.js"));
const LocateUs = dynamic(() => import("../components/common/locateUs.js"));
const LetsKick = dynamic(() => import("../components/common/LetsKick.js"));
const Footer = dynamic(() => import("../components/common/Footer.js"),{ssr:false});

function HireAndroidAppDeveloper(props) {

  const sanitizedJsonLd = DOMPurify.sanitize(JSON.stringify(jsonLdScript));
  return (
    <>
      <Head>
        <title>
          Hire Experienced Android Developers - Hire Android App Developers
        </title>
        <meta
          name="description"
          content="Looking to hire a dedicated Android app developer? We are here to offer you the best solutions for Android app development applications. Contact us today!"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Hire Experienced Android Developers - Hire Android App Developers"
        />
        <meta
          property="og:description"
          content="Looking to hire a dedicated Android app developer? We are here to offer you the best solutions for Android app development applications. Contact us today!"
        />
        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/preview/Braininventory_Hire+Android+Developers.jpg"
        />
        <meta
          property="og:url"
          content="https://braininventory.in/hire-android-app-developers"
        />
        <link
          rel="canonical"
          href="https://braininventory.in/hire-android-app-developers"
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
              heading="Transform your ideas into stunning Android apps with our expert Android app development services!"
              title="Hire Dedicated Android App Developers with"
              content={content}
              btn="Contact Us!"
              image="https://braininventory.s3.us-east-2.amazonaws.com/images/hire/Braininventory_Hire+Android+Developers.png"
              alt="Hire Android App Developers & Programmers"
              type="hire"
              unique={"brain inventory"}
            />{" "}
            <Customer />
            <Experienced
              title="Hire Experienced Android Developers to Upscale Your Development"
              subhead1={subhead1}
              subhead2={subhead2}
              card={experienceCards}
            />
            <Advantage title="Android Developers" advantages={advantages} />
            <HireMarquee title="Android" />
            <KeySkill brief={keySkillsBrief} points={keySkillsPoints} />
            <Hire
              title="Why Hire Android Developers from %Brain Inventory"
              card={hireCards}
            />{" "}
            <ChooseBrainInventory
              reasons={chooseBI}
              subhead={chooseBiSubhead}
              alt="Hire Android App Developers & Programmers"
            />
            <Engaged />
            <HireSteps type="Android" />
            <Clients tech="Android" />
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

export default HireAndroidAppDeveloper;
