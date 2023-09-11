import { useEffect, useState } from "react";
import HomeButton from "../buttons/HomeButton.js";
import Link from "next/link";

const HomeSectionThree = () => {
  const [position, setPostion] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset >= 274) {
        setPostion(true);
      }
    });
  });
  return (
    <div className="container padding-left-all-section">
      <div className=" lg:flex items-start pt-12">
        <div className="w-full p-6 lg:p-10 pr-0 2xl:pb-16 xl:pb-12 pb-10 2xl:space-y-20 xl:space-y-16 space-y-12">
          <p className="text-heading-2 Gilroy-Bold lg:whitespace-nowrap">
            work that make you say woww!
          </p>
          <div className="lg:flex justify-between 2xl:space-y-15 xl:space-y-12 space-y-10">
            <div className="lg:flex 2xl:space-y-20 xl:space-y-16 space-y-12">
              <div>
                <p className="text-heading-4 leading-loose mb-4">
                  Namaste! Here you can discover who we are, how we work and
                  what we do. We approach all our projects with our 4 core
                  values.
                </p>
                <Link href="/portfolio">
                  <HomeButton>
                    <>see our portfolio</>
                  </HomeButton>
                </Link>
              </div>
              {position && (
                <div className="md:space-y-0 mt-0" style={{ marginTop: "0px" }}>
                  <video
                    muted
                    loop
                    autoPlay={true}
                    controls={false}
                    className="md:w-full w-[94%]"
                    loading="lazy"
                    poster="https://d1u4arv5y5eda6.cloudfront.net/images/work-v-thumbnail.png"
                  >
                    <source
                      src="https://d1u4arv5y5eda6.cloudfront.net/videos/squen.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="md:w-[80%] w-full lg:grid grid-cols-2 2xl:gap-4 xl:gap-4 gap-4 2xl:py-4 xl:py-14 py-6 lg:py-12 pb-16 2xl:h-[85%] h-[90%]">
          <Box
            title="focus"
            textColor="black"
            color="orange"
            summary="We always have our eye on the detailing"
          ></Box>
          <Box
            title="passion"
            color="blue"
            summary="We love building amazing products"
          ></Box>
          <Box
            title="creativity"
            color="blue"
            summary="We are all about the creativity and vision"
          ></Box>
          <Box
            title="community"
            color="orange"
            summary="We are always open to everyone and anytime"
          ></Box>
        </div>
      </div>
    </div>
  );
};

const Box = ({ title, summary, color, textColor }) => (
  <div
    className={
      "bg-base-" +
      color +
      "-1" +
      " 2xl:p-8 xl:p-6 p-4 h-48 mb-4 lg:h-[18rem] 3xl:h-[16rem] overflow-x-hidden relative group" +
      " text-" +
      textColor
    }
  >
    <p className="2xl:text-7xl xl:text-7xl text-6xl Gilroy-Bold stroke-text-2 md:translate-x-28 translate-x-18 group-hover:-translate-x-full transition-transform ease-linear duration-[4000ms]">
      {title}
    </p>
    <div className="absolute xl:bottom-5 bottom-3 pr-8">
      <p className="uppercase 2xl:text-3xl xl:text-2xl text-xl 2xl:mb-4 mb-2 Gilroy-SemiBold">
        {title}
      </p>
      <p className="xl:text-lg text-base Gilroy-Light">{summary}</p>
    </div>
  </div>
);
export default HomeSectionThree;
