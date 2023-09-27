import Image from "next/image";
import Link from "next/link";

const FooterSections = [
  {
    title: "About",
    link: "/how-we-work",
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
        name: "Careers",
        path: "/career",
      },
      {
        name: "Blog",
        path: "/blog",
      },
      {
        name: "Contact Us",
        path: "/contact",
      },
    ],
  },
  {
    title: "Solutions",
    link: "/solution",
    links: [
      {
        name: "Social Media Marketing",
        path: "/solution/social-media-marketing",
      },
      {
        name: "Fitness Solution Development",
        path: "/solution/fitness",
      },
    ],
  },
  {
    title: "Web App Development",
    link: "/web-app-development",
    links: [
      {
        name: "Custom Web Development",
        path: "/web-development/custom-web-development",
      },
      {
        name: "Angular JS Development",
        path: "/web-development/angular-js-development",
      },
      {
        name: "React JS Development",
        path: "/web-development/react-js-development",
      },
      {
        name: "Node JS Development",
        path: "/web-development/node-js-development",
      },
      {
        name: "Vue JS Development",
        path: "/web-development/vue-js-development",
      },
      {
        name: "MEAN Development",
        path: "/web-development/mean-stack-development",
      },
      {
        name: "MERN Development",
        path: "/web-development/mern-stack-development",
      },
      {
        name: "LAMP Development",
        path: "/web-development/lamp-development",
      },
      {
        name: "PHP Development",
        path: "/web-development/php-development",
      },
      {
        name: "Python Development",
        path: "/web-development/python-development",
      },
      {
        name: "Wordpress Website Development",
        path: "/web-development/wordpress-development",
      },
      {
        name: "CodeIgniter Development",
        path: "/web-development/codeigniter-development",
      },
    ],
  },

  {
    title: "Mobile App Development",
    link: "/mobile-app-development",
    links: [
      {
        name: "Custom App Development",
        path: "/mobile-development/custom-app-development",
      },
      {
        name: "iOS App Development",
        path: "/mobile-development/ios-development",
      },
      {
        name: "Android App Development",
        path: "/mobile-development/android-development",
      },
      {
        name: "React Native App Development",
        path: "/mobile-development/react-native-development",
      },
      {
        name: "Flutter App Development",
        path: "/mobile-development/flutter-development",
      },
      {
        name: "Swift App Development",
        path: "/mobile-development/swift-development",
      },
      {
        name: "Hybrid App Development",
        path: "/mobile-development/hybrid-app-development",
      },
      {
        name: "Mobile App Integration",
        path: "/mobile-development/mobile-app-integration",
      },
    ],
  },
  {
    title: "Industries",
    links: [
      {
        name: "Food",
        path: "",
      },
      {
        name: "Health Care",
        path: "",
      },
      {
        name: "Ecommerce",
        path: "",
      },
      {
        name: "Real Estate",
        path: "",
      },
      {
        name: "Education",
        path: "",
      },
      {
        name: "Finance",
        path: "",
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
        name: "UpScaler - Online Learning Platform similar to Udemy",
        path: "",
      },
      {
        name: "Ocureel - Relation Building and video sharing Application",
        path: "/project/ocureel",
      },
    ],
  },
  {
    title: "Hire Dedicated Remote Developers",
    link: "/hire-dedicated-remote-developers",
    links: [
      {
        name: "Hire Angular Js Developers",
        path: "/hire-angular-js-developers",
      },
      {
        name: "Hire React Js Developers",
        path: "/hire-react-js-developers",
      },
      {
        name: "Hire Node Js Developers",
        path: "/hire-node-js-developers",
      },
      {
        name: "Hire Vue Js Developers",
        path: "/hire-vue-js-developers",
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
        name: "Hire UI/UX Developers",
        path: "/hire-ui-ux-developers",
      },
      {
        name: "Hire Android Developers",
        path: "/hire-android-developers",
      },
      {
        name: "Hire iOS Developers",
        path: "/hire-ios-developers",
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
        name: "Hire QA Analyst",
        path: "/hire-qa-analysts",
      },
    ],
  },
];
const organizations = [
  {
    _id: 1,
    src: "https://d1u4arv5y5eda6.cloudfront.net/images/footer-firm1.png",
    alt: "brain inventory best rating and reviews on Good Firm",
    href: "https://www.goodfirms.co/company/brain-inventory",
    width: 90,
    height: 28,
  },
  {
    _id: 2,
    src: "https://d1u4arv5y5eda6.cloudfront.net/images/footer-firm3.png",
    alt: "brain inventory best rating and reviews on Clutch",
    href: "https://clutch.co/profile/brain-inventory",
    width: 70,
    height: 28,
  },
  {
    _id: 3,
    src: "https://d1u4arv5y5eda6.cloudfront.net/images/footer-firm4.png",
    alt: "brain inventory best rating and reviews on Trust Pilot",
    href: "https://www.trustpilot.com/review/braininventory.com",
    width: 120,
    height: 28,
  },
  {
    _id: 4,
    src: "https://d1u4arv5y5eda6.cloudfront.net/images/footer-firm5.png",
    alt: "brain inventory best rating and reviews on Upwork",
    href: "https://www.upwork.com/ag/braininventory/",
    width: 120,
    height: 28,
  },
];

