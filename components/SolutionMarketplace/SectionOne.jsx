import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
const SectionOne = () => {
  return (
    <div className="relative bg-cover overflow-hidden bg-center h-[100%] bg-[url('https://braininventory.s3.us-east-2.amazonaws.com/images/solution/marketplace/Group+7187.png')] ">
      <div className="container">
        <div className="py-36 px-12 flex flex-col justify-center text-center items-center">
          <h1
            className="text-6xl my-4 lg:w-[75%] MonumentRegular text-shadow-sharp"
            data-text="Transforming Marketplaces into Digital Powerhouse Economics"
          >
            Transforming Marketplaces into Digital Powerhouse Economics
          </h1>
          <p className="lg:w-[800px]">
            Imagine how your business could soar with a custom-made marketplace
            software that not only meets, but exceeds your expectations. Begin
            your digital journey with us for customized software, a scalable
            interface, and optimized performance.
          </p>
          <Link href="#talk">
            <button className="flex items-center font-Satoshi font-bold text-xs rounded-full bg-gradient-to-r from-[#000076] to-[#7600EB] px-6 py-4 my-12">
              LEVERAGE THE POWER OF US &nbsp;{" "}
              <GoArrowUpRight className="font-extrabold text-3xl p-2 rounded-full bg-[#9347e7]" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
