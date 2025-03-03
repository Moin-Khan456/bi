import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { approachDesc, approachPoints, faqDetails, keyDesc, keyFeatures, platformDesc, platformDevelopment, sectionFiveDesc, sectionFiveTable, sectionFiveTableHead, sectionFourDesc, sectionThreeCards, sectionTwoDesc, solutionList, title } from "../../data/industry-data/fitnessData.js";
const Header = dynamic(() => import("../../components/header/Header.js"), {
  ssr: false,
});
const SectionOne = dynamic(() =>
  import("../../components/SolutionFitness/SectionOne.jsx")
);
const SectionTwo = dynamic(() =>
  import("../../components/SolutionFitness/SectionTwo.jsx")
);
const SectionThree = dynamic(() =>
  import("../../components/SolutionFitness/SectionThree.jsx")
);
const TiltMarquee = dynamic(
  () => import("../../components/SolutionFitness/TiltMarquee.jsx")
);
const SectionFour = dynamic(() =>
  import("../../components/SolutionFitness/SectionFour.jsx")
);
const SectionFive = dynamic(() =>
  import("../../components/SolutionFitness/SectionFive.jsx")
);
const SectionSix = dynamic(
  () => import("../../components/solution/SEO/SectionSix.jsx"),
  { ssr: false }
);
const PlatformDevelopment = dynamic(
  () => import("../../components/SolutionAccounting/SectionSlider.jsx")
);
const SectionNine = dynamic(
  () => import("../../components/SolutionFitness/SectionNine.jsx"),
);
const PlatformSection = dynamic(
  () => import("../../components/SolutionAccounting/PlatformSection.jsx")
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

function Fitness() {
  
  return (
    <>
      <Head>
        <title>Fitness IT Services & Solutions | Brain Inventory</title>
        <meta
          name="description"
          content="Brain Inventory provides fitness IT services and solutions to improve fitness, and work. Contact us to improve your fitness in IT now."
        />
        <meta
          name="og:title"
          content="Fitness IT Services & Solutions | Brain Inventory"
        />
        <meta
          name="og:description"
          content="Brain Inventory provides fitness IT services and solutions to improve fitness, and work. Contact us to improve your fitness in IT now."
        />
        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/preview/Braininventory_fitness.jpg"
        />
        <meta
          property="og:url"
          content="https://braininventory.in/industry/fitness"
        />
        <link
          rel="canonical"
          href="https://braininventory.in/industry/fitness"
        />
      </Head>
      <main>
        <Header />
        <SectionOne />
        <SectionTwo
          className="pt-[3rem] pb-[3rem] bg-no-repeat bg-right brightness-[1.35] bg-[url('https://braininventory.s3.us-east-2.amazonaws.com/images/solution/grid-matrix.png')]"
          title="Fitness IT Service & Solutions Provider by Brain Inventory"
          isHeadShow={false}
          head1="Reimagining Fitness with Innovation"
          description={sectionTwoDesc}
          lastSmall={true}
        />
        <SectionThree
          title="Fitness Industry Insights"
          sectionDesc=" Fitness is an ever-evolving realm that is rapidly embracing
        technological advancements. Here are some captivating insights about the
        fitness industry:"
          sectionThreeCards={sectionThreeCards}
        />
        <TiltMarquee title="FITNESS APP DEVELOPMENT" />
        <SectionFour
          title="Solutions for Fitness Mobile App Development"
          description={sectionFourDesc}
          solutionList={solutionList}
        />
        <SectionFive
          head="FITNESS APPLICATIONS COMPARED"
          subhead="TO NIKE TRAINING CLUB"
          description={sectionFiveDesc}
          sectionFiveTableHead={sectionFiveTableHead}
          sectionFiveTable={sectionFiveTable}
          alt="Fitness App Development Company"
        />
        <SectionSix
          headAbove="Develop Your Own Fitness Software"
          subheadAbove="Are you inspired by the success of these emerging platforms? There's no better time than now to step into the realm of social media with your own unique concept. Don't be daunted by the presence of Facebook and others."
          src="https://braininventory.s3.us-east-2.amazonaws.com/images/solution/fitness/Group+7140.png"
          alt="Custom Fitness App Development Services"
          customClasses="w-[390px] !bottom-0"
          btn="BUILD YOUR FITNESS APP"
          classText="lg:text-3xl"
          title="Ready to start your journey with a transformative fitness platform? Your adventure is just a click away on the button below."
        />

        <PlatformDevelopment
          data={platformDevelopment}
          subhead="WHY CHOOSE BRAIN INVENTORY FOR"
          head="FITNESS SOFTWARE DEVELOPMENT"
          description={platformDesc}
        />
        <SectionNine
          brand="FITNESS SOFTWARE DEVELOPMENT       "
          pageCategory="FITNESS SOFTWARE DEVELOPMENT    "
          pageCategoryAbbr="FITNESS SOFTWARE DEVELOPMENT      "
          slow={70000}
          fast={45000}
          src="https://braininventory.s3.us-east-2.amazonaws.com/images/solution/fitness/woman-training-with-barbell-shoulders.png"
          alt="Fitness App Development Company"
        />
        <PlatformSection
          data={keyFeatures}
          subhead="KEY FEATURES OF"
          head="FITNESS APP DEVELOPMENT"
          description={keyDesc}
        />
        <Approach title={title} desc={approachDesc} points={approachPoints} />
        <SectionTen
          oneName={"MY FIT MANTRA"}
          oneVideo={
            "https://braininventory.s3.us-east-2.amazonaws.com/images/Industry+page+mockups/Fitness/MFM/MFM.mp4"
          }
          oneLink={"/project/my-fit-mantra"}
          twoName={"GET FIT"}
          twoVideo={
            "https://braininventory.s3.us-east-2.amazonaws.com/images/Industry+page+mockups/Fitness/Dummy+1/2.mp4"
          }
          twoImage={
            "https://braininventory.s3.us-east-2.amazonaws.com/images/Industry+page+mockups/Fitness/Dummy+1/Fitness.png"
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
      </main>
    </>
  );
}
export default Fitness;
