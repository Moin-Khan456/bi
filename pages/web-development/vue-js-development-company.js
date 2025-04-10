import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import DOMPurify from "isomorphic-dompurify";
import {
  benefitsList,
  chooseBI,
  content,
  faqDetails,
  hireCards,
  jsonLdScript,
  meanReasons,
} from "../../data/web-development-data/vuejsDevelopmentData.js";

const Header = dynamic(() => import("../../components/header/Header"), {
  ssr: false,
});
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
const KeepInTouch = dynamic(() =>
  import("../../components/common/keepInTouch.js")
);
const LocateUs = dynamic(() => import("../../components/common/locateUs"));
const Footer = dynamic(() => import("../../components/common/Footer"), {
  ssr: false,
});

function VueJsDevelopment(props) {
  const sanitizedJsonLd = DOMPurify.sanitize(JSON.stringify(jsonLdScript));
  return (
    <>
      <Head>
        <title>Vue JS Development Service Company USA | Brain Inventory</title>
        <meta
          name="description"
          content="Are you looking for Vue JS development services? We are here to help! Contact Brain Inventory for experienced Vue JS developers to provide the best solutions."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Vue JS Development Service Company USA | Brain Inventory"
        />
        <meta
          property="og:description"
          content="Are you looking for Vue JS development services? We are here to help! Contact Brain Inventory for experienced Vue JS developers to provide the best solutions."
        />
        <meta
          property="og:url"
          content="https://braininventory.in/web-development/vue-js-development-company"
        />
        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/Technology/Group+6461.png"
        />
        <link
          rel="canonical"
          href="https://braininventory.in/web-development/vue-js-development-company"
        />
        <link
          rel="preload"
          fetchpriority="high"
          href="https://braininventory.s3.us-east-2.amazonaws.com/images/Technology/Group+6461.png"
          as="image"
          type="image/png"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: sanitizedJsonLd }}
        />
      </Head>
      {/*<Loader />*/}
      <div className="">
        <Header />
        <div className="pt-32">
          <SectionOne
            heading="Vue.Js"
            title="Vue.Js"
            miniTitle={"Service by Brain Inventory"}
            content={content}
            btn="Get a Quote"
            image="https://braininventory.s3.us-east-2.amazonaws.com/images/Technology/Group+6461.png"
            alt="Vue.js Application Development Company"
          />
          <WhyMean type="Vue.Js" meanReasons={meanReasons} />
          <div className="flex justify-start px-7 sm:px-20">
            <h3 className="text-head mean_stack_development_text_shadow mt-8 text-4xl lg:text-8xl font-extrabold font-Satoshi">
              Vue.Js Development
            </h3>
          </div>
          <Benefits type="Vue.Js" benefitsList={benefitsList} />
          <Hire
            title="Why Vue.Js Development from %Brain Inventory"
            card={hireCards}
          />{" "}
          <ChooseBrainInventory
            reasons={chooseBI}
            alt="Vue.js Application Development Company"
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
    </>
  );
}

export default VueJsDevelopment;
