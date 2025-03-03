import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("../../components/header/Header"), {
  ssr: false,
});
const LocateUs = dynamic(() => import("../../components/common/locateUs"));
const LetsKick = dynamic(() => import("../../components/common/LetsKick"));
const Footer = dynamic(() => import("../../components/common/Footer"), {
  ssr: false,
});
const Loader = dynamic(() => import("../../components/common/loader"));
const KeepInTouch = dynamic(() =>
  import("../../components/common/keepInTouch")
);
const Customer = dynamic(() => import("../../components/common/customer"));
const Advantage = dynamic(() =>
  import("../../components/Web-Development/Advantage.jsx")
);
const HireMarquee = dynamic(() =>
  import("../../components/common/HireMarquee")
);
const Experienced = dynamic(() =>
  import("../../components/Web-Development/Experienced")
);
const Hire = dynamic(() => import("../../components/common/Hire.jsx"));
import SectionOne from "../../components/common/HireBanner";
import Link from "next/link.js";
import {
  advantages,
  chooseBI,
  content,
  faqDetails,
  hireCards,
  subhead1,
  subhead2,
  subhead3,
} from "../../data/web-development-data/typescriptDevelopmentData.js";
const Faqs = dynamic(() => import("../../components/mobilePages/faqs.js"), {
  ssr: false,
});
const BlogArticle = dynamic(
  () => import("../../components/common/BlogArticle"),
  { ssr: false }
);
const ChooseBraininventory = dynamic(() =>
  import("../../components/common/CommonChooseBraininventory.jsx")
);

function TypeScriptDeveloper(props) {
  return (
    <>
      <Head>
        <title>
          TypeScript Development Company USA - TypeScript Develop Services
        </title>
        <meta
          name="description"
          content="Looking for type script development services? We are here to help you! Contact brain inventory for experienced type script developers, for quality services."
        />
        <meta
          name="og:description"
          content="Looking for type script development services? We are here to help you! Contact brain inventory for experienced type script developers, for quality services."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="TypeScript Development Company USA - TypeScript Develop Services"
        />
        <meta
          property="og:url"
          content="https://braininventory.in/web-development/typescript-development-services"
        />
        <link
          rel="canonical"
          href="https://braininventory.in/web-development/typescript-development-services"
        />
        <link
          rel="preload"
          fetchpriority="high"
          href="https://braininventory.s3.us-east-2.amazonaws.com/images/typeScript-development/Mask+Group+168.png"
          as="image"
        />
      </Head>
      {/*<Loader />*/}
      <div className="">
        <div>
          <Header />
          <SectionOne
            title="TypeScript Development Service Company by"
            content={content}
            subhead="A Smarter Way to Build Customized Applications."
            btn="Contact Us!"
            // developmentImage="https://braininventory.s3.us-east-2.amazonaws.com/images/Braininventory_PHP+development.png"
            image="https://braininventory.s3.us-east-2.amazonaws.com/images/typeScript-development/Mask+Group+168.png"
            alt="Python Development Company"
            type="php"
            unique={"brain inventory"}
          />
          <Customer />
          <Experienced
            title="TypeScript Development"
            type="why"
            image="https://braininventory.s3.us-east-2.amazonaws.com/images/typeScript-development/Mask+Group+169.png"
            alt="TypeScript Development Company"
            para1={subhead1}
            para2={subhead2}
            para3={subhead3}
          />
          <HireMarquee title="TypeScript" />
          <Advantage
            title="Custom TypeScript Development"
            desc="Custom TypeScript development offers several notable benefits that can greatly impact the success of a software project:"
            reasons={advantages}
          />{" "}
          <Hire
            title="Why to Choose %Brain Inventory% for Your TypeScript Development Needs?"
            card={hireCards}
          />
          <div className="container"></div>
          <ChooseBraininventory
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
export default TypeScriptDeveloper;
