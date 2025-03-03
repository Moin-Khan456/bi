import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";
import { BiCheckCircle } from "react-icons/bi";
import Link from "next/link";
export default function HireBanner() {
  return (
    <main className="relative bg-no-repeat bg-center bg-cover  bg-[url('https://braininventory.s3.us-east-2.amazonaws.com/images/travel_banner.webp')]">
      <div className="flex flex-col justify-center h-screen padding-left-all-section-1 ">
        <h3 className="MonumentRegular text-4xl lg:text-[3.75rem] lg:leading-[4rem] sm:w-1/2 pt-16 text-primaryBg">
          Your Gateway to Global Adventures
        </h3>
        <p className="sm:w-1/2 text-xs pt-8 text-primaryBg">
          Welcome to Brain Inventory, Your gateway to the world of bespoke
          travel software! Explore, Innovate, and Transform your travel business
          with our cutting-edge technology services.
        </p>
        <Link href="#talk">
          <button className="w-fit flex items-center justify-center lg:justify-start font-Satoshi font-bold text-xs rounded-full bg-primaryTx text-primaryBg px-6 py-4 my-12">
            LEVERAGE THE POWER OF US &nbsp;{" "}
            <GoArrowUpRight className="font-extrabold text-3xl p-2 rounded-full " />
          </button>
        </Link>
      </div>
    </main>
  );
}
