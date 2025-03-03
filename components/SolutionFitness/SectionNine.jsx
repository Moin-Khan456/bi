import Image from "next/image";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import Marquee from "react-easy-marquee";
import Link from "next/link";
const Index = ({
  brand,
  pageCategory,
  pageCategoryAbbr,
  src,
  alt,
  slow,
  fast,
}) => {
  const page = "BLOCKCHAIN APP DEVELOPMENT"
  const isTrue = page===pageCategory
  return (
    <div className="rounded-md my-8 py-10 lg:space-x-6 relative ">
      <div className=" sm:py-32 lg:pb-[22rem]">
        <Marquee duration={fast} reverse={true} className="mb-6 ">
          <div className="stroke-text-seven lg:text-8xl text-primaryTx uppercase text-5xl flex">
            {[1, 2].map((_, index) => (
              <h2 key={index}>{pageCategory}&nbsp;</h2>
            ))}
          </div>
        </Marquee>
        <Marquee duration={slow} className="mb-6">
          <div className="stroke-text-seven lg:text-8xl uppercase text-5xl flex">
            {" "}
            {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
              <h3 key={index}>{pageCategoryAbbr}&nbsp;</h3>
            ))}
          </div>
        </Marquee>
        <Marquee duration={fast} reverse className="mb-6">
          <div className="stroke-text-seven lg:text-8xl uppercase text-5xl flex">
            {[1, 2, 3, 4, 5].map((_, index) => (
              <h3 key={index}>{brand}&nbsp;&nbsp;</h3>
            ))}
          </div>
        </Marquee>
        <Marquee duration={slow} className="mb-6">
          <div className="stroke-text-seven lg:text-8xl uppercase text-5xl flex">
            {" "}
            {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
              <h3 key={index}>{pageCategoryAbbr}&nbsp;</h3>
            ))}
          </div>
        </Marquee>
        <Marquee duration={fast} reverse className="mb-6">
          <div className="stroke-text-seven lg:text-8xl uppercase text-5xl flex">
            {[1, 2].map((_, index) => (
              <h2 key={index}>{pageCategory}&nbsp;</h2>
            ))}
          </div>
        </Marquee>
      </div>
      <div className=" padding-left-all-section absolute top-0 left-0 right-0 lg:p-0 p-4">
        <div className={`sm:mt-inherit ${isTrue ? 'mt-[4.3rem]': 'mt-[1.3rem]'}`}>
          <Image
            src={src}
            width={500}
            height={400}
            alt={alt}
            className="m-auto block w-[330px] sm:w-[500px] mb-8"
          ></Image>
        </div>
        <div>
          <h2 className="text-center text-primaryTx font-Brinattan lg:text-6xl text-4xl pt-6 lg:py-10">
            Sharing Your Vision
          </h2>
          <p className="text-center lg:w-[60%] m-auto text-lg text-secondaryTx">
            We love create experiences that enable people to connect, express
            themselves and establish meaningful relationships
          </p>
          <Link href="#talk">
            <button
              className="flex items-center m-auto justify-center font-Satoshi font-bold text-xs bg-primaryBg rounded-full border border-primaryTx  px-8 py-4 my-12"
            >
              START PROJECT
              <GoArrowUpRight className="font-extrabold text-3xl ml-4 p-2 rounded-full" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Index;
