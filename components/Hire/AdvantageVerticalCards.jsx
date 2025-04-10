import React from "react";

export default function Advantage({
  title,
  reasons,
  subhead,
  subhead1 = false,
}) {
  return (
    <div className="container px-4 lg:px-12 py-10">
      <h3 className="text-4xl lg:text-5xl Gilroy-Bold w-fit lg:pl-10">
        Advantages of Hiring a {subhead1 ? subhead1 : null}{" "}
        <span className="text-primaryTx">{title}</span>
      </h3>
      <p className="Gilroy-Semibold font-semibold leading-7 tracking-wider text-lg p-4 lg:p-10 opacity-80 lg:pt-8">
        {subhead}
      </p>
      <div className="flex flex-col my-8 h-auto ">
        {reasons?.map((ele, index) => (
          <div
            key={index}
            className="bg-customer px-6 py-8 mx-8 text-start text-primaryBg my-2 lg:w-full  leading-8 Gilroy-Light tracking-wider"
          >
            {ele}
          </div>
        ))}
      </div>
    </div>
  );
}
