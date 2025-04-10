import React from "react";
import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";
import { challenge, FatouraSectionOne, milestoneContent, sectionOneImg, sectionTwoImg, solution, teamMembers, tech } from "../../data/portfolio-data/revolutionTravelData.js";

const Header = dynamic(() =>
  import("../../components/header/Header"),{ssr:false}
);
const SectionOne = dynamic(() =>
  import("../../components/project/projectRtc/SectionOne.jsx")
);
const SectionTwo = dynamic(() =>
  import("../../components/project/projectRtc/sectionTwo.jsx")
);
const SectionThree = dynamic(() =>
  import("../../components/project/projectRtc/sectionThree.jsx")
);
const SectionFour = dynamic(() =>
  import("../../components/project/projectRtc/sectionFour.jsx")
);
const SectionFive = dynamic(() =>
  import("../../components/project/projectRtc/sectionFive.jsx")
);
const SectionSix = dynamic(() =>
  import("../../components/project/projectRtc/sectionSix.jsx")
);

const ChallengeSection = dynamic(() =>
  import("../../components/project/projectDetailCard.jsx")
);
const TechStack = dynamic(() =>
  import("../../components/project/projectTechstack.jsx")
);
const Team = dynamic(() => import("../../components/project/projectTeam.jsx"));
const Milestone = dynamic(() =>
  import("../../components/project/projectMilestone.jsx")
);
const VisitProject = dynamic(() =>
  import("../../components/project/projectVisit.jsx")
);
const ProjectSectionTwo = dynamic(() =>
  import("../../components/project/projectSectionTwo")
);
const BlogArticle = dynamic(() =>
  import("../../components/common/BlogArticle"),{ssr:false}
);
const KeepInTouch = dynamic(() =>
  import("../../components/common/keepInTouch.js")
);
const Slogan = dynamic(() =>
  import("../../components/project/ProjectSlogan.jsx")
);
const LocateUs = dynamic(() =>
  import("../../components/common/locateUs.js")
);
const Footer = dynamic(() => import("../../components/common/Footer"),{ssr:false});

const RevolutionTravel = () => {
 
  return (
    <>
      <Head>
        <title>
          Brain Inventory Develop a Travel Planning Platform With CRM
        </title>
        <meta
          name="description"
          content="Brain Inventory developed a travel planner platform with inbuild CRM that helps travel agents as well as users. Read more."
        />
        <meta
          property="og:description"
          content="Brain Inventory developed a travel planner platform with inbuild CRM that helps travel agents as well as users. Read more."
        />
        <meta
          name="og:title"
          content="Brain Inventory Develop a Travel Planning Platform With CRM"
        />
        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/preview/Braininventory_Revolution+travel.jpg"
        />
        <link
          rel="canonical"
          href="https://braininventory.in/project/revolution-travel-crm"
        />
        <link
          rel="preload"
          href="https://braininventory.s3.us-east-2.amazonaws.com/images/Portfolio_Revolution_Banner.webp"
          as="image"
          type="image/webp"
          crossorigin="anonymous"
        />
      </Head>
      <div className="bg-cover h-screen bg-[url('https://braininventory.s3.us-east-2.amazonaws.com/images/Portfolio_Revolution_Banner.webp')]">
        <Header />
        <div className="container lg:pt-48">
          <SectionOne section={FatouraSectionOne} />
          <h3 className="invisible">What is Revolution Travel CRM?</h3>
        </div>
      </div>
      <>
        <SectionTwo />
      </>
      <SectionThree
        sectionOneImg={sectionOneImg}
        sectionTwoImg={sectionTwoImg}
      />
      <SectionFour />
      <SectionSix />
      <SectionFive />
      <div className="py-8">
        <div className="flex justify-center items-center ">
          <Image
            width={500}
            height={500}
            src="https://braininventory.s3.us-east-2.amazonaws.com/images/rtc/Group+6533.png"
            alt="Custom Software Development Company | Application Development Company"
            className="w-[34rem] filter invert"
          />
        </div>
        <div className="relative w-full h-screen lg:h-[78vh] overflow-y-scroll no-scrollbar">
          <Image
            width={1500}
            height={1500}
            src="https://braininventory.s3.us-east-2.amazonaws.com/images/rtc/Group+6535.png"
            alt="Custom Software Development Company | Application Development Company"
            className="w-full filter invert"
          />
        </div>
      </div>
      <div className="max-w-full flex justify-center">
        <Image
          width={500}
          height={500}
          src="https://braininventory.s3.us-east-2.amazonaws.com/images/project/IMG_0984.png"
          alt="Custom Software Development Company | Application Development Company"
          className="rounded-3xl w-full px-4 lg:w-[50%] py-[5%] "
        />
      </div>
      <ChallengeSection challenge={challenge} solution={solution} />
      <div className="max-h- [300px] overflow-hidden flex justify-center">
        <video
          muted
          loop
          autoPlay={true}
          controls={false}
          poster="https://braininventory.s3.us-east-2.amazonaws.com/images/project/durationPoster.png"
        >
          <source
            src="https://braininventory.s3.us-east-2.amazonaws.com/videos/Cojmp+2.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <TechStack tech={tech} />
      <Team teamMembers={teamMembers} />
      <Milestone content={milestoneContent} />
      <VisitProject
        projectName="Revolution Travel CRM"
        projectLink="https://www.revolutiontravel.ca/"
        mockup=""
      />
      <ProjectSectionTwo />
      <BlogArticle />
      <KeepInTouch />
      <LocateUs />
      <Slogan />
      <Footer />
    </>
  );
};

export default RevolutionTravel;
