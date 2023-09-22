import React from "react";
import PrajectBranding from "./ProjectBranding.jsx";
import Image from "next/image.js";

const Index = () => {
  return (
    <div>
      <PrajectBranding />
      <div className="relative flex flex-col items-center">
        <Image
          src="https://d1u4arv5y5eda6.cloudfront.net/images/project/1MacBook-Air.png"
          alt="Image"
          width={1500}
          height={1500}
          className="w-5/6 object-cover shadow-[3px 6px 50px white]"
        />
        <div className="absolute top-96 inset-0 hidden lg:block bg-gradient-to-b from-transparent to-black opacity-70 h-96 w-full" />
      </div>
    </div>
  );
};

export default Index;
