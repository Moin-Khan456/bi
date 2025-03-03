import React from "react";

export default function Advantage({ title, reasons, desc, benefitFooter }) {
  return (
    <div className="container px-4 lg:px-16">
      <h3 className="text-4xl lg:text-5xl Gilroy-Bold w-fit lg:pl-10">
        Benefits of <span className="text-primaryTx">{title}</span>
      </h3>
      <p className="opacity-50 Golroy-Bold lg:pl-10 py-4">{desc}</p>
      <div className="flex flex-col my-8 h-auto w-full sm:w-[92%] ">
        {reasons?.map((ele, index) => (
          <div
            key={index}
            className="bg-customer px-6 py-12 mx-8 text-start text-primaryBg my-2 lg:w-full  leading-8 Gilroy-Semibold tracking-wider"
          >
            {ele}
          </div>
        ))}
        <p className="opacity-50 Gilroy-Bold lg:pl-8 py-4">{benefitFooter}</p>
      </div>
    </div>
  );
}
