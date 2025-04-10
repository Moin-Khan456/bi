import React, { Suspense } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import DOMPurify from "isomorphic-dompurify";
import { benefitsList, chooseBI, content, faqDetails, hireCards, jsonLdScript, meanReasons } from "../../data/web-development-data/meanStackData.js";

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
const Faqs = dynamic(() =>
  import("../../components/mobilePages/faqs.js"),{ssr:false}
);
const BlogArticle = dynamic(() =>
  import("../../components/common/BlogArticle.jsx"),{ssr:false}
);
const KeepInTouch = dynamic(() =>
  import("../../components/common/keepInTouch.js")
);
const LocateUs = dynamic(() => import("../../components/common/locateUs"));
const Footer = dynamic(() => import("../../components/common/Footer"),{ssr:false});

function MeanStackDevelopment(props) {
 
  const sanitizedJsonLd = DOMPurify.sanitize(JSON.stringify(jsonLdScript));
  return (
    <>
      <Head>
        <title>
          Mean Stack Development Company USA - MEAN Stack Development
        </title>
        <meta
          name="description"
          content="Looking for mean stack development services? We are here to help you! Contact brain inventory for experienced mean stack developers, for quality services."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Mean Stack Development Company USA - MEAN Stack Development"
        />
        <meta
          property="og:description"
          content="Looking for mean stack development services? We are here to help you! Contact brain inventory for experienced mean stack developers, for quality services."
        />
        <meta
          property="og:url"
          content="https://braininventory.in/web-development/mean-stack-development-company"
        />
        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/Technology/Group+6420+(1).png"
        />
        <link
          rel="canonical"
          href="https://braininventory.in/web-development/mean-stack-development-company"
        />
        <link
          rel="preload"
          fetchpriority="high"
          href="https://braininventory.s3.us-east-2.amazonaws.com/images/Technology/Group+6420+(1).png"
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
          <div className="pt-32">
            <SectionOne
              heading="MEAN Stack"
              miniTitle={"Service Company - Brain Inventory"}
              title="Hire Android"
              content={content}
              btn="Get a Quote"
              image="https://braininventory.s3.us-east-2.amazonaws.com/images/Technology/Group+6420+(1).png"
              alt="MEAN Stack Development Services"
            />
            <WhyMean type="MEAN Stack" meanReasons={meanReasons} />
            <div className="flex justify-start px-7 sm:px-20">
              <h3 className="text-head mean_stack_development_text_shadow mt-8 text-3xl lg:text-8xl font-extrabold font-Satoshi">
                MEAN Stack Development
              </h3>
            </div>
            <Benefits
              type="MEAN Stack"
              subhead="Mean Stack is a new technology that can be of great help to modern
            developers. MEAN Stack has become very popular following the release
            of MEAN tools."
              benefitsList={benefitsList}
            />
            <Hire
              title="Why MEAN Stack Development from %Brain Inventory"
              card={hireCards}
            />{" "}
            <ChooseBrainInventory
              reasons={chooseBI}
              alt="MEAN Stack Development Services"
            />{" "}
            <Industries />
            <Faqs faq={faqDetails} />
            <BlogArticle />
            <KeepInTouch />
            <LocateUs />
            <div className="pb-4" />
            <hr />
            <Footer />
          </div>
        </div>
      </Suspense>
    </>
  );
}

export default MeanStackDevelopment;
