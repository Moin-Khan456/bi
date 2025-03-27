import React, { useEffect } from "react";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";
export default function HireBanner() {
  return (
    <main className="h-screen bg-secondaryTx pt-28 lg:pt-32 lg:pb-24 lg:bg-[url('https://braininventory.s3.us-east-2.amazonaws.com/images/energy_utility_banner.webp')] bg-contain bg-no-repeat bg-right">
      <section className={`grid lg:grid-cols-2 grid-cols-1 gap-x-0 container`}>
        <section className="container padding-left-all-section-1 relative">
          <section className="ml-4 mt-32 sm:mt-0 lg:ml-0 relative z-20">
            <h3 className="stroke-text-yellow MonumentBold uppercase leading-[1.3] lg:w-[700px] sm:text-[5.6rem] text-[3rem] my-8">
              Energizing Tomorrow
            </h3>
            <h2 className="text-[2.13638rem] lg:w-[700px] my-2 text-primaryBg opacity-50 MonumentRegular leading-[3.01138rem]">
              Powering Progress with Innovative Solutions!
            </h2>
            <h6 className="text-[1rem] text-primaryBg lg:w-[600px] font-Satoshi opacity-50 mb-[2rem]">
              Unlock the power of cutting-edge energy software development with
              Brain Inventory. We are laser-focused on providing energy and
              utility companies with comprehensive, efficient, and scalable
              software to transform their operations.
            </h6>
          </section>
        </section>
      </section>
    </main>
  );
}
