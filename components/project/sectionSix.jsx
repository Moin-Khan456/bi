import Image from "next/image";
import React from "react";

const Index = () => {
  return (
    <div className="pt-12 container">
      <div className="flex items-center">
        <div className="w-12 lg:w-32 h-2 bg-secondaryTx mr-4 lg:mr-12" />
        <Image
          src="https://braininventory.s3.us-east-2.amazonaws.com/images/Group+6426.png"
          alt="Custom Software Development Company | Application Development Company"
          width={500}
          height={500}
          className="w-36 lg:w-60 filter invert"
        />
        <h3 className="text-3xl lg:text-5xl font-bold Gilroy-SemiBold">
          {" "}
          Website
        </h3>
      </div>
      <div className="px-12 lg:px-96 min-w-full">
        <Image
          src="https://braininventory.s3.us-east-2.amazonaws.com/images/Group+6414.png"
          alt=""
          width={800}
          height={800}
          className="pt-4 lg:py-12"
        />
      </div>
    </div>
  );
};

export default Index;
