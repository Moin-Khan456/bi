import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Index = () => {
  return (
    <div className="container padding-left-all-section-1">
      <div className="w-full flex flex-col justify-center">
        <div className="mx-2 lg:mx-12">
          <h3 className="text-xl lg:text-[4.3rem] leading-none font-bold">
            Get Started Within 2 Business Days
          </h3>
        </div>
        <div className="container">
          <div className="flex flex-col lg:justify-around w-full items-center lg:flex-row py-8 px-0 ">
            <div className="grid-row-2 px-2 text-justify lg:w-[480px] col-start-1 col-end-3">
              <p>
                Curating a website or application is our business. Your job is
                to just sit back and let us do our magic
              </p>
            </div>
            <a href="#talk" className="py-4 lg:py-0">
              <div className="bg-primaryTx px-4 lg:px-8 py-8 rounded-2xl w-full lg:w-fit flex justify-center">
                <button className="flex justify-center Gilroy">
                  <span className="flex items-center justify-between w-full text-primaryBg">
                    Ready? &nbsp; <BsArrowRight /> &nbsp; Talk with us
                  </span>
                </button>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Index;
