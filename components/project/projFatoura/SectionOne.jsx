import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Index = ({ section }) => {
    return (
        <div className="max-w-full flex flex-col px-4 lg:px-12">
            <Image width={600} height={600} src={section.logo} className="lg:w-1/6 py-12" alt="Fatoura" />
            <h1 className="text-4xl lg:text-6xl">{section.brief} <span className="text-[#F39573]">{section.styleBrief}</span></h1>
            <p className="opacity-50 lg:w-[45%] lg:leading-10 py-4">Creates and manages customized invoices with data security which helps in promoting your brand and expanding your business.</p>
            <div className="lg:flex items-end">
                <div className="lg:w-[10%] px-4 lg:px-0 flex justify-center bg-[#F39573] py-3 rounded-2xl mt-4">
                    <button className="flex flex-col items-center Gilroy">
                        <span className="text-xs font-thin text-black pb-1">
                            Case study 2022
                        </span>
                        <span className="flex items-center justify-between text-black font-semibold w-full">
                            Explore <BsArrowRight />
                        </span>
                    </button>
                </div>
                <span className="flex justify-center items-center px-4 py-4 text-xs">Made With&nbsp;&nbsp;&nbsp;<Image src="https://d1u4arv5y5eda6.cloudfront.net/images/project/XD.png" width={500} height={500} className="w-[10%] lg:w-[20%]"/></span>
            </div>
            <div className="flex flex-col lg:flex-row w-full justify-center lg:justify-between py-4">
                <div className="w-full py-4 lg:w-2/6">
                    <h4 className="text-2xl w-full lg:w-3/6">Make you life easier by online invoices.</h4>
                    <Image src="https://d1u4arv5y5eda6.cloudfront.net/images/project/fatoura/Group+6409.png" alt="trusted users" width={400} height={400} className="w-1/4 py-4" />
                </div>
                <Image src="https://d1u4arv5y5eda6.cloudfront.net/images/project/fatoura/template.png" alt="" width={1000} height={1000} className="w-full lg:w-1/3 relative lg:-top-40 "/>
            </div>
        </div>
    );
};

export default Index;