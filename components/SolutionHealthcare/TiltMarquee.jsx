import React from "react";
import Marquee from "react-easy-marquee";
import { PiStarFourFill } from "react-icons/pi";

const TiltMarquee = () => {
  return (
    <div className="relative bottom-40 z-30">
      <div className="relative overflow-hidden pt-24">
        <div className="relative z-10 -rotate-[3deg] overflow-hidden">
          <Marquee duration={25000} reverse={true}>
            <div className="bg-white text-black font-bold MonumentBold">
              <h1 className="text-5xl flex py-4">
                FITNESS SOLUTION DEVELOPMENT &nbsp; <PiStarFourFill /> &nbsp;
                FITNESS SOLUTION DEVELOPMENT &nbsp;&nbsp;
                <PiStarFourFill />
                &nbsp;&nbsp;
              </h1>
            </div>
          </Marquee>
        </div>
        <div className="relative z-20 rotate-[2deg] overflow-hidden">
          <Marquee duration={25000} reverse={false}>
            <div className="bg-[#F7D927] text-black font-bold MonumentBold">
              <h1 className="text-5xl flex py-4">
                FITNESS SOLUTION DEVELOPMENT &nbsp; <PiStarFourFill /> &nbsp;
                FITNESS SOLUTION DEVELOPMENT &nbsp;&nbsp;
                <PiStarFourFill />
                &nbsp;&nbsp;
              </h1>
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default TiltMarquee;
