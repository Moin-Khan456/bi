import Image from "next/image";
import React from "react";
import Marquee from "../SolutionHealthcare/TiltMarquee.jsx";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link.js";

const Index = () => {
  return (
    <>
      <div className=" pt-72 lg:pt-36 relative container">
        <h2 className="MonumentBold text-2xl lg:text-[4rem] lg:leading-[5rem] px-2 lg:px-24 text-center absolute z-10 top-32 lg:top-16">
          Revitalize Healthcare Through Innovation
        </h2>
        <Image layout="responsive"
        srcSet="/image-320w.jpg 320w,
              /image-480w.jpg 480w,
              /image-800w.jpg 800w"
        sizes="(max-width: 320px) 280px,
             (max-width: 480px) 440px,
             800px"
          src="https://braininventory.s3.us-east-2.amazonaws.com/images/solution/Group+6969.png"
          alt="Healthcare Through Innovation"
          width={500}
          height={500}
          loading="lazy"
          className="w-[80px] absolute top-48 left-48 hidden lg:block"
        />
        <Image layout="responsive"
        srcSet="/image-320w.jpg 320w,
              /image-480w.jpg 480w,
              /image-800w.jpg 800w"
        sizes="(max-width: 320px) 280px,
             (max-width: 480px) 440px,
             800px"
          src="https://braininventory.s3.us-east-2.amazonaws.com/images/solution/Group+6969.png"
          alt="Healthcare Through Innovation"
          width={500}
          height={500}
          loading="lazy"
          className="w-[80px] absolute top-40 right-48 hidden lg:block"
        />
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center max-w-[1450px] relative z-20 px-2">
          <p className="lg:w-[350px] pb-32 lg:pb-0 text-sm text-slate-400">
            At Brain Inventory, we&apos;re leaders in the design and development
            of healthcare services. Our team of expert developers and designers
            are brimming with innovative ideas to transform your vision into
            reality.
          </p>
          <Image layout="responsive"
        srcSet="/image-320w.jpg 320w,
              /image-480w.jpg 480w,
              /image-800w.jpg 800w"
        sizes="(max-width: 320px) 280px,
             (max-width: 480px) 440px,
             800px"
            src="https://braininventory.s3.us-east-2.amazonaws.com/images/solution/healthcare/Group+7115.png"
            alt="Healthcare Software Development Company"
            width={800}
            height={800}
            fetchPriority="high"
            priority
            className=" lg:w-[700px] lg:h-[600px] "
          />

          <div className="">
            <Link href="#talk">
              <button className="flex items-center font-Satoshi font-bold text-xs rounded-full bg-gradient-to-r from-[#000076] to-[#7600EB] px-6 py-4 my-12">
                LEVERAGE THE POWER OF US &nbsp;{" "}
                <GoArrowUpRight className="font-extrabold text-3xl p-2 rounded-full bg-[#9347E7]" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
