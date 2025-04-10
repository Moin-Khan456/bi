import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Link from "next/link.js";
import { approachDesc, approachPoints, faqDetails, keyDesc, keyFeatures, platformDesc, platformDevelopment, sectionFiveDesc, sectionFiveTable, sectionFiveTableHead, sectionFourDesc, sectionThreeCards, sectionTwoDesc, solutionList, title } from "../../data/industry-data/marketplaceData.js";

const Header = dynamic(() => import("../../components/header/Header.js"),{ssr:false});
const SectionOne = dynamic(() =>
  import("../../components/SolutionMarketplace/SectionOne.jsx")
);
const SectionTwo = dynamic(() =>
  import("../../components/SolutionFitness/SectionTwo.jsx")
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
  import("../../components/SolutionFitness/SectionFive.jsx")
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

function MarketPlace() {
  
  return (
    <>
      <Head>
        <title>
          Marketplace Software Development Services | Brain Inventory
        </title>
        <meta
          name="description"
          content="Brain Inventory provides best marketplace software solutions to accelerate the digital transformation that improves customer engagement. Contact us today."
        />
        <meta
          property="og:description"
          content="Brain Inventory provides best marketplace software solutions to accelerate the digital transformation that improves customer engagement. Contact us today."
        />
        <meta
          name="og:title"
          content="Marketplace Software Development Services | Brain Inventory"
        />
        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/preview/Braininventory_marketplace.jpg"
        />
        <meta
          property="og:url"
          content="https://braininventory.in/industry/marketplace"
        />
        <link
          rel="canonical"
          href="https://braininventory.in/industry/marketplace"
        />
        <link
          rel="preload"
          fetchpriority="high"
          href="https://braininventory.s3.us-east-2.amazonaws.com/images/solution/marketplace/Group+7187.png"
          as="image"
           type="image/png"
        />
      </Head>

      <Header />
      <SectionOne />
      <SectionTwo
        className=" pb-32 bg-no-repeat bg-right brightness-[1.35] bg-[url('https://braininventory.s3.us-east-2.amazonaws.com/images/solution/grid-matrix.png')]"
        title="Marketplace IT Solutions & Services Provide by Brain Inventory"
        head1="Connecting Markets, Fueling Evolution"
        isHeadShow={false}
        description={sectionTwoDesc}
      />
      <SectionThree
        title="Marketplace Industry Insights"
        sectionDesc="In the rapidly evolving realm of online marketplaces, maintaining a competitive edge is paramount. Here, we offer a glimpse into the most current industry insights gathered from trusted data sources."
        sectionThreeCards={sectionThreeCards}
      />
      <TiltMarquee title="MARKETPLACE APP DEVELOPMENT" />
      <SectionFour
        title="Solutions for Marketplace Software Development"
        description={sectionFourDesc}
        solutionList={solutionList}
      />
      <SectionFive
        head="Marketplace Development"
        subhead="COMPARED TO Amazon"
        description={sectionFiveDesc}
        sectionFiveTableHead={sectionFiveTableHead}
        sectionFiveTable={sectionFiveTable}
        alt="Fitness App Development Company"
      />
      <SectionSix
        headAbove="Develop Your Own Marketplace App"
        subheadAbove="If you have a fresh idea and the drive to see it through, you could be behind the next big breakthrough."
        className="lg:text-[2rem] MonumentRegular font-light tracking-wide leading-high-force"
        customClasses="w-[400px] !bottom-0"
        title="Ready to start your exciting voyage? Click the button below."
        btn="BUILD YOUR MARKETPLACE APP"
        src="https://braininventory.s3.us-east-2.amazonaws.com/images/solution/marketplace/Mask+group.png"
      />

      <PlatformDevelopment
        data={platformDevelopment}
        subhead="WHY CHOOSE BRAIN INVENTORY FOR"
        head="Marketplace SOFTWARE DEVELOPMENT SERVICES"
        description={platformDesc}
      />
      <SectionNine
        brand="MARKETPLACE SOFTWARE DEVELOPMENT        "
        pageCategory="MARKETPLACE SOFTWARE DEVELOPMENT     "
        pageCategoryAbbr="MARKETPLACE SOFTWARE DEVELOPMENT       "
        slow={70000}
        fast={45000}
        src="https://braininventory.s3.us-east-2.amazonaws.com/images/solution/marketplace/Mask+group+(1).png"
        alt="Marketplace Software Development Services"
      />
      <PlatformSection
        data={keyFeatures}
        subhead="KEY FEATURES OF"
        head="Marketplace APP DEVELOPMENT"
        description={keyDesc}
      />
      <Approach title={title} desc={approachDesc} points={approachPoints} />
      <SectionTen
        oneName={"jeyab"}
        oneVideo={
          "https://braininventory.s3.us-east-2.amazonaws.com/images/Industry+page+mockups/Marketplace/Jeyab/Braininventory_marketplace+video.mp4"
        }
        oneLink={null}
        twoName={"SHOPMART"}
        twoVideo={
          "https://braininventory.s3.us-east-2.amazonaws.com/images/Industry+page+mockups/Marketplace/Dummy+1/Marketplace+1.mp4"
        }
        oneImage={
          "https://braininventory.s3.us-east-2.amazonaws.com/images/Industry+page+mockups/Marketplace/Jeyab/marketplace-2.png"
        }
        twoImage={
          "https://braininventory.s3.us-east-2.amazonaws.com/images/Industry+page+mockups/Marketplace/Dummy+1/Marketplace+mockup.png"
        }
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
export default MarketPlace;
