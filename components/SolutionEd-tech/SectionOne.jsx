import React, { useEffect } from "react";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";
import { BiCheckCircle } from "react-icons/bi";
export default function HireBanner() {
  return (
    <main className="container padding-left-all-section-1 pt-28 lg:pt-32 lg:pb-24">
      <section className={`grid lg:grid-cols-2 grid-cols-1 gap-x-0`}>
        <section>
          <section className="ml-4 lg:ml-0 relative z-20">
            <h1 className="text-3xl lg:text-[4rem]  whitespace-nowrap MonumentBold uppercase leading-[1.3] mt-4">
              Igniting <br /> Education <br /> with Innovation
            </h1>
            <h2 className="text-sm font-Satoshi text-slate-400 leading-7 mb-4">
              Amplify your business potential with a top-tier ed-tech platform
              from Brain Inventory! We transform the educational landscape,
              making learning accessible, engaging, and impactful.
            </h2>
          </section>
          <button className="flex items-center justify-center lg:justify-start font-Satoshi font-bold text-xs rounded-full bg-gradient-to-r from-[#000076] to-[#7600EB] px-6 py-4 my-12">
            LEVERAGE THE POWER OF US &nbsp;{" "}
            <GoArrowUpRight className="font-extrabold text-3xl p-2 rounded-full bg-[#9347e7]" />
          </button>
        </section>
          <section className="pt-0 pl-12 ed-tech-dropshadow relative z-10 right-0 hidden lg:block">
            <Image
              src="https://braininventory.s3.us-east-2.amazonaws.com/images/solution/Ed-Tech/Group+7191.png"
              alt="Custom Web Development"
              className={`rounded-2xl w-[100%] lg:scale-[1.1] ed-tech-dropshadow absolute left-24`}
              fetchPriority="high"
              width={1900}
              height={1900}
            />
        </section>
      </section>
    </main>
  );
}
