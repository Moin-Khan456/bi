import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import DOMPurify from "isomorphic-dompurify";
import { advantages, chooseBI, content, faqDetails, hireCards, jsonLdScript, subhead1, subhead2, subhead3 } from "../../data/web-development-data/shopifyWebData.js";

const Header = dynamic(() => import("../../components/header/Header.js"), {
  ssr: false,
});
const SectionOne = dynamic(() =>
  import("../../components/common/HireBanner.jsx")
);
const Customer = dynamic(() => import("../../components/common/customer.jsx"));
const Experienced = dynamic(() =>
  import("../../components/Web-Development/Experienced.jsx")
);
const HireMarquee = dynamic(() =>
  import("../../components/common/HireMarquee.jsx")
);
const Advantage = dynamic(() =>
  import("../../components/Web-Development/Advantage.jsx")
);
const Hire = dynamic(() => import("../../components/common/Hire.jsx"));

const ChooseBrainInventory = dynamic(() =>
  import("../../components/common/CommonChooseBraininventory.jsx")
);
const Faqs = dynamic(() => import("../../components/mobilePages/faqs.js"), {
  ssr: false,
});
const BlogArticle = dynamic(
  () => import("../../components/common/BlogArticle.jsx"),
  { ssr: false }
);
const KeepInTouch = dynamic(() =>
  import("../../components/common/keepInTouch.js")
);
const LocateUs = dynamic(() => import("../../components/common/locateUs.js"));
const LetsKick = dynamic(() => import("../../components/common/LetsKick.js"));
const Footer = dynamic(() => import("../../components/common/Footer.js"), {
  ssr: false,
});
function ShopifyWebDevelopment(props) {
 
  const sanitizedJsonLd = DOMPurify.sanitize(JSON.stringify(jsonLdScript));
  return (
    <>
      <Head>
        <title>
          Shopify Development Company USA - App & Web Development Company
        </title>
        <meta
          name="description"
          content="Looking for Shopify app & web development services? We are here to help you! Contact brain inventory experienced Shopify developers, for quality services."
        />
        <meta
          name="og:description"
          content="Looking for Shopify app & web development services? We are here to help you! Contact brain inventory experienced Shopify developers, for quality services."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Shopify Development Company USA - App & Web Development Company"
        />
        <meta
          property="og:url"
          content="https://braininventory.in/web-development/shopify-web-development-company"
        />
        <link
          rel="canonical"
          href="https://braininventory.in/web-development/shopify-web-development-company"
        />
        <link
          rel="preload"
          fetchpriority="high"
          href="https://braininventory.s3.us-east-2.amazonaws.com/images/Technology/Group+6526.png"
          as="image"
        />
           <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: sanitizedJsonLd }}
        />
      </Head>
      {/*<Loader />*/}
      <div className="">
        <div>
          <Header />
          <SectionOne
            title="Shopify Website & App Development Company by"
            content={content}
            subhead="A Smarter Way to Build Customized Applications."
            btn="Contact Us!"
            image="https://braininventory.s3.us-east-2.amazonaws.com/images/shopify-development/Mask+Group+168+(1).png"
            alt="Shopify Development Company"
            type="php"
            unique={"brain inventory"}
          />
          <Customer />
          <Experienced
            title="Shopify Development"
            type="why"
            image="https://braininventory.s3.us-east-2.amazonaws.com/images/shopify-development/Mask+Group+170.png"
            alt="Shopify Development Company"
            para1={subhead1}
            para2={subhead2}
            para3={subhead3}
          />
          <HireMarquee title="Shopify" />
          <Advantage
            title="Shopify Development Company"
            desc="A Shopify development company offers a multitude of benefits to businesses looking to establish or enhance their online presence. First and foremost, Shopify is a robust and user-friendly e-commerce platform that is well-known for its scalability and customization options. When you engage a Shopify development company, you gain access to a team of experts who can tailor your online store to meet your unique business needs."
            reasons={advantages}
          />{" "}
          <Hire
            title="Why Choose %Brain Inventory% for Shopify Development?"
            card={hireCards}
          />
          <div className="container"></div>
          <ChooseBrainInventory
            reasons={chooseBI}
            alt="TypeScript Development Company"
          />
          <Faqs faq={faqDetails} />
          <hr />
          <BlogArticle />
          <KeepInTouch />
          <LocateUs />
          <LetsKick />
          <Footer />
        </div>
      </div>
    </>
  );
}
export default ShopifyWebDevelopment;
