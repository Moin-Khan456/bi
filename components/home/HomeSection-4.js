import Link from "next/link";
import { useState, useEffect } from "react";
import HomeButton from "../buttons/HomeButton";
import { HomeSection4info } from "./Data";

const HomeSectionFour = () => {
  return (
    <div className="container padding-left-all-section">
      <div className="relative">
        <div className="w-full snap-y snap-mandatory">
          <div>
            <div className="w-full top-0 z-40 bg-black 2xl:p-10 p-8">
              <h2 className="2xl:text-6xl xl:text-5xl text-4xl Gilroy-Bold mb-8 2xl:mt-16 xl:mt-14 mt-12">
                What are you looking up-to?
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
          {HomeSection4info?.map((el) => {
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
  );
};

const Section = ({ info, url, video, thumbnail }) => {
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
          <div className="mt-6 md:mt-12">
            <Link href={url}>
              <HomeButton>learn more</HomeButton>
            </Link>
          </div>
        </div>
        {position && (
          <div className="w-full lg:w-1/2  lg:flex lg:justify-end mt-3 md:mt-0">
            <div className="h-[65%] w-[100%] md:w-[65%]">
              <video
                muted
                loop
                autoPlay={true}
                controls={false}
                loading="lazy"
                poster={thumbnail}
                playsInline={true}
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
