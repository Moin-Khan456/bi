import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import DOMPurify from "isomorphic-dompurify";
import { chooseBI, content, EngageOptions, experienceCards, faqDetails, hireCards, jsonLdScript, keySkillsBrief, subhead1, subHeadPathways } from "../../data/web-development-data/salesforceDevelopmentData";

const Header = dynamic(() => import("../../components/header/Header"), {
  ssr: false,
});
const HireBanner = dynamic(() => import("../../components/common/HireBanner"));
const Customer = dynamic(() => import("../../components/common/customer"));
const AdvantageCustom = dynamic(() =>
  import("../../components/Web-Development/AdvantageCustom")
);
const HireMarquee = dynamic(() =>
  import("../../components/common/HireMarquee")
);
const BusinessPathways = dynamic(() =>
  import("../../components/Web-Development/BusinessPathways")
);
const KeySkill = dynamic(() => import("../../components/Hire/KeySkills"));
const Hire = dynamic(() => import("../../components/common/Hire"));
const ChooseBrainInventory = dynamic(() =>
  import("../../components/common/CommonChooseBraininventory")
);
const Faqs = dynamic(() => import("../../components/mobilePages/faqs"), {
  ssr: false,
});
const BlogArticle = dynamic(
  () => import("../../components/common/BlogArticle"),
  { ssr: false }
);
const KeepInTouch = dynamic(() =>
  import("../../components/common/keepInTouch")
);
const LocateUs = dynamic(() => import("../../components/common/locateUs"));
const LetsKick = dynamic(() => import("../../components/common/LetsKick"));
const Footer = dynamic(() => import("../../components/common/Footer"), {
  ssr: false,
});
function SalesforceDevelopment(props) {
 const sanitizedJsonLd = DOMPurify.sanitize(JSON.stringify(jsonLdScript));
  return (
    <>
      <Head>
        <title>
          Salesforce Development Services USA - Salesforce APP Development
        </title>
        <meta
          name="description"
          content="Looking for salesforce app development services? We are here to help you! Contact brain inventory for experienced salesforce app developers, for quality services."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Salesforce Development Services USA - Salesforce APP Development"
        />
        <meta
          property="og:description"
          content="Looking for salesforce app development services? We are here to help you! Contact brain inventory for experienced salesforce app developers, for quality services."
        />
        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/preview/Braininventory_salesforce.jpg"
        />{" "}
        <meta
          property="og:url"
          content="https://braininventory.in/web-development/salesforce-development-services"
        />
        <link
          rel="canonical"
          href="https://braininventory.in/web-development/salesforce-development-services"
        />
        <link
          rel="preload"
          fetchpriority="high"
          href="https://braininventory.s3.us-east-2.amazonaws.com/images/web-development/Mask+Group+162.png"
          as="image"
        />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: sanitizedJsonLd }}
        />
      </Head>

      <div className="relative">
        <Header></Header>
        <HireBanner
          subhead="A Smarter Way to Build Customized Applications."
          title="Salesforce App Development Company "
          content={content}
          unique={"brain inventory"}
          btn="Contact Us!"
          alt="Salesforce Development Company"
        />
        <Customer />
        {/* This component is added */}
        <AdvantageCustom
          title="Salesforce Development Services That We Offer"
          subhead={subhead1}
          reasons={experienceCards}
        />
        <HireMarquee title="Salesforce Development" />
        {/* This component is added */}
        <BusinessPathways
          heading="Elevating User Journeys with Our Enhanced %Salesforce Development Process%"
          subhead={subHeadPathways}
          EngageOptions={EngageOptions}
        />
        <KeySkill
          brief={keySkillsBrief}
          heading="Tools and Technologies% in Salesforce Development"
        />
        <Hire
          title="What Sets Our %Salesforce Development% Apart in Terms of Excellence"
          card={hireCards}
          subhead1={subhead1}
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
    </>
  );
}

export default SalesforceDevelopment;
