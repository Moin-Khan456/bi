import Link from "next/link";
import React from "react";

export default function Engaged() {
  return (
    <div className="2xl:p-10 p-8 2xl:space-y-8 space-y-6">
      <div className="container padding-left-all-section-1">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
          <div>
            <h1 className="Gilroy-Bold text-6xl leading-[4.5rem]">
              How We Engage
            </h1>
            <p className="Gilroy-Light text-xl leading-9 opacity-60 pt-4">
              Scrap the constrained project collaboration models limiting your
              software capabilities and choose the flexible IT engagement models
              to work with us until your requirements are satisfied under your
              budget.
            </p>
            <Link href="/career">
              <button className="bg-engagedment h-12 flex justify-center items-center rounded-lg px-8 Gilroy-Bold mt-4">
                Schedule an Interview
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18.018"
                  height="17.535"
                  viewBox="0 0 18.018 17.535"
                  className="ml-2 h-3"
                >
                  <path
                    id="Path_16513"
                    data-name="Path 16513"
                    d="M13.25,21V6m0,0,7,7.2m-7-7.2-7,7.2"
                    transform="translate(22.25 -4.482) rotate(90)"
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                  />
                </svg>
              </button>
            </Link>
          </div>
          <div>
            <div className="bg-engagedment rounded-3xl p-10 lg:pl-16 mb-4">
              <p className="Gilroy-Light text-base">Hourly Hiring</p>
              <h1 className="Gilroy-Bold lg:text-5xl text-3xl py-2">Daily</h1>
              <h3 className="Gilroy-Medium text-2xl">Work Reporting</h3>
            </div>
            <div className="bg-engagedment rounded-3xl p-10 lg:pl-16 mb-4">
              <p className="Gilroy-Light text-base">Monthly Hiring</p>
              <h1 className="Gilroy-Bold lg:text-5xl text-3xl  py-2">
                160 Guaranteed
              </h1>
              <h3 className="Gilroy-Medium text-2xl">Working Hours</h3>
            </div>

            <div className="bg-engagedment rounded-3xl p-10 lg:pl-16 mb-4">
              <p className="Gilroy-Light text-base">Yearly Hiring</p>
              <a href="#talk">
                <button className="bg-white whitespace-nowrap text-black h-12 rounded-lg px-8 Gilroy-Bold mt-2">
                  Talk to us for Pricing
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
