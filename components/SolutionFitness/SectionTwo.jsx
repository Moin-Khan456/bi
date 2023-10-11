import React from "react";

const SectionTwo = ({ title, head1, description, className }) => {
  return (
    <div className={`${className}`}>
      <div className="container">
        <div className="flex lg:items-end flex-col md:flex-col lg:flex-row py-8">
          <h1 className="px-4 text-3xl md:text-5xl lg:text-8xl monument w-full lg:w-[45%] lg:max-w-auto uppercase">{title}</h1>
          <h6 className="px-4 pb-3 text-[1.7rem] lg:ml-24">Development Company</h6>
        </div>
        <p className="text-3xl px-4">
          <span className="text-[#F7D927]">Brain Inventory:</span> {head1}
        </p>
        <p className="text-[1rem] text-slate-400 p-4">{description}</p>
      </div>
    </div>
  );
};

export default SectionTwo;
