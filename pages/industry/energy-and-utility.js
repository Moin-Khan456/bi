import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Link from "next/link.js";
import { approachDesc, approachPoints, faqDetails, keyDesc, keyFeatures, platformDesc, platformDevelopment, sectionFiveDesc, sectionFiveTable, sectionFiveTableHead, sectionFourDesc, sectionThreeCards, sectionTwoDesc, solutionList } from "../../data/industry-data/energyData.js";
const Header = dynamic(() => import("../../components/header/Header.js"), {
  ssr: false,
});
const SectionOne = dynamic(() =>
  import("../../components/Solution-energy/SectionOne.jsx")
);
const SectionTwo = dynamic(() =>
  import("../../components/Solution-energy/SectionTwo.jsx")
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

function Energy(props) {

  return (
    <>
      <Head>
        <title>
          Energy And Utility Software Development Services | Brain Inventory
        </title>
        <meta
          name="description"
          content="Provide memorable experiences and boost customer loyalty with brain inventory energy & utility software development services. Give us a call!"
        />
        <meta
          property="og:description"
          content="Provide memorable experiences and boost customer loyalty with brain inventory energy & utility software development services. Give us a call!"
        />
        <meta
          name="og:title"
          content="Energy And Utility Software Development Services | Brain Inventory"
        />
        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/preview/Braininventory_energy+%26+utility.jpg"
        />
        <meta
          property="og:url"
          content="https://braininventory.in/industry/energy-and-utility"
        />
        <link
          rel="canonical"
          href="https://braininventory.in/industry/energy-and-utility"
        />
        <link
          rel="preload"
          fetchpriority="high"
          href="https://braininventory.s3.us-east-2.amazonaws.com/images/energy_utility_banner.webp"
          as="image"
        />
      </Head>
      <Header />
      <SectionOne />
      <SectionTwo
        className="pt-20 pb-32 bg-right bg-no-repeat bg-[url('https://braininventory.s3.us-east-2.amazonaws.com/images/solution/grid-matrix.png')] w-full"
        title="Energy & Utility Software Development Services by Brain Inventory"
        head1="Innovative energy solutions for a sustainable future"
        isHeadShow={false}
        description={sectionTwoDesc}
      />
      <SectionThree
        title="Insights into the Energy & Utility Industry"
        sectionDesc={
          <>
            {`In the rapidly evolving Energy and Utility industry, you require not
            just ordinary software, but energy software that can keep up with an
            industry that's always set on turbo-speed. At`}{" "}
            <Link href="/" className="text-[#2186ff]">
              Brain Inventory
            </Link>
            , we innovate and engineer softwares that is equipped to support
            your dynamic needs, optimized for the varied aspects of the energy
            and utility businesses.
          </>
        }
        sectionThreeCards={sectionThreeCards}
        pointers={true}
      />
      <TiltMarquee title="Energy & Utility Solution Development  Energy & Utility Solution Development" />
      <SectionFour
        title="Services for Energy & Utility Software Development"
        description={sectionFourDesc}
        solutionList={solutionList}
      />
      <SectionFive
        head="Energy & Utility Tech Innovations"
        subhead="COMPARED TO NextEra Energy"
        description={sectionFiveDesc}
        sectionFiveTableHead={sectionFiveTableHead}
        sectionFiveTable={sectionFiveTable}
        alt="Energy and Utility Applications Development Services"
      />
      <SectionSix
        headAbove="Develop Your Own Energy & Utility App"
        subheadAbove="Ready to optimize your energy and utility operations with Brain Inventory, a leader in energy and utilities development? "
        title="Your journey towards leading-edge energy software solutions, that are personalized to your needs, begins here."
        customClasses="max-w-[200px] lg:max-w-[450px] !w-[400px] bottom-0 right-24"
        btn="BUILD YOUR ENERGY & UTILITY SOLUTION"
        src="https://braininventory.s3.us-east-2.amazonaws.com/images/solution/energy_industry/1.png"
      />
      <PlatformDevelopment
        data={platformDevelopment}
        subhead="WHY CHOOSE BRAIN INVENTORY FOR"
        head="ENERGY & UTILITY SOFTWARE DEVELOPMENT"
        description={platformDesc}
      />
      <SectionNine
        brand="Energy & Utility SOFTWARE Development Company        "
        pageCategory="Energy & Utility SOFTWARE Development Company     "
        pageCategoryAbbr="Energy & Utility SOFTWARE Development Company       "
        slow={70000}
        fast={65000}
        alt={"Energy & Utility Software Development Company"}
        src="https://braininventory.s3.us-east-2.amazonaws.com/images/solution/energy_industry/business-person-planning-alternative-energies+1.png"
      />
      <PlatformSection
        data={keyFeatures}
        subhead="KEY FEATURES OF"
        head=" Energy & Utility SOFTWARE Development"
        description={keyDesc}
      />
      <Approach
        title="How do we Approach Energy & Utility Software Development?"
        desc={approachDesc}
        points={approachPoints}
      />
      <SectionTen
        oneName={"SAVE WORLD"}
        oneVideo={
          "https://braininventory.s3.us-east-2.amazonaws.com/images/Industry+page+mockups/Energy+%26+Utility/Dummy+1/Energy+utility+2.mp4"
        }
        oneImage={
          "https://braininventory.s3.us-east-2.amazonaws.com/images/Industry+page+mockups/Energy+%26+Utility/Dummy+1/Energy+%26+utility+mockup+-+1.png"
        }
        twoName={"SOLARIX"}
        twoVideo={
          "https://braininventory.s3.us-east-2.amazonaws.com/images/Industry+page+mockups/Energy+%26+Utility/Dummy+2/Energy+Utility.mp4"
        }
        twoImage={
          "https://braininventory.s3.us-east-2.amazonaws.com/images/Industry+page+mockups/Energy+%26+Utility/Dummy+2/Energy+%26+utility+mockup+-+2.png"
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
export default Energy;
