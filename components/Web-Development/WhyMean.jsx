import React from "react";
import { BsArrowRight } from "react-icons/bs";

const WhyMean = ({type, meanReasons}) => {
  
  return (
    <main className="container lg:px-24">
      <section>
        <h1 className="text-3xl text-center lg:text-start lg:text-5xl ">
          Why you may need a &nbsp;
          <span className="text-[#7600EB]">{type} Development</span>{" "}
          solution?
        </h1>
        <aside className="flex flex-row w-full">
          <ol className="text-xl w-full py-4 font-Satoshi">
            {meanReasons?.map((ele, index) => (
                <p className="bg-technology lg:px-4 lg:py-6 lg:my-4 w-full h-[150px]" key={index}>{ele}</p>
            ))}
          </ol>
          {/* <section>
            <a href="#talk" className="flex justify-center lg:justify-start">
              <section className="bg-gradient-to-r from-[#000076] to-[#7600EB] w-max  px-5 py-3 rounded-2xl mt-12">
                <button
                  className="flex flex-col justify-center Gilroy"
                >
                  <span className="text-xs font-thin text-slate-400 pb-1">
                    Got a project in mind?
                  </span>
                  <span className="flex items-center justify-between w-full">
                    Contact Us! <BsArrowRight />
                  </span>
                </button>
              </section>
            </a>
          </section> */}
        </aside>
      </section>
    </main>
  );
};

export default WhyMean;
