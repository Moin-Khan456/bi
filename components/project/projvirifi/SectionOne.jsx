import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";

const Index = ({ section }) => {
  return (
    <div className={`flex flex-col lg:flex-row max-w-full lg:min-h-screen`}>
      <div className="max-w-full lg:max-w-[50%] flex flex-col items-center justify-center text-center lg:block lg:text-start py-8 lg:px-12">
        <Image
          src={section.logo}
          width={600}
          height={600}
          className="lg:w-1/2 py-12"
          alt={section.alt}
        />
        <h3 className="text-lg lg:text-2xl lg:w-[70%] text-primaryBg">
          {section.brief}{" "}
          <span className="text-primaryBg">{section.styleBrief}</span>
        </h3>
        <div className="lg:flex flex-col py-12">
          <span className="flex justify-center items-center lg:justify-start px-4 text-xs py-8">
            Made With&nbsp;&nbsp;&nbsp;
            <Image
              src="https://braininventory.s3.us-east-2.amazonaws.com/images/project/XD.png"
              alt="Custom Software Development Company | Application Development Company"
              width={40}
              height={50}
              className="w-[10%] lg:w-[30px]"
            />
          </span>
        </div>
      </div>
      <div className="flex lg:items-center justify-center lg:justify-end lg:w-[40%] mb-8">
        <Image
          src="https://braininventory.s3.us-east-2.amazonaws.com/images/project/virifi/Group 6428.png"
          width={1700}
          height={1800}
          alt={section.alt}
        />
      </div>
    </div>
  );
};

export default Index;
