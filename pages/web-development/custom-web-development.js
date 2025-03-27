import Head from "next/head";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import DOMPurify from "isomorphic-dompurify";
import { benefitsList, benefitSubHead, chooseBI, content, faqDetails, hireCards, jsonLdScript, para1, para2 } from "../../data/web-development-data/customWebData.js";

const Header = dynamic(() => import("../../components/header/Header"),{ssr:false});
import SectionOne from "../../components/common/HireBanner";
const Customer = dynamic(() => import("../../components/common/customer.jsx"));
const CustomWeb = dynamic(() => import("../../components/customWeb.jsx"),{ssr:false});
const HireMarquee = dynamic(() =>
  import("../../components/common/HireMarquee.jsx")
);
const CustomBenefits = dynamic(() =>
  import("../../components/common/CustomBenefits.jsx")
);
const Hire = dynamic(() => import("../../components/common/Hire.jsx"));
const ChooseBrainInventory = dynamic(() =>
  import("../../components/common/CommonChooseBrainInventory.jsx")
);
const Faqs = dynamic(() => import("../../components/mobilePages/faqs.js"),{ssr:false});
const BlogArticle = dynamic(() =>
  import("../../components/common/BlogArticle.jsx"),{ssr:false}
);
const KeepInTouch = dynamic(() =>
  import("../../components/common/keepInTouch")
);
const LocateUs = dynamic(() => import("../../components/common/locateUs"));
const LetsKick = dynamic(() => import("../../components/common/LetsKick"));
const Footer = dynamic(() => import("../../components/common/Footer"),{ssr:false});

function CustomWebDevelopment(props) {
  
const sanitizedJsonLd = DOMPurify.sanitize(JSON.stringify(jsonLdScript))
  return (
    <>
      <Head>
        <title>Custom Website Development USA - Custom Web Design</title>
        <meta
          name="description"
          content="Brain Inventory gives you the best solutions for custom web development services. Elevate your brand with a custom website design company. Contact us!"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Custom Website Development USA - Custom Web Design"
        />
        <meta
          property="og:description"
          content="Brain Inventory gives you the best solutions for custom web development services. Elevate your brand with a custom website design company. Contact us!"
        />
        <meta
          property="og:url"
          content="https://braininventory.in/web-development/custom-web-development"
        />

        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/preview/Braininventory_custom+web+develpment+preview+image.jpg"
        />

        <link
          rel="canonical"
          href="https://braininventory.in/web-development/custom-web-development"
        />
        <link
          rel="preload"
          fetchpriority="high"
          href="https://braininventory.s3.us-east-2.amazonaws.com/images/campaign-creators-iEiUITs149M-unsplash.png"
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
        <div className="relative  ">
          <Header />
          <SectionOne
            heading="Transform Your Brand with"
            title="Custom Web Development & Design Services by"
            content={content}
            btn="Contact Us!"
            image="https://braininventory.s3.us-east-2.amazonaws.com/images/campaign-creators-iEiUITs149M-unsplash.png"
            type="web"
            unique={"brain inventory"}
            alt="custom web development company"
          />
          <Customer />
          <CustomWeb para1={para1} para2={para2} type="Custom web" />
          <HireMarquee title="Custom Web" />
          <CustomBenefits
            type="Web"
            subhead={benefitSubHead}
            benefitsList={benefitsList}
          />
          <Hire
            title="Why Custom Web Development from %Brain Inventory"
            card={hireCards}
          />

          <ChooseBrainInventory
            reasons={chooseBI}
            alt="hybrid development company"
          />
          <Faqs faq={faqDetails} />
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

export default CustomWebDevelopment;
