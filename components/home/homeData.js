import Link from "next/link";

export const info =
    {
        title:"The process that delivers the best!",
        description:"",
        content:[
            {
                title: "Discovery Workshop",
                details: [
                  "We give the utmost importance to understand and document client’s inputs, design, and branding preferences.",
                  " And clarify all the open-ended points to establish a precise and clear idea about both clients’ and project’s goals.,We work in a collaborative approach involving key stakeholders to bring alignment in the business process.",
                ],
                image: "https://braininventory.s3.us-east-2.amazonaws.com/images/Braininventory_discovery+workshop.webp",
                alt: "custom software development company",
              },
              {
                title: "Planning",
                details: [
                  "Our services emphasize on well-defined project planning and leave nothing for assumption to avoid miscommunication.",
                  "We jot down how we are going to proceed further, define detailed technical specifications, devise the design & branding guidelines of the project, and get confirmation and approval from the clients’ end on the documents and materials.",
                ],
                image: "https://braininventory.s3.us-east-2.amazonaws.com/images/Braininventory_planning.webp",
                alt: "it staff augmentation services",
              },
              {
                title: "Design",
                details: [
                  "We provide clients with Web, Tablet, and Mobile-specific UI designs of the projects based on the approved wireframes and design guidelines.",
                  "As a trusted entity, we deliver clickable prototypes on Invision platform and the source files in either Photoshop or Sketch format.",
                  "Getting system UI designs approved and confirmed by the client is one of our objectives at this stage.",
                ],
                image: "https://braininventory.s3.us-east-2.amazonaws.com/images/Braininventory_design.webp",
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
                image: "https://braininventory.s3.us-east-2.amazonaws.com/images/Braininventory_development.webp",
                alt: "custom application development company",
              },
              {
                title: "Testing",
                details: [
                  "We test each sprint manually, report bugs and add those to product backlog.",
                  "Once the bug fixing is done, we provide the quality release and then the final demo of the sprint is sent for clients’ approval.",
                  "We make sure to do regression testing to ensure proper functioning of the previously approved milestones/sprints.",
                ],
                image: "https://braininventory.s3.us-east-2.amazonaws.com/images/Braininventory_testing.webp",
                alt: "it staff augmentation services",
              },
              {
                title: "Maintainance",
                details: [
                  "Our work doesn’t end with development, we go the extra mile for our clients. Through an Agile approach, we ensure product enhancement.",
                  "We do regular Security Audits, Brain Inventory-weekly code backups, and constant system upgradation.",
                  "Along with testing the entire system each month to find any incompatibility or error, we monitor the traffic and server load and accordingly optimize it.",
                ],
                image: "https://braininventory.s3.us-east-2.amazonaws.com/images/Braininventory_maintenance.webp",
                alt: "custom application development company",
              },
        ]
    }
