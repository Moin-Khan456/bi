import React from "react";
import { BsArrowRight } from "react-icons/bs";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";
import Image from "next/image";

const Index = ({ section }) => {
  return (
    <div className="container lg:min-h-screen">
      <div className="max-w-full flex flex-col px-4 lg:px-12 ">
        <Image layout="responsive"
        srcSet="/image-320w.jpg 320w,
              /image-480w.jpg 480w,
              /image-800w.jpg 800w"
        sizes="(max-width: 320px) 280px,
             (max-width: 480px) 440px,
             800px"
          width={1500}
          height={1500}
          src={section.logo}
          className="lg:w-[15%] py-28 lg:py-4"
          alt="Fatoura"
        />
        <h1 className="text-4xl Gilroy-Bold flex items-center lg:text-6xl text-[#FFD166]">
          Online{" "}
          <Image layout="responsive"
        srcSet="/image-320w.jpg 320w,
              /image-480w.jpg 480w,
              /image-800w.jpg 800w"
        sizes="(max-width: 320px) 280px,
             (max-width: 480px) 440px,
             800px" width={1500} height={1500} alt=""
            src="https://braininventory.s3.us-east-2.amazonaws.com/images/rtc/Group+6405.png"
            className="w-1/6"
          />
        </h1>
        <h1 className="text-4xl Gilroy-Bold lg:text-6xl pb-12 text-[#FFD166]">
          Creation Platform{" "}
        </h1>
        <div className="flex flex-col lg:flex-row w-full justify-center lg:justify-between py-4">
          <div>
            <span className="flex justify-center lg:justify-left items-center px-4 py-4 text-xs">
              Made With&nbsp;&nbsp;&nbsp;
              <Image layout="responsive"
        srcSet="/image-320w.jpg 320w,
              /image-480w.jpg 480w,
              /image-800w.jpg 800w"
        sizes="(max-width: 320px) 280px,
             (max-width: 480px) 440px,
             800px" width={500} height={500} alt=""
                src="https://braininventory.s3.us-east-2.amazonaws.com/images/project/XD.png"
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
