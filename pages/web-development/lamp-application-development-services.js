import Head from "next/head";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import DOMPurify from "isomorphic-dompurify";
import { benefitsList, chooseBI, content, faqDetails, hireCards, jsonLdScript, meanReasons } from "../../data/web-development-data/lampApplicationData.js";

const Header = dynamic(() => import("../../components/header/Header.js"),{ssr:false});
import SectionOne from "../../components/Web-Development/PageIntro.jsx";
const WhyMean = dynamic(() =>
  import("../../components/Web-Development/WhyMean.jsx")
);
const Benefits = dynamic(() =>
  import("../../components/Web-Development/benefits.jsx")
);
const Hire = dynamic(() => import("../../components/common/Hire.jsx"));
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
  import("../../components/common/keepInTouch.js"),{ssr:false}
);
const LocateUs = dynamic(() => import("../../components/common/locateUs.js"));
const LetsKick = dynamic(() => import("../../components/common/LetsKick.js"));
const Footer = dynamic(() => import("../../components/common/Footer.js"),{ssr:false});
function LampApplicationDevelopment(props) {

  const sanitizedJsonLd = DOMPurify.sanitize(JSON.stringify(jsonLdScript));
  return (
    <>
      <Head>
        <title>
          LAMP Application Development Service Company USA | Brain Inventory
        </title>
        <meta
          name="description"
          content="Looking for lamp app development services? We are here to help you! Contact brain inventory for experienced lamp app developers, for quality services."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="LAMP Application Development Service Company USA | Brain Inventory"
        />
        <meta
          property="og:description"
          content="Looking for lamp app development services? We are here to help you! Contact brain inventory for experienced lamp app developers, for quality services."
        />
        <meta
          property="og:url"
          content="https://braininventory.in/web-development/lamp-application-development-services"
        />
        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/Technology/Group+6518.png"
        />
        <link
          rel="canonical"
          href="https://braininventory.in/web-development/lamp-application-development-services"
        />
        <link
          rel="preload"
          fetchpriority="high"
          href="https://braininventory.s3.us-east-2.amazonaws.com/images/Technology/Group+6518.png"
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
              heading="LAMP Application"
              miniTitle={"Service by Brain Inventory"}
              title="Top LAMP"
              content={content}
              btn="Get a Quote"
              image="https://braininventory.s3.us-east-2.amazonaws.com/images/Technology/Group+6518.png"
              alt="Lamp Development Services"
            />
            <WhyMean type="LAMP Application" meanReasons={meanReasons} />
            <div className="flex justify-start px-7 sm:px-20">
              <h3 className="text-head mean_stack_development_text_shadow mt-8 text-2xl lg:text-6xl font-extrabold font-Satoshi">
                LAMP Application Development Service
              </h3>
            </div>
            <Benefits
              type="LAMP Application"
              subhead="The lamp is one of the most popular choices for building multi-platform, scalable, and flexible applications with no configuration. As it is an open-source solution, there are a lot of options for LAMP distribution and configuration. There are several benefits of LAMP Application Development:"
              benefitsList={benefitsList}
            />
            <Hire
              title="Why LAMP Application Development from %Brain Inventory"
              card={hireCards}
            />{" "}
            <ChooseBrainInventory
              reasons={chooseBI}
              alt="Lamp Development Services"
            />{" "}
            <Industries />
            <Faqs faq={faqDetails} />
            <BlogArticle />
            <KeepInTouch />
            <LocateUs />
            <LetsKick/>
            <hr />
            <Footer />
          </div>
        </div>
      </Suspense>
    </>
  );
}
export default LampApplicationDevelopment;
