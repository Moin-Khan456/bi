import React, { Suspense } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import DOMPurify from "isomorphic-dompurify";
import { advantages, card, chooseBI, content, faqDetails, hireCards, jsonLdScript, subhead1, subhead2, subhead3 } from "../../data/web-development-data/codeigniterData.js";

const Header = dynamic(() => import("../../components/header/Header.js"),{ssr:false});
const SectionOne = dynamic(()=> import("../../components/common/HireBanner.jsx"))
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
  import("../../components/common/ChooseBraininventory.jsx")
);
const Faqs = dynamic(() =>
  import("../../components/mobilePages/faqs.js"),{ssr:false}
);
const BlogArticle = dynamic(() =>
  import("../../components/common/BlogArticle.jsx"),{ssr:false}
);
const KeepInTouch = dynamic(() =>
  import("../../components/common/keepInTouch.js")
);
const LocateUs = dynamic(() => import("../../components/common/locateUs.js"));
const LetsKick = dynamic(() => import("../../components/common/LetsKick.js"));
const Footer = dynamic(() => import("../../components/common/Footer.js"),{ssr:false});

function CodeIgniterWebDevelopment(props) {
  const sanitizedJsonLd = DOMPurify.sanitize(JSON.stringify(jsonLdScript));
  return (
    <>
      <Head>
        <title>
          Codeigniter Web Development Service Company USA | Brain Inventory
        </title>
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Codeigniter Web Development Service Company USA | Brain Inventory"
        />
        <meta
          name="description"
          content="Brain Inventory gives you the best solutions for codeigniter web development services. Elevate your brand with a custom ci development company. Contact us!"
        />
        <meta
          property="og:description"
          content="Brain Inventory gives you the best solutions for codeigniter web development services. Elevate your brand with a custom ci development company. Contact us!"
        />
        <meta
          property="og:url"
          content="https://braininventory.in/web-development/codeigniter-web-development-services"
        />
        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/preview/Braininventory_preview+image+codeigniter+2.jpg"
        />

        <meta
          property="twitter:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/preview/Braininventory_preview+image+codeigniter+2.jpg"
        />
        <link
          rel="canonical"
          href="https://braininventory.in/web-development/codeigniter-web-development-services"
        />
        <link
          rel="preload"
          fetchpriority="high"
          href="https://braininventory.s3.us-east-2.amazonaws.com/images/Braininventory_codeigniter+1.png"
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
          <Header></Header>
          <SectionOne
            heading="A Smarter Way to Build Customized Applications."
            title="Codeigniter Web Development Services by"
            content={content}
            btn="Contact Us!"
            image="https://braininventory.s3.us-east-2.amazonaws.com/images/Braininventory_codeigniter+1.png"
            alt="CodeIgniter development company"
            type="php"
            unique={"brain inventory"}
            card={card}
          />
          <Customer />
          <Experienced
            title="CodeIgniter Development"
            type="why"
            image="https://braininventory.s3.us-east-2.amazonaws.com/images/Braininventory_codeigniter+2.png"
            alt="CodeIgniter Development Service"
            para1={subhead1}
            para2={subhead2}
            para3={subhead3}
          />
          <HireMarquee title="CodeIgniter Development Service" />
          <Advantage
            title="Codeigniter Web Development Services"
            subhead="CodeIgniter development offers a range of benefits that make it a popular choice for building web applications and websites:"
            reasons={advantages}
          />
          <Hire
            title="Why Choose %Brain Inventory% for CodeIgniter Development? "
            card={hireCards}
          />

          <ChooseBrainInventory
            reasons={chooseBI}
            alt="CodeIgniter development company"
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
export default CodeIgniterWebDevelopment;
