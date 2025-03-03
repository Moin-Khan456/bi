import Image from "next/image";
import React from "react";
const Index = ({
  head,
  subhead,
  description,
  sectionFiveTableHead,
  sectionFiveTable,
  tableFooter,
  alt,
}) => {
  return (
    <div className="padding-left-all-section-1 rounded-md my-8 py-10 bg-[url('https://braininventory.s3.us-east-2.amazonaws.com/images/solution/grid-matrix.png')] bg-no-repeat bg-center">
      <div className="container padding-left-all-section">
        <div className="lg:grid lg:grid-cols-2 gap-6">
          <div className="p-6 lg:p-0">
            <h3 className="font-bold text-lg monument">RISE OF</h3>
            <h3 className="font-bold lg:text-7xl text-3xl lg:leading-[70px] uppercase lg:w-[400px] text-primaryTx monument">
              {head}
            </h3>
            <h3 className="font-bold text-lg mb-6 monument uppercase">
              {subhead}
            </h3>
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
        <div className="lg:flex block justify-between mt-8 lg:p-0 p-6 bg-primaryBg">
          <table className="border-[1px] border-secondaryTx">
            <tr className="border-secondaryTx border-[1px]">
              <th className="w-[5%] border-x-[1px] border-secondaryTx py-2">
                Supply Chain Management Company
              </th>
              <th className="w-[5%] border-x-[1px] border-secondaryTx py-2">
                Innovative Features
              </th>
              <th className="w-[5%] border-x-[1px] border-secondaryTx py-2">
                Client Base
              </th>
            </tr>
            <tr className="border-secondaryTx border-[1px]">
              <td className="px-4 py-2 border-x-[1px] border-secondaryTx text-center">
                FedEx
              </td>
              <td className="px-4 py-2 border-x-[1px] border-secondaryTx">
                Specializes in developing comprehensive transportation
                management systems and AI-powered predictive maintenance
              </td>
              <td className="px-4 py-2 border-x-[1px] border-secondaryTx text-center">
                More than 2.5 Million
              </td>
            </tr>
            <tr className="border-secondaryTx border-[1px]">
              <td className="px-4 py-2 border-x-[1px] border-secondaryTx text-center">
                UPS
              </td>
              <td className="px-4 py-2 border-x-[1px] border-secondaryTx">
                Features advanced supply chain analytics and cloud-based
                solutions for efficiency and scalability
              </td>
              <td className="px-4 py-2 border-x-[1px] border-secondaryTx text-center">
                Over 3 Million
              </td>
            </tr>
          </table>
        </div>
        <div className="pt-4 px-4">{tableFooter}</div>
      </div>
    </div>
  );
};
export default Index;
