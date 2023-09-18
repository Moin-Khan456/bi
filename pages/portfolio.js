import React from "react";
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
        <title>Brain Inventory | Software Development Services</title>
        <meta
          name="description"
          content="Brain Inventory is a leading iOS app development company that offers custom iOS app development services for entrepreneurs & small businesses. Contact us today."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content=" Custom iOS 
Development | Angular App Development Company"
        />
        <meta
          property="og:description"
          content=" Brain 
Inventory is the leading iOS Development Company 
with a top-notch iOS Developers team having 
profound expertise in iOS Development. Contact us 
today.   "
        />
        <meta
          property="og:url"
          content=" 
https://braininventory.in/"
        />
        <meta
          property="og:image"
          content="https://d1u4arv5y5eda6.cloudfront.net/images/preview/Braininventory_custom+web+development+-+preview+image.jpg"
        />

        <meta property="twitter:domain" content="https://braininventory.in/ " />
        <meta
          property="twitter:image"
          content="https://d1u4arv5y5eda6.cloudfront.net/images/Logobg.png"
        />
        <meta
          property="twitter:title"
          content=" Custom iOS 
Development | Angular App Development Company"
        />
        <meta
          property="twitter:description"
          content=" Brain Inventory is 
the leading iOS Development Company with a top-notch 
iOS Developers team having profound expertise in iOS 
Development. Contact us today. "
        />
        <meta property="twitter:creator" content=" BrainInventory " />
        <meta property="twitter:site" content="BrainInventory" />
        <meta property="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://braininventory.in/portfolio" />
      </Head>
      <Header />
      <div className="container project-bg pt-12">
        <div>
          <ProjectSectionOne />
          <ProjectCards />
          <ProjectSectionTwo />
          <BlogArticle />
          <ContactForm className="pl-24" />
          <LocateUs />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default HireAangularJsDeveloper;
