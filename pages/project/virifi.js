import React, { useState, useEffect } from "react";
import Head from "next/head";
import Header from "../../components/header/Header";
import dynamic from "next/dynamic";
import Image from "next/image";
const SectionOne = dynamic(() =>
  import("../../components/project/projvirifi/SectionOne.jsx")
);
const SectionTwo = dynamic(() =>
  import("../../components/project/projvirifi/SectionTwo.jsx")
);
const SectionThree = dynamic(() =>
  import("../../components/project/projvirifi/SectionThree.jsx")
);
const SectionFour = dynamic(() =>
  import("../../components/project/projvirifi/SectionFour.jsx")
);
const SectionFive = dynamic(() =>
  import("../../components/project/projvirifi/SectionFive.jsx")
);
const SectionSix = dynamic(() =>
  import("../../components/project/projvirifi/SectionSix.jsx")
);
const ChallengeSection = dynamic(() =>
  import("../../components/project/projectDetailCard.jsx")
);
const ProjectInquiry = dynamic(() =>
  import("../../components/project/projectInquiryCard.jsx")
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
const LocateUs = dynamic(() => import("../../components/portfolio/LocateUs"));
const ContactForm = dynamic(() =>
  import("../../components/common/ContactForm")
);
const BlogArticle = dynamic(() =>
  import("../../components/common/BlogArticle")
);
const Slogan = dynamic(() =>
  import("../../components/project/ProjectSlogan.jsx")
);
const Footer = dynamic(() => import("../../components/common/Footer"));

const Virifi = () => {
  const VirifiSectionOne = {
    brief:
      "Certifies and verifies your files with protected confidentiality, E2E encryption,and helps you digitize your business with the next generation of verification.",
    logo: "https://d1u4arv5y5eda6.cloudfront.net/images/project/virifi/Group+6385.png",
    alt: "Virifi",
  };

  const tech = [
    {
      image: "https://d1u4arv5y5eda6.cloudfront.net/projects/MFM/6.png",
      name: "Angular",
    },
    {
      image: "https://d1u4arv5y5eda6.cloudfront.net/projects/MFM/7.png",
      name: "NodeJs",
    },
    {
      image: "https://d1u4arv5y5eda6.cloudfront.net/projects/MFM/9.png",
      name: "ExpressJs",
    },
    {
      image: "https://d1u4arv5y5eda6.cloudfront.net/projects/MFM/8.png",
      name: "MongoDB",
    },
    {
      image: "https://d1u4arv5y5eda6.cloudfront.net/projects/hyperledger.PNG",
      name: "Hyperledger Fabric",
    },
    {
      image: "https://d1u4arv5y5eda6.cloudfront.net/images/rtc/rgdgfg.png",
      name: "Docker",
    },
    {
      image: "https://d1u4arv5y5eda6.cloudfront.net/projects/MFM/dfdf.png",
      name: "AWS EC2",
    },
    {
      image: "https://d1u4arv5y5eda6.cloudfront.net/projects/MFM/fddf.png",
      name: "AWS S3",
    },
  ];
  const teamMembers = [
    {
      id: 1,
      name: "Krishna Agrawal",
      image: "https://d1u4arv5y5eda6.cloudfront.net/projects/Group 6420.png",
      role: "Sr. UI/UX Designer",
    },
    {
      id: 3,
      name: "Pradyumna Garg",
      image: "https://d1u4arv5y5eda6.cloudfront.net/projects/Group 6429.png",
      role: "Software Architecture",
    },
    {
      id: 2,
      name: "Gautam Patil",
      image:
        "https://d1u4arv5y5eda6.cloudfront.net/images/project/virifi/Group%20-1.png",
      role: "Software Engineer",
    },

    {
      id: 4,
      name: "Sohail Khan",
      image:
        "https://d1u4arv5y5eda6.cloudfront.net/images/project/virifi/Group%206438.png",
      role: "Software Architecture",
    },
  ];

  const milestoneContent = [
    "Within the first month only, the development team achieved a significant milestone by successfully creating the private blockchain infrastructure using the Hyperledger Fabric framework.",
    "Just in 20 days successfully implemented PDF document signing functionality. This achievement involved in-depth research on PDF document architecture, understanding the intricacies of document signing, and implementing a robust solution that allowed for multiple signatures while ensuring document authenticity.",
    "Meet the breakeven in lesser taImplemented the necessary network nodes, consensus mechanisms, and smart contracts to establish a secure and decentralized foundation for the platform in 40 days.han its development time",
  ];
  return (
    <>
      <Head>
        <title>Build Private and Secure Blockchain Network for Virifi</title>
        <meta
          name="description"
          content="Brain Inventory Creates a Private and Secure Blockchain Network for Virifi. This flexible platform can scale to the needs of any organization. Read more about it."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Build Private and Secure Blockchain Network for Virifi"
        />
        <meta
          property="og:description"
          content="Brain Inventory Creates a Private and Secure Blockchain Network for Virifi. This flexible platform can scale to the needs of any organization. Read more about it."
        />
        <meta
          property="og:url"
          content="https://braininventory.in/project/virifi"
        />
        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/preview/Braininventory_virifi.jpg"
        />
        <link
          rel="canonical"
          href="https://braininventory.in/project/virifi"
        />
      </Head>
      <Header />
      <div className="">
        <div className="w-full px-4 flex flex-col items-center pt-12 justify-center lg:block lg:px-12 bg-[url('https://d1u4arv5y5eda6.cloudfront.net/images/project/virifi/Image+8.png')]">
          <div className="container">
            <SectionOne section={VirifiSectionOne} />
            <h1 className="invisible">Virifi</h1>
          </div>
        </div>
        <div>
          <Image
            src="https://d1u4arv5y5eda6.cloudfront.net/images/project/virifi/Mask Group 287.png"
            className="lg:-mt-8 w-full"
            width={2000}
            height={100}
            alt=""
          />
        </div>
        <SectionTwo />

        <div>
          <SectionThree />
        </div>

        <div>
          <SectionFour />
        </div>

        <div className="flex w-full">
          <Image
            src="https://d1u4arv5y5eda6.cloudfront.net/images/project/virifi/Repeat Grid 1.png"
            alt=""
            width={2000}
            height={100}
            className="w-full"
          />
        </div>

        <div>
          <SectionFive />
        </div>

        <div>
          <SectionSix />
        </div>

        <div>
          <>
            <div className="py-8 mb-8 relative flex flex-col justify-center bg-virifi-m bg-[url('https://d1u4arv5y5eda6.cloudfront.net/images/project/virifi/Image+8-Gradient.png')]">
              <h1 className="text-center text-3xl Gilroy-Bold lg:text-6xl  lg:mx-44">
                Marketing <span className="text-[#7600EB]">Website</span>
              </h1>
              <div className="px-4 lg:px-48 lg:py-12 ">
                <Image
                  src="https://d1u4arv5y5eda6.cloudfront.net/images/project/virifi/Group 6425.png"
                  alt=""
                  width={1000}
                  height={800}
                  className="m-auto block"
                />
              </div>
            </div>
          </>
        </div>

        
        <div className="flex justify-center w-full py-12">
         <div className="container lg:px-28">
          <Image
            src="https://d1u4arv5y5eda6.cloudfront.net/images/project/IMG_0984.png"
            alt=""
            className="rounded-3xl w-[100%]"
            width={1500}
            height={1500}
          />
        </div>
       </div>
        <ChallengeSection
          challenge="One significant challenge involved creating a schema that could effectively link multiple elements with each other. This required careful consideration of the relationships between different data components within the system to ensure efficient data management and retrieval. Implementing a secure and seamless payment process was another technical hurdle. The team needed to develop a solution that would allow trainers to accept payments directly into their wallets through the platform."
          solution="In order to address the aforementioned challenges, several technical solutions were implemented during the development of the project. Extensive discussions were held between the business owner, product analyst team and developers to identify the specific use cases. These discussions facilitated the thoughtful design of the schema, ensuring that every element of the project catered to the intended audience. MongoDB was chosen as the database solution due to its flexibility and built-in tools, which simplified the storage of dynamic data. For direct payment options, Stripe was selected as the payment aggregator. To provide users with the ability to connect their Stripe accounts, the Stripe Connect strategy was implemented. By utilizing the user's Stripe account, the platform was able to generate products on demand and securely process payments."
        />
        <div className="py-10 flex justify-center">
          <video
            muted
            loop
            autoPlay={true}
            controls={false}
            poster="https://d1u4arv5y5eda6.cloudfront.net/images/project/durationPoster.png"
          >
            <source
              src="https://d1u4arv5y5eda6.cloudfront.net/videos/Comp 2.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <TechStack tech={tech} />
        <Team teamMembers={teamMembers} />
        <Milestone content={milestoneContent} />
        <VisitProject
          projectName="Virifi.io"
          projectLink="https://Virifi.io/"
          mockup=""
        />
        <div className="mx-4 lg:mx-24">
          <ProjectSectionTwo />
        </div>
        <div className="px-4">
          <BlogArticle />
        </div>
        <div className="mx-4">
          <ContactForm />
        </div>
        <LocateUs />
        <Slogan />
        <Footer />
      </div>
    </>
  );
};

export default Virifi;
