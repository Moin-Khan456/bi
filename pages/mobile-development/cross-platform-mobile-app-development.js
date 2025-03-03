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
} from "../../data/mobile-development-data/cross-platformData.js";

const Header = dynamic(() => import("../../components/header/Header.js"));
import SectionOne from "../../components/Mobile-Development/SectionOne.jsx";
const Customer = dynamic(() => import("../../components/common/customer.jsx"));
const Experienced = dynamic(() =>
  import("../../components/Mobile-Development/Experienced.jsx")
);
const HireMarquee = dynamic(() =>
  import("../../components/common/HireMarquee.jsx")
);
const Benefits = dynamic(() =>
  import("../../components/Web-Development/Advantage.jsx")
);
const Hire = dynamic(() => import("../../components/common/Hire.jsx"));
const ChooseBraininventory = dynamic(() =>
  import("../../components/common/CommonChooseBraininventory.jsx")
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

function CrossPlatformMobileApp(props) {
  return (
    <>
      <Head>
        <title>
          Cross Platform Mobile App Development USA - Ionic App Development
        </title>
        <meta
          name="description"
          content="Looking for cross platform app development services? We are here to help you! Contact brain inventory experienced cross platform mobile app developers."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Cross Platform Mobile App Development USA - Ionic App Development"
        />
        <meta
          property="og:description"
          content="Looking for cross platform app development services? We are here to help you! Contact brain inventory experienced cross platform mobile app developers."
        />
        <meta
          property="og:url"
          content="https://braininventory.in/mobile-development/cross-platform-mobile-app-development"
        />
        <link
          rel="canonical"
          href="https://braininventory.in/mobile-development/cross-platform-mobile-app-development"
        />
      </Head>
      <Suspense
        fallback={
          {
            /*<Loader />*/
          }
        }
      >
        <div>
          <Header />
          <SectionOne
            subhead="A Smarter Way to Build Customized Applications."
            title="Cross Platform Mobile App Development Services by"
            content={content}
            btn="Contact Us!"
            developmentImage="https://braininventory.s3.us-east-2.amazonaws.com/images/Technology/Braininventory_hybrid+app+3.png"
            image="https://braininventory.s3.us-east-2.amazonaws.com/images/mobile-app-development/Mask+Group+173.png"
            alt="Cross Platform App Development Company"
            type="app"
            unique={"brain inventory"}
          />
          <Customer />
          <Experienced
            title="Ionic App Development"
            image="https://braininventory.s3.us-east-2.amazonaws.com/images/mobile-app-development/Mask+Group+172.png"
            para1={subhead1}
            para2={subhead2}
            para3={subhead3}
            card={experienceCards}
          />
          <HireMarquee title="Ionic App Development" />
          <Benefits
            title="Ionic App Development"
            desc="Ionic app development offers several advantages:"
            reasons={benefitsList}
            benefitFooter="These benefits make Ionic a compelling choice for those looking to develop mobile apps efficiently and cost-effectively."
          />
          <Hire
            title="Why Ionic App Development from %Brain Inventory"
            card={hireCards}
          />
          <ChooseBraininventory
            reasons={chooseBI}
            alt="hybrid development company"
          />
          <Faqs faq={faqDetails} />
          <hr />
          <BlogArticle />
          <KeepInTouch />
          <LocateUs />
          <LetsKick />
          <Footer />
        </div>
      </Suspense>
    </>
  );
}

export default CrossPlatformMobileApp;
