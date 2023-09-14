import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Index = () => {
  return (
    <div className="py-8 px-0 lg:px-12 flex flex-col lg:flex-row justify-between">
      <div className="grid-row-2 xs:text-center lg:w-[480px] col-start-1 col-end-3">
        <h1 className="text-5xl text-center lg:text-left font-semibold py-4">Our work portfolio</h1>
        <p className="w-[100vw] text-center lg:text-left lg:w-[480px]">
          We blend skills across strategy, design and development to create
          websites that tell our clients stories, bring in business and attract
          the right attention.
        </p>
      </div>
      <a href="#talk" className="flex justify-center">
        <div className="col-end-7 col-span-2 bg-gradient-to-r from-[#000076] to-[#7600EB] w-fit h-fit px-5 py-3 rounded-2xl mt-4 pr-20 lg:ml-0">
          <button className="flex flex-col justify-center Gilroy">
            <span className="text-xs font-thin text-slate-400 pb-1">
              Got a project in mind?
            </span>
            <span className="flex items-center justify-between w-full">
              Contact Us! <BsArrowRight />
            </span>
          </button>
        </div>
      </a>
    </div>
  );
};

export default Index;
