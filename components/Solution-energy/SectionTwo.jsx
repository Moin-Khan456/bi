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
  isHeadShow = true,
}) => {
  const MainTitle = title.split(" ")[0]
  let colorChange = ['Marketplace','Accounting','Education','Custom','Fitness','Healthcare','Energy']
  return (
    <div className={`${className} padding-left-all-section-1`}>
      <div className="container">
        <div className="flex lg:items-end flex-col md:flex-col lg:flex-row py-8 relative">
          <h1
            className={`px-4 ${
              titleSize ?? "lg:text-8xl"
            } text-4xl  ${classText} monument grid grid-cols-1 lg:grid-cols-2 grid-rows-2 lg:grid-rows-1 items-end w-auto lg:max-w-auto uppercase leading-[4rem]`}
          >
            {!notBreakable ? (
              <span className={`${colorChange.includes(MainTitle)?`text-secondaryTx`:`text-primaryBg`}`}>
                {title.split(" ").map((ele, index) => (
                  <>
                    <span className="block" key={index}>
                      {ele}
                    </span>
                  </>
                ))}
              </span>
            ) : (
              title
            )}
            {isHeadShow ? (
              <span
                className={`${
                  lastSmall && "lg:absolute lg:left-80"
                } lg:px-8 pb-4 text-[1.7rem] lg:ml-12 lg:whitespace-nowrap Gilroy-SemiBold ${hideSubText}`}
              >
                Development Company
              </span>
            ) : null}
          </h1>
        </div>
        {isHeadShow ? (
          <p className="text-[1.5rem] px-4 font-semibold">
            <span className="text-[#F7D927]">Brain Inventory:</span> {head1}
          </p>
        ) : null}
        <p className="text-[.875rem] opacity-50 p-4 ">{description}</p>
      </div>
    </div>
  );
};

export default SectionTwo;
