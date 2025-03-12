import Head from "next/head";
import Link from "next/link.js";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import DOMPurify from "isomorphic-dompurify";
import { benefitsList, chooseBI, content, experienceCards, faqDetails, hireCards, jsonLdScript, keySkillsBrief, keySkillsPoints, subhead1, subhead2 } from "../data/hire-dedicated-remote-developer-data/hirePhpDeveloperData.js";

const Header = dynamic(() => import("../components/header/Header"),{ssr:false});
import HireBanner from "../components/common/HireBanner";
const Customer = dynamic(() => import("../components/common/customer"));
const Experienced = dynamic(() =>
  import("../components/Web-Development/Experienced")
);
const Advantage = dynamic(() =>
  import("../components/Hire/AdvantageVerticalCards.jsx")
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
function HirePhpDeveloper(props) {
  
  const sanitizedJsonLd = DOMPurify.sanitize(JSON.stringify(jsonLdScript));
  return (
    <>
      <Head>
        <title>Hire Dedicated PHP Developers - Hire Indian PHP Developer</title>
        <meta
          name="description"
          content="Looking to hire dedicated PHP developers? We have an experienced PHP developers team to give you the best solutions. Contact to hire php experts today!"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Hire Dedicated PHP Developers - Hire Indian PHP Developer"
        />
        <meta
          property="og:description"
          content="Looking to hire dedicated PHP developers? We have an experienced PHP developers team to give you the best solutions. Contact to hire php experts today!"
        />

        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/preview/Braininventory_Hire+PHP+Developers.jpg"
        />
        <meta
          property="og:url"
          content="https://braininventory.in/hire-php-developers"
        />

        <link
          rel="canonical"
          href="https://braininventory.in/hire-php-developers"
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
          <Header></Header>
          <HireBanner
            heading="A Smarter Way to Build Customized Applications."
            title="Hire a Dedicated PHP Developer with"
            content={content}
            btn="Contact Us!"
            unique={"brain inventory"}
            image="https://braininventory.s3.us-east-2.amazonaws.com/images/Brainventory_PHP+developers+1.png"
            alt="Hire Dedicated PHP Developer"
          />
          <Customer />
          <Experienced
            title="PHP Developer"
            image="https://braininventory.s3.us-east-2.amazonaws.com/images/Brainventory_PHP+developers+2.png"
            alt="Hire PHP Developers"
            para1={subhead1}
            para2={subhead2}
            changeText={"Hire a Dedicated"}
            card={experienceCards}
          />
          <HireMarquee title="PHP Developers" />
          <Advantage
            title="PHP Developer"
            subhead="Hiring a PHP developer can provide numerous advantages for your web development projects:"
            reasons={benefitsList}
          />
          <KeySkill brief={keySkillsBrief} points={keySkillsPoints} />
          <Hire
            title="Why Hire PHP Developers from %Brain Inventory"
            subhead={
              <>
                As one of the most renowned{" "}
                <Link
                  href="/mobile-development/hybrid-app-development"
                  className="text-[#2186ff]"
                >
                  Hybrid App Development Company
                </Link>
                , Brain Inventory is celebrated for meeting modern business
                demands and providing top-notch solutions at an affordable price
                worldwide. If you’re in search of a mobile app developer, here’s
                why we should be your first pick:
              </>
            }
            card={hireCards}
          />

          <ChooseBrainInventory
            reasons={chooseBI}
            alt="Hire Dedicated PHP Developer"
          />
          <Faqs faq={faqDetails} />
          <hr />
          <BlogArticle />
          <KeepInTouch />
          <LocateUs />
          <LetsKick />
          <Footer />
        </div>
      </Suspense>
    </>
  );
}

export default HirePhpDeveloper;
