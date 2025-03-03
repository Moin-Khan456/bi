import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { approachDesc, approachPoints, faqDetails, keyDesc, keyFeatures, platformDesc, platformDevelopment, sectionFiveDesc, sectionFiveTable, sectionFiveTableHead, sectionFourDesc, sectionThreeCards, sectionTwoDesc, solutionList } from "../../data/industry-data/supplyChainData.js";
const Header = dynamic(() => import("../../components/header/Header.js"),{ssr:false});
const SectionOne = dynamic(() =>
  import("../../components/Solution-supplychain/SectionOne.jsx")
);
const SectionTwo = dynamic(() =>
  import("../../components/Solution-supplychain/SectionTwo.jsx")
);
const SectionThree = dynamic(() =>
  import("../../components/SolutionFitness/SectionThree.jsx")
);
const TiltMarquee = dynamic(() =>
  import("../../components/SolutionFitness/TiltMarquee.jsx")
);
const SectionFour = dynamic(() =>
  import("../../components/SolutionFitness/SectionFour.jsx")
);
const SectionFive = dynamic(() =>
  import("../../components/Solution-supplychain/SectionFive.jsx")
);
const SectionSix = dynamic(() =>
  import("../../components/SolutionAccounting/SectionSix.jsx"),{ssr:false}
);
const PlatformDevelopment = dynamic(() =>
  import("../../components/SolutionAccounting/SectionSlider.jsx")
);
const SectionNine = dynamic(() =>
  import("../../components/SolutionFitness/SectionNine.jsx")
);
const PlatformSection = dynamic(() =>
  import("../../components/SolutionAccounting/PlatformSection.jsx")
);
const Approach = dynamic(() =>
  import("../../components/SolutionFitness/Approach.jsx")
);
const SectionTen = dynamic(() =>
  import("../../components/SolutionFitness/SectionTen.jsx"),{ssr:false}
);
const Faqs = dynamic(() => import("../../components/mobilePages/faqs.js"),{ssr:false});
const BlogArticle = dynamic(() =>
  import("../../components/common/BlogArticle.jsx"),{ssr:false}
);
const KeepInTouch = dynamic(() => import("../../components/common/keepInTouch.js"),{ssr:false});
const LocateUs = dynamic(() => import("../../components/common/locateUs.js"));
const LetsKick = dynamic(() => import("../../components/common/LetsKick.js"));
const Footer = dynamic(() => import("../../components/common/Footer.js"),{ssr:false});

function SupplyChain() {
 
  return (
    <>
      <Head>
        <title>Best Supply Chain Management Software Service Company</title>
        <meta
          name="description"
          content="Brain Inventory services offer best supply chain management software IT solutions to build a platform where you can build customer loyalty. Call us!"
        />
        <meta
          property="og:description"
          content="Brain Inventory services offer best supply chain management software IT solutions to build a platform where you can build customer loyalty. Call us!"
        />
        <meta
          name="og:title"
          content="Best Supply Chain Management Software Service Company"
        />
        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/preview/Braininventory_ecommerce.jpg"
        />
        <meta
          property="og:url"
          content="https://braininventory.in/industry/supplychain"
        />
        <link
          rel="canonical"
          href="https://braininventory.in/industry/supplychain"
        />
      </Head>
      <Header />
      <SectionOne />
      <SectionTwo
        isHeadShow={false}
        className="sm:pt-20 pt-8 sm:pb-32 bg-right bg-no-repeat bg-[url('https://braininventory.s3.us-east-2.amazonaws.com/images/solution/grid-matrix.png')] w-full"
        head1="Revolutionizing Supply Chain Management with Innovation"
        description={sectionTwoDesc}
      />
      <SectionThree
        title="Insights into the Supply Chain Industry"
        sectionDesc="As we navigate the dynamic world of supply chain management, let's delve into some key points underpinning this industry. From innovative supply chain software to the emergence of cutting-edge supply chain logistics management systems, these points will provide a clear depiction of the industry's landscape in 2023."
        sectionThreeCards={sectionThreeCards}
        pointers={true}
      />
      <TiltMarquee title="Supply Chain Software Development" />
      <SectionFour
        title="Services for Supply Chain Software Development"
        description={sectionFourDesc}
        solutionList={solutionList}
      />
      <SectionFive
        head="Supply Chain"
        subhead="Tech Innovations Compared to DHL"
        description={sectionFiveDesc}
        sectionFiveTableHead={sectionFiveTableHead}
        sectionFiveTable={sectionFiveTable}
        alt="Educational Applications Development Services"
      />
      <SectionSix
        title="Ready to start your journey with a transformative education platform?"
        customClasses="max-w-[200px] lg:max-w-[700px] !w-[528px] bottom-0 right-0 left-10"
        btn="BUILD YOUR SUPPLYCHAIN SOLUTION"
        src="https://braininventory.s3.us-east-2.amazonaws.com/images/solution/supplychain/Mask+group.png"
      />
      <PlatformDevelopment
        data={platformDevelopment}
        subhead="WHY CHOOSE BRAIN INVENTORY FOR"
        head="supply chain software development"
        description={platformDesc}
      />
      <SectionNine
        brand="Top Supply Chain Solution Development Company        "
        pageCategory="Top Supply Chain Solution Development Company     "
        pageCategoryAbbr="Top Supply Chain Solution Development Company       "
        slow={70000}
        fast={55000}
        src="https://braininventory.s3.us-east-2.amazonaws.com/images/solution/supplychain/team-work-employees-warehouse+1.png"
        alt={"Supply Chain Industry Development Services"}
      />
      <PlatformSection
        data={keyFeatures}
        subhead="KEY FEATURES OF"
        head="Supply Chain  SOFTWARE  DEVELOPMENT"
        description={keyDesc}
      />
      <Approach
        title="How do we Approach Supply Chain Software  Development?"
        desc={approachDesc}
        points={approachPoints}
      />
      <SectionTen
        oneName={"ATLEE DAWSON"}
        oneVideo={
          "https://braininventory.s3.us-east-2.amazonaws.com/images/Industry+page+mockups/Supplychain/Dummy+1/Supplychain.mp4"
        }
        oneImage={
          "https://braininventory.s3.us-east-2.amazonaws.com/images/Industry+page+mockups/Supplychain/Dummy+1/Supply+chain+mockup+-+1.png"
        }
        twoName={"ELITEFLOW NETWORK"}
        twoVideo={
          "https://braininventory.s3.us-east-2.amazonaws.com/images/Industry+page+mockups/Supplychain/Dummy+2/Supply+%26+Chain.mp4"
        }
        twoImage={
          "https://braininventory.s3.us-east-2.amazonaws.com/images/Industry+page+mockups/Supplychain/Dummy+2/Supply+chain+mockup+-+2.png"
        }
        oneLink={null}
        twoLink={null}
        alt="Our Work"
      />
      <Faqs faq={faqDetails} />
      <hr />
      <BlogArticle />
      <KeepInTouch />
      <LocateUs/>
      <LetsKick />
      <hr />
      <Footer />
    </>
  );
}
export default SupplyChain;
