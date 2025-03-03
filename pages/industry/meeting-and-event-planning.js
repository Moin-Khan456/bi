import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { approachDesc, approachPoints, faqDetails, keyDesc, keyFeatures, platformDesc, platformDevelopment, sectionFiveDesc, sectionFiveTable, sectionFiveTableHead, sectionFourDesc, sectionThreeCards, sectionTwoDesc, solutionList } from "../../data/industry-data/meetingData.js";
const Header = dynamic(() => import("../../components/header/Header.js"),{ssr:false});
const SectionOne = dynamic(() =>
  import("../../components/Solution-meeting/SectionOne.jsx"));
const SectionTwo = dynamic(() =>
  import("../../components/Solution-meeting/SectionTwo.jsx"));
const SectionThree = dynamic(() =>
  import("../../components/SolutionFitness/SectionThree.jsx"));
const TiltMarquee = dynamic(() =>
  import("../../components/SolutionFitness/TiltMarquee.jsx"));
const SectionFour = dynamic(() =>
  import("../../components/SolutionFitness/SectionFour.jsx"));
const SectionFive = dynamic(() =>
  import("../../components/Solution-meeting/SectionFive.jsx"));
const SectionSix = dynamic(() =>
  import("../../components/SolutionAccounting/SectionSix.jsx"),{ssr:false});
const PlatformDevelopment = dynamic(() =>
  import("../../components/SolutionAccounting/SectionSlider.jsx"));
const SectionNine = dynamic(() =>
  import("../../components/SolutionFitness/SectionNine.jsx"));
const PlatformSection = dynamic(() =>
  import("../../components/SolutionAccounting/PlatformSection.jsx"));
const Approach = dynamic(() =>
  import("../../components/SolutionFitness/Approach.jsx"));
const SectionTen = dynamic(() =>
  import("../../components/SolutionFitness/SectionTen.jsx"),{ssr:false});
const Faqs = dynamic(() => import("../../components/mobilePages/faqs.js"),{ssr:false});
const BlogArticle = dynamic(() =>
  import("../../components/common/BlogArticle.jsx"),{ssr:false});
const KeepInTouch = dynamic(() => import("../../components/common/keepInTouch.js"),{ssr:false});
const LocateUs = dynamic(() => import("../../components/common/locateUs.js"));
const LetsKick = dynamic(() => import("../../components/common/LetsKick.js"));
const Footer = dynamic(() => import("../../components/common/Footer.js"),{ssr:false});


