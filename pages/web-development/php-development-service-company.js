import React, { useState, useEffect, Suspense } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("../../components/header/Header.js"));
const LocateUs = dynamic(() => import("../../components/common/locateUs.js"));
const Footer = dynamic(() => import("../../components/common/Footer.js"),{ssr
  :false
});
const Loader = dynamic(() => import("../../components/common/loader.js"));
const Customer = dynamic(() => import("../../components/common/customer.jsx"));
const HireMarquee = dynamic(() =>
  import("../../components/common/HireMarquee.jsx")
);
const FaqHire = dynamic(() => import("../../components/common/Faqhire.jsx"));
const Hire = dynamic(() => import("../../components/common/Hire.jsx"));
import SectionOne from "../../components/common/HireBanner.jsx";
import Link from "next/link.js";
const Hello = dynamic(() => import("../../components/common/FindUs.jsx"));
const KeepInTouch = dynamic(() =>
  import("../../components/common/keepInTouch.js")
);
const LetsKick = dynamic(() => import("../../components/common/LetsKick.js"));
const Advantage = dynamic(() =>
  import("../../components/Web-Development/Advantage.jsx")
);
const Experienced = dynamic(() =>
  import("../../components/Web-Development/Experienced.jsx")
);
const ChooseBraininventory = dynamic(() =>
  import("../../components/common/ChooseBraininventory.jsx")
);
const BlogArticle = dynamic(() =>
  import("../../components/common/BlogArticle.jsx"),{ss
    :false
  }
);
import DOMPurify from "isomorphic-dompurify";
import { chooseBI, content, faqDetails, hireCards, jsonLdScript, reasons, subhead1, subhead2, subhead3 } from "../../data/web-development-data/phpDevelopmentData.js";
const Faqs = dynamic(()=>import("../../components/mobilePages/faqs.js"),{ssr:false}) 

function PhpDevelopment(props) {
 
const sanitizedJsonLd = DOMPurify.sanitize(JSON.stringify(jsonLdScript))
  return (
    <>
      <Head>
        <title>
          PHP Web Development Company USA - PHP Development Services
        </title>
        <meta
          name="description"
          content="Looking for top-level PHP development services? We are here to help you! Contact brain inventory for an experienced PHP web developer, for quality services."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="PHP Web Development Company USA - PHP Development Services"
        />
        <meta
          property="og:description"
          content="Looking for top-level PHP development services? We are here to help you! Contact brain inventory for an experienced PHP web developer, for quality services."
        />
        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/preview/Braininventory_php-development.jpg"
        />{" "}
        <meta
          property="og:url"
          content="https://braininventory.in/web-development/php-development-service-company"
        />
        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/preview/Braininventory_Hire+Chatbot+Developers.jpg"
        />
        <link
          rel="canonical"
          href="https://braininventory.in/web-development/php-development-service-company"
        />
        <link
          rel="preload"
          fetchpriority="high"
          href="https://braininventory.s3.us-east-2.amazonaws.com/images/Braininventory_PHP+development+1.png"
          as="image"
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
        <main>
          <Header />
          <SectionOne
            heading="A Smarter Way to Build Customized Applications."
            title="PHP Web Development Service Company from"
            content={content}
            btn="Contact Us!"
            // developmentImage="https://braininventory.s3.us-east-2.amazonaws.com/images/Braininventory_PHP+development.png"
            image="https://braininventory.s3.us-east-2.amazonaws.com/images/Braininventory_PHP+development+1.png"
            alt="Custom PHP development"
            type="php"
            unique="brain inventory"
          />
          <Customer />
          <Experienced
            title="PHP Development"
            type="why"
            alt={"PHP Development Services"}
            image="https://braininventory.s3.us-east-2.amazonaws.com/images/Braininventory_PHP+development+2.png"
            para1={subhead1}
            para2={subhead2}
            para3={subhead3}
          />
          <HireMarquee title="PHP development" />
          <Advantage title="PHP Development" reasons={reasons} />{" "}
          <Hire
            title="Why PHP Development Integration from %Brain Inventory"
            card={hireCards}
          />
          <ChooseBraininventory
            reasons={chooseBI}
            alt="Custom PHP development"
          />
          <Faqs faq={faqDetails} />
          <hr />
          <BlogArticle />
          <KeepInTouch />
          <LocateUs />
          <LetsKick />
          <Footer />
        </main>
      </Suspense>
    </>
  );
}

export default PhpDevelopment;
