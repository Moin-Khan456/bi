import React, { useState, useEffect } from "react";
import Head from "next/head";
import Header from "../../components/header/Header";
import dynamic from "next/dynamic";
import Image from "next/image";
import SectionOne from "../../components/project/projectDetailOne.jsx";
import KeepInTouch from "../../components/common/keepInTouch.js";
import LocateUs from "../../components/common/locateUs.js";
import { BloomiaSectionOne, carouselImages, challenge, milestoneContent, section2CarouselImages, sectionOneImg, sectionTwoImg, solution, teamMembers, tech } from "../../data/portfolio-data/bloomiaData.js";
const SectionTwo = dynamic(() =>
  import("../../components/project/sectionTwo.jsx")
);
const SectionThree = dynamic(() =>
  import("../../components/project/sectionThree.jsx")
);
const PojectCarousel = dynamic(() =>
  import("../../components/project/sectionFour.jsx")
);
const SectionFive = dynamic(() =>
  import("../../components/project/sectionFive.jsx")
);
const SectionSix = dynamic(() =>
  import("../../components/project/sectionSix.jsx")
);
const SectionSeven = dynamic(() =>
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
// import LocateUs from "../components/common/locateUs.js";

const BlogArticle = dynamic(() =>
  import("../../components/common/BlogArticle")
);
const Slogan = dynamic(() =>
  import("../../components/project/ProjectSlogan.jsx")
);

const Footer = dynamic(() => import("../../components/common/Footer"));

const Bloomia = () => {
  
  const [position, setPostion] = useState(true);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setPostion(true);
    });
  });

  return (
    <>
      <Head>
        <title>
          Kegel Exercise Platform - Bloomia | Case Study – Brain Inventory
        </title>
        <meta
          name="description"
          content="Brain Inventory developed Bloomia Kegel exercises tracking Platform that helps to assist and motivate users in exercise performance. Know how we developed this platform."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Kegel Exercise Platform - Bloomia | Case Study – Brain Inventory"
        />
        <meta
          property="og:description"
          content="Brain Inventory developed Bloomia Kegel exercises tracking Platform that helps to assist and motivate users in exercise performance. Know how we developed this platform."
        />
        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/preview/Braininventory_bloomia.jpg"
        />
        <meta
          property="og:url"
          content="https://braininventory.in/project/bloomia"
        />

        <link
          rel="canonical"
          href="https://braininventory.in/project/bloomia"
        />
      </Head>
      <Header />
      <div className="container  pt-12">
        <SectionOne section={BloomiaSectionOne} />
        <h3 className="invisible">Bloomia</h3>
      </div>
      <SectionTwo carouselImages={section2CarouselImages} />
      {position && (
        <>
          <div className="container">
            <SectionThree
              sectionOneImg={sectionOneImg}
              sectionTwoImg={sectionTwoImg}
            />
            <PojectCarousel carouselImages={carouselImages} />
          </div>
          <SectionFive />
          <SectionSix />
          <div className="container">
            <div className="max-w-full flex justify-center">
              <Image
                src="https://braininventory.s3.us-east-2.amazonaws.com/images/project/IMG_0984.png"
                alt="Custom Software Development Company | Application Development Company"
                width={600}
                height={600}
                className="rounded-3xl w-[50%] py-[5%] max-w-full flex justify-center"
              />
            </div>
          </div>
          <SectionSeven challenge={challenge} solution={solution} />
          <div className="py-10 flex justify-center">
            <video
              muted
              loop
              autoPlay={true}
              controls={false}
              poster="https://braininventory.s3.us-east-2.amazonaws.com/images/project/durationPoster.png"
            >
              <source
                src="https://braininventory.s3.us-east-2.amazonaws.com/videos/Comp+2.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <div>
            <TechStack tech={tech} />
            <Team teamMembers={teamMembers} />
            <Milestone content={milestoneContent} />
            <VisitProject projectName="Bloomia.app" />
            <ProjectSectionTwo />
            <BlogArticle />
            <KeepInTouch />
            <LocateUs />
            <Slogan />
            <Footer />
          </div>
        </>
      )}
    </>
  );
};

export default Bloomia;
