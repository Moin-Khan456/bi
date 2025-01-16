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
      <div className="flex flex-wrap justify-center gap-6">
        {categories.content.map((feature, index) => (
         <div class="flex justify-center items-center border-2 border-primaryTx bg-secondaryBg h-[116px] w-[285px] sm:w-[calc(50%-1.5rem)] md:w-[calc(33.333%-1.5rem)] lg:w-[calc(25%-1.5rem)] bg-development-simply">
         <h3 class="text-center text-xl Gilroy-SemiBold font-medium text-secondaryTx">{feature}</h3>
       </div>
        ))}
      </div>
    </div>
  );
};

export default Culture;
