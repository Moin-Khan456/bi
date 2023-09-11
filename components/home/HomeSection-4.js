import { useState, useEffect } from "react";
import HomeButton from "../buttons/HomeButton";
import Link from "next/link";

const info = [
  {
    id: 1,
    title: {
      orange: "Web",
      white: "Development",
    },
    url: "/web-app-development",
    video: "https://d1u4arv5y5eda6.cloudfront.net/images/WebDevelopment.mp4",
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
    url: "/mobile-app-development",
    video: "https://d1u4arv5y5eda6.cloudfront.net/images/AppDevelopment.mp4",
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
    url: "/ui-ux-services",
    video: "https://d1u4arv5y5eda6.cloudfront.net/images/UIUX.mp4",
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
              <p className="2xl:text-6xl xl:text-5xl text-4xl Gilroy-Bold mb-8 2xl:mt-16 xl:mt-14 mt-12">
                what are you looking up-to?
              </p>
              <p className="2xl:text-2xl xl:text-xl text-lg Gilroy-Light leading-loose">
                Mobile app development indeed nowadays necessary for all the
                business. We, as a mobile application development company can
                provide high quality standard mobile app of any category. We
                have worked with diverse brands, organizations, start-ups and
                individuals to create powerful apps from excellent idea.
              </p>
            </div>
          </div>
          <div className=""></div>
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
  const [position, setPostion] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset >= 1150) {
        setPostion(true);
      }
    });
  });
  return (
    <div className="h-[75vh] relative">
      <div className="md:absolute relative w-full 2xl:bottom-20 xl:bottom-16 lg:bottom-14 bottom-12 2xl:p-10 p-8  lg:flex items-center justify-between">
        <div className="flex-col flex 2xl:space-y-16 xl:space-y-8 space-y-8">
          <p className="2xl:text-5xl xl:text-4xl text-3xl Gilroy-Bold 2xl:mb-8 xl:mb-6 mb-4">
            <span className="text-base-orange-1">{info.title.orange}</span>{" "}
            {info.title.white}
          </p>
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
          <HomeButton>
            <Link href={url}>learn more</Link>
          </HomeButton>
        </div>
        {position && (
          <div className="w-full lg:w-1/2">
            <div className="h-[350px] w-full md:px-8 md:py-8 px-0 py-8">
              <video
                muted
                loop
                autoPlay={true}
                controls={false}
                loading="lazy"
                poster="https://d1u4arv5y5eda6.cloudfront.net/images/work-v-thumbnail.png"
              >
                <source src={video} type="video/mp4" />
              </video>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeSectionFour;
