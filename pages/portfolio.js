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
        <title>
          Portfolio - Our Software Development Projects | Brain Inventory
        </title>
        <meta
          name="description"
          content="Explore our diverse portfolio of cutting-edge software solutions. Discover how our software development company has delivered innovation and excellence to clients worldwide."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Portfolio - Our Software Development Projects | Brain Inventory"
        />
        <meta
          property="og:description"
          content="Explore our diverse portfolio of cutting-edge software solutions. Discover how our software development company has delivered innovation and excellence to clients worldwide."
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
              "@type": "CollectionPage",
              name: "Brain Inventory Portfolio",
              url: "https://braininventory.in/portfolio",
              description:
                "Explore our portfolio showcasing our diverse range of projects.",
              publisher: {
                "@type": "Organization",
                name: "Brain Inventory",
                logo: {
                  "@type": "ImageObject",
                  url: "https://braininventory.in/_next/image?url=https%3A%2F%2Fbraininventory.s3.us-east-2.amazonaws.com%2Fimages%2Fmain%2FLogobg.png&w=256&q=75",
                },
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
