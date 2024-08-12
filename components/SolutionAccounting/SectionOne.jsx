import Link from "next/link";
import React, { useEffect } from "react";
import { GoArrowUpRight } from "react-icons/go";

export default function HireBanner() {
  return (
    <main className="container padding-left-all-section-1 pt-28 lg:pt-0 lg:pb-24 scale-y-110 bg-no-repeat bg-right min-h-screen lg:brightness-[1.35] bg-[url('https://braininventory.s3.us-east-2.amazonaws.com/images/accounting_banner.webp')]">
      <section className={`grid lg:grid-cols-2 grid-cols-1 gap-x-12 lg:pt-36`}>
        <section>
          <section className="ml-4 lg:ml-0">
            <h2 className="text-4xl lg:text-[3.5rem] MonumentRegular leading-[1.3] mt-4">
              Accounting, Redefined by Innovation
            </h2>
            <h2 className="text-sm font-Satoshi lg:opacity-50 font-extrabold lg:font-normal mt-48 lg:mt-0 leading-7 mb-4">
              Welcome to Brain Inventory - your one-stop solution for
              state-of-the-art accounting software! Excel beyond boundaries,
              streamline your financial tasks like never before with our
              cutting-edge accounting tools.
            </h2>
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
