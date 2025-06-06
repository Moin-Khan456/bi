import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Image from "next/image";
import { milestoneContent, teamMembers, tech, VirifiSectionOne } from "../../data/portfolio-data/virifiData.js";

const Header = dynamic(() =>
  import("../../components/header/Header"),{ssr:false}
);
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
const TiltMarquee = dynamic(() =>
  import("../../components/SolutionFitness/TiltMarquee.jsx")
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

const Virifi = () => {
 
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
        <link rel="canonical" href="https://braininventory.in/project/virifi" />
        <link
          rel="preload"
          href="https://braininventory.s3.us-east-2.amazonaws.com/images/project/virifi/Image+8.png"
          as="image"
          type="image/png"
          crossorigin="anonymous"
        />
      </Head>
      <Header />
      <div className="">
        <div className="w-full px-4 flex flex-col items-center pt-12 justify-center lg:block lg:px-12 bg-[url('https://braininventory.s3.us-east-2.amazonaws.com/images/project/virifi/Image+8.png')]">
          <div className="container">
            <SectionOne section={VirifiSectionOne} />
            <h3 className="invisible">Virifi</h3>
          </div>
        </div>
        <div>
           <TiltMarquee
             title="Sign Verify Certify" />
        </div>
        <SectionTwo />
        <div>
          <SectionThree />
        </div>
        <div>
          <SectionFour />
        </div>
        <div className="flex w-full">

        </div>
            <TiltMarquee
             title="User Management User Details" />
        <div>
          <SectionFive />
        </div>
        <div>
          <SectionSix />
        </div>
        <div>
          <>
            <div className="py-8 mb-8 relative flex flex-col justify-center bg-virifi-m bg-primaryTx">
              <h3 className="text-center text-3xl Gilroy-Bold lg:text-6xl  lg:mx-44 text-primaryBg">
                Marketing <span className="text-primaryBg">Website</span>
              </h3>
              <div className="px-4 lg:px-48 lg:py-12 ">
                <Image
                  src="https://braininventory.s3.us-east-2.amazonaws.com/images/project/virifi/Group 6425.png"
                  alt="Custom Software Development Company | Application Development Company"
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
          <KeepInTouch />
        </div>
        <LocateUs />
        <Slogan />
        <Footer />
      </div>
    </>
  );
};

export default Virifi;
