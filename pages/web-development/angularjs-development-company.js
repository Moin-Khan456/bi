import Head from "next/head";
import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import DOMPurify from "isomorphic-dompurify";

const Header = dynamic(() => import("../../components/header/Header.js"), {
  ssr: false,
});
const SectionOne = dynamic(() => import("../../components/Web-Development/PageIntro.jsx"), {
  ssr: false,
});
const WhyMean = dynamic(() =>
  import("../../components/Web-Development/WhyMean.jsx")
);
const Benefits = dynamic(() =>
  import("../../components/Web-Development/benefits.jsx")
);
const Hire = dynamic(() => import("../../components/common/Hire.jsx"));
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
const KeepInTouch = dynamic(
  () => import("../../components/common/keepInTouch.js"),
);
const LocateUs = dynamic(
  () => import("../../components/common/locateUs.js"),
);
const LetsKick = dynamic(
  () => import("../../components/common/LetsKick.js"),
);
const Footer = dynamic(() => import("../../components/common/Footer.js"),{ssr:false});

import {
  benefitsList,
  card,
  chooseBI,
  content,
  faqDetails,
  hireCards,
  jsonLdScript,
  meanReasons,
} from "../../data/web-development-data/angularjsData.js";

function AangularJsDevelopment(props) {
  const sanitizedJsonLd = DOMPurify.sanitize(JSON.stringify(jsonLdScript));

  return (
    <>
      <Head>
        <title>
          AngularJS Development Service Company USA | Brain Inventory
        </title>
        <meta
          name="description"
          content="Looking for the best angular js app development company? The brain Inventory expert team is specialized in angular js development services. Contact us Today!"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="AngularJS Development Service Company USA | Brain Inventory"
        />
        <meta
          property="og:description"
          content="Looking for the best angular js app development company? The brain Inventory expert team is specialized in angular js development services. Contact us Today!"
        />
        <meta
          property="og:url"
          content="https://braininventory.in/web-development/angularjs-development-company"
        />
        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/Technology/Group+6523.png"
        />

        <link
          rel="canonical"
          href="https://braininventory.in/web-development/angularjs-development-company"
        />
        <link
          rel="preload"
          fetchpriority="high"
          href="https://braininventory.s3.us-east-2.amazonaws.com/images/Technology/Group+6523.png"
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
        <div className="relative ">
          <Header />
          <div className="pt-32">
            <SectionOne
              heading="Angular JS Web "
              title="Top AngularJs"
              miniTitle={"Service by Brain Inventory"}
              content={content}
              btn="Get a Quote"
              image="https://braininventory.s3.us-east-2.amazonaws.com/images/Technology/Group+6523.png"
              alt="Angular JS Development Services"
              card={card}
            />
            <WhyMean type="AngularJs" meanReasons={meanReasons} />
            <Benefits
              type="Angular.JS Application"
              subhead="AngularJS is the most popular JavaScript framework. And for a good reason. It helps you build single-page web applications faster than using other platforms"
              benefitsList={benefitsList}
            />
            <Hire
              title="Why AngularJS Development from %Brain Inventory"
              card={hireCards}
            />{" "}
            <ChooseBrainInventory reasons={chooseBI} />
            <Industries />
            <Faqs faq={faqDetails} />
            <BlogArticle />
            <KeepInTouch />
            <LocateUs />
            <LetsKick />
            <hr />
            <Footer />
          </div>
        </div>
      </Suspense>
    </>
  );
}
export default AangularJsDevelopment;
