import Head from "next/head";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import DOMPurify from "isomorphic-dompurify";
import { chooseBI, content, experienceCards, faqDetails, hireCards, jsonLdScript, keySkillsBrief, keySkillsPoints, subhead1, subhead2, subhead3 } from "../data/hire-dedicated-remote-developer-data/hireShopifyDeveloperData.js";

const Header = dynamic(() => import("../components/header/Header"),{ssr:false});
const HireBanner = dynamic(() => import("../components/common/HireBanner"));
const Customer = dynamic(() => import("../components/common/customer"));
const Experienced = dynamic(() => import("../components/common/Hire"));
const HireMarquee = dynamic(() => import("../components/common/HireMarquee"));
const AdvantageVerticalCards = dynamic(() =>
  import("../components/Hire/AdvantageVerticalCards.jsx")
);
const KeySkill = dynamic(() => import("../components/Hire/KeySkills.jsx"));
const Hire = dynamic(() => import("../components/common/Hire"));
const ChooseBrainInventory = dynamic(() => import("../components/common/CommonChooseBraininventory.jsx"));
const Faqs = dynamic(() => import("../components/mobilePages/faqs.js"),{ssr:false});
const BlogArticle = dynamic(() => import("../components/common/BlogArticle"),{ssr:false});
const KeepInTouch = dynamic(() => import("../components/common/keepInTouch"));
const LocateUs = dynamic(() => import("../components/common/locateUs"));
const LetsKick = dynamic(() => import("../components/common/LetsKick"));
const Footer = dynamic(() => import("../components/common/Footer"),{ssr:false});

function HireShopifyDeveloper(props) {
 
  const sanitizedJsonLd = DOMPurify.sanitize(JSON.stringify(jsonLdScript));
  return (
    <>
      <Head>
        <title>Dedicated Shopify Developers Hire - Shopify Developers</title>
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Dedicated Shopify Developers Hire - Shopify Developers"
        />
        <meta
          name="description"
          content="Hire top-rated Shopify developers. Our experienced Shopify developers are committed to providing innovative solutions for your apps. Contact today!"
        />
        <meta
          property="og:description"
          content="Hire top-rated Shopify developers. Our experienced Shopify developers are committed to providing innovative solutions for your apps. Contact today!"
        />
        <meta
          property="og:image"
          content="https://plus.unsplash.com/premium_photo-1681380410006-221742c723bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
        />{" "}
        <meta
          property="og:url"
          content="https://braininventory.in/hire-shopify-developers"
        />
        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/preview/Braininventory_Hire+Chatbot+Developers.jpg"
        />
        <meta
          property="og:url"
          content="https://braininventory.in/hire-shopify-developers"
        />
        <link
          rel="canonical"
          href="https://braininventory.in/hire-shopify-developers"
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
            title="Hire Experienced Shopify Developers with"
            content={content}
            unique={"brain inventory"}
            btn="Contact Us!"
            image="https://braininventory.s3.us-east-2.amazonaws.com/images/hire/shopify/Mask+Group+159.png"
            alt="Hire Dedicated Laravel Developers"
          />
          <Customer />
          <Experienced
            title="Shopify Developer"
            image="https://braininventory.s3.us-east-2.amazonaws.com/images/hire/shopify/Mask+Group+160.png"
            alt="Hire Shopify Developers"
            para1={subhead1}
            para2={subhead2}
            para3={subhead3}
            card={experienceCards}
          />
          <HireMarquee title="Shopify Developer" />
          <AdvantageVerticalCards
            title="Shopify Developer"
            subhead="Employing a Shopify expert brings many benefits for companies aiming to create or improve their digital footprint. A major upside is the specialized knowledge these developers have. Shopify programmers are highly familiar with the platform's complexities, guaranteeing an in-depth grasp of its functionalities and capacities. This know-how leads to effective customization and enhancement of online shops, designed to satisfy the distinct requirements of the enterprise.
Expert Shopify developers are crucial for ensuring the smooth performance of an e-commerce website. They can combine various add-ons, applications, and external services, which improves the overall user experience and expands the capabilities of the online shop. This boosts the site's effectiveness and enables businesses to remain competitive in the fast-changing e-commerce environment.
Another benefit is the time and money savings that come with recruiting a Shopify developer. Their specialized expertise expedites the development process, decreasing the time required to launch a completely functional online store.
"
            subhead1={"Dedicated"}
          />
          <KeySkill
            brief={keySkillsBrief}
            points={keySkillsPoints}
          />
          <Hire
            title="Why Hire Shopify Developers from %Brain inventory"
            card={hireCards}
          />

          <ChooseBrainInventory
            reasons={chooseBI}
            alt="Hire Dedicated Shopify Developers"
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

export default HireShopifyDeveloper;
