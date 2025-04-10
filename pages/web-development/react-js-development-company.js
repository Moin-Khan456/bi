import Head from "next/head";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import DOMPurify from "isomorphic-dompurify";
import { benefitsList, card, chooseBI, content, faqDetails, hireCards, jsonLdScript, meanReasons } from "../../data/web-development-data/reactjsDevelopmentData.js";

const Header = dynamic(() => import("../../components/header/Header"),{ssr:false});
const SectionOne = dynamic(() =>
  import("../../components/Web-Development/PageIntro.jsx")
);
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
const Faqs = dynamic(() => import("../../components/mobilePages/faqs.js"),{ssr:false});
const BlogArticle = dynamic(() =>
  import("../../components/common/BlogArticle.jsx"),{ssr:false}
);
const KeepInTouch = dynamic(() => import("../../components/common/keepInTouch.js"));
const LocateUs = dynamic(() => import("../../components/common/locateUs"));
const LetsKick = dynamic(() => import("../../components/common/LetsKick.js"));
const Footer = dynamic(() => import("../../components/common/Footer"),{ssr:false});

function HireReactDeveloper(props) {
 
const sanitizedJsonLd = DOMPurify.sanitize(JSON.stringify(jsonLdScript))  
  return (
    <>
      <Head>
        <title>
          React JS Web Development Service Company USA | Brain Inventory
        </title>
        <meta
          name="description"
          content="Looking for a React JS development company? Brain Inventory is the best React JS development company. Contact brain inventory for React JS services."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="React JS Web Development Service Company USA | Brain Inventory"
        />
        <meta
          property="og:description"
          content="Looking for a React JS development company? Brain Inventory is the best React JS development company. Contact brain inventory for React JS services."
        />
        <meta
          property="og:url"
          content="https://braininventory.in/web-development/react-js-development-company"
        />
        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/Technology/Group+6526.png"
        />
        <link
          rel="canonical"
          href="https://braininventory.in/web-development/react-js-development-company"
        />
        <link
          rel="preload"
          href="https://braininventory.s3.us-east-2.amazonaws.com/images/Technology/Group+6526.png"
          as="image"
          type="image/png"
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
          <div className="pt-32 container">
            <SectionOne
              heading="React JS"
              title="Top React Js"
              miniTitle={"Service by Brain Inventory"}
              content={content}
              btn="Get a Quote"
              image="https://braininventory.s3.us-east-2.amazonaws.com/images/Technology/Group+6526.png"
              alt="ReactJS Web Development Company,"
              card={card}
            />
            <WhyMean type="React Js" meanReasons={meanReasons} />
            <div className="flex justify-center px-10">
              <h3 className="text-head mean_stack_development_text_shadow mt-8 text-2xl lg:text-7xl font-extrabold font-Satoshi">
                React JS Development Service
              </h3>
            </div>
            <Benefits type="React JS" subhead="" benefitsList={benefitsList} />
            <Hire
              title="Why React JS Development from %Brain Inventory"
              card={hireCards}
            />{" "}
            <ChooseBrainInventory
              reasons={chooseBI}
              alt="ReactJS Web Development Company"
            />{" "}
            <Industries />
            <Faqs faq={faqDetails} />
            <BlogArticle />
            <KeepInTouch />
            <LocateUs />
            <LetsKick/>
            <Footer />
          </div>
        </div>
      </Suspense>
    </>
  );
}

export default HireReactDeveloper;
