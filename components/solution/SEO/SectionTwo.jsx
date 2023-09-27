import React from "react";
import { BiCurrentLocation } from "react-icons/bi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { BsGraphUp } from "react-icons/bs";
import Image from "next/image";



const SectionTwo = ({ title, head1, description, className }) => {
  return (
    <div className={`${className}`}>
      <div className="container">
        <div className="flex lg:items-end flex-col md:flex-col lg:flex-row py-8">
          <h1 className="px-4 text-3xl md:text-5xl lg:text-8xl monument w-full lg:w-[45%] lg:max-w-auto">{title}</h1>
          <h6 className="px-4 pb-3 text-[1.7rem] lg:ml-52">Development Company</h6>
        </div>
        <p className="text-3xl px-4">
          <span className="text-[#F7D927]">Brain Inventory:</span> {head1}
        </p>
        <p className="text-[1rem] text-slate-500 p-4">{description}</p>
      <div className=" mt-8"> 
          <div className="lg:grid lg:grid-cols-3 gap-4 bg-section-two m-6 p-8">
                <div>
                   <div className="flex">
                      <Image 
                      src="https://d1u4arv5y5eda6.cloudfront.net/images/solution/Group+6990.png"
                      alt=''
                      width={30}
                      height={40}
                      >

                      </Image>
                      <h2 className="text-lg ml-4">Capabilities</h2>
                   </div>
                   <h3 className="text-xl mt-4 lg:pr-20">Creating customer relationships That last forever —</h3>
                </div>
                <div className="col-span-2">
                <div className="lg:grid lg:grid-cols-3 gap-4 relative top-6"> 
              <div className="mb-6 lg:mb-0">
                  <BiCurrentLocation className="text-xl"/>
                  <h3 className="text-lg">Better Accuracy</h3>
              </div>
              <div className="mb-6 lg:mb-0">
                  <HiOutlineLightBulb className="text-xl"/>
                  <h3 className="text-lg">More in Context</h3>
              </div>
              <div className="mb-6 lg:mb-0">
                  <BsGraphUp className="text-xl" />
                  <h3 className="text-lg">Reporting & Analytics</h3>
              </div>
          </div>
                </div>
          </div>

      </div>
      </div>

    </div>
  );
};

export default SectionTwo;