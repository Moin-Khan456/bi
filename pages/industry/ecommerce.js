import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Link from "next/link.js";
import { approachDesc, approachPoints, faqDetails, keyDesc, keyFeatures, platformDesc, platformDevelopment, sectionFiveDesc, sectionFiveTable, sectionFiveTableHead, sectionFourDesc, sectionThreeCards, sectionTwoDesc, solutionList } from "../../data/industry-data/ecommerceData.js";
import { faqdetails } from "../../data/industry-data/accountingData.js";
const Header = dynamic(() => import("../../components/header/Header.js"), {
  ssr: false,
});
const SectionOne = dynamic(() =>
  import("../../components/Solution-eCommerce/SectionOne.jsx")
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
const SectionSix = dynamic(
  () => import("../../components/SolutionAccounting/SectionSix.jsx"),
  { ssr: false }
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
const SectionTen = dynamic(
  () => import("../../components/SolutionFitness/SectionTen.jsx"),
  { ssr: false }
);
const Faqs = dynamic(() => import("../../components/mobilePages/faqs.js"), {
  ssr: false,
});
const BlogArticle = dynamic(
  () => import("../../components/common/BlogArticle.jsx"),
  { ssr: false }
);
const KeepInTouch = dynamic(
  () => import("../../components/common/keepInTouch.js"),
  { ssr: false }
);
const LocateUs = dynamic(() => import("../../components/common/locateUs.js"));
const LetsKick = dynamic(() => import("../../components/common/LetsKick.js"));
const Footer = dynamic(() => import("../../components/common/Footer.js"), {
  ssr: false,
});

function Ecommerce(props) {

  return (
    <>
      <Head>
        <title>
          Custom eCommerce Software Development Services | Brain Inventory
        </title>
        <meta
          name="description"
          content="Brain Inventory provides ecommerce software development services to help your products. Contact us to make your ecommerce software development services now."
        />
        <meta
          property="og:description"
          content="Brain Inventory is your trusted eCommerce development company with a skilled team specializing in creating state-of-the-art online store solutions."
        />
        <meta
          name="og:title"
          content="Custom eCommerce Software Development Services | Brain Inventory"
        />
        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/preview/Braininventory_ecommerce.jpg"
        />
        <meta
          property="og:url"
          content="https://braininventory.in/industry/ecommerce"
        />
        <link
          rel="canonical"
          href="https://braininventory.in/industry/ecommerce"
        />
      </Head>
      <Header />
      <SectionOne />
      <SectionTwo
        className="pt-20 pb-32 bg-right bg-no-repeat bg-[url('https://braininventory.s3.us-east-2.amazonaws.com/images/solution/grid-matrix.png')] w-full"
        title="Custom Ecommerce Software Development Services by Brain Inventory"
        isHeadShow={false}
        head1="Masterfully Crafting E-commerce Success Stories"
        description={sectionTwoDesc}
      />
      <SectionThree
        title="Insights into the E-commerce Industry"
        sectionDesc="Unleash your business potential with Brain Inventory's cutting-edge eCommerce services-"
        sectionThreeCards={sectionThreeCards}
        pointers={true}
      />
      <TiltMarquee title="E-COMERCE Software Development  E-COMMERCE Software Development" />
      <SectionFour
        title="Services for E-commerce Software Development"
        description={sectionFourDesc}
        solutionList={solutionList}
      />
      <SectionFive
        head="ECOMMERCE Tech Innovations"
        subhead="COMPARED TO Amazon"
        description={sectionFiveDesc}
        sectionFiveTableHead={sectionFiveTableHead}
        sectionFiveTable={sectionFiveTable}
        alt="Educational Applications Development Services"
      />
      <SectionSix
        title="Are you ready to start your ecommerce expedition with a leading ecommerce development company?"
        customClasses="max-w-[200px] lg:max-w-[450px] !w-[400px] bottom-0 right-24"
        btn="BUILD YOUR E-COMMERCE SOLUTION"
        src="https://braininventory.s3.us-east-2.amazonaws.com/images/solution/eCommerce/1.png"
      />
      <PlatformDevelopment
        data={platformDevelopment}
        subhead="WHY CHOOSE BRAIN INVENTORY FOR"
        head="ECOMMERCE DEVELOPMENT"
        description={platformDesc}
      />
      <SectionNine
        brand="ECOMMERCE DEVELOPMENT SOLUTION        "
        pageCategory="ECOMMERCE DEVELOPMENT SOLUTION     "
        pageCategoryAbbr="ECOMMERCE DEVELOPMENT SOLUTION       "
        slow={70000}
        fast={55000}
        src="https://braininventory.s3.us-east-2.amazonaws.com/images/solution/eCommerce/2.png"
        alt={"Ecommerce Industry Development Services"}
      />
      <PlatformSection
        data={keyFeatures}
        subhead="KEY FEATURES OF"
        head="ECOMMERCE SOFTWARE  DEVELOPMENT"
        description={keyDesc}
      />
      <Approach
        title="How do we Approach eCommerce Software  Development?"
        desc={approachDesc}
        points={approachPoints}
      />
      <SectionTen
        oneName={"SKYLINE DECOR"}
        oneVideo={
          "https://braininventory.s3.us-east-2.amazonaws.com/images/Industry+page+mockups/Ecommerce/Dummy+1/E+Comm.mp4"
        }
        oneImage={
          "https://braininventory.s3.us-east-2.amazonaws.com/images/Industry+page+mockups/Ecommerce/Dummy+1/Ecommerce+mockup+1.png"
        }
        twoName={"EDUCATOE UNITED"}
        twoVideo={
          "https://braininventory.s3.us-east-2.amazonaws.com/images/Industry+page+mockups/Ecommerce/Dummy+2/E+Comm2.mp4"
        }
        twoImage={
          "https://braininventory.s3.us-east-2.amazonaws.com/images/Industry+page+mockups/Ecommerce/Dummy+2/Ecommerce+mockup+2.png"
        }
        oneLink={null}
        twoLink={null}
        alt="Our Work"
      />
      <Faqs faq={faqDetails} />
      <hr />
      <BlogArticle />
      <KeepInTouch />
      <LocateUs />
      <LetsKick />
      <hr />
      <Footer />
    </>
  );
}
export default Ecommerce;
