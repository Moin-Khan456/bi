import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import {
  approachDesc,
  approachPoints,
  faqDetails,
  keyDesc,
  keyFeatures,
  platformDesc,
  platformDevelopment,
  sectionFourDesc,
  sectionThreeCards,
  sectionTwoDesc,
  solutionList,
} from "../../data/industry-data/blockchainData.js";

const Header = dynamic(() => import("../../components/header/Header.js"), {
  ssr: false,
});
const SectionOne = dynamic(() =>
  import("../../components/SolutionBlockchain/SectionOne.jsx")
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
const SectionSix = dynamic(
  () => import("../../components/solution/SEO/SectionSix.jsx"),
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
);
const LocateUs = dynamic(() => import("../../components/common/locateUs.js"));
const LetsKick = dynamic(() => import("../../components/common/LetsKick.js"));
const Footer = dynamic(() => import("../../components/common/Footer.js"), {
  ssr: false,
});

function Blockchain(props) {
  return (
    <>
      <Head>
        <title>Blockchain IT Service & Solutions| Brain Inventory</title>
        <meta
          name="description"
          content="Brain Inventory provides the best blockchain IT services & solutions as per your requirements. Contact us to make your blockchain IT now."
        />
        <meta
          property="og:description"
          content="Brain Inventory provides the best blockchain IT services & solutions as per your requirements. Contact us to make your blockchain IT now."
        />
        <meta
          name="og:title"
          content="Blockchain IT Service & Solutions| Brain Inventory"
        />
        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/preview/Braininventory_blockchain.jpg"
        />
        <meta
          property="og:url"
          content="https://braininventory.in/industry/blockchain"
        />
        <link
          rel="canonical"
          href="https://braininventory.in/industry/blockchain"
        />
            <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: sanitizedJsonLd }}
        />
      </Head>
      <main>
        <Header />
        <section>
          <SectionOne />
          <SectionTwo
            className="lg:pb-32 bg-no-repeat bg-right brightness-[1.35] bg-[url('https://braininventory.s3.us-east-2.amazonaws.com/images/solution/grid-matrix.png')]"
            title="Blockchain IT Services & Solutions by Brain Inventory"
            head1="Shaping the Future of Blockchain"
            isHeadShow={false}
            description={sectionTwoDesc}
            lastSmall={true}
          />

          <SectionThree
            title="Blockchain Industry Insights"
            sectionDesc="Blockchain stands as a dynamic and transformative technological industry, reshaping industries through decentralization and transparency. Here are intriguing insights into the realm of blockchain:"
            sectionThreeCards={sectionThreeCards}
          />
          <TiltMarquee title="BLOCKCHAIN APP DEVELOPMENT ✦ BLOCKCHAIN APP DEVELOPMENT" />
          <SectionFour
            title="Solutions for Blockchain App Development"
            description={sectionFourDesc}
            solutionList={solutionList}
          />
          <SectionSix
            headAbove="Develop Your Own Blockchain App"
            subheadAbove="Inspired by the possibilities of these emerging platforms? Now is the perfect moment to step into the blockchain arena with your innovative concept. Never let the presence of existing players deter you. With the ideal blend of creativity and execution, your solution could pave the way for the next significant breakthrough."
            src="https://braininventory.s3.us-east-2.amazonaws.com/images/solution/blockchain/Mask+Group+275.png"
            alt="Blockchain Development Services"
            customClasses="w-[650px] min-w-[400px] max-w-[650px] !bottom-0"
            btn="BUILD YOUR BLOCKCHAIN APP"
            classText="lg:text-3xl"
            title="Ready to embark on this exciting journey? Click the button below to get started with blockchain app development."
          />
          <PlatformDevelopment
            data={platformDevelopment}
            subhead="WHY CHOOSE BRAIN INVENTORY FOR"
            head="BLOCKCHAIN DEVELOPMENT SERVICES"
            description={platformDesc}
          />
          <SectionNine
            brand="BLOCKCHAIN APP DEVELOPMENT       "
            pageCategory="BLOCKCHAIN APP DEVELOPMENT"
            pageCategoryAbbr="BLOCKCHAIN APP DEVELOPMENT       "
            slow={70000}
            fast={55000}
            src="https://braininventory.s3.us-east-2.amazonaws.com/images/solution/blockchain/blockchain.png"
            alt="Blockchain Development Company"
          />
          <PlatformSection
            data={keyFeatures}
            subhead="KEY FEATURES OF"
            head="BLOCKCHAIN APP DEVELOPMENT"
            description={keyDesc}
          />
          <Approach
            title="Our Approach to Custom Blockchain App Development"
            desc={approachDesc}
            points={approachPoints}
          />
          <SectionTen
            oneName={"VIRIFI"}
            oneVideo={
              "https://braininventory.s3.us-east-2.amazonaws.com/videos/virifi.mp4"
            }
            oneLink={"/project/virifi"}
            twoName={"MONEY FLOW"}
            twoVideo={
              "https://braininventory.s3.us-east-2.amazonaws.com/images/Industry+page+mockups/Blockchain/Dummy+1/1.mp4"
            }
            twoImage={
              "https://braininventory.s3.us-east-2.amazonaws.com/images/Industry+page+mockups/Blockchain/Dummy+1/Braininventory_blockchain+3.png"
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
export default Blockchain;
