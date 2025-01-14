import Image from "next/image";
import HomeButton from "../buttons/HomeButton";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
const info = [
  {
    title: "Discovery Workshop",
    details: [
      "We give the utmost importance to understand and document client’s inputs, design, and branding preferences.",
      " And clarify all the open-ended points to establish a precise and clear idea about both clients’ and project’s goals.,We work in a collaborative approach involving key stakeholders to bring alignment in the business process.",
    ],
    image: "Braininventory_discovery+workshop.webp",
    alt: "custom software development company",
  },
  {
    title: "Planning",
    details: [
      "Our services emphasize on well-defined project planning and leave nothing for assumption to avoid miscommunication.",
      "We jot down how we are going to proceed further, define detailed technical specifications, devise the design & branding guidelines of the project, and get confirmation and approval from the clients’ end on the documents and materials.",
    ],
    image: "Braininventory_planning.webp",
    alt: "it staff augmentation services",
  },
  {
    title: "Design",
    details: [
      "We provide clients with Web, Tablet, and Mobile-specific UI designs of the projects based on the approved wireframes and design guidelines.",
      "As a trusted entity, we deliver clickable prototypes on Invision platform and the source files in either Photoshop or Sketch format.",
      "Getting system UI designs approved and confirmed by the client is one of our objectives at this stage.",
    ],
    image: "Braininventory_design.webp",
    alt: "custom software development solution",
  },
  {
    title: "Development",
    details: [
      <>
        At this stage, we cater requirements for frontend, backend, web
        services, and{" "}
        <Link
          href="/mobile-development/mobile-api-integration-services"
          className="text-[#2186ff]"
        >
          API Integration Services.
        </Link>
      </>,
      "Along with preparing a strategy for Agile Scrum methodology, we factor the aspects of scalability, multi-tenancy, 3rd party integration, and craft an optimized clean code structure using cutting-edge technologies.",
      "We make sure to involve and implement clients’ reviews in each sprint/milestone.",
    ],
    image: "Braininventory_development.webp",
    alt: "custom application development company",
  },
  {
    title: "Testing",
    details: [
      "We test each sprint manually, report bugs and add those to product backlog.",
      "Once the bug fixing is done, we provide the quality release and then the final demo of the sprint is sent for clients’ approval.",
      "We make sure to do regression testing to ensure proper functioning of the previously approved milestones/sprints.",
    ],
    image: "Braininventory_testing.webp",
    alt: "it staff augmentation services",
  },
  {
    title: "Maintainance",
    details: [
      "Our work doesn’t end with development, we go the extra mile for our clients. Through an Agile approach, we ensure product enhancement.",
      "We do regular Security Audits, Brain Inventory-weekly code backups, and constant system upgradation.",
      "Along with testing the entire system each month to find any incompatibility or error, we monitor the traffic and server load and accordingly optimize it.",
    ],
    image: "Braininventory_maintenance.webp",
    alt: "custom application development company",
  },
];

const HomeSectionEight = () => {
  const [activeSection, setActiveSection] = useState("Discovery Workshop");

  // Create references for each section
  const sectionRefs = info.reduce((acc, section) => {
    acc[section.title] = useRef(null);
    return acc;
  }, {});

  useEffect(() => {
    const observers = Object.entries(sectionRefs).map(([title, ref]) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(title);
            }
          });
        },
        { threshold: 0.5 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return observer;
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const scrollToSection = (title) => {
    sectionRefs[title].current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="2xl:p-10 p-8 2xl:pb-40 pb-32">
      <div className="container padding-left-all-section">
        <h2 className="text-heading-2 Gilroy-Bold lg:whitespace-nowrap mb-5">
          The process that delivers the best!
        </h2>
        <div className="grid xl:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8 pt-10">
          {/* Navigation */}
          <nav className=" md:w-full md:sticky md:top-0 md:h-screen md:p-8 md:flex md:flex-col md:justify-center hidden">
            {info.map((section, index) => (
              <div key={index} className="flex items-center space-x-4">
                <button
                  onClick={() => scrollToSection(section.title)}
                  className={`text-4xl font-bold text-left transition-colors ${
                    activeSection === section.title
                      ? "text-blue-600"
                      : "text-transparent hover:text-blue-600/80"
                  } stroke-blue-600 stroke-2`}
                  style={{ WebkitTextStroke: "1px #2563eb" }}
                >
                  {section.title}
                 {
                  index<=info.length-2? <div className="h-10 w-full border-l border-primaryTx" />:""
                 }

                </button>
                {/* Divider Line */}
              </div>
            ))}
          </nav>

          {/* Content */}
          <div className="flex-1 p-8">
            <div className="max-w-3xl mx-auto space-y-[20vh]">
              {info.map((section, index) => (
                <section
                  key={index}
                  ref={sectionRefs[section.title]}
                  className="min-h-screen flex items-center"
                >
                  <div className="flex flex-col gap-4">
                      <>
                      <h1 className="lg:hidden block Gilroy-SemiBold text-3xl text-primaryTx">{section.title}</h1>       
                     {
                      section.details.map((detail,index)=>(
                        <p
                        key={index}
                        className="text-sm Gilroy-SemiBold leading-relaxed"
                      >
                        {detail}
                      </p>
                      ))
                     }
                      </>
                    <Image
                      src={`https://braininventory.s3.us-east-2.amazonaws.com/images/${section.image}`}
                      alt={section.alt}
                      width={800}
                      height={450}
                      className="rounded-lg"
                    />
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSectionEight;
