import Image from "next/image";
import React from "react";
function Card({ tech }) {
  return (
    <div className="container">
      <div className="bg-[#1A1A1A] rounded-3xl shadow-lg py-8 md:flex md:justify-between mx-12 lg:mx-24">
        <div className="w-full">
          <h2 className="text-4xl font-bold text-white text-center mb-8">
            Tech Stacks Used
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:px-48 py-12">
            {tech?.map((ele, index) => (
              <div className="flex flex-col flex-wrap items-center my-8" key={index}>
                <Image src={ele.image} alt={ele.name} width={500} height={500} className="tech_img" />
                <p>{ele.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;