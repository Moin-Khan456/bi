import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";
import { BiCheckCircle } from "react-icons/bi";
import Link from "next/link";
export default function HireBanner() {
  return (
    <main className="relative bg-no-repeat bg-center bg-cover  bg-[url('https://braininventory.s3.us-east-2.amazonaws.com/images/realState_banner.webp')]">
      <div className="flex flex-col justify-center h-screen padding-left-all-section-1 ">
        <div className="text-center">
          <h3 className="MonumentRegular !font-extrabold uppercase text-3xl lg:text-[4rem] pt-16">
            Revolutionizing Realty
          </h3>
          <h2 className="MonumentRegular !font-bold uppercase text-xl lg:text-[2.5rem] lg:pt-8">
            Your Software, Your Success!
          </h2>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-sm leading-7 font-semibold pt-8 lg:w-1/2 text-center">
            Experience the future of real estate with Brain Inventory&apos;s
            cutting-edge software development, dedicated to driving success in
            your realty ventures. Harness the power of our innovative real
            estate{" "}
            <Link
              href="/mobile-development/custom-mobile-app-development-company"
              className="text-[#2186ff]"
            >
              mobile app development
            </Link>{" "}
            for transformative industry solutions.
          </p>
          <Link href="#talk">
            <button className="w-fit flex items-center justify-center lg:justify-start font-Satoshi font-bold text-xs rounded-full bg-gradient-to-r from-[#000076] to-[#7600EB] px-6 py-4 my-12">
              LEVERAGE THE POWER OF US &nbsp;{" "}
              <GoArrowUpRight className="font-extrabold text-3xl p-2 rounded-full bg-[#9347e7]" />
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
