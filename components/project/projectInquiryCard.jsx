import React from "react";
import { IoMdArrowForward } from "react-icons/io";

const FindUs = () => {
  return (
    <div className="max-w-full flex justify-center px-8 lg:px-0">
      <a href="#talk" className="max-w-full flex justify-center lg:px-0">
        <div className="flex flex-col lg:flex-row justify-between lg:mx-24 ">
          <div className="bg-[#1A1A1A] p-4 xs:rounded-t-3xl lg:w-80 lg:rounded-l-3xl mobileContact">
            <div className="flex justify-between">
              <p>Our Services</p>
              <IoMdArrowForward />
            </div>
            <h2 className="text-2xl font-bold lg:w-72 pb-48 ">
              Brain Inventory Services and Capabilities
            </h2>
            <div className="flex items-center font-thin text-xs">
              <p>
                Explore everything that the Brain Inventory team can do for you.
              </p>
            </div>
          </div>
          <div className="relative rounded-b-3xl lg:rounded-r-3xl">
            <video
              className="absolute top-0 left-0 w-full h-full object-cover z-0 xs:rounded-b-3xl lg:rounded-r-3xl mobileContactVideo"
              muted
              loop
              autoPlay={true}
              controls={false}
            >
              <source
                src="https://braininventory.s3.us-east-2.amazonaws.com/images/project/inquery.mp4"
                type="video/mp4"
              />
            </video>
            <div className="relative z-10 pl-8 pr-12 grid grid-rows-2 gap-8 place-content-between justify-start">
              <div className="mt-8 lg:mt-28">
                <p className="text-xs font-bold">Get In Touch</p>
                <p className="text-xl font-bold">Let’s get to it, together.</p>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold lg:w-full py-12">
                Project Inquiry
              </h1>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default FindUs;
