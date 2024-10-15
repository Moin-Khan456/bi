import React from "react";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

export default function SectionOne() {
  return (
    <main className="relative bg-no-repeat bg-center bg-cover  bg-[url('https://braininventory.s3.us-east-2.amazonaws.com/images/sports_banner.webp')]">
      <div className="flex flex-col justify-center items-center h-screen padding-left-all-section-1 text-center">
        <h3 className="MonumentBold text-4xl lg:text-[3.75rem] lg:leading-[4rem] pt-16 w-[70%]">
          Now monetise your passion for sports Realty
        </h3>
        <p className="lg:leading-[1.5rem] pt-8 w-[50%]">
          Sports have been there forever and is growing faster than ever. The
          world of sports moves quickly, and Brain Inventory sports development
          keeps up by bringing clients visions to life through customized sports
          software development. We have experience building dynamic web apps
          ranging from fantasy sports to mobile platforms for football fans and
          more. With expertise in developing custom software specifically for
          the sports sector, we help companies, agencies, and sports platforms
          connect with supporters and players. 
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
