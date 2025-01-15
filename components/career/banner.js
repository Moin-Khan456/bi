import React from "react";
import Link from "next/link";

const Banner = () => {
  return (
    <>
      <div className="h-auto lg:min-h-[80vh] min-h-[65vh] sm:pt-0 pt-32 flex items-center relative bg-careerImg">
        <div className="lg:w-[60%] w-full h-full  relative">
          <div className=" 2xl:px-14 xl:px-12 px-10 flex flex-col justify-center 2xl:space-y-5 xl:space-y-4 space-y-3 h-full">
            <h3 className="2xl:text-4xl xl:text-4xl text-3xl text-primaryBg Gilroy-Bold">
              Lets do some great things together!
            </h3>

            <h1 className="text-5xl text-primaryBg Gilroy-Bold">
              Apply for Full Time Job
            </h1>

            <div className="flex flex-col lg:w-[60%]">
              <div className="Gilroy-Light text-xl tracking-widest text-primaryBg">
                While we are good at sign language, there are various other
                simpler ways to connect with us.{" "}
                <Link href="/contact" className="text-[#2186ff]">
                  Talk to us
                </Link>{" "}
                in person.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
