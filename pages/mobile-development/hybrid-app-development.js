import React, { Suspense } from "react";
import Head from "next/head";
import Link from "next/link";
import dynamic from "next/dynamic";
import { benefitsList, chooseBI, content, experienceCards, faqDetails, hireCards, subhead1, subhead2, subhead3 } from "../../data/mobile-development-data/hybridAppData.js";

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

function HybridAppDevelopment() {
  return (
    <>
      <Head>
        <title>
          Hybrid App Development Company USA - Hybrid App Design Service
        </title>
        <meta
          name="description"
          content="Looking for a hybrid mobile app development service company? We are here to help you! Contact brain inventory experienced hybrid mobile app developers."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Hybrid App Development Company USA - Hybrid App Design Service"
        />
        <meta
          property="og:description"
          content="Looking for a hybrid mobile app development service company? We are here to help you! Contact brain inventory experienced hybrid mobile app developers."
        />
        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/preview/Braininventory_hybrid-app-development.jpg"
        />{" "}
        <meta
          property="og:url"
          content="https://braininventory.in/mobile-development/hybrid-app-development"
        />
        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/preview/Braininventory_Hire+Chatbot+Developers.jpg"
        />
        <link
          rel="canonical"
          href="https://braininventory.in/mobile-development/hybrid-app-development"
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
          <SectionOne
            heading="A Smarter Way to Build Customized Applications."
            title="Hybrid Mobile App Development Services by"
            content={content}
            unique={"brain inventory"}
            btn="Contact Us!"
            developmentImage="https://braininventory.s3.us-east-2.amazonaws.com/images/Technology/Braininventory_hybrid+app+3.png"
            image="https://braininventory.s3.us-east-2.amazonaws.com/images/Technology/Braininventory_hybrid+app+2.png"
            alt="hybrid development company"
            type="app"
          />
          <Customer />
          <Experienced
            title="Hybrid App Development"
            image="https://braininventory.s3.us-east-2.amazonaws.com/images/Technology/Braininventory_hybrid+app+1.png"
            para1={subhead1}
            para2={subhead2}
            para3={subhead3}
            card={experienceCards}
          />
          <HireMarquee title="Hybrid Mobile App Development Services" />
          <Benefits
            type="Hybrid App"
            subhead="Hybrid mobile app development services help improve the user experience of your business. This is because hybrid apps are designed to function in a seamless manner with other native apps and browsers. Hybrids, which take advantage of the best features of both native and web technologies, are usually faster than cross-platforms. The code is also an advantage as it eliminates compatibility issues between devices. They work well on any device (Android or iOS), whether it's a smartphone, tablet, or desktop. Hybrids have the best qualities of enviable applications-apps from one platform that will work on others-and even more."
            benefitsList={benefitsList}
          />
          <Hire
            title="Why Hybrid App Development from %Brain Inventory"
            card={hireCards}
            subhead={
              <>
                As one of the most renowned{" "}
                <Link href="javascript:void(0)" className="text-[#2186ff]">
                  mobile app development company
                </Link>
                , Brain Inventory is celebrated for meeting modern business
                demands and providing top-notch solutions at an affordable price
                worldwide. If you’re in search of a mobile app developer, here’s
                why we should be your first pick:
              </>
            }
          />
          <ChooseBrainInventory
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

export default HybridAppDevelopment;
