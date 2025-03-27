import Head from "next/head";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import DOMPurify from "isomorphic-dompurify";
import {
  benefitsList,
  chooseBI,
  chooseBiSubhead,
  content,
  faqDetails,
  hireCards,
  jsonLdScript,
  meanReasons,
} from "../../data/mobile-development-data/androidData.js";

const Header = dynamic(() => import("../../components/header/Header.js"), {
  ssr: false,
});
const SectionOne = dynamic(
  () => import("../../components/Web-Development/PageIntro.jsx"),
  { ssr: false }
);
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
  { ssr: false }
);
const LocateUs = dynamic(() => import("../../components/common/locateUs.js"));
const LetsKick = dynamic(() => import("../../components/common/LetsKick.js"));
const Footer = dynamic(() => import("../../components/common/Footer.js"), {
  ssr: false,
});

function AndroidAppDevelopment() {
 const sanitizedJsonLd = DOMPurify.sanitize(JSON.stringify(jsonLdScript));
  return (
    <>
      <Head>
        <title>
          Android App Development Company USA - Mobile App Development
        </title>
        <meta
          name="description"
          content="Looking for an Android mobile app development company? Contact brain inventory for quality work of Android app development services."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Android App Development Company USA - Mobile App Development"
        />
        <meta
          property="og:description"
          content="Looking for an Android mobile app development company? Contact brain inventory for quality work of Android app development services."
        />
        <meta
          property="og:url"
          content="https://braininventory.in/mobile-development/android-app-development-company"
        />
        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/Braininventory_android+development.jpg"
        />
        <link
          rel="canonical"
          href="https://braininventory.in/mobile-development/android-app-development-company"
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
        <main className="">
          <Header />
          <section className="pt-32">
            <SectionOne
              heading="Android Mobile App"
              title="Hire Android"
              content={content}
              btn="Get a Quote"
              miniTitle={"Service by Brain Inventory"}
              image="https://braininventory.s3.us-east-2.amazonaws.com/images/Group+6961.png"
              alt="Android App Development Services"
              appDev={true}
            />
            <WhyMean type="Android App" meanReasons={meanReasons} />
            <Benefits
              type="Android App"
              subhead="Android app development has become a prominent name in the mobile app design industry. Its rise to fame stems from being a highly desired system, giving both a progressive and pioneering tactic to improving user satisfaction. Over the past several years, the Android platform's popularity has steadily increased, providing developers with a special chance to gain advantages."
              benefitsList={benefitsList}
            />
            <Hire
              title="Why Android App Development from %Brain Inventory"
              card={hireCards}
            />{" "}
            <ChooseBrainInventory
              reasons={chooseBI}
              subhead={chooseBiSubhead}
              alt="Android App Development Services"
            />{" "}
            <Industries />
            <Faqs faq={faqDetails} />
            <BlogArticle />
            <KeepInTouch />
            <LocateUs />
            <section className="pb-4" />
            <LetsKick />
            <hr />
            <Footer />
          </section>
        </main>
      </Suspense>
    </>
  );
}

export default AndroidAppDevelopment;
