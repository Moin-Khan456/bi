import { useEffect } from "react";
import Image from "next/image";

export default function HomeSectionOne({}) {
  return (
    <div className="h-screen min-h-[100vh] flex items-center relative pt-24 lg:pt-0">
      <div className="md:flex block items-center relative">
        <div className="lg:w-[55%] w-full  md:h-full">
          <div className="3xl:py-10 2xl:py-6 xl:py-6 2xl:px-14 xl:px-12 px-10 flex flex-col justify-center 2xl:space-y-5 xl:space-y-4 space-y-3 h-full">
            <h1 className="2xl:text-2xl lg:text-xl text-lg Gilroy-Bold text-white text-opacity-50 mt-[2rem] lg:mt-0">
              A Culture Rich Custom Software Development Company
            </h1>

            <div className="flex flex-col w-full px-4 lg:px-12 py-4">
              <h2 className="text-3xl">
                A digital production company focusing heavily on design &
                development based in indore. We create products that make people
                say oh damn!
              </h2>
            </div>
            <div className="rotating scroll-logo md:block hidden ">
              <Image
                srcSet="/image-320w.jpg 320w,
              /image-480w.jpg 480w,
              /image-800w.jpg 800w"
                sizes="(max-width: 320px) 280px,
             (max-width: 480px) 440px,
             800px"
                priority={true}
                src="https://braininventory.s3.us-east-2.amazonaws.com/images/scrollAnimation.svg"
                alt="custom software development solutions"
                width={1500}
                height={1500}
              />
            </div>
          </div>
        </div>
        <div className="md:w-[45%] w-full  md:h-full mt-14 md:mt-0">
          <div className="3xl:py-10 2xl:py-6 xl:py-6 2xl:px-14 xl:px-12 px-10 ">
            <video
              muted
              loop
              autoPlay={true}
              controls={false}
              className="relative md:top-[3rem] top-0"
              preload="metadata"
              alt="custom software development solutions"
            >
              <source
                src="https://braininventory.s3.us-east-2.amazonaws.com/videos/FinalVideo.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
