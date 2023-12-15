import Image from "next/image";
import React from "react";

export default function ChooseBraininventory({ reasons, subhead, alt }) {
  return (
    <div className="2xl:p-10 p-8 2xl:space-y-8 space-y-6">
      <div className="container padding-left-all-section-1">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
          <div>
            <h1 className="Gilroy-Bold text-4xl leading-[3rem]">
              Why Choose Brain Inventory for Your Next{" "}
              <span className="text-[#7600EB]">Assignment</span>
            </h1>
            <p className="Gilroy-Light text-lg opacity-60 pt-4 pb-6">
              {subhead}
            </p>
            {reasons &&
              reasons.map((ele, index) => (
                <div className="flex items-start" key={index}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 35 35"
                    className="relative top-[-8px] h-20 mr-2 max-w-[2rem] min-w-[1.5rem]"
                  >
                    <g
                      id="Group_6114"
                      data-name="Group 6114"
                      transform="translate(-1 -1)"
                    >
                      <path
                        id="Path_16511"
                        data-name="Path 16511"
                        d="M7,15.1l4.95,4.95L23.5,8.5"
                        transform="translate(3.25 4.225)"
                        fill="none"
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                      />
                      <path
                        id="Path_16512"
                        data-name="Path 16512"
                        d="M18.5,35A16.5,16.5,0,1,0,2,18.5,16.5,16.5,0,0,0,18.5,35Z"
                        fill="none"
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                      />
                    </g>
                  </svg>
                  <p className="Gilroy-Light text-lg opacity-60 pt-4 pb-6 ">
                    {ele}
                  </p>
                </div>
              ))}
            <a href="#talk">
              <button className="bg-engagedment h-12 flex justify-center items-center rounded-lg px-8 Gilroy-Bold mt-4">
                Get a Quote
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
            </a>
          </div>
          <div>
            <Image layout="responsive"
        srcSet="/image-320w.jpg 320w,
              /image-480w.jpg 480w,
              /image-800w.jpg 800w"
        sizes="(max-width: 320px) 280px,
             (max-width: 480px) 440px,
             800px" src="https://braininventory.s3.us-east-2.amazonaws.com/images/choose-b1.png" alt="Hire dedicated remote developers | Custom software development company" width={700} height={700} />
          </div>
        </div>
      </div>
    </div>
  );
}
