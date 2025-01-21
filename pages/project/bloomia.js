import React, { useState, useEffect } from "react";
import Head from "next/head";
import Header from "../../components/header/Header";
import dynamic from "next/dynamic";
import Image from "next/image";
import SectionOne from "../../components/project/projectDetailOne.jsx";
import KeepInTouch from "../../components/common/keepInTouch.js";
import LocateUs from "../../components/common/locateUs.js";
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
  const BloomiaSectionOne = {
    space:
      "                                                                                                                                                                                                                           ",
    brief: "",
    logo: "https://braininventory.s3.us-east-2.amazonaws.com/images/Group 4230.png",
    image:
      "https://braininventory.s3.us-east-2.amazonaws.com/images/Group 6382.png",
    alt: "Bloomia",
  };

  const sectionOneImg = {
    one: "https://braininventory.s3.us-east-2.amazonaws.com/images/Group 6420.png",
    two: "https://braininventory.s3.us-east-2.amazonaws.com/images/Mask Group 172.png",
  };
  const sectionTwoImg = {
    one: "https://braininventory.s3.us-east-2.amazonaws.com/images/Group 6419.png",
    two: "https://braininventory.s3.us-east-2.amazonaws.com/images/Group 6418.png",
  };
  const carouselImages = [
    {
      id: 1,
      url: "https://braininventory.s3.us-east-2.amazonaws.com/images/carousel-1.png",
      hover:
        "https://braininventory.s3.us-east-2.amazonaws.com/images/Component+10.png",
    },
    {
      id: 2,
      url: "https://braininventory.s3.us-east-2.amazonaws.com/images/carousel-2.png",
      hover:
        "https://braininventory.s3.us-east-2.amazonaws.com/images/Component+11.png",
    },
  ];

  const section2CarouselImages = [
    {
      id: 1,
      url: "https://braininventory.s3.us-east-2.amazonaws.com/images/carousel-1.png",
    },
    {
      id: 2,
      url: "https://braininventory.s3.us-east-2.amazonaws.com/images/carousel-2.png",
    },
  ];

  const tech = [
    {
      image: "https://braininventory.s3.us-east-2.amazonaws.com/projects/6.png",
      name: "Angular",
    },
    {
      image: "https://braininventory.s3.us-east-2.amazonaws.com/projects/7.png",
      name: "NodeJs",
    },
    {
      image: "https://braininventory.s3.us-east-2.amazonaws.com/projects/9.png",
      name: "ExpressJs",
    },
    {
      image: "https://braininventory.s3.us-east-2.amazonaws.com/projects/8.png",
      name: "MongoDB",
    },
  ];

  const teamMembers = [
    {
      id: 1,
      name: "Krishna Agrawal",
      image:
        "https://braininventory.s3.us-east-2.amazonaws.com/projects/Group 6420.png",
      role: "Sr. UI/UX Designer",
    },
    {
      id: 2,
      name: "Gunjan Jain",
      image:
        "https://braininventory.s3.us-east-2.amazonaws.com/projects/Group 6423.png",
      role: "Sr. Software Architecture",
    },
    {
      id: 3,
      name: "Pradyumna Garg",
      image:
        "https://braininventory.s3.us-east-2.amazonaws.com/projects/Group 6429.png",
      role: "Software Architecture",
    },
    {
      id: 4,
      name: "Puneet Rajwani",
      image:
        "https://braininventory.s3.us-east-2.amazonaws.com/projects/Group 6432.png",
      role: "Software Architecture",
    },
    {
      id: 5,
      name: "Gautam Patil",
      image:
        "https://braininventory.s3.us-east-2.amazonaws.com/projects/Group 6426.png",
      role: "Software Engineer",
    },
    {
      id: 6,
      name: "Hussain Ali",
      image:
        "https://braininventory.s3.us-east-2.amazonaws.com/projects/Group 6435.png",
      role: "Software Engineer",
    },
    {
      id: 7,
      name: "Subhash Ajmera",
      image:
        "https://braininventory.s3.us-east-2.amazonaws.com/projects/Group 6438.png",
      role: "Software Engineer",
    },
    {
      id: 8,
      name: "Rahul Badwaya",
      image:
        "https://braininventory.s3.us-east-2.amazonaws.com/projects/Group 6441.png",
      role: "Software Engineer",
    },
  ];

  const milestoneContent = [
    "Platform got published by major media houses",
    "Completing the project in a record time and achieving a smooth Go-Live",
    "Customer hit the break even in 6 Months",
  ];

  const challenge =
    "During the development of the aforementioned project, we encountered several challenges that required careful problem-solving and optimization. One of the initial hurdles we faced was devising a dynamic animation screen that could be controlled based on user operations. We needed to animate a series of components in a sequential manner, with each component having variable timing. Ensuring smooth animation while handling repetitions posed a significant challenge that required meticulous planning and implementation. Another obstacle we encountered was accurately tracking and maintaining the user's daily streak. Our objective was to break the streak if the user failed to use the app daily. To achieve this, we had to optimize the solution to avoid unnecessary data accumulation while effectively monitoring and updating the streak status. This involved designing a streamlined data management system that efficiently tracked and recorded the user's daily engagement without unnecessary overhead.";

  const solution =
    "To address the animation challenge, we decided to develop our own SVG element instead of relying on third-party libraries. This approach provided us with greater control over key points and allowed us to make changes on each time frame. We were able to stop and resume the animation effectively, tailoring it to meet the specific requirements of the project. This bespoke solution offered us the flexibility to write custom application logic that seamlessly integrated with the rest of the platform. For optimizing the daily streak feature, we implemented a client-side logic that was responsible for maintaining or breaking the streak data. We recognized that if a user never logged into the platform, there was no need to track or break the streak, as the user wouldn't be present to notice the change. By implementing this logic on the front end, we avoided unnecessary storage space and reduced the need for continuous monitoring and database checks. This optimization allowed us to save resources and streamline the streak-tracking process. Through these solutions, we were able to overcome the animation and streak optimization challenges, ensuring a smooth user experience while efficiently managing resources and data.";

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
