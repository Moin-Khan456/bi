import React, { Suspense } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import {
  benefitsList,
  chooseBI,
  content,
  experienceCards,
  faqDetails,
  hireCards,
  subhead1,
  subhead2,
  subhead3,
} from "../../data/mobile-development-data/mobileAppData.js";

const Header = dynamic(() => import("../../components/header/Header"), {
  ssr: false,
});
const SectionOne = dynamic(() =>
  import("../../components/Mobile-Development/SectionOne"),{ssr:false}
);
const Customer = dynamic(() => import("../../components/common/customer"));
const Experienced = dynamic(() =>
  import("../../components/Mobile-Development/Experienced")
);
const HireMarquee = dynamic(() =>
  import("../../components/common/HireMarquee")
);
const Benefits = dynamic(() =>
  import("../../components/Mobile-Development/benefits")
);
const Hire = dynamic(() => import("../../components/common/Hire"));
const ChooseBrainInventory = dynamic(() =>
  import("../../components/common/CommonChooseBrainInventory")
);
const Faqs = dynamic(() => import("../../components/mobilePages/faqs.js"), {
  ssr: false,
});
const BlogArticle = dynamic(
  () => import("../../components/common/BlogArticle"),
  { ssr: false }
);
const KeepInTouch = dynamic(
  () => import("../../components/common/keepInTouch"),
  { ssr: false }
);
const LocateUs = dynamic(() => import("../../components/common/locateUs"));
const LetsKick = dynamic(() => import("../../components/common/LetsKick"));
const Footer = dynamic(() => import("../../components/common/Footer"), {
  ssr: false,
});
function MobileApiIntegration(props) {
  return (
    <>
      <Head>
        <title>
          API Integration Services USA - Third Party Integration Service
        </title>
        <meta
          name="description"
          content="Searching for an api integration service? Brain Inventory will help you! Contact dedicated third party software integration developers for quality work."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="API Integration Services USA - Third Party Integration Service"
        />
        <meta
          property="og:description"
          content="Searching for an api integration service? Brain Inventory will help you! Contact dedicated third party software integration developers for quality work."
        />
        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/preview/Braininventory_mobile+app+integration.jpg"
        />{" "}
        <meta
          property="og:url"
          content="https://braininventory.in/mobile-development/mobile-api-integration-services"
        />
        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/preview/Braininventory_Hire+Chatbot+Developers.jpg"
        />
        <link
          rel="canonical"
          href="https://braininventory.in/mobile-development/mobile-api-integration-services"
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
          <SectionOne
            heading="A Smarter Way to Build Customized Applications."
            title="Third Party API Integration Services by"
            content={content}
            btn="Contact Us!"
            developmentImage="https://braininventory.s3.us-east-2.amazonaws.com/images/Technology/Braininventory_mobile+app+integration+3.png"
            image="https://braininventory.s3.us-east-2.amazonaws.com/images/Technology/Braininventory_mobile+app+integration+1.png"
            alt="Mobile Application Integration Services"
            type="app"
            unique={"brain inventory"}
          />
          <Customer />
          <Experienced
            title="Mobile Application Integration "
            image="https://braininventory.s3.us-east-2.amazonaws.com/images/Technology/Braininventory_mobile+app+integration+2.png"
            para1={subhead1}
            para2={subhead2}
            para3={subhead3}
            card={experienceCards}
          />
          <HireMarquee title="Mobile app integration" />
          <Benefits
            type="Mobile Application Integration"
            subhead="Integrating mobile applications with other systems and software can provide many important benefits that significantly boost mobile apps' capabilities and performance, as well as upgrade overall user satisfaction. There are several core advantages that mobile app integration can deliver:"
            benefitsList={benefitsList}
          />
          <Hire
            title="Why Mobile Application Integration from %Brain Inventory"
            card={hireCards}
          />
          <ChooseBrainInventory
            reasons={chooseBI}
            alt="Mobile Application Integration Services"
          />
          <Faqs faq={faqDetails} />
          <hr />
          <BlogArticle />
          <KeepInTouch />
          <LocateUs />
          <LetsKick />
          <Footer />
        </main>
      </Suspense>
    </>
  );
}

export default MobileApiIntegration;
