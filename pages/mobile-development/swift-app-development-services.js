import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import {
  benefitsList,
  chooseBI,
  content,
  faqDetails,
  hireCards,
  meanReasons,
} from "../../data/mobile-development-data/swiftAppData.js";

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
  import("../../components/common/ChooseBraininventory.jsx")
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

function SwiftDevelopment() {
  return (
    <>
      <Head>
        <title>
          Swift App Development Company USA - Swift App Development Services
        </title>
        <meta
          name="description"
          content="Hire expert Brain Inventory team for your swift app development solutions. We are a reported swift app development company. Contact us today!"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Swift App Development Company USA - Swift App Development Services"
        />
        <meta
          property="og:description"
          content="Hire expert Brain Inventory team for your swift app development solutions. We are a reported swift app development company. Contact us today!"
        />
        <meta
          property="og:url"
          content="https://braininventory.in/mobile-development/swift-app-development-services"
        />
        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/Technology/Group+6743.png"
        />
        <link
          rel="canonical"
          href="https://braininventory.in/mobile-development/swift-app-development-services"
        />
      </Head>

      <div>
        <Header />
        <div className="pt-32">
          <SectionOne
            heading="Swift App"
            title="Top Swift App"
            content={content}
            miniTitle={"Service by Brain Inventory"}
            btn="Get a Quote"
            image="https://braininventory.s3.us-east-2.amazonaws.com/images/Technology/Group+6743.png"
            alt="Swift Application Development Services"
            appDev={true}
          />
          <WhyMean type="Swift App" meanReasons={meanReasons} />
          <Benefits
            type="Swift App"
            subhead="Swift has gone through significant improvements over time to become a highly sophisticated and adaptable programming language. Along with these enhancements come the advantages of utilizing Swift for Software Development Company ."
            benefitsList={benefitsList}
          />
          <Hire
            title="Why Swift App Development from %Brain Inventory"
            card={hireCards}
          />{" "}
          <ChooseBrainInventory
            reasons={chooseBI}
            alt="Swift Application Development Services"
          />{" "}
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
    </>
  );
}
export default SwiftDevelopment;
