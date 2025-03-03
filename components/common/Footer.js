import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Facebook from "../../public/assets/footer-assets/Facebook.webp";
import Instagram from "../../public/assets/footer-assets/Instagram.webp";
import Linkedin from "../../public/assets/footer-assets/LinkedIn.webp";
import Behance from "../../public/assets/footer-assets/Behance.webp";
import dribble from "../../public/assets/footer-assets/Dribbble.webp";
import Youtube from "../../public/assets/footer-assets/YouTube.webp";
import Clutch from "../../public/assets/footer-assets/Clutch.webp";
import GoodFirms from "../../public/assets/footer-assets/GoodFirms.webp";
import TrustPilot from "../../public/assets/footer-assets/TrustPilot.webp";
import Upwork from "../../public/assets/footer-assets/UpWork.webp";

const FooterSections = [
  {
    title: "About",
    links: [
      {
        name: "Our Company",
        path: "/company",
      },
      {
        name: "How we work",
        path: "/how-we-work",
      },
      {
        name: "Career",
        path: "/career",
      },
      {
        name: "Blog",
        path: "/blog/1",
      },
      {
        name: "Contact Us",
        path: "/contact",
      },
      {
        name: "FAQs",
        path: "/faqs",
      },
    ],
  },
  {
    title: "Hire Dedicated Remote Developers",
    links: [
      {
        name: "Hire Angular Js Developers",
        path: "/hire-angularjs-developers",
      },
      {
        name: "Hire React Js Developers",
        path: "/hire-reactjs-developers",
      },
      {
        name: "Hire Node Js Developers",
        path: "/hire-nodejs-developers",
      },
      {
        name: "Hire Vue Js Developers",
        path: "/hire-vuejs-developers",
      },
      {
        name: "Hire Next Js Developers",
        path: "/hire-next-js-developers",
      },
      {
        name: "Hire MEAN Developers",
        path: "/hire-mean-stack-developers",
      },
      {
        name: "Hire MERN Developers",
        path: "/hire-mern-stack-developers",
      },
      {
        name: "Hire UI/UX Designers",
        path: "/hire-ui-ux-designers",
      },
      {
        name: "Hire Android Developers",
        path: "/hire-android-app-developers",
      },
      {
        name: "Hire iOS Developers",
        path: "/hire-ios-app-developers",
      },
      {
        name: "Hire React Native Developers",
        path: "/hire-react-native-developers",
      },
      {
        name: "Hire Python Developers",
        path: "/hire-python-developers",
      },
      {
        name: "Hire Full Stack Developers",
        path: "/hire-full-stack-developers",
      },
      {
        name: "Hire PHP Developers",
        path: "/hire-php-developers",
      },
      {
        name: "Hire Chatbot Developers",
        path: "/hire-chatbot-developers",
      },
      {
        name: "Hire Laravel Developers",
        path: "/hire-laravel-developers",
      },
      {
        name: "Hire Shopify Developers",
        path: "/hire-shopify-developers",
      },
      {
        name: "Hire Ionic Developers",
        path: "/hire-ionic-developers",
      },
      {
        name: "Hire .NET Developers",
        path: "/hire-dotnet-developers",
      },
      {
        name: "Hire Salesforce Developers",
        path: "/hire-salesforce-developers",
      },
      {
        name: "Hire Java Developers",
        path: "/hire-java-developers",
      },
      {
        name: "Hire QA Analyst",
        path: "/hire-qa-testers",
      },
    ],
  },
  {
    title: "Web App Development",
    links: [
      {
        name: "Custom Web Development",
        path: "/web-development/custom-web-development",
      },
      {
        name: "Angular JS Development",
        path: "/web-development/angularjs-development-company",
      },
      {
        name: "React JS Development",
        path: "/web-development/react-js-development-company",
      },
      {
        name: "Node JS Development",
        path: "/web-development/node-js-development-company",
      },
      {
        name: "Vue JS Development",
        path: "/web-development/vue-js-development-company",
      },
      {
        name: "MEAN Development",
        path: "/web-development/mean-stack-development-company",
      },
      {
        name: "MERN Development",
        path: "/web-development/mern-stack-development-company",
      },
      {
        name: "LAMP Development",
        path: "/web-development/lamp-application-development-services",
      },
      {
        name: "PHP Development",
        path: "/web-development/php-development-service-company",
      },
      {
        name: "Python Development",
        path: "/web-development/python-web-development-company",
      },
      {
        name: "Wordpress Website Development",
        path: "/web-development/wordpress-website-design-company",
      },
      {
        name: "Laravel Development",
        path: "/web-development/laravel-development-company",
      },
      {
        name: "CodeIgniter Development",
        path: "/web-development/codeigniter-web-development-services",
      },
      {
        name: "TypeScript Development",
        path: "/web-development/typescript-development-services",
      },
      {
        name: "Shopify Development",
        path: "/web-development/shopify-web-development-company ",
      },
      {
        name: ".Net Development",
        path: "/web-development/dotnet-development-company",
      },
      {
        name: "Salesforce Development",
        path: "/web-development/salesforce-development-services",
      },
      {
        name: "Java Development",
        path: "/web-development/java-development-company",
      },
    ],
  },
  {
    title: "Mobile App Development",
    className: "md:whitespace-nowrap",
    links: [
      {
        name: "Custom App Development",
        path: "/mobile-development/custom-mobile-app-development-company",
      },
      {
        name: "iOS App Development",
        path: "/mobile-development/ios-app-development-company",
      },
      {
        name: "Android App Development",
        path: "/mobile-development/android-app-development-company",
      },
      {
        name: "React Native App Development",
        path: "/mobile-development/react-native-app-development-company",
      },
      {
        name: "Flutter App Development",
        path: "/mobile-development/flutter-app-development-company",
      },
      {
        name: "Swift App Development",
        path: "/mobile-development/swift-app-development-services",
      },
      {
        name: "Hybrid App Development",
        path: "/mobile-development/hybrid-app-development",
      },
      {
        name: "Mobile App Integration",
        path: "/mobile-development/mobile-api-integration-services",
      },
      {
        name: "Cross Platform App Development",
        path: "/mobile-development/cross-platform-mobile-app-development",
      },
    ],
  },
  {
    title: "Industry",
    className: "md:whitespace-nowrap",
    links: [
      {
        _id: 2,
        name: "Fitness",
        path: "/industry/fitness",
      },
      {
        _id: 3,
        name: "Healthcare",
        path: "/industry/healthcare",
      },
      {
        _id: 4,
        name: "Blockchain",
        path: "/industry/blockchain",
      },
      {
        _id: 5,
        name: "Accounting",
        path: "/industry/accounting",
      },
      {
        _id: 6,
        name: "Marketplace",
        path: "/industry/marketplace",
      },
      {
        _id: 7,
        name: "Ed Tech App Provider",
        path: "/industry/edtech ",
      },
      {
        _id: 8,
        name: "Travel",
        path: "/industry/travel",
      },
      {
        _id: 9,
        name: "CRM",
        path: "/industry//crm",
      },
      {
        _id: 10,
        name: "Ecommerce",
        path: "/industry/ecommerce",
      },
      {
        _id: 11,
        name: "Energy & Utility",
        path: "/industry/energy-and-utility",
      },
      {
        _id: 12,
        name: "Meeting & Event Planning",
        path: "/industry/meeting-and-event-planning",
      },
      {
        _id: 13,
        name: "Supplychain",
        path: "/industry/supplychain",
      },
      {
        _id: 14,
        name: "Transport and Logistic",
        path: "/industry/transport-and-logistic",
      },
      {
        _id: 15,
        name: "Real Estate",
        path: "/industry/real-estate",
      },
      {
        _id: 16,
        name: "Sports",
        path: "/industry/sports",
      },
    ],
  },
  {
    title: "Portfolio",
    link: "/portfolio",
    className: "md:col-span-2",
    links: [
      {
        name: "Numetric - Online Accounting Software similar to QuickBooks",
        path: "/project/numetric",
      },
      {
        name: "Bloomia - Kegel exercise",
        path: "/project/bloomia",
      },
      {
        name: "Virifi - Blockchain Powered Document Certification & Signing Platform",
        path: "/project/virifi",
      },
      {
        name: "Revolution Travel CRM - Custom CRM Built for Travel Agents",
        path: "/project/revolution-travel-crm",
      },
      {
        name: "Fatoura - Online Invoicing Platform",
        path: "/project/fatoura",
      },
      {
        name: "My Fit Mantra - Your health partner",
        path: "/project/my-fit-mantra",
      },
      {
        name: "Ocureel - Relation Building and video sharing Application",
        path: "/project/ocureel",
      },
    ],
  },
  {
    title: "Solutions",
    className: "md:whitespace-nowrap",
    links: [
      {
        _id: 1,
        name: "Social Network Development",
        path: "/solution/social-networking-development-company",
      },
    ],
  },
  {
    title: "Services",
    links: [
      {
        name: "Support and Maintenance",
        path: "/software-maintenance-and-support-services",
      },
      {
        name: "UI/UX Development Services",
        path: "/ui-ux-development-services",
      },
      {
        name: "Mobile App Development Services",
        path: "/mobile-app-development-services",
      },
      {
        name: "IT Stuff Augmentation",
        path: "/it-staff-augmentation",
      },
    ],
  },
];
const organizations = [
  {
    _id: 1,
    src: GoodFirms,
    alt: "brain inventory best rating and reviews on Good Firm",
    href: "https://www.goodfirms.co/company/brain-inventory",
    width: 90,
    height: 28,
  },
  {
    _id: 2,
    src: Clutch,
    alt: "brain inventory best rating and reviews on Clutch",
    href: "https://clutch.co/profile/brain-inventory",
    width: 70,
    height: 28,
  },
  {
    _id: 3,
    src: TrustPilot,
    alt: "brain inventory best rating and reviews on Trust Pilot",
    href: "https://www.trustpilot.com/review/braininventory.com",
    width: 120,
    height: 28,
  },
  {
    _id: 4,
    src: Upwork,
    alt: "brain inventory best rating and reviews on Upwork",
    href: "https://www.upwork.com/ag/braininventory/",
    width: 120,
    height: 28,
  },
];

