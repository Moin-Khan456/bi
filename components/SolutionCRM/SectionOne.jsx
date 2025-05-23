import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";
export default function HireBanner() {
  return (
    <main className="relative bg-no-repeat bg-center bg-cover py-12 bg-[url('https://braininventory.s3.us-east-2.amazonaws.com/images/solution/crm/group.png')]">
      <div className="flex flex-col justify-center h-screen px-12 ">
        <h3 className="MonumentBold text-4xl lg:text-[3.75rem] lg:leading-[4rem] sm:w-1/2 pt-16 text-primaryBg">
          Transforming Businesses with CRM
        </h3>
        <p className="sm:w-1/2 text-xs pt-8 text-primaryBg">
          Drastically transform your business with cutting edge CRM software
          developed by Brain Inventory. Dive into a world of seamless customer
          interactions, improved decision-making, and unbeatable growth.
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
