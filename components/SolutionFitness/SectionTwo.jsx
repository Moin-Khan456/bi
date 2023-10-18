import React from "react";

const SectionTwo = ({ title, head1, description, className, classText, hideSubText }) => {
  return (
    <div className={`${className}`}>
      <div className="container">
      <div className="flex lg:items-end flex-col md:flex-col lg:flex-row py-8 relative">
          <h1 className={`px-4 text-3xl md:text-5xl ${classText} lg:text-8xl monument w-full lg:w-[45%] lg:max-w-auto uppercase `}>{title} <span className={`lg:px-4 pb-3 text-[1.7rem] lg:ml-52 whitespace-nowrap lg:absolute bottom-10 left-[30rem] Gilroy-SemiBold ${hideSubText}`}>Development Company</span></h1>
        </div>
        <p className="text-3xl px-4">
          <span className="text-[#F7D927]">Brain Inventory:</span> {head1}
        </p>
        <p className="text-[1rem] opacity-50 p-4 ">{description}</p>
      </div>
    </div>
  );
};

export default SectionTwo;
