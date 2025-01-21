import Image from "next/image";
import React from "react";

function staffBanner() {
  return (
    <div className="bg-hr-4  pt-20 lg:py-32 min-h-full lg:px-1 px-10">
      <div className=" container padding-left-all-section-1">
        <div className="grid lg:grid-cols-2 grid-cols-1">
          <div className="w-[80vw]">
            <h1 className="lg:text-7xl text-primaryBg text-4xl Gilroy-Bold">
              Hire Best Remote Developers by Brain Inventory
            </h1>
            <p className="pt-6 lg:pr-[14rem] pb-6 text-primaryBg text-lg ">
              If you want to increase your efficiency and speed up your product
              development, then you need to hire experienced developers.
            </p>
            <p className="lg:pr-[14rem] pb-6 text-primaryBg text-lg ">
              With our team of experienced developers, you can build large
              products faster than ever before. We&apos;re experienced in
              building apps for both enterprise and consumer markets, so we know
              how to take on any app project.
            </p>
            <p className="lg:pr-[14rem] pb-6 text-primaryBg text-lg ">
              We&apos;ll help you build a product that&apos;s ready for launch
              in no time at all and will be fully functional from day one.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default staffBanner;
