import React, { Suspense } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { benefitSubHead, content, faqDetails, hireCards, hireSub, para1, para2, para3, reasonsForChoosing } from "../../data/mobile-development-data/customMobileData.js";

const Header = dynamic(() => import("../../components/header/Header.js"),{ssr:false});
const HireBanner = dynamic(() => import("../../components/Mobile-Development/SectionOne.jsx"),{ssr:false});

const Customer = dynamic(() => import("../../components/common/customer.jsx"));
const CustomWeb = dynamic(() => import("../../components/customWeb.jsx"),{ssr:false});
const HireMarquee = dynamic(() =>
  import("../../components/common/HireMarquee.jsx")
);
const CustomAppBenefits = dynamic(() =>
  import("../../components/Mobile-Development/CustomAppBenefits.jsx")
);
const Hire = dynamic(() => import("../../components/common/Hire.jsx"));
const ChooseBrainInventoryApp = dynamic(() =>
  import("../../components/common/CommonChooseBrainInventory.jsx")
);
const BlogArticle = dynamic(() =>
  import("../../components/common/BlogArticle.jsx"),{ssr:false}
);
const Faqs = dynamic(() => import("../../components/mobilePages/faqs.js"),{ssr:false});

const KeepInTouch = dynamic(() =>
  import("../../components/common/keepInTouch.js"),{ssr:false}
);
const LocateUs = dynamic(() => import("../../components/common/locateUs.js"));
const LetsKick = dynamic(() => import("../../components/common/LetsKick.js"));
const Footer = dynamic(() => import("../../components/common/Footer.js"),{ssr:false});
function CustomMobileAppDevelopment() {
 
  return (
    <>
      <Head>
        <title>
          Custom Mobile App Development Company USA - App Development Service
        </title>
        <meta
          name="description"
          content="Looking for a custom mobile app development company? We are here to help you! Contact brain inventory for experienced mobile app developers, for quality services."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Custom Mobile App Development Company USA - App Development Service"
        />
        <meta
          property="og:description"
          content="Looking for a custom mobile app development company? We are here to help you! Contact brain inventory for experienced mobile app developers, for quality services."
        />
        <meta
          property="og:url"
          content="https://braininventory.in/mobile-development/custom-mobile-app-development-company"
        />
        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/Braininventory_custom+app+development.jpg"
        />
        <link
          rel="canonical"
          href="https://braininventory.in/mobile-development/custom-mobile-app-development-company"
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
          <section>
            <Header />
            <HireBanner
              heading="A Smarter Way to Build Customized Applications"
              title="Custom Mobile App Development Company"
              content={content}
              unique={"brain inventory"}
              btn="Get a Quote"
              image="https://braininventory.s3.us-east-2.amazonaws.com/images/campaign-creators-iEiUITs149M-unsplash.png"
              developmentImage="https://braininventory.s3.us-east-2.amazonaws.com/images/Technology/Braininventory_hybrid+app+3.png"
              alt="custom app development"
              type="app"
            />
            <Customer />
            <CustomWeb
              para1={para1}
              para2={para2}
              para3={para3}
              type="Custom App"
            />
            <HireMarquee title="Custom Mobile App" />
            <CustomAppBenefits type="Mobile App" subhead={benefitSubHead} />
            <Hire
              title="Why Custom App Development from %Brain Inventory"
              card={hireCards}
              subhead={hireSub}
            />

            <ChooseBrainInventoryApp
              head="Why Custom Web Development from"
              blue="Brain inventory"
              alt="custom app development"
              reasons={reasonsForChoosing}
            />
            <hr />
            <BlogArticle />
            <Faqs faq={faqDetails} />
            <KeepInTouch />
            <LocateUs />
            <LetsKick />
            <Footer />
          </section>
        </main>
      </Suspense>
    </>
  );
}

export default CustomMobileAppDevelopment;