export default function Footer({ fromBlog }) {
  const [expandedSections, setExpandedSections] = useState({});

  const handleLoadMore = (index) => {
    setExpandedSections((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };
  return (
    <div
      className={`bg-secondaryBg ${
        fromBlog ? "mx-0" : "mx-0"
      } sm:px-0 px-5 py-10 border-t ${fromBlog && "bg-black"}`}
    >
      <div className="container px-8 lg:px-24 bg-secondaryBg">
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-4">
          {FooterSections.map((section, index) => {
            const isExpanded = expandedSections[index];
            return (
              <div
                key={index}
                className={
                  section.className ? section.className : "md:col-span-1"
                }
              >
                <a href={section.link} className="cursor-pointer">
                  <span className="text-[1.2rem]  text-primaryTx Gilroy-Bold mb-4 cursor-pointer mt-12">
                    {section.title}
                  </span>
                </a>
                <ul className="space-y-2">
                  {section.links
                    .map((link, linkIndex) => {
                      return (
                        <li
                          className="text-secondaryTx text-opacity-50 w-auto"
                          key={linkIndex}
                        >
                          <a href={link.path} className="cursor-pointer">
                            {link.name}
                          </a>
                        </li>
                      );
                    })
                    .slice(0, isExpanded ? section.links.length : 10)}
                </ul>
                {section.links.length > 10 && (
                  <button
                    onClick={() => handleLoadMore(index)}
                    className="text-white text-xs p-2 font-bold bg-primaryTx rounded-md mb-12 mt-4"
                  >
                    {isExpanded ? (
                      <div className="flex items-center">
                        {" "}
                        Show Less &nbsp; <FaChevronUp />
                      </div>
                    ) : (
                      <div className="flex items-center">
                        Show More &nbsp; <FaChevronDown />
                      </div>
                    )}
                  </button>
                )}
              </div>
            );
          })}
        </div>
        <div className="flex flex-wrap md:flex-row md:items-center py-16 space-y-6 md:space-y-0">
          <div>
            <ul className="text-sm space-x-6">
              {organizations.map((ele) => (
                <li
                  key={ele._id}
                  className="inline-flex items-center align-middle cursor-pointer w-1/3 justify-center lg:w-auto"
                >
                  <a href={ele.href} target="_blank" rel="noopener noreferrer">
                    <Image
                      width={ele.width}
                      height={ele.height}
                      src={ele.src}
                      alt={ele.alt}
                    />
                  </a>
                </li>
              ))}
            </ul>
            <div className="text-xs lg:text-lg w-full Gilroy-Bold my-6 md:my-0">
              © 2022 Brain Inventory - All rights reserved.
            </div>
          </div>
          <div className="flex flex-col space-y-4 md:ml-auto">
            <p>Follow us:</p>
            <div className="flex space-x-3 items-center ">
              <span className="cursor-pointer">
                <Link
                  href="https://www.facebook.com/BrainInventoryIndia/"
                  target="_blank"
                  // rel="noopener noreferrer"
                >
                  <Image
                    src={Facebook}
                    width={28}
                    height={28}
                    fetchPriority="low"
                    loading="lazy"
                    alt="Custom Software Development Company"
                  />
                </Link>
              </span>
              <span className="cursor-pointer">
                <Link
                  href="https://in.linkedin.com/company/braininventory"
                  target="_blank"
                  // rel="noopener noreferrer"
                >
                  <Image
                    src={Linkedin}
                    width={28}
                    height={28}
                    fetchPriority="low"
                    loading="lazy"
                    alt="Custom Software Development Company"
                  />
                </Link>
              </span>
              <span className="cursor-pointer">
                <Link
                  href="https://dribbble.com/brain_inventory"
                  target="_blank"
                  // rel="noopener noreferrer"
                >
                  <Image
                    src={dribble}
                    width={28}
                    height={28}
                    fetchPriority="low"
                    loading="lazy"
                    alt="Custom Software Development Company"
                  />
                </Link>
              </span>
              <span className="cursor-pointer">
                <Link
                  href="https://www.instagram.com/braininventory_com/"
                  target="_blank"
                  // rel="noopener noreferrer"
                >
                  <Image
                    src={Instagram}
                    width={28}
                    height={28}
                    fetchPriority="low"
                    loading="lazy"
                    alt="Custom Software Development Company"
                  />
                </Link>
              </span>
              <span className="cursor-pointer">
                <Link
                  href="https://www.youtube.com/channel/UCmBF3Fito6xxYWyomJ-ittw"
                  target="_blank"
                  // rel="noopener noreferrer"
                >
                  <Image
                    src={Behance}
                    width={28}
                    height={28}
                    fetchPriority="low"
                    loading="lazy"
                    alt="Custom Software Development Company"
                  />
                </Link>
              </span>
              <span className="cursor-pointer">
                <Link
                  href="https://www.youtube.com/channel/UCmBF3Fito6xxYWyomJ-ittw"
                  target="_blank"
                  // rel="noopener noreferrer"
                >
                  <Image
                    src={Youtube}
                    width={32}
                    height={32}
                    fetchPriority="low"
                    loading="lazy"
                    alt="Custom Software Development Company"
                  />
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
