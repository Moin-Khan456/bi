import React from "react";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

export default function SectionOne() {
  return (
    <main className="relative bg-no-repeat bg-center bg-cover  bg-[url('https://braininventory.s3.us-east-2.amazonaws.com/images/Support.jpg')]">
      <div className="flex flex-col justify-center items-center h-screen padding-left-all-section-1 text-center">
        <h1 className="MonumentBold text-4xl lg:text-[3.75rem] lg:leading-[4rem] pt-16 w-[70%]">
        Expert Software Maintenance and Support Services by Brain Inventory
        </h1>
        <p className="lg:leading-[1.5rem] pt-8 w-[50%]">
          Brain Inventory thinks the sole means to boost productivity and
          decrease problems is with consistent support. When software
          development concludes, we start software maintenance so your
          application keeps operating optimally. We have a team of dedicated
          developers and software maintenance specialists who look after your
          product at each phase and ensure it runs flawlessly.
        </p>
        <div>
          <Link href="#talk">
            <button className="w-fit flex items-center justify-center lg:justify-start font-Satoshi font-bold text-xs rounded-full bg-gradient-to-r from-[#000076] to-[#7600EB] px-6 py-4 my-12 text-center">
              GET CUSTOM QUOTES &nbsp;{" "}
              <GoArrowUpRight className="font-extrabold text-3xl p-2 rounded-full bg-[#9347e7]" />
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
