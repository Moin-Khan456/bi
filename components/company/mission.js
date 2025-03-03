import React from "react";
import Image from "next/image";

function mission({missionType}) {
  return (
    <div className="2xl:p-10 p-8 2xl:space-y-8 space-y-6">
      <div className="container padding-left-all-section">
        <div className="lg:flex justify-between">
          {missionType.map((el) => (
            <div key={el.id} className="flex justify-between mb-8">
              <div className="w-32 mr-2 relative">
                <Image
                  src={
                    el.image
                  }
                  width={100}
                  height={100}
                  alt="Brain Inventory"
                />
              </div>
              <div className="w-90">
                <h2 className="2xl:text-xl xl:text-lg text-xl Gilroy-Bold text-primaryTx">
                  {el.title}
                </h2>
                <p className="2xl:text-base xl:text-base text-lg Gilroy-Light">
                  {el.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default mission;
