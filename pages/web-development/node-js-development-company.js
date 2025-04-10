import Head from "next/head";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import DOMPurify from "isomorphic-dompurify";
import {
  benefitsList,
  chooseBI,
  content,
  faqDetails,
  hireCards,
  jsonLdScript,
  meanReasons,
} from "../../data/web-development-data/nodejsData.js";

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
  import("../../components/common/ChooseBrainInventory.jsx")
);
const Industries = dynamic(
  () => import("../../components/Web-Development/industries.jsx"),
  { ssr: false }
);
const Faqs = dynamic(() => import("../../components/mobilePages/faqs.js"), {
  ssr: false,
});
const BlogArticle = dynamic(
  () => import("../../components/common/BlogArticle.jsx"),
  { ssr: false }
);
const KeepInTouch = dynamic(() =>
  import("../../components/common/keepInTouch.js")
);
const LocateUs = dynamic(() => import("../../components/common/locateUs"));
const Footer = dynamic(() => import("../../components/common/Footer"),{ssr:false});

function NodeJsDevelopment(props) {
  const sanitizedJsonLd = DOMPurify.sanitize(JSON.stringify(jsonLdScript));
  return (
    <>
      <Head>
        <title>Node JS Development Service Company USA | Brain Inventory</title>
        <meta
          name="description"
          content="Looking for node js development services? We are here to help you! Contact brain inventory for experienced node js developer, for quality services."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Node JS Development Service Company USA | Brain Inventory"
        />
        <meta
          property="og:description"
          content="Looking for node js development services? We are here to help you! Contact brain inventory for experienced node js developer, for quality services."
        />
        <meta
          property="og:url"
          content="https://braininventory.in/web-development/node-js-development-company"
        />
        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/Technology/Group+6498.png"
        />
        <link
          rel="canonical"
          href="https://braininventory.in/web-development/node-js-development-company"
        />
        <link
          rel="preload"
          fetchpriority="high"
          href="https://braininventory.s3.us-east-2.amazonaws.com/images/Technology/Group+6498.png"
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
        <div className=" ">
          <Header />
          <div className="sm:pt-32">
            <SectionOne
              heading="Node.Js"
              title="Node.Js"
              miniTitle={"Service by Brain Inventory"}
              content={content}
              btn="Get a Quote"
              image="https://braininventory.s3.us-east-2.amazonaws.com/images/Technology/Group+6498.png"
              alt="Node JS Web Development Services"
            />
            <WhyMean type="Node.Js" meanReasons={meanReasons} />
            <div className="flex justify-start sm:ml-[3rem] pl-10 sm:px-10">
              <h3 className="text-head mean_stack_development_text_shadow mt-8 text-4xl lg:text-6xl font-extrabold font-Satoshi">
                Node.Js Development Services
              </h3>
            </div>
            <Benefits type="Node.Js" subhead="" benefitsList={benefitsList} />
            <Hire
              title="Why Node.Js Development from %Brain Inventory"
              card={hireCards}
            />{" "}
            <ChooseBrainInventory
              reasons={chooseBI}
              alt="Node JS Web Development Services"
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

export default NodeJsDevelopment;
