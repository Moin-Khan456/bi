import React from "react";

const SectionTwo = ({
  title,
  head1,
  description,
  className,
  classText,
  hideSubText,
}) => {
  return (
    <div className={`${className} container padding-left-all-section-1`}>
      <div className="">
        <div className="flex lg:items-end flex-col md:flex-col lg:flex-row py-8 relative">
          <h1
            className={`lg:text-7xl text-4xl  ${classText} monument grid grid-cols-1 lg:grid-cols-2 grid-rows-2 lg:grid-rows-1 items-end w-auto lg:max-w-auto uppercase leading-[4rem]`}
          >
            {title.split("/").map((ele) => (
              <>
                {ele} <br />
              </>
            ))}
            <span
              className={`lg:absolute lg:left-96 lg:pb-2 lg:px-4 text-[1.7rem] lg:ml-40 lg:whitespace-nowrap Gilroy-SemiBold ${hideSubText}`}
            >
              Development Company
            </span>
          </h1>
        </div>
        <p className="text-[1.5rem] font-semibold">
          <span className="text-[#F7D927]">Brain Inventory:</span> {head1}
        </p>
        <p className="text-[.875rem] opacity-50 py-4 ">{description}</p>
      </div>
    </div>
  );
};

export default SectionTwo;
