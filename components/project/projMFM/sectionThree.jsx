import React from "react";
import PrajectBranding from "./ProjectBranding.js";
import Image from "next/image";

const Index = ({ text, image }) => {
  return (
    <div>
      <PrajectBranding text={text} />
      <div  className="container">
        <div className="relative flex flex-col items-center py-8">
          <Image layout="responsive"
        srcSet="/image-320w.jpg 320w,
              /image-480w.jpg 480w,
              /image-800w.jpg 800w"
        sizes="(max-width: 320px) 280px,
             (max-width: 480px) 440px,
             800px"
            src={image}
            alt=""
            width={1500}
            height={1500}
            className="lg:w-[70%] mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
