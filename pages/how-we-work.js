import React, { useState, useEffect, Suspense } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("../components/header/Header"));
const WorkBanner = dynamic(() => import("../components/work/workBanner.js"));
const Work = dynamic(() => import("../components/work/work.js"));
const HomeSectionSix = dynamic(() =>
  import("../components/home/HomeSection-6.js")
);
const ChooseApp = dynamic(() =>
  import("../components/mobilePages/chooseApp.js")
);
const LanguageTool = dynamic(() =>
  import("../components/work/languageTool.js")
);
const Newsletter = dynamic(() => import("../components/career/Newsletter"));
const Engagementmodal = dynamic(() =>
  import("../components/mobilePages/engagementModal.js")
);
const Faqs = dynamic(() => import("../components/mobilePages/faqs.js"));
const Footer = dynamic(() => import("../components/common/Footer"));
const KeepInTouch = dynamic(() => import("../components/common/keepInTouch"));
const LetsKick = dynamic(() => import("../components/common/LetsKick"));
const LocateUs = dynamic(() => import("../components/common/locateUs"));
const Loader = dynamic(() => import("../components/common/loader"));

export default function HowWeWork() {
  const faq = [
    {
      id: 1,
      title: "What services does your IT company provide?",
      description: "We offer a wide range of IT services, including software development, web development, mobile app development, cloud computing, cybersecurity, IT consulting, and more."
    },
    {
      id: 2,
      title: "How do I request a quote or estimate for a project?",
      description: "You can request a quote by visiting our website and filling out the contact form or by reaching out to our sales team. We'll get back to you with an estimate based on your project requirements."
    },
    {
      id: 3,
      title: "What technologies and programming languages do you specialize in?",
      description: "We specialize in the JavaScript family technologies like ReactJs, AngularJS, MEAN, MERN. Additionally, we also do Blockchain and AI-based development."
    },
    {
      id: 4,
      title: "Can you handle both small and large-scale projects?",
      description: "We work with projects of all sizes. Whether you need a small website or a complex enterprise application, we have the expertise to handle your project effectively."
    },
    {
      id: 5,
      title: "How do you ensure the security of my project or data?",
      description: "We take security seriously and follow industry best practices to protect your project and data. Our team implements security measures, encryption, and conducts regular security audits to ensure data safety. Plus, we implement the required compliances."
    },
    {
      id: 6,
      title: "What is your project development process like?",
      description: "Our project development process typically includes requirements gathering, researching, wireframing/design, development, testing, deployment, and ongoing support. We follow agile methodologies to deliver high-quality results on time."
    },
    {
      id: 7,
      title: "How long does it take to complete a typical project?",
      description: "The project timeline can vary based on its complexity and scope. We'll provide you with a detailed timeline during the project estimation phase or discovery phase."
    },
    {
      id: 8,
      title: "Do you offer post-launch support and maintenance?",
      description: "Yes, we provide post-launch support, maintenance, and updates to ensure your project remains secure and up to date."
    },
    {
      id: 9,
      title: "Can I see examples of your previous work or client testimonials?",
      description: "You can view our portfolio on our website, and we can provide you with client testimonials upon request."
    },
    {
      id: 10,
      title: "What sets your IT company apart from others in the industry?",
      description: "Guaranteed on-time delivery, multi-level support, in-depth industry research to suggest and implement user-centric features are a few to name among many others."
    }
  ];
  return (
    <>
      <Head>
        <title>Custom Web App And Software Development – How We Work</title>
        <meta
          name="description"
          content="Brain Inventory is a Culture rich custom Software Development Company that helps business turn their idea into reality. We create custom-tailored solutions to your needs."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content=" Custom Web App And Software Development – How We Work"
        />
        <meta
          property="og:description"
          content="Brain Inventory is a Culture rich custom Software Development Company that helps business turn their idea into reality. We create custom-tailored solutions to your needs. "
        />
        <meta
          property="og:image"
          content="https://d1u4arv5y5eda6.cloudfront.net/images/Braininventory_how+we+work.jpg"
        />

        <meta
          property="og:url"
          content="https://braininventory.in/how-we-work"
        />
        <link rel="icon" href="https://braininventory.s3.us-east-2.amazonaws.com/images/logo/Braininventory_logo.png" />
        <script
          async
          src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js"
          crossOrigin="anonymous"
        ></script>
        <script
          async
          src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/debug.addIndicators.min.js"
          crossOrigin="anonymous"
        ></script>
        <script
          async
          src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/animation.gsap.min.js"
          crossOrigin="anonymous"
        ></script>
        <link rel="canonical" href="https://braininventory.in/how-we-work" />
      </Head>
      <Suspense fallback={<Loader />}>
        <main>
          <Header />
          <section className="relative   container">
            <WorkBanner />
            <Work />
          </section>
          <HomeSectionSix />
          <section className="container">
            <ChooseApp />
            <LanguageTool />
            <Engagementmodal />
            <Faqs faq={faq} />
            <KeepInTouch />
            <LocateUs />
            <LetsKick />
          </section>
          <Footer />
        </main>
      </Suspense>
    </>
  );
}
