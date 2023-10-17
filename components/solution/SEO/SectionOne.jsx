import Image from "next/image";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import Marquee from "./Marquee";

const Index = () => {
  return (
    <div className="rounded-md my-8 h-auto relative">
      <div className="video-section absolute top-0 left-0">
        <video
          loop
          autoPlay={true}
          controls={false}
          className="h-screen m-auto scale-[1.25]"
          preload="metadata"
        >
          <source
            src="https://braininventory.s3.us-east-2.amazonaws.com/images/solution/social-networking/rFdCZriM6x6btVRZViNaME7HxM~w8PxP8RCbFNOFxnsLMlURKFYtWlMRADjbWqpyPZzXao+(1).mp4"
            type="video/mp4"
          />
        </video>
        <div className="container padding-left-all-section">
          <div className="absolute top-0 m-auto pt-20">
            <div className="p-6 lg-p-0">
              <h5 className="monument text-4xl pt-7">
                CREATING IMPACTFUL SOCIAL
              </h5>
              <h2 className="monument lg:text-[10rem] text-4xl leading-[1] mb-8 relative">
                SOLUTIONS
                <Image
                  src="https://braininventory.s3.us-east-2.amazonaws.com/images/solution/social-networking/Group+6969.png"
                  width={1800}
                  height={1800}
                  className="w-[60px] absolute -bottom-10 right-[29rem] rotate-45"
                  alt=""
                />
              </h2>
              <h2 className="monument lg:text-[11.3rem] text-4xl leading-[1] relative">
                TOGETHER
                <Image
                  src="https://braininventory.s3.us-east-2.amazonaws.com/images/solution/social-networking/Group+6969.png"
                  width={1800}
                  height={1800}
                  className="w-[60px] absolute -bottom-4 left-40"
                  alt=""
                />
              </h2>
            </div>

            <div className="lg:flex justify-between relative p-6 lg-p-0 pt-8 lg:pt-0">
              <div className="w-full">
                <p className="lg:w-[40%]">
                  Unleash the potential of your social industry business with
                  Brain Inventory, a leader in technical solutions. We&apos;re
                  here to transform your challenges into opportunities that will
                  amplify your impact.
                </p>
              </div>

              <div className="absolute bottom-[-9rem] right-[23rem]">
                <Image
                  src="https://braininventory.s3.us-east-2.amazonaws.com/images/solution/social-networking/Mask+Group+163.png"
                  alt="social networking app development company"
                  width={1800}
                  height={1800}
                  className=" w-[700px] seo-banner h-[600px]"
                />
              </div>

              <div className="w-full">
                <button className="flex items-center font-Satoshi relative lg:left-80 font-bold text-xs rounded-full bg-gradient-to-r from-[#000076] to-[#7600EB] px-6 py-4 my-12">
                  LEVERAGE THE POWER OF US &nbsp;{" "}
                  <GoArrowUpRight className="font-extrabold text-3xl p-2 rounded-full bg-[#9347E7]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
