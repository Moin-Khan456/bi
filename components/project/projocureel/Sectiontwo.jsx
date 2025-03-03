import React from "react";
import Image from "next/image";
const Index = () => {
  return (
    <div className="relative flex flex-col lg:flex-row items-end justify-center bg-primaryBg max-w-full">
      <div className="bg-[#e8fdd0] lg:h-screen lg:w-[60%]">
        <h3 className="text-5xl Gilroy-bold text-secondaryTx font-bold w-[70%] px-8 pt-12">
          Get Inspired
        </h3>
        <Image
          src="https://braininventory.s3.us-east-2.amazonaws.com/images/ocureel/Group+6399.png"
          width={1000}
          height={1000}
          alt="Custom Software Development Company | Application Development Company"
          className="lg:w-[80%]"
        />
      </div>
      <div className="bg-[#e2e1fe] w-full lg:w-[40%] lg:h-[70vh]">
        <h3 className="text-4xl lg:text-5xl Gilroy-bold text-black font-bold w-[70%] p-8">
          Leaderboard - Earn Points
        </h3>
        <Image
          src="https://braininventory.s3.us-east-2.amazonaws.com/images/ocureel/Group+6400.png"
          width={1000}
          height={1000}
          alt="Custom Software Development Company | Application Development Company"
          className=""
        />
      </div>
      <h3 className="text-[3rem] transparent-text sm:text-8xl lg:absolute lg:top-10 lg:right-8 right-3">
        Website Version
      </h3>
    </div>
  );
};

export default Index;
