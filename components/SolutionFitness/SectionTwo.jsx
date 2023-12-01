import React from "react";

const SectionTwo = ({
  title,
  head1,
  description,
  className,
  classText,
  hideSubText,
  notBreakable,
  lastSmall,
}) => {
  return (
    <div className={`${className}`}>
      <div className="container">
        <div className="flex lg:items-end flex-col md:flex-col lg:flex-row py-8 relative">
          <h1
            className={`px-4 text-4xl md:text-5xl ${classText} lg:text-8xl monument grid grid-cols-1 lg:grid-cols-2 grid-rows-2 lg:grid-rows-1 items-end w-auto lg:max-w-auto uppercase `}
          >
            {!notBreakable ? (
              <span>
                {title.split(" ").map((ele, index) => (
                  <>
                    <span className="block">{ele}</span>
                  </>
                ))}
              </span>
            ) : (
              title
            )}
            <span
              className={`${
                lastSmall && "lg:absolute lg:left-72"
              } lg:px-4 pb-3 text-[1.7rem] lg:ml-4 lg:whitespace-nowrap Gilroy-SemiBold ${hideSubText}`}
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