function Meeting(props) {
 
  return (
    <>
      <Head>
        <title>Meeting & Event Planning Software Development Company</title>
        <meta
          name="description"
          content="Brain Inventory provides meeting and event planning software development services to help your employee and customer. Contact us now."
        />
        <meta
          property="og:description"
          content="Brain Inventory provides meeting and event planning software development services to help your employee and customer. Contact us now."
        />
        <meta
          name="og:title"
          content="Meeting & Event Planning Software Development Company"
        />
        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/preview/Braininventory_Edtech.jpg"
        />
        <meta
          property="og:url"
          content="https://braininventory.in/industry/meeting-and-event-planning"
        />
        <link
          rel="canonical"
          href="https://braininventory.in/industry/meeting-and-event-planning"
        />
        <link
          rel="preload"
          fetchpriority="high"
          href="https://braininventory.s3.us-east-2.amazonaws.com/images/solution/meeting-and-planning/Asset+2.png"
          as="image"
        />
      </Head>
      {/*<Loader />*/}
      <Header />
      <SectionOne />
      <SectionTwo
        className="filter invert sm:pt-20 sm:pb-32 bg-right bg-no-repeat sm:bg-[url('https://braininventory.s3.us-east-2.amazonaws.com/images/solution/grid-matrix.png')] w-full"
        title="Meeting & Event / Planning / Software / Development / by / Brain Inventory"
        isHeadShow={false}
        head1="Your ultimate solution to seamless event planning!"
        description={sectionTwoDesc}
      />
      <SectionThree
        title="Insights into the Meeting and Event Management Industry"
        sectionDesc="In today's digital era, the significance of meeting software development cannot be overstated. Keeping up with the digital transformation wave, Brain Inventory offers comprehensive softwares in meeting and event planning software development to make your tasks seamless and efficient. Our integrated conference and event management systems facilitate smooth execution of all your events. From meeting tracking to the entire event business management system, we deliver holistic softwares that encapsulates every aspect of your event planning needs."
        sectionThreeCards={sectionThreeCards}
        pointers={true}
      />{" "}
      <TiltMarquee title="MEETING & EVENT MANAGEMENT Solution DEVELOPMENT " />
      <SectionFour
        titleSize="lg:text-4xl"
        title="Services for Meeting and Event Planning Software Development"
        description={sectionFourDesc}
        solutionList={solutionList}
      />
      <SectionFive
        head="Meeting Tech Innovations"
        subhead="COMPARED TO Zoom"
        description={sectionFiveDesc}
        sectionFiveTableHead={sectionFiveTableHead}
        sectionFiveTable={sectionFiveTable}
        alt="Energy and Utility Applications Development Services"
      />
      <SectionSix
        headAbove="Develop Your Own Meeting & Event Management App"
        subheadAbove="Ready to take your virtual meeting and planning to the next level? Whether you prefer Zoom or another innovative meeting management software, your journey towards efficient and customized solutions begins right here."
        titleClass="lg:pb-16 lg:leading-[3.5rem]"
        title="your journey towards efficient and customized solutions begins right here."
        customClasses="max-w-[200px] lg:max-w-[450px] !w-[400px] bottom-0 right-24"
        btn="BUILD YOUR Meeting & Event Management Solution"
        src="https://braininventory.s3.us-east-2.amazonaws.com/images/solution/meeting-and-planning/Group+7205.png"
      />
      <PlatformDevelopment
        data={platformDevelopment}
        subhead="WHY CHOOSE BRAIN INVENTORY FOR"
        head=" Meeting and Event Planning  SOFTWARE DEVELOPMENT"
        description={platformDesc}
      />
      <SectionNine
        brand="Meeting and Event Management Solution Development Company        "
        pageCategory="Meeting and Event Management Solution Development Company     "
        pageCategoryAbbr="Meeting and Event Management Solution Development Company       "
        slow={70000}
        fast={65000}
        alt={"Meeting & Event Management Software Development"}
        src="https://braininventory.s3.us-east-2.amazonaws.com/images/solution/meeting-and-planning/entrepreneur-discussing-financial-statistics-with-remote-team-during-online-videocall-meeting-conference-diverse-corporate-employees-working-overhours-company-growth-report-startup-office+1.png"
      />
      <PlatformSection
        data={keyFeatures}
        subhead="KEY FEATURES OF"
        head="Meeting and Event Planning SOFTWARE Development"
        description={keyDesc}
      />
      <Approach
        title="How do we Approach Meeting and Event Planning Software Development?"
        desc={approachDesc}
        points={approachPoints}
      />
      <SectionTen
        oneName={"MEET X"}
        oneVideo={
          "https://braininventory.s3.us-east-2.amazonaws.com/images/Industry+page+mockups/Event+%26+meeting/Dummy+1/event+and+meeting.mp4"
        }
        oneImage={
          "https://braininventory.s3.us-east-2.amazonaws.com/images/Industry+page+mockups/Event+%26+meeting/Dummy+1/event+and+meeting+mockup.png"
        }
        twoName={"LET'S MEET"}
        twoVideo={
          "https://braininventory.s3.us-east-2.amazonaws.com/images/Industry+page+mockups/Event+%26+meeting/Dummy+2/Event+and+meeting.mp4"
        }
        twoImage={
          "https://braininventory.s3.us-east-2.amazonaws.com/images/Industry+page+mockups/Event+%26+meeting/Dummy+2/Event+and+meeting.png"
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
export default Meeting;
