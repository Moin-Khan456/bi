import Link from "next/link";
import { useState, useEffect } from "react";
import HomeButton from "../buttons/HomeButton";
import Head from "next/head";

const info = [
  {
    id: 1,
    title: { orange: "Web", white: "Development" },
    url: "/web-development/custom-web-development",
    video: "https://braininventory.s3.us-east-2.amazonaws.com/videos/webdev.mp4",
    thumbnail: "https://braininventory.s3.us-east-2.amazonaws.com/images/Website+Development.webp",
    techList: [
      { name: "React JS Development Services", path: "/web-development/react-js-development-company" },
      { name: "AngularJS Development Services", path: "/web-development/angularjs-development-company" },
      { name: "Node JS Development Services", path: "/web-development/node-js-development-company" },
    ],
  },
  {
    id: 2,
    title: { orange: "Mobile", white: "Development" },
    url: "/mobile-development/custom-mobile-app-development-company",
    video: "https://braininventory.s3.us-east-2.amazonaws.com/videos/mobdev.mp4",
    thumbnail: "https://braininventory.s3.us-east-2.amazonaws.com/images/Mobile+Development.webp",
    techList: [
      { name: "Android App Development Services", path: "/mobile-development/android-app-development-company" },
      { name: "iOS App Development Services", path: "/mobile-development/ios-app-development-company" },
      { name: "React Native Development Services", path: "/mobile-development/react-native-app-development-company" },
    ],
  },
];

const HomeSectionFour = () => {
  return (
    <>
    <Head>
        <link rel="preload" as="video" href="https://braininventory.s3.us-east-2.amazonaws.com/videos/webdev.mp4" />
        <link rel="preload" as="image" type="image/webp" href="https://braininventory.s3.us-east-2.amazonaws.com/images/Website+Development.webp" />
    </Head>
    <div className="container padding-left-all-section bg-primaryBg text-secondaryTx">
      <div className="relative">
        <div className="w-full snap-y snap-mandatory">
          <div>
            <div className="w-full top-0 z-40  2xl:p-10 p-8">
              <h2 id="looking" className="2xl:text-6xl xl:text-5xl text-4xl Gilroy-Bold mb-8 2xl:mt-16 xl:mt-14 mt-12">
                What are you looking up-to?
              </h2>
              <p className="2xl:text-2xl xl:text-xl text-lg Gilroy-Light leading-loose">
                Mobile app development indeed nowadays necessary for all the
                business. We, as a{" "}
                <Link href="/mobile-development/custom-mobile-app-development-company" className="text-[#2186ff]">
                  Mobile App Development Company
                </Link>{" "}
                can provide high quality standard mobile app of any category. We
                have worked with diverse brands, organizations, start-ups and
                individuals to create powerful apps from excellent idea.
              </p>
            </div>
          </div>
          <div className="mt-20"></div>
          {info?.map((el) => {
            return (
              <Section
                className="snap-start"
                key={el.id}
                url={el.url}
                info={el}
                video={el.video}
                thumbnail={el.thumbnail}
              />
            );
          })}
        </div>
      </div>
    </div>
    </>
  );
};

const Section = ({ info, url, video, thumbnail }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById(`section-${info.id}`);
      if (section && section.getBoundingClientRect().top < window.innerHeight) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 

    return () => window.removeEventListener("scroll", handleScroll);
  }, [info.id]);

  return (
    <div id={`section-${info.id}`} className="h-full relative">
      <div className="relative w-full 2xl:bottom-20 xl:bottom-16 lg:bottom-14 bottom-12 2xl:p-10 p-8 lg:flex items-center justify-between">
        <div className="flex-col flex ">
          <p className="2xl:text-5xl xl:text-4xl text-3xl Gilroy-Bold 2xl:mb-8 xl:mb-6 mb-4">
            <span className="text-primaryTx">{info.title.orange}</span>
            {info.title.white}
          </p>
          <ul className="2xl:text-2xl xl:text-xl text-lg 2xl:space-y-4 space-y-2">
            {info.techList.map((el) => (
              <li key={el.name} className="bg-image-name cursor-pointer">
                {el.path ? <Link href={el.path}>{el.name}</Link> : <span>{el.name}</span>}
              </li>
            ))}
          </ul>
          <div className="mt-6 md:mt-12">
            <Link href={url}>
              <HomeButton>Learn more</HomeButton>
            </Link>
          </div>
        </div>

        {isVisible && (
          <div className="w-full lg:w-1/2 lg:flex lg:justify-end mt-3 md:mt-0">
            <div className="h-[65%] w-[100%] md:w-[65%]">
              <video
                muted
                loop
                autoPlay
                controls={false}
                loading="lazy"
                poster={thumbnail}
                playsInline
                fetchpriority="high"
                className="rounded-lg"
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
