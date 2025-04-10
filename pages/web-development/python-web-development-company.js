import React, { Suspense } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import DOMPurity from "isomorphic-dompurify"
import { advantages, chooseBI, content, faqDetails, hireCards, jsonLdScript, subhead1, subhead2, subhead3 } from "../../data/web-development-data/pythonWebData.js";

const Header = dynamic(() => import("../../components/header/Header.js"),{ssr:false});
const SectionOne = dynamic(() => import("../../components/common/HireBanner.jsx"));
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
  import("../../components/common/CommonChooseBrainInventory.jsx")
);
const Faqs = dynamic(() => import("../../components/mobilePages/faqs.js"),{ssr:false});
const BlogArticle = dynamic(() =>
  import("../../components/common/BlogArticle.jsx"),{ssr:false}
);
const KeepInTouch = dynamic(() =>
  import("../../components/common/keepInTouch.js")
);
const LocateUs = dynamic(() => import("../../components/common/locateUs.js"));
const LetsKick = dynamic(() => import("../../components/common/LetsKick.js"));
const Footer = dynamic(() => import("../../components/common/Footer.js"),{ssr:false});
function PythonWebDevelopment(props) {
 
const sanitizedJsonLd = DOMPurity.sanitize(JSON.stringify(jsonLdScript))  
  return (
    <>
      <Head>
        <title>
          Python Web Development Company USA - Python Development Agency
        </title>
        <meta
          name="description"
          content="Looking for a Python development company? We are here to help you! Contact brain inventory for experienced Python developers, for quality services."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Python Web Development Company USA - Python Development Agency"
        />
        <meta
          property="og:description"
          content="Looking for a Python development company? We are here to help you! Contact brain inventory for experienced Python developers, for quality services."
        />
        <meta
          property="og:url"
          content=" 
        https://braininventory.in/web-development/python-web-development-company"
        />
        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/preview/Braininventory_Python+preview+image.png"
        />
        <link
          rel="canonical"
          href="https://braininventory.in/web-development/python-web-development-company"
        />
        <link
          rel="preload"
          fetchpriority="high"
          href="https://braininventory.s3.us-east-2.amazonaws.com/images/Braininventory_python+development+1.png"
          as="image"
          type="image/png"
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
        <div className="">
          <Header />
          <SectionOne
            heading="A Smarter Way to Build Customized Applications."
            title="Python Web Development Agency by"
            content={content}
            btn="Contact Us!"
            image="https://braininventory.s3.us-east-2.amazonaws.com/images/Braininventory_python+development+1.png"
            alt="Python Development Company"
            type="php"
            unique="brain inventory"
          />
          <Customer />
          <Experienced
            title="Python Development"
            type="why"
            image="https://braininventory.s3.us-east-2.amazonaws.com/images/Braininventory_python+development+2.png"
            alt="Python Development Company"
            para1={subhead1}
            para2={subhead2}
            para3={subhead3}
          />
          <HireMarquee title="Python Development" />
          <Advantage title="Python Development" reasons={advantages} />{" "}
          <Hire
            title="Why %Brain Inventory% for your Python-based project development?"
            card={hireCards}
          />
          <div className="container"></div>
          <ChooseBrainInventory
            reasons={chooseBI}
            alt="Python Development Company"
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
export default PythonWebDevelopment;
