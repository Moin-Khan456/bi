import Image from "next/image";
import React from "react";

const Index = () => {
  return (
    <div className="bg-primaryTx rounded-md my-8">
      <div className="container">
        <div className="my-8 py-12">
          <div className="flex items-center">
            <div className="w-12 lg:w-32 h-2 bg-primaryBg mr-4 lg:mr-12" />
            <Image
              src="https://braininventory.s3.us-east-2.amazonaws.com/images/Group+6425.png"
              alt="Custom Software Development Company | Application Development Company"
              width={700}
              height={700}
              className="w-28 lg:w-44"
            />
            <h3 className="text-3xl lg:text-5xl text-primaryBg font-bold Gilroy-SemiBold">
              Perspective
            </h3>
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            src="https://braininventory.s3.us-east-2.amazonaws.com/images/Group+6421.png"
            alt="Custom Software Development Company | Application Development Company"
            className="w-full py-4"
            width={900}
            height={900}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
