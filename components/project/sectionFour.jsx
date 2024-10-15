import React from "react";
import Carousel from "./projectDetailHoverCarousel";
import Image from "next/image.js";
const Index = ({ carouselImages }) => {
  return (
    <div className="pt-12 pb-0 my-8 relative flex flex-col justify-center">
      <div className="flex items-center">
        <div className="w-12 lg:w-32 h-2 bg-[#EBEBFC] opacity-50 mr-4 lg:mr-12" />
        <h3 className="text-3xl lg:text-5xl font-bold Gilroy-SemiBold">
          Dark UI/
        </h3>
        <Image
          src="https://braininventory.s3.us-east-2.amazonaws.com/images/Group+6424.png"
          alt="Custom Software Development Company | Application Development Company"
          width={700}
          height={700}
          className="w-28 lg:w-52"
        />
      </div>
      <div className="py-4">
        <Carousel images={carouselImages} />
      </div>
    </div>
  );
};

export default Index;
