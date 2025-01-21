import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Index = ({ projectName, projectLink, mockup }) => {
  return (
    <div className="py-8">
      <h3 className="text-center py-8 text-3xl lg:text-6xl font-bold">
        Visit <a href={projectLink}>{projectName}</a>
      </h3>
      <div className="flex flex-col lg:flex-row justify-center items-center">
        <a href={mockup}>
          <div className="col-end-7 col-span-2 flex justify-center m-9 bg-primaryTx w-fit h-fit py-3 rounded-2xl mt-4 px-8 ml-8 lg:ml-0">
            <button className="flex flex-col items-center Gilroy">
              <span className="flex justify-between items-center lg:text-lg font-semibold text-primaryBg pb-1">
                Behance Mockup <BsArrowRight />
              </span>
            </button>
          </div>
        </a>
        <a href={projectLink} target="__blank">
          <div className="col-end-7 col-span-2 flex justify-center m-9 bg-primaryTx w-fit h-fit py-3 rounded-2xl mt-4 px-8 ml-8 lg:ml-0">
            <button className="flex flex-col items-center Gilroy">
              <span className="flex justify-between items-center lg:text-lg font-semibold text-primaryBg pb-1">
                {projectName} <BsArrowRight />
              </span>
            </button>
          </div>
        </a>
      </div>
    </div>
  );
};
export default Index;
