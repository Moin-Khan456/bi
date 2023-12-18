import Image from "next/image";
import React from "react";
import { BiCheckCircle } from "react-icons/bi"

export default function ChooseBraininventory({ reasons, subhead, alt }) {
    return (
        <div className="2xl:p-10 p-8 2xl:space-y-8 space-y-6">
            <div className="container padding-left-all-section-1">
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
                    <div>
                        <h1 className="Gilroy-Bold text-4xl leading-[3rem]">
                            Why Choose Brain inventory for Your Next{" "}
                            <span className="text-[#7600EB]">Assignment</span>
                        </h1>
                        <p className="Gilroy-Light text-lg opacity-60 pt-4 pb-6">
                            {subhead}
                        </p>
                        {reasons && reasons.map((ele, index) => (
                            <div className="flex items-start" key={index}>
                                <div className="Gilroy-Light text-lg opacity-60 pt-4 pb-6">
                                    <div className="w-full flex">
                                        <span>
                                            <BiCheckCircle className={`mt-1 mr-2 text-[1rem]`} />
                                        </span>
                                        <p className="col-span-8">{ele}</p>
                                    </div>
                                </div>
                                <br /><br />
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
                    <div className="max-h-[55%]">
                        <Image  
        srcSet="/image-320w.jpg 320w,
              /image-480w.jpg 480w,
              /image-800w.jpg 800w"
        sizes="(max-width: 320px) 280px,
             (max-width: 480px) 440px,
             800px" src="https://braininventory.s3.us-east-2.amazonaws.com/images/choose-b1.png" alt={alt} width={800} height={800} className="object-contain" />
                    </div>
                </div>
            </div>
        </div>
    );
}
