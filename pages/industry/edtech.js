import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { approachDesc, approachPoints, faqDetails, keyDesc, keyFeatures, platformDesc, platformDevelopment, sectionFiveDesc, sectionFiveTable, sectionFiveTableHead, sectionFourDesc, sectionThreeCards, sectionTwoDesc, solutionList } from "../../data/industry-data/edtechData.js";

const Header = dynamic(() => import("../../components/header/Header.js"),{ssr:false});
const SectionOne = dynamic(() =>
  import("../../components/SolutionEd-tech/SectionOne.jsx")
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
  import("../../components/SolutionFitness/SectionTen.jsx")
);
const Faqs = dynamic(() => import("../../components/mobilePages/faqs.js"),{ssr:false});
const BlogArticle = dynamic(() =>
  import("../../components/common/BlogArticle.jsx"),{ssr:false}
);
const KeepInTouch = dynamic(() => import("../../components/common/keepInTouch.js"),{ssr:false});
const LocateUs = dynamic(() => import("../../components/common/locateUs.js"));
const LetsKick = dynamic(() => import("../../components/common/LetsKick.js"));
const Footer = dynamic(() => import("../../components/common/Footer.js"),{ssr:false});

function EdTech() {
  
  return (
    <>
      <Head>
        <title>Education & Research IT Company | Brain Inventory</title>
        <meta
          name="description"
          content="Brain Inventory services offer education IT solutions to build a platform where the administration, faculty and students can collaborate easily. Call us!"
        />
        <meta
          property="og:description"
          content="Brain Inventory services offer education IT solutions to build a platform where the administration, faculty and students can collaborate easily. Call us!"
        />
        <meta
          name="og:title"
          content="Education & Research IT Company | Brain Inventory"
        />
        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/preview/Braininventory_Edtech.jpg"
        />
        <meta
          property="og:url"
          content="https://braininventory.in/industry/edtech"
        />
        <link
          rel="canonical"
          href="https://braininventory.in/industry/edtech"
        />
      </Head>
      {/*<Loader />*/}
      <Header />
      <SectionOne />
      <SectionTwo
        className="sm:pt-52 pb-32 bg-no-repeat bg-right brightness-[1.35] bg-[url('https://braininventory.s3.us-east-2.amazonaws.com/images/solution/grid-matrix.png')]"
        title="Education App Service Provide by Brain Inventory"
        isHeadShow={false}
        head1="Revolutionizing Ed-Tech Services"
        description={sectionTwoDesc}
      />
      <SectionThree
        title="Insights into the Education Industry"
        sectionDesc="Education technology is a constantly evolving field that is rapidly embracing technological advancements. Here are some fascinating insights about the education industry."
        sectionThreeCards={sectionThreeCards}
      />
      <TiltMarquee title="EdTech Software Development" />
      <SectionFour
        title="Solutions for Education Software Development"
        description={sectionFourDesc}
        solutionList={solutionList}
      />
      <SectionFive
        head="Educational APPLICATIONS"
        subhead="COMPARED TO Udemy"
        description={sectionFiveDesc}
        sectionFiveTableHead={sectionFiveTableHead}
        sectionFiveTable={sectionFiveTable}
        alt="Rise of Transportation and Logistics Management"
      />
      <SectionSix
        title="Ready to start your journey with a transformative education platform?"
        customClasses="max-w-[200px] lg:max-w-[400px] !w-[350px] bottom-0"
        btn="BUILD YOUR ED-TECH SOFTWARE"
        src="https://braininventory.s3.us-east-2.amazonaws.com/images/solution/Ed-Tech/Mask+group+(1).png"
      />
      <PlatformDevelopment
        data={platformDevelopment}
        subhead="WHY CHOOSE BRAIN INVENTORY FOR"
        head="Educational SOftware DEVELOPMENT"
        description={platformDesc}
      />
      <SectionNine
        brand="Educational SOftware DEVELOPMENT        "
        pageCategory="Educational SOftware DEVELOPMENT     "
        pageCategoryAbbr="Educational SOftware DEVELOPMENT       "
        slow={70000}
        fast={55000}
        alt={"Educational Software Development Services"}
        src="https://braininventory.s3.us-east-2.amazonaws.com/images/solution/Ed-Tech/office-workers-using-finance-graphs+1.png"
      />
      <PlatformSection
        data={keyFeatures}
        subhead="KEY FEATURES OF"
        head="Educational SOftware DEVELOPMENT"
        description={keyDesc}
      />
      <Approach
        title="Our Approach to Educational Software Development"
        desc={approachDesc}
        points={approachPoints}
      />
      <SectionTen
        oneName={"EDUCATION.NUMETRIC"}
        oneVideo={
          "https://braininventory.s3.us-east-2.amazonaws.com/images/Industry+page+mockups/Edtech/Education+Numetric/1.mp4"
        }
        oneImage={
          "https://braininventory.s3.us-east-2.amazonaws.com/images/Industry+page+mockups/Edtech/Education+Numetric/Ed+tech.png"
        }
        twoName={"EDUCATOR UNITED"}
        twoVideo={
          "https://braininventory.s3.us-east-2.amazonaws.com/images/Industry+page+mockups/Edtech/Dummy+1/3.mp4"
        }
        twoImage={
          "https://braininventory.s3.us-east-2.amazonaws.com/images/Industry+page+mockups/Edtech/Dummy+1/Ed+tech.png"
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
export default EdTech;
