import React from "react";

const Culture = ({ categories }) => {
  return (
    <div className="2xl:p-10 p-8">
      <h2 className="text-3xl lg:text-4xl font-bold mb-4">
        {categories.title}
      </h2>
      <p className="text-lg text-secondaryTx mb-8">
        {categories.description}
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.content.map((feature, index) => (
          <div
            key={index}
            className="flex justify-center items-center border-2 border-primaryTx bg-secondaryBg h-[116px] w-full"
          >
            <h3 className="text-center text-xl Gilroy-SemiBold font-medium text-secondaryTx">
              {feature}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Culture;
