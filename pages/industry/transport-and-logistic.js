import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { approachDesc, approachPoints, faqDetails, keyDesc, keyFeatures, platformDesc, platformDevelopment, sectionFiveDesc, sectionFiveTable, sectionFiveTableHead, sectionFourDesc, sectionThreeCards, sectionTwoDesc, solutionList } from "../../data/industry-data/transportData.js";
const Header = dynamic(() => import("../../components/header/Header.js"),{ssr:false});
const SectionOne = dynamic(() =>
  import("../../components/Solution-logistic/SectionOne.jsx")
);
const SectionTwo = dynamic(() =>
  import("../../components/Solution-logistic/SectionTwo.jsx")
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
  import("../../components/Solution-logistic/SectionFive.jsx")
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

function Logistic() {
  
  return (
    <>
      <Head>
        <title>
          Custom Transport And Logistic Software Development Services
        </title>
        <meta
          name="description"
          content="Brain Inventory offers best custom transport and logistic software development IT solutions to build a platform for you. Contact us now."
        />
        <meta
          property="og:description"
          content="Brain Inventory offers best custom transport and logistic software development IT solutions to build a platform for you. Contact us now."
        />
        <meta
          name="og:title"
          content="Custom Transport And Logistic Software Development Services"
        />
        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/preview/Braininventory_ecommerce.jpg"
        />
        <meta
          property="og:url"
          content="https://braininventory.in/industry/transport-and-logistic"
        />
        <link
          rel="canonical"
          href="https://braininventory.in/industry/transport-and-logistic"
        />
      </Head>
      <Header />
      <SectionOne />
      <SectionTwo
        isHeadShow={false}
        className="py-10 bg-right bg-no-repeat bg-[url('https://braininventory.s3.us-east-2.amazonaws.com/images/solution/grid-matrix.png')] w-full"
        head1="Streamlining Logistics Through Innovative Software Solutions"
        description={sectionTwoDesc}
      />
      <SectionThree
        title="Insights into the Transport & Logistics Industry"
        sectionDesc="The transport and logistics sector is rapidly evolving as technology continues to revolutionize its processes and infrastructure, resulting in a more efficient and eco-friendly industry."
        sectionThreeCards={sectionThreeCards}
        pointers={true}
      />{" "}
      <TiltMarquee title="TOP TRANSPORT & LOGISTICS SOLUTION DEVELOPMENT COMPANY" />
      <SectionFour
        title="Services for Transport & Logistic Software Development"
        description={sectionFourDesc}
        solutionList={solutionList}
      />
      <SectionFive
        head="Transport & Logistics"
        subhead="Tech Innovations Compared to Fedex"
        description={sectionFiveDesc}
        sectionFiveTableHead={sectionFiveTableHead}
        sectionFiveTable={sectionFiveTable}
        tableFooter={
          "Ready to enhance your transport and logistics operations with Brain Inventory, a leader in website and mobile development? Your journey to optimized transportation and logistics software begins with just a click."
        }
        alt="Educational Applications Development Services"
      />
      <SectionSix
        title="Ready to start your journey with a transformative education platform?"
        customClasses="max-w-[200px] lg:max-w-[700px] !w-[465px] bottom-0 right-0 left-10"
        btn="BUILD YOUR ED-TECH SOLUTION"
        src="https://braininventory.s3.us-east-2.amazonaws.com/images/solution/Transport+%26+logistics/Transport+%26+logistics/Mask+group.png"
      />
      <PlatformDevelopment
        data={platformDevelopment}
        subhead="WHY CHOOSE BRAIN INVENTORY FOR"
        head="Transport & Logistics software development"
        description={platformDesc}
      />
      <SectionNine
        brand="Transport & Logistics Industry Development        "
        pageCategory="Transport & Logistics Industry Development     "
        pageCategoryAbbr="Transport & Logistics Industry Development       "
        slow={70000}
        fast={55000}
        src="https://braininventory.s3.us-east-2.amazonaws.com/images/solution/Transport+%26+logistics/Transport+%26+logistics/Group+7190.png"
        alt={"Transportation and Logistics Software Development "}
      />
      <PlatformSection
        data={keyFeatures}
        subhead="KEY FEATURES OF"
        head="Transport & Logistics SOFTWARE  DEVELOPMENT"
        description={keyDesc}
      />
      <Approach
        title="How do we Approach Transport & Logistic Industry Development?"
        desc={approachDesc}
        points={approachPoints}
      />
      <SectionTen
        oneName={"ATLEE DAWSON"}
        oneVideo={
          "https://braininventory.s3.us-east-2.amazonaws.com/images/Industry+page+mockups/Logistics/Dummy+1/4.mp4"
        }
        oneImage={
          "https://braininventory.s3.us-east-2.amazonaws.com/images/Industry+page+mockups/Logistics/Dummy+1/logistics+mockup+-+1.png"
        }
        twoName={"ELITEFLOW NETWORK"}
        twoVideo={
          "https://braininventory.s3.us-east-2.amazonaws.com/images/Industry+page+mockups/Logistics/Dummy+2/3.mp4"
        }
        twoImage={
          "https://braininventory.s3.us-east-2.amazonaws.com/images/Industry+page+mockups/Logistics/Dummy+2/Logistics+mockup+-+2.png"
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
export default Logistic;
