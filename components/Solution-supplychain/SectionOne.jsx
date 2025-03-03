import React, { useEffect } from "react";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";
import Link from "next/link";
export default function HireBanner() {
  return (
    <main className="container sm:h-screen padding-left-all-section-1 pt-28 lg:pt-32 lg:pb-24 bg-right">
      <section className={`grid lg:grid-cols-2 grid-cols-1 gap-x-0`}>
        <section className="relative">
          <section className="ml-4 lg:ml-0 relative z-20">
            <h3 className="text-3xl lg:text-[2.972rem] MonumentBold uppercase leading-[1.3] mt-4 lg:!w-[900px]">
              Supply Chain Synergy:
            </h3>
            <h2 className="text-2xl lg:text-[2rem] MonumentBold uppercase leading-[3rem] mt-4 lg:!w-[1150px]">
              Unleashing Efficiency, Driving Excellence with Smart Solutions!
            </h2>
            <h2 className="text-md font-Satoshi text-secondaryTx opacity-50 leading-7 py-12 lg:w-[85%] lg:text-justify">
              Opt for{" "}
              <Link href="/" className="text-[#2186ff]">
                Brain Inventory&apos;s
              </Link>{" "}supply chain solutions to enact an orchestra of seamless order
              fulfillment, inventory planning, and transportation. Experience
              the unparalleled expertise of a platform that offers the
              market&apos;s best supply chain management software, which is
              solely focused on bolstering efficiency and optimizing your bottom
              line. 
            </h2>
          </section>
          <Link href="#talk">
            <button className="flex items-center justify-center lg:justify-start font-Satoshi font-bold text-xs rounded-full bg-primaryTx text-primaryBg ml-4 px-6 py-4">
              LEVERAGE THE POWER OF US &nbsp;{" "}
              <GoArrowUpRight className="font-extrabold text-3xl p-2 rounded-full " />
            </button>
          </Link>
        </section>
        <section className="pt-0 pl-12 ed-tech-dropshadow relative z-10 right-0 hidden lg:block">
          <Image
            src="https://braininventory.s3.us-east-2.amazonaws.com/images/solution/supplychain/Illustration.png"
            alt="Custom Web Development"
            className={`rounded-2xl w-[74%] ed-tech-dropshadow absolute top-36 left-52 right-0`}
            fetchPriority="high"
            width={1900}
            height={1900}
          />
        </section>
      </section>
    </main>
  );
}
