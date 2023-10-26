import React from "react";
import { BsArrowRight } from "react-icons/bs";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";
import Image from "next/image";

const Index = ({ section }) => {
  return (
    <div className="container lg:min-h-screen">
      <div className="max-w-full flex flex-col px-4 lg:px-12 ">
        <Image
          width={1500}
          height={1500}
          src={section.logo}
          className="lg:w-[15%] py-28 lg:py-4"
          alt="Fatoura"
        />
        <h1 className="text-4xl Gilroy-Bold flex items-center lg:text-6xl text-[#FFD166]">
          Online{" "}
          <Image width={1500} height={1500} alt=""
            src="https://d1u4arv5y5eda6.cloudfront.net/images/rtc/Group+6405.png"
            className="w-1/6"
          />
        </h1>
        <h1 className="text-4xl Gilroy-Bold lg:text-6xl pb-12 text-[#FFD166]">
          Creation Platform{" "}
        </h1>
        {/* <div className="lg:flex items-end">
          <div className="lg:w-[10%] px-4 lg:px-0 flex justify-center bg-gradient-to-r from-[#000076] to-[#7600EB] py-3 rounded-2xl mt-4">
            <button className="flex flex-col items-center Gilroy" id="rtc-xd">
              <a
                href="https://xd.adobe.com/view/2199324e-80e8-41c0-b113-5460b4ab28b3-74ca/"
                target="_blank"
              >
                <span className="flex items-center justify-between text-white font-semibold w-full py-2 px-4">
                  Explore <BsArrowRight />
                </span>
              </a>
            </button>
          </div>
          <ReactTooltip
            anchorId="rtc-xd"
            place="right"
            variant="info"
            content="Click to visit Adobe XD Design"
          />
        </div> */}
        <div className="flex flex-col lg:flex-row w-full justify-center lg:justify-between py-4">
          <div>
            <span className="flex justify-center lg:justify-left items-center px-4 py-4 text-xs">
              Made With&nbsp;&nbsp;&nbsp;
              <Image width={500} height={500} alt=""
                src="https://d1u4arv5y5eda6.cloudfront.net/images/project/XD.png"
                className="w-[10%] lg:w-[20%]"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Index;
