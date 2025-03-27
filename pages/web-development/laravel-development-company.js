import React, { Suspense } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import DOMPurify from "isomorphic-dompurify";
import { advantages, chooseBI, content, faqDetails, hireCards, subhead1, subhead2, subhead3,jsonLdScript } from "../../data/web-development-data/laravelDevelopmentData.js";

const Header = dynamic(() => import("../../components/header/Header"),{ssr:false});
const SectionOne = dynamic(() => import("../../components/common/HireBanner"));
const Customer = dynamic(() => import("../../components/common/customer"));
const Experienced = dynamic(() =>
  import("../../components/Web-Development/Experienced")
);
const HireMarquee = dynamic(() =>
  import("../../components/common/HireMarquee")
);
const Advantage = dynamic(() =>
  import("../../components/Web-Development/Advantage.jsx")
);
const Hire = dynamic(() => import("../../components/common/Hire.jsx"));
const ChooseBrainInventory = dynamic(() =>
  import("../../components/common/CommonChooseBraininventory.jsx")
);
const Faqs = dynamic(() =>
  import("../../components/mobilePages/faqs.js"),{ssr:false}
);
const BlogArticle = dynamic(() =>
  import("../../components/common/BlogArticle"),{ssr:false}
);
const KeepInTouch = dynamic(() =>
  import("../../components/common/keepInTouch")
);
const LocateUs = dynamic(() => import("../../components/common/locateUs"));
const LetsKick = dynamic(() => import("../../components/common/LetsKick"));
const Footer = dynamic(() => import("../../components/common/Footer"),{ssr:false});


function LaravelDevelopment(props) {
 
  const sanitizedJsonLd = DOMPurify.sanitize(JSON.stringify(jsonLdScript));
  return (
    <>
      <Head>
        <title>
          Laravel Web Development Service Company USA | Brain Inventory
        </title>
        <meta
          name="description"
          content="Are you looking for a laravel development company? Look no further! Brain Inventory provides the best laravel development services for you. Contact us today!"
        />
        <meta
          property="og:description"
          content="Are you looking for a laravel development company? Look no further! Brain Inventory provides the best laravel development services for you. Contact us today!"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Laravel Web Development Service Company USA | Brain Inventory"
        />
        <meta
          property="og:url"
          content="https://braininventory.in/web-development/laravel-development-company"
        />
        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/preview/Braininventory_Laravel+preview+image.png"
        />
        <link
          rel="canonical"
          href="https://braininventory.in/web-development/laravel-development-company"
        />
        <link
          rel="preload"
          fetchpriority="high"
          href="https://braininventory.s3.us-east-2.amazonaws.com/images/mobile-app-development/Mask+Group+170+(1).png"
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
        <div className="">
          <Header />
          <SectionOne
            title="Laravel Web Development Company by"
            content={content}
            subhead="A Smarter Way to Build Customized Applications."
            btn="Contact Us!"
            image="https://braininventory.s3.us-east-2.amazonaws.com/images/mobile-app-development/Mask+Group+170+(1).png"
            alt="Laravel Development Company"
            type="php"
            unique={"brain inventory"}
          />
          <Customer />
          <Experienced
            title="Laravel Development"
            type="why"
            image="https://braininventory.s3.us-east-2.amazonaws.com/images/mobile-app-development/Mask+Group+171.png"
            alt="Laravel Development From Brain Inventory"
            para1={subhead1}
            para2={subhead2}
            para3={subhead3}
          />
          <HireMarquee title="Laravel" />
          <Advantage
            title="Laravel Development"
            desc="Laravel is a popular PHP web application framework that offers numerous benefits for developers and businesses alike. Here are some key advantages of Laravel development:"
            reasons={advantages}
          />{" "}
          <Hire
            title="Why Laravel Development from %Brain Inventory"
            card={hireCards}
          />
          <div className="container"></div>
          <ChooseBrainInventory
            reasons={chooseBI}
            alt="Laravel Development Company"
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
export default LaravelDevelopment;
