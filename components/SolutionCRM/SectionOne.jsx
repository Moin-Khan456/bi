import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";
import { BiCheckCircle } from "react-icons/bi";
export default function HireBanner() {
  return (
    <main className="relative bg-no-repeat bg-center bg-cover py-12 bg-[url('https://braininventory.s3.us-east-2.amazonaws.com/images/solution/crm/group.png')]">
      <div className="flex flex-col justify-center h-screen px-12 ">
        <h1 className="MonumentBold text-[3.75rem] leading-[4rem] w-1/2 pt-16">Transforming Businesses with CRM</h1>
        <p className="w-1/2 text-xs pt-8">Drastically transform your business with cutting edge CRM solutions developed by Brain Inventory. Dive into a world of seamless customer interactions, improved decision-making, and unbeatable growth.</p>
        <button className="w-fit flex items-center justify-center lg:justify-start font-Satoshi font-bold text-xs rounded-full bg-gradient-to-r from-[#000076] to-[#7600EB] px-6 py-4 my-12">
          LEVERAGE THE POWER OF US &nbsp;{" "}
          <GoArrowUpRight className="font-extrabold text-3xl p-2 rounded-full bg-[#9347e7]" />
        </button>
      </div>
    </main>
  );
}
