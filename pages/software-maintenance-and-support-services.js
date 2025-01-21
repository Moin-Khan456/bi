import React from "react";
import Head from "next/head";
import Link from "next/link";
import dynamic from "next/dynamic";
import { GoArrowUpRight } from "react-icons/go";
import BlogArticle from "../components/common/BlogArticle.jsx";
import LetsKick from "../components/common/LetsKick.js";
import FaqHire from "../components/common/Faqhire.jsx";
import { ChooseUs } from "../components/support/chooseUs.jsx";
import Faqs from "../components/mobilePages/faqs.js";
import KeepInTouch from "../components/common/keepInTouch.js";
const Header = dynamic(() => import("../components/header/Header.js"));
const Footer = dynamic(() => import("../components/common/Footer.js"));
const ContactForm = dynamic(() =>
  import("../components/common/ContactForm.jsx")
);
const TiltMarquee = dynamic(() =>
  import("../components/SolutionFitness/TiltMarquee.jsx")
);

const SectionOne = dynamic(() =>
  import("../components/support/sectionOne.jsx")
);
const SectionTwo = dynamic(() =>
  import("../components/support/sectionTwo.jsx")
);
const SectionThree = dynamic(() =>
  import("../components/support/sectionThree.jsx")
);
const SectionFour = dynamic(() =>
  import("../components/SolutionFitness/SectionFour.jsx")
);
const SectionNine = dynamic(() =>
  import("../components/SolutionFitness/SectionNine.jsx")
);
const SectionTen = dynamic(() =>
  import("../components/SolutionFitness/SectionTen.jsx")
);

