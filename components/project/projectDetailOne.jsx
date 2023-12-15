import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Index = ({ section }) => {
  return (
    <main className="container lg:min-h-screen">
      <div className="py-8 px-0 lg:px-12 flex flex-col items-center">
        <div className="flex flex-col items-center">
          <p className="hidden lg:block">{section.space}</p>
          <Image src={section.logo} alt={section.alt} width={800} height={800} className={`w-1/2 lg:w-1/4 ${section.alt === "MyFitMantra" && "lg:scale-[0.7]"}`} />
          <p className="hidden lg:block">{section.space}</p>
          <div className="w-[95%] flex justify-center py-4 lg:py-8">
            <Image src={section.image} alt={section.alt} width={800} height={800} preload="metadata" />
          </div>
          <p className="w-[70vw] lg:w-[400px] text-center lg:ml-12 py-4 lg:py-8">
            {section.brief}
          </p>
        </div>
        <div className="flex justify-center px-5 py-3 rounded-2xl mt-8 lg:px-8">
        </div> 
        <div className="flex justify-center py-8 items-center">
          <p>Made With</p> &nbsp;
          <Image src="https://braininventory.s3.us-east-2.amazonaws.com/images/project/XD.png" alt="" width={25} height={25} />
        </div>
      </div>
    </main>
  );
};

export default Index;
