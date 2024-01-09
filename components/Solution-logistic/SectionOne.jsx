import React, { useEffect } from "react";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";
import Link from "next/link";
export default function HireBanner() {
  return (
    <main className="container h-screen padding-left-all-section-1 pt-28 lg:pt-32 lg:pb-24 bg-right">
      <section className={`grid lg:grid-cols-2 grid-cols-1 gap-x-0`}>
        <section className="relative">
          <section className="ml-4 lg:ml-0 relative z-20">
            <h1 className="text-2xl lg:text-[2.5rem] MonumentBold uppercase leading-[1.3] mt-4 lg:!w-[900px]">
              Navigating Tomorrow:
            </h1>
            <h1 className="text-2xl lg:text-[2.5rem] MonumentBold uppercase !leading-[3.5rem] mt-4 lg:!w-[700px]">
              Transforming Logistics with Smart Solutions Today!
            </h1>
            <h2 className="text-md font-Satoshi text-white opacity-50 leading-7 pb-12 lg:w-[85%] lg:text-justify">
            Navigating your way to streamlined transportation and logistics management has never been simpler. Unleashing the power of software, we at Brain Inventory bring innovation to your doorstep, transforming your logistic challenges into seamless operations.
            </h2>
          </section>
          <Link href="#talk">
            <button className="flex items-center justify-center lg:justify-start font-Satoshi font-bold text-xs rounded-full bg-gradient-to-r from-[#000076] to-[#7600EB] px-6 py-4">
              LEVERAGE THE POWER OF US &nbsp;{" "}
              <GoArrowUpRight className="font-extrabold text-3xl p-2 rounded-full bg-[#9347e7]" />
            </button>
          </Link>
        </section>
        <section className="pt-0 ed-tech-dropshadow relative z-10 right-0 hidden lg:block">
          <Image
            src="https://braininventory.s3.us-east-2.amazonaws.com/images/solution/Transport+%26+logistics/Transport+%26+logistics/Frame+7197.png"
            alt="Transportation and Logistics Software Development Services"
            className={`rounded-2xl w-full ed-tech-dropshadow absolute top-20 left-0 right-0`}
            fetchPriority="high"
            width={1900}
            height={1900}
          />
        </section>
      </section>
    </main>
  );
}
