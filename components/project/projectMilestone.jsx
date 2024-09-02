import React from "react";

function Cards({ content }) {
  return (
    <div className="container">
      <h2 className="text-white text-2xl lg:text-6xl font-bold my-4 lg:my-12 text-center">
        Milestones & Achievements
      </h2>
      <div className="flex flex-col lg:flex-row justify-center max-w-full">
        {content?.map((ele, index) => (
          <div
            className="flex flex-wrap justify-between px-10 lg:py-12"
            key={index}
          >
            <div className="w-full my-8 md:w-64 bg-[#1A1A1A] p-8 rounded-lg shadow-lg mb-4 md:mb-0">
              <p className="text-white text-center text-lg font-semibold">
                {ele}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Cards;
