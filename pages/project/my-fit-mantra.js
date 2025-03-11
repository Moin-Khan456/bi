import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Image from "next/image";
import { milestoneContent, NumetricSectionOne, teamMembers, tech } from "../../data/portfolio-data/my-fit-mantraData.js";

const Header = dynamic(() =>
  import("../../components/header/Header"),{ssr:false}
);
const SectionOne = dynamic(() =>
  import("../../components/project/projectDetailOne.jsx")
);
const SectionTwo = dynamic(() =>
  import("../../components/project/projMFM/sectionTwo.jsx")
);
const SectionThree = dynamic(() =>
  import("../../components/project/projMFM/sectionThree.jsx")
);
const SectionFour = dynamic(() =>
  import("../../components/project/projMFM/SectionFour.jsx")
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
const ChallengeSection = dynamic(() =>
  import("../../components/project/projectDetailCard.jsx")
);
const BlogArticle = dynamic(() =>
  import("../../components/common/BlogArticle"),{ssr:false}
);
const KeepInTouch = dynamic(() =>
  import("../../components/common/keepInTouch.js")
);
const LocateUs = dynamic(() =>
  import("../../components/common/locateUs.js")
);
const Slogan = dynamic(() =>
  import("../../components/project/ProjectSlogan.jsx")
);
const Footer = dynamic(() => import("../../components/common/Footer"),{ssr:false});

const MyFitMantra = () => {

  return (
    <>
      <Head>
        <title>Brain Inventory Developed Integrated Personal Trainer App</title>
        <meta
          name="description"
          content="Brain Inventory developed training software for My Fit Mantra that diverse the needs of trainers to achieve their fitness goals. Check out how we develop training apps."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Brain Inventory Developed Integrated Personal Trainer App"
        />
        <meta
          property="og:description"
          content="Brain Inventory developed training software for My Fit Mantra that diverse the needs of trainers to achieve their fitness goals. Check out how we develop training apps."
        />
        <meta
          property="og:url"
          content=" 
  https://braininventory.in/project/my-fit-mantra"
        />
        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/preview/Braininventory_MFM.jpg"
        />

        <link
          rel="canonical"
          href="https://braininventory.in/project/my-fit-mantra"
        />
      </Head>
      <Header />
      <div className=" pt-12">
        <SectionOne section={NumetricSectionOne} />
        <h3 className="invisible">Fully Integrated Personal Trainer App</h3>
        <SectionTwo />
        <SectionThree
          text="Trainer's Perspective"
          image="https://braininventory.s3.us-east-2.amazonaws.com/projects/MFM/Group+6447.png"
        />
        <SectionFour
          text="Customer's Perspective"
          image="https://braininventory.s3.us-east-2.amazonaws.com/projects/MFM/mfm_collage.png"
        />
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
          projectName="My Fit Mantra"
          projectLink="https://myfitmantra.com/"
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

export default MyFitMantra;
