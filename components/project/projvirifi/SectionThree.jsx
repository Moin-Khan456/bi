import React from "react";
import Image from "next/image";
import designProcess from "../../../public/assets/virifi-assets/designProcess.png";
const Index = () => {
  return (
    <div className="py-8 relative flex flex-col justify-center bg-secondaryBg">
      <div className="container">
        <h3 className="text-3xl lg:text-6xl text-center text-secondaryTx py-8 Gilroy-Bold">
          Design <span className="text-primaryTx"> Process</span>
        </h3>
        <div className="px-4 lg:px-48 lg:py-12">
          <Image
            src={designProcess}
            width={800}
            height={200}
            className="w-full"
            alt="Custom Software Development Company | Application Development Company"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
