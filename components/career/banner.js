import React from "react";
import Link from "next/link";

const Banner = ({ info }) => {
  return (
    <>
      <div
        className={`h-auto lg:min-h-[80vh] min-h-[65vh] sm:pt-0 pt-32 flex items-center relative ${info.image}`}
      >
        <div className="lg:w-[60%] w-full h-full  relative">
          <div className=" 2xl:px-14 xl:px-12 px-10 flex flex-col justify-center 2xl:space-y-5 xl:space-y-4 space-y-3 h-full">
            <h3 className="2xl:text-4xl xl:text-4xl text-3xl text-primaryBg Gilroy-Bold">
              {info.heading}
            </h3>

            <h1 className="text-5xl text-primaryBg Gilroy-Bold">
              {info.title}
            </h1>

            <div className="flex flex-col lg:w-[60%]">
              <div className="Gilroy-Light text-xl tracking-widest text-primaryBg">
                {info.content}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
