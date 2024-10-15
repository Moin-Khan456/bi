import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Image from "next/image";
import SectionOne from "../../components/project/projFatoura/SectionOne.jsx";
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

const Fatoura = () => {
  const FatouraSectionOne = {
    space:
      "                                                                                                                                                                                                                                                                        ",
    brief: "CREATE & MANAGE YOUR ",
    styleBrief: "INVOICES",
    logo: "https://braininventory.s3.us-east-2.amazonaws.com/images/project/fatoura/fatoura-logo.png",
    alt: "Fatoura",
  };
  const teamMembers = [
    {
      id: 1,
      name: "Shivam Yadav",
      image:
        "https://braininventory.s3.us-east-2.amazonaws.com/images/project/fatoura/Group -2.png",
      role: "Software Engineer",
    },
    {
      id: 2,
      name: "Ali Asgar Dhariwala",
      image:
        "https://braininventory.s3.us-east-2.amazonaws.com/images/project/fatoura/Group -1.png",
      role: "Software Engineer",
    },
    {
      id: 3,
      name: "Asim Sheikh",
      image:
        "https://braininventory.s3.us-east-2.amazonaws.com/images/project/fatoura/Group -3.png",
      role: "Software Engineer",
    },
    {
      id: 4,
      name: "Pritesh Patil",
      image:
        "https://braininventory.s3.us-east-2.amazonaws.com/images/project/fatoura/Group -4.png",
      role: "Quality Analyst",
    },
    {
      id: 5,
      name: "Rimjhim Kasera",
      image:
        "https://braininventory.s3.us-east-2.amazonaws.com/images/project/fatoura/Group -5.png",
      role: "UI/UX Design",
    },
  ];
  const sectionOneImg = {
    one: "https://braininventory.s3.us-east-2.amazonaws.com/images/Group 6420.png",
    two: "https://braininventory.s3.us-east-2.amazonaws.com/images/Mask Group 172.png",
  };
  const sectionTwoImg = {
    one: "https://braininventory.s3.us-east-2.amazonaws.com/images/Group 6419.png",
    two: "https://braininventory.s3.us-east-2.amazonaws.com/images/Group 6418.png",
  };

  const milestoneContent = [
    "Custom-tailored PayPal integration",
    "Multiple subscription options to cater for all sizes of businesses",
    "Multi-Language support at just one click",
  ];
  const challenge =
    "During the development of the project, we encountered several technical challenges that required careful consideration and implementation. One significant hurdle was the creation of dynamic PDF invoices. It was essential to generate these invoices with dynamic data, but accomplishing this solely on the front end posed difficulties. The handling of page breaks proved problematic, particularly when dealing with both English and Arabic versions, leading to layout shifts and inconsistencies. Another challenge involved the integration of invoices created on the platform with PayPal. We aimed to provide users with the capability to accept payments directly into their PayPal accounts through our platform. This integration necessitated meticulous record-keeping of payment transactions to ensure proper synchronization between the platform and PayPal. Furthermore, we faced the task of managing documents across multiple currencies on the platform. This requirement posed challenges when calculating reports, as differentiation based on currency became crucial for accurate reporting and analysis.";
  const solution =
    "To address the challenge of generating dynamic PDF documents, we devised a technical solution that involved shifting the application logic responsible for PDF creation to the backend. By leveraging headless browsers, we were able to render HTML layouts and seamlessly generate PDFs from the dynamically generated content. This approach ensured greater control over page breaks and layout consistency, overcoming the limitations experienced on the front end. In terms of integrating PayPal, we implemented a robust solution by utilizing user-provided app credentials, and securely storing them in our database. This allowed us to establish a direct connection between our platform and PayPal, enabling seamless payment transactions. Through meticulous application logic and synchronization mechanisms, we ensured the accurate recording and tracking of payment transactions, providing users with a seamless payment experience. To handle the complexities associated with managing multiple currencies across different documents, we incorporated a reliable third-party service. This service facilitated the calculation of currency values against a base currency (USD) and stored them in our database. With this data in place, we were able to accurately convert values into the desired currencies, enabling precise differentiation and segregation of data when generating reports. This approach ensured that reports were generated with the correct currency representation, providing users with comprehensive and accurate financial insights.";

  const tech = [
    {
      image:
        "https://braininventory.s3.us-east-2.amazonaws.com/images/project/fatoura/6.png",
      name: "Angular",
    },
    {
      image:
        "https://braininventory.s3.us-east-2.amazonaws.com/images/project/fatoura/7.png",
      name: "NodeJs",
    },
    {
      image:
        "https://braininventory.s3.us-east-2.amazonaws.com/images/project/fatoura/8.png",
      name: "MongoDB",
    },
    {
      image:
        "https://braininventory.s3.us-east-2.amazonaws.com/images/project/fatoura/9.png",
      name: "ExpressJs",
    },
    {
      image:
        "https://braininventory.s3.us-east-2.amazonaws.com/images/project/fatoura/10.png",
      name: "AWS EC2",
    },
  ];
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
        projectLink="https://fatoura.work/"
        mockup="#"
      />
      <ProjectSectionTwo />
      <BlogArticle />
      <ContactForm />
      <LocateUs />
      <Slogan />
      <Footer />
    </>
  );
};
export default Fatoura;
