import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { approachDesc, approachPoints, keyDesc, keyFeatures, platformDesc, platformDevelopment, sectionFiveDesc, sectionFiveTable, sectionFiveTableHead, sectionFourDesc, sectionThreeCards, sectionTwoDesc, solutionList,faqDetails } from "../../data/industry-data/healthcareData.js";

const Header = dynamic(() => import("../../components/header/Header.js"), {
  ssr: false,
});
const SectionOne = dynamic(() =>
  import("../../components/SolutionHealthcare/SectionOne.jsx")
);
const SectionTwo = dynamic(() =>
  import("../../components/SolutionFitness/SectionTwo.jsx")
);
const SectionThree = dynamic(() =>
  import("../../components/SolutionHealthcare/SectionThree.jsx")
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
  import("../../components/solution/SEO/SectionSix.jsx"),{ssr:false}
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
const Faqs = dynamic(() => import("../../components/mobilePages/faqs.js"), {
  ssr: false,
});
const BlogArticle = dynamic(() =>
  import("../../components/common/BlogArticle.jsx"),{ssr:false}
);
const KeepInTouch = dynamic(
  () => import("../../components/common/keepInTouch.js"),
  { ssr: false }
);
const LetsKick = dynamic(() => import("../../components/common/LetsKick.js"));
const Footer = dynamic(() => import("../../components/common/Footer.js"), {
  ssr: false,
});

function Healthcare(props) {

  return (
    <>
      <Head>
        <title>Healthcare IT Solutions & Services | Brain Inventory</title>
        <meta
          name="description"
          content="Brain Inventory provides healthcare IT services and solutions to improve patient care, and operations. Contact us to build your healthcare IT now."
        />
        <meta
          property="og:description"
          content="Brain Inventory provides healthcare IT services and solutions to improve patient care, and operations. Contact us to build your healthcare IT now."
        />
        <meta
          name="og:title"
          content="Healthcare IT Solutions & Services | Brain Inventory"
        />
        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/preview/Braininventory_healthcare.jpg"
        />
        <meta
          property="og:url"
          content="https://braininventory.in/industry/healthcare"
        />
        <link
          rel="canonical"
          href="https://braininventory.in/industry/healthcare"
        />
      </Head>

      <main>
        <Header />
        <section>
          <SectionOne />
          <SectionTwo
            className="pt-[3rem] sm:pb-32 pb-[3rem] bg-no-repeat bg-right brightness-[1.35] bg-[url('https://braininventory.s3.us-east-2.amazonaws.com/images/solution/grid-matrix.png')]"
            title="Health Care IT Services & Solutions by Brain Inventory"
            head1="Empowering Healthcare Digitally."
            isHeadShow={false}
            description={sectionTwoDesc}
          />
          <SectionThree
            title="Healthcare Industry Insights"
            sectionDesc="Healthcare is a rapidly evolving industry that is increasingly becoming technologically driven. Here are some captivating insights about the healthcare industry:"
            sectionThreeCards={sectionThreeCards}
          />
          <TiltMarquee title="HEALTHCARE THROUGH INNOVATION ✦ HEALTHCARE THROUGH INNOVATION" />
          <SectionFour
            title="Solutions for Healthcare App Development"
            description={sectionFourDesc}
            solutionList={solutionList}
          />
          <SectionFive
            head="HEALTHCARE APPLICATIONS"
            subhead="COMPARED TO WEBMD"
            description={sectionFiveDesc}
            sectionFiveTableHead={sectionFiveTableHead}
            sectionFiveTable={sectionFiveTable}
            alt="Healthcare Software Development Services"
          />
          <SectionSix
            headAbove="Develop Your Own Healthcare Software"
            subheadAbove="Are you inspired by the success stories of new healthcare platforms? There's no better time than now to bring your unique idea to life in the healthcare sector. Don't be discouraged by big names like WebMD. With the right vision and execution, your concept could be the next big thing!"
            src="https://braininventory.s3.us-east-2.amazonaws.com/images/solution/healthcare/Group+7140+(1).png"
            alt="Custom Healthcare App Development"
            customClasses="w-[400px] max-w-[400px]"
            btn="BUILD YOUR HEALTHCARE APP"
            classText="lg:text-3xl"
            title="Ready to start your journey with your custom healthcare app development? Just click the button below."
          />
          <PlatformDevelopment
            data={platformDevelopment}
            subhead="WHY CHOOSE BRAIN INVENTORY FOR"
            head="HEALTHCARE SOFTWARE DEVELOPMENT"
            description={platformDesc}
          />
          <SectionNine
            brand="HEALTHCARE SOFTWARE DEVELOPMENT       "
            pageCategory="HEALTHCARE SOFTWARE DEVELOPMENT    "
            pageCategoryAbbr="HEALTHCARE SOFTWARE DEVELOPMENT      "
            slow={70000}
            fast={55000}
            alt="Healthcare Software Development Services"
            src="https://braininventory.s3.us-east-2.amazonaws.com/images/solution/healthcare/jared-rice-NTyBbu66_SI-unsplash.png"
          />
          <PlatformSection
            data={keyFeatures}
            subhead="KEY FEATURES OF"
            head="CUSTOM HEALTHCARE SOFTWARE DEVELOPMENT"
            description={keyDesc}
          />
          <Approach
            title="How do we Approach Healthcare Software Development?"
            desc={approachDesc}
            points={approachPoints}
          />
          <SectionTen
            oneName={"BLOOMIA"}
            oneVideo={
              "https://braininventory.s3.us-east-2.amazonaws.com/images/Industry+page+mockups/Healthcare/Bloomia/Bloomia.mp4"
            }
            oneLink={"/project/bloomia"}
            twoName={"DOC ON CALL"}
            twoVideo={
              "https://braininventory.s3.us-east-2.amazonaws.com/images/Industry+page+mockups/Healthcare/Dummy+1/3.mp4"
            }
            twoImage={
              "https://braininventory.s3.us-east-2.amazonaws.com/images/Industry+page+mockups/Healthcare/Dummy+1/healthcare.png"
            }
            twoLink={null}
            alt="Our Work"
          />
          <Faqs faq={faqDetails} />
          <hr />
          <BlogArticle />
          <KeepInTouch />
          <LetsKick />
          <hr />
          <Footer />
        </section>
      </main>
    </>
  );
}
export default Healthcare;
