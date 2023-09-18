import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Image from "next/image";
const Header = dynamic(() => import("../../components/header/Header"));
const SectionOne = dynamic(() =>
  import("../../components/project/projectDetailOne.jsx")
);
const SectionTwo = dynamic(() =>
  import("../../components/project/projectDetailTwo.jsx")
);
const SectionThree = dynamic(() =>
  import("../../components/project/projectDetailThree.jsx")
);
const PojectCarousel = dynamic(() =>
  import("../../components/project/projectDetailCarousel.jsx")
);
const ProjectInquiry = dynamic(() =>
  import("../../components/project/projectInquiryCard.jsx")
);
const ProjectDetailCard = dynamic(() =>
  import("../../components/project/projectDetailCard.jsx")
);
const TechStack = dynamic(() => import("../../components/project/projectTechstack.jsx"));
const Team = dynamic(() => import("../../components/project/projectTeam.jsx"));
const Milestone = dynamic(() => import("../../components/project/projectMilestone.jsx"));
const VisitProject = dynamic(() => import("../../components/project/projectVisit.jsx"));
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

const Numetric = () => {
  const NumetricSectionOne = {
    brief:
      "Create professional invoices and manage expenses. All you need for your growing business.",
    logo: "https://d1u4arv5y5eda6.cloudfront.net/images/project/Logo.png",
    image: "https://d1u4arv5y5eda6.cloudfront.net/images/project/Header.png",
    alt: "Numetric",
  };
  const carouselImages = [
    {
      id: 1,
      url: "https://d1u4arv5y5eda6.cloudfront.net/images/project/Web+1280+–+3.png",
    },
    {
      id: 2,
      url: "https://d1u4arv5y5eda6.cloudfront.net/images/project/Web+1280+–+4.png",
    },
    {
      id: 3,
      url: "https://d1u4arv5y5eda6.cloudfront.net/images/project/Web+1280+–+3.png",
    },
    {
      id: 4,
      url: "https://d1u4arv5y5eda6.cloudfront.net/images/project/Web+1280+–+4.png",
    },
  ];
  const challenge =
    "While working with numertic, numerous challenges arise, particularly in the context of accounting software. Developers must possess a solid comprehension of accounting principles and employ a well-designed schema to ensure data storage aligns with these principles. Upon establishing the project scope, we identified additional requirements, such as invoice customization, enabling multiple email logins for a single account, and facilitating the sending of private transactional emails through the platform. To handle subscription management, we integrated PayPal as our payment aggregator. However, we encountered several limitations, particularly with regards to the difficulty of upgrading and downgrading subscriptions. The addition of third-party services posed a significant challenge as we had to modify our application logic to align with their principles and requirements.";

  const solution =
    "As we commenced the project, we recognized the team's need to gain clarity on accounting principles. To accomplish this, we sought interactions with various financial experts. Consequently, we swiftly acquired a solid understanding of the fundamental rules of accounting. The creation of customized PDF invoices posed a non-trivial challenge. To address this, we developed our application logic to handle the customization and utilized the PDF creation library in Node.js. Our approach aimed to provide a generalized solution, enabling seamless further customization. In order to ensure user data privacy when sending transactional emails, we implemented a feature within the platform. Rather than relying on a common platform mail service, we allowed users to configure their own email settings using Amazon SES. For subscription management, we opted for PayPal as the payment aggregator to accommodate region-specific requirements. Given the presence of multiple subscriptions and the ability for users to switch between them, we implemented upgrade and downgrade options with corresponding additional charges (as specified in the project requirements). Our application logic was designed to handle all possible scenarios. After integrating Zapier as a third-party service, we realized that we needed to rewrite the backend APIs to establish effective communication with their services. However, instead of taking that approach, we developed mapper functions that served as middlewares. This alternative solution significantly expedited and streamlined the development process, resulting in faster and cleaner code.";

  const tech = [
    {
      image: "https://d1u4arv5y5eda6.cloudfront.net/projects/6.png",
      name: "Angular",
    },
    {
      image: "https://d1u4arv5y5eda6.cloudfront.net/projects/7.png",
      name: "NodeJs",
    },
    {
      image: "https://d1u4arv5y5eda6.cloudfront.net/projects/8.png",
      name: "MongoDB",
    },
    {
      image: "https://d1u4arv5y5eda6.cloudfront.net/projects/9.png",
      name: "ExpressJs",
    },
    {
      image: "https://d1u4arv5y5eda6.cloudfront.net/projects/ererf.png",
      name: "Redis",
    },
    {
      image: "https://d1u4arv5y5eda6.cloudfront.net/projects/dfdgf.png",
      name: "Nginx",
    },
    {
      image: "https://d1u4arv5y5eda6.cloudfront.net/projects/dfdf.png",
      name: "AWS EC2",
    },
    {
      image: "https://d1u4arv5y5eda6.cloudfront.net/projects/fddf.png",
      name: "AWS S3",
    },
    {
      image: "https://d1u4arv5y5eda6.cloudfront.net/projects/fdsf.png",
      name: "AWS Lambda",
    },
    {
      image: "https://d1u4arv5y5eda6.cloudfront.net/projects/nbhn.png",
      name: "AWS API Gateway",
    },
    {
      image: "https://d1u4arv5y5eda6.cloudfront.net/projects/hgh.png",
      name: "AWS SES",
    },
  ];

  const teamMembers = [
    {
      id: 1,
      name: "Krishna Agrawal",
      image: "https://d1u4arv5y5eda6.cloudfront.net/projects/Group+6420.png",
      role: "Sr. UI/UX Designer",
    },
    {
      id: 2,
      name: "Gunjan Jain",
      image: "https://d1u4arv5y5eda6.cloudfront.net/projects/Group+6423.png",
      role: "Sr. Software Architecture",
    },
    {
      id: 3,
      name: "Pradyumna Garg",
      image: "https://d1u4arv5y5eda6.cloudfront.net/projects/Group+6429.png",
      role: "Software Architecture",
    },
    {
      id: 4,
      name: "Puneet Rajwani",
      image: "https://d1u4arv5y5eda6.cloudfront.net/projects/Group+6432.png",
      role: "Software Architecture",
    },
    {
      id: 5,
      name: "Gautam Patil",
      image: "https://d1u4arv5y5eda6.cloudfront.net/projects/Group+6426.png",
      role: "Software Engineer",
    },
    {
      id: 6,
      name: "Hussain Ali",
      image: "https://d1u4arv5y5eda6.cloudfront.net/projects/Group+6435.png",
      role: "Software Engineer",
    },
    {
      id: 7,
      name: "Subhash Ajmera",
      image: "https://d1u4arv5y5eda6.cloudfront.net/projects/Group+6438.png",
      role: "Software Engineer",
    },
    {
      id: 8,
      name: "Rahul Badwaya",
      image: "https://d1u4arv5y5eda6.cloudfront.net/projects/Group+6441.png",
      role: "Software Engineer",
    },
  ];

  const milestoneContent = [
    "Multi-Language support",
    "One suite for complete accounting needs",
    "Universal compliance product",
  ];
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
          content=" Brain Inventory Blog –
Staff Augmentation | Software | Web | App Development 
"
        />
        <meta
          property="og:description"
          content="Brain Inventory Developed the cloud-based accounting software for Numetric.work that helps users to track business transactions and performance."
        />
        <meta
          property="og:url"
          content=" 
https://braininventory.in/"
        />
        <meta property="twitter:domain" content="https://braininventory.in/ " />
        <meta
          property="twitter:image"
          content="https://d1u4arv5y5eda6.cloudfront.net/images/Logobg.png"
        />
        <meta
          property="og:image"
          content="https://d1u4arv5y5eda6.cloudfront.net/images/blog-4.jpg"
        />
        <meta
          property="twitter:title"
          content=" Brain Inventory Blog – 
Staff Augmentation | Software | Web | App Development "
        />
        <meta
          property="twitter:description"
          content=" Read the latest 
technology trends, news & updates and other topics about software
& app development from Brain Inventory’s informative blogs!"
        />
        <meta property="twitter:creator" content=" BrainInventory " />
        <meta property="twitter:site" content="BrainInventory" />
        <meta property="twitter:card" content="summary_large_image" />
        <link
          rel="canonical"
          href="https://braininventory.in/project/numetric"
        />
      </Head>
      <Header />
      <div className="container project-bg pt-12">
        <SectionOne section={NumetricSectionOne} />
        <SectionTwo />
        <SectionThree />
        <PojectCarousel images={carouselImages} />
        <ProjectInquiry />
        <Image
          src="https://d1u4arv5y5eda6.cloudfront.net/images/project/IMG_0984.png"
          alt=""
          width={600}
          height={600}
          className="rounded-3xl w-[100vw] px-[10vw] py-[5vh]"
        />
        <ProjectDetailCard challenge={challenge} solution={solution} />
      </div>
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
          <ContactForm />
        </div>
        <LocateUs />
        <Slogan />
        <Footer />
      </div>
    </>
  );
};

export default Numetric;
