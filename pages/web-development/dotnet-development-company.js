import React, { Suspense } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import DOMPurify from "isomorphic-dompurify";
import { chooseBI, content, faqDetails, hireCards, jsonLdScript, reasons, subhead1, subhead2, subhead3 } from "../../data/web-development-data/dotnetDevelopmentData.js";

const Header = dynamic(() => import("../../components/header/Header"),{ssr:false});
import HireBanner from "../../components/common/HireBanner";
const Customer = dynamic(() => import("../../components/common/customer"));
const Experienced = dynamic(() =>
  import("../../components/Web-Development/Experienced")
);
const HireMarquee = dynamic(() =>
  import("../../components/common/HireMarquee")
);
const AdvantageVerticalCards = dynamic(() =>
  import("../../components/Hire/AdvantageVerticalCards.jsx")
);
const Hire = dynamic(() => import("../../components/common/Hire"));
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
function DotnetDevelopment(props) {
  const sanitizedJsonLd = DOMPurify.sanitize(JSON.stringify(jsonLdScript));
  return (
    <>
      <Head>
        <title>
          Dot Net Development Company USA - .NET Software Development
        </title>
        <meta
          name="description"
          content="Looking for a dot net software development company? Look no further! Contact brain inventory for experienced dot net developers, for quality services."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Dot Net Development Company USA - .NET Software Development"
        />
        <meta
          property="og:description"
          content="Looking for a dot net software development company? Look no further! Contact brain inventory for experienced dot net developers, for quality services."
        />
        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/preview/Braininventory_.NET+preview+image.jpg"
        />{" "}
        <meta
          property="og:url"
          content="https://braininventory.in/web-development/dotnet-development-company"
        />
        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/preview/Braininventory_Hire+Chatbot+Developers.jpg"
        />
        <meta
          property="og:url"
          content="https://braininventory.in/web-development/dotnet-development-company"
        />
        <link
          rel="canonical"
          href="https://braininventory.in/web-development/dotnet-development-company"
        />
        <link
          rel="preload"
          fetchpriority="high"
          href="https://braininventory.s3.us-east-2.amazonaws.com/images/web-development/Mask+Group+162.png"
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
        <div className="relative">
          <Header></Header>
          <HireBanner
            subhead="A Smarter Way to Build Customized Applications."
            title="Dot NET Software Development Company"
            content={content}
            unique={"brain inventory"}
            btn="Contact Us!"
            image="https://braininventory.s3.us-east-2.amazonaws.com/images/web-development/Mask+Group+162.png"
            alt="DotNet Development Company"
            webDev={true}
          />
          <Customer />
          <Experienced
            title=".NET Development"
            image="https://braininventory.s3.us-east-2.amazonaws.com/images/web-development/Group+6231.png"
            alt="dotnet development company"
            type="why"
            para1={subhead1}
            para2={subhead2}
            para3={subhead3}
          />
          <HireMarquee title="DotNet Development" />
          <AdvantageVerticalCards
            title=".NET Development"
            subhead=".NET development offers numerous benefits for businesses and developers:"
            reasons={reasons}
          />
          <Hire
            title="Why .NET Application Development from %Brain Inventory?"
            card={hireCards}
          />

          <ChooseBrainInventory
            reasons={chooseBI}
            alt="Hire Dedicated Laravel Developers"
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

export default DotnetDevelopment;
