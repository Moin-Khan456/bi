import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { approachDesc, approachPoints, faqDetails, keyDesc, keyFeatures, platformDesc, platformDevelopment, sectionFiveDesc, sectionFiveTable, sectionFiveTableHead, sectionFourDesc, sectionThreeCards, sectionTwoDesc, solutionList } from "../../data/industry-data/crmData.js";

const Header = dynamic(() => import("../../components/header/Header.js"), {
  ssr: false,
});
const SectionOne = dynamic(() =>
  import("../../components/SolutionCRM/SectionOne.jsx")
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

function CrmDevelopment(props) {
  
  return (
    <>
      <Head>
        <title>
          Custom CRM Software Development Services | Brain Inventory
        </title>
        <meta
          name="description"
          content="Brain Inventory provides the best CRM development service & solutions as per your requirements. Contact us to make your custom crm now."
        />
        <meta
          property="og:description"
          content="Brain Inventory provides the best CRM development service & solutions as per your requirements. Contact us to make your custom crm now."
        />
        <meta
          name="og:title"
          content="Custom CRM Software Development Services | Brain Inventory"
        />
        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/preview/Braininventory_crm.jpg"
        />
        <meta
          property="og:url"
          content="https://braininventory.in/industry/crm"
        />
        <link rel="canonical" href="https://braininventory.in/industry/crm" />
      </Head>
      <main>
        <Header />
        <SectionOne />
        <section>
          <SectionTwo
            classText="lg:w-[75%]"
            hideSubText="hidden"
            className="sm:pt-52 pt-8 pb-32 bg-no-repeat bg-right brightness-[1.35] bg-[url('https://braininventory.s3.us-east-2.amazonaws.com/images/solution/grid-matrix.png')]"
            title="Custom CRM Development Services by Brain Inventory"
            head1="Enabling Success through CRM"
            isHeadShow={false}
            description={sectionTwoDesc}
            notBreakable={true}
          />
          <SectionThree
            title="Insights into the CRM Development"
            sectionDesc="CRM technology is experiencing a significant surge in popularity as businesses increasingly adopt digital software. These software are not only enhancing customer interactions but also revolutionising the way companies manage and leverage their data."
            sectionThreeCards={sectionThreeCards}
            tableFooter="Embrace the transformative potential of CRM with Brain Inventory. Discover new perspectives and cultivate customer relations that drive success."
          />
          <TiltMarquee title="CRM SOFTWARE DEVELOPMENT  CRM SOFTWARE DEVELOPMENT  CRM SOFTWARE DEVELOPMENT" />
          <SectionFour
            title="software for CRM Software Development"
            description={sectionFourDesc}
            solutionList={solutionList}
          />
          <SectionFive
            head="CRM App Development"
            subhead="COMPARED TO Salesforce"
            description={sectionFiveDesc}
            sectionFiveTableHead={sectionFiveTableHead}
            sectionFiveTable={sectionFiveTable}
            alt="CRM Software Development Services"
          />
          <SectionSix
            headAbove="Develop Your Own CRM App"
            subheadAbove="Are you ready to step onto the path of innovation with a transformative CRM platform?"
            title="Your exciting journey awaits just a click away. Embrace the future of customer relationship management today!"
            customClasses="max-w-[200px] lg:max-w-[600px] bottom-0"
            classText="lg:text-[2rem] "
            btn="BUILD YOUR CRM SOLUTION"
            src="https://braininventory.s3.us-east-2.amazonaws.com/images/solution/crm/MFM+1.png"
          />

          <PlatformDevelopment
            data={platformDevelopment}
            subhead="WHY CHOOSE BRAIN INVENTORY FOR"
            head="CRM SOFTWARE DEVELOPMENT"
            description={platformDesc}
          />
          <SectionNine
            brand="crm SOFTWARE development"
            pageCategory="crm SOFTWARE development"
            pageCategoryAbbr="crm SOFTWARE development"
            slow={70000}
            fast={55000}
            src="https://braininventory.s3.us-east-2.amazonaws.com/images/solution/travel/Mask+1.png"
            alt="CRM Software Development Company"
          />
          <PlatformSection
            data={keyFeatures}
            subhead="KEY FEATURES OF"
            head="CUSTOM CRM SOFTWARE DEVELOPMENT"
            description={keyDesc}
          />
          <Approach
            title="How do we Approach CRM App Development?"
            desc={approachDesc}
            points={approachPoints}
          />
          <SectionTen
            oneName={"MY FIT MANTRA"}
            oneVideo={
              "https://braininventory.s3.us-east-2.amazonaws.com/images/Industry+page+mockups/CRM/MFM/MFM.mp4"
            }
            oneLink={"/project/my-fit-mantra"}
            twoName={"revolution travel crm"}
            twoVideo={
              "https://braininventory.s3.us-east-2.amazonaws.com/images/Industry+page+mockups/CRM/RTC/RTC.mp4"
            }
            twoLink={"/project/revolution-travel-crm"}
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
        </section>
      </main>
    </>
  );
}
export default CrmDevelopment;
