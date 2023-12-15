import Image from "next/image";
import React from "react";
const Index = () => {
  return (
    <div className="py-8 flex justify-center bg-[#EBF6F7]">
        <div className="overflow-hidden w-full">
          <Image layout="responsive"
        srcSet="/image-320w.jpg 320w,
              /image-480w.jpg 480w,
              /image-800w.jpg 800w"
        sizes="(max-width: 320px) 280px,
             (max-width: 480px) 440px,
             800px" width={1000} height={1000}
            src="https://braininventory.s3.us-east-2.amazonaws.com/images/project/fatoura/Group 6516.png"
            className="w-full lg:scale-x-[1.13] mt-24"
            alt=""
          />
      </div>
    </div>
  );
};

export default Index;
