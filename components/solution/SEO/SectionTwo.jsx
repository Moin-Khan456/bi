import React from "react";
import { BiCurrentLocation } from "react-icons/bi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { BsGraphUp } from "react-icons/bs";
import Image from "next/image";



const SectionTwo = ({ title, subTitle, head1, description, className, isHeadShow=true }) => {
  return (
    <div className={`lg:${className}`}>
      <div className="container">
        <div className="flex lg:items-end flex-col md:flex-col lg:flex-row lg:py-8 relative">
          <h1 className="px-4 text-4xl lg:text-8xl MonumentRegular font-bold w-full lg:w-[45%] lg:max-w-auto ">{title} <span className="lg:px-4 pb-3 lg:text-[1.7rem] lg:ml-52 lg:whitespace-nowrap lg:absolute bottom-10 right-40 Gilroy-SemiBold ">{subTitle}</span></h1>
        </div>
        {isHeadShow?<p className="text-3xl px-4">
          <span className="text-[#7600EB]">Brain Inventory:</span> {head1}
        </p>:null}
        <p className="text-[1rem] text-slate-500 p-4">{description}</p>
      <div className=" mt-8"> 
          <div className="lg:grid lg:grid-cols-3 gap-4 bg-section-two m-6 p-8 relative overflow-hidden">
                <h2 className="absolute top-4 left-8 text-stroke-industry-relay opacity-25 z-10 text-4xl overflow-hidden whitespace-nowrap">SOCIAL NETWORKING SOCIAL NETWORKING SOCIAL NETWORKING SOCIAL NETWORKING</h2>
                <h2 className="absolute top-16 left-8 text-stroke-industry-relay opacity-25 z-10 text-4xl overflow-hidden whitespace-nowrap">SOCIAL NETWORKING SOCIAL NETWORKING SOCIAL NETWORKING SOCIAL NETWORKING</h2>
                <h2 className="absolute bottom-4 left-8 text-stroke-industry-relay opacity-25 z-10 text-4xl overflow-hidden whitespace-nowrap">SOCIAL NETWORKING SOCIAL NETWORKING SOCIAL NETWORKING SOCIAL NETWORKING</h2>
                <div className="relative z-30">
                   <div className="flex">
                      <Image  
          
                      src="https://braininventory.s3.us-east-2.amazonaws.com/images/solution/Group+6990.png"
                      alt=''
                      width={30}
                      height={40}
                      >

                      </Image>
                      <h2 className="text-lg ml-4">Capabilities</h2>
                   </div>
                   <h3 className="text-xl mt-4 lg:pr-20">Creating customer relationships That last forever —</h3>
                </div>
                <div className="col-span-2 relative z-30">
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