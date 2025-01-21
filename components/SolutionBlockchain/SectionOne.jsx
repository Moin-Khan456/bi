import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";
import { BiCheckCircle } from "react-icons/bi";
import Link from "next/link";
export default function HireBanner() {
  return (
    <main className="container padding-left-all-section-1 pt-28 lg:pt-32 lg:pb-24">
      <section className={`grid lg:grid-cols-2 grid-cols-1 gap-x-0`}>
        <section>
          <section className="ml-4 lg:ml-0">
            <h2 className="text-4xl lg:text-[3.5rem] text-primaryBg MonumentRegular leading-[1.3] mt-4">
              Unleashing Blockchain&apos;s Boundless Potential
            </h2>
            <h2 className="text-sm font-Satoshi text-primaryBg opacity-50 leading-7 mb-4">
              Embrace next-gen technology with our Blockchain Development
              Services for superior security, transparency and efficiency.
              Explore limitless possibilities with Blockchain, including
              unparalleled data security, complete transparency for fostering
              trust, and efficient process streamlining through smart contracts
              and task automation.
            </h2>
          </section>
          <Link href="#talk">
            <button className="flex items-center justify-center lg:justify-start font-Satoshi font-bold text-xs rounded-full text-primaryBg bg-primaryTx px-6 py-4 my-12">
              LEVERAGE THE POWER OF US &nbsp;{" "}
              <GoArrowUpRight className="font-extrabold text-3xl p-2 rounded-full " />
            </button>
          </Link>
        </section>
        <section>
          <section>
            <Image  
         
              src="https://braininventory.s3.us-east-2.amazonaws.com/images/solution/Group+7130.png"
              alt="Custom Web Development"
              className={`rounded-2xl w-[100%] lg:scale-125`}
              fetchPriority="high"
              width={1900}
              height={1900}
            />
          </section>
        </section>
      </section>
    </main>
  );
}
