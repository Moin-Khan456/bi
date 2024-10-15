import React from "react";
import Marquee from "react-easy-marquee";
import { PiStarFourFill } from "react-icons/pi";

const TiltMarquee = () => {
  return (
    <div className="relative overflow-hidden top-[3rem] h-[25vh]">
      <div className="relative z-20 top-[40px] -rotate-[2deg] overflow-hidden">
        <Marquee duration={25000} reverse={false}>
          <div className="bg-[#F7D927] text-black font-bold MonumentBold">
            <h3 className="text-5xl flex py-4">
              SEO ✦ MARKETING ✦ BRANDING ✦ SEO ✦ MARKETING ✦ BRANDING ✦ SEO ✦
              MARKETING ✦ BRANDING ✦ &nbsp; <PiStarFourFill /> &nbsp; SEO ✦
              MARKETING ✦ BRANDING ✦ SEO ✦ MARKETING ✦ BRANDING ✦ SEO ✦
              MARKETING ✦ BRANDING ✦&nbsp;&nbsp;
              <PiStarFourFill />
              &nbsp;&nbsp;
            </h3>
          </div>
        </Marquee>
      </div>
      <div className="relative top-[-50px] z-10 rotate-[4deg] overflow-hidden">
        <Marquee duration={25000} reverse={true}>
          <div className="bg-[#F7D927] text-black font-bold MonumentBold">
            <h3 className="text-5xl flex py-4">
              SEO ✦ MARKETING ✦ BRANDING ✦ SEO ✦ MARKETING ✦ BRANDING ✦ SEO ✦
              MARKETING ✦ BRANDING ✦ &nbsp; <PiStarFourFill /> &nbsp;
              <PiStarFourFill />
              &nbsp;&nbsp;
            </h3>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default TiltMarquee;
