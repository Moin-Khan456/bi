import React, { useEffect } from "react";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";
export default function HireBanner() {
  return (
    <main className="h-screen  pt-28 lg:pt-32 lg:pb-24 lg:bg-[url('https://braininventory.s3.us-east-2.amazonaws.com/images/solution/energy_industry/Mask+group.png')] bg-contain bg-no-repeat bg-right">
      <section className={`grid lg:grid-cols-2 grid-cols-1 gap-x-0 container`}>
        <section className="container padding-left-all-section-1 relative">
          <section className="ml-4 lg:ml-0 relative z-20">
            <h1 className="stroke-text-yellow MonumentBold uppercase leading-[1.3] mt-4 lg:!w-[900px]">
              Energizing Tomorrow
            </h1>
            <h2 className="text-[2.13638rem] lg:w-[500px]  MonumentRegular leading-[3.01138rem] mb-[2rem]">
              Powering Progress with Innovative Solutions!
            </h2>
            <h6 className="text-[1rem]  lg:w-[600px] font-Satoshi opacity-50 mb-[2rem]">
              Unlock the power of cutting-edge energy software development with
              Brain Inventory. We are laser-focused on providing energy and
              utility companies with comprehensive, efficient, and scalable
              software to transform their operations.
            </h6>
          </section>
          <Link href="#talk">
            <button className="flex items-center justify-center lg:justify-start font-Satoshi font-bold text-xs rounded-full bg-gradient-to-r from-[#000076] to-[#7600EB] px-6 py-4 my-12">
              LEVERAGE THE POWER OF US &nbsp;{" "}
              <GoArrowUpRight className="font-extrabold text-3xl p-2 rounded-full bg-[#9347e7]" />
            </button>
          </Link>
        </section>
      </section>
    </main>
  );
}
