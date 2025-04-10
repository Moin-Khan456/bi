import Head from "next/head";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import DOMPurify from "isomorphic-dompurify";
import { chooseBI, content, experienceCards, faqDetails, hireCards, jsonLdScript, keySkillsBrief, keySkillsPoints, reasons, subhead1, subhead2, subhead3 } from "../data/hire-dedicated-remote-developer-data/hireLaravelDevelopersData.js";

const Header = dynamic(() => import("../components/header/Header"),{ssr:false});
import HireBanner from "../components/common/HireBanner";
import Link from "next/link.js";
const Customer = dynamic(() => import("../components/common/customer"));
const Experienced = dynamic(() =>
  import("../components/Web-Development/Experienced")
);
const HireMarquee = dynamic(() => import("../components/common/HireMarquee"));
const AdvantageVerticalCards = dynamic(() =>
  import("../components/Hire/AdvantageVerticalCards.jsx")
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
function HireLaravelDeveloper(props) {
 
  const sanitizedJsonLd = DOMPurify.sanitize(JSON.stringify(jsonLdScript));
  return (
    <>
      <Head>
        <title>
          Hire Dedicated Laravel Developers - Hire Laravel Developer India
        </title>
        <meta
          name="description"
          content="Stuck to hire php laravel developers? Look no further! We have the best-certified chatbot developers, ready to help you. Contact us today!"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Hire Dedicated Laravel Developers - Hire Laravel Developer India"
        />
        <meta
          property="og:description"
          content="Stuck to hire php laravel developers? Look no further! We have the best-certified chatbot developers, ready to help you. Contact us today!"
        />
        <meta
          property="og:image"
          content="https://plus.unsplash.com/premium_photo-1681380410006-221742c723bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
        />{" "}
        <meta
          property="og:url"
          content="https://braininventory.in/hire-laravel-developers"
        />
        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/preview/Braininventory_Hire+Chatbot+Developers.jpg"
        />
        <meta
          property="og:url"
          content="https://braininventory.in/hire-laravel-developers"
        />
        <link
          rel="canonical"
          href="https://braininventory.in/hire-laravel-developers"
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
            subhead="A Smarter Way to Build Customized Applications."
            title="Hire Experienced Laravel Developers from"
            content={content}
            unique={"brain inventory"}
            btn="Contact Us!"
            image="https://braininventory.s3.us-east-2.amazonaws.com/images/hire/laravel/Group+6232.png"
            alt="Hire Dedicated Laravel Developers"
          />
          <Customer />
          <Experienced
            title="Laravel Developer"
            image="https://braininventory.s3.us-east-2.amazonaws.com/images/hire/laravel/leio-mclaren-OzeOpF6kTyg-unsplash.png"
            alt="Hire Laravel Developers"
            para1={subhead1}
            para2={subhead2}
            para3={subhead3}
            card={experienceCards}
            changeText={"Hire"}
          />
          <HireMarquee title="Laravel Developer" />
          <AdvantageVerticalCards
            title="Laravel Developers"
            subhead={<> Hiring a <Link href={"https://braininventory.in/web-development/custom-web-development"} className="text-blue-600">custom web developer</Link> skilled with the Laravel platform can be extremely advantageous for your web development projects. Laravel, a robust and flexible <Link href={"https://braininventory.in/web-development/php-development-service-company"} className="text-blue-600">PHP framework</Link>, has become popular because of its straightforward and minimal syntax, wide range of features, and tools focused on boosting developer efficiency. Here are some of the primary benefits of bringing on a Laravel developer.</>}
            reasons={reasons}
          />
          <KeySkill
            brief={keySkillsBrief}
            points={keySkillsPoints}
          />
          <Hire
            title="Why Hire Laravel Developers from Brain Inventory"
            card={hireCards}
          />

          <ChooseBrainInventory
            reasons={chooseBI}
            alt="Hire Dedicated Laravel Developers"
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

export default HireLaravelDeveloper;
