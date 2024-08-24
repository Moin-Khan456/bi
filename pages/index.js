import React, { useState, useEffect, Suspense } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Header from "../components/header/Header.js";
import HomeSectionOne from "../components/home/HomeSection-1.js";

const HomeSectionThree = dynamic(() =>
  import("../components/home/HomeSection-3.js")
);
const HomeSectionFour = dynamic(() =>
  import("../components/home/HomeSection-4.js")
);
const HireDedicatedDeveloper = dynamic(() =>
  import("../components/common/HireDedicatedDeveloper.js")
);
const HomeSectionSix = dynamic(() =>
  import("../components/home/HomeSection-6.js")
);
const HomeSectionEight = dynamic(() =>
  import("../components/home/HomeSection-8.js")
);
const HomeSectionNine = dynamic(() =>
  import("../components/home/HomeSection-9.js")
);
const HomeSectionTen = dynamic(() =>
  import("../components/home/HomeSection-10.js")
);
const HomeSectionEleven = dynamic(() =>
  import("../components/home/HomeSection-11.js")
);
const KeepInTouch = dynamic(() =>
  import("../components/common/keepInTouch.js")
);
const LocateUs = dynamic(() => import("../components/common/locateUs.js"));
const LetsKick = dynamic(() => import("../components/common/LetsKick.js"));

const Footer = dynamic(() => import("../components/common/Footer.js"));

function Home() {
  return (
    <>
      <Head>
        <title>
          Custom Software Development Company | Staff Augmentation - Brain
          Inventory
        </title>
        <meta
          name="google-site-verification"
          content="/google0f5d76b9c6c1d8b3.html"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Custom Software Development Company | Staff Augmentation - Brain Inventory"
        />
        <meta
          property="og:description"
          content="Brain Inventory is a leading custom Software Development Company offering Staff Augmentation, IT Consulting, Software, Web, and App Development Services across the globe."
        />
        <meta property="og:url" content="https://braininventory.in" />
        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/home_preview.png"
        />
        <meta name="p:domain_verify" content="/pinterest-551ed.html" />
        <meta name="p:domain_verify" content="/googlec59025ad92b5fc4c.html" />
        <meta
          name="description"
          content="Brain Inventory is a leading custom Software Development Company offering Staff Augmentation, IT Consulting, Software, Web, and App Development Services across the globe."
        />
        <meta property="twitter:creator" content=" Brain Inventory " />
        <meta property="twitter:site" content=" BrainInventory" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Brain Inventory Pvt Ltd",
              alternateName: "Brain Inventory",
              url: "https://braininventory.in",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate:
                    "https://braininventory.in/?s={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Brain Inventory",
              url: "https://braininventory.in",
              logo: "https://braininventory.in/_next/image?url=https%3A%2F%2Fbraininventory.s3.us-east-2.amazonaws.com%2Fimages%2Fmain%2FLogobg.png&w=256&q=75",
              sameAs: [
                "https://www.facebook.com/BrainInventoryIndia/",
                "https://www.instagram.com/braininventory_com/",
                "https://www.youtube.com/channel/UCmBF3Fito6xxYWyomJ-ittw",
                "https://in.linkedin.com/company/braininventory",
              ],
            }),
          }}
        />

        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Brain Inventory",
              image:
                "https://braininventory.in/_next/image?url=https%3A%2F%2Fbraininventory.s3.us-east-2.amazonaws.com%2Fimages%2Fmain%2FLogobg.png&w=256&q=75",
              "@id": "",
              url: "https://braininventory.in",
              telephone: "+1(206)6533419",
              address: {
                "@type": "PostalAddress",
                streetAddress: "720 Seneca St Ste 107",
                addressLocality: "Seattle",
                addressRegion: "WA",
                postalCode: "98101",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 47.6094787,
                longitude: -122.3301694,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                ],
                opens: "10:30",
                closes: "19:30",
              },
              sameAs: [
                "https://www.facebook.com/BrainInventoryIndia/",
                "https://www.instagram.com/braininventory_com/",
                "https://www.youtube.com/channel/UCmBF3Fito6xxYWyomJ-ittw",
                "https://in.linkedin.com/company/braininventory",
              ],
            }),
          }}
        />

        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What services does your IT company provide?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We offer a wide range of IT services, including software development, web development, mobile app development, cloud computing, cybersecurity, IT consulting, and more.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How do I request a quote or estimate for a project?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "You can request a quote by visiting our website and filling out the contact form or by reaching out to our sales team. We'll get back to you with an estimate based on your project requirements.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What technologies and programming languages do you specialize in?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We specialize in the JavaScript family technologies like ReactJs, AngularJS, MEAN, MERN. Additionally, we also do Blockchain and AI-based development.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can you handle both small and large-scale projects?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We work with projects of all sizes. Whether you need a small website or a complex enterprise application, we have the expertise to handle your project effectively.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How do you ensure the security of my project or data?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We take security seriously and follow industry best practices to protect your project and data. Our team implements security measures, encryption, and conducts regular security audits to ensure data safety. Plus, we implement the required compliances.",
                  },
                },
              ],
            }),
          }}
        />

        {/* Product Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "Product",
              name: "Custom Software Development Company | Staff Augmentation - Brain Inventory",
              image:
                "https://braininventory.in/_next/image?url=https%3A%2F%2Fbraininventory.s3.us-east-2.amazonaws.com%2Fimages%2Fmain%2FLogobg.png&w=256&q=75",
              description:
                "Brain Inventory is a leading custom Software Development Company offering Staff Augmentation, IT Consulting, Software, Web, and App Development Services across the globe.",
              brand: {
                "@type": "Brand",
                name: "Brain Inventory",
              },
              offers: {
                "@type": "AggregateOffer",
                url: "https://braininventory.in/web-development/custom-web-development",
                priceCurrency: "USD",
                lowPrice: "500",
                highPrice: "2000",
                offerCount: "1",
              },
            }),
          }}
        />

        <link
          rel="icon"
          href="https://braininventory.s3.us-east-2.amazonaws.com/images/logo/Braininventory_logo.png"
        />
        <link rel="canonical" href="https://braininventory.in" />
      </Head>
      <Suspense fallback={null}>
        <main className="relative">
          <Header />
          <section className="container">
            <HomeSectionOne />
            <HomeSectionThree />
            <HomeSectionFour />
            <HireDedicatedDeveloper />
          </section>
          <HomeSectionSix />
          <section className="container flex justify-center">
            <HomeSectionEight />
          </section>
          <HomeSectionNine />

          <section className="container">
            <HomeSectionTen />
            <HomeSectionEleven />
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
export default Home;
