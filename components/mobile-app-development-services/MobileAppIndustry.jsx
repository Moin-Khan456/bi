import Image from "next/image";
import React from "react";

const MobileAppIndustry = ({ industry }) => {
  return (
    <div className="container 2xl:p-10 p-8 2xl:space-y-8 space-y-6">
      <h3 className="text-4xl Gilroy-Bold">
        Industries we serve for Mobile App Development
      </h3>
      {industry?.map((industries, index) => (
        <div className="flex flex-col sm:flex-row border-2 border-primaryTx  overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-primaryBg mt-4" key={index}>
          <div className="h-48 sm:h-auto sm:w-1/2 ">
            <Image
              src={industries.image}
              fetchPriority="high"
              loading="lazy"
              width={300}
              height={300}
              alt={industries.title}
              className="w-full h-full sm:object-contain"
            />
          </div>

          <div className=" p-6 sm:w-1/2">
            <h3 className="flex flex-col justify-between text-4xl Gilroy-Bold text-secondaryTx mt-2">
              {industries.title}
            </h3>

            <p className="flex flex-col justify-between text-lg Gilroy-SemiBold mt-4 line-clamp-3">
              {industries.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MobileAppIndustry;
