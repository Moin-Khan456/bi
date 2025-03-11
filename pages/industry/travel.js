import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Link from "next/link.js";
import { approachDesc, approachPoints, faqDetails, keyDesc, keyFeatures, platformDesc, platformDevelopment, sectionFiveDesc, sectionFiveTable, sectionFiveTableHead, sectionFourDesc, sectionThreeCards, sectionTwoDesc, solutionList } from "../../data/industry-data/travelData.js";

const Header = dynamic(() => import("../../components/header/Header.js"), {
  ssr: false,
});
const SectionOne = dynamic(() =>
  import("../../components/SolutionTravel/SectionOne.jsx")
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

function Travel() {
  
  return (
    <>
      <Head>
        <title>
          Travel Software Development Service Company | Brain Inventory
        </title>
        <meta
          name="description"
          content="Provide memorable experiences and boost customer loyalty with brain inventory custom software development for the travel industry. Give us a call!"
        />
        <meta
          property="og:description"
          content="Provide memorable experiences and boost customer loyalty with brain inventory custom software development for the travel industry. Give us a call!"
        />
        <meta
          name="og:title"
          content="Travel Software Development Service Company | Brain Inventory"
        />
        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/preview/Braininventory_Travel.jpg"
        />
        <meta
          property="og:url"
          content="https://braininventory.in/industry/travel"
        />
        <link
          rel="canonical"
          href="https://braininventory.in/industry/travel"
        />
        <link
          rel="preload"
          fetchpriority="high"
          href="https://braininventory.s3.us-east-2.amazonaws.com/images/travel_banner.webp"
          as="image"
        />
      </Head>
      {/*<Loader />*/}
      <main className="">
        <Header />
        <SectionOne />
        <section>
          <SectionTwo
            className="sm:pt-52 pt-8 pb-32 bg-no-repeat bg-right brightness-[1.35] bg-[url('https://braininventory.s3.us-east-2.amazonaws.com/images/solution/grid-matrix.png')]"
            title="Custom Travel Software Development Service by Brain Inventory"
            isHeadShow={false}
            head1="Providing Superior Travel Services Online"
            description={sectionTwoDesc}
          />
          <SectionThree
            title="Insights into the Travel Industry"
            sectionDesc="Travel is an ever-evolving industry that embraces technological advancements at a rapid pace. Here are some fascinating insights about the travel industry:"
            sectionThreeCards={sectionThreeCards}
          />
          <TiltMarquee title="Travel Software Development ✦ Travel Software Development" />
          <SectionFour
            title="Solutions for Travel Software Development For Travel Industry"
            description={sectionFourDesc}
            solutionList={solutionList}
          />
          <SectionFive
            head="Travel Tech Innovations"
            subhead="COMPARED TO Booking.com & Expedia"
            description={sectionFiveDesc}
            alt={"Travel Software Development Company"}
            sectionFiveTableHead={sectionFiveTableHead}
            sectionFiveTable={sectionFiveTable}
          />
          <SectionSix
            title="Ready to embark on your journey with a game-changing travel portal development company? "
            customClasses="max-w-[200px] lg:max-w-[600px] bottom-0"
            classText="!text-[2rem]"
            btn="BUILD YOUR TRAVEL-TECH SOFTWARE"
            src="https://braininventory.s3.us-east-2.amazonaws.com/images/solution/travel/Mask+group+(2).png"
          />

          <PlatformDevelopment
            data={platformDevelopment}
            subhead="WHY CHOOSE BRAIN INVENTORY FOR"
            head="Travel APP DEVELOPMENT"
            description={platformDesc}
          />
          <SectionNine
            brand="Travel Development Software"
            pageCategory="Travel Development Software"
            pageCategoryAbbr="Travel Development Software"
            slow={70000}
            fast={55000}
            alt={"Travel Software Development Services"}
            src="https://braininventory.s3.us-east-2.amazonaws.com/images/solution/travel/Mask+1.png"
          />
          <PlatformSection
            data={keyFeatures}
            subhead="KEY FEATURES OF"
            head="Travel Industry Software DEVELOPMENT"
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
              "https://braininventory.s3.us-east-2.amazonaws.com/images/Industry+page+mockups/Travel/RTC/RTC.mp4"
            }
            oneLink={"/project/revolution-travel-crm"}
            twoName={"OUTING"}
            twoVideo={
              "https://braininventory.s3.us-east-2.amazonaws.com/images/Industry+page+mockups/Travel/Dummy-1/travel.mp4"
            }
            twoImage={
              "https://braininventory.s3.us-east-2.amazonaws.com/images/Industry+page+mockups/Travel/Dummy-1/Travel.png"
            }
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
        </section>
      </main>
    </>
  );
}
export default Travel;
