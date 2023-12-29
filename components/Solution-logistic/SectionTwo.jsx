import React from "react";

const SectionTwo = ({
  title,
  titleSize,
  head1,
  description,
  className,
  classText,
  hideSubText,
  notBreakable,
  lastSmall,
}) => {
  return (
    <div className={`${className} padding-left-all-section-1`}>
      <div className="container">
        <div className="flex lg:items-end flex-col md:flex-col lg:flex-row py-8 relative">
          <h1
            className={`px-4 ${titleSize ?? 'lg:text-[4rem]'} text-4xl  ${classText} monument grid grid-cols-1 lg:grid-cols-2 grid-rows-2 lg:grid-rows-1 items-end w-auto lg:max-w-auto uppercase leading-[4rem]`}
          >
            TOP <br/> Transport & Logistics <br/> SOFTWARE
            <span
              className={`lg:absolute right-[30rem] bottom-2 lg:px-4 pb-4 text-[1.7rem] lg:whitespace-nowrap Gilroy-SemiBold ${hideSubText}`}
            >
              Development Company
            </span>
          </h1>
        </div>
        <p className="text-[1.5rem] px-4 font-semibold">
          <span className="text-[#F7D927]">Brain Inventory:</span> {head1}
        </p>
        <p className="text-[.875rem] opacity-50 p-4 ">{description}</p>
      </div>
    </div>
  );
};

export default SectionTwo;
