import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Image from "next/image";
import SectionOne from "../../components/project/projectDetailOne.jsx";
import KeepInTouch from "../../components/common/keepInTouch.js";
import LocateUs from "../../components/common/locateUs.js";
import { carouselImages, challenge, milestoneContent, NumetricSectionOne, solution, teamMembers, tech } from "../../data/portfolio-data/numetricData.js";
const Header = dynamic(() => import("../../components/header/Header"));
const SectionTwo = dynamic(() =>
  import("../../components/project/projectDetailTwo.jsx")
);
const SectionThree = dynamic(() =>
  import("../../components/project/projectDetailThree.jsx")
);
const PojectCarousel = dynamic(() =>
  import("../../components/project/projectDetailCarousel.jsx")
);
const ProjectDetailCard = dynamic(() =>
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
  import("../../components/project/projectSectionTwo.jsx")
);

const BlogArticle = dynamic(() =>
  import("../../components/common/BlogArticle")
);
const Slogan = dynamic(() =>
  import("../../components/project/ProjectSlogan.jsx")
);
const Footer = dynamic(() => import("../../components/common/Footer"));

const Numetric = () => {
 
  return (
    <>
      <Head>
        <title>Build Cloud-Based Accounting Software For Numetric.work</title>
        <meta
          name="description"
          content="Brain Inventory Developed the cloud-based accounting software for Numetric.work that helps users to track business transactions and performance."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Build Cloud-Based Accounting Software For Numetric.work"
        />
        <meta
          property="og:description"
          content="Brain Inventory Developed the cloud-based accounting software for Numetric.work that helps users to track business transactions and performance."
        />
        <meta
          property="og:url"
          content="https://braininventory.in/project/numetric"
        />
        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/preview/Braininventory_numetric.jpg"
        />

        <link
          rel="canonical"
          href="https://braininventory.in/project/numetric"
        />
      </Head>
      <Header />
      <div className="container  pt-12">
        <SectionOne section={NumetricSectionOne} />
        <h3 className="invisible">Cloud Based Accounting</h3>
        <SectionTwo />
        <SectionThree />
        <PojectCarousel images={carouselImages} />
        <div className="flex justify-center w-full py-12">
          <div className="container lg:px-28">
            <Image
              src="https://braininventory.s3.us-east-2.amazonaws.com/images/project/IMG_0984.png"
              alt="Custom Software Development Company | Application Development Company"
              className="rounded-3xl w-[100%]"
              width={1500}
              height={1500}
            />
          </div>
        </div>
        <ProjectDetailCard challenge={challenge} solution={solution} />
      </div>
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
      <div className="container">
        <TechStack tech={tech} />
        <Team teamMembers={teamMembers} />
        <Milestone content={milestoneContent} />
        <VisitProject
          projectName="Numetric.work"
          projectLink="https://numetric.work/"
          mockup=""
        />
        <div className="mx-4 lg:mx-24">
          <ProjectSectionTwo />
        </div>
        <div className="px-4">
          <BlogArticle />
        </div>
        <div className="mx-4">
            <KeepInTouch />
        </div>
        <LocateUs />
        <Slogan />
        <Footer />
      </div>
    </>
  );
};

export default Numetric;
