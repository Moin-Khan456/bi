import Head from "next/head";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import DOMPurify from "isomorphic-dompurify";
import { benefitsList, chooseBI, content, faqDetails, hireCards, jsonLdScript, meanReasons } from "../../data/web-development-data/mernStackData.js";

const Header = dynamic(() => import("../../components/header/Header"),{ssr:false});
import SectionOne from "../../components/Web-Development/PageIntro.jsx";
const WhyMean = dynamic(() =>
  import("../../components/Web-Development/WhyMean.jsx")
);
const Benefits = dynamic(() =>
  import("../../components/Web-Development/benefits.jsx")
);
const Hire = dynamic(() => import("../../components/common/Hire"));
const ChooseBrainInventory = dynamic(() =>
  import("../../components/common/ChooseBraininventory.jsx")
);
const Industries = dynamic(() =>
  import("../../components/Web-Development/industries.jsx"),{ssr:false}
);
const Faqs = dynamic(() =>
  import("../../components/mobilePages/faqs.js"),{ssr:false}
);
const BlogArticle = dynamic(() =>
  import("../../components/common/BlogArticle.jsx"),{ssr:false}
);
const KeepInTouch = dynamic(() => import("../../components/common/keepInTouch.js"));
const LocateUs = dynamic(() => import("../../components/common/locateUs"));
const Footer = dynamic(() => import("../../components/common/Footer"),{ssr:false});
function MernStackDevelopment(props) {
 
  const sanitizedJsonLd = DOMPurify.sanitize(JSON.stringify(jsonLdScript))
  return (
    <>
      <Head>
        <title>
          MERN Stack Development Service Company USA | Brain Inventory
        </title>
        <meta
          name="description"
          content="Brain Inventory gives you the best solutions for MERN stack development services. Elevate your brand with a custom MERN stack web development company."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="MERN Stack Development Service Company USA | Brain Inventory"
        />
        <meta
          property="og:description"
          content="Brain Inventory gives you the best solutions for MERN stack development services. Elevate your brand with a custom MERN stack web development company."
        />
        <meta
          property="og:url"
          content="https://braininventory.in/web-development/mern-stack-development-company/"
        />
        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/Technology/Group+6420+(1).png"
        />
        <link
          rel="canonical"
          href="https://braininventory.in/web-development/mern-stack-development-company"
        />
        <link
          rel="preload"
          fetchpriority="high"
          href="https://braininventory.s3.us-east-2.amazonaws.com/images/Technology/Group+6420+(1).png"
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
        <div className="">
          <Header />
          <div className="pt-32">
            <SectionOne
              heading="MERN Stack"
              title="Top MERN Stack"
              miniTitle={"Service by Brain Inventory"}
              content={content}
              btn="Get a Quote"
              image="https://braininventory.s3.us-east-2.amazonaws.com/images/Technology/Group+6420+(1).png"
              alt="MERN Stack App Development Services, MERN Stack.Js App Development"
            />
            <WhyMean type="MERN Stack" meanReasons={meanReasons} />
            <div className="flex justify-start px-7 sm:px-20">
              <h3 className="text-head mean_stack_development_text_shadow mt-8 text-2xl lg:text-8xl font-extrabold font-Satoshi">
                MERN Stack Development
              </h3>
            </div>
            <Benefits
              type="MERN Stack"
              subhead="MERN is a stack of JavaScript-based technologies used for developing web applications. MERN was developed by Facebook to build fast and scalable applications."
              benefitsList={benefitsList}
            />
            <Hire
              title="Why MERN Stack Development from %Brain Inventory"
              card={hireCards}
            />{" "}
            <ChooseBrainInventory
              reasons={chooseBI}
              alt="MERN Stack Development services"
            />{" "}
            <Industries />
            <Faqs faq={faqDetails} />
            <BlogArticle />
            <KeepInTouch />
            <LocateUs />
            <hr />
            <Footer />
          </div>
        </div>
      </Suspense>
    </>
  );
}

export default MernStackDevelopment;
