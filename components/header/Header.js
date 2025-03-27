import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TagManager from "react-gtm-module";
import { MdOutlineUnfoldMore, MdUnfoldLess } from "react-icons/md";
import HeaderLogo from "../../public/assets/header-assets/logo.webp";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [load, setLoad] = useState(false);
  const [blockName, setBlockName] = useState("companyChildren");

  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-MWMG4P2" });
  }, [blockName]);

  const handlesidebar = () => {
    if (navOpen) {
      document.getElementById("sidenav")?.classList.add("-translate-y-full");
    } else {
      document.getElementById("sidenav")?.classList.remove("-translate-y-full");
    }
    setNavOpen(!navOpen);
  };

  const navbarRef = useRef(null);

  useEffect(() => {
    let prevScrollpos = window.pageYOffset;
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const navbar = navbarRef.current;
      if (navbar && window.pageYOffset > 50) {
        if (prevScrollpos > currentScrollPos) {
          navbar.classList.add("scrollDown");
          navbar.classList.remove("scrollUp"); 
        } else {
          navbar.classList.add("scrollUp");
          navbar.classList.remove("scrollDown"); 
        }
        prevScrollpos = currentScrollPos;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {load && (
        <div className="fixed z-50 w-screen h-screen bg-black">
          <video
            className="absolute top-0 left-0 w-full h-full object-contain scale-50 z-0 xs:rounded-b-3xl lg:rounded-r-3xl mobileContactVideo"
            muted
            loop
            autoPlay={true}
            controls={false}
          >
            <source
              src="https://braininventory.s3.us-east-2.amazonaws.com/videos/biloader.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      )}
      <nav>
        <div
          id="navbar"
          ref={navbarRef}
          className="fixed top-0 flex justify-between items-center w-full py-3 px-4 lg:px-8 z-50 transition-transform duration-300"
        >
          <Link href="/" className="cursor-pointer">
            <span className="text-4xl Gilroy-Bold z-30">
              {!navOpen && (
                <div className="relative w-36 h-12 cursor-pointer">
                  <Image
                    priority={true}
                    src={HeaderLogo}
                    className="cursor-pointer"
                    alt="it service company offers web and app design and development"
                    preload="metadata"
                    width={144}
                    height={48}
                  />
                </div>
              )}
            </span>
          </Link>
          {navOpen ? (
            <div className="dropdown lg:block dropdown-hover">
              <label className="btn bg-transparent outline-none border-0 hover:bg-transparent m-1">
                <div className="flex justify-between align-middle items-center h-11 z-[100] gap-1 ">
                    <Link href="/contact#contact">
                  <p className="px-4 text-xs Gilroy-Light h-11 flex justify-center items-center lowercase mobile-none  bg-primaryTx">
                    request A Quote
                  </p>
                    </Link>
                </div>
                <div className="flex justify-between align-middle items-center h-11 z-[100] gap-1 ">
                <span
                    onClick={() => {
                      handlesidebar();
                    }}
                    className="bg-primaryTx mx-2 items-center h-11 px-4 text-primaryBg"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 relative top-3 "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </span>
                </div>
              </label>
            </div>
          ) : (
            <div className="dropdown lg:block dropdown-hover">
              <label className="btn  bg-transparent outline-none border-0 hover:bg-transparent m-1">
                <div className="flex justify-between align-middle items-center h-11 z-[100] gap-1 ">
                    <Link href="/contact#contact">
                  <p className="px-4 text-xs Gilroy-Light h-11 flex justify-center items-center lowercase mobile-none  bg-primaryTx">
                    request A Quote
                  </p>
                    </Link>
                </div>
                <div className="flex justify-between align-middle items-center h-11 z-[100] gap-1 ">
                <span
                    onClick={() => {
                      handlesidebar();
                    }}
                    className="bg-primaryTx mx-2 items-center h-11 px-4 text-primaryBg"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 relative top-3"
                      width="15.5"
                      height="11.5"
                      viewBox="0 0 15.5 11.5"
                    >
                      <g
                        id="Group_3668"
                        data-name="Group 3668"
                        transform="translate(-1821.75 -41.75)"
                      >
                        <line
                          id="Line_181"
                          data-name="Line 181"
                          x2="14"
                          transform="translate(1822.5 42.5)"
                          fill="none"
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeWidth="1.5"
                        />
                        <line
                          id="Line_182"
                          data-name="Line 182"
                          x2="8.326"
                          transform="translate(1822.5 47.5)"
                          fill="none"
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeWidth="1.5"
                        />
                        <line
                          id="Line_226"
                          data-name="Line 226"
                          x2="14"
                          transform="translate(1822.5 52.5)"
                          fill="none"
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeWidth="1.5"
                        />
                      </g>
                    </svg>
                  </span>
                </div>
              </label>
            </div>
          )}
        </div>
        <div
          id="sidenav"
          className="fixed inset-0 overflow-hidden transition-transform -translate-y-full duration-300 bg-primaryBg z-40 flex gap-10"
        >
          <div className="grid lg:grid-cols-4 grid-cols-1 px-8 py-16 lg:px-28 w-full">
            <div className="">
              <h3
                onClick={() => {
                  setBlockName("companyChildren");
                }}
                className="stroke-text text-3xl text-left Gilroy-Bold cursor-pointer lg:pb-6"
              >
                About us
              </h3>
              <h3
                onClick={() => {
                  setBlockName("ServicesChildren");
                }}
                className="stroke-text text-3xl Gilroy-Bold text-left cursor-pointer lg:py-6"
              >
                Services
              </h3>
              <Link href="/portfolio">
                <h3 className="stroke-text text-3xl Gilroy-Bold text-left cursor-pointer lg:py-6">
                  Portfolio
                </h3>
              </Link>
              <Link href="/career">
                <h3 className="stroke-text text-3xl Gilroy-Bold text-left cursor-pointer lg:py-6">
                  Career
                </h3>
              </Link>
              <h3
                onClick={() => {
                  setBlockName("Industry");
                }}
                className="stroke-text text-3xl Gilroy-Bold text-left cursor-pointer lg:py-6"
              >
                Industry
              </h3>
              <h3
                onClick={() => {
                  setBlockName("Solution");
                }}
                className="stroke-text text-3xl Gilroy-Bold text-left cursor-pointer lg:py-6"
              >
                Solution
              </h3>
              <Link href="/contact">
                <h3 className="stroke-text text-3xl Gilroy-Bold text-left cursor-pointer lg:py-6">
                  Contacts
                </h3>
              </Link>
            </div>
            <div className="col-span-3">
              {blockName === "companyChildren" && (
                <CompanyChildren setLoad={setLoad} />
              )}
              {blockName === "ServicesChildren" && <ServicesChildren />}
              {blockName === "Industry" && <Industry />}
              {blockName === "Solution" && <Solution />}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

const CompanyChildren = () => {
  return (
    <div className="col-span-4 lg:grid grid-cols-1">
      <div className="space-y-4">
        <h2 className="text-2xl Gilroy-Bold">About</h2>
        <ul className="space-y-2">
          <li className="text-secondaryTx text-opacity-50">
            <Link href="/company" className="cursor-pointer">
              Our Company
            </Link>
          </li>
          <li className="text-secondaryTx text-opacity-50">
            <Link href="/how-we-work" className="cursor-pointer">
              How we work
            </Link>
          </li>
          <li className="text-secondaryTx text-opacity-50">
            <Link href="/career" className="cursor-pointer">
              Careers
            </Link>
          </li>
          <li className="text-secondaryTx text-opacity-50">
            <Link href="/blog/1" className="cursor-pointer">
              Blog
            </Link>
          </li>
          <li className="text-secondaryTx text-opacity-50">
            <Link href="/contact" className="cursor-pointer">
              Contact Us
            </Link>
          </li>
          <li className="text-secondaryTx text-opacity-50">
            <Link href="/faqs" className="cursor-pointer">
              FAQs
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

const ServicesChildren = () => {
  const webLinks = [
    {
      _id: 1,
      name: "Custom Web Development",
      link: "/web-development/custom-web-development",
    },
    {
      _id: 2,
      name: "Angular JS Development",
      link: "/web-development/angularjs-development-company",
    },
    {
      _id: 3,
      name: "React JS Development",
      link: "/web-development/react-js-development-company",
    },
    {
      _id: 4,
      name: "Node JS Development",
      link: "/web-development/node-js-development-company",
    },
    {
      _id: 5,
      name: "Vue JS Development",
      link: "/web-development/vue-js-development-company",
    },
    {
      _id: 6,
      name: "MEAN Development",
      link: "/web-development/mean-stack-development-company",
    },
    {
      _id: 7,
      name: "MERN Development",
      link: "/web-development/mern-stack-development-company",
    },
    {
      _id: 8,
      name: "LAMP Development",
      link: "/web-development/lamp-application-development-services",
    },
    {
      _id: 9,
      name: "PHP Development",
      link: "/web-development/php-development-service-company",
    },
    {
      _id: 10,
      name: "Python Development",
      link: "/web-development/python-web-development-company",
    },
    {
      _id: 11,
      name: "Wordpress Website Development",
      link: "/web-development/wordpress-website-design-company",
    },
    {
      _id: 12,
      name: "Laravel Development",
      link: "/web-development/laravel-development-company",
    },
    {
      _id: 13,
      name: "CodeIgniter Development",
      link: "/web-development/codeigniter-web-development-services",
    },
    {
      _id: 14,
      name: "TypeScript Development",
      link: "/web-development/typescript-development-services",
    },
    {
      _id: 15,
      name: "Shopify Development",
      link: "/web-development/shopify-web-development-company",
    },
    {
      _id: 16,
      name: ".Net Development",
      link: "/web-development/dotnet-development-company",
    },
    {
      _id: 17,
      name: "Salesforce Development",
      link: "/web-development/salesforce-development-services",
    },
    {
      _id: 18,
      name: "Java Development",
      link: "/web-development/java-development-company",
    },
  ];
  const mobileLinks = [
    {
      _id: 1,
      name: "Custom App Development",
      link: "/mobile-development/custom-mobile-app-development-company",
    },
    {
      _id: 2,
      name: "iOS App Development",
      link: "/mobile-development/ios-app-development-company",
    },
    {
      _id: 3,
      name: "Android App Development",
      link: "/mobile-development/android-app-development-company",
    },
    {
      _id: 4,
      name: "React Native App Development",
      link: "/mobile-development/react-native-app-development-company",
    },
    {
      _id: 5,
      name: "Flutter App Development",
      link: "/mobile-development/flutter-app-development-company",
    },
    {
      _id: 6,
      name: "Swift App Development",
      link: "/mobile-development/swift-app-development-services",
    },
    {
      _id: 7,
      name: "Hybrid App Development",
      link: "/mobile-development/hybrid-app-development",
    },
    {
      _id: 8,
      name: "Mobile App Integration",
      link: "/mobile-development/mobile-api-integration-services",
    },
    {
      _id: 9,
      name: "Ionic App Development",
      link: "/mobile-development/cross-platform-mobile-app-development",
    },
  ];

  const hireLinks = [
    {
      _id: 1,
      name: "Hire Angular JS Developers",
      link: "/hire-angularjs-developers",
    },
    {
      _id: 2,
      name: "Hire React JS Developers",
      link: "/hire-reactjs-developers",
    },
    {
      _id: 3,
      name: "Hire Node JS Developers",
      link: "/hire-nodejs-developers",
    },
    {
      _id: 4,
      name: "Hire Vue JS Developers",
      link: "/hire-vuejs-developers",
    },
    {
      _id: 5,
      name: "Hire NextJS Developers",
      link: "/hire-next-js-developers",
    },
    {
      _id: 6,
      name: "Hire MEAN Developers",
      link: "/hire-mean-stack-developers",
    },
    {
      _id: 7,
      name: "Hire MERN Developers",
      link: "/hire-mern-stack-developers",
    },
    {
      _id: 9,
      name: "Hire Android Developers",
      link: "/hire-android-app-developers",
    },
    {
      _id: 10,
      name: "Hire iOS Developers",
      link: "/hire-ios-app-developers",
    },
    {
      _id: 11,
      name: "Hire React Native Developers",
      link: "/hire-react-native-developers",
    },
    {
      _id: 12,
      name: "Hire Python Developers",
      link: "/hire-python-developers",
    },
    {
      _id: 13,
      name: "Hire Full Stack Developers",
      link: "/hire-full-stack-developers",
    },
    {
      _id: 14,
      name: "Hire PHP Developers",
      link: "/hire-php-developers",
    },
    {
      _id: 15,
      name: "Hire Chatbot Developers",
      link: "/hire-chatbot-developers",
    },
    {
      _id: 8,
      name: "Hire UI/UX Designers",
      link: "/hire-ui-ux-developers",
    },
    {
      _id: 17,
      name: "Hire Laravel Developers",
      link: "/hire-laravel-developers",
    },
    {
      _id: 18,
      name: "Hire Shopify Developers",
      link: "/hire-shopify-developers",
    },
    {
      _id: 19,
      name: "Hire Ionic Developers",
      link: "/hire-ionic-developers",
    },
    {
      _id: 20,
      name: "Hire .NET Developers",
      link: "/hire-dotnet-developers",
    },
    {
      _id: 21,
      name: "Hire Salesforce Developers",
      link: "/hire-salesforce-developers",
    },
    {
      _id: 22,
      name: "Hire Java Developers",
      link: "/hire-java-developers",
    },
    {
      _id: 16,
      name: "Hire QA Analysts",
      link: "/hire-qa-testers",
    },
  ];

  const [showMore, setShowMore] = useState(false);
  const [showMoreWebLinks, setShowMoreWebLinks] = useState(false);
  return (
    <div className="col-span-4 lg:grid lg:grid-cols-3 lg:gap-6 hidden">
      <div className="space-y-4">
        <h2 className="text-2xl Gilroy-Bold">Web Development</h2>
        <ul
          className={`space-y-2 ${
            showMoreWebLinks ? "overflow-y-scroll" : "overflow-y-hidden"
          } scrollbar-tiny h-[65vh] mr-3`}
        >
          {webLinks?.map((ele) => (
            <li className="text-secondaryTx text-opacity-50" key={ele._id}>
              <Link href={ele.link} className="cursor-pointer">
                {ele.name}
              </Link>
            </li>
          ))}
        </ul>
        {webLinks.length > 12 && !showMoreWebLinks ? (
          <button
            className="flex text-sm items-center bg-primaryTx text-primaryBg px-3 py-1 rounded Gilroy-Bold"
            onClick={() => setShowMoreWebLinks(true)}
          >
            Show More &nbsp; <MdOutlineUnfoldMore />
          </button>
        ) : (
          <button
            className="flex text-sm items-center bg-primaryTx text-primaryBg px-3 py-1 rounded  Gilroy-Bold"
            onClick={() => setShowMoreWebLinks(false)}
          >
            Show Less &nbsp; <MdUnfoldLess />
          </button>
        )}
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl Gilroy-Bold">Mobile Development </h2>
        <ul className="space-y-2">
          {mobileLinks?.map((ele) => (
            <li className="text-secondaryTx text-opacity-50" key={ele._id}>
              <Link href={ele.link} className="cursor-pointer">
                {ele.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="space-y-4">
        <h2 className="text-2xl Gilroy-Bold">Hire Dedicated Developers</h2>
        <ul
          className={`space-y-2 ${
            showMore ? "overflow-y-scroll" : "overflow-y-hidden"
          } scrollbar-tiny h-[65vh]`}
        >
          {hireLinks?.map((ele, index) => (
            <li className="text-secondaryTx text-opacity-50" key={ele._id}>
              <Link href={ele.link} className="cursor-pointer">
                {ele.name}
              </Link>
            </li>
          ))}
        </ul>
        {hireLinks.length > 12 && !showMore ? (
          <button
            className="flex text-sm items-center bg-primaryTx text-primaryBg px-3 py-1 rounded  Gilroy-Bold"
            onClick={() => setShowMore(true)}
          >
            Show More &nbsp; <MdOutlineUnfoldMore />
          </button>
        ) : (
          <button
            className="flex text-sm items-center bg-primaryTx text-primaryBg px-3 py-1 rounded  Gilroy-Bold"
            onClick={() => setShowMore(false)}
          >
            Show Less &nbsp; <MdUnfoldLess />
          </button>
        )}
      </div>
    </div>
  );
};

const Industry = () => {
  const solutionLinks = [
    {
      _id: 2,
      name: "Fitness",
      link: "/industry/fitness",
    },
    {
      _id: 3,
      name: "Healthcare",
      link: "/industry/healthcare",
    },
    {
      _id: 4,
      name: "Blockchain",
      link: "/industry/blockchain",
    },
    {
      _id: 5,
      name: "Accounting",
      link: "/industry/accounting",
    },
    {
      _id: 6,
      name: "Marketplace",
      link: "/industry/marketplace",
    },
    {
      _id: 7,
      name: "Ed Tech",
      link: "/industry/edtech",
    },
    {
      _id: 8,
      name: "Travel",
      link: "/industry/travel",
    },
    {
      _id: 9,
      name: "CRM",
      link: "/industry/crm",
    },
    {
      _id: 10,
      name: "Ecommerce",
      link: "/industry/ecommerce",
    },
    {
      _id: 11,
      name: "Energy & Utility",
      link: "/industry/energy-and-utility",
    },
    {
      _id: 12,
      name: "Meeting & Event Planning",
      link: "/industry/meeting-and-event-planning",
    },
    {
      _id: 13,
      name: "Supplychain",
      link: "/industry/supplychain",
    },
    {
      _id: 14,
      name: "Transport and Logistic",
      link: "/industry/transport-and-logistic",
    },
    {
      _id: 15,
      name: "Real Estate",
      link: "/industry/real-estate",
    },
    {
      _id: 16,
      name: "Sports",
      link: "/industry/sports",
    },
  ];

  return (
    <div className="col-span-4 lg:grid lg:grid-cols-1 hidden">
      <div className="space-y-4">
        <h2 className="text-2xl Gilroy-Bold">Industry</h2>
        <ul className="space-y-2">
          {solutionLinks?.map((ele) => (
            <li className=" text-opacity-50 text-secondaryTx" key={ele._id}>
              <Link href={ele.link} className="cursor-pointer ">
                {ele.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
const Solution = () => {
  const solutionLinks = [
    {
      _id: 1,
      name: "Social Networking Development",
      link: "/solution/social-networking-development-company",
    },
  ];

  return (
    <div className="col-span-4 lg:grid lg:grid-cols-1 hidden">
      <div className="space-y-4">
        <h2 className="text-2xl Gilroy-Bold">Solutions</h2>
        <ul className="space-y-2">
          {solutionLinks?.map((ele) => (
            <li className="text-secondaryTx text-opacity-50" key={ele._id}>
              <Link href={ele.link} className="cursor-pointer text-secondaryTx">
                {ele.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
