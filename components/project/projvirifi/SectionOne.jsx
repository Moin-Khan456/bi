import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";


const Index = ({ section }) => {
    return (
        <div className={`flex flex-col lg:flex-row max-w-full lg:min-h-screen`}>
            <div className="max-w-full lg:max-w-[50%] flex flex-col items-center justify-center text-center lg:block lg:text-start py-8 lg:px-12">
                <Image src={section.logo} width={600} height={600} className="lg:w-1/2 py-12" alt={section.alt} />
                <h1 className="text-lg lg:text-2xl lg:w-[70%]">{section.brief} <span className="text-[#F39573]">{section.styleBrief}</span></h1>
                <div className="lg:flex flex-col py-12">
                    {/* <div className="lg:w-[25%] text-white lg:px-0 flex  justify-center bg-gradient-to-r from-[#000076] to-[#7600EB] rounded-2xl px-8 py-3  mt-12 mb-4">
                        <button className="flex flex-col items-center Gilroy">
                            <span className="flex items-center justify-between font-semibold w-full">
                                Explore <BsArrowRight />
                            </span>
                        </button>
                    </div> */}
                    <span className="flex justify-center items-center lg:justify-start px-4 text-xs py-8">Made With&nbsp;&nbsp;&nbsp;<Image src="https://braininventory.s3.us-east-2.amazonaws.com/images/project/XD.png" alt=""width={40} height={50} className="w-[10%] lg:w-[30px]" /></span>
                </div>
            </div>
            <div className="flex lg:items-center justify-center lg:justify-end lg:w-[40%] mb-8">
                <Image src="https://braininventory.s3.us-east-2.amazonaws.com/images/project/virifi/Group 6428.png" width={1700} height={1800} alt={section.alt}/>
            </div>
        </div>
    );
};

export default Index;
