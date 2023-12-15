import Image from "next/image";
import HomeButton from "../buttons/HomeButton";
import Link from "next/link";

const info = [
  {
    title: "discovery workshop",
    details:
      "We give the utmost importance to understand and document client’s inputs, design, and branding preferences. And clarify all the open-ended points to establish a precise and clear idea about both clients’ and project’s goals. We work in a collaborative approach involving key stakeholders to bring alignment in the business process.",
    image: "Braininventory_discovery+workshop.jpg",
    alt: "custom software development company",
  },
  {
    title: "planning",
    details:
      "Our services emphasize on well-defined project planning and leave nothing for assumption to avoid miscommunication. We jot down how we are going to proceed further, define detailed technical specifications, devise the design & branding guidelines of the project, and get confirmation and approval from the clients’ end on the documents and materials.",
    image: "Braininventory_planning.jpg",
    alt: "it staff augmentation services",
  },
  {
    title: "design",
    details:
      "We provide clients with Web, Tablet, and Mobile-specific UI designs of the projects based on the approved wireframes and design guidelines. As a trusted entity, we deliver clickable prototypes on Invision platform and the source files in either Photoshop or Sketch format. Getting system UI designs approved and confirmed by the client is one of our objectives at this stage.",
    image: "Braininventory_design.jpg",
    alt: "custom software development solution",
  },
  {
    title: "development",
    details:
      "At this stage, we cater requirements for frontend, backend, web services, and API development integration. Along with preparing a strategy for Agile Scrum methodology, we factor the aspects of scalability, multi-tenancy, 3rd party integration, and craft an optimized clean code structure using cutting-edge technologies. We make sure to involve and implement clients’ reviews in each sprint/milestone.",
    image: "Braininventory_development.jpg",
    alt: "custom application development company",
  },
  {
    title: "testing",
    details:
      "We test each sprint manually, report bugs and add those to product backlog. Once the bug fixing is done, we provide the quality release and then the final demo of the sprint is sent for clients’ approval. We make sure to do regression testing to ensure proper functioning of the previously approved milestones/sprints.",
    image: "Braininventory_testing.jpg",
    alt: "it staff augmentation services",
  },
  {
    title: "maintainance",
    details:
      "Our work doesn’t end with development, we go the extra mile for our clients. Through an Agile approach, we ensure product enhancement. We do regular Security Audits, Brain Inventory-weekly code backups, and constant system upgradation. Along with testing the entire system each month to find any incompatibility or error, we monitor the traffic and server load and accordingly optimize it.",
    image: "Braininventory_maintenance.jpg",
    alt: "custom application development company",
  },
];

const HomeSectionEight = () => {
  return (
    <div className="2xl:p-10 p-8 2xl:pb-40 pb-32">
      <div className="container padding-left-all-section">
        <div className="divide-y">
          {info.map((el) => (
            <Section key={el.title} info={el}></Section>
          ))}
        </div>
        <HomeButton>
          <Link href="/portfolio">
            <span className="2xl:text-2xl text-xl transition-all">
              Explore more
            </span>
          </Link>
        </HomeButton>
      </div>
    </div>
  );
};

const Section = ({ info }) => {
  return (
    <>
      <div className="grid xl:grid-cols-5 md:grid-cols-2 grid-cols-1  2xl:gap-10 gap-8 2xl:py-10 py-8">
        <span className="xl:col-span-5 md:col-span-2 col-span-1 stroke-text Gilroy-Bold text-heading-1">
          {info.title}
        </span>
        <div className="xl:col-span-2 md:col-span-1 col-span-1 relative h-[350px]">
          <Image layout="responsive"
        srcSet="/image-320w.jpg 320w,
              /image-480w.jpg 480w,
              /image-800w.jpg 800w"
        sizes="(max-width: 320px) 280px,
             (max-width: 480px) 440px,
             800px"
            src={"https://braininventory.s3.us-east-2.amazonaws.com/images/" + info.image}
            loading="lazy"
            alt={info.alt}
            objectFit="cover"
          />
        </div>
        <p className="2xl:text-3xl xl:text-2xl text-xl Gilroy-Light leading-loose xl:col-span-3 md:col-span-1 col-span-1">
          {info.details}
        </p>
      </div>
    </>
  );
};

export default HomeSectionEight;
