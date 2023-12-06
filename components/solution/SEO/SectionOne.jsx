import Image from "next/image";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import Marquee from "./Marquee";
import Link from "next/link";

const Index = () => {
  return (
    <div className="rounded-md my-8 relative h-screen">
      <div className="video-section absolute top-0 left-0">
        {/* <video
          loop
          autoPlay={true}
          controls={false}
          className="h-screen m-auto object-contain hidden lg:block"
          preload="metadata"
        >
          <source
            src="https://braininventory.s3.us-east-2.amazonaws.com/images/solution/social-networking/rFdCZriM6x6btVRZViNaME7HxM~w8PxP8RCbFNOFxnsLMlURKFYtWlMRADjbWqpyPZzXao+(1).mp4"
            type="video/mp4"
          />
        </video> */}
        <div className="container padding-left-all-section">
          <div className="absolute top-0 m-auto pt-20">
            <div className="p-6 lg-p-0">
              <h5 className="monument lg:text-4xl pt-7">
                CREATING IMPACTFUL SOCIAL
              </h5>
              <h2 className="monument lg:text-[10.1rem] text-5xl lg:leading-[8.75rem] mt-7 relative">
                SOLUTIONS
              </h2>
              <h2 className="monument lg:text-[10rem] text-5xl relative">
                TOGETHER
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

              <div className="lg:absolute lg:bottom-[-9rem] left-0 right-0 ">
                <Image
                  src="https://braininventory.s3.us-east-2.amazonaws.com/images/solution/social-networking/Mask+Group+163.png"
                  alt="social networking app development company"
                  width={1800}
                  height={1800}
                  className="w-[850px] lg:w-[700px] lg:seo-banner h-[350px] lg:h-[600px]  lg:block text-center m-auto"
                />
              </div>

              <div className="w-full">
                <Link href="#talk">
                  <button className="flex items-center font-Satoshi relative lg:left-80 font-bold text-xs rounded-full bg-gradient-to-r from-[#000076] to-[#7600EB] px-6 py-4 my-12">
                    LEVERAGE THE POWER OF US &nbsp;{" "}
                    <GoArrowUpRight className="font-extrabold text-3xl p-2 rounded-full bg-[#9347E7]" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
