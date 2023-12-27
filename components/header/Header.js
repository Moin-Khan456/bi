import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TagManager from "react-gtm-module";
import { MdOutlineUnfoldMore, MdUnfoldLess } from "react-icons/md";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [load, setLoad] = useState(false);
  const [blockName, setBlockName] = useState("companyChildren");
  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-MWMG4P2" });
  }, [blockName]);

  const handlesidebar = () => {
    if (navOpen) {
      document.getElementById("sidenav").classList.add("-translate-y-full");
    } else {
      document.getElementById("sidenav").classList.remove("-translate-y-full");
    }
    setNavOpen(!navOpen);
  };

  useEffect(() => {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (window.pageYOffset > 50) {
        if (prevScrollpos > currentScrollPos) {
          document.getElementById("navbar").classList.remove("scrollUp");
        } else {
          document.getElementById("navbar").classList.add("scrollUp");
        }
        prevScrollpos = currentScrollPos;
      }
    };
  }, []);
  useEffect(() => {
    console.log(load);
  }, [load]);

  return (
    <>
      {load && (
        <div className="fixed z-50  w-screen h-screen bg-black">
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
          className="fixed top-0 flex justify-between items-center w-full py-3 px-4 lg:px-8 z-50"
        >
          <Link href="/" className="cursor-pointer">
            <span className="text-4xl Gilroy-Bold z-30">
              {!navOpen && (
                <div className="relative w-36 h-12 cursor-pointer">
                  <Image
                    priority={true}
                    src="https://braininventory.s3.us-east-2.amazonaws.com/images/main/Logobg.png"
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
            <div className="dropdown lg:block  dropdown-hover">
              <label className="btn bg-transparent outline-none border-0 hover:bg-transparent m-1">
                <div className="flex  justify-between align-middle items-center bg-case-blue-request h-11 z-[100]">
                  <p className="px-4 text-xs Gilroy-Light lowercase lg:block hidden">
                    <Link href="/contact">request A Quote</Link>
                  </p>
                  <span
                    onClick={() => {
                      handlesidebar();
                    }}
                    className="bg-base-blue-1 items-center h-11 px-4 text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 relative top-3"
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
            <div className="dropdown lg:block  dropdown-hover">
              <label className="btn  bg-transparent outline-none border-0 hover:bg-transparent m-1">
                <div className="flex  justify-between align-middle items-center bg-case-blue-request h-11 z-[100]">
                  <p className="px-4 text-xs Gilroy-Light lowercase mobile-none">
                    <Link href="/contact">request A Quote</Link>
                  </p>
                  <span
                    onClick={() => {
                      handlesidebar();
                    }}
                    className="bg-base-blue-1 items-center h-11 px-4 text-white"
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
          className="fixed inset-0 overflow-hidden transition-transform -translate-y-full duration-300 bg-gradient-4 z-40 flex gap-10"
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

const CompanyChildren = ({ setLoad }) => {
  const [page, setPage] = useState(
    typeof window !== "undefined" &&
      window.location.href.split("/")[3] === "blog"
  );
  return (
    <div className="col-span-4 lg:grid grid-cols-1">
      <div className="space-y-4">
        <h2 className="text-2xl Gilroy-Bold">About</h2>
        <ul className="space-y-2">
          <li className="text-white text-opacity-50">
            <Link href="/company" className="cursor-pointer">
              Our Company
            </Link>
          </li>
          <li className="text-white text-opacity-50">
            <Link href="/how-we-work" className="cursor-pointer">
              How we work
            </Link>
          </li>
          <li className="text-white text-opacity-50">
            <Link href="/career" className="cursor-pointer">
              Careers
            </Link>
          </li>
          <li className="text-white text-opacity-50">
            <Link
              href="/blog/1"
              className="cursor-pointer"
              // onClick={() => !page && setLoad(true)}
            >
              Blog
            </Link>
          </li>
          <li className="text-white text-opacity-50">
            <Link href="/contact" className="cursor-pointer">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

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
      link: "/web-development/angular-js-development-company",
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
      link: "/web-development/lamp-development-company",
    },
    {
      _id: 9,
      name: "PHP Development",
      link: "/web-development/php-development-company",
    },
    {
      _id: 10,
      name: "Python Development",
      link: "/web-development/python-development-company",
    },
    {
      _id: 11,
      name: "Wordpress Website Development",
      link: "/web-development/wordpress-development-company",
    },
    {
      _id: 12,
      name: "Laravel Development",
      link: "/web-development/laravel-development-company",
    },
    {
      _id: 13,
      name: "CodeIgniter Development",
      link: "/web-development/codeigniter-development-services",
    },
    {
      _id: 14,
      name: "TypeScript Development",
      link: "/web-development/typescript-development-services",
    },
    {
      _id: 15,
      name: "Shopify Development",
      link: "/web-development/shopify-ecommerce-software-development-services",
    },
    {
      _id: 16,
      name: ".Net Development",
      link: "/web-development/dotnet-development-company",
    },
  ];
  const mobileLinks = [
    {
      _id: 1,
      name: "Custom App Development",
      link: "/mobile-development/custom-app-development",
    },
    {
      _id: 2,
      name: "iOS App Development",
      link: "/mobile-development/ios-development-company",
    },
    {
      _id: 3,
      name: "Android App Development",
      link: "/mobile-development/android-development-company",
    },
    {
      _id: 4,
      name: "React Native App Development",
      link: "/mobile-development/react-native-development-company",
    },
    {
      _id: 5,
      name: "Flutter App Development",
      link: "/mobile-development/flutter-development-company",
    },
    {
      _id: 6,
      name: "Swift App Development",
      link: "/mobile-development/swift-development-company",
    },
    {
      _id: 7,
      name: "Hybrid App Development",
      link: "/mobile-development/hybrid-app-development",
    },
    {
      _id: 8,
      name: "Mobile App Integration",
      link: "/mobile-development/mobile-app-integration",
    },
    {
      _id: 9,
      name: "Ionic App Development",
      link: "/mobile-development/ionic-app-development-company",
    },
  ];

  const hireLinks = [
    {
      _id: 1,
      name: "Hire Angular JS Developers",
      link: "/hire-angular-js-developers",
    },
    {
      _id: 2,
      name: "Hire React JS Developers",
      link: "/hire-react-js-developers",
    },
    {
      _id: 3,
      name: "Hire Node JS Developers",
      link: "/hire-node-js-developers",
    },
    {
      _id: 4,
      name: "Hire Vue JS Developers",
      link: "/hire-vue-js-developers",
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
      link: "/hire-android-developers",
    },
    {
      _id: 10,
      name: "Hire iOS Developers",
      link: "/hire-ios-developers",
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
      _id: 16,
      name: "Hire QA Analysts",
      link: "/hire-qa-analysts",
    },
  ];

  const [showMore, setShowMore] = useState(false);
  return (
    <div className="col-span-4 lg:grid lg:grid-cols-3 hidden">
      <div className="space-y-4">
        <h2 className="text-2xl Gilroy-Bold">Web Development</h2>
        <ul className="space-y-2">
          {webLinks?.map((ele) => (
            <li className="text-white text-opacity-50" key={ele._id}>
              <Link href={ele.link} className="cursor-pointer">
                {ele.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="space-y-4">
        <h2 className="text-2xl Gilroy-Bold">Mobile Development </h2>
        <ul className="space-y-2">
          {mobileLinks?.map((ele) => (
            <li className="text-white text-opacity-50" key={ele._id}>
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
          } scrollbar-tiny h-[70%]`}
        >
          {hireLinks?.map((ele, index) => (
            <li className="text-white text-opacity-50" key={ele._id}>
              <Link href={ele.link} className="cursor-pointer">
                {ele.name}
              </Link>
            </li>
          ))}
        </ul>
        {hireLinks.length > 16 && !showMore ? (
          <button
            className="flex items-center"
            onClick={() => setShowMore(true)}
          >
            Show More &nbsp; <MdOutlineUnfoldMore />
          </button>
        ) : (
          <button className="flex items-center" onClick={() => setShowMore(false)}>
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
      name: "Fitness App Development",
      link: "/industry/fitness-software-development-company",
    },
    {
      _id: 3,
      name: "Healthcare App Development",
      link: "/industry/healthcare-software-development-services",
    },
    {
      _id: 4,
      name: "Blockchain App Development",
      link: "/industry/blockchain-development-services",
    },
    {
      _id: 5,
      name: "Accounting App Development",
      link: "/industry/accounting-software-development-services",
    },
    {
      _id: 6,
      name: "Marketplace App Development",
      link: "/industry/marketplace-software-development-services",
    },
    {
      _id: 7,
      name: "Ed Tech App Development",
      link: "/industry/edtech-software-development-services",
    },
    {
      _id: 8,
      name: "Travel App Development",
      link: "/industry/travel-software-development-services",
    },
    {
      _id: 9,
      name: "CRM App Development",
      link: "/industry/crm-software-development-services",
    },
    {
      _id: 10,
      name: "Ecommerce App Development",
      link: "/industry/ecommerce-software-development-services",
    },
    {
      _id: 11,
      name: "Energy & Utility App Development",
      link: "/industry/energy-and-utility-software-development-services",
    },
    {
      _id: 12,
      name: "Meeting & Event Planning App Development",
      link: "/industry/meeting-and-event-planning-software-development-services",
    },
  ];

  return (
    <div className="col-span-4 lg:grid lg:grid-cols-1 hidden">
      <div className="space-y-4">
        <h2 className="text-2xl Gilroy-Bold">Industry</h2>
        <ul className="space-y-2">
          {solutionLinks?.map((ele) => (
            <li className="text-white text-opacity-50" key={ele._id}>
              <Link href={ele.link} className="cursor-pointer">
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
      name: "Social Networking Solution Development",
      link: "/solution/social-networking-development-company",
    },
  ];

  return (
    <div className="col-span-4 lg:grid lg:grid-cols-1 hidden">
      <div className="space-y-4">
        <h2 className="text-2xl Gilroy-Bold">Solutions</h2>
        <ul className="space-y-2">
          {solutionLinks?.map((ele) => (
            <li className="text-white text-opacity-50" key={ele._id}>
              <Link href={ele.link} className="cursor-pointer">
                {ele.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Header;
