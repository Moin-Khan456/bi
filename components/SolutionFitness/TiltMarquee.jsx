import React from "react";
import Marquee from "react-easy-marquee";
import { PiStarFourFill } from "react-icons/pi";

const TiltMarquee = ({ title }) => {
  return (
    <div className="relative overflow-hidden py-24 ">
      <div className="relative z-20 -rotate-[2deg] overflow-hidden">
        <Marquee duration={25000} reverse={false}>
          <div className="bg-primaryTx text-primaryBg font-bold MonumentBold">
            <h3 className="text-5xl flex py-4 uppercase">
              {title} &nbsp; <PiStarFourFill /> &nbsp;
              {title} &nbsp;&nbsp;
              <PiStarFourFill />
              &nbsp;&nbsp;
            </h3>
          </div>
        </Marquee>
      </div>
      <div className="relative z-10 rotate-[3deg] overflow-hidden">
        <Marquee duration={25000} reverse={true}>
          <div className="text-primaryTx font-bold MonumentBold">
            <h3 className="text-5xl flex py-4 uppercase">
              &nbsp;&nbsp;{title} &nbsp; <PiStarFourFill /> &nbsp;
              {title} &nbsp;&nbsp;
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
