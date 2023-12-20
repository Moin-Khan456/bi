import Image from "next/image";
import React from "react";
const Index = () => {
  return (
    <div className="py-8 flex justify-center bg-[#EBF6F7]">
        <div className="overflow-hidden w-full">
          <Image  
          width={1000} height={1000}
            src="https://braininventory.s3.us-east-2.amazonaws.com/images/project/fatoura/Group 6516.png"
            className="w-full lg:scale-x-[1.13] mt-24"
            alt=""
          />
      </div>
    </div>
  );
};

export default Index;
