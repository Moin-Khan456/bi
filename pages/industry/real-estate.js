import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { approachDesc, approachPoints, faqDetails, keyDesc, keyFeatures, platformDesc, platformDevelopment, sectionFiveDesc, sectionFiveTable, sectionFiveTableHead, sectionFourDesc, sectionThreeCards, sectionTwoDesc, solutionList } from "../../data/industry-data/realStateData.js";

const Header = dynamic(() => import("../../components/header/Header.js"),{ssr:false});
const SectionOne = dynamic(() =>
  import("../../components/SolutionRealEstate/SectionOne.jsx")
);
const SectionTwo = dynamic(() =>
  import("../../components/SolutionRealEstate/SectionTwo.jsx")
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
  import("../../components/SolutionRealEstate/SectionFive.jsx")
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

function Travel(props) {
 
  return (
    <>
      <Head>
        <title>Best Real Estate Software Development Service Company</title>
        <meta
          name="description"
          content="Brain Inventory offers best real estate software development IT services & solutions to build a unique platform for you. Contact us now."
        />
        <meta
          property="og:description"
          content="Brain Inventory offers best real estate software development IT services & solutions to build a unique platform for you. Contact us now."
        />
        <meta
          name="og:title"
          content="Best Real Estate Software Development Service Company"
        />
        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/preview/Braininventory_Travel.jpg"
        />
        <meta
          property="og:url"
          content="https://braininventory.in/industry/real-estate"
        />
        <link
          rel="canonical"
          href="https://braininventory.in/industry/real-estate"
        />
        <link
          rel="preload"
          fetchpriority="high"
          href="https://braininventory.s3.us-east-2.amazonaws.com/images/travel_banner.webp"
          as="image"
        />
      </Head>
      <main className="">
        <Header />
        <SectionOne />
        <section>
          <SectionTwo
            className="pt-12 pb-12 bg-no-repeat bg-right brightness-[1.35]"
            head1="Unlocking the Future of the Real Estate Industry"
            isHeadShow={false}
            description={sectionTwoDesc}
          />

          <SectionThree
            title="Insights into the Real Estate Industry"
            sectionDesc="Looking into the rapidly evolving landscape of the real estate industry, one can't help but notice the transformative effect technology has had on this robust sector. The traditional methods of selling and buying property have been shaken up, subtly yet significantly, by the advent of real estate software and mobile app development:"
            sectionThreeCards={sectionThreeCards}
            pointers={true}
          />
          <TiltMarquee title="Real Estate Solution Development Company ✦ Real Estate Solution Development Company" />
          <SectionFour
            title="Services for Real Estate Software Development"
            description={sectionFourDesc}
            solutionList={solutionList}
          />
          <SectionFive
            head="Real Estate Applications"
            subhead="in Comparison to Zillow"
            description={sectionFiveDesc}
            alt={"Real Estate Software Development Company"}
            sectionFiveTableHead={sectionFiveTableHead}
            sectionFiveTable={sectionFiveTable}
            tableFooter={
              "We specialize in various real estate solutions including real estate app development, real estate software development, offering a range of services from real estate mobile app development to real estate software solution and more."
            }
          />
          <SectionSix
            title="Ready to start your journey with a transformative real estate tech platform?"
            customClasses="max-w-[200px] lg:max-w-[600px] bottom-0"
            classText="!text-[2rem]"
            btn="BBUILD YOUR Real Estate-Tech SOLUTION"
            src={null}
          />

          <PlatformDevelopment
            data={platformDevelopment}
            subhead="WHY CHOOSE BRAIN INVENTORY FOR"
            head="Real Estate SOFTWARE Development?"
            description={platformDesc}
          />
          <SectionNine
            brand="Real Estate Solution Development Company"
            pageCategory="Real Estate Solution Development Company"
            pageCategoryAbbr="Real Estate Solution Development Company"
            slow={70000}
            fast={55000}
            alt={"Real Estate Solution Development Company"}
            src="https://braininventory.s3.us-east-2.amazonaws.com/images/solution/Real+estate+assets/Real+estate+assets/Group+7190.png"
          />
          <PlatformSection
            data={keyFeatures}
            subhead="KEY FEATURES OF"
            head="Transport & Logistics Software DEVELOPMENT"
            description={keyDesc}
          />
          <Approach
            title="How we Approach Travel App Development?"
            desc={approachDesc}
            points={approachPoints}
          />
          <SectionTen
            oneName={"revolution travel crm"}
            oneVideo={
              "https://braininventory.s3.us-east-2.amazonaws.com/images/Industry+page+mockups/Real-estate/Braininventory_real+estate+mockup+video+1.mp4"
            }
            oneLink={null}
            oneImage={
              "https://braininventory.s3.us-east-2.amazonaws.com/images/Industry+page+mockups/Real-estate/Real+estate+1.png"
            }
            twoName={"OUTING"}
            twoVideo={
              "https://braininventory.s3.us-east-2.amazonaws.com/images/Industry+page+mockups/Real-estate/Braininventory_real+estate+mockup+video+2.mp4"
            }
            twoImage={
              "https://braininventory.s3.us-east-2.amazonaws.com/images/Industry+page+mockups/Real-estate/Real+estate+2.png"
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
        </section>
      </main>
    </>
  );
}
export default Travel;
