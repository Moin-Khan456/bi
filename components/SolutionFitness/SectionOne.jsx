import Image from "next/image";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
const SectionOne = () => {
  return (
    <div className="relative bg-cover bg-center h-[100%] lg:brightness-[1.35] bg-[url('https://braininventory.s3.us-east-2.amazonaws.com/images/solution/fitness/daniel-apodaca-WdoQio6HPVA-unsplash.png')] ">
    <div className="absolute top-10 right-0 w-full">
        <Image src="https://d1u4arv5y5eda6.cloudfront.net/images/solution/braininventory.in+spinner+white.png" alt="BrainInventory.in" width={1200} height={1200} className="w-[16%] lg:w-[8%] absolute top-12 animate-spin-slow right-10 lg:right-48" />
    </div>
      <div className="bg-gradient-to-r from-black to-transparent">
        <div className="container py-60 px-12  ">
          <h1 className="MonumentRegular text-sm">
            MOBILIZING FITNESS WITH INNOVATION
          </h1>
          <h2 className="Brinattan text-5xl text-[#F7D927] py-6">
            Fitness Meets Design
          </h2>
          <p className="lg:max-w-[38%]">
            At Brain Inventory, we specialize in crafting bespoke solutions that
            revolutionize businesses and industries. With a keen focus on the
            fitness industry, we’re here to take your business to another level.
          </p>
          <button className="flex items-center font-Satoshi font-bold text-xs rounded-full bg-gradient-to-r from-[#000076] to-[#7600EB] px-6 py-4 my-12">
            LEVERAGE THE POWER OF US &nbsp;{" "}
            <GoArrowUpRight className="font-extrabold text-3xl p-2 rounded-full bg-[#9347e7]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
