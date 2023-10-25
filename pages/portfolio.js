import React, {useState, useEffect} from "react";
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
        <title>Portfolio - Our Software Development Projects | Brain Inventory</title>
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
          content="https://d1u4arv5y5eda6.cloudfront.net/images/preview/Braininventory_custom+web+development+-+preview+image.jpg"
        />

        
        <link rel="canonical" href="https://braininventory.in/portfolio" />
      </Head>
      <Header />
      <div className="container project-bg pt-12">
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
