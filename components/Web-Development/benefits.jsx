import React from "react";

export default function KeySkill({ type, subhead, benefitsList }) {
  return (
    <div>
      <div className="container lg:px-16 lg:pb-12 max-w-full">
        <div className="p-8 advantage-para lg:m-0 my-6">
          <h1 className="2xl:text-5xl xl:text-4xl text-3xl Gilroy-Bold mb-8 leading-10">
            Benefits of{" "}
            <span className="text-[#7600EB]">{type} Development</span>
          </h1>
          <p className="Gilroy-Light text-xs text-white w-full lg:w-[70%] tracking-wide leading-8">
            {subhead}
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full py-8">
            {" "}
            {benefitsList?.map((ele, index) => (
              <div
                className="bg-customer p-8 lg:w-full hover:scale-[1.05] duration-150 ease-in-out"
                key={index}
              >
                <p className="opacity-50">{ele}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
