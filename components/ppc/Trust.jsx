import React from "react";
import Image from "next/image";

const TileMatrix = () => {
  return (
    <div className="container">
      <div className="max-w-full flex flex-col lg:flex-row justify-around my-4 lg:my-12 mx-4 lg:mx-36">
        <div className="lg:w-1/2 text-white text-center lg:text-start flex flex-col justify-center">
          <h1 className="text-4xl lg:text-5xl Satoshi font-bold lg:w-full">
            Your trusted growth partners
          </h1>
          <p className="text-slate-400 Gilroy-Bold my-8 lg:w-[80%] tracking-wide text-center lg:text-justify">
            We&apos;re not just about plain vanilla software outsourcing. Brain
            Inventory partners with you each step of the way to ensure that your
            custom social network becomes efficient, expedient and economical.
            We also help you with a host of allied services like:
          </p>
        </div>
        <div className="flex flex-col justify-center items-center lg:flex-row">
          <div className="flex flex-col">
            <span className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-[#141414] text-center flex flex-col items-center justify-center w-60 h-60 hover:scale-[1.05] duration-150 ease-in-out">
                <Image layout="responsive"
        srcSet="/image-320w.jpg 320w,
              /image-480w.jpg 480w,
              /image-800w.jpg 800w"
        sizes="(max-width: 320px) 280px,
             (max-width: 480px) 440px,
             800px"
                  src="https://braininventory.s3.us-east-2.amazonaws.com/images/Braininventory_icon+1.png"
                  width={1500}
                  height={1500}
                  className="mx-8 my-2 w-[25%]"
                  alt=""
                />
                <p className="w-1/2 Gilroy-Smibold">Use case development</p>
              </div>
              <div className="bg-[#242424] text-center flex flex-col items-center justify-center w-60 h-60 hover:scale-[1.05] duration-150 ease-in-out">
                <Image layout="responsive"
        srcSet="/image-320w.jpg 320w,
              /image-480w.jpg 480w,
              /image-800w.jpg 800w"
        sizes="(max-width: 320px) 280px,
             (max-width: 480px) 440px,
             800px"
                  src="https://braininventory.s3.us-east-2.amazonaws.com/images/Braininventory_icon+4.png"
                  width={1500}
                  height={1500}
                  className="mx-8 my-2 w-[25%]"
                  alt=""
                />
                <p className="w-1/2 Gilroy-Smibold">
                  Network scaling and user engagement
                </p>
              </div>
              <div className="bg-[#242424] text-center flex flex-col items-center justify-center w-60 h-60 hover:scale-[1.05] duration-150 ease-in-out">
                <Image layout="responsive"
        srcSet="/image-320w.jpg 320w,
              /image-480w.jpg 480w,
              /image-800w.jpg 800w"
        sizes="(max-width: 320px) 280px,
             (max-width: 480px) 440px,
             800px"
                  src="https://braininventory.s3.us-east-2.amazonaws.com/images/Braininventory_icon+3.png"
                  width={1500}
                  height={1500}
                  className="mx-8 my-2 w-[25%]"
                  alt=""
                />
                <p className="w-1/2 Gilroy-Smibold">Go-to-market strategies</p>
              </div>
              <div className="bg-[#141414] text-center flex flex-col items-center justify-center w-60 h-60 hover:scale-[1.05] duration-150 ease-in-out">
                <Image layout="responsive"
        srcSet="/image-320w.jpg 320w,
              /image-480w.jpg 480w,
              /image-800w.jpg 800w"
        sizes="(max-width: 320px) 280px,
             (max-width: 480px) 440px,
             800px"
                  src="https://braininventory.s3.us-east-2.amazonaws.com/images/Braininventory_icon+2.png"
                  width={1500}
                  height={1500}
                  className="mx-8 my-2 w-[25%]"
                  alt=""
                />
                <p className="w-1/2 Gilroy-Smibold">
                  Bespoke user research programmes
                </p>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TileMatrix;
