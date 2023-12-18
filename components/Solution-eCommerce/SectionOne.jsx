import React, { useEffect } from "react";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";
import { BiCheckCircle } from "react-icons/bi";
import Link from "next/link";
export default function HireBanner() {
  return (
    <main className="container h-screen padding-left-all-section-1 pt-28 lg:pt-32 lg:pb-24 lg:bg-[url('https://braininventory.s3.us-east-2.amazonaws.com/images/solution/eCommerce/Frame+7196.png')] bg-contain bg-right">
      <section className={`grid lg:grid-cols-2 grid-cols-1 gap-x-0`}>
        <section className="relative">
          <section className="bg-shadow rounded-full" />
          <section className="ml-4 lg:ml-0 relative z-20">
            <h1 className="text-3xl lg:text-[2.972rem] stroke-text-ecommerce MonumentBold uppercase leading-[1.3] mt-4 lg:!w-[900px]">
              Empowering Commerce, Enriching Experiences: Your Tomorrow, Our
              Technology!
            </h1>
            <h2 className="text-sm font-Satoshi text-slate-400 leading-7 mb-4 lg:w-[65%] lg:text-justify">
              Are you ready to evolve? Brain Inventory, a leading eCommerce
              development company, offers top-tier ecommerce services designed
              to propel your brand to new heights.
            </h2>
          </section>
          <Link href="#talk">
            <button className="flex items-center justify-center lg:justify-start font-Satoshi font-bold text-xs rounded-full bg-gradient-to-r from-[#000076] to-[#7600EB] px-6 py-4 my-12">
              LEVERAGE THE POWER OF US &nbsp;{" "}
              <GoArrowUpRight className="font-extrabold text-3xl p-2 rounded-full bg-[#9347e7]" />
            </button>
          </Link>
        </section>
        <section className="pt-0 pl-12 ed-tech-dropshadow relative z-10 right-0 hidden lg:block">
          <Image  
        srcSet="/image-320w.jpg 320w,
              /image-480w.jpg 480w,
              /image-800w.jpg 800w"
        sizes="(max-width: 320px) 280px,
             (max-width: 480px) 440px,
             800px"
            src="https://braininventory.s3.us-east-2.amazonaws.com/images/solution/eCommerce/Mask+group.png"
            alt="Custom Web Development"
            className={`rounded-2xl w-[54%] ed-tech-dropshadow absolute -right-9 bottom-5`}
            fetchPriority="high"
            width={1900}
            height={1900}
          />
        </section>
      </section>
    </main>
  );
}
