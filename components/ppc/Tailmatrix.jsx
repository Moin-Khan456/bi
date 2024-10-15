import React from "react";

const TileMatrix = () => {
  return (
    <div className="container">
      <div className="max-w-full flex flex-col lg:flex-row justify-around m-4 lg:m-32">
        <div className="lg:w-1/2 text-white text-center lg:text-start">
          <h3 className="text-3xl lg:text-5xl Satoshi font-semibold lg:font-bold lg:w-[70%]">
            Custom social network software we built are used by millions across
            the world
          </h3>
          <p className="text-slate-400 Gilroy-Bold my-8 lg:w-[60%]">
            Applications that are designed and developed to handle large
            userbase from different countries
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex flex-col lg:mt-12">
            <span className="w-[160px] py-12 text-center text-white Satoshi bg-[#141414] m-2 hover:scale-[1.05] duration-150 ease-in-out">
              <p className="">CUSTOMERS</p>
              <h3 className="text-4xl font-semibold">105+</h3>
            </span>
            <span className="w-[160px] py-12 text-center text-white Satoshi bg-[#242424] m-2 hover:scale-[1.05] duration-150 ease-in-out">
              <p className="">INDUSTRY EXPERTS</p>
              <h3 className="text-4xl font-semibold">200+</h3>
            </span>
          </div>
          <div className="flex flex-col">
            <span className="w-[160px] py-12 text-center text-white Satoshi bg-[#242424] m-2 hover:scale-[1.05] duration-150 ease-in-out">
              <p className="">User</p>
              <h3 className="text-4xl font-semibold">100K+</h3>
            </span>
            <span className="w-[160px] py-12 text-center text-white Satoshi bg-[#141414] m-2 hover:scale-[1.05] duration-150 ease-in-out">
              <p className="">VERTICALS</p>
              <h3 className="text-4xl font-semibold">5+</h3>
            </span>
          </div>
          <div className="flex flex-col lg:mt-12">
            <span className="w-[160px] py-12 text-center text-white Satoshi bg-[#141414] m-2 hover:scale-[1.05] duration-150 ease-in-out">
              <p className="">COUNTRIES</p>
              <h3 className="text-4xl font-semibold">20+</h3>
            </span>
            <span className="w-[160px] py-12 text-center text-white Satoshi bg-[#242424] m-2 hover:scale-[1.05] duration-150 ease-in-out">
              <p className="">LANGUAGES</p>
              <h3 className="text-4xl font-semibold">15+</h3>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TileMatrix;
