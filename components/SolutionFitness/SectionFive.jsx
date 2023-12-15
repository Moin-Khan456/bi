import Image from "next/image";
import React from "react";
const Index = ({
  head,
  subhead,
  description,
  sectionFiveTableHead,
  sectionFiveTable,
  tableFooter,
  alt
}) => {
  return (
    <div className="padding-left-all-section-1 rounded-md my-8 py-10 bg-[url('https://braininventory.s3.us-east-2.amazonaws.com/images/solution/grid-matrix.png')] bg-no-repeat bg-center">
      <div className="container padding-left-all-section">
        <div className="lg:grid lg:grid-cols-2 gap-6">
          <div className="p-6 lg:p-0">
            <h3 className="font-bold text-lg monument">RISE OF</h3>
            <h1 className="font-bold lg:text-7xl lg:leading-[70px] uppercase lg:w-[400px] text-[#F7D927] monument">
              {head}
            </h1>
            <h3 className="font-bold text-lg mb-6 monument uppercase">{subhead}</h3>
            <p className="text-sm text-gray-400 font-medium leading-5 font-Satoshi">
              {description}
            </p>
          </div>
          <div>
            <Image
              src="https://braininventory.s3.us-east-2.amazonaws.com/images/solution/abstract-yellow-rocket-ship-concept-cartoon-style.png"
              width={800}
              height={500}
              alt={alt}
              className="w-[800px]"
            ></Image>
          </div>
        </div>
        <div className="lg:flex block justify-between mt-8 lg:p-0 p-6 bg-black">
          <div className="border-sectionfive w-full">
            <h2 className="font-bold text-xl bottom-border-five p-4 font-Satoshi lg:whitespace-nowrap">
              {sectionFiveTableHead[0]}
            </h2>
            <ul className="">
              {sectionFiveTable[0]?.map((ele, index) => (
                <li className="bottom-border-five p-4 font-Satoshi opacity-50" key={index}>
                  {ele}
                </li>
              ))}
            </ul>
          </div>
          <div className="border-sectionfive w-full">
            <h2 className="font-bold text-xl bottom-border-five p-4 font-Satoshi">
              {sectionFiveTableHead[1]}
            </h2>
            <ul className="">
              {sectionFiveTable[1]?.map((ele, index) => (
                <li
                  className="bottom-border-five p-4 font-Satoshi lg:whitespace-nowrap opacity-50"
                  key={index}
                >
                  {ele}
                </li>
              ))}
            </ul>
          </div>
          <div className="border-sectionfive w-full ">
            <h2 className="font-bold text-xl bottom-border-five p-4 font-Satoshi">
              {sectionFiveTableHead[2]}
            </h2>
            <ul className="">
              {sectionFiveTable[2]?.map((ele, index) => (
                <li className="bottom-border-five p-4 font-Satoshi opacity-50" key={index}>
                  {ele}
                </li>
              ))}
            </ul>
          </div>
        </div>
          <div className="pt-4 px-4">{tableFooter}</div>
      </div>
    </div>
  );
};
export default Index;
