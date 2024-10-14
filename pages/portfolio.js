import React, { useState, useEffect } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("../components/header/Header"));
const Footer = dynamic(() => import("../components/common/Footer"));
const ProjectSectionOne = dynamic(() =>
  import("../components/portfolio/projectSectionOne.jsx")
);
const ProjectSectionTwo = dynamic(() =>
  import("../components/portfolio/projectSectionTwo.jsx")
);
const ProjectCards = dynamic(() =>
  import("../components/portfolio/projectCard.jsx")
);
const BlogArticle = dynamic(() => import("../components/common/BlogArticle"));
const ContactForm = dynamic(() => import("../components/common/ContactForm"));
const LocateUs = dynamic(() => import("../components/portfolio/LocateUs"));

function HireAangularJsDeveloper(props) {
  return (
    <>
      <Head>
        <title>Showcase of Brain Inventory Projects | Portfolio</title>
        <meta
          name="description"
          content="Explore our portfolio to see a collection of successful projects and innovative solutions by Brain Inventory. Discover how we transform ideas into reality."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Showcase of Brain Inventory Projects | Portfolio"
        />
        <meta
          property="og:description"
          content="Explore our portfolio to see a collection of successful projects and innovative solutions by Brain Inventory. Discover how we transform ideas into reality."
        />

        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/preview/Braininventory_custom+web+development+-+preview+image.jpg"
        />

        <link rel="canonical" href="https://braininventory.in/portfolio" />

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
              name: "Custom Software Development Service USA - Software Development Company",
              image:
                "https://braininventory.in/_next/image?url=https%3A%2F%2Fbraininventory.s3.us-east-2.amazonaws.com%2Fimages%2Fmain%2FLogobg.png&w=256&q=75",
              description:
                "At brain inventory we provide custom software development services solutions for your new ideas. We are a trusted development company. Contact us today.",
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
      </Head>
      <Header />
      <div className="container  pt-12">
        <ProjectSectionOne />
        <ProjectCards />
        <ProjectSectionTwo />
        <BlogArticle />
        <ContactForm className="pl-24" />
        <LocateUs />
        <Footer />
      </div>
    </>
  );
}

export default HireAangularJsDeveloper;