function Support() {
  const solutionList = [
    {
      id: "1",
      text: "SAP Support",
      desc: "Connect and work together with experienced SAP assistance professionals and receive vital solutions on schedule. Whether it's driving innovation or boosting value creation, we have you protected with our SAP support offerings.",
    },
    {
      id: "2",
      text: "Application Maintenance and Support",
      desc: "We offer application management and improvement solutions to optimize and advance your software. Our services include refining, modifying or supplementing your application's functionality and abilities.  We help mechanize procedures, streamline commercial processes, identify potential problems, and investigate state-of-the-art solutions for elevating your applications to a higher level.",
    },
    {
      id: "3",
      text: "Modification and Reconfiguration",
      desc: "We examine your current software and implement the required changes that are crucial for its operational functionalities. We modify the data format, make adjustments to support utilities, restructure hardware, and effectively incorporate a new operating system.",
    },
    {
      id: "4",
      text: "Bug and Glitch Removal",
      desc: "Brain Inventory's technical support team resolves software issues in your business application instantly. Our troubleshooting services involve eliminating bugs, and fixing problems with the core logic - whether they stem from flaws in reasoning, coding, or design. We rapidly correct any malfunctions so your software runs smoothly.",
    },
    {
      id: "5",
      text: "Web Maintenance Services",
      desc: "Conducting regular website maintenance is vital to ensuring your website remains fully operational and accessible. Tasks like updating content, performing data backups, analyzing page load times, installing the latest security patches, and other routine procedures are essential to keeping your website functioning properly.",
    },
    {
      id: "6",
      text: "Remote IT Support Services",
      desc: "We provide prompt remote IT support to resolve important operational problems when they arise. Our team of experts, located around the world, is ready to assist you anytime an urgent, high-priority technical difficulty arises that could impact your key objectives. With our global roster of skilled technicians always on hand, we can troubleshoot your most vital, imperative technical issues at a moment’s notice day or night.",
    },
  ];

  const faqdetails = [
    {
      id: "1",
      title: "What are software maintenance and support services?",
      description:
        "IT support services are essential to guarantee that companies can continue operating as usual even in the event of unforeseen circumstances, assist in managing software platforms through the work of professionals, and enable an optimal experience for end users.",
    },
    {
      id: "2",
      title: "How much does it cost to avail of IT maintenance and support?",
      description:
        "The price for ongoing software support and updates varies based on the service level agreement you select and the specific upkeep required. Please reach out to us directly to receive a customized quote.",
    },
    {
      id: "3",
      title: "What are the advantages of software support services?",
      description:
        "Our company offers reliable IT maintenance and support services that adhere to your timelines and budgetary constraints. We tailor our offerings to your unique project needs and specifications. Additionally, we provide regular progress reports to keep you informed throughout the process.",
    },
    {
      id: "4",
      title: "Why Should I Opt For Software Maintenance And Support Services?",
      description:
        "Software maintenance and support services provide critical value for businesses small and large. By regularly monitoring and upgrading systems, maintenance keeps operations running optimally. Choosing professional maintenance services reduces unexpected downtime from glitches while making sure customers consistently have a positive experience. With routine care and adjustments, maintenance sustains peak performance across the organization.",
    },
    {
      id: "5",
      title: "Is Software Maintenance And Support Available After Deployment?",
      description:
        "Brain Inventory provides ongoing software maintenance and support after system deployment. We recognize that sustaining an efficient system is crucial for ideal functionality and maximum return on investment. Our comprehensive support offerings encompass maintenance, upgrades, patching, troubleshooting, and resolving any issues as they arise. By partnering with Brain Inventory for post-deployment sustenance, clients gain peace of mind knowing their system will be preserved at peak performance.",
    },
  ];

  const softwareMaintenanceandSupportImportantPoints = [
    "Software maintenance and Support assistance are vital for a company's expansion because they guarantee the seamless performance of the software programs that enable different business activities.  Consistent upkeep and assistance help in pinpointing and resolving any defects, hitches, or security risks that could disturb business workflows or jeopardize data safety. By dedicating resources to software maintenance and support, companies can avert expensive downtime, boost system dependability, and enrich user satisfaction.",
    "The provision of maintenance and support services lets businesses obtain updates and upgrades, helping them remain competitive as technology quickly changes. Proactive maintenance and strong support services boost efficiency, productivity, and overall business expansion by allowing software systems to run smoothly and optimally. In short, keeping software up-to-date through ongoing maintenance and support facilitates seamless workflows and peak system performance, which in turn empowers businesses to thrive amid rapid technological shifts.",
  ];

  const benefitsOfSoftwareMaintenanceAndSupportService = [
    "Software maintenance and support services provide several advantages for companies. To begin with, these services guarantee that software programs keep operating smoothly and productively, with fewer errors and glitches. Regular upgrades and bug repairs given through maintenance assist in resolving any problems that come up, enhancing overall user satisfaction. Furthermore, maintenance and support services ensure the security of software frameworks by regularly modernizing security precautions to guard against new threats.",
    "A key benefit of maintenance and support services is enhancing how well software runs. These services assist with pinpointing and fixing issues that hamper performance, which improves software speed and dependability. As a result, productivity rises since users can use software apps without obstacles or lags. In addition, software maintenance and support services facilitate the integration of new capabilities and technologies into current software platforms smoothly. This allows companies to adapt and develop their software to align with shifting business requirements and industry movements, empowering them to remain competitive in a quickly changing market.",
  ];

  const sectionTwoDesc =
    "Software maintenance and support involves the continuous work of administering, modifying, and improving software programs to persistently satisfy end users' changing requirements and stay operational for an extended period. It includes diverse tasks like resolving errors, improving efficiency, applying security patches, and adding capabilities. Software support seeks to extend the lifespan of a software solution, boost its ease of use, and reduce interruptions for end users. It constitutes a crucial stage in software creation, guaranteeing that the software remains dependable, protected, and consistent with evolving business demands and technological progress.";

  const chooseBI = [
    "Our software maintenance and support assistance are used by companies in many countries, allowing them to gain an advantage over their competitors. We have several unique qualities that make us the first pick for businesses looking for these services. We put a big focus on data management, implementing strict policies to safeguard client confidentiality and handling sensitive data with only approved professionals. Meticulousness is central to how we operate, providing our clients with the assurance to roll out their software without concern. Our offerings are built to scale easily, providing adaptability and dependability in executing work. By harnessing innovative technologies and tools, we can deliver quick turnarounds in software support, addressing and enhancing inefficient components.",
    "Our group is made up of certified software support experts well-versed in cutting-edge technologies, guaranteeing optimal outcomes.  We boast a state-of-the-art infrastructure, including comprehensive testing procedures and software support facilities, to assist our services. Our dedicated groups are accessible 24/7, guaranteeing timely recording, monitoring, problem-solving, and immediate resolution of service inquiries to enhance stability. Ultimately, our affordable options are customized to accommodate the varying financial capabilities of our clients, allowing businesses from all sectors to access our services.",
  ];

  return (
    <>
      <Head>
        <title>Software Maintenance and Support Service Company</title>
        <meta
          name="description"
          content="Brain Inventory provides expert and best software maintenance and support services for their customers satisfaction. Contact us today!"
        />
        <meta
          property="og:description"
          content="Brain Inventory provides expert and best software maintenance and support services for their customers satisfaction. Contact us today!"
        />
        <meta
          name="og:title"
          content="Software Maintenance and Support Service Company"
        />
        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/Suppot-and-maintence.png"
        />
        <meta
          property="og:url"
          content="https://braininventory.in/software-maintenance-and-support-services"
        />
        <link
          rel="canonical"
          href="https://braininventory.in/software-maintenance-and-support-services"
        />
      </Head>

      <main className="">
        <Header />
        <SectionOne />
        <section>
          <SectionTwo
            head="What is Software Maintenance?"
            description={sectionTwoDesc}
          />

          <SectionThree
            title="Why Software Maintenance and Support Important for Business Growth"
            points={softwareMaintenanceandSupportImportantPoints}
          />

          <SectionThree
            title="Benefits of Software Maintenance and Support Service"
            points={benefitsOfSoftwareMaintenanceAndSupportService}
          />

          <Link href="#talk">
            <button
              className="flex items-center m-auto justify-center font-Satoshi font-bold text-xs bg-primaryTx text-primaryBg rounded-full   px-8
                             py-4 my-12"
            >
              START PROJECT
              <GoArrowUpRight className="font-extrabold text-3xl ml-4 p-2 rounded-full" />
            </button>
          </Link>

          <TiltMarquee title="Expert Software Maintenance and Support Services" />

          <SectionFour
            title="Our Custom Software Maintenance Services"
            description={""}
            solutionList={solutionList}
          />

          <ChooseUs title={"WHY CHOOSE US"} points={chooseBI} />

          <SectionNine
            brand="SOftware DEVELOPMENT"
            pageCategory="SOftware DEVELOPMENT"
            pageCategoryAbbr="SOftware DEVELOPMENT"
            slow={70000}
            fast={55000}
            alt={"Software Development Services"}
            src="https://braininventory.s3.us-east-2.amazonaws.com/images/support1.jpeg"
          />
          <SectionTen
            oneName={"EDUCATION.NUMETRIC"}
            oneVideo={
              "https://braininventory.s3.us-east-2.amazonaws.com/images/Industry+page+mockups/Edtech/Education+Numetric/1.mp4"
            }
            oneImage={
              "https://braininventory.s3.us-east-2.amazonaws.com/images/Industry+page+mockups/Edtech/Education+Numetric/Ed+tech.png"
            }
            twoName={"EDUCATOR UNITED"}
            twoVideo={
              "https://braininventory.s3.us-east-2.amazonaws.com/images/Industry+page+mockups/Edtech/Dummy+1/3.mp4"
            }
            twoImage={
              "https://braininventory.s3.us-east-2.amazonaws.com/images/Industry+page+mockups/Edtech/Dummy+1/Ed+tech.png"
            }
            oneLink={null}
            twoLink={null}
            alt="Our Work"
          />
          <Faqs faq={faqdetails} />
          <hr />
          <BlogArticle />
                      <KeepInTouch />
          
          <LetsKick />
          <hr />
          <Footer />
        </section>
      </main>
    </>
  );
}

export default Support;
