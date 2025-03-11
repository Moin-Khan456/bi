import React, { Suspense } from "react";
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
} from "../../data/mobile-development-data/isoAppData.js";

const Header = dynamic(() => import("../../components/header/Header.js"), {
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
const LetsKick = dynamic(() => import("../../components/common/LetsKick"));
const Footer = dynamic(() => import("../../components/common/Footer.js"), {
  ssr: false,
});

function IosDevelopment() {
  const sanitizedJsonLd = DOMPurify.sanitize(JSON.stringify(jsonLdScript));
  return (
    <>
      <Head>
        <title>
          Best iOS App Development Services | iOS App Development Company
        </title>
        <meta
          name="description"
          content="As a leading iOS app development company in the USA, we offer premium iPhone application development services to create high-quality iOS apps."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Best iOS App Development Services | iOS App Development Company"
        />
        <meta
          property="og:description"
          content="As a leading iOS app development company in the USA, we offer premium iPhone application development services to create high-quality iOS apps."
        />
        <meta
          property="og:url"
          content="https://braininventory.in/mobile-development/ios-app-development-company"
        />
        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/Technology/Group+6648.png"
        />
        <link
          rel="canonical"
          href="https://braininventory.in/mobile-development/ios-app-development-company"
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
          <section className="pt-32">
            <SectionOne
              heading="iOS App"
              title="Top iOS"
              content={content}
              btn="Get a Quote"
              image="https://braininventory.s3.us-east-2.amazonaws.com/images/Technology/Group+6648.png"
              alt="iOS Development Service"
              appDev={true}
            />
            <WhyMean type="iOS App" meanReasons={meanReasons} />
            <Benefits
              type="iOS App"
              subhead="Apple is famous for its high-quality and innovative products. Then it means you want to know more about mobile app development. The iPhone is the most popular smartphone series in the world. Many developers now use this platform for their own fancy apps. Besides being considered a great way to make money, iPhone applications are known for being high-quality and revenue-generating."
              benefitsList={benefitsList}
            />
            <Hire
              title="Why iOS App Development from %Brain Inventory"
              subhead="Most successful smartphone and tablet apps are developed by iOS app development companies. Developing a mobile application with the help of an iPhone app developer is one of the things that can bring your business more profits, success, and revenue growth."
              card={hireCards}
            />{" "}
            <ChooseBrainInventory
              reasons={chooseBI}
              alt="iOS Development Service"
            />{" "}
            <Industries />
            <Faqs faq={faqDetails} />
            <BlogArticle />
            <KeepInTouch />
            <LocateUs />
            <LetsKick />
            <hr />
            <Footer />
          </section>
        </main>
      </Suspense>
    </>
  );
}
export default IosDevelopment;
