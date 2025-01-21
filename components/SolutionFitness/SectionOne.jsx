import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
const SectionOne = () => {
  return (
    <div className="relative bg-cover overflow-hidden bg-center h-[100%] max-h-screen bg-[url('https://braininventory.s3.us-east-2.amazonaws.com/images/fitness_banner.webp')] ">
      <div className="absolute top-10 -right-24 w-full">
        <Image
          src="https://braininventory.s3.us-east-2.amazonaws.com/images/solution/braininventory.in+spinner+white.png"
          alt="Fitness App Development Company"
          width={1200}
          height={1200}
          className="w-[16%] lg:w-[8%] absolute top-12 animate-spin-slow right-10 lg:right-48"
        />
      </div>
      <div className="bg-gradient-to-r from-black to-transparent">
        <div className="container py-44 px-12">
          <h3 className="MonumentRegular text-primaryBg text-sm">
            MOBILIZING FITNESS WITH INNOVATION
          </h3>
          <h2 className="Brinattan text-5xl text-primaryTx py-10 borderShadow"> 
            Fitness Meets Design
          </h2>
          <p className="lg:max-w-[38%] text-primaryBg opacity-70">
            At{" "}
            <Link href="/" className="text-[#2186ff]">
              Brain Inventory
            </Link>
            , we specialise in crafting bespoke services that revolutionise
            businesses and industries. With a keen focus on the fitness
            industry, we&apos;re here to take your business to another level.
          </p>
          <Link href="#talk">
            <button className="flex items-center font-Satoshi font-bold text-xs rounded-full bg-primaryTx text-primaryBg px-6 py-4 my-12">
              LEVERAGE THE POWER OF US &nbsp;{" "}
              <GoArrowUpRight className="font-extrabold text-3xl p-2 rounded-full " />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