export default function Footer() {
  return (
    <div className="py-10 mx-10 border-t">
      <div className="container">
        <div className="grid lg:grid-cols-5 grid-cols-1 gap-8">
          {FooterSections.map((section, index) => {
            return (
              <div
                key={index}
                className={
                  section.className ? section.className : "md:col-span-1"
                }
              >
                <a href={section.link} className="cursor-pointer">
                  <span className="text-xl Gilroy-Bold mb-4 cursor-pointer">
                    {section.title}
                  </span>
                </a>
                <ul className="space-y-2">
                  {section.links.map((link, index) => {
                    return (
                      <li className="color-gray" key={index}>
                        <a href={link.path} className="cursor-pointer">
                          {link.name}
                        </a>
                      </li>
                    );
                  })}
                </ul>
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
              {" "}
              © 2022 Brain Inventory - All rights reserved.
            </div>
          </div>
          <div className="flex flex-col space-y-4 md:ml-auto">
            <p>Follow us:</p>
            <div className="flex space-x-3 items-center ">
              <span className="cursor-pointer">
                <a
                  href="https://www.facebook.com/BrainInventoryIndia/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={
                      "https://d1u4arv5y5eda6.cloudfront.net/images/meta.svg"
                    }
                    width={28}
                    height={28}
                    alt=""
                  />
                </a>
              </span>
              <span className="cursor-pointer">
                <a
                  href="https://in.linkedin.com/company/braininventory"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={
                      "https://d1u4arv5y5eda6.cloudfront.net/images/linkedIn.svg"
                    }
                    width={28}
                    height={28}
                    alt=""
                  />
                </a>
              </span>
              <span className="cursor-pointer">
                <a
                  href="https://dribbble.com/brain_inventory"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={
                      "https://d1u4arv5y5eda6.cloudfront.net/images/dribble.svg"
                    }
                    width={24}
                    height={24}
                    alt=""
                  />
                </a>
              </span>
              <span className="cursor-pointer">
                <a
                  href="https://www.instagram.com/braininventory_com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={
                      "https://d1u4arv5y5eda6.cloudfront.net/images/instagram.svg"
                    }
                    width={24}
                    height={24}
                    alt=""
                  />
                </a>
              </span>
              <span className="cursor-pointer">
                <a
                  href="https://www.youtube.com/channel/UCmBF3Fito6xxYWyomJ-ittw"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={
                      "https://d1u4arv5y5eda6.cloudfront.net/images/youtube.svg"
                    }
                    width={30}
                    height={30}
                    alt=""
                  />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
