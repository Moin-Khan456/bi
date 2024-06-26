import React from "react";
import { BsArrowRight } from "react-icons/bs";

const WhyMean = ({ type, meanReasons }) => {
  return (
    <main className="container lg:px-24">
      <section>
        <h1 className="text-3xl text-center lg:text-start lg:text-5xl pl-8">
          Why you may need a &nbsp;
          <span className="text-[#7600EB]">{type} Development</span> services?
        </h1>
        <aside className="flex flex-row gap-4 w-full">
          <ol className="text-xl w-full py-4 font-Satoshi">
            {meanReasons?.map((ele, index) => (
              <p
                className="bg-technology lg:px-4 mr-4 my-4 p-4 lg:py-6 lg:my-4 w-auto text-center lg:h-[150px] h-[200px]"
                key={index}
              >
                {ele}
              </p>
            ))}
          </ol>
        </aside>
      </section>
    </main>
  );
};

export default WhyMean;
