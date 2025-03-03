import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Image from "next/image";
import SectionOne from "../../components/project/projFatoura/SectionOne.jsx";
import KeepInTouch from "../../components/common/keepInTouch.js";
const Header = dynamic(() => import("../../components/header/Header"));
const SectionTwo = dynamic(() =>
  import("../../components/project/projFatoura/sectionTwo.jsx")
);
const SectionThree = dynamic(() =>
  import("../../components/project/projFatoura/sectionThree.jsx")
);
const SectionFour = dynamic(() =>
  import("../../components/project/projFatoura/sectionFour.jsx")
);
const SectionFive = dynamic(() =>
  import("../../components/project/projFatoura/sectionFive.jsx")
);
const SectionSix = dynamic(() =>
  import("../../components/project/projFatoura/sectionSix.jsx")
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
import LocateUs from "../../components/common/locateUs.js";
import { challenge, FatouraSectionOne, milestoneContent, sectionOneImg, sectionTwoImg, solution, teamMembers, tech } from "../../data/portfolio-data/fatouraData.js";
const BlogArticle = dynamic(() =>
  import("../../components/common/BlogArticle")
);
const Slogan = dynamic(() =>
  import("../../components/project/ProjectSlogan.jsx")
);
const Footer = dynamic(() => import("../../components/common/Footer"));

const Fatoura = () => {
 
  return (
    <>
      <Head>
        <title>
          Brain Inventory Develop Invoicing And Payment Tool to Enhance Business
          Operations
        </title>
        <meta
          name="description"
          content="Brain Inventory helped Fatoura to keep a loading speed equal to or faster than Tik-Tok for better user experience, and high-impact functionalities."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Brain Inventory Develop Invoicing And Payment Tool to Enhance Business Operations"
        />
        <meta
          property="og:description"
          content="Brain Inventory helped Fatoura to keep a loading speed equal to or faster than Tik-Tok for better user experience, and high-impact functionalities."
        />
        <meta
          property="og:url"
          content="https://braininventory.in/project/fatoura"
        />

        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/preview/Braininventory_fatoura.jpg"
        />
        <link
          rel="canonical"
          href="https://braininventory.in/project/fatoura"
        />
      </Head>
      <Header />
      <div className="container pt-12">
        <SectionOne section={FatouraSectionOne} />
      </div>
      <>
        <SectionTwo />
      </>
      <SectionThree
        sectionOneImg={sectionOneImg}
        sectionTwoImg={sectionTwoImg}
      />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <>
        <div className="py-8 mb-8 relative flex flex-col justify-center bg-[#F39573]">
          <div className="container">
            <h3 className="text-center text-3xl lg:text-5xl border-2 border-[#F39573] border-b-white lg:mx-44">
              L A N D I N G P A G E
            </h3>
            <div className="px-4 lg:px-48 lg:py-12">
              <Image
                width={900}
                height={900}
                src="https://braininventory.s3.us-east-2.amazonaws.com/images/project/fatoura/Group 6461.png"
                alt="Custom Software Development Company | Application Development Company"
              />
            </div>
          </div>
        </div>
      </>
      <div className="max-w-full flex justify-center">
        <Image
          width={900}
          height={900}
          src="https://braininventory.s3.us-east-2.amazonaws.com/images/project/IMG_0984.png"
          alt="Custom Software Development Company | Application Development Company"
          className="rounded-3xl w-full px-4 lg:w-[50%] py-[5%] container"
        />
      </div>
      <ChallengeSection challenge={challenge} solution={solution} />
      <div className="py-10 flex justify-center">
        <video
          muted
          loop
          autoPlay={true}
          controls={false}
          poster="https://braininventory.s3.us-east-2.amazonaws.com/images/project/durationPoster.png"
        >
          <source
            src="https://braininventory.s3.us-east-2.amazonaws.com/videos/Comp 2.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <TechStack tech={tech} />
      <Team teamMembers={teamMembers} />
      <Milestone content={milestoneContent} />
      <VisitProject
        projectName="fatoura.work"
        projectLink="https://fatoura.app/"
        mockup="#"
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
export default Fatoura;
