import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
const Index = ({ para1, para2, para3, type }) => {
  return (
    <main className="container px-4 lg:px-20 lg:pb-20">
      <h1 className="text-4xl lg:text-5xl Gilroy-Bold w-fit">
        Why you may need a{" "}
        <span className="text-[#7600EB]"> {type} development</span> solution?
      </h1>
      <section className="lg:mb-0 mb-6 flex flex-col lg:flex-row pt-8">
        {!(type === "Custom App") ? (
          <Image  
         
            width={700}
            height={500}
            src="https://braininventory.s3.us-east-2.amazonaws.com/images/preview/Braininventory_custom+web+development+-+webpage+image.png"
            alt="Custom Software Development Company | Application Development Company"
            className="w-96 lg:w-[40%] h-full rounded-2xl"
          />
        ) : (
          <Image  
         
            width={500}
            height={500}
            src="https://braininventory.s3.us-east-2.amazonaws.com/images/Braininventory_custom+mobile+app+developers_+WHY+YOU+NEED+A+CUSTOM+APP+DEV.+SULUTION.png"
            alt="Custom Software Development Company | Hire Dedicated Software Developers"
            className="w-96 lg:w-[40%] rounded-2xl"
          />
        )}
        <section className="">
          <p className="Gilroy-Light leading-7 font-[10] text-xl p-4 opacity-60 lg:pt-8">
            {para1}
            <br />
            <br />
            {para2}
            {para3 && (
              <>
                <br />
                <br />
                {para3}
              </>
            )}
          </p>
          <section className="bg-gradient-to-r from-[#000076] to-[#7600EB] w-fit px-5 py-3 rounded-2xl mt-4 ml-4 pr-20">
            <button className="flex flex-col justify-center Gilroy">
              <span className="text-xs font-thin text-slate-400 pb-1">
                Got a project in mind?
              </span>
              <span className="flex items-center justify-between w-full">
                Contact Us! <BsArrowRight />
              </span>
            </button>
          </section>
        </section>
      </section>
    </main>
  );
};
export default Index;
