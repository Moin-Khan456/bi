import Link from "next/link";
import { useState, useEffect } from "react";
import HomeButton from "../buttons/HomeButton";
import webFrame from "../../public/webDevelopers.gif";
import Image from "next/image";

const info = [
  {
    id: 1,
    title: {
      orange: "Web",
      white: "Development",
    },
    url: "/web-development/custom-web-development",
    video: webFrame,
    techList: [
      {
        name: "Reactjs Development",
        path: "/reactjsdevelopment",
      },
      {
        name: "Angularjs Development",
        path: "/angularjs-development",
      },
      {
        name: "Nodejs Development",
        path: "/nodejs-development",
      },
    ],
  },
  {
    id: 2,
    title: {
      orange: "Mobile",
      white: "Development",
    },
    url: "/mobile-development/custom-app-development",
    video: webFrame,
    techList: [
      {
        name: "android native",
        path: "",
      },
      {
        name: "ios native",
        path: "",
      },
      {
        name: "react.native",
        path: "",
      },
    ],
  },
  {
    id: 3,
    title: {
      orange: "UI/UX",
      white: "Design",
    },
    url: "/ui-ux-development-services",
    video: webFrame,
    techList: [
      {
        name: "product design",
        path: "",
      },
      {
        name: "research",
        path: "",
      },
      {
        name: "consulting",
        path: "",
      },
    ],
  },
];

const HomeSectionFour = () => {
  return (
    <div className="container padding-left-all-section">
      <div className="relative">
        <div className=" w-full snap-y snap-mandatory">
          <div className="">
            <div className=" w-full top-0 z-40 bg-black 2xl:p-10 p-8">
              <h2 className="2xl:text-6xl xl:text-5xl text-4xl Gilroy-Bold mb-8 2xl:mt-16 xl:mt-14 mt-12">
                what are you looking up-to?
              </h2>
              <p className="2xl:text-2xl xl:text-xl text-lg Gilroy-Light leading-loose">
                Mobile app development indeed nowadays necessary for all the
                business. We, as a mobile application development company can
                provide high quality standard mobile app of any category. We
                have worked with diverse brands, organizations, start-ups and
                individuals to create powerful apps from excellent idea.
              </p>
            </div>
          </div>
          <div className="mt-20"></div>
          {info.map((el) => {
            return (
              <Section
                className="snap-start"
                key={el.id}
                url={el.url}
                info={el}
                video={el.video}
              ></Section>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Section = ({ info, url, video }) => {
  const [position, setPostion] = useState(true);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setPostion(true);
    });
  });
  return (
    <div className="h-full relative">
      <div className="relative w-full 2xl:bottom-20 xl:bottom-16 lg:bottom-14 bottom-12 2xl:p-10 p-8  lg:flex items-center justify-between">
        <div className="flex-col flex ">
          <p className="2xl:text-5xl xl:text-4xl text-3xl Gilroy-Bold 2xl:mb-8 xl:mb-6 mb-4">
            <span className="text-base-orange-1">{info.title.orange}</span>{" "}
            {info.title.white}
          </p>

          {position && (
            <div className="w-full block md:hidden">
              <div className="h-[90%] w-[90%]">
                <Image
                  priority={true}
                  src={video}
                  alt="Web Development"
                  width={1500}
                  height={1500}
                />
              </div>
            </div>
          )}

          <ul className="2xl:text-2xl xl:text-xl text-lg 2xl:space-y-4 space-y-2">
            {info.techList.map((el) => {
              return (
                <li key={el.name} className="bg-image-name cursor-pointer">
                  <Link href={el.path}>
                    <span>{el.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-6">
            <HomeButton>
              <Link href={url}>learn more</Link>
            </HomeButton>
          </div>
        </div>
        {position && (
          <div className="w-full lg:w-1/2 hidden md:block">
            <div className="h-[90%] w-[90%]">
              <Image
                priority={true}
                src={video}
                alt="Web Development"
                width={1500}
                height={1500}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeSectionFour;

{
  /* <video
                muted
                loop
                autoPlay={true}
                controls={false}
                loading="lazy"
                poster="https://braininventory.s3.us-east-2.amazonaws.com/images/work-v-thumbnail.png"
              >
                <source src={video} type="video/mp4" />
              </video> */
}
