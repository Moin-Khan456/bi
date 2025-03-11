import React from "react";
import Image from "next/image";
function choose({info}) {
  return (
    <div className="2xl:p-10 p-8 2xl:space-y-6 space-y-8 pt-24 pb-24 container">
      <div className="container padding-left-all-section">
        <h3 className="text-4xl Gilroy-Bold mb-2">
        Why Choose Brain Inventory
        </h3>
        <p className="text-base color-light">
          Using deep domain expertise of our software developers. we create
          impactful digital solutions that drive meaningful change with a
          strategic vision.
        </p>
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 mt-8">
         {
          info && info.map((data,index)=>(
            <div className="bg-primaryBg flex flex-col items-center" key={index}>
            <Image
              src={data.image}
              className={`text-center m-auto block w-20`}
              alt="Custom Software Development Company | Application Development Company"
              width={40}
              height={40}
            />
            <h3 className="text-center Gilroy-Bold mt-3 text-xl">{data.title.split(",")[0]}</h3>
            <h3 className="text-center Gilroy-Bold text-xl">{data.title.split(",")[1]}</h3>
          </div>
          ))
         }
        </div>
      </div>
    </div>
  );
}

export default choose;
