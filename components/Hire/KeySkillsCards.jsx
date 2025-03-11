import React from "react";

export default function KeySkill({ brief, points, grid, width }) {
  return (
    <div>
      <div className="container px-4 lg:px-6 lg:pb-12">
        <div className="lg:p-12  lg:pl-20 lg:pr-20 lg:m-0 m-6">
          <h2 className="2xl:text-6xl xl:text-5xl text-3xl Gilroy-Bold mb-8 leading-10">
            Our Key Skill Set
          </h2>
          <p className="Gilroy-Light !text-xl !leading-8 pb-6">{brief}</p>
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="container">
              <ul
                className={` Gilroy-SemiBold grid grid-cols-1 gap-4 lg:gap-0 ${
                  grid ?? "lg:grid-cols-4"
                }`}
              >
                {points?.map((ele, index) => (
                  <li
                    key={index + 1}
                    className={`text-primaryBg bg-primaryTx rounded-lg hover:scale-105 m-1 lg:p-8 text-center flex items-center justify-center ${
                      width ?? "lg:w-[250px]"
                    } h-[150px] w-auto`}
                  >
                    {ele}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
