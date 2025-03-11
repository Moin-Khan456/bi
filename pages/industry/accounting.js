import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { approachDesc, approachPoints, keyDesc, keyFeatures, platformDesc, platformDevelopment, sectionFiveDesc, sectionFiveTable, sectionFiveTableHead, sectionFourDesc, sectionThreeCards, sectionTwoDesc, solutionList,faqDetails } from "../../data/industry-data/accountingData.js";

const Header = dynamic(() => import("../../components/header/Header.js"),{ssr:false});
const SectionOne = dynamic(() =>
  import("../../components/SolutionAccounting/SectionOne.jsx")
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

function Accounting(props) {
    return (
    <>
      <Head>
        <title>
          Accounting Consulting Services & Solutions | Brain Inventory
        </title>
        <meta
          name="description"
          content="Brain Inventory provides accounting consulting services to help your account & finance. Contact us to make your accounting services now."
        />
        <meta
          property="og:title"
          content="Accounting Consulting Services & Solutions | Brain Inventory"
        />
        <meta
          property="og:description"
          content="Brain Inventory provides accounting consulting services to help your account & finance. Contact us to make your accounting services now."
        />
        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/preview/Braininventory_accounting+solution.jpg"
        />
        <meta
          rel="og:url"
          content="https://braininventory.in/industry/accounting"
        />
        <link
          rel="canonical"
          href="https://braininventory.in/industry/accounting"
        />
      </Head>

      <main>
        <Header />
        <section>
          <SectionOne />
          <SectionTwo
            className="container  pb-32 bg-no-repeat bg-right brightness-[1.35] bg-[url('https://braininventory.s3.us-east-2.amazonaws.com/images/solution/grid-matrix.png')]"
            title="Accounting IT Services & Solutions Provide by Brain Inventory"
            head1="Pioneering Accounting Digital Frontier"
            isHeadShow={false}
            description={sectionTwoDesc}
          />
          <SectionThree
            title="Accounting Industry Insights"
            sectionThreeCards={sectionThreeCards}
            tableFooter="These figures highlight the growing importance of digital platforms in modern accounting practices."
          />
          <TiltMarquee title="Accounting DEVELOPMENT SERVICES ✦ Accounting DEVELOPMENT SERVICES" />
          <SectionFour
            title="Solutions for Accounting Software Development"
            description={sectionFourDesc}
            solutionList={solutionList}
          />
          <SectionFive
            head="ACCOUNTING SOFTWARE DEVELOPMENT"
            subhead="COMPARED TO QUICKBOOKS"
            description={sectionFiveDesc}
            sectionFiveTableHead={sectionFiveTableHead}
            sectionFiveTable={sectionFiveTable}
            alt={"Accounting Software Development Services"}
            tableFooter="Are you prepared to begin this exciting transformation? Your digital future is just a click away. Start this fascinating journey now!."
          />
          <SectionSix
            head="Explore everything that the Brain Inventory team can do for you."
            title="Develop Your Own Accounting App"
            customClasses="w-[400px] !bottom-0"
            btn="BUILD YOUR ACCOUNTING APP"
            src="https://braininventory.s3.us-east-2.amazonaws.com/images/solution/accounting/Mask+group.png"
          />
          <PlatformDevelopment
            data={platformDevelopment}
            subhead="WHY CHOOSE BRAIN INVENTORY FOR"
            head="ACCOUNTING software DEVELOPMENT services"
            description={platformDesc}
          />
          <SectionNine
            brand="Accounting App Development        "
            pageCategory="Accounting App Development"
            pageCategoryAbbr="Accounting App Development       "
            slow={70000}
            fast={55000}
            alt={"Accounting Software Development  Company"}
            src="https://braininventory.s3.us-east-2.amazonaws.com/images/solution/accounting/office-workers-using-finance-graphs+1.png"
          />
          <PlatformSection
            data={keyFeatures}
            subhead="KEY FEATURES OF"
            head="ACCOUNTING SOFTWARE DEVELOPMENT"
            description={keyDesc}
          />
          <Approach
            title="How We Navigate Accounting App Development?"
            desc={approachDesc}
            points={approachPoints}
          />
          <SectionTen
            oneName={"Fatoura"}
            oneVideo={
              "https://braininventory.s3.us-east-2.amazonaws.com/images/Industry+page+mockups/Accounting/Fatoura/Fatoura.mp4"
            }
            oneLink={"/project/fatoura"}
            twoName={"NUMETRIC.WORK"}
            twoVideo={
              "https://braininventory.s3.us-east-2.amazonaws.com/images/Industry+page+mockups/Accounting/Numetric/Numetric.mp4"
            }
            twoLink={"/project/numetric"}
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
export default Accounting;
