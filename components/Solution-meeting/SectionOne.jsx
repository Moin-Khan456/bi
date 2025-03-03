import React, { useEffect } from "react";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";
import Image from "next/image";
export default function HireBanner() {
  return (
    <main className="sm:h-screen pt-28 lg:pt-32 lg:pb-24 bg-primaryBg">
      <section className={`grid lg:grid-cols-2 grid-cols-1 gap-x-0 container`}>
        <section className="container padding-left-all-section-1 relative">
          <section className="ml-4 lg:ml-0 relative z-20">
            <h3 className="text-[2.96875rem] MonumentRegular leading-[4rem] mt-4 lg:!w-[900px]">
              Seamless Events, Limitless Possibilities:
            </h3>
            <h2 className="text-[4.88506rem] lg:w-[800px]  better-grade-white leading-[3.01138rem] my-[2rem]">
              Redefining Experiences with Precision Planning!
            </h2>
            <h6 className="text-[1rem]  lg:w-[600px] font-Satoshi opacity-50 mb-[2rem]">
              Experience the elegance of simplicity with Brain Inventory&apos;s
              Meeting & Event Management Solution, your one-stop software for
              comprehensive scheduling, planning, and executing fruitful events
              with utter finesse.
            </h6>
          </section>
          <Link href="#talk">
            <button className="flex items-center justify-center lg:justify-start font-Satoshi font-bold text-xs rounded-full bg-primaryTx text-primaryBg px-6 py-4 my-12 ml-4">
              LEVERAGE THE POWER OF US &nbsp;{" "}
              <GoArrowUpRight className="font-extrabold text-3xl p-2 rounded-full " />
            </button>
          </Link>
        </section>
        <section className="pt-0 pl-12 ed-tech-dropshadow relative z-50 left-[38rem] hidden lg:block w-[400px] bg-red-500">
          <Image
            src="https://braininventory.s3.us-east-2.amazonaws.com/images/solution/meeting-and-planning/Asset+2.png"
            alt="Custom Web Development"
            className={`rounded-2xl ed-tech-dropshadow absolute left-72 bottom-10`}
            fetchPriority="high"
            priority
            width={800}
            height={800}
          />
        </section>
      </section>
    </main>
  );
}
