import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Marquee from "react-easy-marquee";
import Link from "next/link.js";
import {
  approachDesc,
  approachPoints,
  faqDetails,
  keyDesc,
  keyFeatures,
  platformDesc,
  platformDevelopment,
  sectionFiveDesc,
  sectionFiveTable,
  sectionFiveTableHead,
  sectionFourDesc,
  solutionList,
} from "../../data/solution-data/social-networkData.js";

const Header = dynamic(() => import("../../components/header/Header"),{ssr:false});
const SectionOne = dynamic(() =>
  import("../../components/solution/SEO/SectionOne.jsx")
);
const SectionTwo = dynamic(() =>
  import("../../components/solution/SEO/SectionTwo.jsx")
);
const SectionThree = dynamic(() =>
  import("../../components/solution/SEO/SectionThree.jsx")
);
const SectionFour = dynamic(() =>
  import("../../components/SolutionFitness/SectionFour.jsx")
);
const SectionFive = dynamic(() =>
  import("../../components/SolutionFitness/SectionFive.jsx")
);
const SectionSix = dynamic(() =>
  import("../../components/solution/SEO/SectionSix.jsx")
);
const PlatformDevelopment = dynamic(() =>
  import("../../components/SolutionAccounting/SectionSlider")
);
const SectionNine = dynamic(() =>
  import("../../components/SolutionFitness/SectionNine.jsx")
);
const PlatformSection = dynamic(() =>
  import("../../components/SolutionAccounting/PlatformSection.jsx")
);
const Approach = dynamic(() =>
  import("../../components/solution/SEO/Approach.jsx")
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
const LocateUs = dynamic(() => import("../../components/common/locateUs"));
const LetsKick = dynamic(() => import("../../components/common/LetsKick.js"));
const Footer = dynamic(() => import("../../components/common/Footer"),{ssr:false});

function SocialMedia(props) {
  return (
    <>
      <Head>
        <title>
          Social Media Marketing Services - Boost Your Online Presence
        </title>
        <meta
          name="description"
          content="Improve your brand's visibility with our social media marketing services. Learn ways to connect with your audience, gain more followers, and boost sales."
        />
        <meta
          property="og:description"
          content="Improve your brand's visibility with our social media marketing services. Learn ways to connect with your audience, gain more followers, and boost sales."
        />
        <meta
          name="og:title"
          content="Social Media Marketing Services - Boost Your Online Presence"
        />
        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/preview/Braininventory_social+media+marketing.jpg"
        />
        <meta
          property="og:url"
          content="https://braininventory.in/solution/social-networking-development-company"
        />
        <link
          rel="canonical"
          href="https://braininventory.in/solution/social-networking-development-company"
        />
      </Head>
      <div className="relative ">
        <Header />
        <div className="pt-1">
          <SectionOne />
          <SectionTwo
            className="md:pt-0 sm:pt-0 lg:pt-52 pb-32 bg-no-repeat bg-right brightness-[1.35] lg:bg-[url('https://braininventory.s3.us-east-2.amazonaws.com/images/solution/grid-matrix.png')] filter invert"
            title="Effective Social Media Marketing Strategies by Brain Inventory"
            isHeadShow={false}
            subTitle="App Development Company"
            head1="Fostering connections, catalyzing change."
            description={
              <>
                At{" "}
                <Link href="/" className="text-[#2186ff]">
                  Brain Inventory
                </Link>{" "}
                {`,we're more than just a social networking app development
                company. We're a forward-thinking technology partner with a
                mission to empower industries with innovative social solutions.
                Our expertise lies in delivering tailor-made apps that foster
                communication and engagement, transforming the way industries
                connect and collaborate. With Brain Inventory, you gain a
                strategic partner who understands the nuances of the social
                industry and can help you harness the power of digital
                technologies to drive growth and change`}
              </>
            }
          />
          <SectionThree />
          <Marquee duration={20000} background="#1b48de">
            <h2 className="text-5xl text-primaryBg MonumentBold">
              SEO ✦ MARKETING ✦ BRANDING ✦ SEO ✦ MARKETING ✦ BRANDING ✦ SEO ✦
              MARKETING ✦ BRANDING ✦
            </h2>
          </Marquee>
          <SectionFour
            title="Solutions for Social Media App Development"
            description={sectionFourDesc}
            solutionList={solutionList}
          />
          <SectionFive
            head="SOCIAL MEDIA APPLICATION"
            subhead="COMPARED TO FACEBOOK"
            alt="Social Networking Development Company"
            description={sectionFiveDesc}
            sectionFiveTableHead={sectionFiveTableHead}
            sectionFiveTable={sectionFiveTable}
          />
          <SectionSix
            headAbove="Develop Your Own Social Solution"
            subheadAbove="Are you inspired by the success of these emerging platforms? There's no better time than now to step into the realm of social media with your own unique concept. Don't be daunted by the presence of Facebook and others."
            src="https://braininventory.s3.us-east-2.amazonaws.com/images/solution/Mask+Group+166.png"
            alt="Custom Software Development Company | Application Development Company"
            customClasses="w-[450px] !bottom-0 max-w-[500px]"
            btn="BUILD YOUR SOCIAL MEDIA APP"
            classText="lg:text-3xl"
            title="With the right idea and execution, your platform could be the next big thing. Click the button below to  start your journey."
          />
          <PlatformDevelopment
            data={platformDevelopment}
            subhead="WHY CHOOSE BRAIN INVENTORY FOR"
            head="SOCIAL MEDIA APP DEVELOPMENT"
            description={platformDesc}
          />
          <SectionNine
            brand="BRANDING"
            pageCategory="SOCIAL MEDIA MARKETING"
            pageCategoryAbbr="SEO"
            slow={22000}
            fast={15000}
            src="https://braininventory.s3.us-east-2.amazonaws.com/images/solution/Group+7033.png"
            alt="social networking app development company"
          />
          <PlatformSection
            data={keyFeatures}
            subhead="KEY FEATURES OF"
            head="SOCIAL MEDIA APP DEVELOPMENT"
            description={keyDesc}
          />
          <Approach
            title="How we Approach Social Media App Development?"
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
          <BlogArticle />
          <KeepInTouch />
          <LocateUs />
          <LetsKick />
          <hr />
          <Footer />
        </div>
      </div>
    </>
  );
}
export default SocialMedia;
