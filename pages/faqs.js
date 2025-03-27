import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { devTechServicesFaqs, itStaffAugmentation, onStaffFaqs } from "../data/faqData.js";

const Header = dynamic(() => import("../components/header/Header.js"),{ssr:false});
const SectionOne = dynamic(() => import("../components/faqs/sectionOne.jsx"));
const Faq = dynamic(() => import("../components/mobilePages/faqs.js"),{ssr:false});
const BlogArticle = dynamic(() => import("../components/common/BlogArticle.jsx"),{ssr:false});
const KeepInTouch = dynamic(() =>
  import("../components/common/keepInTouch.js")
);
const LocateUs = dynamic(() => import("../components/common/locateUs.js"));
const LetsKick = dynamic(() => import("../components/common/LetsKick.js"));
const Footer = dynamic(() => import("../components/common/Footer.js"),{ssr:false});

export default function Faqs() {
  const [faqsType, setFaqsType] = useState("Development/Technologies/Services");

  return (
    <>
      <Head>
        <title>
          Frequently Asked Questions | Brain Inventory Support & Information
        </title>
        <meta
          name="description"
          content="Find answers to common questions about Brain Inventory, including services, support, and more. Explore our FAQ page for more information and resources."
        />
        <meta
          property="og:description"
          content="Find answers to common questions about Brain Inventory, including services, support, and more. Explore our FAQ page for more information and resources."
        />
        <meta
          name="og:title"
          content="Frequently Asked Questions | Brain Inventory Support & Information"
        />
        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/FAQ.png"
        />
        <meta property="og:url" content="https://braininventory.in/faqs" />
        <link rel="canonical" href="https://braininventory.in/faqs" />
      </Head>
      <main className="">
        <Header />
        <SectionOne setFaqsType={setFaqsType} faqsType={faqsType} />
        <section>
          {faqsType === "On-Site" && <Faq faq={onStaffFaqs} />}
          {faqsType === "IT Staff Augmentation" && (
            <Faq faq={itStaffAugmentation} />
          )}
          {faqsType === "Development/Technologies/Services" && (
            <Faq faq={devTechServicesFaqs} />
          )}
          <hr />
          <BlogArticle />
          <KeepInTouch/>
          <LocateUs />
          <LetsKick />
          <hr />
          <Footer />
        </section>
      </main>
    </>
  );
}
