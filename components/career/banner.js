import React from "react";
import Image from "next/image";
import HomeButton from "../buttons/HomeButton";
import Link from "next/link";

const Banner = () => {
  return (
    <>
      <div className="h-auto min-h-[65vh] pt-32 flex items-center relative">
        <div className="lg:w-[60%] w-full  h-full  relative">
          <div className="3xl:py-10 2xl:py-6 xl:py-6 2xl:px-14 xl:px-12 px-10 flex flex-col justify-center 2xl:space-y-5 xl:space-y-4 space-y-3 h-full">
            <h1 className="2xl:text-4xl xl:text-4xl mt-20 text-3xl stroke-text-3 Gilroy-Bold">
              The Right place for you | Career at Brain Inventory
            </h1>

            <h2 className="text-heading-1 Gilroy-Bold">
              lets do some great <br /> things together!
            </h2>

            <div className="flex flex-col">
              <div className="Gilroy-Light text-xl tracking-widest text-gray-50">
                While we are good at sign language, there are various other
                simpler ways to connect with us. Talk to us in person.
              </div>
            </div>

            <Link href="tel:+91-810-956-1401">
              <HomeButton>
                <span className="text-base">call us now!</span>
              </HomeButton>
            </Link>
          </div>
        </div>
        <div className="w-1/2 h-full lg:flex justify-center items-center hidden">
          <div className="w-[600px] h-[450px]  relative">
            <Image  
              width={1000}
              height={900}
              src={"https://braininventory.s3.us-east-2.amazonaws.com/images/carrer.png"}
              alt="Career at Brain Inventory"
            />
          </div>
        </div>
        <span
          id="circle"
          className="border absolute p-8 rounded-full border-blue -left-24 pointer-events-none"
        ></span>
      </div>
    </>
  );
};

export default Banner;